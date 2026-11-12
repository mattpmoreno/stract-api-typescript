// Live tests for the built SDK in dist/, following the flows in README.md.
//
// These call the real Stract API and spend a small amount of credits.
// STRACT_API_KEY and STRACT_API_BASE_URL are read from .env (see `npm run test:sdk`).
// Tests run against a deployment you choose (e.g. staging), never the SDK's
// built-in production host.
//
// Every sequence leaves the account as it found it: whatever a test creates it
// deletes or archives, and whatever it edits it restores.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { randomUUID } = require('node:crypto');
const {
  AccountApi,
  AccountCreditLedgerApi,
  AccountUserRole,
  ApiKeyApi,
  CatalogApi,
  Configuration,
  CreditsApi,
  DocumentApi,
  FieldApi,
  FieldType,
  JobApi,
  JobDocumentApi,
  JobStatus,
  LlmModelApi,
  ResponseError,
  StructApi,
  UserApi,
} = require('../dist');

const API_KEY = process.env.STRACT_API_KEY;
const BASE_URL = process.env.STRACT_API_BASE_URL;

const live = {
  skip:
    API_KEY && BASE_URL
      ? false
      : 'STRACT_API_KEY and STRACT_API_BASE_URL must both be set in .env',
};

const BATCH_TIMEOUT_MS = 120_000;
const POLL_INTERVAL_MS = 5_000;
const TERMINAL_STATUSES = new Set([JobStatus.Complete, JobStatus.Error, JobStatus.Cancelled]);

const config = new Configuration({ basePath: BASE_URL, accessToken: API_KEY });
const structs = new StructApi(config);
const fields = new FieldApi(config);
const jobs = new JobApi(config);
const jobDocs = new JobDocumentApi(config);
const documents = new DocumentApi(config);
const catalogs = new CatalogApi(config);
const users = new UserApi(config);
const accounts = new AccountApi(config);

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

const unique = (prefix) => `${prefix}-${randomUUID().slice(0, 8)}`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ids = (items) => new Set(items.map((i) => i.id));
const textFile = (name, content) => new File([content], name);

function syncTextRequest(name = 'order-1042', text = 'Two hamburgers and a large fries') {
  return { name, text, additionalInstructions: '', outputType: 'json' };
}

/** Poll a job until it reaches a terminal status and return it. */
async function waitForJob(job) {
  const deadline = Date.now() + BATCH_TIMEOUT_MS;
  let current = job;
  while (!current.isComplete && !TERMINAL_STATUSES.has(current.status)) {
    assert.ok(
      Date.now() < deadline,
      `Job ${job.id} did not finish in ${BATCH_TIMEOUT_MS / 1000}s; ` +
        `last status=${current.status}, notes=${JSON.stringify(current.notes)}`,
    );
    await sleep(POLL_INTERVAL_MS);
    current = await jobs.getJobById({ jobId: job.id });
  }
  return current;
}

/** Assert that `promise` rejects with a ResponseError whose status is in `statuses`. */
async function assertStatus(promise, statuses) {
  await assert.rejects(promise, (err) => {
    assert.ok(err instanceof ResponseError, `expected ResponseError, got ${err}`);
    assert.ok(
      statuses.includes(err.response.status),
      `expected status in [${statuses}], got ${err.response.status}`,
    );
    return true;
  });
}

/**
 * Admin-only endpoints return 401 for non-admin keys. Returns the result of
 * `fn`, or `undefined` after skipping the test when the key isn't permitted.
 */
async function skipIfUnauthorized(t, reason, fn) {
  try {
    return await fn();
  } catch (err) {
    if (err instanceof ResponseError && err.response.status === 401) {
      t.skip(reason);
      return undefined;
    }
    throw err;
  }
}

// --------------------------------------------------------------------------
// Shared fixtures: one struct (with a "hamburgers" number field) and one
// finished batch job, so only one job is paid for.
// --------------------------------------------------------------------------

let struct;
let finished; // { job, doc }

