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
import BenefitplansIoPdfFields from './BenefitplansIoPdfFields';

/**
 * The Filter6 model module.
 * @module model/Filter6
 * @version 1.0.0
 */
class Filter6 {
    /**
     * Constructs a new <code>Filter6</code>.
     * @alias module:model/Filter6
     */
    constructor() { 
        
        Filter6.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Filter6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter6} obj Optional instance to populate.
     * @return {module:model/Filter6} The populated <code>Filter6</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Filter6();

            if (data.hasOwnProperty('where')) {
                obj['where'] = ApiClient.convertToType(data['where'], Object);
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = BenefitplansIoPdfFields.constructFromObject(data['fields']);
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
Filter6.prototype['where'] = undefined;

/**
 * @member {module:model/BenefitplansIoPdfFields} fields
 */
Filter6.prototype['fields'] = undefined;

/**
 * @member {Number} offset
 */
Filter6.prototype['offset'] = undefined;

/**
 * @member {Number} limit
 */
Filter6.prototype['limit'] = undefined;

/**
 * @member {Number} skip
 */
Filter6.prototype['skip'] = undefined;

/**
 * @member {Array.<String>} order
 */
Filter6.prototype['order'] = undefined;






export default Filter6;

