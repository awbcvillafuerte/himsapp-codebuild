"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BenefitPlan = _interopRequireDefault(require("./BenefitPlan"));

var _Client = _interopRequireDefault(require("./Client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateProposalRequest model module.
 * @module model/CreateProposalRequest
 * @version 1.0.0
 */
var CreateProposalRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateProposalRequest</code>.
   * @alias module:model/CreateProposalRequest
   * @param nodes {Array.<module:model/BenefitPlan>} 
   */
  function CreateProposalRequest(nodes) {
    _classCallCheck(this, CreateProposalRequest);

    CreateProposalRequest.initialize(this, nodes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateProposalRequest, null, [{
    key: "initialize",
    value: function initialize(obj, nodes) {
      obj['nodes'] = nodes;
    }
    /**
     * Constructs a <code>CreateProposalRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProposalRequest} obj Optional instance to populate.
     * @return {module:model/CreateProposalRequest} The populated <code>CreateProposalRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateProposalRequest();

        if (data.hasOwnProperty('client')) {
          obj['client'] = _Client.default.constructFromObject(data['client']);
        }

        if (data.hasOwnProperty('nodes')) {
          obj['nodes'] = _ApiClient.default.convertToType(data['nodes'], [_BenefitPlan.default]);
        }
      }

      return obj;
    }
  }]);

  return CreateProposalRequest;
}();
/**
 * @member {module:model/Client} client
 */


CreateProposalRequest.prototype['client'] = undefined;
/**
 * @member {Array.<module:model/BenefitPlan>} nodes
 */

CreateProposalRequest.prototype['nodes'] = undefined;
var _default = CreateProposalRequest;
exports.default = _default;