before(async () => {
  if (live.skip) return;

  struct = await structs.createStruct({ createStructRequest: { name: unique('sdk-test') } });
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

  const doc = await documents.uploadTextDocumentNoCatalog({
    uploadTextDocumentRequest: {
      name: unique('finished-job-doc'),
      text: 'Four hamburgers and a chocolate shake',
    },
  });
  let job;
  try {
    job = await jobs.createJob({
      structId: struct.id,
      createJobRequest: { additionalInstructions: '', documentIds: [doc.id] },
    });
    const done = await waitForJob(job);
    assert.equal(done.status, JobStatus.Complete, `Job ended as ${done.status}: ${done.notes}`);
    finished = { job: done, doc };
  } catch (err) {
    if (job) await jobs.archiveJob({ jobId: job.id }).catch(() => {});
    await documents.deleteDocument({ documentId: doc.id }).catch(() => {});
    throw err;
  }
});

after(async () => {
  if (live.skip) return;
  if (finished) {
    await jobs.archiveJob({ jobId: finished.job.id }).catch(() => {});
    await documents.deleteDocument({ documentId: finished.doc.id }).catch(() => {});
  }
  if (struct) await structs.archiveStruct({ structId: struct.id }).catch(() => {});
});

// --------------------------------------------------------------------------
// Offline tests (no API key or network needed)
// --------------------------------------------------------------------------

test('field types match the README', () => {
  assert.deepEqual(
    new Set(Object.values(FieldType)),
    new Set(['string', 'boolean', 'number', 'date', 'datetime', 'enum']),
  );
});

test('job statuses cover the full lifecycle', () => {
  assert.deepEqual(
    new Set(Object.values(JobStatus)),
    new Set(['not_started', 'in_progress', 'complete', 'error', 'cancelled']),
  );
});

test('account user roles are admin and base', () => {
  assert.deepEqual(new Set(Object.values(AccountUserRole)), new Set(['admin', 'base']));
});

test('every API group in the README is exported with its methods', () => {
  const expected = {
    StructApi: ['createStruct', 'getStructs', 'archiveStruct'],
    FieldApi: ['createFields', 'getFields', 'editField', 'deleteField'],
    JobApi: [
      'uploadTextDocumentAndRunJob',
      'uploadDocumentProcessAndRunJob',
      'createJob',
      'getJobById',
      'getJobOutputJson',
      'getJobOutputCsv',
      'getStructJobs',
      'getUserJobs',
      'cancelJob',
      'archiveJob',
    ],
    JobDocumentApi: ['getJobDocuments', 'getJobDocumentOutput'],
    DocumentApi: [
      'uploadDocument',
      'uploadDocumentNoCatalog',
      'uploadTextDocument',
      'uploadTextDocumentNoCatalog',
      'getUserDocuments',
      'getCatalogDocuments',
      'getDocumentsForJob',
      'getDocumentText',
      'getDocumentLink',
      'deleteDocument',
    ],
    CatalogApi: ['createCatalog', 'getCatalogs', 'deleteCatalog'],
    LlmModelApi: ['getLlmModels'],
    CreditsApi: ['getCurrentCredits', 'getCurrentOrgCredits'],
    AccountCreditLedgerApi: ['getAccountCreditLedgerForSpendingUser'],
    UserApi: ['getMyUser', 'editMyUser'],
    AccountApi: ['getAccount', 'editAccount', 'getAccountUsers', 'createAccountUser'],
    ApiKeyApi: ['getApiKeys'],
  };
  const sdk = require('../dist');
  for (const [cls, methods] of Object.entries(expected)) {
    assert.equal(typeof sdk[cls], 'function', `${cls} is not exported`);
    const instance = new sdk[cls](new Configuration());
    for (const method of methods) {
      assert.equal(typeof instance[method], 'function', `${cls}.${method} is missing`);
      assert.equal(
        typeof instance[`${method}Raw`],
        'function',
        `${cls}.${method}Raw is missing`,
      );
    }
  }
});

// --------------------------------------------------------------------------
// Authentication and errors
// --------------------------------------------------------------------------

test('an invalid API key raises a 401 ResponseError', live, async () => {
  const bad = new CreditsApi(new Configuration({ basePath: BASE_URL, accessToken: 'not-a-real-key' }));
  await assertStatus(bad.getCurrentCredits(), [401]);
});

test('unknown IDs raise a ResponseError', live, async () => {
  const missing = randomUUID();
  await assertStatus(jobs.getJobById({ jobId: missing }), [400, 401, 404]);
  await assertStatus(documents.deleteDocument({ documentId: missing }), [400, 401, 404]);
  await assertStatus(fields.deleteField({ fieldId: missing }), [400, 401, 404]);
});

