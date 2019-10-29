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
 * The Icd10Partial model module.
 * @module model/Icd10Partial
 * @version 1.0.0
 */
var Icd10Partial =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Icd10Partial</code>.
   * @alias module:model/Icd10Partial
   */
  function Icd10Partial() {
    _classCallCheck(this, Icd10Partial);

    Icd10Partial.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Icd10Partial, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Icd10Partial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Icd10Partial} obj Optional instance to populate.
     * @return {module:model/Icd10Partial} The populated <code>Icd10Partial</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Icd10Partial();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('category_code')) {
          obj['category_code'] = _ApiClient.default.convertToType(data['category_code'], 'String');
        }

        if (data.hasOwnProperty('diagnosis_code')) {
          obj['diagnosis_code'] = _ApiClient.default.convertToType(data['diagnosis_code'], 'String');
        }

        if (data.hasOwnProperty('full_code')) {
          obj['full_code'] = _ApiClient.default.convertToType(data['full_code'], 'String');
        }

        if (data.hasOwnProperty('abbreviated_description')) {
          obj['abbreviated_description'] = _ApiClient.default.convertToType(data['abbreviated_description'], 'String');
        }

        if (data.hasOwnProperty('full_description')) {
          obj['full_description'] = _ApiClient.default.convertToType(data['full_description'], 'String');
        }

        if (data.hasOwnProperty('category_title')) {
          obj['category_title'] = _ApiClient.default.convertToType(data['category_title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Icd10Partial;
}();
/**
 * @member {String} _id
 */


Icd10Partial.prototype['_id'] = undefined;
/**
 * @member {String} category_code
 */

Icd10Partial.prototype['category_code'] = undefined;
/**
 * @member {String} diagnosis_code
 */

Icd10Partial.prototype['diagnosis_code'] = undefined;
/**
 * @member {String} full_code
 */

Icd10Partial.prototype['full_code'] = undefined;
/**
 * @member {String} abbreviated_description
 */

Icd10Partial.prototype['abbreviated_description'] = undefined;
/**
 * @member {String} full_description
 */

Icd10Partial.prototype['full_description'] = undefined;
/**
 * @member {String} category_title
 */

Icd10Partial.prototype['category_title'] = undefined;
var _default = Icd10Partial;
exports.default = _default;