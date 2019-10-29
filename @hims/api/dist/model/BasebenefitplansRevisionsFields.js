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
 * The BasebenefitplansRevisionsFields model module.
 * @module model/BasebenefitplansRevisionsFields
 * @version 1.0.0
 */
var BasebenefitplansRevisionsFields =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BasebenefitplansRevisionsFields</code>.
   * @alias module:model/BasebenefitplansRevisionsFields
   */
  function BasebenefitplansRevisionsFields() {
    _classCallCheck(this, BasebenefitplansRevisionsFields);

    BasebenefitplansRevisionsFields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasebenefitplansRevisionsFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BasebenefitplansRevisionsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasebenefitplansRevisionsFields} obj Optional instance to populate.
     * @return {module:model/BasebenefitplansRevisionsFields} The populated <code>BasebenefitplansRevisionsFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasebenefitplansRevisionsFields();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'Boolean');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Boolean');
        }

        if (data.hasOwnProperty('document_id')) {
          obj['document_id'] = _ApiClient.default.convertToType(data['document_id'], 'Boolean');
        }

        if (data.hasOwnProperty('op')) {
          obj['op'] = _ApiClient.default.convertToType(data['op'], 'Boolean');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient.default.convertToType(data['from'], 'Boolean');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient.default.convertToType(data['path'], 'Boolean');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient.default.convertToType(data['value'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return BasebenefitplansRevisionsFields;
}();
/**
 * @member {Boolean} _id
 */


BasebenefitplansRevisionsFields.prototype['_id'] = undefined;
/**
 * @member {Boolean} delete_dt
 */

BasebenefitplansRevisionsFields.prototype['delete_dt'] = undefined;
/**
 * @member {Boolean} document_id
 */

BasebenefitplansRevisionsFields.prototype['document_id'] = undefined;
/**
 * @member {Boolean} op
 */

BasebenefitplansRevisionsFields.prototype['op'] = undefined;
/**
 * @member {Boolean} from
 */

BasebenefitplansRevisionsFields.prototype['from'] = undefined;
/**
 * @member {Boolean} path
 */

BasebenefitplansRevisionsFields.prototype['path'] = undefined;
/**
 * @member {Boolean} value
 */

BasebenefitplansRevisionsFields.prototype['value'] = undefined;
var _default = BasebenefitplansRevisionsFields;
exports.default = _default;