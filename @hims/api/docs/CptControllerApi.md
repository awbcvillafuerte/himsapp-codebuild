# @HimsApi.CptControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cptControllerCount**](CptControllerApi.md#cptControllerCount) | **GET** /cpts/count | 
[**cptControllerCreate**](CptControllerApi.md#cptControllerCreate) | **POST** /cpts | 
[**cptControllerDeleteById**](CptControllerApi.md#cptControllerDeleteById) | **DELETE** /cpts/{id} | 
[**cptControllerFind**](CptControllerApi.md#cptControllerFind) | **GET** /cpts | 
[**cptControllerFindById**](CptControllerApi.md#cptControllerFindById) | **GET** /cpts/{id} | 
[**cptControllerReplaceById**](CptControllerApi.md#cptControllerReplaceById) | **PUT** /cpts/{id} | 
[**cptControllerUpdateAll**](CptControllerApi.md#cptControllerUpdateAll) | **PATCH** /cpts | 
[**cptControllerUpdateById**](CptControllerApi.md#cptControllerUpdateById) | **PATCH** /cpts/{id} | 



## cptControllerCount

> InlineResponse200 cptControllerCount(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.CptControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.cptControllerCount(opts).then((data) => {
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


## cptControllerCreate

> Cpt cptControllerCreate(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.CptControllerApi();
let opts = {
  'cpt': new @HimsApi.Cpt() // Cpt | 
};
apiInstance.cptControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cpt** | [**Cpt**](Cpt.md)|  | [optional] 

### Return type

[**Cpt**](Cpt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cptControllerDeleteById

> cptControllerDeleteById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.CptControllerApi();
let id = "id_example"; // String | 
apiInstance.cptControllerDeleteById(id).then(() => {
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


## cptControllerFind

> [Cpt] cptControllerFind(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.CptControllerApi();
let opts = {
  'filter': new @HimsApi.Filter8() // Filter8 | 
};
apiInstance.cptControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter8**](.md)|  | [optional] 

### Return type

[**[Cpt]**](Cpt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cptControllerFindById

> Cpt cptControllerFindById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.CptControllerApi();
let id = "id_example"; // String | 
apiInstance.cptControllerFindById(id).then((data) => {
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

[**Cpt**](Cpt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cptControllerReplaceById

> cptControllerReplaceById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.CptControllerApi();
let id = "id_example"; // String | 
let opts = {
  'cpt': new @HimsApi.Cpt() // Cpt | 
};
apiInstance.cptControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **cpt** | [**Cpt**](Cpt.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## cptControllerUpdateAll

> InlineResponse200 cptControllerUpdateAll(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.CptControllerApi();
let opts = {
  'where': null, // Object | 
  'cptPartial': new @HimsApi.CptPartial() // CptPartial | 
};
apiInstance.cptControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **cptPartial** | [**CptPartial**](CptPartial.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cptControllerUpdateById

> cptControllerUpdateById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.CptControllerApi();
let id = "id_example"; // String | 
let opts = {
  'cptPartial': new @HimsApi.CptPartial() // CptPartial | 
};
apiInstance.cptControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **cptPartial** | [**CptPartial**](CptPartial.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

