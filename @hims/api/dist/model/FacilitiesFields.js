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
 * The FacilitiesFields model module.
 * @module model/FacilitiesFields
 * @version 1.0.0
 */
var FacilitiesFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FacilitiesFields</code>.
   * @alias module:model/FacilitiesFields
   */
  function FacilitiesFields() {
    _classCallCheck(this, FacilitiesFields);

    FacilitiesFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FacilitiesFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FacilitiesFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FacilitiesFields} obj Optional instance to populate.
     * @return {module:model/FacilitiesFields} The populated <code>FacilitiesFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FacilitiesFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient.default.convertToType(data['type'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'Boolean');
        }

        if (data.hasOwnProperty('services')) {
          obj['services'] = _ApiClient.default.convertToType(data['services'], 'Boolean');
        }

        if (data.hasOwnProperty('doctors')) {
          obj['doctors'] = _ApiClient.default.convertToType(data['doctors'], 'Boolean');
        }

        if (data.hasOwnProperty('rooms')) {
          obj['rooms'] = _ApiClient.default.convertToType(data['rooms'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return FacilitiesFields;
}();
/**
 * @member {Boolean} _id
 */


FacilitiesFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} type
 */

FacilitiesFields.prototype['type'] = undefined;
/**
 * @member {Boolean} name
 */

FacilitiesFields.prototype['name'] = undefined;
/**
 * @member {Boolean} services
 */

FacilitiesFields.prototype['services'] = undefined;
/**
 * @member {Boolean} doctors
 */

FacilitiesFields.prototype['doctors'] = undefined;
/**
 * @member {Boolean} rooms
 */

FacilitiesFields.prototype['rooms'] = undefined;
var _default = FacilitiesFields;
exports.default = _default;