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
 * The Assignment model module.
 * @module model/Assignment
 * @version 1.0.0
 */
var Assignment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Assignment</code>.
   * @alias module:model/Assignment
   * @param startDate {Date} 
   * @param endDate {Date} 
   */
  function Assignment(startDate, endDate) {
    _classCallCheck(this, Assignment);

    Assignment.initialize(this, startDate, endDate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Assignment, null, [{
    key: "initialize",
    value: function initialize(obj, startDate, endDate) {
      obj['start_date'] = startDate;
      obj['end_date'] = endDate;
    }
    /**
     * Constructs a <code>Assignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Assignment} obj Optional instance to populate.
     * @return {module:model/Assignment} The populated <code>Assignment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Assignment();

        if (data.hasOwnProperty('role_id')) {
          obj['role_id'] = _ApiClient.default.convertToType(data['role_id'], 'String');
        }

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient.default.convertToType(data['group_id'], 'String');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient.default.convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient.default.convertToType(data['end_date'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Assignment;
}();
/**
 * @member {String} role_id
 */


Assignment.prototype['role_id'] = undefined;
/**
 * @member {String} group_id
 */

Assignment.prototype['group_id'] = undefined;
/**
 * @member {Date} start_date
 */

Assignment.prototype['start_date'] = undefined;
/**
 * @member {Date} end_date
 */

Assignment.prototype['end_date'] = undefined;
var _default = Assignment;
exports.default = _default;