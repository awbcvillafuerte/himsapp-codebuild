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
 * The Icd10codesFields model module.
 * @module model/Icd10codesFields
 * @version 1.0.0
 */
var Icd10codesFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Icd10codesFields</code>.
   * @alias module:model/Icd10codesFields
   */
  function Icd10codesFields() {
    _classCallCheck(this, Icd10codesFields);

    Icd10codesFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Icd10codesFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Icd10codesFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Icd10codesFields} obj Optional instance to populate.
     * @return {module:model/Icd10codesFields} The populated <code>Icd10codesFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Icd10codesFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('category_code')) {
          obj['category_code'] = _ApiClient.default.convertToType(data['category_code'], 'Boolean');
        }

        if (data.hasOwnProperty('diagnosis_code')) {
          obj['diagnosis_code'] = _ApiClient.default.convertToType(data['diagnosis_code'], 'Boolean');
        }

        if (data.hasOwnProperty('full_code')) {
          obj['full_code'] = _ApiClient.default.convertToType(data['full_code'], 'Boolean');
        }

        if (data.hasOwnProperty('abbreviated_description')) {
          obj['abbreviated_description'] = _ApiClient.default.convertToType(data['abbreviated_description'], 'Boolean');
        }

        if (data.hasOwnProperty('full_description')) {
          obj['full_description'] = _ApiClient.default.convertToType(data['full_description'], 'Boolean');
        }

        if (data.hasOwnProperty('category_title')) {
          obj['category_title'] = _ApiClient.default.convertToType(data['category_title'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Icd10codesFields;
}();
/**
 * @member {Boolean} _id
 */


Icd10codesFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} category_code
 */

Icd10codesFields.prototype['category_code'] = undefined;
/**
 * @member {Boolean} diagnosis_code
 */

Icd10codesFields.prototype['diagnosis_code'] = undefined;
/**
 * @member {Boolean} full_code
 */

Icd10codesFields.prototype['full_code'] = undefined;
/**
 * @member {Boolean} abbreviated_description
 */

Icd10codesFields.prototype['abbreviated_description'] = undefined;
/**
 * @member {Boolean} full_description
 */

Icd10codesFields.prototype['full_description'] = undefined;
/**
 * @member {Boolean} category_title
 */

Icd10codesFields.prototype['category_title'] = undefined;
var _default = Icd10codesFields;
exports.default = _default;