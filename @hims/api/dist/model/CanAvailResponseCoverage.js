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
 * The CanAvailResponseCoverage model module.
 * @module model/CanAvailResponseCoverage
 * @version 1.0.0
 */
var CanAvailResponseCoverage =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CanAvailResponseCoverage</code>.
   * @alias module:model/CanAvailResponseCoverage
   */
  function CanAvailResponseCoverage() {
    _classCallCheck(this, CanAvailResponseCoverage);

    CanAvailResponseCoverage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CanAvailResponseCoverage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CanAvailResponseCoverage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CanAvailResponseCoverage} obj Optional instance to populate.
     * @return {module:model/CanAvailResponseCoverage} The populated <code>CanAvailResponseCoverage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CanAvailResponseCoverage();

        if (data.hasOwnProperty('benefit_id')) {
          obj['benefit_id'] = _ApiClient.default.convertToType(data['benefit_id'], 'String');
        }

        if (data.hasOwnProperty('parent_id')) {
          obj['parent_id'] = _ApiClient.default.convertToType(data['parent_id'], 'String');
        }

        if (data.hasOwnProperty('parent_name')) {
          obj['parent_name'] = _ApiClient.default.convertToType(data['parent_name'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('covered')) {
          obj['covered'] = _ApiClient.default.convertToType(data['covered'], 'Number');
        }

        if (data.hasOwnProperty('not_covered')) {
          obj['not_covered'] = _ApiClient.default.convertToType(data['not_covered'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient.default.convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CanAvailResponseCoverage;
}();
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
var _default = CanAvailResponseCoverage;
exports.default = _default;