"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasebenefitplansRevisionsFields = _interopRequireDefault(require("./BasebenefitplansRevisionsFields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Filter5 model module.
 * @module model/Filter5
 * @version 1.0.0
 */
var Filter5 =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Filter5</code>.
   * @alias module:model/Filter5
   */
  function Filter5() {
    _classCallCheck(this, Filter5);

    Filter5.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Filter5, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Filter5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter5} obj Optional instance to populate.
     * @return {module:model/Filter5} The populated <code>Filter5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Filter5();

        if (data.hasOwnProperty('where')) {
          obj['where'] = _ApiClient.default.convertToType(data['where'], Object);
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _BasebenefitplansRevisionsFields.default.constructFromObject(data['fields']);
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient.default.convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient.default.convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('skip')) {
          obj['skip'] = _ApiClient.default.convertToType(data['skip'], 'Number');
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _ApiClient.default.convertToType(data['order'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Filter5;
}();
/**
 * @member {Object} where
 */


Filter5.prototype['where'] = undefined;
/**
 * @member {module:model/BasebenefitplansRevisionsFields} fields
 */

Filter5.prototype['fields'] = undefined;
/**
 * @member {Number} offset
 */

Filter5.prototype['offset'] = undefined;
/**
 * @member {Number} limit
 */

Filter5.prototype['limit'] = undefined;
/**
 * @member {Number} skip
 */

Filter5.prototype['skip'] = undefined;
/**
 * @member {Array.<String>} order
 */

Filter5.prototype['order'] = undefined;
var _default = Filter5;
exports.default = _default;