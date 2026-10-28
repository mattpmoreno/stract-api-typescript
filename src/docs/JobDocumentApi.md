# JobDocumentApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getJobDocumentOutput**](JobDocumentApi.md#getjobdocumentoutput) | **GET** /job_document/{jobDocId}/output | Get the output for a job document |
| [**getJobDocuments**](JobDocumentApi.md#getjobdocuments) | **GET** /job/{jobId}/job_document | Get the status of document analysis in a job |



## getJobDocumentOutput

> JobOutput getJobDocumentOutput(jobDocId)

Get the output for a job document

Retrieve the extracted structured data for the specified job document

### Example

```ts
import {
  Configuration,
  JobDocumentApi,
} from '';
import type { GetJobDocumentOutputRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobDocumentApi(config);

  const body = {
    // string | Unique identifier of the job document
    jobDocId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetJobDocumentOutputRequest;

  try {
    const data = await api.getJobDocumentOutput(body);
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
| **jobDocId** | `string` | Unique identifier of the job document | [Defaults to `undefined`] |

### Return type

[**JobOutput**](JobOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job document output (null if the document has not yet been processed) |  -  |
| **400** | Job document ID is not a valid UUID |  -  |
| **401** | Not permitted to access this job document |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobDocuments

> Array&lt;JobDocument&gt; getJobDocuments(jobId)

Get the status of document analysis in a job

Retrieve the per-document status and analysis results for the specified job

### Example

```ts
import {
  Configuration,
  JobDocumentApi,
} from '';
import type { GetJobDocumentsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobDocumentApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetJobDocumentsRequest;

  try {
    const data = await api.getJobDocuments(body);
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

[**Array&lt;JobDocument&gt;**](JobDocument.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of job documents |  -  |
| **400** | Job ID is not a valid UUID |  -  |
| **401** | Not permitted to access this job |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

