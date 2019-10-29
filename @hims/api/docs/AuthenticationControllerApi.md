# @HimsApi.AuthenticationControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticationControllerAuth**](AuthenticationControllerApi.md#authenticationControllerAuth) | **POST** /oidc/auth | 
[**authenticationControllerCheckLogin**](AuthenticationControllerApi.md#authenticationControllerCheckLogin) | **GET** /interaction/{grant} | 
[**authenticationControllerSessionLogin**](AuthenticationControllerApi.md#authenticationControllerSessionLogin) | **POST** /interaction/{grant}/login | 
[**authenticationControllerToken**](AuthenticationControllerApi.md#authenticationControllerToken) | **POST** /oidc/token | 



## authenticationControllerAuth

> InlineResponse200 authenticationControllerAuth(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.AuthenticationControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.authenticationControllerAuth(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authenticationControllerCheckLogin

> authenticationControllerCheckLogin(grant)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.AuthenticationControllerApi();
let grant = "grant_example"; // String | 
apiInstance.authenticationControllerCheckLogin(grant).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## authenticationControllerSessionLogin

> authenticationControllerSessionLogin(grant)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.AuthenticationControllerApi();
let grant = "grant_example"; // String | 
apiInstance.authenticationControllerSessionLogin(grant).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: Not defined


## authenticationControllerToken

> InlineResponse200 authenticationControllerToken(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.AuthenticationControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.authenticationControllerToken(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

