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
 * The Cpt model module.
 * @module model/Cpt
 * @version 1.0.0
 */
var Cpt =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Cpt</code>.
   * @alias module:model/Cpt
   * @param code {String} 
   * @param label {String} 
   */
  function Cpt(code, label) {
    _classCallCheck(this, Cpt);

    Cpt.initialize(this, code, label);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Cpt, null, [{
    key: "initialize",
    value: function initialize(obj, code, label) {
      obj['code'] = code;
      obj['label'] = label;
    }
    /**
     * Constructs a <code>Cpt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Cpt} obj Optional instance to populate.
     * @return {module:model/Cpt} The populated <code>Cpt</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Cpt();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient.default.convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient.default.convertToType(data['label'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Cpt;
}();
/**
 * @member {String} _id
 */


Cpt.prototype['_id'] = undefined;
/**
 * @member {String} code
 */

Cpt.prototype['code'] = undefined;
/**
 * @member {String} label
 */

Cpt.prototype['label'] = undefined;
var _default = Cpt;
exports.default = _default;