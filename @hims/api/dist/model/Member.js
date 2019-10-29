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
 * The Member model module.
 * @module model/Member
 * @version 1.0.0
 */
var Member =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Member</code>.
   * Member entity
   * @alias module:model/Member
   * @param lastName {String} Last name
   * @param middleName {String} Middle name
   * @param firstName {String} First name
   * @param dateOfBirth {String} Date of birth
   * @param gender {module:model/Member.GenderEnum} Gender. 'M' for Male / 'F' for Female
   * @param civilStatus {module:model/Member.CivilStatusEnum} Civil status       'S' for Single       'M' for Married       'SP' for Single Parent       'A' for Annulled       'W' for Widowed       'D' for Divorced       'SE' for Separated     
   * @param emailAddress {String} Email address
   * @param memberType {module:model/Member.MemberTypeEnum} Member type       'P' for Principal       'D' for Dependent       'E' for Extended Dependent     
   * @param planType {String} Plan type
   * @param contracts {Array.<Object>} 
   * @param carriedOverLimits {Object} Carried over limits
   */
  function Member(lastName, middleName, firstName, dateOfBirth, gender, civilStatus, emailAddress, memberType, planType, contracts, carriedOverLimits) {
    _classCallCheck(this, Member);

    Member.initialize(this, lastName, middleName, firstName, dateOfBirth, gender, civilStatus, emailAddress, memberType, planType, contracts, carriedOverLimits);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Member, null, [{
    key: "initialize",
    value: function initialize(obj, lastName, middleName, firstName, dateOfBirth, gender, civilStatus, emailAddress, memberType, planType, contracts, carriedOverLimits) {
      obj['last_name'] = lastName;
      obj['middle_name'] = middleName;
      obj['first_name'] = firstName;
      obj['date_of_birth'] = dateOfBirth;
      obj['gender'] = gender;
      obj['civil_status'] = civilStatus;
      obj['email_address'] = emailAddress;
      obj['member_type'] = memberType;
      obj['plan_type'] = planType;
      obj['contracts'] = contracts;
      obj['carried_over_limits'] = carriedOverLimits;
    }
    /**
     * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Member} obj Optional instance to populate.
     * @return {module:model/Member} The populated <code>Member</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Member();

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient.default.convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('delete_dt')) {
          obj['delete_dt'] = _ApiClient.default.convertToType(data['delete_dt'], 'Date');
        }

        if (data.hasOwnProperty('member_card_no')) {
          obj['member_card_no'] = _ApiClient.default.convertToType(data['member_card_no'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient.default.convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient.default.convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient.default.convertToType(data['middle_name'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient.default.convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('suffix')) {
          obj['suffix'] = _ApiClient.default.convertToType(data['suffix'], 'String');
        }

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient.default.convertToType(data['date_of_birth'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient.default.convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('civil_status')) {
          obj['civil_status'] = _ApiClient.default.convertToType(data['civil_status'], 'String');
        }

        if (data.hasOwnProperty('email_address')) {
          obj['email_address'] = _ApiClient.default.convertToType(data['email_address'], 'String');
        }

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient.default.convertToType(data['client_id'], 'String');
        }

        if (data.hasOwnProperty('member_type')) {
          obj['member_type'] = _ApiClient.default.convertToType(data['member_type'], 'String');
        }

        if (data.hasOwnProperty('plan_type')) {
          obj['plan_type'] = _ApiClient.default.convertToType(data['plan_type'], 'String');
        }

        if (data.hasOwnProperty('contracts')) {
          obj['contracts'] = _ApiClient.default.convertToType(data['contracts'], [Object]);
        }

        if (data.hasOwnProperty('carried_over_limits')) {
          obj['carried_over_limits'] = _ApiClient.default.convertToType(data['carried_over_limits'], Object);
        }
      }

      return obj;
    }
  }]);

  return Member;
}();
/**
 * Primary key of a document in a MongoDB collection.
 * @member {String} _id
 */


Member.prototype['_id'] = undefined;
/**
 * Date an item is deleted. Null/undefined value means the item is not yet deleted.
 * @member {Date} delete_dt
 */

Member.prototype['delete_dt'] = undefined;
/**
 * Member card number
 * @member {String} member_card_no
 */

Member.prototype['member_card_no'] = undefined;
/**
 * Title / Prefix       Possible, but not limited to, values:         'Mr'         'Ms'         'Mrs'         'Miss'         'Sir'         'Dr'     
 * @member {String} title
 */

Member.prototype['title'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

Member.prototype['last_name'] = undefined;
/**
 * Middle name
 * @member {String} middle_name
 */

Member.prototype['middle_name'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

Member.prototype['first_name'] = undefined;
/**
 * Suffix
 * @member {String} suffix
 */

Member.prototype['suffix'] = undefined;
/**
 * Date of birth
 * @member {String} date_of_birth
 */

Member.prototype['date_of_birth'] = undefined;
/**
 * Gender. 'M' for Male / 'F' for Female
 * @member {module:model/Member.GenderEnum} gender
 */

Member.prototype['gender'] = undefined;
/**
 * Civil status       'S' for Single       'M' for Married       'SP' for Single Parent       'A' for Annulled       'W' for Widowed       'D' for Divorced       'SE' for Separated     
 * @member {module:model/Member.CivilStatusEnum} civil_status
 */

Member.prototype['civil_status'] = undefined;
/**
 * Email address
 * @member {String} email_address
 */

Member.prototype['email_address'] = undefined;
/**
 * @member {String} client_id
 */

Member.prototype['client_id'] = undefined;
/**
 * Member type       'P' for Principal       'D' for Dependent       'E' for Extended Dependent     
 * @member {module:model/Member.MemberTypeEnum} member_type
 */

Member.prototype['member_type'] = undefined;
/**
 * Plan type
 * @member {String} plan_type
 */

Member.prototype['plan_type'] = undefined;
/**
 * @member {Array.<Object>} contracts
 */

Member.prototype['contracts'] = undefined;
/**
 * Carried over limits
 * @member {Object} carried_over_limits
 */

Member.prototype['carried_over_limits'] = undefined;
/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */

Member['GenderEnum'] = {
  /**
   * value: "M"
   * @const
   */
  "M": "M",

  /**
   * value: "F"
   * @const
   */
  "F": "F"
};
/**
 * Allowed values for the <code>civil_status</code> property.
 * @enum {String}
 * @readonly
 */

Member['CivilStatusEnum'] = {
  /**
   * value: "S"
   * @const
   */
  "S": "S",

  /**
   * value: "M"
   * @const
   */
  "M": "M",

  /**
   * value: "SP"
   * @const
   */
  "SP": "SP",

  /**
   * value: "A"
   * @const
   */
  "A": "A",

  /**
   * value: "W"
   * @const
   */
  "W": "W",

  /**
   * value: "D"
   * @const
   */
  "D": "D",

  /**
   * value: "SE"
   * @const
   */
  "SE": "SE"
};
/**
 * Allowed values for the <code>member_type</code> property.
 * @enum {String}
 * @readonly
 */

Member['MemberTypeEnum'] = {
  /**
   * value: "P"
   * @const
   */
  "P": "P",

  /**
   * value: "D"
   * @const
   */
  "D": "D",

  /**
   * value: "E"
   * @const
   */
  "E": "E"
};
var _default = Member;
exports.default = _default;