# @HimsApi.Member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Primary key of a document in a MongoDB collection. | [optional] 
**deleteDt** | **Date** | Date an item is deleted. Null/undefined value means the item is not yet deleted. | [optional] 
**memberCardNo** | **String** | Member card number | [optional] 
**title** | **String** | Title / Prefix       Possible, but not limited to, values:         &#39;Mr&#39;         &#39;Ms&#39;         &#39;Mrs&#39;         &#39;Miss&#39;         &#39;Sir&#39;         &#39;Dr&#39;      | [optional] 
**lastName** | **String** | Last name | 
**middleName** | **String** | Middle name | 
**firstName** | **String** | First name | 
**suffix** | **String** | Suffix | [optional] 
**dateOfBirth** | **String** | Date of birth | 
**gender** | **String** | Gender. &#39;M&#39; for Male / &#39;F&#39; for Female | 
**civilStatus** | **String** | Civil status       &#39;S&#39; for Single       &#39;M&#39; for Married       &#39;SP&#39; for Single Parent       &#39;A&#39; for Annulled       &#39;W&#39; for Widowed       &#39;D&#39; for Divorced       &#39;SE&#39; for Separated      | 
**emailAddress** | **String** | Email address | 
**clientId** | **String** |  | [optional] 
**memberType** | **String** | Member type       &#39;P&#39; for Principal       &#39;D&#39; for Dependent       &#39;E&#39; for Extended Dependent      | 
**planType** | **String** | Plan type | 
**contracts** | **[Object]** |  | 
**carriedOverLimits** | [**Object**](.md) | Carried over limits | 



## Enum: GenderEnum


* `M` (value: `"M"`)

* `F` (value: `"F"`)





## Enum: CivilStatusEnum


* `S` (value: `"S"`)

* `M` (value: `"M"`)

* `SP` (value: `"SP"`)

* `A` (value: `"A"`)

* `W` (value: `"W"`)

* `D` (value: `"D"`)

* `SE` (value: `"SE"`)





## Enum: MemberTypeEnum


* `P` (value: `"P"`)

* `D` (value: `"D"`)

* `E` (value: `"E"`)




