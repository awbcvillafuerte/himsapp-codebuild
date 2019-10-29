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
 * The Policy model module.
 * @module model/Policy
 * @version 1.0.0
 */
var Policy =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Policy</code>.
   * @alias module:model/Policy
   */
  function Policy() {
    _classCallCheck(this, Policy);

    Policy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Policy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Policy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Policy} obj Optional instance to populate.
     * @return {module:model/Policy} The populated <code>Policy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Policy();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('resource_name')) {
          obj['resource_name'] = _ApiClient.default.convertToType(data['resource_name'], 'String');
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient.default.convertToType(data['operations'], ['String']);
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient.default.convertToType(data['fields'], ['String']);
        }

        if (data.hasOwnProperty('applyDataRestriction')) {
          obj['applyDataRestriction'] = _ApiClient.default.convertToType(data['applyDataRestriction'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Policy;
}();
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
var _default = Policy;
exports.default = _default;