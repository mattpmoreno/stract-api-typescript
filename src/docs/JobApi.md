# JobApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveJob**](JobApi.md#archivejob) | **POST** /job/{jobId}/archive | Archive a job |
| [**cancelJob**](JobApi.md#canceljob) | **POST** /job/{jobId}/cancel | Cancel a job |
| [**createJob**](JobApi.md#createjoboperation) | **POST** /struct/{structId}/job | Create a job |
| [**getJobById**](JobApi.md#getjobbyid) | **GET** /job/{jobId} | Get a job by ID |
| [**getJobOutputCsv**](JobApi.md#getjoboutputcsv) | **GET** /job/{jobId}/output_csv | Get the output for a job as CSV |
| [**getJobOutputJson**](JobApi.md#getjoboutputjson) | **GET** /job/{jobId}/output_json | Get the output for a job as JSON |
| [**getStructJobs**](JobApi.md#getstructjobs) | **GET** /struct/{structId}/job | Get all jobs for the specified struct |
| [**getUserJobs**](JobApi.md#getuserjobs) | **GET** /job | Get all jobs for the user |
| [**uploadDocumentProcessAndRunJob**](JobApi.md#uploaddocumentprocessandrunjob) | **POST** /struct/{structId}/job/sync | Upload a document, run an analysis job on that document, and download the output. For API use. |
| [**uploadTextDocumentAndRunJob**](JobApi.md#uploadtextdocumentandrunjob) | **POST** /struct/{structId}/job/sync/text | Create a document from text, run an analysis job on that document, and download the output. For API use. |



## archiveJob

> string archiveJob(jobId)

Archive a job

Marks the specified job as archived

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

Cancel the specified job and stopping any further analysis from happening

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

Create a job

Create a job to extract structured data from a catalog or set of documents using the specified struct

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

Get a job by ID

Retrieve the specified job

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

Get the output for a job as CSV

Download the extracted structured data for every document in the job as a CSV file. The header row is the union of fields across all documents (including document_name); a document missing a given field leaves that cell empty.

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

Get the output for a job as JSON

Download the extracted structured data for every document in the job as a JSON file

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

Get all jobs for the specified struct

Get all jobs for the specified struct

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
| **200** | List of jobs for struct |  -  |
| **400** | Struct ID is not a valid UUID |  -  |
| **401** | Not permitted to access this struct |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserJobs

> Array&lt;Job&gt; getUserJobs()

Get all jobs for the user

Retrieve all jobs belonging to the user\&#39;s account, across all structs

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
| **200** | List of jobs |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadDocumentProcessAndRunJob

> Array&lt;JobOutputRecord&gt; uploadDocumentProcessAndRunJob(structId, file, additionalInstructions, outputType, llmModelId)

Upload a document, run an analysis job on that document, and download the output. For API use.

Uploads a single document, processes it, runs an analysis job against it using the  specified struct, and returns the extracted data as a file, all in one request. Please note that it is best to use this endpoint with shorter documents (&lt;20k characters), otherwise the request is likely to timeout. Files are capped at 100MB, and raw text files (such as .txt, .csv or .json) are capped at 10MB for analysis. The IDs of the document and the job are returned in the &#x60;stract-document-id&#x60; and &#x60;stract-job-id&#x60; response headers so the document and job can be retrieved later, for example with &#x60;GET /job/{jobId}&#x60; or &#x60;GET /document/{documentId}/link&#x60;.  The request waits about 100 seconds for the job to finish. If it has not finished by then, a &#x60;202&#x60; is returned and the job keeps running; use the job ID to check on it and download the output later. The ID headers are also included on the &#x60;202&#x60; and &#x60;422&#x60; responses. The document ID header is included on a &#x60;400&#x60; caused by an invalid request field,  so you can run a subsequent job on that document without having to upload again. Audio  files are not supported on this endpoint.

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
    // string | ID of the LLM model to use for this job. Optional; if omitted, or not a recognized model ID, no specific model is set on the job. (optional)
    llmModelId: llmModelId_example,
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
| **llmModelId** | `string` | ID of the LLM model to use for this job. Optional; if omitted, or not a recognized model ID, no specific model is set on the job. | [Optional] [Defaults to `undefined`] |

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

Create a document from text, run an analysis job on that document, and download the output. For API use.

Creates a document directly from text in the request body, runs an analysis job against it using the specified struct, and returns the extracted data as a file, all in one request. Please note that it is best to use this endpoint with shorter documents (&lt;20k characters), otherwise the request is likely to timeout. The request body is capped at 10MB. The IDs of the document and the job are returned in the &#x60;stract-document-id&#x60; and &#x60;stract-job-id&#x60; response headers so the document and job can be retrieved later, for example with &#x60;GET /job/{jobId}&#x60; or &#x60;GET /document/{documentId}/link&#x60;.  The request waits about 100 seconds for the job to finish. If it has not finished by then, a &#x60;202&#x60; is returned and the job keeps running; use the job ID to check on it and download the output later. The ID headers are also included on the &#x60;202&#x60; and &#x60;422&#x60; responses.

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

