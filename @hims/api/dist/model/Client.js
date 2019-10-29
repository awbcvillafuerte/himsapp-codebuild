"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContactAddress = _interopRequireDefault(require("./ContactAddress"));

var _ContactAddress2 = _interopRequireDefault(require("./ContactAddress1"));

var _ContactNumber = _interopRequireDefault(require("./ContactNumber"));

var _ContactPerson = _interopRequireDefault(require("./ContactPerson"));

var _FileAttachment = _interopRequireDefault(require("./FileAttachment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Client model module.
 * @module model/Client
 * @version 1.0.0
 */
var Client =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Client</code>.
   * Client entity
   * @alias module:model/Client
   */
  function Client() {
    _classCallCheck(this, Client);

    Client.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Client, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Client} obj Optional instance to populate.
     * @return {module:model/Client} The populated <code>Client</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Client();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Date');
        }

        if (data.hasOwnProperty('registered_name')) {
          obj['registered_name'] = _ApiClient.default.convertToType(data['registered_name'], 'String');
        }

        if (data.hasOwnProperty('brand_name')) {
          obj['brand_name'] = _ApiClient.default.convertToType(data['brand_name'], 'String');
        }

        if (data.hasOwnProperty('name_on_card')) {
          obj['name_on_card'] = _ApiClient.default.convertToType(data['name_on_card'], 'String');
        }

        if (data.hasOwnProperty('corporate_account_no')) {
          obj['corporate_account_no'] = _ApiClient.default.convertToType(data['corporate_account_no'], 'String');
        }

        if (data.hasOwnProperty('tin_no')) {
          obj['tin_no'] = _ApiClient.default.convertToType(data['tin_no'], 'String');
        }

        if (data.hasOwnProperty('vat_type')) {
          obj['vat_type'] = _ApiClient.default.convertToType(data['vat_type'], 'String');
        }

        if (data.hasOwnProperty('evat_no')) {
          obj['evat_no'] = _ApiClient.default.convertToType(data['evat_no'], 'String');
        }

        if (data.hasOwnProperty('industry')) {
          obj['industry'] = _ApiClient.default.convertToType(data['industry'], 'String');
        }

        if (data.hasOwnProperty('ownership')) {
          obj['ownership'] = _ApiClient.default.convertToType(data['ownership'], 'String');
        }

        if (data.hasOwnProperty('years_of_existence')) {
          obj['years_of_existence'] = _ApiClient.default.convertToType(data['years_of_existence'], 'Number');
        }

        if (data.hasOwnProperty('prev_hmo_provider')) {
          obj['prev_hmo_provider'] = _ApiClient.default.convertToType(data['prev_hmo_provider'], 'String');
        }

        if (data.hasOwnProperty('agent_name')) {
          obj['agent_name'] = _ApiClient.default.convertToType(data['agent_name'], 'String');
        }

        if (data.hasOwnProperty('sec_reg_no')) {
          obj['sec_reg_no'] = _ApiClient.default.convertToType(data['sec_reg_no'], 'String');
        }

        if (data.hasOwnProperty('tel_no')) {
          obj['tel_no'] = _ApiClient.default.convertToType(data['tel_no'], 'String');
        }

        if (data.hasOwnProperty('authorized_signatory')) {
          obj['authorized_signatory'] = _ApiClient.default.convertToType(data['authorized_signatory'], 'String');
        }

        if (data.hasOwnProperty('sources_of_funds')) {
          obj['sources_of_funds'] = _ApiClient.default.convertToType(data['sources_of_funds'], 'String');
        }

        if (data.hasOwnProperty('sales_channel')) {
          obj['sales_channel'] = _ApiClient.default.convertToType(data['sales_channel'], Object);
        }

        if (data.hasOwnProperty('main_office_address')) {
          obj['main_office_address'] = _ContactAddress.default.constructFromObject(data['main_office_address']);
        }

        if (data.hasOwnProperty('branches')) {
          obj['branches'] = _ApiClient.default.convertToType(data['branches'], [_ContactAddress2.default]);
        }

        if (data.hasOwnProperty('contact_numbers')) {
          obj['contact_numbers'] = _ApiClient.default.convertToType(data['contact_numbers'], [_ContactNumber.default]);
        }

        if (data.hasOwnProperty('contact_persons')) {
          obj['contact_persons'] = _ApiClient.default.convertToType(data['contact_persons'], [_ContactPerson.default]);
        }

        if (data.hasOwnProperty('contracts')) {
          obj['contracts'] = _ApiClient.default.convertToType(data['contracts'], [Object]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient.default.convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient.default.convertToType(data['attachments'], [_FileAttachment.default]);
        }
      }

      return obj;
    }
  }]);

  return Client;
}();
/**
 * Primary key of a document in a MongoDB collection.
 * @member {String} _id
 */


