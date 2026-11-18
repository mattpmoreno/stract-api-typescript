# CreditsApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCurrentCredits**](CreditsApi.md#getcurrentcredits) | **GET** /current_credits | Get the user\&#39;s credit balance |
| [**getCurrentOrgCredits**](CreditsApi.md#getcurrentorgcredits) | **GET** /current_org_credits | Get the organization credit balance |



## getCurrentCredits

> AccountCreditCache getCurrentCredits()

Get the user\&#39;s credit balance

Return the current user\&#39;s credit balance. For the shared balance use getCurrentOrgCredits. Uploads, document processing, and jobs spend credits.

### Example

```ts
import {
  Configuration,
  CreditsApi,
} from '';
import type { GetCurrentCreditsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CreditsApi(config);

  try {
    const data = await api.getCurrentCredits();
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


## getCurrentOrgCredits

> AccountCreditCache getCurrentOrgCredits()

Get the organization credit balance

Return the credit balance shared by the whole account (suser_id is null)

### Example

```ts
import {
  Configuration,
  CreditsApi,
} from '';
import type { GetCurrentOrgCreditsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CreditsApi(config);

  try {
    const data = await api.getCurrentOrgCredits();
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

