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
 * The Facility model module.
 * @module model/Facility
 * @version 1.0.0
 */
var Facility =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Facility</code>.
   * @alias module:model/Facility
   * @param name {String} 
   */
  function Facility(name) {
    _classCallCheck(this, Facility);

    Facility.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Facility, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Facility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Facility} obj Optional instance to populate.
     * @return {module:model/Facility} The populated <code>Facility</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Facility();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient.default.convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('services')) {
          obj['services'] = _ApiClient.default.convertToType(data['services'], [Object]);
        }

        if (data.hasOwnProperty('doctors')) {
          obj['doctors'] = _ApiClient.default.convertToType(data['doctors'], [Object]);
        }

        if (data.hasOwnProperty('rooms')) {
          obj['rooms'] = _ApiClient.default.convertToType(data['rooms'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return Facility;
}();
/**
 * @member {String} _id
 */


Facility.prototype['_id'] = undefined;
/**
 * @member {String} type
 */

Facility.prototype['type'] = undefined;
/**
 * @member {String} name
 */

Facility.prototype['name'] = undefined;
/**
 * @member {Array.<Object>} services
 */

Facility.prototype['services'] = undefined;
/**
 * @member {Array.<Object>} doctors
 */

Facility.prototype['doctors'] = undefined;
/**
 * @member {Array.<Object>} rooms
 */

Facility.prototype['rooms'] = undefined;
var _default = Facility;
exports.default = _default;