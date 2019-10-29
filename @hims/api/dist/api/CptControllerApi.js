"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Cpt = _interopRequireDefault(require("../model/Cpt"));

var _CptPartial = _interopRequireDefault(require("../model/CptPartial"));

var _Filter = _interopRequireDefault(require("../model/Filter8"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CptController service.
* @module api/CptControllerApi
* @version 1.0.0
*/
var CptControllerApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new CptControllerApi. 
  * @alias module:api/CptControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CptControllerApi(apiClient) {
    _classCallCheck(this, CptControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {Object} opts.where 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(CptControllerApi, [{
    key: "cptControllerCountWithHttpInfo",
    value: function cptControllerCountWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/cpts/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "cptControllerCount",
    value: function cptControllerCount(opts) {
      return this.cptControllerCountWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Cpt} opts.cpt 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cpt} and HTTP response
     */

  }, {
    key: "cptControllerCreateWithHttpInfo",
    value: function cptControllerCreateWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['cpt'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Cpt.default;
      return this.apiClient.callApi('/cpts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Cpt} opts.cpt 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cpt}
     */

  }, {
    key: "cptControllerCreate",
    value: function cptControllerCreate(opts) {
      return this.cptControllerCreateWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "cptControllerDeleteByIdWithHttpInfo",
    value: function cptControllerDeleteByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cptControllerDeleteById");
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
      return this.apiClient.callApi('/cpts/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "cptControllerDeleteById",
    value: function cptControllerDeleteById(id) {
      return this.cptControllerDeleteByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter8} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Cpt>} and HTTP response
     */

  }, {
    key: "cptControllerFindWithHttpInfo",
    value: function cptControllerFindWithHttpInfo(opts) {
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
      var returnType = [_Cpt.default];
      return this.apiClient.callApi('/cpts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter8} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Cpt>}
     */

  }, {
    key: "cptControllerFind",
    value: function cptControllerFind(opts) {
      return this.cptControllerFindWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cpt} and HTTP response
     */

  }, {
    key: "cptControllerFindByIdWithHttpInfo",
    value: function cptControllerFindByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cptControllerFindById");
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
      var returnType = _Cpt.default;
      return this.apiClient.callApi('/cpts/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cpt}
     */

  }, {
    key: "cptControllerFindById",
    value: function cptControllerFindById(id) {
      return this.cptControllerFindByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Cpt} opts.cpt 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "cptControllerReplaceByIdWithHttpInfo",
    value: function cptControllerReplaceByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['cpt']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cptControllerReplaceById");
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
      return this.apiClient.callApi('/cpts/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Cpt} opts.cpt 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "cptControllerReplaceById",
    value: function cptControllerReplaceById(id, opts) {
      return this.cptControllerReplaceByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/CptPartial} opts.cptPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "cptControllerUpdateAllWithHttpInfo",
    value: function cptControllerUpdateAllWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['cptPartial'];
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
      return this.apiClient.callApi('/cpts', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/CptPartial} opts.cptPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "cptControllerUpdateAll",
    value: function cptControllerUpdateAll(opts) {
      return this.cptControllerUpdateAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CptPartial} opts.cptPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "cptControllerUpdateByIdWithHttpInfo",
    value: function cptControllerUpdateByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['cptPartial']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cptControllerUpdateById");
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
      return this.apiClient.callApi('/cpts/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CptPartial} opts.cptPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "cptControllerUpdateById",
    value: function cptControllerUpdateById(id, opts) {
      return this.cptControllerUpdateByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CptControllerApi;
}();

exports.default = CptControllerApi;