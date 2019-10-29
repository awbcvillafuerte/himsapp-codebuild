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
 * The PoliciesFields model module.
 * @module model/PoliciesFields
 * @version 1.0.0
 */
var PoliciesFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PoliciesFields</code>.
   * @alias module:model/PoliciesFields
   */
  function PoliciesFields() {
    _classCallCheck(this, PoliciesFields);

    PoliciesFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PoliciesFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PoliciesFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoliciesFields} obj Optional instance to populate.
     * @return {module:model/PoliciesFields} The populated <code>PoliciesFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PoliciesFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'Boolean');
        }

        if (data.hasOwnProperty('resource_name')) {
          obj['resource_name'] = _ApiClient.default.convertToType(data['resource_name'], 'Boolean');
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient.default.convertToType(data['operations'], 'Boolean');
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient.default.convertToType(data['fields'], 'Boolean');
        }

        if (data.hasOwnProperty('applyDataRestriction')) {
          obj['applyDataRestriction'] = _ApiClient.default.convertToType(data['applyDataRestriction'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return PoliciesFields;
}();
/**
 * @member {Boolean} _id
 */


PoliciesFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} name
 */

PoliciesFields.prototype['name'] = undefined;
/**
 * @member {Boolean} resource_name
 */

PoliciesFields.prototype['resource_name'] = undefined;
/**
 * @member {Boolean} operations
 */

PoliciesFields.prototype['operations'] = undefined;
/**
 * @member {Boolean} fields
 */

PoliciesFields.prototype['fields'] = undefined;
/**
 * @member {Boolean} applyDataRestriction
 */

PoliciesFields.prototype['applyDataRestriction'] = undefined;
var _default = PoliciesFields;
exports.default = _default;