// --------------------------------------------------------------------------
// Read-only endpoints
// --------------------------------------------------------------------------

test('lists LLM models', live, async () => {
  const models = await new LlmModelApi(config).getLlmModels();
  assert.ok(models.length > 0);
});

test('returns personal and organisation credits', live, async () => {
  const credits = new CreditsApi(config);
  assert.ok(await credits.getCurrentCredits());
  assert.ok(await credits.getCurrentOrgCredits());
});

test('returns the credit ledger', live, async () => {
  const ledger = await new AccountCreditLedgerApi(config).getAccountCreditLedgerForSpendingUser();
  assert.ok(Array.isArray(ledger));
});

// --------------------------------------------------------------------------
// Structs and fields
// --------------------------------------------------------------------------

test('the shared struct appears in the list', live, async () => {
  assert.ok(ids(await structs.getStructs()).has(struct.id));
});

test('the shared struct has its created field', live, async () => {
  const list = await fields.getFields({ structId: struct.id });
  assert.deepEqual(list.map((f) => f.name), ['hamburgers']);
});

test('struct: create -> list -> archive', live, async () => {
  const created = await structs.createStruct({ createStructRequest: { name: unique('sdk-struct') } });
  let archivedId;
  try {
    assert.ok(created.name.startsWith('sdk-struct-'));
    assert.ok(ids(await structs.getStructs()).has(created.id));
    // A fresh struct has no fields and no jobs.
    assert.deepEqual(await fields.getFields({ structId: created.id }), []);
    assert.deepEqual(await jobs.getStructJobs({ structId: created.id }), []);
  } finally {
    archivedId = await structs.archiveStruct({ structId: created.id });
  }
  assert.equal(archivedId, created.id);
});

test('field: create -> edit -> delete', live, async () => {
  const baseline = ids(await fields.getFields({ structId: struct.id }));

  const created = await fields.createFields({
    structId: struct.id,
    createFieldRequest: [
      { name: 'customer_name', description: 'Name of the customer', type: FieldType.String },
      {
        name: 'size',
        description: 'Size of the drink',
        type: FieldType.Enum,
        enumValues: ['small', 'large'],
      },
    ],
  });
  const createdIds = created.map((f) => f.id);
  try {
    assert.deepEqual(new Set(created.map((f) => f.name)), new Set(['customer_name', 'size']));
    const byName = Object.fromEntries(created.map((f) => [f.name, f]));
    assert.deepEqual(byName.size.enumValues, ['small', 'large']);

    // Edit a plain property.
    const renamed = await fields.editField({
      fieldId: byName.customer_name.id,
      editFieldRequest: { name: 'client_name', description: 'Name of the client' },
    });
    assert.equal(renamed.name, 'client_name');
    assert.equal(renamed.description, 'Name of the client');
    assert.equal(renamed.type, FieldType.String);

    // Edit enum values.
    const resized = await fields.editField({
      fieldId: byName.size.id,
      editFieldRequest: { enumValues: ['small', 'medium', 'large'] },
    });
    assert.deepEqual(resized.enumValues, ['small', 'medium', 'large']);

    const listed = new Map((await fields.getFields({ structId: struct.id })).map((f) => [f.id, f]));
    for (const id of createdIds) assert.ok(listed.has(id));
    assert.equal(listed.get(byName.customer_name.id).name, 'client_name');
  } finally {
    for (const fieldId of createdIds) {
      const deleted = await fields.deleteField({ fieldId });
      assert.equal(deleted.fieldId, fieldId);
    }
  }

  assert.deepEqual(ids(await fields.getFields({ structId: struct.id })), baseline);
});

// --------------------------------------------------------------------------
// Synchronous jobs
// --------------------------------------------------------------------------

test('sync text job (Raw) returns records or a job ID', live, async (t) => {
  const res = await jobs.uploadTextDocumentAndRunJobRaw({
    structId: struct.id,
    syncTextJobRequest: syncTextRequest(),
  });

  assert.ok([200, 202].includes(res.raw.status));
  // Both statuses carry the job ID header, per the README.
  assert.ok(res.raw.headers.get('stract-job-id'));

  if (res.raw.status === 202) {
    return t.skip('Job took longer than the sync wait time; returned 202');
  }

  const records = await res.value();
  assert.equal(records.length, 1);
  assert.equal(records[0].documentName, 'order-1042');
  assert.ok('hamburgers' in records[0]);
});

