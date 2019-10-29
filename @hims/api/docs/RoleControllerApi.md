# @HimsApi.RoleControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roleControllerCount**](RoleControllerApi.md#roleControllerCount) | **GET** /roles/count | 
[**roleControllerCreate**](RoleControllerApi.md#roleControllerCreate) | **POST** /roles | 
[**roleControllerDeleteById**](RoleControllerApi.md#roleControllerDeleteById) | **DELETE** /roles/{id} | 
[**roleControllerFind**](RoleControllerApi.md#roleControllerFind) | **GET** /roles | 
[**roleControllerFindById**](RoleControllerApi.md#roleControllerFindById) | **GET** /roles/{id} | 
[**roleControllerReplaceById**](RoleControllerApi.md#roleControllerReplaceById) | **PUT** /roles/{id} | 
[**roleControllerUpdateAll**](RoleControllerApi.md#roleControllerUpdateAll) | **PATCH** /roles | 
[**roleControllerUpdateById**](RoleControllerApi.md#roleControllerUpdateById) | **PATCH** /roles/{id} | 



## roleControllerCount

> InlineResponse200 roleControllerCount(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.RoleControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.roleControllerCount(opts).then((data) => {
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


## roleControllerCreate

> Role roleControllerCreate(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.RoleControllerApi();
let opts = {
  'role': new @HimsApi.Role() // Role | 
};
apiInstance.roleControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | [**Role**](Role.md)|  | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## roleControllerDeleteById

> roleControllerDeleteById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.RoleControllerApi();
let id = "id_example"; // String | 
apiInstance.roleControllerDeleteById(id).then(() => {
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


## roleControllerFind

> [Role] roleControllerFind(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.RoleControllerApi();
let opts = {
  'filter': new @HimsApi.Filter14() // Filter14 | 
};
apiInstance.roleControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter14**](.md)|  | [optional] 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roleControllerFindById

> Role roleControllerFindById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.RoleControllerApi();
let id = "id_example"; // String | 
apiInstance.roleControllerFindById(id).then((data) => {
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

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roleControllerReplaceById

> roleControllerReplaceById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.RoleControllerApi();
let id = "id_example"; // String | 
let opts = {
  'role': new @HimsApi.Role() // Role | 
};
apiInstance.roleControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **role** | [**Role**](Role.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## roleControllerUpdateAll

> InlineResponse200 roleControllerUpdateAll(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.RoleControllerApi();
let opts = {
  'where': null, // Object | 
  'role': new @HimsApi.Role() // Role | 
};
apiInstance.roleControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **role** | [**Role**](Role.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## roleControllerUpdateById

> roleControllerUpdateById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.RoleControllerApi();
let id = "id_example"; // String | 
let opts = {
  'role': new @HimsApi.Role() // Role | 
};
apiInstance.roleControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **role** | [**Role**](Role.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

