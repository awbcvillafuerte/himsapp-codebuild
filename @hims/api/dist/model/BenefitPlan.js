"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BenefitLayer = _interopRequireDefault(require("./BenefitLayer"));

var _BenefitLimit = _interopRequireDefault(require("./BenefitLimit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BenefitPlan model module.
 * @module model/BenefitPlan
 * @version 1.0.0
 */
var BenefitPlan =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BenefitPlan</code>.
   * Proposals entity
   * @alias module:model/BenefitPlan
   * @param name {String} Name of the benefit node
   * @param code {String} Code of the benefit node
   * @param type {String} Type of the benefit node
   */
  function BenefitPlan(name, code, type) {
    _classCallCheck(this, BenefitPlan);

    BenefitPlan.initialize(this, name, code, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BenefitPlan, null, [{
    key: "initialize",
    value: function initialize(obj, name, code, type) {
      obj['name'] = name;
      obj['code'] = code;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>BenefitPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenefitPlan} obj Optional instance to populate.
     * @return {module:model/BenefitPlan} The populated <code>BenefitPlan</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BenefitPlan();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Date');
        }

        if (data.hasOwnProperty('base_id')) {
          obj['base_id'] = _ApiClient.default.convertToType(data['base_id'], 'String');
        }

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient.default.convertToType(data['uid'], 'String');
        }

        if (data.hasOwnProperty('tree_id')) {
          obj['tree_id'] = _ApiClient.default.convertToType(data['tree_id'], 'String');
        }

        if (data.hasOwnProperty('tree_path')) {
          obj['tree_path'] = _ApiClient.default.convertToType(data['tree_path'], ['String']);
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient.default.convertToType(data['level'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient.default.convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient.default.convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('sort_index')) {
          obj['sort_index'] = _ApiClient.default.convertToType(data['sort_index'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient.default.convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _ApiClient.default.convertToType(data['limits'], [_BenefitLimit.default]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient.default.convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('remarks')) {
          obj['remarks'] = _ApiClient.default.convertToType(data['remarks'], 'String');
        }

        if (data.hasOwnProperty('children')) {
          obj['children'] = _ApiClient.default.convertToType(data['children'], [Object]);
        }

        if (data.hasOwnProperty('revisions')) {
          obj['revisions'] = _ApiClient.default.convertToType(data['revisions'], [Object]);
        }

        if (data.hasOwnProperty('handler')) {
          obj['handler'] = _ApiClient.default.convertToType(data['handler'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient.default.convertToType(data['metadata'], Object);
        }

        if (data.hasOwnProperty('metadata_schema')) {
          obj['metadata_schema'] = _ApiClient.default.convertToType(data['metadata_schema'], Object);
        }

        if (data.hasOwnProperty('custom_metadata')) {
          obj['custom_metadata'] = _ApiClient.default.convertToType(data['custom_metadata'], Object);
        }

        if (data.hasOwnProperty('custom_metadata_schema')) {
          obj['custom_metadata_schema'] = _ApiClient.default.convertToType(data['custom_metadata_schema'], Object);
        }

        if (data.hasOwnProperty('canAvail')) {
          obj['canAvail'] = _ApiClient.default.convertToType(data['canAvail'], 'String');
        }

        if (data.hasOwnProperty('canCover')) {
          obj['canCover'] = _ApiClient.default.convertToType(data['canCover'], 'String');
        }

        if (data.hasOwnProperty('renderContract')) {
          obj['renderContract'] = _ApiClient.default.convertToType(data['renderContract'], 'String');
        }

        if (data.hasOwnProperty('renderProposal')) {
          obj['renderProposal'] = _ApiClient.default.convertToType(data['renderProposal'], 'String');
        }

        if (data.hasOwnProperty('renderClause')) {
          obj['renderClause'] = _ApiClient.default.convertToType(data['renderClause'], 'String');
        }

        if (data.hasOwnProperty('contract_footer')) {
          obj['contract_footer'] = _ApiClient.default.convertToType(data['contract_footer'], 'String');
        }

        if (data.hasOwnProperty('proposal_footer')) {
          obj['proposal_footer'] = _ApiClient.default.convertToType(data['proposal_footer'], 'String');
        }

        if (data.hasOwnProperty('layers')) {
          obj['layers'] = _ApiClient.default.convertToType(data['layers'], [_BenefitLayer.default]);
        }

        if (data.hasOwnProperty('contract_no')) {
          obj['contract_no'] = _ApiClient.default.convertToType(data['contract_no'], 'String');
        }

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient.default.convertToType(data['client_id'], 'String');
        }

        if (data.hasOwnProperty('hmo_id')) {
          obj['hmo_id'] = _ApiClient.default.convertToType(data['hmo_id'], 'String');
        }

        if (data.hasOwnProperty('contract_year')) {
          obj['contract_year'] = _ApiClient.default.convertToType(data['contract_year'], 'Date');
        }

        if (data.hasOwnProperty('principals_count')) {
          obj['principals_count'] = _ApiClient.default.convertToType(data['principals_count'], 'Number');
        }

        if (data.hasOwnProperty('dependents_count')) {
          obj['dependents_count'] = _ApiClient.default.convertToType(data['dependents_count'], 'Number');
        }

        if (data.hasOwnProperty('male_principals_count')) {
          obj['male_principals_count'] = _ApiClient.default.convertToType(data['male_principals_count'], 'Number');
        }

        if (data.hasOwnProperty('female_principals_count')) {
          obj['female_principals_count'] = _ApiClient.default.convertToType(data['female_principals_count'], 'Number');
        }

        if (data.hasOwnProperty('male_dependents_count')) {
          obj['male_dependents_count'] = _ApiClient.default.convertToType(data['male_dependents_count'], 'Number');
        }

        if (data.hasOwnProperty('female_dependents_count')) {
          obj['female_dependents_count'] = _ApiClient.default.convertToType(data['female_dependents_count'], 'Number');
        }

        if (data.hasOwnProperty('requested_premium')) {
          obj['requested_premium'] = _ApiClient.default.convertToType(data['requested_premium'], 'Number');
        }

        if (data.hasOwnProperty('total_company_budget')) {
          obj['total_company_budget'] = _ApiClient.default.convertToType(data['total_company_budget'], 'Number');
        }

        if (data.hasOwnProperty('budget_per_head')) {
          obj['budget_per_head'] = _ApiClient.default.convertToType(data['budget_per_head'], 'Number');
        }

        if (data.hasOwnProperty('competitors_rates')) {
          obj['competitors_rates'] = _ApiClient.default.convertToType(data['competitors_rates'], 'Number');
        }

        if (data.hasOwnProperty('own_computation')) {
          obj['own_computation'] = _ApiClient.default.convertToType(data['own_computation'], 'Number');
        }

        if (data.hasOwnProperty('computation_file')) {
          obj['computation_file'] = _ApiClient.default.convertToType(data['computation_file'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BenefitPlan;
}();
/**
 * Primary key of a document in a MongoDB collection.
 * @member {String} _id
 */


BenefitPlan.prototype['_id'] = undefined;
/**
 * Date an item is deleted. Null/undefined value means the item is not yet deleted.
 * @member {Date} delete_dt
 */

BenefitPlan.prototype['delete_dt'] = undefined;
/**
 * A code to distinguish a node within a benefits library. A.K.A. benefit ID.
 * @member {String} base_id
 */

BenefitPlan.prototype['base_id'] = undefined;
/**
 * A unique code for an instance of a benefit node, can be used as CHILD_ID or PARENT_ID
 * @member {String} uid
 */

BenefitPlan.prototype['uid'] = undefined;
/**
 * A code to determine a node within a benefits tree
 * @member {String} tree_id
 */

BenefitPlan.prototype['tree_id'] = undefined;
/**
 * @member {Array.<String>} tree_path
 */

BenefitPlan.prototype['tree_path'] = undefined;
/**
 * 1 + the number of connections between the node and the mother contract
 * @member {Number} level
 */

BenefitPlan.prototype['level'] = undefined;
/**
 * Name of the benefit node
 * @member {String} name
 */

BenefitPlan.prototype['name'] = undefined;
/**
 * Code of the benefit node
 * @member {String} code
 */

BenefitPlan.prototype['code'] = undefined;
/**
 * Type of the benefit node
 * @member {String} type
 */

BenefitPlan.prototype['type'] = undefined;
/**
 * Position of the node when ordering with siblings.
 * @member {Number} sort_index
 */

BenefitPlan.prototype['sort_index'] = undefined;
/**
 * Description of the benefit node
 * @member {String} description
 */

BenefitPlan.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/BenefitLimit>} limits
 */

BenefitPlan.prototype['limits'] = undefined;
/**
 * Status of a benefit node
 * @member {String} status
 */

BenefitPlan.prototype['status'] = undefined;
/**
 * Remarks of a benefit node
 * @member {String} remarks
 */

BenefitPlan.prototype['remarks'] = undefined;
/**
 * @member {Array.<Object>} children
 */

BenefitPlan.prototype['children'] = undefined;
/**
 * @member {Array.<Object>} revisions
 */

BenefitPlan.prototype['revisions'] = undefined;
/**
 * Handler of a benefit node
 * @member {module:model/BenefitPlan.HandlerEnum} handler
 */

BenefitPlan.prototype['handler'] = undefined;
/**
 * Other details of a base benefit node
 * @member {Object} metadata
 */

BenefitPlan.prototype['metadata'] = undefined;
/**
 * JSON schema of a base benefit node's metadata
 * @member {Object} metadata_schema
 */

BenefitPlan.prototype['metadata_schema'] = undefined;
/**
 * Other details of a benefit node
 * @member {Object} custom_metadata
 */

BenefitPlan.prototype['custom_metadata'] = undefined;
/**
 * JSON schema of a benefit node's custom metadata
 * @member {Object} custom_metadata_schema
 */

BenefitPlan.prototype['custom_metadata_schema'] = undefined;
/**
 * Checks the availability of a benefit node for a member.
 * @member {String} canAvail
 */

BenefitPlan.prototype['canAvail'] = undefined;
/**
 * Checks the coverage of a benefit node for a member.
 * @member {String} canCover
 */

BenefitPlan.prototype['canCover'] = undefined;
/**
 * Composes a contract clause / section / block.
 * @member {String} renderContract
 */

BenefitPlan.prototype['renderContract'] = undefined;
/**
 * Composes a proposal clause / section / block.
 * @member {String} renderProposal
 */

BenefitPlan.prototype['renderProposal'] = undefined;
/**
 * Composes a clause.
 * @member {String} renderClause
 */

BenefitPlan.prototype['renderClause'] = undefined;
/**
 * @member {String} contract_footer
 */

BenefitPlan.prototype['contract_footer'] = undefined;
/**
 * @member {String} proposal_footer
 */

BenefitPlan.prototype['proposal_footer'] = undefined;
/**
 * @member {Array.<module:model/BenefitLayer>} layers
 */

BenefitPlan.prototype['layers'] = undefined;
/**
 * Contract number
 * @member {String} contract_no
 */

BenefitPlan.prototype['contract_no'] = undefined;
/**
 * Reference to Client
 * @member {String} client_id
 */

BenefitPlan.prototype['client_id'] = undefined;
/**
 * HMO ID
 * @member {String} hmo_id
 */

BenefitPlan.prototype['hmo_id'] = undefined;
/**
 * Contract year
 * @member {Date} contract_year
 */

BenefitPlan.prototype['contract_year'] = undefined;
/**
 * Principals count
 * @member {Number} principals_count
 */

BenefitPlan.prototype['principals_count'] = undefined;
/**
 * Dependents count
 * @member {Number} dependents_count
 */

BenefitPlan.prototype['dependents_count'] = undefined;
/**
 * Male principals count
 * @member {Number} male_principals_count
 */

BenefitPlan.prototype['male_principals_count'] = undefined;
/**
 * Female principals count
 * @member {Number} female_principals_count
 */

BenefitPlan.prototype['female_principals_count'] = undefined;
/**
 * Male dependents count
 * @member {Number} male_dependents_count
 */

BenefitPlan.prototype['male_dependents_count'] = undefined;
/**
 * Female dependents count
 * @member {Number} female_dependents_count
 */

BenefitPlan.prototype['female_dependents_count'] = undefined;
/**
 * Requested premium
 * @member {Number} requested_premium
 */

BenefitPlan.prototype['requested_premium'] = undefined;
/**
 * Total company budget
 * @member {Number} total_company_budget
 */

BenefitPlan.prototype['total_company_budget'] = undefined;
/**
 * Budget per head
 * @member {Number} budget_per_head
 */

BenefitPlan.prototype['budget_per_head'] = undefined;
/**
 * Competitor's rates
 * @member {Number} competitors_rates
 */

BenefitPlan.prototype['competitors_rates'] = undefined;
/**
 * Own computation
 * @member {Number} own_computation
 */

BenefitPlan.prototype['own_computation'] = undefined;
/**
 * Computation file
 * @member {String} computation_file
 */

BenefitPlan.prototype['computation_file'] = undefined;
/**
 * Allowed values for the <code>handler</code> property.
 * @enum {String}
 * @readonly
 */

BenefitPlan['HandlerEnum'] = {
  /**
   * value: "HMO"
   * @const
   */
  "HMO": "HMO",

  /**
   * value: "TPA"
   * @const
   */
  "TPA": "TPA",

  /**
   * value: "Hybrid"
   * @const
   */
  "Hybrid": "Hybrid"
};
var _default = BenefitPlan;
exports.default = _default;