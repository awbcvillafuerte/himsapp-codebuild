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
 * The BenefitplansIoPdfFields model module.
 * @module model/BenefitplansIoPdfFields
 * @version 1.0.0
 */
var BenefitplansIoPdfFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BenefitplansIoPdfFields</code>.
   * @alias module:model/BenefitplansIoPdfFields
   */
  function BenefitplansIoPdfFields() {
    _classCallCheck(this, BenefitplansIoPdfFields);

    BenefitplansIoPdfFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BenefitplansIoPdfFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BenefitplansIoPdfFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenefitplansIoPdfFields} obj Optional instance to populate.
     * @return {module:model/BenefitplansIoPdfFields} The populated <code>BenefitplansIoPdfFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BenefitplansIoPdfFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Boolean');
        }

        if (data.hasOwnProperty('base_id')) {
          obj['base_id'] = _ApiClient.default.convertToType(data['base_id'], 'Boolean');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient.default.convertToType(data['uid'], 'Boolean');
        }

        if (data.hasOwnProperty('tree_id')) {
          obj['tree_id'] = _ApiClient.default.convertToType(data['tree_id'], 'Boolean');
        }

        if (data.hasOwnProperty('tree_path')) {
          obj['tree_path'] = _ApiClient.default.convertToType(data['tree_path'], 'Boolean');
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient.default.convertToType(data['level'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'Boolean');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient.default.convertToType(data['code'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient.default.convertToType(data['type'], 'Boolean');
        }

        if (data.hasOwnProperty('sort_index')) {
          obj['sort_index'] = _ApiClient.default.convertToType(data['sort_index'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient.default.convertToType(data['description'], 'Boolean');
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _ApiClient.default.convertToType(data['limits'], 'Boolean');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient.default.convertToType(data['status'], 'Boolean');
        }

        if (data.hasOwnProperty('remarks')) {
          obj['remarks'] = _ApiClient.default.convertToType(data['remarks'], 'Boolean');
        }

        if (data.hasOwnProperty('children')) {
          obj['children'] = _ApiClient.default.convertToType(data['children'], 'Boolean');
        }

        if (data.hasOwnProperty('revisions')) {
          obj['revisions'] = _ApiClient.default.convertToType(data['revisions'], 'Boolean');
        }

        if (data.hasOwnProperty('handler')) {
          obj['handler'] = _ApiClient.default.convertToType(data['handler'], 'Boolean');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient.default.convertToType(data['metadata'], 'Boolean');
        }

        if (data.hasOwnProperty('metadata_schema')) {
          obj['metadata_schema'] = _ApiClient.default.convertToType(data['metadata_schema'], 'Boolean');
        }

        if (data.hasOwnProperty('custom_metadata')) {
          obj['custom_metadata'] = _ApiClient.default.convertToType(data['custom_metadata'], 'Boolean');
        }

        if (data.hasOwnProperty('custom_metadata_schema')) {
          obj['custom_metadata_schema'] = _ApiClient.default.convertToType(data['custom_metadata_schema'], 'Boolean');
        }

        if (data.hasOwnProperty('canAvail')) {
          obj['canAvail'] = _ApiClient.default.convertToType(data['canAvail'], 'Boolean');
        }

        if (data.hasOwnProperty('canCover')) {
          obj['canCover'] = _ApiClient.default.convertToType(data['canCover'], 'Boolean');
        }

        if (data.hasOwnProperty('renderContract')) {
          obj['renderContract'] = _ApiClient.default.convertToType(data['renderContract'], 'Boolean');
        }

        if (data.hasOwnProperty('renderProposal')) {
          obj['renderProposal'] = _ApiClient.default.convertToType(data['renderProposal'], 'Boolean');
        }

        if (data.hasOwnProperty('renderClause')) {
          obj['renderClause'] = _ApiClient.default.convertToType(data['renderClause'], 'Boolean');
        }

        if (data.hasOwnProperty('contract_footer')) {
          obj['contract_footer'] = _ApiClient.default.convertToType(data['contract_footer'], 'Boolean');
        }

        if (data.hasOwnProperty('proposal_footer')) {
          obj['proposal_footer'] = _ApiClient.default.convertToType(data['proposal_footer'], 'Boolean');
        }

        if (data.hasOwnProperty('layers')) {
          obj['layers'] = _ApiClient.default.convertToType(data['layers'], 'Boolean');
        }

        if (data.hasOwnProperty('contract_no')) {
          obj['contract_no'] = _ApiClient.default.convertToType(data['contract_no'], 'Boolean');
        }

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient.default.convertToType(data['client_id'], 'Boolean');
        }

        if (data.hasOwnProperty('hmo_id')) {
          obj['hmo_id'] = _ApiClient.default.convertToType(data['hmo_id'], 'Boolean');
        }

        if (data.hasOwnProperty('contract_year')) {
          obj['contract_year'] = _ApiClient.default.convertToType(data['contract_year'], 'Boolean');
        }

        if (data.hasOwnProperty('principals_count')) {
          obj['principals_count'] = _ApiClient.default.convertToType(data['principals_count'], 'Boolean');
        }

        if (data.hasOwnProperty('dependents_count')) {
          obj['dependents_count'] = _ApiClient.default.convertToType(data['dependents_count'], 'Boolean');
        }

        if (data.hasOwnProperty('male_principals_count')) {
          obj['male_principals_count'] = _ApiClient.default.convertToType(data['male_principals_count'], 'Boolean');
        }

        if (data.hasOwnProperty('female_principals_count')) {
          obj['female_principals_count'] = _ApiClient.default.convertToType(data['female_principals_count'], 'Boolean');
        }

        if (data.hasOwnProperty('male_dependents_count')) {
          obj['male_dependents_count'] = _ApiClient.default.convertToType(data['male_dependents_count'], 'Boolean');
        }

        if (data.hasOwnProperty('female_dependents_count')) {
          obj['female_dependents_count'] = _ApiClient.default.convertToType(data['female_dependents_count'], 'Boolean');
        }

        if (data.hasOwnProperty('requested_premium')) {
          obj['requested_premium'] = _ApiClient.default.convertToType(data['requested_premium'], 'Boolean');
        }

        if (data.hasOwnProperty('total_company_budget')) {
          obj['total_company_budget'] = _ApiClient.default.convertToType(data['total_company_budget'], 'Boolean');
        }

        if (data.hasOwnProperty('budget_per_head')) {
          obj['budget_per_head'] = _ApiClient.default.convertToType(data['budget_per_head'], 'Boolean');
        }

        if (data.hasOwnProperty('competitors_rates')) {
          obj['competitors_rates'] = _ApiClient.default.convertToType(data['competitors_rates'], 'Boolean');
        }

        if (data.hasOwnProperty('own_computation')) {
          obj['own_computation'] = _ApiClient.default.convertToType(data['own_computation'], 'Boolean');
        }

        if (data.hasOwnProperty('computation_file')) {
          obj['computation_file'] = _ApiClient.default.convertToType(data['computation_file'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return BenefitplansIoPdfFields;
}();
/**
 * @member {Boolean} _id
 */


BenefitplansIoPdfFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} delete_dt
 */

BenefitplansIoPdfFields.prototype['delete_dt'] = undefined;
/**
 * @member {Boolean} base_id
 */

BenefitplansIoPdfFields.prototype['base_id'] = undefined;
/**
 * @member {Boolean} uid
 */

BenefitplansIoPdfFields.prototype['uid'] = undefined;
/**
 * @member {Boolean} tree_id
 */

BenefitplansIoPdfFields.prototype['tree_id'] = undefined;
/**
 * @member {Boolean} tree_path
 */

BenefitplansIoPdfFields.prototype['tree_path'] = undefined;
/**
 * @member {Boolean} level
 */

BenefitplansIoPdfFields.prototype['level'] = undefined;
/**
 * @member {Boolean} name
 */

BenefitplansIoPdfFields.prototype['name'] = undefined;
/**
 * @member {Boolean} code
 */

BenefitplansIoPdfFields.prototype['code'] = undefined;
/**
 * @member {Boolean} type
 */

BenefitplansIoPdfFields.prototype['type'] = undefined;
/**
 * @member {Boolean} sort_index
 */

BenefitplansIoPdfFields.prototype['sort_index'] = undefined;
/**
 * @member {Boolean} description
 */

BenefitplansIoPdfFields.prototype['description'] = undefined;
/**
 * @member {Boolean} limits
 */

BenefitplansIoPdfFields.prototype['limits'] = undefined;
/**
 * @member {Boolean} status
 */

BenefitplansIoPdfFields.prototype['status'] = undefined;
/**
 * @member {Boolean} remarks
 */

BenefitplansIoPdfFields.prototype['remarks'] = undefined;
/**
 * @member {Boolean} children
 */

BenefitplansIoPdfFields.prototype['children'] = undefined;
/**
 * @member {Boolean} revisions
 */

BenefitplansIoPdfFields.prototype['revisions'] = undefined;
/**
 * @member {Boolean} handler
 */

BenefitplansIoPdfFields.prototype['handler'] = undefined;
/**
 * @member {Boolean} metadata
 */

BenefitplansIoPdfFields.prototype['metadata'] = undefined;
/**
 * @member {Boolean} metadata_schema
 */

BenefitplansIoPdfFields.prototype['metadata_schema'] = undefined;
/**
 * @member {Boolean} custom_metadata
 */

BenefitplansIoPdfFields.prototype['custom_metadata'] = undefined;
/**
 * @member {Boolean} custom_metadata_schema
 */

BenefitplansIoPdfFields.prototype['custom_metadata_schema'] = undefined;
/**
 * @member {Boolean} canAvail
 */

BenefitplansIoPdfFields.prototype['canAvail'] = undefined;
/**
 * @member {Boolean} canCover
 */

BenefitplansIoPdfFields.prototype['canCover'] = undefined;
/**
 * @member {Boolean} renderContract
 */

BenefitplansIoPdfFields.prototype['renderContract'] = undefined;
/**
 * @member {Boolean} renderProposal
 */

BenefitplansIoPdfFields.prototype['renderProposal'] = undefined;
/**
 * @member {Boolean} renderClause
 */

BenefitplansIoPdfFields.prototype['renderClause'] = undefined;
/**
 * @member {Boolean} contract_footer
 */

BenefitplansIoPdfFields.prototype['contract_footer'] = undefined;
/**
 * @member {Boolean} proposal_footer
 */

BenefitplansIoPdfFields.prototype['proposal_footer'] = undefined;
/**
 * @member {Boolean} layers
 */

BenefitplansIoPdfFields.prototype['layers'] = undefined;
/**
 * @member {Boolean} contract_no
 */

BenefitplansIoPdfFields.prototype['contract_no'] = undefined;
/**
 * @member {Boolean} client_id
 */

BenefitplansIoPdfFields.prototype['client_id'] = undefined;
/**
 * @member {Boolean} hmo_id
 */

BenefitplansIoPdfFields.prototype['hmo_id'] = undefined;
/**
 * @member {Boolean} contract_year
 */

BenefitplansIoPdfFields.prototype['contract_year'] = undefined;
/**
 * @member {Boolean} principals_count
 */

BenefitplansIoPdfFields.prototype['principals_count'] = undefined;
/**
 * @member {Boolean} dependents_count
 */

BenefitplansIoPdfFields.prototype['dependents_count'] = undefined;
/**
 * @member {Boolean} male_principals_count
 */

BenefitplansIoPdfFields.prototype['male_principals_count'] = undefined;
/**
 * @member {Boolean} female_principals_count
 */

BenefitplansIoPdfFields.prototype['female_principals_count'] = undefined;
/**
 * @member {Boolean} male_dependents_count
 */

BenefitplansIoPdfFields.prototype['male_dependents_count'] = undefined;
/**
 * @member {Boolean} female_dependents_count
 */

BenefitplansIoPdfFields.prototype['female_dependents_count'] = undefined;
/**
 * @member {Boolean} requested_premium
 */

BenefitplansIoPdfFields.prototype['requested_premium'] = undefined;
/**
 * @member {Boolean} total_company_budget
 */

BenefitplansIoPdfFields.prototype['total_company_budget'] = undefined;
/**
 * @member {Boolean} budget_per_head
 */

BenefitplansIoPdfFields.prototype['budget_per_head'] = undefined;
/**
 * @member {Boolean} competitors_rates
 */

BenefitplansIoPdfFields.prototype['competitors_rates'] = undefined;
/**
 * @member {Boolean} own_computation
 */

BenefitplansIoPdfFields.prototype['own_computation'] = undefined;
/**
 * @member {Boolean} computation_file
 */

BenefitplansIoPdfFields.prototype['computation_file'] = undefined;
var _default = BenefitplansIoPdfFields;
exports.default = _default;