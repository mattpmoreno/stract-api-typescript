# CatalogApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCatalog**](CatalogApi.md#createcatalogoperation) | **POST** /catalog | Create a catalog |
| [**deleteCatalog**](CatalogApi.md#deletecatalog) | **DELETE** /catalog/{catalogId} | Delete a catalog |
| [**getCatalogs**](CatalogApi.md#getcatalogs) | **GET** /catalog | Get all catalogs |



## createCatalog

> Catalog createCatalog(createCatalogRequest)

Create a catalog

Create a new catalog (collection of documents) for the user\&#39;s account

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { CreateCatalogOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // CreateCatalogRequest
    createCatalogRequest: ...,
  } satisfies CreateCatalogOperationRequest;

  try {
    const data = await api.createCatalog(body);
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


## deleteCatalog

> string deleteCatalog(catalogId)

Delete a catalog

Deletes the specified catalog. Also deletes all documents belonging to the catalog, including any underlying stored files.

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { DeleteCatalogRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string | Unique identifier of the catalog
    catalogId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteCatalogRequest;

  try {
    const data = await api.deleteCatalog(body);
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


## getCatalogs

> Array&lt;Catalog&gt; getCatalogs()

Get all catalogs

Retrieve all catalogs (collections of documents) for the user

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { GetCatalogsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  try {
    const data = await api.getCatalogs();
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

