"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("../model/Filter13"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _Policy = _interopRequireDefault(require("../model/Policy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PolicyController service.
* @module api/PolicyControllerApi
* @version 1.0.0
*/
var PolicyControllerApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new PolicyControllerApi. 
  * @alias module:api/PolicyControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PolicyControllerApi(apiClient) {
    _classCallCheck(this, PolicyControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {Object} opts.where 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(PolicyControllerApi, [{
    key: "policyControllerCountWithHttpInfo",
    value: function policyControllerCountWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/policies/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "policyControllerCount",
    value: function policyControllerCount(opts) {
      return this.policyControllerCountWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Policy} opts.policy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Policy} and HTTP response
     */

  }, {
    key: "policyControllerCreateWithHttpInfo",
    value: function policyControllerCreateWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['policy'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Policy.default;
      return this.apiClient.callApi('/policies', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Policy} opts.policy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Policy}
     */

  }, {
    key: "policyControllerCreate",
    value: function policyControllerCreate(opts) {
      return this.policyControllerCreateWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "policyControllerDeleteByIdWithHttpInfo",
    value: function policyControllerDeleteByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling policyControllerDeleteById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/policies/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "policyControllerDeleteById",
    value: function policyControllerDeleteById(id) {
      return this.policyControllerDeleteByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter13} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Policy>} and HTTP response
     */

  }, {
    key: "policyControllerFindWithHttpInfo",
    value: function policyControllerFindWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Policy.default];
      return this.apiClient.callApi('/policies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter13} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Policy>}
     */

  }, {
    key: "policyControllerFind",
    value: function policyControllerFind(opts) {
      return this.policyControllerFindWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Policy} and HTTP response
     */

  }, {
    key: "policyControllerFindByIdWithHttpInfo",
    value: function policyControllerFindByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling policyControllerFindById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Policy.default;
      return this.apiClient.callApi('/policies/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Policy}
     */

  }, {
    key: "policyControllerFindById",
    value: function policyControllerFindById(id) {
      return this.policyControllerFindByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Policy} opts.policy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "policyControllerReplaceByIdWithHttpInfo",
    value: function policyControllerReplaceByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['policy']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling policyControllerReplaceById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/policies/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Policy} opts.policy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "policyControllerReplaceById",
    value: function policyControllerReplaceById(id, opts) {
      return this.policyControllerReplaceByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/Policy} opts.policy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "policyControllerUpdateAllWithHttpInfo",
    value: function policyControllerUpdateAllWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['policy'];
      var pathParams = {};
      var queryParams = {
        'where': opts['where']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.default;
      return this.apiClient.callApi('/policies', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/Policy} opts.policy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "policyControllerUpdateAll",
    value: function policyControllerUpdateAll(opts) {
      return this.policyControllerUpdateAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Policy} opts.policy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "policyControllerUpdateByIdWithHttpInfo",
    value: function policyControllerUpdateByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['policy']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling policyControllerUpdateById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/policies/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Policy} opts.policy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "policyControllerUpdateById",
    value: function policyControllerUpdateById(id, opts) {
      return this.policyControllerUpdateByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PolicyControllerApi;
}();

exports.default = PolicyControllerApi;