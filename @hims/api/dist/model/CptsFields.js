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
 * The CptsFields model module.
 * @module model/CptsFields
 * @version 1.0.0
 */
var CptsFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CptsFields</code>.
   * @alias module:model/CptsFields
   */
  function CptsFields() {
    _classCallCheck(this, CptsFields);

    CptsFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CptsFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CptsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CptsFields} obj Optional instance to populate.
     * @return {module:model/CptsFields} The populated <code>CptsFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CptsFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient.default.convertToType(data['code'], 'Boolean');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient.default.convertToType(data['label'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CptsFields;
}();
/**
 * @member {Boolean} _id
 */


CptsFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} code
 */

CptsFields.prototype['code'] = undefined;
/**
 * @member {Boolean} label
 */

CptsFields.prototype['label'] = undefined;
var _default = CptsFields;
exports.default = _default;