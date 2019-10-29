# @HimsApi.FacilityControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**facilityControllerCount**](FacilityControllerApi.md#facilityControllerCount) | **GET** /facilities/count | 
[**facilityControllerCreate**](FacilityControllerApi.md#facilityControllerCreate) | **POST** /facilities | 
[**facilityControllerDeleteById**](FacilityControllerApi.md#facilityControllerDeleteById) | **DELETE** /facilities/{id} | 
[**facilityControllerFind**](FacilityControllerApi.md#facilityControllerFind) | **GET** /facilities | 
[**facilityControllerFindById**](FacilityControllerApi.md#facilityControllerFindById) | **GET** /facilities/{id} | 
[**facilityControllerReplaceById**](FacilityControllerApi.md#facilityControllerReplaceById) | **PUT** /facilities/{id} | 
[**facilityControllerUpdateAll**](FacilityControllerApi.md#facilityControllerUpdateAll) | **PATCH** /facilities | 
[**facilityControllerUpdateById**](FacilityControllerApi.md#facilityControllerUpdateById) | **PATCH** /facilities/{id} | 



## facilityControllerCount

> InlineResponse200 facilityControllerCount(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.FacilityControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.facilityControllerCount(opts).then((data) => {
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


## facilityControllerCreate

> Facility facilityControllerCreate(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.FacilityControllerApi();
let opts = {
  'facility': new @HimsApi.Facility() // Facility | 
};
apiInstance.facilityControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facility** | [**Facility**](Facility.md)|  | [optional] 

### Return type

[**Facility**](Facility.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## facilityControllerDeleteById

> facilityControllerDeleteById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.FacilityControllerApi();
let id = "id_example"; // String | 
apiInstance.facilityControllerDeleteById(id).then(() => {
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


## facilityControllerFind

> [Facility] facilityControllerFind(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.FacilityControllerApi();
let opts = {
  'filter': new @HimsApi.Filter10() // Filter10 | 
};
apiInstance.facilityControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter10**](.md)|  | [optional] 

### Return type

[**[Facility]**](Facility.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## facilityControllerFindById

> Facility facilityControllerFindById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.FacilityControllerApi();
let id = "id_example"; // String | 
apiInstance.facilityControllerFindById(id).then((data) => {
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

[**Facility**](Facility.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## facilityControllerReplaceById

> facilityControllerReplaceById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.FacilityControllerApi();
let id = "id_example"; // String | 
let opts = {
  'facility': new @HimsApi.Facility() // Facility | 
};
apiInstance.facilityControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **facility** | [**Facility**](Facility.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## facilityControllerUpdateAll

> InlineResponse200 facilityControllerUpdateAll(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.FacilityControllerApi();
let opts = {
  'where': null, // Object | 
  'facilityPartial': new @HimsApi.FacilityPartial() // FacilityPartial | 
};
apiInstance.facilityControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **facilityPartial** | [**FacilityPartial**](FacilityPartial.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## facilityControllerUpdateById

> facilityControllerUpdateById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.FacilityControllerApi();
let id = "id_example"; // String | 
let opts = {
  'facilityPartial': new @HimsApi.FacilityPartial() // FacilityPartial | 
};
apiInstance.facilityControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **facilityPartial** | [**FacilityPartial**](FacilityPartial.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

