"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Assignment = _interopRequireDefault(require("./Assignment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
var User =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @param lastName {String} 
   * @param firstName {String} 
   * @param username {String} 
   * @param password {String} 
   */
  function User(lastName, firstName, username, password) {
    _classCallCheck(this, User);

    User.initialize(this, lastName, firstName, username, password);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj, lastName, firstName, username, password) {
      obj['last_name'] = lastName;
      obj['first_name'] = firstName;
      obj['username'] = username;
      obj['password'] = password;
    }
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient.default.convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient.default.convertToType(data['middle_name'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient.default.convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient.default.convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient.default.convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient.default.convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('assingments')) {
          obj['assingments'] = _ApiClient.default.convertToType(data['assingments'], [_Assignment.default]);
        }
      }

      return obj;
    }
  }]);

  return User;
}();
/**
 * @member {String} _id
 */


User.prototype['_id'] = undefined;
/**
 * @member {String} last_name
 */

User.prototype['last_name'] = undefined;
/**
 * @member {String} middle_name
 */

User.prototype['middle_name'] = undefined;
/**
 * @member {String} first_name
 */

User.prototype['first_name'] = undefined;
/**
 * @member {String} title
 */

User.prototype['title'] = undefined;
/**
 * @member {String} username
 */

User.prototype['username'] = undefined;
/**
 * @member {String} password
 */

User.prototype['password'] = undefined;
/**
 * @member {Array.<module:model/Assignment>} assingments
 */

User.prototype['assingments'] = undefined;
var _default = User;
exports.default = _default;