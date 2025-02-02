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
 * The BasebenefitplansCommentsFields model module.
 * @module model/BasebenefitplansCommentsFields
 * @version 1.0.0
 */
class BasebenefitplansCommentsFields {
    /**
     * Constructs a new <code>BasebenefitplansCommentsFields</code>.
     * @alias module:model/BasebenefitplansCommentsFields
     */
    constructor() { 
        
        BasebenefitplansCommentsFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasebenefitplansCommentsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasebenefitplansCommentsFields} obj Optional instance to populate.
     * @return {module:model/BasebenefitplansCommentsFields} The populated <code>BasebenefitplansCommentsFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasebenefitplansCommentsFields();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'Boolean');
            }
            if (data.hasOwnProperty('delete_dt')) {
                obj['delete_dt'] = ApiClient.convertToType(data['delete_dt'], 'Boolean');
            }
            if (data.hasOwnProperty('document_id')) {
                obj['document_id'] = ApiClient.convertToType(data['document_id'], 'Boolean');
            }
            if (data.hasOwnProperty('author_id')) {
                obj['author_id'] = ApiClient.convertToType(data['author_id'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} _id
 */
BasebenefitplansCommentsFields.prototype['_id'] = undefined;

/**
 * @member {Boolean} delete_dt
 */
BasebenefitplansCommentsFields.prototype['delete_dt'] = undefined;

/**
 * @member {Boolean} document_id
 */
BasebenefitplansCommentsFields.prototype['document_id'] = undefined;

/**
 * @member {Boolean} author_id
 */
BasebenefitplansCommentsFields.prototype['author_id'] = undefined;

/**
 * @member {Boolean} description
 */
BasebenefitplansCommentsFields.prototype['description'] = undefined;

/**
 * @member {Boolean} status
 */
BasebenefitplansCommentsFields.prototype['status'] = undefined;






export default BasebenefitplansCommentsFields;

