# StructApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveStruct**](StructApi.md#archivestruct) | **POST** /struct/{structId}/archive | Archive a struct |
| [**createStruct**](StructApi.md#createstructoperation) | **POST** /struct | Create a new data structure |
| [**getStructs**](StructApi.md#getstructs) | **GET** /struct | Get all data structures |



## archiveStruct

> string archiveStruct(structId)

Archive a struct

Marks the specified struct as archived

### Example

```ts
import {
  Configuration,
  StructApi,
} from '';
import type { ArchiveStructRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StructApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ArchiveStructRequest;

  try {
    const data = await api.archiveStruct(body);
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


## createStruct

> Struct createStruct(createStructRequest)

Create a new data structure

Create a new data structure to be used in document analysis

### Example

```ts
import {
  Configuration,
  StructApi,
} from '';
import type { CreateStructOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StructApi(config);

  const body = {
    // CreateStructRequest
    createStructRequest: ...,
  } satisfies CreateStructOperationRequest;

  try {
    const data = await api.createStruct(body);
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


## getStructs

> Array&lt;Struct&gt; getStructs()

Get all data structures

Retrieve all data structures for user

### Example

```ts
import {
  Configuration,
  StructApi,
} from '';
import type { GetStructsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StructApi(config);

  try {
    const data = await api.getStructs();
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

