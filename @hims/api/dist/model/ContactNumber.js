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
 * The ContactNumber model module.
 * @module model/ContactNumber
 * @version 1.0.0
 */
var ContactNumber =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ContactNumber</code>.
   * Contact numbers
   * @alias module:model/ContactNumber
   * @param no {String} Telephone number / Trunk line
   */
  function ContactNumber(no) {
    _classCallCheck(this, ContactNumber);

    ContactNumber.initialize(this, no);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactNumber, null, [{
    key: "initialize",
    value: function initialize(obj, no) {
      obj['no'] = no;
    }
    /**
     * Constructs a <code>ContactNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactNumber} obj Optional instance to populate.
     * @return {module:model/ContactNumber} The populated <code>ContactNumber</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactNumber();

        if (data.hasOwnProperty('no')) {
          obj['no'] = _ApiClient.default.convertToType(data['no'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContactNumber;
}();
/**
 * Telephone number / Trunk line
 * @member {String} no
 */


ContactNumber.prototype['no'] = undefined;
var _default = ContactNumber;
exports.default = _default;