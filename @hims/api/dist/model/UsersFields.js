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
 * The UsersFields model module.
 * @module model/UsersFields
 * @version 1.0.0
 */
var UsersFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UsersFields</code>.
   * @alias module:model/UsersFields
   */
  function UsersFields() {
    _classCallCheck(this, UsersFields);

    UsersFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsersFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UsersFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsersFields} obj Optional instance to populate.
     * @return {module:model/UsersFields} The populated <code>UsersFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsersFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient.default.convertToType(data['last_name'], 'Boolean');
        }

        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient.default.convertToType(data['middle_name'], 'Boolean');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient.default.convertToType(data['first_name'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient.default.convertToType(data['title'], 'Boolean');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient.default.convertToType(data['username'], 'Boolean');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient.default.convertToType(data['password'], 'Boolean');
        }

        if (data.hasOwnProperty('assingments')) {
          obj['assingments'] = _ApiClient.default.convertToType(data['assingments'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UsersFields;
}();
/**
 * @member {Boolean} _id
 */


UsersFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} last_name
 */

UsersFields.prototype['last_name'] = undefined;
/**
 * @member {Boolean} middle_name
 */

UsersFields.prototype['middle_name'] = undefined;
/**
 * @member {Boolean} first_name
 */

UsersFields.prototype['first_name'] = undefined;
/**
 * @member {Boolean} title
 */

UsersFields.prototype['title'] = undefined;
/**
 * @member {Boolean} username
 */

UsersFields.prototype['username'] = undefined;
/**
 * @member {Boolean} password
 */

UsersFields.prototype['password'] = undefined;
/**
 * @member {Boolean} assingments
 */

UsersFields.prototype['assingments'] = undefined;
var _default = UsersFields;
exports.default = _default;