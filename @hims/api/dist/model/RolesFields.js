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
 * The RolesFields model module.
 * @module model/RolesFields
 * @version 1.0.0
 */
var RolesFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RolesFields</code>.
   * @alias module:model/RolesFields
   */
  function RolesFields() {
    _classCallCheck(this, RolesFields);

    RolesFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RolesFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RolesFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RolesFields} obj Optional instance to populate.
     * @return {module:model/RolesFields} The populated <code>RolesFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RolesFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient.default.convertToType(data['group_id'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'Boolean');
        }

        if (data.hasOwnProperty('policies')) {
          obj['policies'] = _ApiClient.default.convertToType(data['policies'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RolesFields;
}();
/**
 * @member {Boolean} _id
 */


RolesFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} group_id
 */

RolesFields.prototype['group_id'] = undefined;
/**
 * @member {Boolean} name
 */

RolesFields.prototype['name'] = undefined;
/**
 * @member {Boolean} policies
 */

RolesFields.prototype['policies'] = undefined;
var _default = RolesFields;
exports.default = _default;