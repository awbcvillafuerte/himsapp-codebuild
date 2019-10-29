"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BenefitLayer model module.
 * @module model/BenefitLayer
 * @version 1.0.0
 */
var BenefitLayer =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BenefitLayer</code>.
   * @alias module:model/BenefitLayer
   * @param limit {Number} Value of limit / layer
   * @param limitUnit {module:model/BenefitLayer.LimitUnitEnum} Unit of limit.
   */
  function BenefitLayer(limit, limitUnit) {
    _classCallCheck(this, BenefitLayer);

    BenefitLayer.initialize(this, limit, limitUnit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BenefitLayer, null, [{
    key: "initialize",
    value: function initialize(obj, limit, limitUnit) {
      obj['limit'] = limit;
      obj['limit_unit'] = limitUnit;
    }
    /**
     * Constructs a <code>BenefitLayer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenefitLayer} obj Optional instance to populate.
     * @return {module:model/BenefitLayer} The populated <code>BenefitLayer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BenefitLayer();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient.default.convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient.default.convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('limit_unit')) {
          obj['limit_unit'] = _ApiClient.default.convertToType(data['limit_unit'], 'String');
        }

        if (data.hasOwnProperty('handler')) {
          obj['handler'] = _ApiClient.default.convertToType(data['handler'], 'String');
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient.default.convertToType(data['period'], 'Number');
        }

        if (data.hasOwnProperty('coverage_start_date')) {
          obj['coverage_start_date'] = _ApiClient.default.convertToType(data['coverage_start_date'], 'Date');
        }

        if (data.hasOwnProperty('coverage_end_date')) {
          obj['coverage_end_date'] = _ApiClient.default.convertToType(data['coverage_end_date'], 'Date');
        }

        if (data.hasOwnProperty('cover_until_termination')) {
          obj['cover_until_termination'] = _ApiClient.default.convertToType(data['cover_until_termination'], 'Boolean');
        }

        if (data.hasOwnProperty('children')) {
          obj['children'] = _ApiClient.default.convertToType(data['children'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return BenefitLayer;
}();
/**
 * Type of layer
 * @member {module:model/BenefitLayer.TypeEnum} type
 */


BenefitLayer.prototype['type'] = undefined;
/**
 * Value of limit / layer
 * @member {Number} limit
 */

BenefitLayer.prototype['limit'] = undefined;
/**
 * Unit of limit.
 * @member {module:model/BenefitLayer.LimitUnitEnum} limit_unit
 */

BenefitLayer.prototype['limit_unit'] = undefined;
/**
 * Handler of a benefit node
 * @member {module:model/BenefitLayer.HandlerEnum} handler
 */

BenefitLayer.prototype['handler'] = undefined;
/**
 * Number of days before the limit is refreshed.
 * @member {Number} period
 */

BenefitLayer.prototype['period'] = undefined;
/**
 * Start date of coverage under the layer (number of days from day 1 of the member account)
 * @member {Date} coverage_start_date
 */

BenefitLayer.prototype['coverage_start_date'] = undefined;
/**
 * End date of coverage under the layer (number of days from day 1 of the member account)
 * @member {Date} coverage_end_date
 */

BenefitLayer.prototype['coverage_end_date'] = undefined;
/**
 * Option to continue coverage under the layer until the termination of the member account.
 * @member {Boolean} cover_until_termination
 */

BenefitLayer.prototype['cover_until_termination'] = undefined;
/**
 * @member {Array.<Object>} children
 */

BenefitLayer.prototype['children'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

BenefitLayer['TypeEnum'] = {
  /**
   * value: "time"
   * @const
   */
  "time": "time",

  /**
   * value: "limit"
   * @const
   */
  "limit": "limit"
};
/**
 * Allowed values for the <code>limit_unit</code> property.
 * @enum {String}
 * @readonly
 */

BenefitLayer['LimitUnitEnum'] = {
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
 * Allowed values for the <code>handler</code> property.
 * @enum {String}
 * @readonly
 */

BenefitLayer['HandlerEnum'] = {
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
var _default = BenefitLayer;
exports.default = _default;