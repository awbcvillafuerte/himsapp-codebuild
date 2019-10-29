"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BenefitLayer = _interopRequireDefault(require("./BenefitLayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseBenefitPlanPartial model module.
 * @module model/BaseBenefitPlanPartial
 * @version 0.1.0
 */
var BaseBenefitPlanPartial =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BaseBenefitPlanPartial</code>.
   * @alias module:model/BaseBenefitPlanPartial
   */
  function BaseBenefitPlanPartial() {
    _classCallCheck(this, BaseBenefitPlanPartial);

    BaseBenefitPlanPartial.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseBenefitPlanPartial, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BaseBenefitPlanPartial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseBenefitPlanPartial} obj Optional instance to populate.
     * @return {module:model/BaseBenefitPlanPartial} The populated <code>BaseBenefitPlanPartial</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseBenefitPlanPartial();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('is_deleted')) {
          obj['is_deleted'] = _ApiClient.default.convertToType(data['is_deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient.default.convertToType(data['deleted_at'], 'Date');
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
          obj['limits'] = _ApiClient.default.convertToType(data['limits'], [_BenefitLayer.default]);
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

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient.default.convertToType(data['schema'], Object);
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
      }

      return obj;
    }
  }]);

  return BaseBenefitPlanPartial;
}();
/**
 * @member {String} _id
 */


BaseBenefitPlanPartial.prototype['_id'] = undefined;
/**
 * @member {Boolean} is_deleted
 */

BaseBenefitPlanPartial.prototype['is_deleted'] = undefined;
/**
 * @member {Date} deleted_at
 */

BaseBenefitPlanPartial.prototype['deleted_at'] = undefined;
/**
 * A code to distinguish a node within a benefits library. A.K.A. benefit ID.
 * @member {String} base_id
 */

BaseBenefitPlanPartial.prototype['base_id'] = undefined;
/**
 * A unique code for an instance of a benefit node, can be used as CHILD_ID or PARENT_ID
 * @member {String} uid
 */

BaseBenefitPlanPartial.prototype['uid'] = undefined;
/**
 * A code to determine a node within a benefits tree
 * @member {String} tree_id
 */

BaseBenefitPlanPartial.prototype['tree_id'] = undefined;
/**
 * @member {Array.<String>} tree_path
 */

BaseBenefitPlanPartial.prototype['tree_path'] = undefined;
/**
 * @member {Number} level
 */

BaseBenefitPlanPartial.prototype['level'] = undefined;
/**
 * @member {String} name
 */

BaseBenefitPlanPartial.prototype['name'] = undefined;
/**
 * @member {String} code
 */

BaseBenefitPlanPartial.prototype['code'] = undefined;
/**
 * @member {String} type
 */

BaseBenefitPlanPartial.prototype['type'] = undefined;
/**
 * @member {Number} sort_index
 */

BaseBenefitPlanPartial.prototype['sort_index'] = undefined;
/**
 * @member {String} description
 */

BaseBenefitPlanPartial.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/BenefitLayer>} limits
 */

BaseBenefitPlanPartial.prototype['limits'] = undefined;
/**
 * @member {String} status
 */

BaseBenefitPlanPartial.prototype['status'] = undefined;
/**
 * @member {String} remarks
 */

BaseBenefitPlanPartial.prototype['remarks'] = undefined;
/**
 * @member {Array.<Object>} children
 */

BaseBenefitPlanPartial.prototype['children'] = undefined;
/**
 * @member {Array.<Object>} revisions
 */

BaseBenefitPlanPartial.prototype['revisions'] = undefined;
/**
 * @member {Object} schema
 */

BaseBenefitPlanPartial.prototype['schema'] = undefined;
/**
 * @member {String} canAvail
 */

BaseBenefitPlanPartial.prototype['canAvail'] = undefined;
/**
 * @member {String} canCover
 */

BaseBenefitPlanPartial.prototype['canCover'] = undefined;
/**
 * @member {String} renderContract
 */

BaseBenefitPlanPartial.prototype['renderContract'] = undefined;
/**
 * @member {String} renderProposal
 */

BaseBenefitPlanPartial.prototype['renderProposal'] = undefined;
/**
 * @member {String} renderClause
 */

BaseBenefitPlanPartial.prototype['renderClause'] = undefined;
/**
 * @member {String} contract_footer
 */

BaseBenefitPlanPartial.prototype['contract_footer'] = undefined;
var _default = BaseBenefitPlanPartial;
exports.default = _default;