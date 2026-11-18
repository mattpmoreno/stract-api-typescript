# JobApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveJob**](JobApi.md#archivejob) | **POST** /job/{jobId}/archive | Archive a job |
| [**cancelJob**](JobApi.md#canceljob) | **POST** /job/{jobId}/cancel | Cancel a job |
| [**createJob**](JobApi.md#createjoboperation) | **POST** /struct/{structId}/job | Create an extraction job |
| [**getJobById**](JobApi.md#getjobbyid) | **GET** /job/{jobId} | Get a job |
| [**getJobOutputCsv**](JobApi.md#getjoboutputcsv) | **GET** /job/{jobId}/output_csv | Download job output as CSV |
| [**getJobOutputJson**](JobApi.md#getjoboutputjson) | **GET** /job/{jobId}/output_json | Download job output as JSON |
| [**getStructJobs**](JobApi.md#getstructjobs) | **GET** /struct/{structId}/job | List jobs for a struct |
| [**getUserJobs**](JobApi.md#getuserjobs) | **GET** /job | List all jobs |
| [**uploadDocumentProcessAndRunJob**](JobApi.md#uploaddocumentprocessandrunjob) | **POST** /struct/{structId}/job/sync | Upload a file, run a job, and return the output |
| [**uploadTextDocumentAndRunJob**](JobApi.md#uploadtextdocumentandrunjob) | **POST** /struct/{structId}/job/sync/text | Submit text, run a job, and return the output |



## archiveJob

> string archiveJob(jobId)

Archive a job

Archive the job. Returns its ID.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { ArchiveJobRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ArchiveJobRequest;

  try {
    const data = await api.archiveJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` | Unique identifier of the job | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully archived job |  -  |
| **400** | Job ID is not a valid UUID |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelJob

> Job cancelJob(jobId)

Cancel a job

Stop a running job so no further documents are analyzed. Returns the updated job.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { CancelJobRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CancelJobRequest;

  try {
    const data = await api.cancelJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` | Unique identifier of the job | [Defaults to `undefined`] |

### Return type

[**Job**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the updated job |  -  |
| **400** | Job ID is not a valid UUID |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createJob

> Job createJob(structId, createJobRequest)

Create an extraction job

Start an async job that extracts the struct\&#39;s fields from documents. Target either catalog_id or document_ids, not both. Poll getJobById until it finishes, then download the output with getJobOutputJson or getJobOutputCsv. Spends credits.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { CreateJobOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateJobRequest
    createJobRequest: ...,
  } satisfies CreateJobOperationRequest;

  try {
    const data = await api.createJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **structId** | `string` | Unique identifier of the struct | [Defaults to `undefined`] |
| **createJobRequest** | [CreateJobRequest](CreateJobRequest.md) |  | |

### Return type

[**Job**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created job |  -  |
| **400** | Data is invalid |  -  |
| **401** | Not permitted to access this struct or the specified catalog/documents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobById

> Job getJobById(jobId)

Get a job

Return a job and its status. Poll until status is complete, error or cancelled.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { GetJobByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetJobByIdRequest;

  try {
    const data = await api.getJobById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` | Unique identifier of the job | [Defaults to `undefined`] |

### Return type

[**Job**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job |  -  |
| **400** | Job ID is not a valid UUID |  -  |
| **401** | Not permitted to access this job |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobOutputCsv

> string getJobOutputCsv(jobId)

Download job output as CSV

Return the extracted data for all documents in the job as CSV, one row per document. The header is the union of fields across documents plus document_name; missing values are empty. Call once the job is complete.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { GetJobOutputCsvRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetJobOutputCsvRequest;

  try {
    const data = await api.getJobOutputCsv(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` | Unique identifier of the job | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CSV file containing the output for each document in the job (empty string if the job has no outputs) |  * content-disposition - Indicates the response should be downloaded as a file <br>  |
| **400** | Job ID is not a valid UUID |  -  |
| **401** | Not permitted to access this job |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobOutputJson

> Array&lt;JobOutputRecord&gt; getJobOutputJson(jobId)

Download job output as JSON

Return the extracted data for all documents in the job as a JSON array, one object per document. Call once the job is complete.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { GetJobOutputJsonRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetJobOutputJsonRequest;

  try {
    const data = await api.getJobOutputJson(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` | Unique identifier of the job | [Defaults to `undefined`] |

### Return type

[**Array&lt;JobOutputRecord&gt;**](JobOutputRecord.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JSON file containing the output for each document in the job |  * content-disposition - Indicates the response should be downloaded as a file <br>  |
| **400** | Job ID is not a valid UUID |  -  |
| **401** | Not permitted to access this job |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStructJobs

> Array&lt;Job&gt; getStructJobs(structId)

List jobs for a struct

List all jobs that were run with the struct. Archived jobs are excluded.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { GetStructJobsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetStructJobsRequest;

  try {
    const data = await api.getStructJobs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **structId** | `string` | Unique identifier of the struct | [Defaults to `undefined`] |

### Return type

[**Array&lt;Job&gt;**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of jobs for struct (archived jobs excluded) |  -  |
| **400** | Struct ID is not a valid UUID |  -  |
| **401** | Not permitted to access this struct |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserJobs

> Array&lt;Job&gt; getUserJobs()

List all jobs

List all jobs in the account, across all structs. Archived jobs are excluded.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { GetUserJobsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  try {
    const data = await api.getUserJobs();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Job&gt;**](Job.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of jobs (archived jobs excluded) |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadDocumentProcessAndRunJob

> Array&lt;JobOutputRecord&gt; uploadDocumentProcessAndRunJob(structId, file, additionalInstructions, outputType, llmModelId, llmModelBucket)

Upload a file, run a job, and return the output

One call: upload a single file, run a job with the struct, and return the extracted data as a file. Best for short documents (&lt;20k characters); longer ones are likely to time out, so use uploadDocument and createJob instead. Limits: 100MB per file, 10MB for raw text files (.txt, .csv, .json). Audio is not supported. Waits about 100 seconds. If the job is not finished, returns &#x60;202&#x60; and the job keeps running; fetch the output later with the job ID (getJobById, getJobOutputJson). The &#x60;stract-document-id&#x60; and &#x60;stract-job-id&#x60; response headers are returned on &#x60;200&#x60;, &#x60;202&#x60; and &#x60;422&#x60;. &#x60;stract-document-id&#x60; is also returned on a &#x60;400&#x60; for an invalid request field, so you can create a job on that document without uploading again.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { UploadDocumentProcessAndRunJobRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob | The file to upload. Supported extensions: .png, .jpg, .jpeg, .webp, .heic, .heif, .tif, .tiff, .avif, .bmp, .pdf, .txt, .csv, .json, .xml, .html, .log, .md, .yaml, .yml, .ini, .conf, .cfg, .sql, .svg, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .eml, .msg, .rtf. If you require any other file types supported please contact us at matt@stract-api.com with the request.
    file: BINARY_DATA_HERE,
    // string | Additional instructions to guide the data extraction, can be empty string
    additionalInstructions: additionalInstructions_example,
    // string | Format of the output file returned in the response
    outputType: outputType_example,
    // string | ID of the LLM model to use for this job. Optional; if omitted, or not a recognized model ID, no specific model is set on the job. Ignored if a recognized llm_model_bucket is provided. (optional)
    llmModelId: llmModelId_example,
    // string | Select the \\\"cost-optimal\\\" model at this cost tier (\\\"l\\\" = low, \\\"m\\\" = medium, \\\"h\\\" = high) Optional; takes precedence over llm_model_id. If not one of these values, it is ignored and llm_model_id is used instead. (optional)
    llmModelBucket: llmModelBucket_example,
  } satisfies UploadDocumentProcessAndRunJobRequest;

  try {
    const data = await api.uploadDocumentProcessAndRunJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **structId** | `string` | Unique identifier of the struct | [Defaults to `undefined`] |
| **file** | `Blob` | The file to upload. Supported extensions: .png, .jpg, .jpeg, .webp, .heic, .heif, .tif, .tiff, .avif, .bmp, .pdf, .txt, .csv, .json, .xml, .html, .log, .md, .yaml, .yml, .ini, .conf, .cfg, .sql, .svg, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .eml, .msg, .rtf. If you require any other file types supported please contact us at matt@stract-api.com with the request. | [Defaults to `undefined`] |
| **additionalInstructions** | `string` | Additional instructions to guide the data extraction, can be empty string | [Defaults to `undefined`] |
| **outputType** | `json`, `csv` | Format of the output file returned in the response | [Defaults to `undefined`] [Enum: json, csv] |
| **llmModelId** | `string` | ID of the LLM model to use for this job. Optional; if omitted, or not a recognized model ID, no specific model is set on the job. Ignored if a recognized llm_model_bucket is provided. | [Optional] [Defaults to `undefined`] |
| **llmModelBucket** | `l`, `m`, `h` | Select the \\\&quot;cost-optimal\\\&quot; model at this cost tier (\\\&quot;l\\\&quot; &#x3D; low, \\\&quot;m\\\&quot; &#x3D; medium, \\\&quot;h\\\&quot; &#x3D; high) Optional; takes precedence over llm_model_id. If not one of these values, it is ignored and llm_model_id is used instead. | [Optional] [Defaults to `undefined`] [Enum: l, m, h] |

### Return type

[**Array&lt;JobOutputRecord&gt;**](JobOutputRecord.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`, `text/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | File containing the extracted data for the uploaded document, in the requested output type |  * content-disposition - Indicates the response should be downloaded as a file <br>  * stract-document-id -  <br>  * stract-job-id -  <br>  |
| **202** | The job did not finish in time. It is still running, use the job ID to retrieve its output later. |  * stract-document-id -  <br>  * stract-job-id -  <br>  |
| **400** | Struct ID is not a valid UUID || Request field is missing or invalid (additional_instructions, output_type) || File extension is not supported || The file is too large (100MB maximum) || The document cannot be processed. The stract-document-id header is included when the document was already created before the error, which is the case for an invalid request field or a document that cannot be processed. |  * stract-document-id -  <br>  |
| **401** | Not permitted to perform this action |  -  |
| **402** | Insufficient credits for file upload |  -  |
| **422** | The job ended without completing successfully, so there is no output to return |  * stract-document-id -  <br>  * stract-job-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadTextDocumentAndRunJob

> Array&lt;JobOutputRecord&gt; uploadTextDocumentAndRunJob(structId, syncTextJobRequest)

Submit text, run a job, and return the output

One call: create a document from text, run a job with the struct, and return the extracted data as a file. Best for short documents (&lt;20k characters); longer ones are likely to time out, so use uploadTextDocument and createJob instead. Body is capped at 10MB. Waits about 100 seconds. If the job is not finished, returns &#x60;202&#x60; and the job keeps running; fetch the output later with the job ID (getJobById, getJobOutputJson). The &#x60;stract-document-id&#x60; and &#x60;stract-job-id&#x60; response headers are returned on &#x60;200&#x60;, &#x60;202&#x60; and &#x60;422&#x60;.

### Example

```ts
import {
  Configuration,
  JobApi,
} from '';
import type { UploadTextDocumentAndRunJobRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // SyncTextJobRequest
    syncTextJobRequest: ...,
  } satisfies UploadTextDocumentAndRunJobRequest;

  try {
    const data = await api.uploadTextDocumentAndRunJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **structId** | `string` | Unique identifier of the struct | [Defaults to `undefined`] |
| **syncTextJobRequest** | [SyncTextJobRequest](SyncTextJobRequest.md) |  | |

### Return type

[**Array&lt;JobOutputRecord&gt;**](JobOutputRecord.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | File containing the extracted data for the created document, in the requested output type |  * content-disposition - Indicates the response should be downloaded as a file <br>  * stract-document-id -  <br>  * stract-job-id -  <br>  |
| **202** | The job did not finish in time. It is still running, use the job ID to retrieve its output later. |  * stract-document-id -  <br>  * stract-job-id -  <br>  |
| **400** | Struct ID is not a valid UUID || Request field is missing or invalid (name, text, additional_instructions, output_type) |  -  |
| **401** | Not permitted to perform this action |  -  |
| **422** | The job ended without completing successfully, so there is no output to return |  * stract-document-id -  <br>  * stract-job-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

