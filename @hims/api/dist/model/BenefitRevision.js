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
 * The BenefitRevision model module.
 * @module model/BenefitRevision
 * @version 1.0.0
 */
var BenefitRevision =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BenefitRevision</code>.
   * Benefit revision entity
   * @alias module:model/BenefitRevision
   * @param documentId {Object} 
   * @param op {module:model/BenefitRevision.OpEnum} 
   * @param path {String} 
   */
  function BenefitRevision(documentId, op, path) {
    _classCallCheck(this, BenefitRevision);

    BenefitRevision.initialize(this, documentId, op, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BenefitRevision, null, [{
    key: "initialize",
    value: function initialize(obj, documentId, op, path) {
      obj['document_id'] = documentId;
      obj['op'] = op;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>BenefitRevision</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenefitRevision} obj Optional instance to populate.
     * @return {module:model/BenefitRevision} The populated <code>BenefitRevision</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BenefitRevision();

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

  return BenefitRevision;
}();
/**
 * Primary key of a document in a MongoDB collection.
 * @member {String} _id
 */


BenefitRevision.prototype['_id'] = undefined;
/**
 * Date an item is deleted. Null/undefined value means the item is not yet deleted.
 * @member {Date} delete_dt
 */

BenefitRevision.prototype['delete_dt'] = undefined;
/**
 * @member {Object} document_id
 */

BenefitRevision.prototype['document_id'] = undefined;
/**
 * @member {module:model/BenefitRevision.OpEnum} op
 */

BenefitRevision.prototype['op'] = undefined;
/**
 * @member {String} from
 */

BenefitRevision.prototype['from'] = undefined;
/**
 * @member {String} path
 */

BenefitRevision.prototype['path'] = undefined;
/**
 * @member {Object} value
 */

BenefitRevision.prototype['value'] = undefined;
/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */

BenefitRevision['OpEnum'] = {
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
var _default = BenefitRevision;
exports.default = _default;