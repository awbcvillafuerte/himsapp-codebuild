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
 * The BasebenefitplansCommentsFields model module.
 * @module model/BasebenefitplansCommentsFields
 * @version 1.0.0
 */
var BasebenefitplansCommentsFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BasebenefitplansCommentsFields</code>.
   * @alias module:model/BasebenefitplansCommentsFields
   */
  function BasebenefitplansCommentsFields() {
    _classCallCheck(this, BasebenefitplansCommentsFields);

    BasebenefitplansCommentsFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasebenefitplansCommentsFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BasebenefitplansCommentsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasebenefitplansCommentsFields} obj Optional instance to populate.
     * @return {module:model/BasebenefitplansCommentsFields} The populated <code>BasebenefitplansCommentsFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasebenefitplansCommentsFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Boolean');
        }

        if (data.hasOwnProperty('document_id')) {
          obj['document_id'] = _ApiClient.default.convertToType(data['document_id'], 'Boolean');
        }

        if (data.hasOwnProperty('author_id')) {
          obj['author_id'] = _ApiClient.default.convertToType(data['author_id'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient.default.convertToType(data['description'], 'Boolean');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient.default.convertToType(data['status'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return BasebenefitplansCommentsFields;
}();
/**
 * @member {Boolean} _id
 */


BasebenefitplansCommentsFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} delete_dt
 */

BasebenefitplansCommentsFields.prototype['delete_dt'] = undefined;
/**
 * @member {Boolean} document_id
 */

BasebenefitplansCommentsFields.prototype['document_id'] = undefined;
/**
 * @member {Boolean} author_id
 */

BasebenefitplansCommentsFields.prototype['author_id'] = undefined;
/**
 * @member {Boolean} description
 */

BasebenefitplansCommentsFields.prototype['description'] = undefined;
/**
 * @member {Boolean} status
 */

BasebenefitplansCommentsFields.prototype['status'] = undefined;
var _default = BasebenefitplansCommentsFields;
exports.default = _default;