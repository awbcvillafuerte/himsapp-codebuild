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
 * The CanAvailRequest model module.
 * @module model/CanAvailRequest
 * @version 1.0.0
 */
var CanAvailRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CanAvailRequest</code>.
   * @alias module:model/CanAvailRequest
   */
  function CanAvailRequest() {
    _classCallCheck(this, CanAvailRequest);

    CanAvailRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CanAvailRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CanAvailRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CanAvailRequest} obj Optional instance to populate.
     * @return {module:model/CanAvailRequest} The populated <code>CanAvailRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CanAvailRequest();

        if (data.hasOwnProperty('facility')) {
          obj['facility'] = _ApiClient.default.convertToType(data['facility'], 'String');
        }

        if (data.hasOwnProperty('procedure')) {
          obj['procedure'] = _ApiClient.default.convertToType(data['procedure'], 'String');
        }

        if (data.hasOwnProperty('diagnosis')) {
          obj['diagnosis'] = _ApiClient.default.convertToType(data['diagnosis'], 'String');
        }

        if (data.hasOwnProperty('physician')) {
          obj['physician'] = _ApiClient.default.convertToType(data['physician'], 'String');
        }

        if (data.hasOwnProperty('room')) {
          obj['room'] = _ApiClient.default.convertToType(data['room'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CanAvailRequest;
}();
/**
 * @member {String} facility
 */


CanAvailRequest.prototype['facility'] = undefined;
/**
 * @member {String} procedure
 */

CanAvailRequest.prototype['procedure'] = undefined;
/**
 * @member {String} diagnosis
 */

CanAvailRequest.prototype['diagnosis'] = undefined;
/**
 * @member {String} physician
 */

CanAvailRequest.prototype['physician'] = undefined;
/**
 * @member {String} room
 */

CanAvailRequest.prototype['room'] = undefined;
var _default = CanAvailRequest;
exports.default = _default;