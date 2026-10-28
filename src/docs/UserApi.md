# UserApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**editMyUser**](UserApi.md#editmyuseroperation) | **PUT** /my_user | Edit the current user |
| [**getMyUser**](UserApi.md#getmyuser) | **GET** /my_user | Get the current user |



## editMyUser

> User editMyUser(editMyUserRequest)

Edit the current user

Update one or more properties of the currently authenticated user. At least one property must be provided.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { EditMyUserOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // EditMyUserRequest
    editMyUserRequest: ...,
  } satisfies EditMyUserOperationRequest;

  try {
    const data = await api.editMyUser(body);
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


## getMyUser

> User getMyUser()

Get the current user

Retrieve the profile of the currently authenticated user

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { GetMyUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.getMyUser();
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

