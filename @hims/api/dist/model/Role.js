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
 * The Role model module.
 * @module model/Role
 * @version 1.0.0
 */
var Role =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Role</code>.
   * @alias module:model/Role
   * @param name {String} 
   */
  function Role(name) {
    _classCallCheck(this, Role);

    Role.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Role, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Role();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient.default.convertToType(data['group_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('policies')) {
          obj['policies'] = _ApiClient.default.convertToType(data['policies'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Role;
}();
/**
 * @member {String} _id
 */


Role.prototype['_id'] = undefined;
/**
 * @member {String} group_id
 */

Role.prototype['group_id'] = undefined;
/**
 * @member {String} name
 */

Role.prototype['name'] = undefined;
/**
 * @member {Array.<String>} policies
 */

Role.prototype['policies'] = undefined;
var _default = Role;
exports.default = _default;