# @HimsApi.PolicyControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policyControllerCount**](PolicyControllerApi.md#policyControllerCount) | **GET** /policies/count | 
[**policyControllerCreate**](PolicyControllerApi.md#policyControllerCreate) | **POST** /policies | 
[**policyControllerDeleteById**](PolicyControllerApi.md#policyControllerDeleteById) | **DELETE** /policies/{id} | 
[**policyControllerFind**](PolicyControllerApi.md#policyControllerFind) | **GET** /policies | 
[**policyControllerFindById**](PolicyControllerApi.md#policyControllerFindById) | **GET** /policies/{id} | 
[**policyControllerReplaceById**](PolicyControllerApi.md#policyControllerReplaceById) | **PUT** /policies/{id} | 
[**policyControllerUpdateAll**](PolicyControllerApi.md#policyControllerUpdateAll) | **PATCH** /policies | 
[**policyControllerUpdateById**](PolicyControllerApi.md#policyControllerUpdateById) | **PATCH** /policies/{id} | 



## policyControllerCount

> InlineResponse200 policyControllerCount(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.PolicyControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.policyControllerCount(opts).then((data) => {
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


## policyControllerCreate

> Policy policyControllerCreate(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.PolicyControllerApi();
let opts = {
  'policy': new @HimsApi.Policy() // Policy | 
};
apiInstance.policyControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | [**Policy**](Policy.md)|  | [optional] 

### Return type

[**Policy**](Policy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## policyControllerDeleteById

> policyControllerDeleteById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.PolicyControllerApi();
let id = "id_example"; // String | 
apiInstance.policyControllerDeleteById(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## policyControllerFind

> [Policy] policyControllerFind(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.PolicyControllerApi();
let opts = {
  'filter': new @HimsApi.Filter13() // Filter13 | 
};
apiInstance.policyControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter13**](.md)|  | [optional] 

### Return type

[**[Policy]**](Policy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## policyControllerFindById

> Policy policyControllerFindById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.PolicyControllerApi();
let id = "id_example"; // String | 
apiInstance.policyControllerFindById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Policy**](Policy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## policyControllerReplaceById

> policyControllerReplaceById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.PolicyControllerApi();
let id = "id_example"; // String | 
let opts = {
  'policy': new @HimsApi.Policy() // Policy | 
};
apiInstance.policyControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **policy** | [**Policy**](Policy.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## policyControllerUpdateAll

> InlineResponse200 policyControllerUpdateAll(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.PolicyControllerApi();
let opts = {
  'where': null, // Object | 
  'policy': new @HimsApi.Policy() // Policy | 
};
apiInstance.policyControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **policy** | [**Policy**](Policy.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## policyControllerUpdateById

> policyControllerUpdateById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.PolicyControllerApi();
let id = "id_example"; // String | 
let opts = {
  'policy': new @HimsApi.Policy() // Policy | 
};
apiInstance.policyControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **policy** | [**Policy**](Policy.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

