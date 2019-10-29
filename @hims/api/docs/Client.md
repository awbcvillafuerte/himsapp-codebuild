# @HimsApi.Client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Primary key of a document in a MongoDB collection. | [optional] 
**deleteDt** | **Date** | Date an item is deleted. Null/undefined value means the item is not yet deleted. | [optional] 
**registeredName** | **String** | Registered corporate name | [optional] 
**brandName** | **String** | Trade / brand name | [optional] 
**nameOnCard** | **String** | Name displayed on card | [optional] 
**corporateAccountNo** | **String** | Corporate Account Number | [optional] 
**tinNo** | **String** | Corporate Tax Identification Number | [optional] 
**vatType** | **String** | VAT type | [optional] 
**evatNo** | **String** | E-VAT number | [optional] 
**industry** | **String** | Industry | [optional] 
**ownership** | **String** | Ownership | [optional] 
**yearsOfExistence** | **Number** | Years of existence | [optional] 
**prevHmoProvider** | **String** | Previous HMO provider | [optional] 
**agentName** | **String** | Agent name | [optional] 
**secRegNo** | **String** | SEC registration number | [optional] 
**telNo** | **String** | Telephone number | [optional] 
**authorizedSignatory** | **String** | Authorized signatory | [optional] 
**sourcesOfFunds** | **String** | Sources of funds | [optional] 
**salesChannel** | **Object** | Sales channel | [optional] 
**mainOfficeAddress** | [**ContactAddress**](ContactAddress.md) |  | [optional] 
**branches** | [**[ContactAddress1]**](ContactAddress1.md) |  | [optional] 
**contactNumbers** | [**[ContactNumber]**](ContactNumber.md) |  | [optional] 
**contactPersons** | [**[ContactPerson]**](ContactPerson.md) |  | [optional] 
**contracts** | **[Object]** |  | [optional] 
**status** | **String** | Status | [optional] 
**attachments** | [**[FileAttachment]**](FileAttachment.md) |  | [optional] 



## Enum: OwnershipEnum


* `Local` (value: `"Local"`)

* `Multinational` (value: `"Multinational"`)





## Enum: StatusEnum


* `potential` (value: `"potential"`)

* `active` (value: `"active"`)

* `terminated` (value: `"terminated"`)




