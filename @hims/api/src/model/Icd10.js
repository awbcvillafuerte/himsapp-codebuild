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
 * The Icd10 model module.
 * @module model/Icd10
 * @version 1.0.0
 */
class Icd10 {
    /**
     * Constructs a new <code>Icd10</code>.
     * @alias module:model/Icd10
     */
    constructor() { 
        
        Icd10.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Icd10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Icd10} obj Optional instance to populate.
     * @return {module:model/Icd10} The populated <code>Icd10</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Icd10();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('category_code')) {
                obj['category_code'] = ApiClient.convertToType(data['category_code'], 'String');
            }
            if (data.hasOwnProperty('diagnosis_code')) {
                obj['diagnosis_code'] = ApiClient.convertToType(data['diagnosis_code'], 'String');
            }
            if (data.hasOwnProperty('full_code')) {
                obj['full_code'] = ApiClient.convertToType(data['full_code'], 'String');
            }
            if (data.hasOwnProperty('abbreviated_description')) {
                obj['abbreviated_description'] = ApiClient.convertToType(data['abbreviated_description'], 'String');
            }
            if (data.hasOwnProperty('full_description')) {
                obj['full_description'] = ApiClient.convertToType(data['full_description'], 'String');
            }
            if (data.hasOwnProperty('category_title')) {
                obj['category_title'] = ApiClient.convertToType(data['category_title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Icd10.prototype['_id'] = undefined;

/**
 * @member {String} category_code
 */
Icd10.prototype['category_code'] = undefined;

/**
 * @member {String} diagnosis_code
 */
Icd10.prototype['diagnosis_code'] = undefined;

/**
 * @member {String} full_code
 */
Icd10.prototype['full_code'] = undefined;

/**
 * @member {String} abbreviated_description
 */
Icd10.prototype['abbreviated_description'] = undefined;

/**
 * @member {String} full_description
 */
Icd10.prototype['full_description'] = undefined;

/**
 * @member {String} category_title
 */
Icd10.prototype['category_title'] = undefined;






export default Icd10;

