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
 * The MembersFields model module.
 * @module model/MembersFields
 * @version 1.0.0
 */
var MembersFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MembersFields</code>.
   * @alias module:model/MembersFields
   */
  function MembersFields() {
    _classCallCheck(this, MembersFields);

    MembersFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MembersFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MembersFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MembersFields} obj Optional instance to populate.
     * @return {module:model/MembersFields} The populated <code>MembersFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MembersFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Boolean');
        }

        if (data.hasOwnProperty('member_card_no')) {
          obj['member_card_no'] = _ApiClient.default.convertToType(data['member_card_no'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient.default.convertToType(data['title'], 'Boolean');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient.default.convertToType(data['last_name'], 'Boolean');
        }

        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient.default.convertToType(data['middle_name'], 'Boolean');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient.default.convertToType(data['first_name'], 'Boolean');
        }

        if (data.hasOwnProperty('suffix')) {
          obj['suffix'] = _ApiClient.default.convertToType(data['suffix'], 'Boolean');
        }

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient.default.convertToType(data['date_of_birth'], 'Boolean');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient.default.convertToType(data['gender'], 'Boolean');
        }

        if (data.hasOwnProperty('civil_status')) {
          obj['civil_status'] = _ApiClient.default.convertToType(data['civil_status'], 'Boolean');
        }

        if (data.hasOwnProperty('email_address')) {
          obj['email_address'] = _ApiClient.default.convertToType(data['email_address'], 'Boolean');
        }

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient.default.convertToType(data['client_id'], 'Boolean');
        }

        if (data.hasOwnProperty('member_type')) {
          obj['member_type'] = _ApiClient.default.convertToType(data['member_type'], 'Boolean');
        }

        if (data.hasOwnProperty('plan_type')) {
          obj['plan_type'] = _ApiClient.default.convertToType(data['plan_type'], 'Boolean');
        }

        if (data.hasOwnProperty('contracts')) {
          obj['contracts'] = _ApiClient.default.convertToType(data['contracts'], 'Boolean');
        }

        if (data.hasOwnProperty('carried_over_limits')) {
          obj['carried_over_limits'] = _ApiClient.default.convertToType(data['carried_over_limits'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return MembersFields;
}();
/**
 * @member {Boolean} _id
 */


MembersFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} delete_dt
 */

MembersFields.prototype['delete_dt'] = undefined;
/**
 * @member {Boolean} member_card_no
 */

MembersFields.prototype['member_card_no'] = undefined;
/**
 * @member {Boolean} title
 */

MembersFields.prototype['title'] = undefined;
/**
 * @member {Boolean} last_name
 */

MembersFields.prototype['last_name'] = undefined;
/**
 * @member {Boolean} middle_name
 */

MembersFields.prototype['middle_name'] = undefined;
/**
 * @member {Boolean} first_name
 */

MembersFields.prototype['first_name'] = undefined;
/**
 * @member {Boolean} suffix
 */

MembersFields.prototype['suffix'] = undefined;
/**
 * @member {Boolean} date_of_birth
 */

MembersFields.prototype['date_of_birth'] = undefined;
/**
 * @member {Boolean} gender
 */

MembersFields.prototype['gender'] = undefined;
/**
 * @member {Boolean} civil_status
 */

MembersFields.prototype['civil_status'] = undefined;
/**
 * @member {Boolean} email_address
 */

MembersFields.prototype['email_address'] = undefined;
/**
 * @member {Boolean} client_id
 */

MembersFields.prototype['client_id'] = undefined;
/**
 * @member {Boolean} member_type
 */

MembersFields.prototype['member_type'] = undefined;
/**
 * @member {Boolean} plan_type
 */

MembersFields.prototype['plan_type'] = undefined;
/**
 * @member {Boolean} contracts
 */

MembersFields.prototype['contracts'] = undefined;
/**
 * @member {Boolean} carried_over_limits
 */

MembersFields.prototype['carried_over_limits'] = undefined;
var _default = MembersFields;
exports.default = _default;