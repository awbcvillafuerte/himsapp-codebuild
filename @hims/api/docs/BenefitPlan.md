# @HimsApi.BenefitPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Primary key of a document in a MongoDB collection. | [optional] 
**deleteDt** | **Date** | Date an item is deleted. Null/undefined value means the item is not yet deleted. | [optional] 
**baseId** | **String** | A code to distinguish a node within a benefits library. A.K.A. benefit ID. | [optional] 
**uid** | **String** | A unique code for an instance of a benefit node, can be used as CHILD_ID or PARENT_ID | [optional] 
**treeId** | **String** | A code to determine a node within a benefits tree | [optional] 
**treePath** | **[String]** |  | [optional] 
**level** | **Number** | 1 + the number of connections between the node and the mother contract | [optional] 
**name** | **String** | Name of the benefit node | 
**code** | **String** | Code of the benefit node | 
**type** | **String** | Type of the benefit node | 
**sortIndex** | **Number** | Position of the node when ordering with siblings. | [optional] 
**description** | **String** | Description of the benefit node | [optional] 
**limits** | [**[BenefitLimit]**](BenefitLimit.md) |  | [optional] 
**status** | **String** | Status of a benefit node | [optional] 
**remarks** | **String** | Remarks of a benefit node | [optional] 
**children** | **[Object]** |  | [optional] 
**revisions** | **[Object]** |  | [optional] 
**handler** | **String** | Handler of a benefit node | [optional] 
**metadata** | [**Object**](.md) | Other details of a base benefit node | [optional] 
**metadataSchema** | [**Object**](.md) | JSON schema of a base benefit node&#39;s metadata | [optional] 
**customMetadata** | [**Object**](.md) | Other details of a benefit node | [optional] 
**customMetadataSchema** | [**Object**](.md) | JSON schema of a benefit node&#39;s custom metadata | [optional] 
**canAvail** | **String** | Checks the availability of a benefit node for a member. | [optional] 
**canCover** | **String** | Checks the coverage of a benefit node for a member. | [optional] 
**renderContract** | **String** | Composes a contract clause / section / block. | [optional] 
**renderProposal** | **String** | Composes a proposal clause / section / block. | [optional] 
**renderClause** | **String** | Composes a clause. | [optional] 
**contractFooter** | **String** |  | [optional] 
**proposalFooter** | **String** |  | [optional] 
**layers** | [**[BenefitLayer]**](BenefitLayer.md) |  | [optional] 
**contractNo** | **String** | Contract number | [optional] 
**clientId** | **String** | Reference to Client | [optional] 
**hmoId** | **String** | HMO ID | [optional] 
**contractYear** | **Date** | Contract year | [optional] 
**principalsCount** | **Number** | Principals count | [optional] 
**dependentsCount** | **Number** | Dependents count | [optional] 
**malePrincipalsCount** | **Number** | Male principals count | [optional] 
**femalePrincipalsCount** | **Number** | Female principals count | [optional] 
**maleDependentsCount** | **Number** | Male dependents count | [optional] 
**femaleDependentsCount** | **Number** | Female dependents count | [optional] 
**requestedPremium** | **Number** | Requested premium | [optional] 
**totalCompanyBudget** | **Number** | Total company budget | [optional] 
**budgetPerHead** | **Number** | Budget per head | [optional] 
**competitorsRates** | **Number** | Competitor&#39;s rates | [optional] 
**ownComputation** | **Number** | Own computation | [optional] 
**computationFile** | **String** | Computation file | [optional] 



## Enum: HandlerEnum


* `HMO` (value: `"HMO"`)

* `TPA` (value: `"TPA"`)

* `Hybrid` (value: `"Hybrid"`)




