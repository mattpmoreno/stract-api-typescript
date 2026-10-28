# AccountCreditLedgerApi

All URIs are relative to *https://api.stract-api.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccountCreditLedgerForSpendingUser**](AccountCreditLedgerApi.md#getaccountcreditledgerforspendinguser) | **GET** /account_credit_ledger | Get the account credit ledger |



## getAccountCreditLedgerForSpendingUser

> Array&lt;AccountCreditLedger&gt; getAccountCreditLedgerForSpendingUser()

Get the account credit ledger

Retrieve the credit ledger entries created by the current user within their account

### Example

```ts
import {
  Configuration,
  AccountCreditLedgerApi,
} from '';
import type { GetAccountCreditLedgerForSpendingUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountCreditLedgerApi(config);

  try {
    const data = await api.getAccountCreditLedgerForSpendingUser();
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

