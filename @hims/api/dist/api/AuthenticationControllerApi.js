"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AuthenticationController service.
* @module api/AuthenticationControllerApi
* @version 1.0.0
*/
var AuthenticationControllerApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new AuthenticationControllerApi. 
  * @alias module:api/AuthenticationControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthenticationControllerApi(apiClient) {
    _classCallCheck(this, AuthenticationControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {Object} opts.where 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(AuthenticationControllerApi, [{
    key: "authenticationControllerAuthWithHttpInfo",
    value: function authenticationControllerAuthWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'where': opts['where']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.default;
      return this.apiClient.callApi('/oidc/auth', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "authenticationControllerAuth",
    value: function authenticationControllerAuth(opts) {
      return this.authenticationControllerAuthWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} grant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "authenticationControllerCheckLoginWithHttpInfo",
    value: function authenticationControllerCheckLoginWithHttpInfo(grant) {
      var postBody = null; // verify the required parameter 'grant' is set

      if (grant === undefined || grant === null) {
        throw new Error("Missing the required parameter 'grant' when calling authenticationControllerCheckLogin");
      }

      var pathParams = {
        'grant': grant
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/interaction/{grant}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} grant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "authenticationControllerCheckLogin",
    value: function authenticationControllerCheckLogin(grant) {
      return this.authenticationControllerCheckLoginWithHttpInfo(grant).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} grant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "authenticationControllerSessionLoginWithHttpInfo",
    value: function authenticationControllerSessionLoginWithHttpInfo(grant) {
      var postBody = null; // verify the required parameter 'grant' is set

      if (grant === undefined || grant === null) {
        throw new Error("Missing the required parameter 'grant' when calling authenticationControllerSessionLogin");
      }

      var pathParams = {
        'grant': grant
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/interaction/{grant}/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} grant 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "authenticationControllerSessionLogin",
    value: function authenticationControllerSessionLogin(grant) {
      return this.authenticationControllerSessionLoginWithHttpInfo(grant).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "authenticationControllerTokenWithHttpInfo",
    value: function authenticationControllerTokenWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'where': opts['where']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.default;
      return this.apiClient.callApi('/oidc/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "authenticationControllerToken",
    value: function authenticationControllerToken(opts) {
      return this.authenticationControllerTokenWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AuthenticationControllerApi;
}();

exports.default = AuthenticationControllerApi;