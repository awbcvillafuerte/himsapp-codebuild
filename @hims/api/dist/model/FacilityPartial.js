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
 * The FacilityPartial model module.
 * @module model/FacilityPartial
 * @version 1.0.0
 */
var FacilityPartial =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FacilityPartial</code>.
   * @alias module:model/FacilityPartial
   */
  function FacilityPartial() {
    _classCallCheck(this, FacilityPartial);

    FacilityPartial.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FacilityPartial, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FacilityPartial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FacilityPartial} obj Optional instance to populate.
     * @return {module:model/FacilityPartial} The populated <code>FacilityPartial</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FacilityPartial();

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

  return FacilityPartial;
}();
/**
 * @member {String} _id
 */


FacilityPartial.prototype['_id'] = undefined;
/**
 * @member {String} type
 */

FacilityPartial.prototype['type'] = undefined;
/**
 * @member {String} name
 */

FacilityPartial.prototype['name'] = undefined;
/**
 * @member {Array.<Object>} services
 */

FacilityPartial.prototype['services'] = undefined;
/**
 * @member {Array.<Object>} doctors
 */

FacilityPartial.prototype['doctors'] = undefined;
/**
 * @member {Array.<Object>} rooms
 */

FacilityPartial.prototype['rooms'] = undefined;
var _default = FacilityPartial;
exports.default = _default;