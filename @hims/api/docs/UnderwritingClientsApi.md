# @HimsApi.UnderwritingClientsApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countClients**](UnderwritingClientsApi.md#countClients) | **GET** /clients/count | 
[**createClient**](UnderwritingClientsApi.md#createClient) | **POST** /clients | 
[**deleteClientById**](UnderwritingClientsApi.md#deleteClientById) | **DELETE** /clients/{id} | 
[**findClientById**](UnderwritingClientsApi.md#findClientById) | **GET** /clients/{id} | 
[**findClients**](UnderwritingClientsApi.md#findClients) | **GET** /clients | 
[**replaceClientById**](UnderwritingClientsApi.md#replaceClientById) | **PUT** /clients/{id} | 
[**updateAllClients**](UnderwritingClientsApi.md#updateAllClients) | **PATCH** /clients | 
[**updateClientById**](UnderwritingClientsApi.md#updateClientById) | **PATCH** /clients/{id} | 



## countClients

> InlineResponse200 countClients(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingClientsApi();
let opts = {
  'where': null // Object | 
};
apiInstance.countClients(opts).then((data) => {
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


## createClient

> Object createClient(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingClientsApi();
let opts = {
  'client': new @HimsApi.Client() // Client | 
};
apiInstance.createClient(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | [**Client**](Client.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteClientById

> deleteClientById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingClientsApi();
let id = "id_example"; // String | 
apiInstance.deleteClientById(id).then(() => {
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


## findClientById

> Client findClientById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingClientsApi();
let id = "id_example"; // String | 
apiInstance.findClientById(id).then((data) => {
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

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findClients

> [Client] findClients(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingClientsApi();
let opts = {
  'filter': new @HimsApi.Filter7() // Filter7 | 
};
apiInstance.findClients(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter7**](.md)|  | [optional] 

### Return type

[**[Client]**](Client.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## replaceClientById

> replaceClientById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingClientsApi();
let id = "id_example"; // String | 
let opts = {
  'client': new @HimsApi.Client() // Client | 
};
apiInstance.replaceClientById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **client** | [**Client**](Client.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateAllClients

> InlineResponse200 updateAllClients(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingClientsApi();
let opts = {
  'where': null, // Object | 
  'client': new @HimsApi.Client() // Client | 
};
apiInstance.updateAllClients(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **client** | [**Client**](Client.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateClientById

> updateClientById(id, body)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingClientsApi();
let id = "id_example"; // String | 
let body = null; // Object | Payload
apiInstance.updateClientById(id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | **Object**| Payload | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, multipart/form-data
- **Accept**: Not defined

