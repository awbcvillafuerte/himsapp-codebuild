# @HimsApi.MemberControllerApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**memberControllerAttachMemberContract**](MemberControllerApi.md#memberControllerAttachMemberContract) | **PATCH** /members/{id}/contracts | 
[**memberControllerCount**](MemberControllerApi.md#memberControllerCount) | **GET** /members/count | 
[**memberControllerCreate**](MemberControllerApi.md#memberControllerCreate) | **POST** /members | 
[**memberControllerDeleteById**](MemberControllerApi.md#memberControllerDeleteById) | **DELETE** /members/{id} | 
[**memberControllerFind**](MemberControllerApi.md#memberControllerFind) | **GET** /members | 
[**memberControllerFindById**](MemberControllerApi.md#memberControllerFindById) | **GET** /members/{id} | 
[**memberControllerReplaceById**](MemberControllerApi.md#memberControllerReplaceById) | **PUT** /members/{id} | 
[**memberControllerSearch**](MemberControllerApi.md#memberControllerSearch) | **GET** /members/search | 
[**memberControllerUpdateAll**](MemberControllerApi.md#memberControllerUpdateAll) | **PATCH** /members | 
[**memberControllerUpdateById**](MemberControllerApi.md#memberControllerUpdateById) | **PATCH** /members/{id} | 



## memberControllerAttachMemberContract

> memberControllerAttachMemberContract(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let id = "id_example"; // String | 
let opts = {
  'body': null // Object | 
};
apiInstance.memberControllerAttachMemberContract(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## memberControllerCount

> InlineResponse200 memberControllerCount(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let opts = {
  'where': null // Object | 
};
apiInstance.memberControllerCount(opts).then((data) => {
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


## memberControllerCreate

> Member memberControllerCreate(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let opts = {
  'member': new @HimsApi.Member() // Member | 
};
apiInstance.memberControllerCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **member** | [**Member**](Member.md)|  | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## memberControllerDeleteById

> memberControllerDeleteById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let id = "id_example"; // String | 
apiInstance.memberControllerDeleteById(id).then(() => {
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


## memberControllerFind

> [Member] memberControllerFind(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let opts = {
  'filter': new @HimsApi.Filter12() // Filter12 | 
};
apiInstance.memberControllerFind(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter12**](.md)|  | [optional] 

### Return type

[**[Member]**](Member.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberControllerFindById

> Member memberControllerFindById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let id = "id_example"; // String | 
apiInstance.memberControllerFindById(id).then((data) => {
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

[**Member**](Member.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberControllerReplaceById

> memberControllerReplaceById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let id = "id_example"; // String | 
let opts = {
  'member': new @HimsApi.Member() // Member | 
};
apiInstance.memberControllerReplaceById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **member** | [**Member**](Member.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## memberControllerSearch

> Member memberControllerSearch(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let opts = {
  'memberCardNo': "memberCardNo_example" // String | 
};
apiInstance.memberControllerSearch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberCardNo** | **String**|  | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberControllerUpdateAll

> InlineResponse200 memberControllerUpdateAll(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let opts = {
  'where': null, // Object | 
  'member': new @HimsApi.Member() // Member | 
};
apiInstance.memberControllerUpdateAll(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **member** | [**Member**](Member.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## memberControllerUpdateById

> memberControllerUpdateById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.MemberControllerApi();
let id = "id_example"; // String | 
let opts = {
  'member': new @HimsApi.Member() // Member | 
};
apiInstance.memberControllerUpdateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **member** | [**Member**](Member.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

