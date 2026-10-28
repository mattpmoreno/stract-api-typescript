# ApiKeyApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getApiKeys**](ApiKeyApi.md#getapikeys) | **GET** /api-key | Get the current account\&#39;s API keys |



## getApiKeys

> Array&lt;ApiKey&gt; getApiKeys()

Get the current account\&#39;s API keys

Retrieve all API keys belonging to the current user\&#39;s account

### Example

```ts
import {
  Configuration,
  ApiKeyApi,
} from '';
import type { GetApiKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiKeyApi(config);

  try {
    const data = await api.getApiKeys();
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

