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
 * The RolesFields model module.
 * @module model/RolesFields
 * @version 1.0.0
 */
class RolesFields {
    /**
     * Constructs a new <code>RolesFields</code>.
     * @alias module:model/RolesFields
     */
    constructor() { 
        
        RolesFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RolesFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RolesFields} obj Optional instance to populate.
     * @return {module:model/RolesFields} The populated <code>RolesFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RolesFields();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'Boolean');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'Boolean');
            }
            if (data.hasOwnProperty('policies')) {
                obj['policies'] = ApiClient.convertToType(data['policies'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} _id
 */
RolesFields.prototype['_id'] = undefined;

/**
 * @member {Boolean} group_id
 */
RolesFields.prototype['group_id'] = undefined;

/**
 * @member {Boolean} name
 */
RolesFields.prototype['name'] = undefined;

/**
 * @member {Boolean} policies
 */
RolesFields.prototype['policies'] = undefined;






export default RolesFields;

