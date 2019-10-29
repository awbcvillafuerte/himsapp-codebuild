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
 * The ContactAddress model module.
 * @module model/ContactAddress
 * @version 1.0.0
 */
var ContactAddress =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ContactAddress</code>.
   * Main office address
   * @alias module:model/ContactAddress
   * @param floor {Number} Floor number
   * @param unit {String} Unit
   * @param bldgNo {String} Building number
   * @param bldgName {String} Building name
   * @param street {String} Street name
   * @param brgy {String} Barangay
   * @param city {String} City
   * @param region {String} Region
   * @param zipCode {String} ZIP code
   */
  function ContactAddress(floor, unit, bldgNo, bldgName, street, brgy, city, region, zipCode) {
    _classCallCheck(this, ContactAddress);

    ContactAddress.initialize(this, floor, unit, bldgNo, bldgName, street, brgy, city, region, zipCode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactAddress, null, [{
    key: "initialize",
    value: function initialize(obj, floor, unit, bldgNo, bldgName, street, brgy, city, region, zipCode) {
      obj['floor'] = floor;
      obj['unit'] = unit;
      obj['bldg_no'] = bldgNo;
      obj['bldg_name'] = bldgName;
      obj['street'] = street;
      obj['brgy'] = brgy;
      obj['city'] = city;
      obj['region'] = region;
      obj['zip_code'] = zipCode;
    }
    /**
     * Constructs a <code>ContactAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactAddress} obj Optional instance to populate.
     * @return {module:model/ContactAddress} The populated <code>ContactAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactAddress();

        if (data.hasOwnProperty('floor')) {
          obj['floor'] = _ApiClient.default.convertToType(data['floor'], 'Number');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient.default.convertToType(data['unit'], 'String');
        }

        if (data.hasOwnProperty('bldg_no')) {
          obj['bldg_no'] = _ApiClient.default.convertToType(data['bldg_no'], 'String');
        }

        if (data.hasOwnProperty('bldg_name')) {
          obj['bldg_name'] = _ApiClient.default.convertToType(data['bldg_name'], 'String');
        }

        if (data.hasOwnProperty('street')) {
          obj['street'] = _ApiClient.default.convertToType(data['street'], 'String');
        }

        if (data.hasOwnProperty('brgy')) {
          obj['brgy'] = _ApiClient.default.convertToType(data['brgy'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient.default.convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient.default.convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('zip_code')) {
          obj['zip_code'] = _ApiClient.default.convertToType(data['zip_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContactAddress;
}();
/**
 * Floor number
 * @member {Number} floor
 */


ContactAddress.prototype['floor'] = undefined;
/**
 * Unit
 * @member {String} unit
 */

ContactAddress.prototype['unit'] = undefined;
/**
 * Building number
 * @member {String} bldg_no
 */

ContactAddress.prototype['bldg_no'] = undefined;
/**
 * Building name
 * @member {String} bldg_name
 */

ContactAddress.prototype['bldg_name'] = undefined;
/**
 * Street name
 * @member {String} street
 */

ContactAddress.prototype['street'] = undefined;
/**
 * Barangay
 * @member {String} brgy
 */

ContactAddress.prototype['brgy'] = undefined;
/**
 * City
 * @member {String} city
 */

ContactAddress.prototype['city'] = undefined;
/**
 * Region
 * @member {String} region
 */

ContactAddress.prototype['region'] = undefined;
/**
 * ZIP code
 * @member {String} zip_code
 */

ContactAddress.prototype['zip_code'] = undefined;
var _default = ContactAddress;
exports.default = _default;