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
 * The BaseBenefitRevision model module.
 * @module model/BaseBenefitRevision
 * @version 1.0.0
 */
var BaseBenefitRevision =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BaseBenefitRevision</code>.
   * Revisions for base benefits
   * @alias module:model/BaseBenefitRevision
   * @param documentId {Object} 
   * @param op {module:model/BaseBenefitRevision.OpEnum} 
   * @param path {String} 
   */
  function BaseBenefitRevision(documentId, op, path) {
    _classCallCheck(this, BaseBenefitRevision);

    BaseBenefitRevision.initialize(this, documentId, op, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseBenefitRevision, null, [{
    key: "initialize",
    value: function initialize(obj, documentId, op, path) {
      obj['document_id'] = documentId;
      obj['op'] = op;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>BaseBenefitRevision</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseBenefitRevision} obj Optional instance to populate.
     * @return {module:model/BaseBenefitRevision} The populated <code>BaseBenefitRevision</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseBenefitRevision();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Date');
        }

        if (data.hasOwnProperty('document_id')) {
          obj['document_id'] = _ApiClient.default.convertToType(data['document_id'], Object);
        }

        if (data.hasOwnProperty('op')) {
          obj['op'] = _ApiClient.default.convertToType(data['op'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient.default.convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient.default.convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient.default.convertToType(data['value'], Object);
        }
      }

      return obj;
    }
  }]);

  return BaseBenefitRevision;
}();
/**
 * Primary key of a document in a MongoDB collection.
 * @member {String} _id
 */


BaseBenefitRevision.prototype['_id'] = undefined;
/**
 * Date an item is deleted. Null/undefined value means the item is not yet deleted.
 * @member {Date} delete_dt
 */

BaseBenefitRevision.prototype['delete_dt'] = undefined;
/**
 * @member {Object} document_id
 */

BaseBenefitRevision.prototype['document_id'] = undefined;
/**
 * @member {module:model/BaseBenefitRevision.OpEnum} op
 */

BaseBenefitRevision.prototype['op'] = undefined;
/**
 * @member {String} from
 */

BaseBenefitRevision.prototype['from'] = undefined;
/**
 * @member {String} path
 */

BaseBenefitRevision.prototype['path'] = undefined;
/**
 * @member {Object} value
 */

BaseBenefitRevision.prototype['value'] = undefined;
/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */

BaseBenefitRevision['OpEnum'] = {
  /**
   * value: "add"
   * @const
   */
  "add": "add",

  /**
   * value: "remove"
   * @const
   */
  "remove": "remove",

  /**
   * value: "replace"
   * @const
   */
  "replace": "replace",

  /**
   * value: "move"
   * @const
   */
  "move": "move",

  /**
   * value: "copy"
   * @const
   */
  "copy": "copy",

  /**
   * value: "test"
   * @const
   */
  "test": "test"
};
var _default = BaseBenefitRevision;
exports.default = _default;