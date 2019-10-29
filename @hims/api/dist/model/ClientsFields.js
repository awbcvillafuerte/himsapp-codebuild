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
 * The ClientsFields model module.
 * @module model/ClientsFields
 * @version 1.0.0
 */
var ClientsFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientsFields</code>.
   * @alias module:model/ClientsFields
   */
  function ClientsFields() {
    _classCallCheck(this, ClientsFields);

    ClientsFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientsFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientsFields} obj Optional instance to populate.
     * @return {module:model/ClientsFields} The populated <code>ClientsFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientsFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Boolean');
        }

        if (data.hasOwnProperty('registered_name')) {
          obj['registered_name'] = _ApiClient.default.convertToType(data['registered_name'], 'Boolean');
        }

        if (data.hasOwnProperty('brand_name')) {
          obj['brand_name'] = _ApiClient.default.convertToType(data['brand_name'], 'Boolean');
        }

        if (data.hasOwnProperty('name_on_card')) {
          obj['name_on_card'] = _ApiClient.default.convertToType(data['name_on_card'], 'Boolean');
        }

        if (data.hasOwnProperty('corporate_account_no')) {
          obj['corporate_account_no'] = _ApiClient.default.convertToType(data['corporate_account_no'], 'Boolean');
        }

        if (data.hasOwnProperty('tin_no')) {
          obj['tin_no'] = _ApiClient.default.convertToType(data['tin_no'], 'Boolean');
        }

        if (data.hasOwnProperty('vat_type')) {
          obj['vat_type'] = _ApiClient.default.convertToType(data['vat_type'], 'Boolean');
        }

        if (data.hasOwnProperty('evat_no')) {
          obj['evat_no'] = _ApiClient.default.convertToType(data['evat_no'], 'Boolean');
        }

        if (data.hasOwnProperty('industry')) {
          obj['industry'] = _ApiClient.default.convertToType(data['industry'], 'Boolean');
        }

        if (data.hasOwnProperty('ownership')) {
          obj['ownership'] = _ApiClient.default.convertToType(data['ownership'], 'Boolean');
        }

        if (data.hasOwnProperty('years_of_existence')) {
          obj['years_of_existence'] = _ApiClient.default.convertToType(data['years_of_existence'], 'Boolean');
        }

        if (data.hasOwnProperty('prev_hmo_provider')) {
          obj['prev_hmo_provider'] = _ApiClient.default.convertToType(data['prev_hmo_provider'], 'Boolean');
        }

        if (data.hasOwnProperty('agent_name')) {
          obj['agent_name'] = _ApiClient.default.convertToType(data['agent_name'], 'Boolean');
        }

        if (data.hasOwnProperty('sec_reg_no')) {
          obj['sec_reg_no'] = _ApiClient.default.convertToType(data['sec_reg_no'], 'Boolean');
        }

        if (data.hasOwnProperty('tel_no')) {
          obj['tel_no'] = _ApiClient.default.convertToType(data['tel_no'], 'Boolean');
        }

        if (data.hasOwnProperty('authorized_signatory')) {
          obj['authorized_signatory'] = _ApiClient.default.convertToType(data['authorized_signatory'], 'Boolean');
        }

        if (data.hasOwnProperty('sources_of_funds')) {
          obj['sources_of_funds'] = _ApiClient.default.convertToType(data['sources_of_funds'], 'Boolean');
        }

        if (data.hasOwnProperty('sales_channel')) {
          obj['sales_channel'] = _ApiClient.default.convertToType(data['sales_channel'], 'Boolean');
        }

        if (data.hasOwnProperty('main_office_address')) {
          obj['main_office_address'] = _ApiClient.default.convertToType(data['main_office_address'], 'Boolean');
        }

        if (data.hasOwnProperty('branches')) {
          obj['branches'] = _ApiClient.default.convertToType(data['branches'], 'Boolean');
        }

        if (data.hasOwnProperty('contact_numbers')) {
          obj['contact_numbers'] = _ApiClient.default.convertToType(data['contact_numbers'], 'Boolean');
        }

        if (data.hasOwnProperty('contact_persons')) {
          obj['contact_persons'] = _ApiClient.default.convertToType(data['contact_persons'], 'Boolean');
        }

        if (data.hasOwnProperty('contracts')) {
          obj['contracts'] = _ApiClient.default.convertToType(data['contracts'], 'Boolean');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient.default.convertToType(data['status'], 'Boolean');
        }

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient.default.convertToType(data['attachments'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ClientsFields;
}();
/**
 * @member {Boolean} _id
 */


ClientsFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} delete_dt
 */

ClientsFields.prototype['delete_dt'] = undefined;
/**
 * @member {Boolean} registered_name
 */

ClientsFields.prototype['registered_name'] = undefined;
/**
 * @member {Boolean} brand_name
 */

ClientsFields.prototype['brand_name'] = undefined;
/**
 * @member {Boolean} name_on_card
 */

ClientsFields.prototype['name_on_card'] = undefined;
/**
 * @member {Boolean} corporate_account_no
 */

ClientsFields.prototype['corporate_account_no'] = undefined;
/**
 * @member {Boolean} tin_no
 */

ClientsFields.prototype['tin_no'] = undefined;
/**
 * @member {Boolean} vat_type
 */

ClientsFields.prototype['vat_type'] = undefined;
/**
 * @member {Boolean} evat_no
 */

ClientsFields.prototype['evat_no'] = undefined;
/**
 * @member {Boolean} industry
 */

ClientsFields.prototype['industry'] = undefined;
/**
 * @member {Boolean} ownership
 */

ClientsFields.prototype['ownership'] = undefined;
/**
 * @member {Boolean} years_of_existence
 */

ClientsFields.prototype['years_of_existence'] = undefined;
/**
 * @member {Boolean} prev_hmo_provider
 */

ClientsFields.prototype['prev_hmo_provider'] = undefined;
/**
 * @member {Boolean} agent_name
 */

ClientsFields.prototype['agent_name'] = undefined;
/**
 * @member {Boolean} sec_reg_no
 */

ClientsFields.prototype['sec_reg_no'] = undefined;
/**
 * @member {Boolean} tel_no
 */

ClientsFields.prototype['tel_no'] = undefined;
/**
 * @member {Boolean} authorized_signatory
 */

ClientsFields.prototype['authorized_signatory'] = undefined;
/**
 * @member {Boolean} sources_of_funds
 */

ClientsFields.prototype['sources_of_funds'] = undefined;
/**
 * @member {Boolean} sales_channel
 */

ClientsFields.prototype['sales_channel'] = undefined;
/**
 * @member {Boolean} main_office_address
 */

ClientsFields.prototype['main_office_address'] = undefined;
/**
 * @member {Boolean} branches
 */

ClientsFields.prototype['branches'] = undefined;
/**
 * @member {Boolean} contact_numbers
 */

ClientsFields.prototype['contact_numbers'] = undefined;
/**
 * @member {Boolean} contact_persons
 */

ClientsFields.prototype['contact_persons'] = undefined;
/**
 * @member {Boolean} contracts
 */

ClientsFields.prototype['contracts'] = undefined;
/**
 * @member {Boolean} status
 */

ClientsFields.prototype['status'] = undefined;
/**
 * @member {Boolean} attachments
 */

ClientsFields.prototype['attachments'] = undefined;
var _default = ClientsFields;
exports.default = _default;