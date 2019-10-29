# @HimsApi.BenefitRevision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Primary key of a document in a MongoDB collection. | [optional] 
**deleteDt** | **Date** | Date an item is deleted. Null/undefined value means the item is not yet deleted. | [optional] 
**documentId** | [**Object**](.md) |  | 
**op** | **String** |  | 
**from** | **String** |  | [optional] 
**path** | **String** |  | 
**value** | [**Object**](.md) |  | [optional] 



## Enum: OpEnum


* `add` (value: `"add"`)

* `remove` (value: `"remove"`)

* `replace` (value: `"replace"`)

* `move` (value: `"move"`)

* `copy` (value: `"copy"`)

* `test` (value: `"test"`)




