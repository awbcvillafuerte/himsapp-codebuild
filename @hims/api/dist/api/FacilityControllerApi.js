"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Facility = _interopRequireDefault(require("../model/Facility"));

var _FacilityPartial = _interopRequireDefault(require("../model/FacilityPartial"));

var _Filter = _interopRequireDefault(require("../model/Filter10"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* FacilityController service.
* @module api/FacilityControllerApi
* @version 1.0.0
*/
var FacilityControllerApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new FacilityControllerApi. 
  * @alias module:api/FacilityControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FacilityControllerApi(apiClient) {
    _classCallCheck(this, FacilityControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {Object} opts.where 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(FacilityControllerApi, [{
    key: "facilityControllerCountWithHttpInfo",
    value: function facilityControllerCountWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/facilities/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "facilityControllerCount",
    value: function facilityControllerCount(opts) {
      return this.facilityControllerCountWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Facility} opts.facility 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Facility} and HTTP response
     */

  }, {
    key: "facilityControllerCreateWithHttpInfo",
    value: function facilityControllerCreateWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['facility'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Facility.default;
      return this.apiClient.callApi('/facilities', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Facility} opts.facility 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Facility}
     */

  }, {
    key: "facilityControllerCreate",
    value: function facilityControllerCreate(opts) {
      return this.facilityControllerCreateWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "facilityControllerDeleteByIdWithHttpInfo",
    value: function facilityControllerDeleteByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling facilityControllerDeleteById");
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
      return this.apiClient.callApi('/facilities/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "facilityControllerDeleteById",
    value: function facilityControllerDeleteById(id) {
      return this.facilityControllerDeleteByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter10} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Facility>} and HTTP response
     */

  }, {
    key: "facilityControllerFindWithHttpInfo",
    value: function facilityControllerFindWithHttpInfo(opts) {
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
      var returnType = [_Facility.default];
      return this.apiClient.callApi('/facilities', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter10} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Facility>}
     */

  }, {
    key: "facilityControllerFind",
    value: function facilityControllerFind(opts) {
      return this.facilityControllerFindWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Facility} and HTTP response
     */

  }, {
    key: "facilityControllerFindByIdWithHttpInfo",
    value: function facilityControllerFindByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling facilityControllerFindById");
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
      var returnType = _Facility.default;
      return this.apiClient.callApi('/facilities/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Facility}
     */

  }, {
    key: "facilityControllerFindById",
    value: function facilityControllerFindById(id) {
      return this.facilityControllerFindByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Facility} opts.facility 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "facilityControllerReplaceByIdWithHttpInfo",
    value: function facilityControllerReplaceByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['facility']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling facilityControllerReplaceById");
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
      return this.apiClient.callApi('/facilities/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Facility} opts.facility 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "facilityControllerReplaceById",
    value: function facilityControllerReplaceById(id, opts) {
      return this.facilityControllerReplaceByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/FacilityPartial} opts.facilityPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "facilityControllerUpdateAllWithHttpInfo",
    value: function facilityControllerUpdateAllWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['facilityPartial'];
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
      return this.apiClient.callApi('/facilities', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/FacilityPartial} opts.facilityPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "facilityControllerUpdateAll",
    value: function facilityControllerUpdateAll(opts) {
      return this.facilityControllerUpdateAllWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/FacilityPartial} opts.facilityPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "facilityControllerUpdateByIdWithHttpInfo",
    value: function facilityControllerUpdateByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['facilityPartial']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling facilityControllerUpdateById");
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
      return this.apiClient.callApi('/facilities/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/FacilityPartial} opts.facilityPartial 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "facilityControllerUpdateById",
    value: function facilityControllerUpdateById(id, opts) {
      return this.facilityControllerUpdateByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FacilityControllerApi;
}();

exports.default = FacilityControllerApi;