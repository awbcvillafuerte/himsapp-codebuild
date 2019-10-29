# @HimsApi.UserControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerCount**](UserControllerApi.md#userControllerCount) | **GET** /users/count | 
[**userControllerCreate**](UserControllerApi.md#userControllerCreate) | **POST** /users | 
[**userControllerDeleteById**](UserControllerApi.md#userControllerDeleteById) | **DELETE** /users/{id} | 
[**userControllerFind**](UserControllerApi.md#userControllerFind) | **GET** /users | 
[**userControllerFindById**](UserControllerApi.md#userControllerFindById) | **GET** /users/{id} | 
[**userControllerPrintCurrentUser**](UserControllerApi.md#userControllerPrintCurrentUser) | **GET** /users/me | 
[**userControllerReplaceById**](UserControllerApi.md#userControllerReplaceById) | **PUT** /users/{id} | 
[**userControllerUpdateAll**](UserControllerApi.md#userControllerUpdateAll) | **PATCH** /users | 
[**userControllerUpdateById**](UserControllerApi.md#userControllerUpdateById) | **PATCH** /users/{id} | 



## userControllerCount

> InlineResponse200 userControllerCount(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.userControllerCount(opts).then((data) => {
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


## userControllerCreate

> User userControllerCreate(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
let opts = {
  'user': new @HimsApi.User() // User | 
};
apiInstance.userControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userControllerDeleteById

> userControllerDeleteById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
let id = "id_example"; // String | 
apiInstance.userControllerDeleteById(id).then(() => {
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


## userControllerFind

> [User] userControllerFind(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
let opts = {
  'filter': new @HimsApi.Filter15() // Filter15 | 
};
apiInstance.userControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter15**](.md)|  | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userControllerFindById

> User userControllerFindById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
let id = "id_example"; // String | 
apiInstance.userControllerFindById(id).then((data) => {
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userControllerPrintCurrentUser

> InlineResponse2001 userControllerPrintCurrentUser()



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
apiInstance.userControllerPrintCurrentUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userControllerReplaceById

> userControllerReplaceById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
let id = "id_example"; // String | 
let opts = {
  'user': new @HimsApi.User() // User | 
};
apiInstance.userControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## userControllerUpdateAll

> InlineResponse200 userControllerUpdateAll(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
let opts = {
  'where': null, // Object | 
  'user': new @HimsApi.User() // User | 
};
apiInstance.userControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userControllerUpdateById

> userControllerUpdateById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UserControllerApi();
let id = "id_example"; // String | 
let opts = {
  'user': new @HimsApi.User() // User | 
};
apiInstance.userControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