test('sync file job (Raw) returns records or a job ID', live, async (t) => {
  const res = await jobs.uploadDocumentProcessAndRunJobRaw({
    structId: struct.id,
    file: textFile('order-1043.txt', 'Three hamburgers and a soda'),
    additionalInstructions: '',
    outputType: 'json',
  });

  assert.ok([200, 202].includes(res.raw.status));
  assert.ok(res.raw.headers.get('stract-job-id'));

  if (res.raw.status === 202) {
    return t.skip('Job took longer than the sync wait time; returned 202');
  }

  const records = await res.value();
  assert.equal(records.length, 1);
  assert.ok('hamburgers' in records[0]);
});

// --------------------------------------------------------------------------
// Batch job (README flow)
// --------------------------------------------------------------------------

test('batch job flow: upload -> create -> poll -> output', live, async () => {
  const doc = await documents.uploadDocumentNoCatalog({
    file: textFile('order-1044.txt', 'One hamburger and two milkshakes'),
  });
  let job;
  try {
    job = await jobs.createJob({
      structId: struct.id,
      createJobRequest: { additionalInstructions: '', documentIds: [doc.id] },
    });
    const done = await waitForJob(job);
    assert.equal(done.status, JobStatus.Complete, `Job ended as ${done.status}: ${done.notes}`);

    const records = await jobs.getJobOutputJson({ jobId: job.id });
    assert.equal(records.length, 1);
    assert.ok('hamburgers' in records[0]);
  } finally {
    if (job) await jobs.archiveJob({ jobId: job.id });
    await documents.deleteDocument({ documentId: doc.id });
  }
});

// --------------------------------------------------------------------------
// User and account
// --------------------------------------------------------------------------

test('gets the current user', live, async () => {
  const user = await users.getMyUser();
  assert.ok(user.email);
  assert.ok(user.isActive);
  assert.ok(user.dtCreated instanceof Date);
});

test('edits the current user and restores it', live, async () => {
  const original = await users.getMyUser();
  const tempName = unique('sdk-test');
  let restored;
  try {
    const edited = await users.editMyUser({ editMyUserRequest: { firstName: tempName } });
    assert.equal(edited.firstName, tempName);
    assert.equal((await users.getMyUser()).firstName, tempName);
  } finally {
    restored = await users.editMyUser({ editMyUserRequest: { firstName: original.firstName } });
  }
  assert.equal(restored.firstName, original.firstName);
  assert.equal(restored.lastName, original.lastName);
});

test('gets the account', live, async () => {
  const account = await accounts.getAccount();
  assert.ok(account.name);
  assert.ok(Object.values(AccountUserRole).includes(account.accountUserRole));
});

test('edits the account and restores it', live, async (t) => {
  const original = await accounts.getAccount();
  const tempName = unique('sdk-test-account');

  const edited = await skipIfUnauthorized(t, 'Editing the account requires an admin key', () =>
    accounts.editAccount({ editAccountRequest: { name: tempName } }),
  );
  if (!edited) return;

  let restored;
  try {
    assert.equal(edited.name, tempName);
    assert.equal((await accounts.getAccount()).name, tempName);
  } finally {
    restored = await accounts.editAccount({ editAccountRequest: { name: original.name } });
  }
  assert.equal(restored.name, original.name);
  assert.equal(restored.id, original.id);
});

test('lists account users including the current user', live, async (t) => {
  const accountUsers = await skipIfUnauthorized(t, 'Listing account users requires an admin key', () =>
    accounts.getAccountUsers(),
  );
  if (!accountUsers) return;
  const me = await users.getMyUser();
  assert.ok(accountUsers.some((u) => u.suserId === me.id));
});

test('lists API keys including the one in use', live, async (t) => {
  const keys = await skipIfUnauthorized(t, 'Listing API keys requires an admin key', () =>
    new ApiKeyApi(config).getApiKeys(),
  );
  if (!keys) return;
  assert.ok(keys.length > 0);
  assert.ok(keys.some((k) => API_KEY.endsWith(k.keyLastFour)));
});

// --------------------------------------------------------------------------
// Catalogs and catalog documents: create -> upload -> read -> delete
// --------------------------------------------------------------------------

