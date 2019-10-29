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
 * The BaseBenefitPlan model module.
 * @module model/BaseBenefitPlan
 * @version 1.0.0
 */
var BaseBenefitPlan =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BaseBenefitPlan</code>.
   * Proposal templates entity
   * @alias module:model/BaseBenefitPlan
   * @param name {String} Name of the benefit node
   * @param code {String} Code of the benefit node
   * @param type {String} Type of the benefit node
   */
  function BaseBenefitPlan(name, code, type) {
    _classCallCheck(this, BaseBenefitPlan);

    BaseBenefitPlan.initialize(this, name, code, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseBenefitPlan, null, [{
    key: "initialize",
    value: function initialize(obj, name, code, type) {
      obj['name'] = name;
      obj['code'] = code;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>BaseBenefitPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseBenefitPlan} obj Optional instance to populate.
     * @return {module:model/BaseBenefitPlan} The populated <code>BaseBenefitPlan</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseBenefitPlan();

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
      }

      return obj;
    }
  }]);

  return BaseBenefitPlan;
}();
/**
 * Primary key of a document in a MongoDB collection.
 * @member {String} _id
 */


BaseBenefitPlan.prototype['_id'] = undefined;
/**
 * Date an item is deleted. Null/undefined value means the item is not yet deleted.
 * @member {Date} delete_dt
 */

BaseBenefitPlan.prototype['delete_dt'] = undefined;
/**
 * A code to distinguish a node within a benefits library. A.K.A. benefit ID.
 * @member {String} base_id
 */

BaseBenefitPlan.prototype['base_id'] = undefined;
/**
 * A unique code for an instance of a benefit node, can be used as CHILD_ID or PARENT_ID
 * @member {String} uid
 */

BaseBenefitPlan.prototype['uid'] = undefined;
/**
 * A code to determine a node within a benefits tree
 * @member {String} tree_id
 */

BaseBenefitPlan.prototype['tree_id'] = undefined;
/**
 * @member {Array.<String>} tree_path
 */

BaseBenefitPlan.prototype['tree_path'] = undefined;
/**
 * 1 + the number of connections between the node and the mother contract
 * @member {Number} level
 */

BaseBenefitPlan.prototype['level'] = undefined;
/**
 * Name of the benefit node
 * @member {String} name
 */

BaseBenefitPlan.prototype['name'] = undefined;
/**
 * Code of the benefit node
 * @member {String} code
 */

BaseBenefitPlan.prototype['code'] = undefined;
/**
 * Type of the benefit node
 * @member {String} type
 */

BaseBenefitPlan.prototype['type'] = undefined;
/**
 * Position of the node when ordering with siblings.
 * @member {Number} sort_index
 */

BaseBenefitPlan.prototype['sort_index'] = undefined;
/**
 * Description of the benefit node
 * @member {String} description
 */

BaseBenefitPlan.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/BenefitLimit>} limits
 */

BaseBenefitPlan.prototype['limits'] = undefined;
/**
 * Status of a benefit node
 * @member {String} status
 */

BaseBenefitPlan.prototype['status'] = undefined;
/**
 * Remarks of a benefit node
 * @member {String} remarks
 */

BaseBenefitPlan.prototype['remarks'] = undefined;
/**
 * @member {Array.<Object>} children
 */

BaseBenefitPlan.prototype['children'] = undefined;
/**
 * @member {Array.<Object>} revisions
 */

BaseBenefitPlan.prototype['revisions'] = undefined;
/**
 * Handler of a benefit node
 * @member {module:model/BaseBenefitPlan.HandlerEnum} handler
 */

BaseBenefitPlan.prototype['handler'] = undefined;
/**
 * Other details of a base benefit node
 * @member {Object} metadata
 */

BaseBenefitPlan.prototype['metadata'] = undefined;
/**
 * JSON schema of a base benefit node's metadata
 * @member {Object} metadata_schema
 */

BaseBenefitPlan.prototype['metadata_schema'] = undefined;
/**
 * Other details of a benefit node
 * @member {Object} custom_metadata
 */

BaseBenefitPlan.prototype['custom_metadata'] = undefined;
/**
 * JSON schema of a benefit node's custom metadata
 * @member {Object} custom_metadata_schema
 */

BaseBenefitPlan.prototype['custom_metadata_schema'] = undefined;
/**
 * Checks the availability of a benefit node for a member.
 * @member {String} canAvail
 */

BaseBenefitPlan.prototype['canAvail'] = undefined;
/**
 * Checks the coverage of a benefit node for a member.
 * @member {String} canCover
 */

BaseBenefitPlan.prototype['canCover'] = undefined;
/**
 * Composes a contract clause / section / block.
 * @member {String} renderContract
 */

BaseBenefitPlan.prototype['renderContract'] = undefined;
/**
 * Composes a proposal clause / section / block.
 * @member {String} renderProposal
 */

BaseBenefitPlan.prototype['renderProposal'] = undefined;
/**
 * Composes a clause.
 * @member {String} renderClause
 */

BaseBenefitPlan.prototype['renderClause'] = undefined;
/**
 * @member {String} contract_footer
 */

BaseBenefitPlan.prototype['contract_footer'] = undefined;
/**
 * @member {String} proposal_footer
 */

BaseBenefitPlan.prototype['proposal_footer'] = undefined;
/**
 * @member {Array.<module:model/BenefitLayer>} layers
 */

BaseBenefitPlan.prototype['layers'] = undefined;
/**
 * Allowed values for the <code>handler</code> property.
 * @enum {String}
 * @readonly
 */

BaseBenefitPlan['HandlerEnum'] = {
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
var _default = BaseBenefitPlan;
exports.default = _default;