Client.prototype['_id'] = undefined;
/**
 * Date an item is deleted. Null/undefined value means the item is not yet deleted.
 * @member {Date} delete_dt
 */

Client.prototype['delete_dt'] = undefined;
/**
 * Registered corporate name
 * @member {String} registered_name
 */

Client.prototype['registered_name'] = undefined;
/**
 * Trade / brand name
 * @member {String} brand_name
 */

Client.prototype['brand_name'] = undefined;
/**
 * Name displayed on card
 * @member {String} name_on_card
 */

Client.prototype['name_on_card'] = undefined;
/**
 * Corporate Account Number
 * @member {String} corporate_account_no
 */

Client.prototype['corporate_account_no'] = undefined;
/**
 * Corporate Tax Identification Number
 * @member {String} tin_no
 */

Client.prototype['tin_no'] = undefined;
/**
 * VAT type
 * @member {String} vat_type
 */

Client.prototype['vat_type'] = undefined;
/**
 * E-VAT number
 * @member {String} evat_no
 */

Client.prototype['evat_no'] = undefined;
/**
 * Industry
 * @member {String} industry
 */

Client.prototype['industry'] = undefined;
/**
 * Ownership
 * @member {module:model/Client.OwnershipEnum} ownership
 */

Client.prototype['ownership'] = undefined;
/**
 * Years of existence
 * @member {Number} years_of_existence
 */

Client.prototype['years_of_existence'] = undefined;
/**
 * Previous HMO provider
 * @member {String} prev_hmo_provider
 */

Client.prototype['prev_hmo_provider'] = undefined;
/**
 * Agent name
 * @member {String} agent_name
 */

Client.prototype['agent_name'] = undefined;
/**
 * SEC registration number
 * @member {String} sec_reg_no
 */

Client.prototype['sec_reg_no'] = undefined;
/**
 * Telephone number
 * @member {String} tel_no
 */

Client.prototype['tel_no'] = undefined;
/**
 * Authorized signatory
 * @member {String} authorized_signatory
 */

Client.prototype['authorized_signatory'] = undefined;
/**
 * Sources of funds
 * @member {String} sources_of_funds
 */

Client.prototype['sources_of_funds'] = undefined;
/**
 * Sales channel
 * @member {Object} sales_channel
 */

Client.prototype['sales_channel'] = undefined;
/**
 * @member {module:model/ContactAddress} main_office_address
 */

Client.prototype['main_office_address'] = undefined;
/**
 * @member {Array.<module:model/ContactAddress1>} branches
 */

Client.prototype['branches'] = undefined;
/**
 * @member {Array.<module:model/ContactNumber>} contact_numbers
 */

Client.prototype['contact_numbers'] = undefined;
/**
 * @member {Array.<module:model/ContactPerson>} contact_persons
 */

Client.prototype['contact_persons'] = undefined;
/**
 * @member {Array.<Object>} contracts
 */

Client.prototype['contracts'] = undefined;
/**
 * Status
 * @member {module:model/Client.StatusEnum} status
 */

Client.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/FileAttachment>} attachments
 */

Client.prototype['attachments'] = undefined;
/**
 * Allowed values for the <code>ownership</code> property.
 * @enum {String}
 * @readonly
 */

Client['OwnershipEnum'] = {
  /**
   * value: "Local"
   * @const
   */
  "Local": "Local",

  /**
   * value: "Multinational"
   * @const
   */
  "Multinational": "Multinational"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Client['StatusEnum'] = {
  /**
   * value: "potential"
   * @const
   */
  "potential": "potential",

  /**
   * value: "active"
   * @const
   */
  "active": "active",

  /**
   * value: "terminated"
   * @const
   */
  "terminated": "terminated"
};
var _default = Client;
exports.default = _default;