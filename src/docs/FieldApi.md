# FieldApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFields**](FieldApi.md#createfields) | **POST** /struct/{structId}/field | Add fields to a struct |
| [**deleteField**](FieldApi.md#deletefield) | **DELETE** /field/{fieldId} | Delete a field |
| [**editField**](FieldApi.md#editfieldoperation) | **PUT** /field/{fieldId} | Edit a field |
| [**getFields**](FieldApi.md#getfields) | **GET** /struct/{structId}/field | List fields of a struct |



## createFields

> Array&lt;Field&gt; createFields(structId, createFieldRequest)

Add fields to a struct

Create one or more fields in the struct. Each field names and specifies a piece of information to extract; write a clear description since it guides LLM extraction . Note that field names become the key used in the resulting JSON or CSV, so names should be JSON and CSV friendly. enum_values is required when type is enum.

### Example

```ts
import {
  Configuration,
  FieldApi,
} from '';
import type { CreateFieldsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FieldApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<CreateFieldRequest>
    createFieldRequest: ...,
  } satisfies CreateFieldsRequest;

  try {
    const data = await api.createFields(body);
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


## deleteField

> DeletedField deleteField(fieldId)

Delete a field

Delete the field from its struct. Returns its ID.

### Example

```ts
import {
  Configuration,
  FieldApi,
} from '';
import type { DeleteFieldRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FieldApi(config);

  const body = {
    // string | Unique identifier of the field
    fieldId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteFieldRequest;

  try {
    const data = await api.deleteField(body);
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

[**DeletedField**](DeletedField.md)

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


## editField

> Field editField(fieldId, editFieldRequest)

Edit a field

Update a field\&#39;s name, description, type or enum_values. Provide at least one. Returns the updated field.

### Example

```ts
import {
  Configuration,
  FieldApi,
} from '';
import type { EditFieldOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FieldApi(config);

  const body = {
    // string | Unique identifier of the field
    fieldId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EditFieldRequest
    editFieldRequest: ...,
  } satisfies EditFieldOperationRequest;

  try {
    const data = await api.editField(body);
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


## getFields

> Array&lt;Field&gt; getFields(structId)

List fields of a struct

List the field definitions (name, description, type) in the struct

### Example

```ts
import {
  Configuration,
  FieldApi,
} from '';
import type { GetFieldsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FieldApi(config);

  const body = {
    // string | Unique identifier of the struct
    structId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetFieldsRequest;

  try {
    const data = await api.getFields(body);
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

