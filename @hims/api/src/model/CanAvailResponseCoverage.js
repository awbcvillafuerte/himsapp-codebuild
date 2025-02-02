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
 * The CanAvailResponseCoverage model module.
 * @module model/CanAvailResponseCoverage
 * @version 1.0.0
 */
class CanAvailResponseCoverage {
    /**
     * Constructs a new <code>CanAvailResponseCoverage</code>.
     * @alias module:model/CanAvailResponseCoverage
     */
    constructor() { 
        
        CanAvailResponseCoverage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CanAvailResponseCoverage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CanAvailResponseCoverage} obj Optional instance to populate.
     * @return {module:model/CanAvailResponseCoverage} The populated <code>CanAvailResponseCoverage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CanAvailResponseCoverage();

            if (data.hasOwnProperty('benefit_id')) {
                obj['benefit_id'] = ApiClient.convertToType(data['benefit_id'], 'String');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
            }
            if (data.hasOwnProperty('parent_name')) {
                obj['parent_name'] = ApiClient.convertToType(data['parent_name'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('covered')) {
                obj['covered'] = ApiClient.convertToType(data['covered'], 'Number');
            }
            if (data.hasOwnProperty('not_covered')) {
                obj['not_covered'] = ApiClient.convertToType(data['not_covered'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} benefit_id
 */
CanAvailResponseCoverage.prototype['benefit_id'] = undefined;

/**
 * @member {String} parent_id
 */
CanAvailResponseCoverage.prototype['parent_id'] = undefined;

/**
 * @member {String} parent_name
 */
CanAvailResponseCoverage.prototype['parent_name'] = undefined;

/**
 * @member {String} name
 */
CanAvailResponseCoverage.prototype['name'] = undefined;

/**
 * @member {Number} covered
 */
CanAvailResponseCoverage.prototype['covered'] = undefined;

/**
 * @member {Number} not_covered
 */
CanAvailResponseCoverage.prototype['not_covered'] = undefined;

/**
 * @member {String} message
 */
CanAvailResponseCoverage.prototype['message'] = undefined;






export default CanAvailResponseCoverage;

