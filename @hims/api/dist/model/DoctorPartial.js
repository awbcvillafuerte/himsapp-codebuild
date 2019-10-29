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
 * The DoctorPartial model module.
 * @module model/DoctorPartial
 * @version 1.0.0
 */
var DoctorPartial =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DoctorPartial</code>.
   * @alias module:model/DoctorPartial
   */
  function DoctorPartial() {
    _classCallCheck(this, DoctorPartial);

    DoctorPartial.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DoctorPartial, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DoctorPartial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DoctorPartial} obj Optional instance to populate.
     * @return {module:model/DoctorPartial} The populated <code>DoctorPartial</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DoctorPartial();

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

  return DoctorPartial;
}();
/**
 * @member {String} _id
 */


DoctorPartial.prototype['_id'] = undefined;
/**
 * @member {String} type
 */

DoctorPartial.prototype['type'] = undefined;
/**
 * @member {String} first_name
 */

DoctorPartial.prototype['first_name'] = undefined;
/**
 * @member {String} middle_name
 */

DoctorPartial.prototype['middle_name'] = undefined;
/**
 * @member {String} last_name
 */

DoctorPartial.prototype['last_name'] = undefined;
/**
 * @member {String} gender
 */

DoctorPartial.prototype['gender'] = undefined;
/**
 * @member {Object} address
 */

DoctorPartial.prototype['address'] = undefined;
/**
 * @member {Array.<Object>} specializations
 */

DoctorPartial.prototype['specializations'] = undefined;
var _default = DoctorPartial;
exports.default = _default;