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
 * The DoctorsFields model module.
 * @module model/DoctorsFields
 * @version 1.0.0
 */
var DoctorsFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DoctorsFields</code>.
   * @alias module:model/DoctorsFields
   */
  function DoctorsFields() {
    _classCallCheck(this, DoctorsFields);

    DoctorsFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DoctorsFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DoctorsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DoctorsFields} obj Optional instance to populate.
     * @return {module:model/DoctorsFields} The populated <code>DoctorsFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DoctorsFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient.default.convertToType(data['type'], 'Boolean');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient.default.convertToType(data['first_name'], 'Boolean');
        }

        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient.default.convertToType(data['middle_name'], 'Boolean');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient.default.convertToType(data['last_name'], 'Boolean');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient.default.convertToType(data['gender'], 'Boolean');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient.default.convertToType(data['address'], 'Boolean');
        }

        if (data.hasOwnProperty('specializations')) {
          obj['specializations'] = _ApiClient.default.convertToType(data['specializations'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DoctorsFields;
}();
/**
 * @member {Boolean} _id
 */


DoctorsFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} type
 */

DoctorsFields.prototype['type'] = undefined;
/**
 * @member {Boolean} first_name
 */

DoctorsFields.prototype['first_name'] = undefined;
/**
 * @member {Boolean} middle_name
 */

DoctorsFields.prototype['middle_name'] = undefined;
/**
 * @member {Boolean} last_name
 */

DoctorsFields.prototype['last_name'] = undefined;
/**
 * @member {Boolean} gender
 */

DoctorsFields.prototype['gender'] = undefined;
/**
 * @member {Boolean} address
 */

DoctorsFields.prototype['address'] = undefined;
/**
 * @member {Boolean} specializations
 */

DoctorsFields.prototype['specializations'] = undefined;
var _default = DoctorsFields;
exports.default = _default;