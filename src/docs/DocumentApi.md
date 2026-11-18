# DocumentApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteDocument**](DocumentApi.md#deletedocument) | **DELETE** /document/{documentId} | Delete a document |
| [**getCatalogDocuments**](DocumentApi.md#getcatalogdocuments) | **GET** /catalog/{catalogId}/document | List documents in a catalog |
| [**getDocumentLink**](DocumentApi.md#getdocumentlink) | **GET** /document/{documentId}/link | Get a document download link |
| [**getDocumentText**](DocumentApi.md#getdocumenttext) | **GET** /catalog/{catalogId}/document/{documentId}/text | Get a document\&#39;s extracted text |
| [**getDocumentsForJob**](DocumentApi.md#getdocumentsforjob) | **GET** /job/{jobId}/document | List documents in a job |
| [**getUserDocuments**](DocumentApi.md#getuserdocuments) | **GET** /document | List all documents |
| [**uploadDocument**](DocumentApi.md#uploaddocument) | **POST** /catalog/{catalogId}/document | Upload a file to a catalog |
| [**uploadDocumentFromUrl**](DocumentApi.md#uploaddocumentfromurloperation) | **POST** /catalog/{catalogId}/document/url | Upload a file from a URL to a catalog |
| [**uploadDocumentFromUrlNoCatalog**](DocumentApi.md#uploaddocumentfromurlnocatalog) | **POST** /document/url | Upload a file from a URL |
| [**uploadDocumentNoCatalog**](DocumentApi.md#uploaddocumentnocatalog) | **POST** /document | Upload a file without a catalog |
| [**uploadTextDocument**](DocumentApi.md#uploadtextdocumentoperation) | **POST** /catalog/{catalogId}/document/text | Add a text document to a catalog |
| [**uploadTextDocumentNoCatalog**](DocumentApi.md#uploadtextdocumentnocatalog) | **POST** /document/text | Create a text document without a catalog |



## deleteDocument

> DeletedDocument deleteDocument(documentId)

Delete a document

Delete the document and its stored file. It is also removed from any jobs it was part of, along with its processing details. Destructive.

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

List documents in a catalog

List all documents in the catalog

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

Get a document download link

Return a URL to download the original uploaded file. Text-only documents have no file and return 404.

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
| **404** | Document has no uploaded file (e.g. a text-only document) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocumentText

> DocumentText getDocumentText(catalogId, documentId)

Get a document\&#39;s extracted text

Return the full extracted text of the document. text is null until processing completes.

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

List documents in a job

List the documents the job was run against

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

List all documents

List all documents in the account, across all catalogs

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

Upload a file to a catalog

Upload a file (multipart) to the catalog. Spends credits. Limits: 100MB per file, 10MB for raw text files (.txt, .csv, .json). Returns the document.

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


## uploadDocumentFromUrl

> Document uploadDocumentFromUrl(catalogId, uploadDocumentFromUrlRequest)

Upload a file from a URL to a catalog

Download a file from a https URL and create a document in the catalog. The URL must be reachable without authentication, for example a public link or a presigned URL. Spends credits. Limits: 100MB per file, 10MB for raw text files (.txt, .csv, .json). Returns the document.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UploadDocumentFromUrlOperationRequest } from '';

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
    // UploadDocumentFromUrlRequest
    uploadDocumentFromUrlRequest: ...,
  } satisfies UploadDocumentFromUrlOperationRequest;

  try {
    const data = await api.uploadDocumentFromUrl(body);
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
| **uploadDocumentFromUrlRequest** | [UploadDocumentFromUrlRequest](UploadDocumentFromUrlRequest.md) |  | |

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
| **200** | Successfully uploaded document |  -  |
| **400** | Catalog ID is not UUID || Data was invalid || The URL is not https, is not reachable, or points to a private address || The file extension is not supported || The file is too large (100MB maximum) |  -  |
| **401** | Not permitted to access this catalog |  -  |
| **402** | Insufficient credits for file upload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadDocumentFromUrlNoCatalog

> Document uploadDocumentFromUrlNoCatalog(uploadDocumentFromUrlRequest)

Upload a file from a URL

Download a file from a https URL and create a document (no catalog). The URL must be reachable without authentication, for example a public link or a presigned URL. Spends credits. Limits: 100MB per file, 10MB for raw text files (.txt, .csv, .json). Returns the document.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UploadDocumentFromUrlNoCatalogRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentApi(config);

  const body = {
    // UploadDocumentFromUrlRequest
    uploadDocumentFromUrlRequest: ...,
  } satisfies UploadDocumentFromUrlNoCatalogRequest;

  try {
    const data = await api.uploadDocumentFromUrlNoCatalog(body);
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
| **uploadDocumentFromUrlRequest** | [UploadDocumentFromUrlRequest](UploadDocumentFromUrlRequest.md) |  | |

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
| **200** | Successfully uploaded document |  -  |
| **400** | Data was invalid || The URL is not https, is not reachable, or points to a private address || The file extension is not supported || The file is too large (100MB maximum) |  -  |
| **401** | You are not permitted to access this information |  -  |
| **402** | Insufficient credits for file upload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadDocumentNoCatalog

> Document uploadDocumentNoCatalog(file)

Upload a file without a catalog

Upload a file (multipart) that is not placed in a catalog. Spends credits. Limits: 100MB per file, 10MB for raw text files (.txt, .csv, .json). Returns the document.

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

Add a text document to a catalog

Create a document in the catalog from text in the request body. No file upload needed; it is ready for analysis immediately. Body is capped at 10MB.

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

Create a text document without a catalog

Create a document from text in the request body, not placed in a catalog. No file upload needed; it is ready for analysis immediately. Body is capped at 10MB.

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

