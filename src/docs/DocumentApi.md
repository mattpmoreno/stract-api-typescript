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
| [**uploadTextDocument**](DocumentApi.md#uploadtextdocumentoperation) | **POST** /catalog/{catalogId}/document/text | Upload text as a document to the specified catalog |
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

