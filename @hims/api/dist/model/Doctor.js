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
 * The Doctor model module.
 * @module model/Doctor
 * @version 1.0.0
 */
var Doctor =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Doctor</code>.
   * @alias module:model/Doctor
   * @param type {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   */
  function Doctor(type, firstName, lastName) {
    _classCallCheck(this, Doctor);

    Doctor.initialize(this, type, firstName, lastName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Doctor, null, [{
    key: "initialize",
    value: function initialize(obj, type, firstName, lastName) {
      obj['type'] = type;
      obj['first_name'] = firstName;
      obj['last_name'] = lastName;
    }
    /**
     * Constructs a <code>Doctor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Doctor} obj Optional instance to populate.
     * @return {module:model/Doctor} The populated <code>Doctor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Doctor();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient.default.convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient.default.convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient.default.convertToType(data['middle_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient.default.convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient.default.convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient.default.convertToType(data['address'], Object);
        }

        if (data.hasOwnProperty('specializations')) {
          obj['specializations'] = _ApiClient.default.convertToType(data['specializations'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return Doctor;
}();
/**
 * @member {String} _id
 */


Doctor.prototype['_id'] = undefined;
/**
 * @member {String} type
 */

Doctor.prototype['type'] = undefined;
/**
 * @member {String} first_name
 */

Doctor.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

Doctor.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

Doctor.prototype['last_name'] = undefined;
/**
 * @member {String} gender
 */

Doctor.prototype['gender'] = undefined;
/**
 * @member {Object} address
 */

Doctor.prototype['address'] = undefined;
/**
 * @member {Array.<Object>} specializations
 */

Doctor.prototype['specializations'] = undefined;
var _default = Doctor;
exports.default = _default;