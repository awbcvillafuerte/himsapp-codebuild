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
 * The BaseBenefitComment model module.
 * @module model/BaseBenefitComment
 * @version 1.0.0
 */
var BaseBenefitComment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BaseBenefitComment</code>.
   *      Base benefit comment   
   * @alias module:model/BaseBenefitComment
   * @param documentId {Object} 
   * @param authorId {Object} 
   * @param description {String} 
   * @param status {String} 
   */
  function BaseBenefitComment(documentId, authorId, description, status) {
    _classCallCheck(this, BaseBenefitComment);

    BaseBenefitComment.initialize(this, documentId, authorId, description, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseBenefitComment, null, [{
    key: "initialize",
    value: function initialize(obj, documentId, authorId, description, status) {
      obj['document_id'] = documentId;
      obj['author_id'] = authorId;
      obj['description'] = description;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>BaseBenefitComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseBenefitComment} obj Optional instance to populate.
     * @return {module:model/BaseBenefitComment} The populated <code>BaseBenefitComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseBenefitComment();

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

  return BaseBenefitComment;
}();
/**
 * Primary key of a document in a MongoDB collection.
 * @member {String} _id
 */


BaseBenefitComment.prototype['_id'] = undefined;
/**
 * Date an item is deleted. Null/undefined value means the item is not yet deleted.
 * @member {Date} delete_dt
 */

BaseBenefitComment.prototype['delete_dt'] = undefined;
/**
 * @member {Object} document_id
 */

BaseBenefitComment.prototype['document_id'] = undefined;
/**
 * @member {Object} author_id
 */

BaseBenefitComment.prototype['author_id'] = undefined;
/**
 * @member {String} description
 */

BaseBenefitComment.prototype['description'] = undefined;
/**
 * @member {String} status
 */

BaseBenefitComment.prototype['status'] = undefined;
var _default = BaseBenefitComment;
exports.default = _default;