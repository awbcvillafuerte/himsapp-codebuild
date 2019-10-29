# @HimsApi.Icd10ControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**icd10ControllerCount**](Icd10ControllerApi.md#icd10ControllerCount) | **GET** /icd10-codes/count | 
[**icd10ControllerCreate**](Icd10ControllerApi.md#icd10ControllerCreate) | **POST** /icd10-codes | 
[**icd10ControllerDeleteById**](Icd10ControllerApi.md#icd10ControllerDeleteById) | **DELETE** /icd10-codes/{id} | 
[**icd10ControllerFind**](Icd10ControllerApi.md#icd10ControllerFind) | **GET** /icd10-codes | 
[**icd10ControllerFindById**](Icd10ControllerApi.md#icd10ControllerFindById) | **GET** /icd10-codes/{id} | 
[**icd10ControllerReplaceById**](Icd10ControllerApi.md#icd10ControllerReplaceById) | **PUT** /icd10-codes/{id} | 
[**icd10ControllerUpdateAll**](Icd10ControllerApi.md#icd10ControllerUpdateAll) | **PATCH** /icd10-codes | 
[**icd10ControllerUpdateById**](Icd10ControllerApi.md#icd10ControllerUpdateById) | **PATCH** /icd10-codes/{id} | 



## icd10ControllerCount

> InlineResponse200 icd10ControllerCount(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.Icd10ControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.icd10ControllerCount(opts).then((data) => {
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


## icd10ControllerCreate

> Icd10 icd10ControllerCreate(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.Icd10ControllerApi();
let opts = {
  'icd10': new @HimsApi.Icd10() // Icd10 | 
};
apiInstance.icd10ControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **icd10** | [**Icd10**](Icd10.md)|  | [optional] 

### Return type

[**Icd10**](Icd10.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## icd10ControllerDeleteById

> icd10ControllerDeleteById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.Icd10ControllerApi();
let id = "id_example"; // String | 
apiInstance.icd10ControllerDeleteById(id).then(() => {
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


## icd10ControllerFind

> [Icd10] icd10ControllerFind(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.Icd10ControllerApi();
let opts = {
  'filter': new @HimsApi.Filter11() // Filter11 | 
};
apiInstance.icd10ControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter11**](.md)|  | [optional] 

### Return type

[**[Icd10]**](Icd10.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## icd10ControllerFindById

> Icd10 icd10ControllerFindById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.Icd10ControllerApi();
let id = "id_example"; // String | 
apiInstance.icd10ControllerFindById(id).then((data) => {
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

[**Icd10**](Icd10.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## icd10ControllerReplaceById

> icd10ControllerReplaceById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.Icd10ControllerApi();
let id = "id_example"; // String | 
let opts = {
  'icd10': new @HimsApi.Icd10() // Icd10 | 
};
apiInstance.icd10ControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **icd10** | [**Icd10**](Icd10.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## icd10ControllerUpdateAll

> InlineResponse200 icd10ControllerUpdateAll(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.Icd10ControllerApi();
let opts = {
  'where': null, // Object | 
  'icd10Partial': new @HimsApi.Icd10Partial() // Icd10Partial | 
};
apiInstance.icd10ControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **icd10Partial** | [**Icd10Partial**](Icd10Partial.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## icd10ControllerUpdateById

> icd10ControllerUpdateById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.Icd10ControllerApi();
let id = "id_example"; // String | 
let opts = {
  'icd10Partial': new @HimsApi.Icd10Partial() // Icd10Partial | 
};
apiInstance.icd10ControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **icd10Partial** | [**Icd10Partial**](Icd10Partial.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

