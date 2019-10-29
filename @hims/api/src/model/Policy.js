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
 * The Policy model module.
 * @module model/Policy
 * @version 1.0.0
 */
class Policy {
    /**
     * Constructs a new <code>Policy</code>.
     * @alias module:model/Policy
     */
    constructor() { 
        
        Policy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Policy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Policy} obj Optional instance to populate.
     * @return {module:model/Policy} The populated <code>Policy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Policy();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_name')) {
                obj['resource_name'] = ApiClient.convertToType(data['resource_name'], 'String');
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], ['String']);
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
            if (data.hasOwnProperty('applyDataRestriction')) {
                obj['applyDataRestriction'] = ApiClient.convertToType(data['applyDataRestriction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Policy.prototype['_id'] = undefined;

/**
 * @member {String} name
 */
Policy.prototype['name'] = undefined;

/**
 * @member {String} resource_name
 */
Policy.prototype['resource_name'] = undefined;

/**
 * @member {Array.<String>} operations
 */
Policy.prototype['operations'] = undefined;

/**
 * @member {Array.<String>} fields
 */
Policy.prototype['fields'] = undefined;

/**
 * @member {String} applyDataRestriction
 */
Policy.prototype['applyDataRestriction'] = undefined;






export default Policy;

