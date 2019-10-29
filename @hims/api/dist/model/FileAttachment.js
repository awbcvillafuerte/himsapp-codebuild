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
 * The FileAttachment model module.
 * @module model/FileAttachment
 * @version 1.0.0
 */
var FileAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FileAttachment</code>.
   * File attachments
   * @alias module:model/FileAttachment
   * @param type {String} Attachment type
   * @param url {String} Attachment URL
   */
  function FileAttachment(type, url) {
    _classCallCheck(this, FileAttachment);

    FileAttachment.initialize(this, type, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileAttachment, null, [{
    key: "initialize",
    value: function initialize(obj, type, url) {
      obj['type'] = type;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>FileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileAttachment} obj Optional instance to populate.
     * @return {module:model/FileAttachment} The populated <code>FileAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileAttachment();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient.default.convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient.default.convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient.default.convertToType(data['tags'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FileAttachment;
}();
/**
 * Attachment type
 * @member {String} type
 */


FileAttachment.prototype['type'] = undefined;
/**
 * Attachment URL
 * @member {String} url
 */

FileAttachment.prototype['url'] = undefined;
/**
 * Attachment tags
 * @member {String} tags
 */

FileAttachment.prototype['tags'] = undefined;
var _default = FileAttachment;
exports.default = _default;