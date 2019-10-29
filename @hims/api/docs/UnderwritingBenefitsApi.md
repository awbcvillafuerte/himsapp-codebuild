# @HimsApi.UnderwritingBenefitsApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countBaseBenefitComments**](UnderwritingBenefitsApi.md#countBaseBenefitComments) | **GET** /base-benefit-plans/comments/count | 
[**countBaseBenefitRevisions**](UnderwritingBenefitsApi.md#countBaseBenefitRevisions) | **GET** /base-benefit-plans/revisions/count | 
[**countBaseBenefits**](UnderwritingBenefitsApi.md#countBaseBenefits) | **GET** /base-benefit-plans/count | 
[**createBaseBenefit**](UnderwritingBenefitsApi.md#createBaseBenefit) | **POST** /base-benefit-plans/{id} | 
[**createBaseBenefitComment**](UnderwritingBenefitsApi.md#createBaseBenefitComment) | **POST** /base-benefit-plans/comments | 
[**createBaseBenefitRevision**](UnderwritingBenefitsApi.md#createBaseBenefitRevision) | **POST** /base-benefit-plans/revisions | 
[**deleteBaseBenefitById**](UnderwritingBenefitsApi.md#deleteBaseBenefitById) | **DELETE** /base-benefit-plans/{id} | 
[**deleteBaseBenefitCommentById**](UnderwritingBenefitsApi.md#deleteBaseBenefitCommentById) | **DELETE** /base-benefit-plans/comments/{id} | 
[**deleteBaseBenefitRevisionById**](UnderwritingBenefitsApi.md#deleteBaseBenefitRevisionById) | **DELETE** /base-benefit-plans/revisions/{id} | 
[**find**](UnderwritingBenefitsApi.md#find) | **GET** /base-benefit-plans | 
[**findBaseBenefitById**](UnderwritingBenefitsApi.md#findBaseBenefitById) | **GET** /base-benefit-plans/{id} | 
[**findBaseBenefitCommentsById**](UnderwritingBenefitsApi.md#findBaseBenefitCommentsById) | **GET** /base-benefit-plans/comments/{id} | 
[**findBaseBenefitRevisionById**](UnderwritingBenefitsApi.md#findBaseBenefitRevisionById) | **GET** /base-benefit-plans/revisions/{id} | 
[**findBaseBenefitRevisions**](UnderwritingBenefitsApi.md#findBaseBenefitRevisions) | **GET** /base-benefit-plans/revisions | 
[**findComments**](UnderwritingBenefitsApi.md#findComments) | **GET** /base-benefit-plans/comments | 
[**replaceBaseBenefitById**](UnderwritingBenefitsApi.md#replaceBaseBenefitById) | **PUT** /base-benefit-plans/{id} | 
[**replaceBaseBenefitCommentById**](UnderwritingBenefitsApi.md#replaceBaseBenefitCommentById) | **PUT** /base-benefit-plans/comments/{id} | 
[**replaceBaseBenefitRevisionById**](UnderwritingBenefitsApi.md#replaceBaseBenefitRevisionById) | **PUT** /base-benefit-plans/revisions/{id} | 
[**updateAllBaseBenefitComments**](UnderwritingBenefitsApi.md#updateAllBaseBenefitComments) | **PATCH** /base-benefit-plans/comments | 
[**updateAllBaseBenefitRevisions**](UnderwritingBenefitsApi.md#updateAllBaseBenefitRevisions) | **PATCH** /base-benefit-plans/revisions | 
[**updateAllBaseBenefits**](UnderwritingBenefitsApi.md#updateAllBaseBenefits) | **PATCH** /base-benefit-plans | 
[**updateBaseBenefitById**](UnderwritingBenefitsApi.md#updateBaseBenefitById) | **PATCH** /base-benefit-plans/{id} | 
[**updateBaseBenefitCommentById**](UnderwritingBenefitsApi.md#updateBaseBenefitCommentById) | **PATCH** /base-benefit-plans/comments/{id} | 
[**updateBaseBenefitRevisionById**](UnderwritingBenefitsApi.md#updateBaseBenefitRevisionById) | **PATCH** /base-benefit-plans/revisions/{id} | 



## countBaseBenefitComments

> InlineResponse200 countBaseBenefitComments(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'where': null // Object | 
};
apiInstance.countBaseBenefitComments(opts).then((data) => {
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


## countBaseBenefitRevisions

> InlineResponse200 countBaseBenefitRevisions(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'where': null // Object | 
};
apiInstance.countBaseBenefitRevisions(opts).then((data) => {
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


## countBaseBenefits

> InlineResponse200 countBaseBenefits(opts)



Counts the matching base benefits for a given filter

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'where': null // Object | 
};
apiInstance.countBaseBenefits(opts).then((data) => {
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


## createBaseBenefit

> BaseBenefitPlan createBaseBenefit(id, opts)



Creates a base benefit

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
let opts = {
  'baseBenefitPlan': new @HimsApi.BaseBenefitPlan() // BaseBenefitPlan | 
};
apiInstance.createBaseBenefit(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **baseBenefitPlan** | [**BaseBenefitPlan**](BaseBenefitPlan.md)|  | [optional] 

### Return type

[**BaseBenefitPlan**](BaseBenefitPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBaseBenefitComment

> BaseBenefitComment createBaseBenefitComment(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'baseBenefitComment': new @HimsApi.BaseBenefitComment() // BaseBenefitComment | 
};
apiInstance.createBaseBenefitComment(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseBenefitComment** | [**BaseBenefitComment**](BaseBenefitComment.md)|  | [optional] 

### Return type

[**BaseBenefitComment**](BaseBenefitComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBaseBenefitRevision

> BaseBenefitRevision createBaseBenefitRevision(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'baseBenefitRevision': new @HimsApi.BaseBenefitRevision() // BaseBenefitRevision | 
};
apiInstance.createBaseBenefitRevision(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseBenefitRevision** | [**BaseBenefitRevision**](BaseBenefitRevision.md)|  | [optional] 

### Return type

[**BaseBenefitRevision**](BaseBenefitRevision.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBaseBenefitById

> deleteBaseBenefitById(id)



Deletes a base benefit

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
apiInstance.deleteBaseBenefitById(id).then(() => {
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


## deleteBaseBenefitCommentById

> deleteBaseBenefitCommentById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
apiInstance.deleteBaseBenefitCommentById(id).then(() => {
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


## deleteBaseBenefitRevisionById

> deleteBaseBenefitRevisionById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
apiInstance.deleteBaseBenefitRevisionById(id).then(() => {
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


## find

> [BaseBenefitPlan] find(opts)



Searches for a list of base benefits

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'filter': new @HimsApi.Filter2() // Filter2 | 
};
apiInstance.find(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter2**](.md)|  | [optional] 

### Return type

[**[BaseBenefitPlan]**](BaseBenefitPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBaseBenefitById

> BaseBenefitPlan findBaseBenefitById(id)



Retrieves a base benefit

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
apiInstance.findBaseBenefitById(id).then((data) => {
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

[**BaseBenefitPlan**](BaseBenefitPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBaseBenefitCommentsById

> BaseBenefitComment findBaseBenefitCommentsById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
apiInstance.findBaseBenefitCommentsById(id).then((data) => {
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

[**BaseBenefitComment**](BaseBenefitComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBaseBenefitRevisionById

> BaseBenefitRevision findBaseBenefitRevisionById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
apiInstance.findBaseBenefitRevisionById(id).then((data) => {
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

[**BaseBenefitRevision**](BaseBenefitRevision.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBaseBenefitRevisions

> [BaseBenefitRevision] findBaseBenefitRevisions(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'filter': new @HimsApi.Filter1() // Filter1 | 
};
apiInstance.findBaseBenefitRevisions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter1**](.md)|  | [optional] 

### Return type

[**[BaseBenefitRevision]**](BaseBenefitRevision.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findComments

> [BaseBenefitComment] findComments(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'filter': new @HimsApi.Filter() // Filter | 
};
apiInstance.findComments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter**](.md)|  | [optional] 

### Return type

[**[BaseBenefitComment]**](BaseBenefitComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## replaceBaseBenefitById

> replaceBaseBenefitById(id, opts)



Replaces a base benefit

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
let opts = {
  'baseBenefitPlan': new @HimsApi.BaseBenefitPlan() // BaseBenefitPlan | 
};
apiInstance.replaceBaseBenefitById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **baseBenefitPlan** | [**BaseBenefitPlan**](BaseBenefitPlan.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## replaceBaseBenefitCommentById

> replaceBaseBenefitCommentById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
let opts = {
  'baseBenefitComment': new @HimsApi.BaseBenefitComment() // BaseBenefitComment | 
};
apiInstance.replaceBaseBenefitCommentById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **baseBenefitComment** | [**BaseBenefitComment**](BaseBenefitComment.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## replaceBaseBenefitRevisionById

> replaceBaseBenefitRevisionById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
let opts = {
  'baseBenefitRevision': new @HimsApi.BaseBenefitRevision() // BaseBenefitRevision | 
};
apiInstance.replaceBaseBenefitRevisionById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **baseBenefitRevision** | [**BaseBenefitRevision**](BaseBenefitRevision.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateAllBaseBenefitComments

> InlineResponse200 updateAllBaseBenefitComments(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'where': null, // Object | 
  'baseBenefitComment': new @HimsApi.BaseBenefitComment() // BaseBenefitComment | 
};
apiInstance.updateAllBaseBenefitComments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **baseBenefitComment** | [**BaseBenefitComment**](BaseBenefitComment.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAllBaseBenefitRevisions

> InlineResponse200 updateAllBaseBenefitRevisions(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'where': null, // Object | 
  'baseBenefitRevision': new @HimsApi.BaseBenefitRevision() // BaseBenefitRevision | 
};
apiInstance.updateAllBaseBenefitRevisions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **baseBenefitRevision** | [**BaseBenefitRevision**](BaseBenefitRevision.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAllBaseBenefits

> InlineResponse200 updateAllBaseBenefits(opts)



Updates a set of base benefits

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let opts = {
  'where': null, // Object | 
  'baseBenefitPlan': new @HimsApi.BaseBenefitPlan() // BaseBenefitPlan | 
};
apiInstance.updateAllBaseBenefits(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **baseBenefitPlan** | [**BaseBenefitPlan**](BaseBenefitPlan.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBaseBenefitById

> updateBaseBenefitById(id, body)



Updates a base benefit

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
let body = null; // Object | Payload
apiInstance.updateBaseBenefitById(id, body).then(() => {
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


## updateBaseBenefitCommentById

> updateBaseBenefitCommentById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
let opts = {
  'baseBenefitComment': new @HimsApi.BaseBenefitComment() // BaseBenefitComment | 
};
apiInstance.updateBaseBenefitCommentById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **baseBenefitComment** | [**BaseBenefitComment**](BaseBenefitComment.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateBaseBenefitRevisionById

> updateBaseBenefitRevisionById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingBenefitsApi();
let id = "id_example"; // String | 
let opts = {
  'baseBenefitRevision': new @HimsApi.BaseBenefitRevision() // BaseBenefitRevision | 
};
apiInstance.updateBaseBenefitRevisionById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **baseBenefitRevision** | [**BaseBenefitRevision**](BaseBenefitRevision.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

