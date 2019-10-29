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
 * The BenefitComment model module.
 * @module model/BenefitComment
 * @version 1.0.0
 */
var BenefitComment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BenefitComment</code>.
   * Comments for proposals
   * @alias module:model/BenefitComment
   * @param documentId {Object} 
   * @param authorId {Object} 
   * @param description {String} 
   * @param status {String} 
   */
  function BenefitComment(documentId, authorId, description, status) {
    _classCallCheck(this, BenefitComment);

    BenefitComment.initialize(this, documentId, authorId, description, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BenefitComment, null, [{
    key: "initialize",
    value: function initialize(obj, documentId, authorId, description, status) {
      obj['document_id'] = documentId;
      obj['author_id'] = authorId;
      obj['description'] = description;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>BenefitComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenefitComment} obj Optional instance to populate.
     * @return {module:model/BenefitComment} The populated <code>BenefitComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BenefitComment();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Date');
        }

        if (data.hasOwnProperty('document_id')) {
          obj['document_id'] = _ApiClient.default.convertToType(data['document_id'], Object);
        }

        if (data.hasOwnProperty('author_id')) {
          obj['author_id'] = _ApiClient.default.convertToType(data['author_id'], Object);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient.default.convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient.default.convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BenefitComment;
}();
/**
 * Primary key of a document in a MongoDB collection.
 * @member {String} _id
 */


BenefitComment.prototype['_id'] = undefined;
/**
 * Date an item is deleted. Null/undefined value means the item is not yet deleted.
 * @member {Date} delete_dt
 */

BenefitComment.prototype['delete_dt'] = undefined;
/**
 * @member {Object} document_id
 */

BenefitComment.prototype['document_id'] = undefined;
/**
 * @member {Object} author_id
 */

BenefitComment.prototype['author_id'] = undefined;
/**
 * @member {String} description
 */

BenefitComment.prototype['description'] = undefined;
/**
 * @member {String} status
 */

BenefitComment.prototype['status'] = undefined;
var _default = BenefitComment;
exports.default = _default;