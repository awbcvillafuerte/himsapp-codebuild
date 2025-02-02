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
 * The BenefitLimit model module.
 * @module model/BenefitLimit
 * @version 1.0.0
 */
class BenefitLimit {
    /**
     * Constructs a new <code>BenefitLimit</code>.
     * Limits object model
     * @alias module:model/BenefitLimit
     * @param limit {Number} Value of limit
     * @param limitUnit {module:model/BenefitLimit.LimitUnitEnum} Unit of limit.
     * @param scope {module:model/BenefitLimit.ScopeEnum} Scope of limit.
     */
    constructor(limit, limitUnit, scope) { 
        
        BenefitLimit.initialize(this, limit, limitUnit, scope);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, limitUnit, scope) { 
        obj['limit'] = limit;
        obj['limit_unit'] = limitUnit;
        obj['scope'] = scope;
    }

    /**
     * Constructs a <code>BenefitLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenefitLimit} obj Optional instance to populate.
     * @return {module:model/BenefitLimit} The populated <code>BenefitLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BenefitLimit();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('limit_unit')) {
                obj['limit_unit'] = ApiClient.convertToType(data['limit_unit'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('handler')) {
                obj['handler'] = ApiClient.convertToType(data['handler'], 'String');
            }
            if (data.hasOwnProperty('adjustment_days')) {
                obj['adjustment_days'] = ApiClient.convertToType(data['adjustment_days'], 'String');
            }
            if (data.hasOwnProperty('with_rollover')) {
                obj['with_rollover'] = ApiClient.convertToType(data['with_rollover'], 'Boolean');
            }
            if (data.hasOwnProperty('refresh_limits')) {
                obj['refresh_limits'] = ApiClient.convertToType(data['refresh_limits'], 'Boolean');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('carried_over_limits')) {
                obj['carried_over_limits'] = ApiClient.convertToType(data['carried_over_limits'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Type of limit
 * @member {module:model/BenefitLimit.TypeEnum} type
 */
BenefitLimit.prototype['type'] = undefined;

/**
 * Value of limit
 * @member {Number} limit
 */
BenefitLimit.prototype['limit'] = undefined;

/**
 * Unit of limit.
 * @member {module:model/BenefitLimit.LimitUnitEnum} limit_unit
 */
BenefitLimit.prototype['limit_unit'] = undefined;

/**
 * Scope of limit.
 * @member {module:model/BenefitLimit.ScopeEnum} scope
 */
BenefitLimit.prototype['scope'] = undefined;

/**
 * Handler of a benefit node
 * @member {module:model/BenefitLimit.HandlerEnum} handler
 */
BenefitLimit.prototype['handler'] = undefined;

/**
 * Number of days from day 1 of coverage before limit is adjusted
 * @member {String} adjustment_days
 */
BenefitLimit.prototype['adjustment_days'] = undefined;

/**
 * Option to apply a rollover of limits to the MBL, ABL or PEC limit.
 * @member {Boolean} with_rollover
 */
BenefitLimit.prototype['with_rollover'] = undefined;

/**
 * Option to refresh limits.
 * @member {Boolean} refresh_limits
 */
BenefitLimit.prototype['refresh_limits'] = undefined;

/**
 * Number of days before the limit is refreshed.
 * @member {Number} period
 */
BenefitLimit.prototype['period'] = undefined;

/**
 * Rolled over limits.
 * @member {Number} carried_over_limits
 */
BenefitLimit.prototype['carried_over_limits'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BenefitLimit['TypeEnum'] = {

    /**
     * value: "ABL"
     * @const
     */
    "ABL": "ABL",

    /**
     * value: "MBL"
     * @const
     */
    "MBL": "MBL",

    /**
     * value: "PEC"
     * @const
     */
    "PEC": "PEC"
};


/**
 * Allowed values for the <code>limit_unit</code> property.
 * @enum {String}
 * @readonly
 */
BenefitLimit['LimitUnitEnum'] = {

    /**
     * value: "PHP"
     * @const
     */
    "PHP": "PHP",

    /**
     * value: "Percentage"
     * @const
     */
    "Percentage": "Percentage"
};


/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
BenefitLimit['ScopeEnum'] = {

    /**
     * value: "Member"
     * @const
     */
    "Member": "Member",

    /**
     * value: "Client"
     * @const
     */
    "Client": "Client"
};


/**
 * Allowed values for the <code>handler</code> property.
 * @enum {String}
 * @readonly
 */
BenefitLimit['HandlerEnum'] = {

    /**
     * value: "HMO"
     * @const
     */
    "HMO": "HMO",

    /**
     * value: "TPA"
     * @const
     */
    "TPA": "TPA",

    /**
     * value: "Hybrid"
     * @const
     */
    "Hybrid": "Hybrid"
};



export default BenefitLimit;

