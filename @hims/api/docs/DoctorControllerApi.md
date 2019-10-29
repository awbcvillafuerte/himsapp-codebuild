# @HimsApi.DoctorControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**doctorControllerCount**](DoctorControllerApi.md#doctorControllerCount) | **GET** /doctors/count | 
[**doctorControllerCreate**](DoctorControllerApi.md#doctorControllerCreate) | **POST** /doctors | 
[**doctorControllerDeleteById**](DoctorControllerApi.md#doctorControllerDeleteById) | **DELETE** /doctors/{id} | 
[**doctorControllerFind**](DoctorControllerApi.md#doctorControllerFind) | **GET** /doctors | 
[**doctorControllerFindById**](DoctorControllerApi.md#doctorControllerFindById) | **GET** /doctors/{id} | 
[**doctorControllerReplaceById**](DoctorControllerApi.md#doctorControllerReplaceById) | **PUT** /doctors/{id} | 
[**doctorControllerUpdateAll**](DoctorControllerApi.md#doctorControllerUpdateAll) | **PATCH** /doctors | 
[**doctorControllerUpdateById**](DoctorControllerApi.md#doctorControllerUpdateById) | **PATCH** /doctors/{id} | 



## doctorControllerCount

> InlineResponse200 doctorControllerCount(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.DoctorControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.doctorControllerCount(opts).then((data) => {
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


## doctorControllerCreate

> Doctor doctorControllerCreate(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.DoctorControllerApi();
let opts = {
  'doctor': new @HimsApi.Doctor() // Doctor | 
};
apiInstance.doctorControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doctor** | [**Doctor**](Doctor.md)|  | [optional] 

### Return type

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## doctorControllerDeleteById

> doctorControllerDeleteById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.DoctorControllerApi();
let id = "id_example"; // String | 
apiInstance.doctorControllerDeleteById(id).then(() => {
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


## doctorControllerFind

> [Doctor] doctorControllerFind(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.DoctorControllerApi();
let opts = {
  'filter': new @HimsApi.Filter9() // Filter9 | 
};
apiInstance.doctorControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter9**](.md)|  | [optional] 

### Return type

[**[Doctor]**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## doctorControllerFindById

> Doctor doctorControllerFindById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.DoctorControllerApi();
let id = "id_example"; // String | 
apiInstance.doctorControllerFindById(id).then((data) => {
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

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## doctorControllerReplaceById

> doctorControllerReplaceById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.DoctorControllerApi();
let id = "id_example"; // String | 
let opts = {
  'doctor': new @HimsApi.Doctor() // Doctor | 
};
apiInstance.doctorControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **doctor** | [**Doctor**](Doctor.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## doctorControllerUpdateAll

> InlineResponse200 doctorControllerUpdateAll(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.DoctorControllerApi();
let opts = {
  'where': null, // Object | 
  'doctorPartial': new @HimsApi.DoctorPartial() // DoctorPartial | 
};
apiInstance.doctorControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **doctorPartial** | [**DoctorPartial**](DoctorPartial.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## doctorControllerUpdateById

> doctorControllerUpdateById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.DoctorControllerApi();
let id = "id_example"; // String | 
let opts = {
  'doctorPartial': new @HimsApi.DoctorPartial() // DoctorPartial | 
};
apiInstance.doctorControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **doctorPartial** | [**DoctorPartial**](DoctorPartial.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

