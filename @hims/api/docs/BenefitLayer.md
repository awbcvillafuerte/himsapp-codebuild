# @HimsApi.BenefitLayer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of layer | [optional] 
**limit** | **Number** | Value of limit / layer | 
**limitUnit** | **String** | Unit of limit. | 
**handler** | **String** | Handler of a benefit node | [optional] 
**period** | **Number** | Number of days before the limit is refreshed. | [optional] 
**coverageStartDate** | **Date** | Start date of coverage under the layer (number of days from day 1 of the member account) | [optional] 
**coverageEndDate** | **Date** | End date of coverage under the layer (number of days from day 1 of the member account) | [optional] 
**coverUntilTermination** | **Boolean** | Option to continue coverage under the layer until the termination of the member account. | [optional] 
**children** | **[Object]** |  | [optional] 



## Enum: TypeEnum


* `time` (value: `"time"`)

* `limit` (value: `"limit"`)





## Enum: LimitUnitEnum


* `PHP` (value: `"PHP"`)

* `Percentage` (value: `"Percentage"`)





## Enum: HandlerEnum


* `HMO` (value: `"HMO"`)

* `TPA` (value: `"TPA"`)

* `Hybrid` (value: `"Hybrid"`)




