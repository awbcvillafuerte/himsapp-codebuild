# @HimsApi.BenefitLimit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of limit | [optional] 
**limit** | **Number** | Value of limit | 
**limitUnit** | **String** | Unit of limit. | 
**scope** | **String** | Scope of limit. | 
**handler** | **String** | Handler of a benefit node | [optional] 
**adjustmentDays** | **String** | Number of days from day 1 of coverage before limit is adjusted | [optional] 
**withRollover** | **Boolean** | Option to apply a rollover of limits to the MBL, ABL or PEC limit. | [optional] 
**refreshLimits** | **Boolean** | Option to refresh limits. | [optional] 
**period** | **Number** | Number of days before the limit is refreshed. | [optional] 
**carriedOverLimits** | **Number** | Rolled over limits. | [optional] 



## Enum: TypeEnum


* `ABL` (value: `"ABL"`)

* `MBL` (value: `"MBL"`)

* `PEC` (value: `"PEC"`)





## Enum: LimitUnitEnum


* `PHP` (value: `"PHP"`)

* `Percentage` (value: `"Percentage"`)





## Enum: ScopeEnum


* `Member` (value: `"Member"`)

* `Client` (value: `"Client"`)





## Enum: HandlerEnum


* `HMO` (value: `"HMO"`)

* `TPA` (value: `"TPA"`)

* `Hybrid` (value: `"Hybrid"`)




