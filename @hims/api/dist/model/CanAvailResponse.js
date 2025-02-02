"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CanAvailResponseCoverage = _interopRequireDefault(require("./CanAvailResponseCoverage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CanAvailResponse model module.
 * @module model/CanAvailResponse
 * @version 1.0.0
 */
var CanAvailResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CanAvailResponse</code>.
   * @alias module:model/CanAvailResponse
   * @param coverage {Array.<module:model/CanAvailResponseCoverage>} 
   */
  function CanAvailResponse(coverage) {
    _classCallCheck(this, CanAvailResponse);

    CanAvailResponse.initialize(this, coverage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CanAvailResponse, null, [{
    key: "initialize",
    value: function initialize(obj, coverage) {
      obj['coverage'] = coverage;
    }
    /**
     * Constructs a <code>CanAvailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CanAvailResponse} obj Optional instance to populate.
     * @return {module:model/CanAvailResponse} The populated <code>CanAvailResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CanAvailResponse();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('coverage')) {
          obj['coverage'] = _ApiClient.default.convertToType(data['coverage'], [_CanAvailResponseCoverage.default]);
        }
      }

      return obj;
    }
  }]);

  return CanAvailResponse;
}();
/**
 * @member {String} id
 */


CanAvailResponse.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/CanAvailResponseCoverage>} coverage
 */

CanAvailResponse.prototype['coverage'] = undefined;
var _default = CanAvailResponse;
exports.default = _default;