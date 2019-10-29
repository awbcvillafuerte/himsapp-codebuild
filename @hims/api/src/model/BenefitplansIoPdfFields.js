/**
 * HIMS API - Client
 * HIMS API Defintions for Client Subsystem
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: hims-info@veridata.com.ph
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BenefitplansIoPdfFields model module.
 * @module model/BenefitplansIoPdfFields
 * @version 1.0.0
 */
class BenefitplansIoPdfFields {
    /**
     * Constructs a new <code>BenefitplansIoPdfFields</code>.
     * @alias module:model/BenefitplansIoPdfFields
     */
    constructor() { 
        
        BenefitplansIoPdfFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BenefitplansIoPdfFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenefitplansIoPdfFields} obj Optional instance to populate.
     * @return {module:model/BenefitplansIoPdfFields} The populated <code>BenefitplansIoPdfFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BenefitplansIoPdfFields();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'Boolean');
            }
            if (data.hasOwnProperty('delete_dt')) {
                obj['delete_dt'] = ApiClient.convertToType(data['delete_dt'], 'Boolean');
            }
            if (data.hasOwnProperty('base_id')) {
                obj['base_id'] = ApiClient.convertToType(data['base_id'], 'Boolean');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'Boolean');
            }
            if (data.hasOwnProperty('tree_id')) {
                obj['tree_id'] = ApiClient.convertToType(data['tree_id'], 'Boolean');
            }
            if (data.hasOwnProperty('tree_path')) {
                obj['tree_path'] = ApiClient.convertToType(data['tree_path'], 'Boolean');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Boolean');
            }
            if (data.hasOwnProperty('sort_index')) {
                obj['sort_index'] = ApiClient.convertToType(data['sort_index'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'Boolean');
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ApiClient.convertToType(data['limits'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('remarks')) {
                obj['remarks'] = ApiClient.convertToType(data['remarks'], 'Boolean');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], 'Boolean');
            }
            if (data.hasOwnProperty('revisions')) {
                obj['revisions'] = ApiClient.convertToType(data['revisions'], 'Boolean');
            }
            if (data.hasOwnProperty('handler')) {
                obj['handler'] = ApiClient.convertToType(data['handler'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata_schema')) {
                obj['metadata_schema'] = ApiClient.convertToType(data['metadata_schema'], 'Boolean');
            }
            if (data.hasOwnProperty('custom_metadata')) {
                obj['custom_metadata'] = ApiClient.convertToType(data['custom_metadata'], 'Boolean');
            }
            if (data.hasOwnProperty('custom_metadata_schema')) {
                obj['custom_metadata_schema'] = ApiClient.convertToType(data['custom_metadata_schema'], 'Boolean');
            }
            if (data.hasOwnProperty('canAvail')) {
                obj['canAvail'] = ApiClient.convertToType(data['canAvail'], 'Boolean');
            }
            if (data.hasOwnProperty('canCover')) {
                obj['canCover'] = ApiClient.convertToType(data['canCover'], 'Boolean');
            }
            if (data.hasOwnProperty('renderContract')) {
                obj['renderContract'] = ApiClient.convertToType(data['renderContract'], 'Boolean');
            }
            if (data.hasOwnProperty('renderProposal')) {
                obj['renderProposal'] = ApiClient.convertToType(data['renderProposal'], 'Boolean');
            }
            if (data.hasOwnProperty('renderClause')) {
                obj['renderClause'] = ApiClient.convertToType(data['renderClause'], 'Boolean');
            }
            if (data.hasOwnProperty('contract_footer')) {
                obj['contract_footer'] = ApiClient.convertToType(data['contract_footer'], 'Boolean');
            }
            if (data.hasOwnProperty('proposal_footer')) {
                obj['proposal_footer'] = ApiClient.convertToType(data['proposal_footer'], 'Boolean');
            }
            if (data.hasOwnProperty('layers')) {
                obj['layers'] = ApiClient.convertToType(data['layers'], 'Boolean');
            }
            if (data.hasOwnProperty('contract_no')) {
                obj['contract_no'] = ApiClient.convertToType(data['contract_no'], 'Boolean');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Boolean');
            }
            if (data.hasOwnProperty('hmo_id')) {
                obj['hmo_id'] = ApiClient.convertToType(data['hmo_id'], 'Boolean');
            }
            if (data.hasOwnProperty('contract_year')) {
                obj['contract_year'] = ApiClient.convertToType(data['contract_year'], 'Boolean');
            }
            if (data.hasOwnProperty('principals_count')) {
                obj['principals_count'] = ApiClient.convertToType(data['principals_count'], 'Boolean');
            }
            if (data.hasOwnProperty('dependents_count')) {
                obj['dependents_count'] = ApiClient.convertToType(data['dependents_count'], 'Boolean');
            }
            if (data.hasOwnProperty('male_principals_count')) {
                obj['male_principals_count'] = ApiClient.convertToType(data['male_principals_count'], 'Boolean');
            }
            if (data.hasOwnProperty('female_principals_count')) {
                obj['female_principals_count'] = ApiClient.convertToType(data['female_principals_count'], 'Boolean');
            }
            if (data.hasOwnProperty('male_dependents_count')) {
                obj['male_dependents_count'] = ApiClient.convertToType(data['male_dependents_count'], 'Boolean');
            }
            if (data.hasOwnProperty('female_dependents_count')) {
                obj['female_dependents_count'] = ApiClient.convertToType(data['female_dependents_count'], 'Boolean');
            }
            if (data.hasOwnProperty('requested_premium')) {
                obj['requested_premium'] = ApiClient.convertToType(data['requested_premium'], 'Boolean');
            }
            if (data.hasOwnProperty('total_company_budget')) {
                obj['total_company_budget'] = ApiClient.convertToType(data['total_company_budget'], 'Boolean');
            }
            if (data.hasOwnProperty('budget_per_head')) {
                obj['budget_per_head'] = ApiClient.convertToType(data['budget_per_head'], 'Boolean');
            }
            if (data.hasOwnProperty('competitors_rates')) {
                obj['competitors_rates'] = ApiClient.convertToType(data['competitors_rates'], 'Boolean');
            }
            if (data.hasOwnProperty('own_computation')) {
                obj['own_computation'] = ApiClient.convertToType(data['own_computation'], 'Boolean');
            }
            if (data.hasOwnProperty('computation_file')) {
                obj['computation_file'] = ApiClient.convertToType(data['computation_file'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} _id
 */
BenefitplansIoPdfFields.prototype['_id'] = undefined;

/**
 * @member {Boolean} delete_dt
 */
BenefitplansIoPdfFields.prototype['delete_dt'] = undefined;

/**
 * @member {Boolean} base_id
 */
BenefitplansIoPdfFields.prototype['base_id'] = undefined;

/**
 * @member {Boolean} uid
 */
BenefitplansIoPdfFields.prototype['uid'] = undefined;

/**
 * @member {Boolean} tree_id
 */
BenefitplansIoPdfFields.prototype['tree_id'] = undefined;

/**
 * @member {Boolean} tree_path
 */
BenefitplansIoPdfFields.prototype['tree_path'] = undefined;

/**
 * @member {Boolean} level
 */
BenefitplansIoPdfFields.prototype['level'] = undefined;

/**
 * @member {Boolean} name
 */
BenefitplansIoPdfFields.prototype['name'] = undefined;

/**
 * @member {Boolean} code
 */
BenefitplansIoPdfFields.prototype['code'] = undefined;

/**
 * @member {Boolean} type
 */
BenefitplansIoPdfFields.prototype['type'] = undefined;

/**
 * @member {Boolean} sort_index
 */
BenefitplansIoPdfFields.prototype['sort_index'] = undefined;

/**
 * @member {Boolean} description
 */
BenefitplansIoPdfFields.prototype['description'] = undefined;

/**
 * @member {Boolean} limits
 */
BenefitplansIoPdfFields.prototype['limits'] = undefined;

/**
 * @member {Boolean} status
 */
BenefitplansIoPdfFields.prototype['status'] = undefined;

/**
 * @member {Boolean} remarks
 */
BenefitplansIoPdfFields.prototype['remarks'] = undefined;

/**
 * @member {Boolean} children
 */
BenefitplansIoPdfFields.prototype['children'] = undefined;

/**
 * @member {Boolean} revisions
 */
BenefitplansIoPdfFields.prototype['revisions'] = undefined;

/**
 * @member {Boolean} handler
 */
BenefitplansIoPdfFields.prototype['handler'] = undefined;

/**
 * @member {Boolean} metadata
 */
BenefitplansIoPdfFields.prototype['metadata'] = undefined;

/**
 * @member {Boolean} metadata_schema
 */
BenefitplansIoPdfFields.prototype['metadata_schema'] = undefined;

/**
 * @member {Boolean} custom_metadata
 */
BenefitplansIoPdfFields.prototype['custom_metadata'] = undefined;

/**
 * @member {Boolean} custom_metadata_schema
 */
BenefitplansIoPdfFields.prototype['custom_metadata_schema'] = undefined;

/**
 * @member {Boolean} canAvail
 */
BenefitplansIoPdfFields.prototype['canAvail'] = undefined;

/**
 * @member {Boolean} canCover
 */
BenefitplansIoPdfFields.prototype['canCover'] = undefined;

/**
 * @member {Boolean} renderContract
 */
BenefitplansIoPdfFields.prototype['renderContract'] = undefined;

/**
 * @member {Boolean} renderProposal
 */
BenefitplansIoPdfFields.prototype['renderProposal'] = undefined;

/**
 * @member {Boolean} renderClause
 */
BenefitplansIoPdfFields.prototype['renderClause'] = undefined;

/**
 * @member {Boolean} contract_footer
 */
BenefitplansIoPdfFields.prototype['contract_footer'] = undefined;

/**
 * @member {Boolean} proposal_footer
 */
BenefitplansIoPdfFields.prototype['proposal_footer'] = undefined;

/**
 * @member {Boolean} layers
 */
BenefitplansIoPdfFields.prototype['layers'] = undefined;

/**
 * @member {Boolean} contract_no
 */
BenefitplansIoPdfFields.prototype['contract_no'] = undefined;

/**
 * @member {Boolean} client_id
 */
BenefitplansIoPdfFields.prototype['client_id'] = undefined;

/**
 * @member {Boolean} hmo_id
 */
BenefitplansIoPdfFields.prototype['hmo_id'] = undefined;

/**
 * @member {Boolean} contract_year
 */
BenefitplansIoPdfFields.prototype['contract_year'] = undefined;

/**
 * @member {Boolean} principals_count
 */
BenefitplansIoPdfFields.prototype['principals_count'] = undefined;

/**
 * @member {Boolean} dependents_count
 */
BenefitplansIoPdfFields.prototype['dependents_count'] = undefined;

/**
 * @member {Boolean} male_principals_count
 */
BenefitplansIoPdfFields.prototype['male_principals_count'] = undefined;

/**
 * @member {Boolean} female_principals_count
 */
BenefitplansIoPdfFields.prototype['female_principals_count'] = undefined;

/**
 * @member {Boolean} male_dependents_count
 */
BenefitplansIoPdfFields.prototype['male_dependents_count'] = undefined;

/**
 * @member {Boolean} female_dependents_count
 */
BenefitplansIoPdfFields.prototype['female_dependents_count'] = undefined;

/**
 * @member {Boolean} requested_premium
 */
BenefitplansIoPdfFields.prototype['requested_premium'] = undefined;

/**
 * @member {Boolean} total_company_budget
 */
BenefitplansIoPdfFields.prototype['total_company_budget'] = undefined;

/**
 * @member {Boolean} budget_per_head
 */
BenefitplansIoPdfFields.prototype['budget_per_head'] = undefined;

/**
 * @member {Boolean} competitors_rates
 */
BenefitplansIoPdfFields.prototype['competitors_rates'] = undefined;

/**
 * @member {Boolean} own_computation
 */
BenefitplansIoPdfFields.prototype['own_computation'] = undefined;

/**
 * @member {Boolean} computation_file
 */
BenefitplansIoPdfFields.prototype['computation_file'] = undefined;






export default BenefitplansIoPdfFields;

