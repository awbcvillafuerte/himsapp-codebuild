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
import BasebenefitplansRevisionsFields from './BasebenefitplansRevisionsFields';

/**
 * The Filter5 model module.
 * @module model/Filter5
 * @version 1.0.0
 */
class Filter5 {
    /**
     * Constructs a new <code>Filter5</code>.
     * @alias module:model/Filter5
     */
    constructor() { 
        
        Filter5.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Filter5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter5} obj Optional instance to populate.
     * @return {module:model/Filter5} The populated <code>Filter5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Filter5();

            if (data.hasOwnProperty('where')) {
                obj['where'] = ApiClient.convertToType(data['where'], Object);
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = BasebenefitplansRevisionsFields.constructFromObject(data['fields']);
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} where
 */
Filter5.prototype['where'] = undefined;

/**
 * @member {module:model/BasebenefitplansRevisionsFields} fields
 */
Filter5.prototype['fields'] = undefined;

/**
 * @member {Number} offset
 */
Filter5.prototype['offset'] = undefined;

/**
 * @member {Number} limit
 */
Filter5.prototype['limit'] = undefined;

/**
 * @member {Number} skip
 */
Filter5.prototype['skip'] = undefined;

/**
 * @member {Array.<String>} order
 */
Filter5.prototype['order'] = undefined;






export default Filter5;

