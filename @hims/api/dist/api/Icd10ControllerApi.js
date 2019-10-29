"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("../model/Filter11"));

var _Icd = _interopRequireDefault(require("../model/Icd10"));

var _Icd10Partial = _interopRequireDefault(require("../model/Icd10Partial"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Icd10Controller service.
* @module api/Icd10ControllerApi
* @version 1.0.0
*/
var Icd10ControllerApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new Icd10ControllerApi. 
  * @alias module:api/Icd10ControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function Icd10ControllerApi(apiClient) {
    _classCallCheck(this, Icd10ControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {Object} opts.where 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(Icd10ControllerApi, [{
    key: "icd10ControllerCountWithHttpInfo",
    value: function icd10ControllerCountWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/icd10-codes/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "icd10ControllerCount",
    value: function icd10ControllerCount(opts) {
      return this.icd10ControllerCountWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Icd10} opts.icd10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Icd10} and HTTP response
     */

  }, {
    key: "icd10ControllerCreateWithHttpInfo",
    value: function icd10ControllerCreateWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['icd10'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Icd.default;
      return this.apiClient.callApi('/icd10-codes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Icd10} opts.icd10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Icd10}
     */

  }, {
    key: "icd10ControllerCreate",
    value: function icd10ControllerCreate(opts) {
      return this.icd10ControllerCreateWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "icd10ControllerDeleteByIdWithHttpInfo",
    value: function icd10ControllerDeleteByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling icd10ControllerDeleteById");
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
      return this.apiClient.callApi('/icd10-codes/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "icd10ControllerDeleteById",
    value: function icd10ControllerDeleteById(id) {
      return this.icd10ControllerDeleteByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter11} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Icd10>} and HTTP response
     */

  }, {
    key: "icd10ControllerFindWithHttpInfo",
    value: function icd10ControllerFindWithHttpInfo(opts) {
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
      var returnType = [_Icd.default];
      return this.apiClient.callApi('/icd10-codes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter11} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Icd10>}
     */

  }, {
    key: "icd10ControllerFind",
    value: function icd10ControllerFind(opts) {
      return this.icd10ControllerFindWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Icd10} and HTTP response
     */

  }, {
    key: "icd10ControllerFindByIdWithHttpInfo",
    value: function icd10ControllerFindByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling icd10ControllerFindById");
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
      var returnType = _Icd.default;
      return this.apiClient.callApi('/icd10-codes/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Icd10}
     */

  }, {
    key: "icd10ControllerFindById",
    value: function icd10ControllerFindById(id) {
      return this.icd10ControllerFindByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Icd10} opts.icd10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "icd10ControllerReplaceByIdWithHttpInfo",
    value: function icd10ControllerReplaceByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['icd10']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling icd10ControllerReplaceById");
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
      return this.apiClient.callApi('/icd10-codes/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Icd10} opts.icd10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "icd10ControllerReplaceById",
    value: function icd10ControllerReplaceById(id, opts) {
      return this.icd10ControllerReplaceByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/Icd10Partial} opts.icd10Partial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "icd10ControllerUpdateAllWithHttpInfo",
    value: function icd10ControllerUpdateAllWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['icd10Partial'];
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
      return this.apiClient.callApi('/icd10-codes', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/Icd10Partial} opts.icd10Partial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "icd10ControllerUpdateAll",
    value: function icd10ControllerUpdateAll(opts) {
      return this.icd10ControllerUpdateAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Icd10Partial} opts.icd10Partial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "icd10ControllerUpdateByIdWithHttpInfo",
    value: function icd10ControllerUpdateByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['icd10Partial']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling icd10ControllerUpdateById");
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
      return this.apiClient.callApi('/icd10-codes/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Icd10Partial} opts.icd10Partial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "icd10ControllerUpdateById",
    value: function icd10ControllerUpdateById(id, opts) {
      return this.icd10ControllerUpdateByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return Icd10ControllerApi;
}();

exports.default = Icd10ControllerApi;