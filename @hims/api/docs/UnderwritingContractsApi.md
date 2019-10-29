# @HimsApi.UnderwritingContractsApi

All URIs are relative to *https://neo-local.seerlabs.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**canAvail**](UnderwritingContractsApi.md#canAvail) | **GET** /benefit-plans/can-avail | 
[**countBenefitComments**](UnderwritingContractsApi.md#countBenefitComments) | **GET** /benefit-plans/comments/count | 
[**countBenefitRevisions**](UnderwritingContractsApi.md#countBenefitRevisions) | **GET** /benefit-plans/revisions/count | 
[**countBenefits**](UnderwritingContractsApi.md#countBenefits) | **GET** /benefit-plans/count | 
[**createBenefit**](UnderwritingContractsApi.md#createBenefit) | **POST** /benefit-plans | 
[**createBenefitComment**](UnderwritingContractsApi.md#createBenefitComment) | **POST** /benefit-plans/comments | 
[**createBenefitRevision**](UnderwritingContractsApi.md#createBenefitRevision) | **POST** /benefit-plans/revisions | 
[**createProposal**](UnderwritingContractsApi.md#createProposal) | **POST** /benefit-plans/proposals | 
[**deleteBenefitById**](UnderwritingContractsApi.md#deleteBenefitById) | **DELETE** /benefit-plans/{id} | 
[**deleteBenefitCommentById**](UnderwritingContractsApi.md#deleteBenefitCommentById) | **DELETE** /benefit-plans/comments/{id} | 
[**deleteBenefitRevisionById**](UnderwritingContractsApi.md#deleteBenefitRevisionById) | **DELETE** /benefit-plans/revisions/{id} | 
[**findBenefitById**](UnderwritingContractsApi.md#findBenefitById) | **GET** /benefit-plans/{id} | 
[**findBenefitCommentById**](UnderwritingContractsApi.md#findBenefitCommentById) | **GET** /benefit-plans/comments/{id} | 
[**findBenefitComments**](UnderwritingContractsApi.md#findBenefitComments) | **GET** /benefit-plans/comments | 
[**findBenefitRevisionById**](UnderwritingContractsApi.md#findBenefitRevisionById) | **GET** /benefit-plans/revisions/{id} | 
[**findBenefitRevisions**](UnderwritingContractsApi.md#findBenefitRevisions) | **GET** /benefit-plans/revisions | 
[**findBenefits**](UnderwritingContractsApi.md#findBenefits) | **GET** /benefit-plans | 
[**getMemberBenefits**](UnderwritingContractsApi.md#getMemberBenefits) | **GET** /benefit-plans/members | 
[**getPdf**](UnderwritingContractsApi.md#getPdf) | **GET** /benefit-plans/io/pdf | 
[**getPdfFooter**](UnderwritingContractsApi.md#getPdfFooter) | **GET** /benefit-plans/io/pdf/footer | 
[**replaceBenefitById**](UnderwritingContractsApi.md#replaceBenefitById) | **PUT** /benefit-plans/{id} | 
[**replaceBenefitCommentById**](UnderwritingContractsApi.md#replaceBenefitCommentById) | **PUT** /benefit-plans/comments/{id} | 
[**replaceBenefitRevisionById**](UnderwritingContractsApi.md#replaceBenefitRevisionById) | **PUT** /benefit-plans/revisions/{id} | 
[**updateAllBenefitComments**](UnderwritingContractsApi.md#updateAllBenefitComments) | **PATCH** /benefit-plans/comments | 
[**updateAllBenefitRevisions**](UnderwritingContractsApi.md#updateAllBenefitRevisions) | **PATCH** /benefit-plans/revisions | 
[**updateAllBenefits**](UnderwritingContractsApi.md#updateAllBenefits) | **PATCH** /benefit-plans | 
[**updateBenefitById**](UnderwritingContractsApi.md#updateBenefitById) | **PATCH** /benefit-plans/{id} | 
[**updateBenefitCommentById**](UnderwritingContractsApi.md#updateBenefitCommentById) | **PATCH** /benefit-plans/comments/{id} | 
[**updateBenefitRevisionById**](UnderwritingContractsApi.md#updateBenefitRevisionById) | **PATCH** /benefit-plans/revisions/{id} | 



## canAvail

> CanAvailResponse canAvail(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'memberCardNo': "memberCardNo_example", // String | 
  'params': new @HimsApi.CanAvailRequest() // CanAvailRequest | 
};
apiInstance.canAvail(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberCardNo** | **String**|  | [optional] 
 **params** | [**CanAvailRequest**](.md)|  | [optional] 

### Return type

[**CanAvailResponse**](CanAvailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## countBenefitComments

> InlineResponse200 countBenefitComments(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'where': null // Object | 
};
apiInstance.countBenefitComments(opts).then((data) => {
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


## countBenefitRevisions

> InlineResponse200 countBenefitRevisions(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'where': null // Object | 
};
apiInstance.countBenefitRevisions(opts).then((data) => {
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


## countBenefits

> InlineResponse200 countBenefits(opts)



Counts the number of matching benefit nodes in a given filter.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'where': null // Object | 
};
apiInstance.countBenefits(opts).then((data) => {
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


## createBenefit

> BenefitPlan createBenefit(opts)



Adds a new benefit node to a proposal/contract.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'body': null // Object | 
};
apiInstance.createBenefit(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

[**BenefitPlan**](BenefitPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBenefitComment

> BenefitComment createBenefitComment(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'benefitComment': new @HimsApi.BenefitComment() // BenefitComment | 
};
apiInstance.createBenefitComment(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **benefitComment** | [**BenefitComment**](BenefitComment.md)|  | [optional] 

### Return type

[**BenefitComment**](BenefitComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBenefitRevision

> BenefitRevision createBenefitRevision(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'benefitRevision': new @HimsApi.BenefitRevision() // BenefitRevision | 
};
apiInstance.createBenefitRevision(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **benefitRevision** | [**BenefitRevision**](BenefitRevision.md)|  | [optional] 

### Return type

[**BenefitRevision**](BenefitRevision.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProposal

> CreateProposalRequest createProposal(opts)



Creates a new proposal/contract.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'createProposalRequest': new @HimsApi.CreateProposalRequest() // CreateProposalRequest | 
};
apiInstance.createProposal(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProposalRequest** | [**CreateProposalRequest**](CreateProposalRequest.md)|  | [optional] 

### Return type

[**CreateProposalRequest**](CreateProposalRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBenefitById

> deleteBenefitById(id)



Delete a benefit node given an ID.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
apiInstance.deleteBenefitById(id).then(() => {
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


## deleteBenefitCommentById

> deleteBenefitCommentById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
apiInstance.deleteBenefitCommentById(id).then(() => {
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


## deleteBenefitRevisionById

> deleteBenefitRevisionById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
apiInstance.deleteBenefitRevisionById(id).then(() => {
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


## findBenefitById

> BenefitPlan findBenefitById(id)



Find a benefit node given an ID.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
apiInstance.findBenefitById(id).then((data) => {
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

[**BenefitPlan**](BenefitPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBenefitCommentById

> BenefitComment findBenefitCommentById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
apiInstance.findBenefitCommentById(id).then((data) => {
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

[**BenefitComment**](BenefitComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBenefitComments

> [BenefitComment] findBenefitComments(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'filter': new @HimsApi.Filter3() // Filter3 | 
};
apiInstance.findBenefitComments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter3**](.md)|  | [optional] 

### Return type

[**[BenefitComment]**](BenefitComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBenefitRevisionById

> BenefitRevision findBenefitRevisionById(id)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
apiInstance.findBenefitRevisionById(id).then((data) => {
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

[**BenefitRevision**](BenefitRevision.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBenefitRevisions

> [BenefitRevision] findBenefitRevisions(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'filter': new @HimsApi.Filter5() // Filter5 | 
};
apiInstance.findBenefitRevisions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter5**](.md)|  | [optional] 

### Return type

[**[BenefitRevision]**](BenefitRevision.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBenefits

> [BenefitPlan] findBenefits(opts)



Search benefit nodes.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'filter': new @HimsApi.Filter6() // Filter6 | 
};
apiInstance.findBenefits(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Filter6**](.md)|  | [optional] 

### Return type

[**[BenefitPlan]**](BenefitPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMemberBenefits

> BenefitPlan getMemberBenefits(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'memberCardNo': "memberCardNo_example" // String | 
};
apiInstance.getMemberBenefits(opts).then((data) => {
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

[**BenefitPlan**](BenefitPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPdf

> File getPdf(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'id': "id_example", // String | 
  'type': "type_example", // String | 
  'filter': new @HimsApi.Filter4() // Filter4 | 
};
apiInstance.getPdf(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **filter** | [**Filter4**](.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf


## getPdfFooter

> getPdfFooter(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'xRootId': "xRootId_example", // String | 
  'xFooterAttribute': "xFooterAttribute_example" // String | 
};
apiInstance.getPdfFooter(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xRootId** | **String**|  | [optional] 
 **xFooterAttribute** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## replaceBenefitById

> replaceBenefitById(id, opts)



Replace a benefit node given an ID.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
let opts = {
  'benefitPlan': new @HimsApi.BenefitPlan() // BenefitPlan | 
};
apiInstance.replaceBenefitById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **benefitPlan** | [**BenefitPlan**](BenefitPlan.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## replaceBenefitCommentById

> replaceBenefitCommentById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
let opts = {
  'benefitComment': new @HimsApi.BenefitComment() // BenefitComment | 
};
apiInstance.replaceBenefitCommentById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **benefitComment** | [**BenefitComment**](BenefitComment.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## replaceBenefitRevisionById

> replaceBenefitRevisionById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
let opts = {
  'benefitRevision': new @HimsApi.BenefitRevision() // BenefitRevision | 
};
apiInstance.replaceBenefitRevisionById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **benefitRevision** | [**BenefitRevision**](BenefitRevision.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateAllBenefitComments

> InlineResponse200 updateAllBenefitComments(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'where': null, // Object | 
  'benefitComment': new @HimsApi.BenefitComment() // BenefitComment | 
};
apiInstance.updateAllBenefitComments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **benefitComment** | [**BenefitComment**](BenefitComment.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAllBenefitRevisions

> InlineResponse200 updateAllBenefitRevisions(opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'where': null, // Object | 
  'benefitRevision': new @HimsApi.BenefitRevision() // BenefitRevision | 
};
apiInstance.updateAllBenefitRevisions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **benefitRevision** | [**BenefitRevision**](BenefitRevision.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAllBenefits

> InlineResponse200 updateAllBenefits(opts)



Update benefit nodes.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let opts = {
  'where': null, // Object | 
  'benefitPlan': new @HimsApi.BenefitPlan() // BenefitPlan | 
};
apiInstance.updateAllBenefits(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | [**Object**](.md)|  | [optional] 
 **benefitPlan** | [**BenefitPlan**](BenefitPlan.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBenefitById

> updateBenefitById(id, body)



Update a benefit node given an ID.

### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
let body = null; // Object | Payload
apiInstance.updateBenefitById(id, body).then(() => {
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


## updateBenefitCommentById

> updateBenefitCommentById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
let opts = {
  'benefitComment': new @HimsApi.BenefitComment() // BenefitComment | 
};
apiInstance.updateBenefitCommentById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **benefitComment** | [**BenefitComment**](BenefitComment.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateBenefitRevisionById

> updateBenefitRevisionById(id, opts)



### Example

```javascript
import @HimsApi from '@hims/api';

let apiInstance = new @HimsApi.UnderwritingContractsApi();
let id = "id_example"; // String | 
let opts = {
  'benefitRevision': new @HimsApi.BenefitRevision() // BenefitRevision | 
};
apiInstance.updateBenefitRevisionById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **benefitRevision** | [**BenefitRevision**](BenefitRevision.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

