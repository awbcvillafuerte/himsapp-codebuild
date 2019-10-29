"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BenefitplansIoPdfFields = _interopRequireDefault(require("./BenefitplansIoPdfFields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Filter6 model module.
 * @module model/Filter6
 * @version 1.0.0
 */
var Filter6 =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Filter6</code>.
   * @alias module:model/Filter6
   */
  function Filter6() {
    _classCallCheck(this, Filter6);

    Filter6.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Filter6, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Filter6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter6} obj Optional instance to populate.
     * @return {module:model/Filter6} The populated <code>Filter6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Filter6();

        if (data.hasOwnProperty('where')) {
          obj['where'] = _ApiClient.default.convertToType(data['where'], Object);
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _BenefitplansIoPdfFields.default.constructFromObject(data['fields']);
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient.default.convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient.default.convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('skip')) {
          obj['skip'] = _ApiClient.default.convertToType(data['skip'], 'Number');
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _ApiClient.default.convertToType(data['order'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Filter6;
}();
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
var _default = Filter6;
exports.default = _default;