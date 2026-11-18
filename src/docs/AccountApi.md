# AccountApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAccountUser**](AccountApi.md#createaccountuseroperation) | **POST** /account/user | Add a user to the current account |
| [**editAccount**](AccountApi.md#editaccountoperation) | **PUT** /account | Edit the current account |
| [**getAccount**](AccountApi.md#getaccount) | **GET** /account | Get the current account |
| [**getAccountUsers**](AccountApi.md#getaccountusers) | **GET** /account/user | List users in the current account |



## createAccountUser

> AccountUser createAccountUser(createAccountUserRequest)

Add a user to the current account

Create a user and add them to the current account. Admin only. Requires an active subscription; team subscriptions are limited to 10 users.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from '';
import type { CreateAccountUserOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // CreateAccountUserRequest
    createAccountUserRequest: ...,
  } satisfies CreateAccountUserOperationRequest;

  try {
    const data = await api.createAccountUser(body);
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


## editAccount

> Account editAccount(editAccountRequest)

Edit the current account

Rename the current account. Admin only. Returns the updated account.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from '';
import type { EditAccountOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // EditAccountRequest
    editAccountRequest: ...,
  } satisfies EditAccountOperationRequest;

  try {
    const data = await api.editAccount(body);
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


## getAccount

> Account getAccount()

Get the current account

Return the current user\&#39;s account, including their role (admin or base) and subscription status

### Example

```ts
import {
  Configuration,
  AccountApi,
} from '';
import type { GetAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.getAccount();
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


## getAccountUsers

> Array&lt;AccountUser&gt; getAccountUsers()

List users in the current account

List all users in the current account. Admin only.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from '';
import type { GetAccountUsersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.getAccountUsers();
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

