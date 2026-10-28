# Stract API TypeScript SDK

TypeScript client for [Stract API](https://stract-api.com).

Define a **struct**, give it **fields**, and run a **job** against text or documents to get back one record per document.

- API reference: [docs.stract-api.com](https://docs.stract-api.com)
- OpenAPI spec: [api.stract-api.com/spec/openapi.yaml](https://api.stract-api.com/spec/openapi.yaml)
- API quick start: [stract-api.com/guide/quick-start-api](https://stract-api.com/guide/quick-start-api/)

## Installation

```bash
npm install stract-api
```

Requires Node.js 20 or later.

## Authentication

Requests are authenticated with an API key, sent as a bearer token. To create one, sign in to the Stract app and go to **Account → API Keys**. Additional keys require a Team or Enterprise subscription.

Create one `Configuration` with your API key:

```ts
import { Configuration } from 'stract-api';

const config = new Configuration({ accessToken: process.env.STRACT_API_KEY });
```

Keep your API key out of source control. Load it from an environment variable or a secrets manager.

## API groups

Endpoints are grouped by area, and each group is its own class. Create an instance for each group you use, passing the same `config` to each:

```ts
import { StructApi, FieldApi, JobApi, DocumentApi } from 'stract-api';

const structs = new StructApi(config);
const fields = new FieldApi(config);
const jobs = new JobApi(config);
const documents = new DocumentApi(config);
```

| Class | Methods |
|---|---|
| `StructApi` | `createStruct`, `getStructs`, `archiveStruct` |
| `FieldApi` | `createFields`, `getFields`, `editField`, `deleteField` |
| `JobApi` | `uploadTextDocumentAndRunJob`, `uploadDocumentProcessAndRunJob`, `createJob`, `getJobById`, `getJobOutputJson`, `getJobOutputCsv`, `getStructJobs`, `getUserJobs`, `cancelJob`, `archiveJob` |
| `JobDocumentApi` | `getJobDocuments`, `getJobDocumentOutput` |
| `DocumentApi` | `uploadDocument`, `uploadDocumentNoCatalog`, `uploadTextDocument`, `uploadTextDocumentNoCatalog`, `getUserDocuments`, `getCatalogDocuments`, `getDocumentsForJob`, `getDocumentText`, `getDocumentLink`, `deleteDocument` |
| `CatalogApi` | `createCatalog`, `getCatalogs`, `deleteCatalog` |
| `LlmModelApi` | `getLlmModels` |
| `CreditsApi` | `getCurrentCredits`, `getCurrentOrgCredits` |
| `AccountCreditLedgerApi` | `getAccountCreditLedgerForSpendingUser` |
| `UserApi` | `getMyUser`, `editMyUser` |
| `AccountApi` | `getAccount`, `editAccount`, `getAccountUsers`, `createAccountUser` |
| `ApiKeyApi` | `getApiKeys` |

The examples below use the instances created above.

## Quick start

### 1. Create a struct

A struct describes the data you want extracted.

```ts
const struct = await structs.createStruct({
  createStructRequest: { name: 'Restaurant orders' },
});
```

### 2. Add fields

Each field has a name, a description that guides the extraction, and a type.

```ts
import { FieldType } from 'stract-api';

await fields.createFields({
  structId: struct.id,
  createFieldRequest: [
    {
      name: 'hamburgers',
      description: 'Number of hamburgers the customer ordered',
      type: FieldType.Number,
    },
  ],
});
```

Field types: `string`, `boolean`, `number`, `date`, `datetime`, `enum`.

### 3. Extract data from text

For synchronous jobs, always call the `Raw` variant of the method and check the status before reading the result. See [Why use `Raw` for synchronous jobs](#why-use-raw-for-synchronous-jobs).

```ts
const res = await jobs.uploadTextDocumentAndRunJobRaw({
  structId: struct.id,
  syncTextJobRequest: {
    name: 'order-1042',
    text: 'Two hamburgers and a large fries',
    additionalInstructions: '',
    outputType: 'json',
  },
});

if (res.raw.status === 202) {
  // Still running: save the job ID and fetch the output later.
  const jobId = res.raw.headers.get('stract-job-id');
} else {
  const records = await res.value();
  console.log(records);
  // [{ documentName: 'order-1042', hamburgers: 2,}]
}
```

### 4. Extract data from a file

```ts
import { readFile } from 'node:fs/promises';

const res = await jobs.uploadDocumentProcessAndRunJobRaw({
  structId: struct.id,
  file: new File([await readFile('invoice.pdf')], 'invoice.pdf'),
  additionalInstructions: 'Focus on extracting financial figures only',
  outputType: 'json',
});

if (res.raw.status === 202) {
  const jobId = res.raw.headers.get('stract-job-id');
} else {
  const records = await res.value();
}
```

Pass a `File` (not a bare `Blob`) so the upload carries a file name. The API uses the extension to decide how to process it.

Supported file types include PDF, images (PNG, JPEG, WebP, HEIC, TIFF, AVIF, BMP), Office documents (DOC/DOCX, XLS/XLSX, PPT/PPTX), email (EML, MSG), RTF, and text formats (TXT, CSV, JSON, XML, HTML, Markdown, YAML and more). Audio is not supported on this endpoint.

## Synchronous vs. batch jobs

`uploadTextDocumentAndRunJob` and `uploadDocumentProcessAndRunJob` upload, analyze, and return results in a single request. They work best for short documents (under about 20,000 characters).

| Limit | Value |
|---|---|
| File size | 100 MB |
| Raw text files (.txt, .csv, .json, …) | 10 MB |
| Text request body | 10 MB |
| Wait time before returning `202` | About 100 seconds |

### Why use `Raw` for synchronous jobs

Every endpoint has two methods: a plain one (`uploadTextDocumentAndRunJob`) that returns the parsed result, and a `Raw` one (`uploadTextDocumentAndRunJobRaw`) that also exposes the HTTP status and headers.

If a synchronous job takes longer than the wait time, the API responds with `202` and the job keeps running. The response body is then an error message rather than records, and the job ID is only in the `stract-job-id` header. The plain method treats `202` as success, tries to parse the body as records, and throws a `TypeError`, so you lose the job ID. The `Raw` method lets you check `res.raw.status` first and read the job ID from `res.raw.headers`. Use it to poll the job and fetch its output, as shown below.

`200`, `202` and `422` responses from a synchronous job include `stract-document-id` and `stract-job-id` headers, so you can look up the document and job later.

### Batch jobs

For larger documents, or many documents at once, upload first and run an asynchronous job:

```ts
// Upload a document
const doc = await documents.uploadDocumentNoCatalog({
  file: new File([await readFile('contract.pdf')], 'contract.pdf'),
});

// Start a job across one or more documents
const job = await jobs.createJob({
  structId: struct.id,
  createJobRequest: {
    additionalInstructions: '',
    documentIds: [doc.id],
  },
});

// Poll until the job finishes
let current = job;
while (!current.isComplete) {
  await new Promise((r) => setTimeout(r, 5000));
  current = await jobs.getJobById({ jobId: job.id });
}

// Fetch the results
if (current.status === 'complete') {
  const records = await jobs.getJobOutputJson({ jobId: job.id });
}
```

To upload into a catalog, use `uploadDocument({ catalogId, file })` instead. A job can also run against every document in a catalog: pass `catalogId` instead of `documentIds`.

## Choosing a model

List the available LLM models with `getLlmModels()`, then pass a model's ID as `llmModelId` on any job request. If you omit it, the job uses the default model.

```ts
import { LlmModelApi } from 'stract-api';

const models = await new LlmModelApi(config).getLlmModels();
```

## Error handling

Non-2xx responses throw a `ResponseError`. The underlying `Response` is available on `error.response`.

```ts
import { ResponseError } from 'stract-api';

try {
  const res = await jobs.uploadTextDocumentAndRunJobRaw({ /* ... */ });
} catch (err) {
  if (err instanceof ResponseError) {
    console.error(err.response.status, await err.response.json());
  }
  throw err;
}
```

Common statuses:

| Status | Meaning |
|---|---|
| `400` | Invalid request, unsupported file type, or file too large |
| `401` | Missing or invalid API key, or not permitted |
| `402` | Not enough credits |
| `422` | The job finished without producing output |

## Credits

Processing documents uses credits. Check your balance with `CreditsApi`, and see the history with `AccountCreditLedgerApi`:

```ts
import { CreditsApi, AccountCreditLedgerApi } from 'stract-api';

const credits = await new CreditsApi(config).getCurrentCredits();
const orgCredits = await new CreditsApi(config).getCurrentOrgCredits();
const ledger = await new AccountCreditLedgerApi(config).getAccountCreditLedgerForSpendingUser();
```

## Development

This SDK is generated from the OpenAPI spec with [OpenAPI Generator](https://openapi-generator.tech) (`typescript-fetch`). Code in `src/` is generated. Don't edit it by hand, because the next generation will overwrite it.

Requirements: Node.js 20+ and Java 11+.

```bash
npm install
npm run generate   # regenerate src/ from the live spec
npm run build      # compile to dist/
npm run test:smoke # run the built SDK against the live API
```

The smoke test reads `STRACT_API_KEY` from a `.env` file in the repo root.

## Support

Questions, or need a file type that isn't supported? Contact [matt@stract-api.com](mailto:matt@stract-api.com).

## License

[MIT](LICENSE)