test('catalog documents lifecycle', live, async () => {
  const catalog = await catalogs.createCatalog({
    createCatalogRequest: { name: unique('sdk-catalog') },
  });
  let textDoc;
  try {
    assert.ok(ids(await catalogs.getCatalogs()).has(catalog.id));
    assert.deepEqual(await documents.getCatalogDocuments({ catalogId: catalog.id }), []);

    textDoc = await documents.uploadTextDocument({
      catalogId: catalog.id,
      uploadTextDocumentRequest: {
        name: 'catalog-note',
        text: 'Two hamburgers and a large fries',
      },
    });
    const fileDoc = await documents.uploadDocument({
      catalogId: catalog.id,
      file: textFile('catalog-file.txt', 'Three hamburgers and a soda'),
    });
    assert.equal(textDoc.catalogId, catalog.id);
    assert.equal(fileDoc.catalogId, catalog.id);
    assert.equal(fileDoc.extension.replace(/^\./, ''), 'txt');

    assert.deepEqual(
      ids(await documents.getCatalogDocuments({ catalogId: catalog.id })),
      new Set([textDoc.id, fileDoc.id]),
    );
    const userDocIds = ids(await documents.getUserDocuments());
    assert.ok(userDocIds.has(textDoc.id) && userDocIds.has(fileDoc.id));

    // Text is available immediately for text uploads.
    const text = await documents.getDocumentText({ catalogId: catalog.id, documentId: textDoc.id });
    assert.ok(text.text && text.text.includes('hamburgers'));

    // File uploads are processed asynchronously, so the text may be null for now.
    const fileText = await documents.getDocumentText({ catalogId: catalog.id, documentId: fileDoc.id });
    assert.ok(fileText.text === null || fileText.text.includes('hamburgers'));

    // The link points at a downloadable file, so it only exists for file uploads.
    const link = await documents.getDocumentLink({ documentId: fileDoc.id });
    assert.ok(link.link.startsWith('http'));

    // Deleting a single document leaves the rest of the catalog alone.
    const removed = await documents.deleteDocument({ documentId: fileDoc.id });
    assert.equal(removed.documentId, fileDoc.id);
    assert.deepEqual(
      ids(await documents.getCatalogDocuments({ catalogId: catalog.id })),
      new Set([textDoc.id]),
    );
  } finally {
    // Deleting the catalog also deletes any documents still in it.
    await catalogs.deleteCatalog({ catalogId: catalog.id });
  }

  assert.ok(!ids(await catalogs.getCatalogs()).has(catalog.id));
  assert.ok(!ids(await documents.getUserDocuments()).has(textDoc.id));
});

// --------------------------------------------------------------------------
// Documents without a catalog: upload -> read -> delete
// --------------------------------------------------------------------------

test('text document without a catalog: lifecycle', live, async () => {
  const doc = await documents.uploadTextDocumentNoCatalog({
    uploadTextDocumentRequest: { name: unique('sdk-text-doc'), text: 'One hamburger, no onions' },
  });
  let removed;
  try {
    assert.ok(ids(await documents.getUserDocuments()).has(doc.id));
    const text = await documents.getDocumentText({ catalogId: doc.catalogId, documentId: doc.id });
    assert.ok(text.text && text.text.includes('hamburger'));
  } finally {
    removed = await documents.deleteDocument({ documentId: doc.id });
  }
  assert.equal(removed.documentId, doc.id);
  assert.ok(!ids(await documents.getUserDocuments()).has(doc.id));
});

test('file document without a catalog: lifecycle', live, async () => {
  const doc = await documents.uploadDocumentNoCatalog({
    file: textFile(`${unique('sdk-file-doc')}.txt`, 'Five hamburgers'),
  });
  let removed;
  try {
    assert.equal(doc.extension.replace(/^\./, ''), 'txt');
    assert.ok(ids(await documents.getUserDocuments()).has(doc.id));
    assert.ok((await documents.getDocumentLink({ documentId: doc.id })).link.startsWith('http'));
  } finally {
    removed = await documents.deleteDocument({ documentId: doc.id });
  }
  assert.equal(removed.documentId, doc.id);
  assert.ok(!ids(await documents.getUserDocuments()).has(doc.id));
});

