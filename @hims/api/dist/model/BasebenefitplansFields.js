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
 * The BasebenefitplansFields model module.
 * @module model/BasebenefitplansFields
 * @version 1.0.0
 */
var BasebenefitplansFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BasebenefitplansFields</code>.
   * @alias module:model/BasebenefitplansFields
   */
  function BasebenefitplansFields() {
    _classCallCheck(this, BasebenefitplansFields);

    BasebenefitplansFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasebenefitplansFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BasebenefitplansFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasebenefitplansFields} obj Optional instance to populate.
     * @return {module:model/BasebenefitplansFields} The populated <code>BasebenefitplansFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasebenefitplansFields();

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
      }

      return obj;
    }
  }]);

  return BasebenefitplansFields;
}();
/**
 * @member {Boolean} _id
 */


BasebenefitplansFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} delete_dt
 */

BasebenefitplansFields.prototype['delete_dt'] = undefined;
/**
 * @member {Boolean} base_id
 */

BasebenefitplansFields.prototype['base_id'] = undefined;
/**
 * @member {Boolean} uid
 */

BasebenefitplansFields.prototype['uid'] = undefined;
/**
 * @member {Boolean} tree_id
 */

BasebenefitplansFields.prototype['tree_id'] = undefined;
/**
 * @member {Boolean} tree_path
 */

BasebenefitplansFields.prototype['tree_path'] = undefined;
/**
 * @member {Boolean} level
 */

BasebenefitplansFields.prototype['level'] = undefined;
/**
 * @member {Boolean} name
 */

BasebenefitplansFields.prototype['name'] = undefined;
/**
 * @member {Boolean} code
 */

BasebenefitplansFields.prototype['code'] = undefined;
/**
 * @member {Boolean} type
 */

BasebenefitplansFields.prototype['type'] = undefined;
/**
 * @member {Boolean} sort_index
 */

BasebenefitplansFields.prototype['sort_index'] = undefined;
/**
 * @member {Boolean} description
 */

BasebenefitplansFields.prototype['description'] = undefined;
/**
 * @member {Boolean} limits
 */

BasebenefitplansFields.prototype['limits'] = undefined;
/**
 * @member {Boolean} status
 */

BasebenefitplansFields.prototype['status'] = undefined;
/**
 * @member {Boolean} remarks
 */

BasebenefitplansFields.prototype['remarks'] = undefined;
/**
 * @member {Boolean} children
 */

BasebenefitplansFields.prototype['children'] = undefined;
/**
 * @member {Boolean} revisions
 */

BasebenefitplansFields.prototype['revisions'] = undefined;
/**
 * @member {Boolean} handler
 */

BasebenefitplansFields.prototype['handler'] = undefined;
/**
 * @member {Boolean} metadata
 */

BasebenefitplansFields.prototype['metadata'] = undefined;
/**
 * @member {Boolean} metadata_schema
 */

BasebenefitplansFields.prototype['metadata_schema'] = undefined;
/**
 * @member {Boolean} custom_metadata
 */

BasebenefitplansFields.prototype['custom_metadata'] = undefined;
/**
 * @member {Boolean} custom_metadata_schema
 */

BasebenefitplansFields.prototype['custom_metadata_schema'] = undefined;
/**
 * @member {Boolean} canAvail
 */

BasebenefitplansFields.prototype['canAvail'] = undefined;
/**
 * @member {Boolean} canCover
 */

BasebenefitplansFields.prototype['canCover'] = undefined;
/**
 * @member {Boolean} renderContract
 */

BasebenefitplansFields.prototype['renderContract'] = undefined;
/**
 * @member {Boolean} renderProposal
 */

BasebenefitplansFields.prototype['renderProposal'] = undefined;
/**
 * @member {Boolean} renderClause
 */

BasebenefitplansFields.prototype['renderClause'] = undefined;
/**
 * @member {Boolean} contract_footer
 */

BasebenefitplansFields.prototype['contract_footer'] = undefined;
/**
 * @member {Boolean} proposal_footer
 */

BasebenefitplansFields.prototype['proposal_footer'] = undefined;
/**
 * @member {Boolean} layers
 */

BasebenefitplansFields.prototype['layers'] = undefined;
var _default = BasebenefitplansFields;
exports.default = _default;