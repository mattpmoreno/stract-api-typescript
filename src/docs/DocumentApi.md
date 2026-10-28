# DocumentApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteDocument**](DocumentApi.md#deletedocument) | **DELETE** /document/{documentId} | Delete a document |
| [**getCatalogDocuments**](DocumentApi.md#getcatalogdocuments) | **GET** /catalog/{catalogId}/document | Get documents for a catalog |
| [**getDocumentLink**](DocumentApi.md#getdocumentlink) | **GET** /document/{documentId}/link | Get a link to a document |
| [**getDocumentText**](DocumentApi.md#getdocumenttext) | **GET** /catalog/{catalogId}/document/{documentId}/text | Get the extracted text of a document |
| [**getDocumentsForJob**](DocumentApi.md#getdocumentsforjob) | **GET** /job/{jobId}/document | Get the documents for a job |
| [**getUserDocuments**](DocumentApi.md#getuserdocuments) | **GET** /document | Get all documents for the user |
| [**uploadDocument**](DocumentApi.md#uploaddocument) | **POST** /catalog/{catalogId}/document | Upload a file to the specified catalog |
| [**uploadDocumentNoCatalog**](DocumentApi.md#uploaddocumentnocatalog) | **POST** /document | Upload a document |
| [**uploadDocumentProcessAndRunJob**](DocumentApi.md#uploaddocumentprocessandrunjob) | **POST** /struct/{structId}/job/sync | Upload a document, run an analysis job on that document, and download the output. For API use. |
| [**uploadTextDocument**](DocumentApi.md#uploadtextdocumentoperation) | **POST** /catalog/{catalogId}/document/text | Upload text as a document to the specified catalog |
| [**uploadTextDocumentAndRunJob**](DocumentApi.md#uploadtextdocumentandrunjob) | **POST** /struct/{structId}/job/sync/text | Create a document from text, run an analysis job on that document, and download the output. For API use. |
| [**uploadTextDocumentNoCatalog**](DocumentApi.md#uploadtextdocumentnocatalog) | **POST** /document/text | Upload text as a document |



## deleteDocument

> DeletedDocument deleteDocument(documentId)

Delete a document

Deletes the specified document

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { DeleteDocumentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // string | Unique identifier of the document
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteDocumentRequest;

  try {
    const data = await api.deleteDocument(body);
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
| **documentId** | `string` | Unique identifier of the document | [Defaults to `undefined`] |

### Return type

[**DeletedDocument**](DeletedDocument.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully deleted document |  -  |
| **400** | Document ID is not a valid UUID |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCatalogDocuments

> Array&lt;Document&gt; getCatalogDocuments(catalogId)

Get documents for a catalog

Retrieve all documents belonging to the specified catalog

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { GetCatalogDocumentsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetCatalogDocumentsRequest;

  try {
    const data = await api.getCatalogDocuments(body);
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
| **catalogId** | `string` | Unique identifier of the catalog | [Defaults to `undefined`] |

### Return type

[**Array&lt;Document&gt;**](Document.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of documents |  -  |
| **400** | Catalog ID is not UUID |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocumentLink

> DocumentLink getDocumentLink(documentId)

Get a link to a document

Retrieve a link to download the specified document

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { GetDocumentLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // string | Unique identifier of the document
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDocumentLinkRequest;

  try {
    const data = await api.getDocumentLink(body);
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
| **documentId** | `string` | Unique identifier of the document | [Defaults to `undefined`] |

### Return type

[**DocumentLink**](DocumentLink.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document link |  -  |
| **400** | Document ID is not UUID |  -  |
| **401** | Not permitted to access this document |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocumentText

> DocumentText getDocumentText(catalogId, documentId)

Get the extracted text of a document

Retrieve the extracted text content of the specified document, if it has been processed

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { GetDocumentTextRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Unique identifier of the document
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDocumentTextRequest;

  try {
    const data = await api.getDocumentText(body);
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
| **catalogId** | `string` | Unique identifier of the catalog | [Defaults to `undefined`] |
| **documentId** | `string` | Unique identifier of the document | [Defaults to `undefined`] |

### Return type

[**DocumentText**](DocumentText.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Document text (null if the document has not yet been processed) |  -  |
| **400** | Document ID is not UUID |  -  |
| **401** | Not permitted to access this document |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocumentsForJob

> Array&lt;Document&gt; getDocumentsForJob(jobId)

Get the documents for a job

Retrieve all documents the specified job was run against

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { GetDocumentsForJobRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDocumentsForJobRequest;

  try {
    const data = await api.getDocumentsForJob(body);
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

[**Array&lt;Document&gt;**](Document.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of documents |  -  |
| **400** | Job ID is not a valid UUID |  -  |
| **401** | Not permitted to access this job |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDocuments

> Array&lt;Document&gt; getUserDocuments()

Get all documents for the user

Retrieve all documents belonging to the user\&#39;s account, across all catalogs

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { GetUserDocumentsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  try {
    const data = await api.getUserDocuments();
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

[**Array&lt;Document&gt;**](Document.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of documents |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadDocument

> Document uploadDocument(catalogId, file)

Upload a file to the specified catalog

Upload a file to the specified catalog. Files are capped at 100MB, and raw text files (such as .txt, .csv or .json) are capped at 10MB for analysis.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UploadDocumentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob | The file to upload. Supported extensions: .png, .jpg, .jpeg, .webp, .heic, .heif, .tif, .tiff, .avif, .bmp, .pdf, .txt, .csv, .json, .xml, .html, .log, .md, .yaml, .yml, .ini, .conf, .cfg, .sql, .svg, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .eml, .msg, .rtf, .mp3, .wav, .m4a, .m4b, .ogg, .flac, .amr. If you require any other file types supported please contact us at matt@stract-api.com with the request.
    file: BINARY_DATA_HERE,
  } satisfies UploadDocumentRequest;

  try {
    const data = await api.uploadDocument(body);
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
| **catalogId** | `string` | Unique identifier of the catalog | [Defaults to `undefined`] |
| **file** | `Blob` | The file to upload. Supported extensions: .png, .jpg, .jpeg, .webp, .heic, .heif, .tif, .tiff, .avif, .bmp, .pdf, .txt, .csv, .json, .xml, .html, .log, .md, .yaml, .yml, .ini, .conf, .cfg, .sql, .svg, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .eml, .msg, .rtf, .mp3, .wav, .m4a, .m4b, .ogg, .flac, .amr. If you require any other file types supported please contact us at matt@stract-api.com with the request. | [Defaults to `undefined`] |

### Return type

[**Document**](Document.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully uploaded document |  -  |
| **400** | Catalog ID is not UUID || Data was invalid || The file extension is not supported || The file is too large (100MB maximum) |  -  |
| **401** | Not permitted to access this catalog |  -  |
| **402** | Insufficient credits for file upload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadDocumentNoCatalog

> Document uploadDocumentNoCatalog(file)

Upload a document

Uploads a document. Files are capped at 100MB, and raw text files (such as .txt, .csv or .json) are capped at 10MB for analysis.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UploadDocumentNoCatalogRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // Blob | The file to upload. Supported extensions: .png, .jpg, .jpeg, .webp, .heic, .heif, .tif, .tiff, .avif, .bmp, .pdf, .txt, .csv, .json, .xml, .html, .log, .md, .yaml, .yml, .ini, .conf, .cfg, .sql, .svg, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .eml, .msg, .rtf, .mp3, .wav, .m4a, .m4b, .ogg, .flac, .amr. If you require any other file types supported please contact us at matt@stract-api.com with the request.
    file: BINARY_DATA_HERE,
  } satisfies UploadDocumentNoCatalogRequest;

  try {
    const data = await api.uploadDocumentNoCatalog(body);
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
| **file** | `Blob` | The file to upload. Supported extensions: .png, .jpg, .jpeg, .webp, .heic, .heif, .tif, .tiff, .avif, .bmp, .pdf, .txt, .csv, .json, .xml, .html, .log, .md, .yaml, .yml, .ini, .conf, .cfg, .sql, .svg, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .eml, .msg, .rtf, .mp3, .wav, .m4a, .m4b, .ogg, .flac, .amr. If you require any other file types supported please contact us at matt@stract-api.com with the request. | [Defaults to `undefined`] |

### Return type

[**Document**](Document.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully uploaded document |  -  |
| **400** | Data was invalid || The file extension is not supported || The file is too large (100MB maximum) |  -  |
| **401** | You are not permitted to access this information |  -  |
| **402** | Insufficient credits for file upload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadDocumentProcessAndRunJob

> Array&lt;JobOutputRecord&gt; uploadDocumentProcessAndRunJob(structId, file, additionalInstructions, outputType, llmModelId)

Upload a document, run an analysis job on that document, and download the output. For API use.

Uploads a single document, processes it, runs an analysis job against it using the  specified struct, and returns the extracted data as a file, all in one request. Please note that it is best to use this endpoint with shorter documents (&lt;20k characters), otherwise the request is likely to timeout. Files are capped at 100MB, and raw text files (such as .txt, .csv or .json) are capped at 10MB for analysis. The IDs of the document and the job are returned in the &#x60;stract-document-id&#x60; and &#x60;stract-job-id&#x60; response headers so the document and job can be retrieved later, for example with &#x60;GET /job/{jobId}&#x60; or &#x60;GET /document/{documentId}/link&#x60;.  The request waits about 100 seconds for the job to finish. If it has not finished by then, a &#x60;202&#x60; is returned and the job keeps running; use the job ID to check on it and download the output later. The ID headers are also included on the &#x60;202&#x60; and &#x60;422&#x60; responses. The document ID header is included on a &#x60;400&#x60; caused by an invalid request field,  so you can run a subsequent job on that document without having to upload again. Audio  files are not supported on this endpoint.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UploadDocumentProcessAndRunJobRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

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


## uploadTextDocument

> Document uploadTextDocument(catalogId, uploadTextDocumentRequest)

Upload text as a document to the specified catalog

Create a document in the specified catalog directly from text in the request body. No file upload is needed and the document is immediately ready for analysis. The request body is capped at 10MB.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UploadTextDocumentOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UploadTextDocumentRequest
    uploadTextDocumentRequest: ...,
  } satisfies UploadTextDocumentOperationRequest;

  try {
    const data = await api.uploadTextDocument(body);
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
| **catalogId** | `string` | Unique identifier of the catalog | [Defaults to `undefined`] |
| **uploadTextDocumentRequest** | [UploadTextDocumentRequest](UploadTextDocumentRequest.md) |  | |

### Return type

[**Document**](Document.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created document |  -  |
| **400** | Catalog ID is not UUID || Document object is missing a required field || Document object field is not the correct type |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadTextDocumentAndRunJob

> Array&lt;JobOutputRecord&gt; uploadTextDocumentAndRunJob(structId, syncTextJobRequest)

Create a document from text, run an analysis job on that document, and download the output. For API use.

Creates a document directly from text in the request body, runs an analysis job against it using the specified struct, and returns the extracted data as a file, all in one request. Please note that it is best to use this endpoint with shorter documents (&lt;20k characters), otherwise the request is likely to timeout. The request body is capped at 10MB. The IDs of the document and the job are returned in the &#x60;stract-document-id&#x60; and &#x60;stract-job-id&#x60; response headers so the document and job can be retrieved later, for example with &#x60;GET /job/{jobId}&#x60; or &#x60;GET /document/{documentId}/link&#x60;.  The request waits about 100 seconds for the job to finish. If it has not finished by then, a &#x60;202&#x60; is returned and the job keeps running; use the job ID to check on it and download the output later. The ID headers are also included on the &#x60;202&#x60; and &#x60;422&#x60; responses.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UploadTextDocumentAndRunJobRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

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


## uploadTextDocumentNoCatalog

> Document uploadTextDocumentNoCatalog(uploadTextDocumentRequest)

Upload text as a document

Create a document directly from text in the request body. No file upload is needed and the document is immediately ready for analysis. The request body is capped at 10MB.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UploadTextDocumentNoCatalogRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // UploadTextDocumentRequest
    uploadTextDocumentRequest: ...,
  } satisfies UploadTextDocumentNoCatalogRequest;

  try {
    const data = await api.uploadTextDocumentNoCatalog(body);
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
| **uploadTextDocumentRequest** | [UploadTextDocumentRequest](UploadTextDocumentRequest.md) |  | |

### Return type

[**Document**](Document.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created document |  -  |
| **400** | Document object is missing a required field || Document object field is not the correct type |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