// --------------------------------------------------------------------------
// Jobs: read endpoints over one finished job (archived in the after hook)
// --------------------------------------------------------------------------

test('finished job is listed', live, async () => {
  const { job } = finished;
  assert.ok(ids(await jobs.getStructJobs({ structId: struct.id })).has(job.id));
  assert.ok(ids(await jobs.getUserJobs()).has(job.id));
  assert.equal((await jobs.getJobById({ jobId: job.id })).structId, struct.id);
});

test('finished job documents', live, async () => {
  const { job, doc } = finished;
  const forJob = await documents.getDocumentsForJob({ jobId: job.id });
  assert.deepEqual(forJob.map((d) => d.id), [doc.id]);

  const list = await jobDocs.getJobDocuments({ jobId: job.id });
  assert.equal(list.length, 1);
  assert.equal(list[0].jobId, job.id);
  assert.equal(list[0].documentId, doc.id);
  assert.equal(list[0].status, JobStatus.Complete);
});

test('finished job document output', live, async () => {
  const { job } = finished;
  const [jobDoc] = await jobDocs.getJobDocuments({ jobId: job.id });

  const output = await jobDocs.getJobDocumentOutput({ jobDocId: jobDoc.id });
  assert.ok(output);
  assert.equal(output.jobDocumentId, jobDoc.id);
  assert.ok('hamburgers' in output.data);
});

test('finished job outputs as JSON and CSV', live, async () => {
  const { job } = finished;

  const records = await jobs.getJobOutputJson({ jobId: job.id });
  assert.equal(records.length, 1);
  assert.ok('hamburgers' in records[0]);

  const csv = await jobs.getJobOutputCsv({ jobId: job.id });
  const [header, ...rows] = String(csv).trim().split(/\r?\n/);
  assert.ok(header.includes('document_name'));
  assert.ok(header.includes('hamburgers'));
  assert.equal(rows.length, 1);
});

// --------------------------------------------------------------------------
// Jobs: create -> cancel -> archive
// --------------------------------------------------------------------------

test('job: create -> cancel -> archive', live, async () => {
  const doc = await documents.uploadTextDocumentNoCatalog({
    uploadTextDocumentRequest: { name: unique('cancel-job-doc'), text: 'Six hamburgers and nothing else' },
  });
  let job;
  try {
    job = await jobs.createJob({
      structId: struct.id,
      createJobRequest: { additionalInstructions: '', documentIds: [doc.id] },
    });
    const cancelled = await jobs.cancelJob({ jobId: job.id });
    assert.equal(cancelled.id, job.id);
    // If the job was fast enough to finish before the cancel landed, that's fine too.
    assert.ok(TERMINAL_STATUSES.has(cancelled.status), `unexpected status ${cancelled.status}`);
  } finally {
    if (job) {
      const archivedId = await jobs.archiveJob({ jobId: job.id });
      assert.equal(archivedId, job.id);
    }
    await documents.deleteDocument({ documentId: doc.id });
  }
});

test('job over a whole catalog', live, async () => {
  const catalog = await catalogs.createCatalog({
    createCatalogRequest: { name: unique('sdk-job-catalog') },
  });
  let job;
  try {
    await documents.uploadTextDocument({
      catalogId: catalog.id,
      uploadTextDocumentRequest: { name: 'catalog-order', text: 'Seven hamburgers' },
    });
    job = await jobs.createJob({
      structId: struct.id,
      createJobRequest: { additionalInstructions: '', catalogId: catalog.id },
    });
    assert.equal(job.catalogId, catalog.id);
    // Don't pay for the analysis; the point is that the catalog was accepted.
    await jobs.cancelJob({ jobId: job.id });
  } finally {
    if (job) await jobs.archiveJob({ jobId: job.id });
    await catalogs.deleteCatalog({ catalogId: catalog.id });
  }

  assert.ok(!ids(await catalogs.getCatalogs()).has(catalog.id));
});

// --------------------------------------------------------------------------
// asyncio-equivalent usage: concurrent requests on one config
// --------------------------------------------------------------------------

test('concurrent requests with Promise.all', live, async () => {
  const models = new LlmModelApi(config);
  const [first, second] = await Promise.all([models.getLlmModels(), models.getLlmModels()]);
  assert.ok(first.length > 0);
  assert.equal(second.length, first.length);
});
