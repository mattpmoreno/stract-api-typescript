# LlmModelApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLlmModels**](LlmModelApi.md#getllmmodels) | **GET** /llm_model | Get the available LLM models |



## getLlmModels

> Array&lt;LlmModel&gt; getLlmModels()

Get the available LLM models

Retrieve the list of LLM models that can be selected via llm_model_id when creating a job

### Example

```ts
import {
  Configuration,
  LlmModelApi,
} from '';
import type { GetLlmModelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LlmModelApi(config);

  try {
    const data = await api.getLlmModels();
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

