# DefaultApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**accountCreditLedgerGet**](DefaultApi.md#accountcreditledgerget) | **GET** /account_credit_ledger | Get the account credit ledger |
| [**accountGet**](DefaultApi.md#accountget) | **GET** /account | Get information about user\&#39;s account |
| [**accountPut**](DefaultApi.md#accountput) | **PUT** /account | Edit the current account |
| [**accountUserGet**](DefaultApi.md#accountuserget) | **GET** /account/user | Get the users in the current account |
| [**accountUserPost**](DefaultApi.md#accountuserpost) | **POST** /account/user | Add a user to the current account |
| [**apiKeyGet**](DefaultApi.md#apikeyget) | **GET** /api-key | Get the current account\&#39;s API keys |
| [**catalogCatalogIdDelete**](DefaultApi.md#catalogcatalogiddelete) | **DELETE** /catalog/{catalogId} | Delete a catalog |
| [**catalogCatalogIdDocumentDocumentIdTextGet**](DefaultApi.md#catalogcatalogiddocumentdocumentidtextget) | **GET** /catalog/{catalogId}/document/{documentId}/text | Get the extracted text of a document |
| [**catalogCatalogIdDocumentGet**](DefaultApi.md#catalogcatalogiddocumentget) | **GET** /catalog/{catalogId}/document | Get documents for a catalog |
| [**catalogCatalogIdDocumentPost**](DefaultApi.md#catalogcatalogiddocumentpost) | **POST** /catalog/{catalogId}/document | Upload a file to the specified catalog |
| [**catalogCatalogIdDocumentTextPost**](DefaultApi.md#catalogcatalogiddocumenttextpost) | **POST** /catalog/{catalogId}/document/text | Upload text as a document to the specified catalog |
| [**catalogGet**](DefaultApi.md#catalogget) | **GET** /catalog | Get all catalogs |
| [**catalogPost**](DefaultApi.md#catalogpost) | **POST** /catalog | Create a catalog |
| [**currentCreditsGet**](DefaultApi.md#currentcreditsget) | **GET** /current_credits | Get the current credit balance |
| [**currentOrgCreditsGet**](DefaultApi.md#currentorgcreditsget) | **GET** /current_org_credits | Get the current organization credit balance |
| [**documentDocumentIdLinkGet**](DefaultApi.md#documentdocumentidlinkget) | **GET** /document/{documentId}/link | Get a link to a document |
| [**documentGet**](DefaultApi.md#documentget) | **GET** /document | Get all documents for the user |
| [**documentPost**](DefaultApi.md#documentpost) | **POST** /document | Upload a document |
| [**documentTextPost**](DefaultApi.md#documenttextpost) | **POST** /document/text | Upload text as a document |
| [**fieldFieldIdDelete**](DefaultApi.md#fieldfieldiddelete) | **DELETE** /field/{fieldId} | Delete a field |
| [**fieldFieldIdPut**](DefaultApi.md#fieldfieldidput) | **PUT** /field/{fieldId} | Edit a field |
| [**jobDocumentJobDocIdOutputGet**](DefaultApi.md#jobdocumentjobdocidoutputget) | **GET** /job_document/{jobDocId}/output | Get the output for a job document |
| [**jobGet**](DefaultApi.md#jobget) | **GET** /job | Get all jobs for the user |
| [**jobJobIdArchivePost**](DefaultApi.md#jobjobidarchivepost) | **POST** /job/{jobId}/archive | Archive a job |
| [**jobJobIdCancelPost**](DefaultApi.md#jobjobidcancelpost) | **POST** /job/{jobId}/cancel | Cancel a job |
| [**jobJobIdDocumentGet**](DefaultApi.md#jobjobiddocumentget) | **GET** /job/{jobId}/document | Get the documents for a job |
| [**jobJobIdGet**](DefaultApi.md#jobjobidget) | **GET** /job/{jobId} | Get a job by ID |
| [**jobJobIdJobDocumentGet**](DefaultApi.md#jobjobidjobdocumentget) | **GET** /job/{jobId}/job_document | Get the status of document analysis in a job |
| [**jobJobIdOutputCsvGet**](DefaultApi.md#jobjobidoutputcsvget) | **GET** /job/{jobId}/output_csv | Get the output for a job as CSV |
| [**jobJobIdOutputJsonGet**](DefaultApi.md#jobjobidoutputjsonget) | **GET** /job/{jobId}/output_json | Get the output for a job as JSON |
| [**llmModelGet**](DefaultApi.md#llmmodelget) | **GET** /llm_model | Get the available LLM models |
| [**myUserGet**](DefaultApi.md#myuserget) | **GET** /my_user | Get the current user |
| [**myUserPut**](DefaultApi.md#myuserput) | **PUT** /my_user | Edit the current user |
| [**structGet**](DefaultApi.md#structget) | **GET** /struct | Get all data structures |
| [**structPost**](DefaultApi.md#structpost) | **POST** /struct | Create a new data structure |
| [**structStructIdArchivePost**](DefaultApi.md#structstructidarchivepost) | **POST** /struct/{structId}/archive | Archive a struct |
| [**structStructIdFieldGet**](DefaultApi.md#structstructidfieldget) | **GET** /struct/{structId}/field | Get data fields for a struct |
| [**structStructIdFieldPost**](DefaultApi.md#structstructidfieldpost) | **POST** /struct/{structId}/field | Create fields for a struct |
| [**structStructIdJobGet**](DefaultApi.md#structstructidjobget) | **GET** /struct/{structId}/job | Get all jobs for the specified struct |
| [**structStructIdJobPost**](DefaultApi.md#structstructidjobpost) | **POST** /struct/{structId}/job | Create a job |
| [**structStructIdJobSyncPost**](DefaultApi.md#structstructidjobsyncpost) | **POST** /struct/{structId}/job/sync | Upload a document, run an analysis job on that document, and download the output. For API use. |
| [**structStructIdJobSyncTextPost**](DefaultApi.md#structstructidjobsynctextpostoperation) | **POST** /struct/{structId}/job/sync/text | Create a document from text, run an analysis job on that document, and download the output. For API use. |
| [**transactionTransactionIdPost**](DefaultApi.md#transactiontransactionidpost) | **POST** /transaction/{transactionId} | Post a payment transaction |



## accountCreditLedgerGet

> Array&lt;AccountCreditLedger&gt; accountCreditLedgerGet()

Get the account credit ledger

Retrieve the credit ledger entries created by the current user within their account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { AccountCreditLedgerGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.accountCreditLedgerGet();
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

[**Array&lt;AccountCreditLedger&gt;**](AccountCreditLedger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of account credit ledger entries |  -  |
| **401** | All users must be connected to an account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## accountGet

> Account accountGet()

Get information about user\&#39;s account

Retrieve information about the account the current user belongs to

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { AccountGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.accountGet();
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

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current account |  -  |
| **401** | All users must be connected to an account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## accountPut

> Account accountPut(editAccountRequest)

Edit the current account

Update the account the current user belongs to. Only account admins may perform this action.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { AccountPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // EditAccountRequest
    editAccountRequest: ...,
  } satisfies AccountPutRequest;

  try {
    const data = await api.accountPut(body);
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
| **editAccountRequest** | [EditAccountRequest](EditAccountRequest.md) |  | |

### Return type

[**Account**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully updated account |  -  |
| **400** | Account object is missing a required field || Account object field is not the correct type |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## accountUserGet

> Array&lt;AccountUser&gt; accountUserGet()

Get the users in the current account

Retrieve all users belonging to the current user\&#39;s account. Only account admins may perform this action.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { AccountUserGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.accountUserGet();
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

[**Array&lt;AccountUser&gt;**](AccountUser.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of account users |  -  |
| **401** | Not permitted to access this resource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## accountUserPost

> AccountUser accountUserPost(createAccountUserRequest)

Add a user to the current account

Create a new user and add them to the current user\&#39;s account. Only account admins may perform this action, and the account must have an active subscription to add other users. Accounts with a team subscription are limited to 10 users.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { AccountUserPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateAccountUserRequest
    createAccountUserRequest: ...,
  } satisfies AccountUserPostRequest;

  try {
    const data = await api.accountUserPost(body);
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
| **createAccountUserRequest** | [CreateAccountUserRequest](CreateAccountUserRequest.md) |  | |

### Return type

[**AccountUser**](AccountUser.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created account user |  -  |
| **400** | Account user object is missing a required field || Account user object field is not the correct type |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiKeyGet

> Array&lt;ApiKey&gt; apiKeyGet()

Get the current account\&#39;s API keys

Retrieve all API keys belonging to the current user\&#39;s account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiKeyGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.apiKeyGet();
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

[**Array&lt;ApiKey&gt;**](ApiKey.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of API keys |  -  |
| **401** | Not permitted to access this resource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## catalogCatalogIdDelete

> string catalogCatalogIdDelete(catalogId)

Delete a catalog

Deletes the specified catalog. Also deletes all documents belonging to the catalog, including any underlying stored files.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CatalogCatalogIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CatalogCatalogIdDeleteRequest;

  try {
    const data = await api.catalogCatalogIdDelete(body);
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

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully deleted catalog |  -  |
| **400** | Catalog ID is not a valid UUID |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## catalogCatalogIdDocumentDocumentIdTextGet

> CatalogCatalogIdDocumentDocumentIdTextGet200Response catalogCatalogIdDocumentDocumentIdTextGet(catalogId, documentId)

Get the extracted text of a document

Retrieve the extracted text content of the specified document, if it has been processed

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CatalogCatalogIdDocumentDocumentIdTextGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Unique identifier of the document
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CatalogCatalogIdDocumentDocumentIdTextGetRequest;

  try {
    const data = await api.catalogCatalogIdDocumentDocumentIdTextGet(body);
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

[**CatalogCatalogIdDocumentDocumentIdTextGet200Response**](CatalogCatalogIdDocumentDocumentIdTextGet200Response.md)

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


## catalogCatalogIdDocumentGet

> Array&lt;Document&gt; catalogCatalogIdDocumentGet(catalogId)

Get documents for a catalog

Retrieve all documents belonging to the specified catalog

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CatalogCatalogIdDocumentGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CatalogCatalogIdDocumentGetRequest;

  try {
    const data = await api.catalogCatalogIdDocumentGet(body);
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


## catalogCatalogIdDocumentPost

> Document catalogCatalogIdDocumentPost(catalogId, file)

Upload a file to the specified catalog

Upload a file to the specified catalog. Files are capped at 100MB, and raw text files (such as .txt, .csv or .json) are capped at 10MB for analysis.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CatalogCatalogIdDocumentPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob | The file to upload. Supported extensions: .png, .jpg, .jpeg, .webp, .heic, .heif, .tif, .tiff, .avif, .bmp, .pdf, .txt, .csv, .json, .xml, .html, .log, .md, .yaml, .yml, .ini, .conf, .cfg, .sql, .svg, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .eml, .msg, .rtf, .mp3, .wav, .m4a, .m4b, .ogg, .flac, .amr. If you require any other file types supported please contact us at matt@stract-api.com with the request.
    file: BINARY_DATA_HERE,
  } satisfies CatalogCatalogIdDocumentPostRequest;

  try {
    const data = await api.catalogCatalogIdDocumentPost(body);
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


## catalogCatalogIdDocumentTextPost

> Document catalogCatalogIdDocumentTextPost(catalogId, uploadTextDocumentRequest)

Upload text as a document to the specified catalog

Create a document in the specified catalog directly from text in the request body. No file upload is needed and the document is immediately ready for analysis. The request body is capped at 10MB.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CatalogCatalogIdDocumentTextPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UploadTextDocumentRequest
    uploadTextDocumentRequest: ...,
  } satisfies CatalogCatalogIdDocumentTextPostRequest;

  try {
    const data = await api.catalogCatalogIdDocumentTextPost(body);
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


## catalogGet

> Array&lt;Catalog&gt; catalogGet()

Get all catalogs

Retrieve all catalogs (collections of documents) for the user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CatalogGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.catalogGet();
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

[**Array&lt;Catalog&gt;**](Catalog.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of catalogs |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## catalogPost

> Catalog catalogPost(createCatalogRequest)

Create a catalog

Create a new catalog (collection of documents) for the user\&#39;s account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CatalogPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateCatalogRequest
    createCatalogRequest: ...,
  } satisfies CatalogPostRequest;

  try {
    const data = await api.catalogPost(body);
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
| **createCatalogRequest** | [CreateCatalogRequest](CreateCatalogRequest.md) |  | |

### Return type

[**Catalog**](Catalog.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created catalog |  -  |
| **400** | Data is invalid |  -  |
| **401** | All users must be connected to an account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## currentCreditsGet

> AccountCreditCache currentCreditsGet()

Get the current credit balance

Retrieve the credit balance for the user\&#39;s account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CurrentCreditsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.currentCreditsGet();
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

[**AccountCreditCache**](AccountCreditCache.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current account credits |  -  |
| **401** | All users must be connected to an account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## currentOrgCreditsGet

> AccountCreditCache currentOrgCreditsGet()

Get the current organization credit balance

Retrieve the shared organization credit balance for the user\&#39;s account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CurrentOrgCreditsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.currentOrgCreditsGet();
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

[**AccountCreditCache**](AccountCreditCache.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current organization credits |  -  |
| **401** | All users must be connected to an account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## documentDocumentIdLinkGet

> DocumentDocumentIdLinkGet200Response documentDocumentIdLinkGet(documentId)

Get a link to a document

Retrieve a link to download the specified document

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { DocumentDocumentIdLinkGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the document
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DocumentDocumentIdLinkGetRequest;

  try {
    const data = await api.documentDocumentIdLinkGet(body);
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

[**DocumentDocumentIdLinkGet200Response**](DocumentDocumentIdLinkGet200Response.md)

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


## documentGet

> Array&lt;Document&gt; documentGet()

Get all documents for the user

Retrieve all documents belonging to the user\&#39;s account, across all catalogs

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { DocumentGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.documentGet();
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


## documentPost

> Document documentPost(file)

Upload a document

Uploads a document. Files are capped at 100MB, and raw text files (such as .txt, .csv or .json) are capped at 10MB for analysis.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { DocumentPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Blob | The file to upload. Supported extensions: .png, .jpg, .jpeg, .webp, .heic, .heif, .tif, .tiff, .avif, .bmp, .pdf, .txt, .csv, .json, .xml, .html, .log, .md, .yaml, .yml, .ini, .conf, .cfg, .sql, .svg, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .eml, .msg, .rtf, .mp3, .wav, .m4a, .m4b, .ogg, .flac, .amr. If you require any other file types supported please contact us at matt@stract-api.com with the request.
    file: BINARY_DATA_HERE,
  } satisfies DocumentPostRequest;

  try {
    const data = await api.documentPost(body);
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


## documentTextPost

> Document documentTextPost(uploadTextDocumentRequest)

Upload text as a document

Create a document directly from text in the request body. No file upload is needed and the document is immediately ready for analysis. The request body is capped at 10MB.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { DocumentTextPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // UploadTextDocumentRequest
    uploadTextDocumentRequest: ...,
  } satisfies DocumentTextPostRequest;

  try {
    const data = await api.documentTextPost(body);
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


## fieldFieldIdDelete

> FieldFieldIdDelete200Response fieldFieldIdDelete(fieldId)

Delete a field

Delete the specified field

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { FieldFieldIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the field
    fieldId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies FieldFieldIdDeleteRequest;

  try {
    const data = await api.fieldFieldIdDelete(body);
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
| **fieldId** | `string` | Unique identifier of the field | [Defaults to `undefined`] |

### Return type

[**FieldFieldIdDelete200Response**](FieldFieldIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully deleted field |  -  |
| **400** | Field ID is not a valid UUID |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## fieldFieldIdPut

> Field fieldFieldIdPut(fieldId, editFieldRequest)

Edit a field

Update one or more properties of the specified field. At least one property must be provided.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { FieldFieldIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the field
    fieldId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EditFieldRequest
    editFieldRequest: ...,
  } satisfies FieldFieldIdPutRequest;

  try {
    const data = await api.fieldFieldIdPut(body);
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
| **fieldId** | `string` | Unique identifier of the field | [Defaults to `undefined`] |
| **editFieldRequest** | [EditFieldRequest](EditFieldRequest.md) |  | |

### Return type

[**Field**](Field.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully updated field |  -  |
| **400** | Field ID is not a valid UUID || Request body has no fields set || Field fields are not of the correct type |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## jobDocumentJobDocIdOutputGet

> JobOutput jobDocumentJobDocIdOutputGet(jobDocId)

Get the output for a job document

Retrieve the extracted structured data for the specified job document

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobDocumentJobDocIdOutputGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the job document
    jobDocId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JobDocumentJobDocIdOutputGetRequest;

  try {
    const data = await api.jobDocumentJobDocIdOutputGet(body);
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


## jobGet

> Array&lt;Job&gt; jobGet()

Get all jobs for the user

Retrieve all jobs belonging to the user\&#39;s account, across all structs

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.jobGet();
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


## jobJobIdArchivePost

> string jobJobIdArchivePost(jobId)

Archive a job

Marks the specified job as archived

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobJobIdArchivePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JobJobIdArchivePostRequest;

  try {
    const data = await api.jobJobIdArchivePost(body);
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


## jobJobIdCancelPost

> Job jobJobIdCancelPost(jobId)

Cancel a job

Cancel the specified job and stopping any further analysis from happening

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobJobIdCancelPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JobJobIdCancelPostRequest;

  try {
    const data = await api.jobJobIdCancelPost(body);
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


## jobJobIdDocumentGet

> Array&lt;Document&gt; jobJobIdDocumentGet(jobId)

Get the documents for a job

Retrieve all documents the specified job was run against

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobJobIdDocumentGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JobJobIdDocumentGetRequest;

  try {
    const data = await api.jobJobIdDocumentGet(body);
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


## jobJobIdGet

> Job jobJobIdGet(jobId)

Get a job by ID

Retrieve the specified job

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobJobIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JobJobIdGetRequest;

  try {
    const data = await api.jobJobIdGet(body);
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


## jobJobIdJobDocumentGet

> Array&lt;JobDocument&gt; jobJobIdJobDocumentGet(jobId)

Get the status of document analysis in a job

Retrieve the per-document status and analysis results for the specified job

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobJobIdJobDocumentGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JobJobIdJobDocumentGetRequest;

  try {
    const data = await api.jobJobIdJobDocumentGet(body);
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


## jobJobIdOutputCsvGet

> string jobJobIdOutputCsvGet(jobId)

Get the output for a job as CSV

Download the extracted structured data for every document in the job as a CSV file. The header row is the union of fields across all documents (including document_name); a document missing a given field leaves that cell empty.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobJobIdOutputCsvGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JobJobIdOutputCsvGetRequest;

  try {
    const data = await api.jobJobIdOutputCsvGet(body);
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


## jobJobIdOutputJsonGet

> Array&lt;JobOutputRecord&gt; jobJobIdOutputJsonGet(jobId)

Get the output for a job as JSON

Download the extracted structured data for every document in the job as a JSON file

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { JobJobIdOutputJsonGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the job
    jobId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JobJobIdOutputJsonGetRequest;

  try {
    const data = await api.jobJobIdOutputJsonGet(body);
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


## llmModelGet

> Array&lt;LlmModel&gt; llmModelGet()

Get the available LLM models

Retrieve the list of LLM models that can be selected via llm_model_id when creating a job

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { LlmModelGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.llmModelGet();
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

[**Array&lt;LlmModel&gt;**](LlmModel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of LLM models |  -  |
| **401** | All users must be connected to an account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## myUserGet

> User myUserGet()

Get the current user

Retrieve the profile of the currently authenticated user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { MyUserGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.myUserGet();
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

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current user |  -  |
| **401** | Unauthorized |  -  |
| **404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## myUserPut

> User myUserPut(editMyUserRequest)

Edit the current user

Update one or more properties of the currently authenticated user. At least one property must be provided.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { MyUserPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // EditMyUserRequest
    editMyUserRequest: ...,
  } satisfies MyUserPutRequest;

  try {
    const data = await api.myUserPut(body);
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
| **editMyUserRequest** | [EditMyUserRequest](EditMyUserRequest.md) |  | |

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully updated user |  -  |
| **400** | Request body has no fields set || User fields are not of the correct type |  -  |
| **401** | Unauthorized |  -  |
| **404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## structGet

> Array&lt;Struct&gt; structGet()

Get all data structures

Retrieve all data structures for user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.structGet();
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

[**Array&lt;Struct&gt;**](Struct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of structs |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## structPost

> Struct structPost(createStructRequest)

Create a new data structure

Create a new data structure to be used in document analysis

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // CreateStructRequest
    createStructRequest: ...,
  } satisfies StructPostRequest;

  try {
    const data = await api.structPost(body);
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
| **createStructRequest** | [CreateStructRequest](CreateStructRequest.md) |  | |

### Return type

[**Struct**](Struct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created struct |  -  |
| **400** | Struct object is missing || Struct object field is not the correct type || Struct object is missing a required field |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## structStructIdArchivePost

> string structStructIdArchivePost(structId)

Archive a struct

Marks the specified struct as archived

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructStructIdArchivePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies StructStructIdArchivePostRequest;

  try {
    const data = await api.structStructIdArchivePost(body);
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

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully archived struct |  -  |
| **400** | Struct ID is not a valid UUID |  -  |
| **401** | Not permitted to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## structStructIdFieldGet

> Array&lt;Field&gt; structStructIdFieldGet(structId)

Get data fields for a struct

Retrieve all data field definitions in the specified struct

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructStructIdFieldGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies StructStructIdFieldGetRequest;

  try {
    const data = await api.structStructIdFieldGet(body);
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

[**Array&lt;Field&gt;**](Field.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of fields |  -  |
| **400** | Struct ID is not a valid UUID |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## structStructIdFieldPost

> Array&lt;Field&gt; structStructIdFieldPost(structId, createFieldRequest)

Create fields for a struct

Create one or more fields for the specified struct

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructStructIdFieldPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<CreateFieldRequest>
    createFieldRequest: ...,
  } satisfies StructStructIdFieldPostRequest;

  try {
    const data = await api.structStructIdFieldPost(body);
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
| **createFieldRequest** | `Array<CreateFieldRequest>` |  | |

### Return type

[**Array&lt;Field&gt;**](Field.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully created fields |  -  |
| **400** | Struct ID is not UUID || Field object is missing fields || Field object fields are not of the correct type |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## structStructIdJobGet

> Array&lt;Job&gt; structStructIdJobGet(structId)

Get all jobs for the specified struct

Get all jobs for the specified struct

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructStructIdJobGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies StructStructIdJobGetRequest;

  try {
    const data = await api.structStructIdJobGet(body);
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


## structStructIdJobPost

> Job structStructIdJobPost(structId, createJobRequest)

Create a job

Create a job to extract structured data from a catalog or set of documents using the specified struct

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructStructIdJobPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateJobRequest
    createJobRequest: ...,
  } satisfies StructStructIdJobPostRequest;

  try {
    const data = await api.structStructIdJobPost(body);
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


## structStructIdJobSyncPost

> Array&lt;JobOutputRecord&gt; structStructIdJobSyncPost(structId, file, additionalInstructions, outputType, llmModelId)

Upload a document, run an analysis job on that document, and download the output. For API use.

Uploads a single document, processes it, runs an analysis job against it using the  specified struct, and returns the extracted data as a file, all in one request. Please note that it is best to use this endpoint with shorter documents (&lt;20k characters), otherwise the request is likely to timeout. Files are capped at 100MB, and raw text files (such as .txt, .csv or .json) are capped at 10MB for analysis. The IDs of the document and the job are returned in the &#x60;stract-document-id&#x60; and &#x60;stract-job-id&#x60; response headers so the document and job can be retrieved later, for example with &#x60;GET /job/{jobId}&#x60; or &#x60;GET /document/{documentId}/link&#x60;.  The request waits about 100 seconds for the job to finish. If it has not finished by then, a &#x60;202&#x60; is returned and the job keeps running; use the job ID to check on it and download the output later. The ID headers are also included on the &#x60;202&#x60; and &#x60;422&#x60; responses. The document ID header is included on a &#x60;400&#x60; caused by an invalid request field,  so you can run a subsequent job on that document without having to upload again. Audio  files are not supported on this endpoint.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructStructIdJobSyncPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

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
  } satisfies StructStructIdJobSyncPostRequest;

  try {
    const data = await api.structStructIdJobSyncPost(body);
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


## structStructIdJobSyncTextPost

> Array&lt;JobOutputRecord&gt; structStructIdJobSyncTextPost(structId, structStructIdJobSyncTextPostRequest)

Create a document from text, run an analysis job on that document, and download the output. For API use.

Creates a document directly from text in the request body, runs an analysis job against it using the specified struct, and returns the extracted data as a file, all in one request. Please note that it is best to use this endpoint with shorter documents (&lt;20k characters), otherwise the request is likely to timeout. The request body is capped at 10MB. The IDs of the document and the job are returned in the &#x60;stract-document-id&#x60; and &#x60;stract-job-id&#x60; response headers so the document and job can be retrieved later, for example with &#x60;GET /job/{jobId}&#x60; or &#x60;GET /document/{documentId}/link&#x60;.  The request waits about 100 seconds for the job to finish. If it has not finished by then, a &#x60;202&#x60; is returned and the job keeps running; use the job ID to check on it and download the output later. The ID headers are also included on the &#x60;202&#x60; and &#x60;422&#x60; responses.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { StructStructIdJobSyncTextPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // StructStructIdJobSyncTextPostRequest
    structStructIdJobSyncTextPostRequest: ...,
  } satisfies StructStructIdJobSyncTextPostOperationRequest;

  try {
    const data = await api.structStructIdJobSyncTextPost(body);
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
| **structStructIdJobSyncTextPostRequest** | [StructStructIdJobSyncTextPostRequest](StructStructIdJobSyncTextPostRequest.md) |  | |

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


## transactionTransactionIdPost

> AccountCreditCache transactionTransactionIdPost(transactionId)

Post a payment transaction

Process a completed payment transaction and apply the resulting credits to the user\&#39;s account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { TransactionTransactionIdPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Identifier of the payment transaction, as provided by the payment processor
    transactionId: transactionId_example,
  } satisfies TransactionTransactionIdPostRequest;

  try {
    const data = await api.transactionTransactionIdPost(body);
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
| **transactionId** | `string` | Identifier of the payment transaction, as provided by the payment processor | [Defaults to `undefined`] |

### Return type

[**AccountCreditCache**](AccountCreditCache.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully processed transaction, returns the updated account credit cache |  -  |
| **400** | Transaction ID is not a valid string |  -  |
| **401** | All users must be connected to an account |  -  |
| **404** | Transaction data was invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

