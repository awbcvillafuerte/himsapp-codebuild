"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseBenefitComment = _interopRequireDefault(require("../model/BaseBenefitComment"));

var _BaseBenefitPlan = _interopRequireDefault(require("../model/BaseBenefitPlan"));

var _BaseBenefitRevision = _interopRequireDefault(require("../model/BaseBenefitRevision"));

var _Filter = _interopRequireDefault(require("../model/Filter"));

var _Filter2 = _interopRequireDefault(require("../model/Filter1"));

var _Filter3 = _interopRequireDefault(require("../model/Filter2"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UnderwritingBenefits service.
* @module api/UnderwritingBenefitsApi
* @version 1.0.0
*/
var UnderwritingBenefitsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new UnderwritingBenefitsApi. 
  * @alias module:api/UnderwritingBenefitsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UnderwritingBenefitsApi(apiClient) {
    _classCallCheck(this, UnderwritingBenefitsApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {Object} opts.where 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(UnderwritingBenefitsApi, [{
    key: "countBaseBenefitCommentsWithHttpInfo",
    value: function countBaseBenefitCommentsWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/base-benefit-plans/comments/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "countBaseBenefitComments",
    value: function countBaseBenefitComments(opts) {
      return this.countBaseBenefitCommentsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "countBaseBenefitRevisionsWithHttpInfo",
    value: function countBaseBenefitRevisionsWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/base-benefit-plans/revisions/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "countBaseBenefitRevisions",
    value: function countBaseBenefitRevisions(opts) {
      return this.countBaseBenefitRevisionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Counts the matching base benefits for a given filter
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "countBaseBenefitsWithHttpInfo",
    value: function countBaseBenefitsWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/base-benefit-plans/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Counts the matching base benefits for a given filter
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "countBaseBenefits",
    value: function countBaseBenefits(opts) {
      return this.countBaseBenefitsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Creates a base benefit
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitPlan} opts.baseBenefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BaseBenefitPlan} and HTTP response
     */

  }, {
    key: "createBaseBenefitWithHttpInfo",
    value: function createBaseBenefitWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitPlan']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createBaseBenefit");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BaseBenefitPlan.default;
      return this.apiClient.callApi('/base-benefit-plans/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a base benefit
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitPlan} opts.baseBenefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BaseBenefitPlan}
     */

  }, {
    key: "createBaseBenefit",
    value: function createBaseBenefit(id, opts) {
      return this.createBaseBenefitWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitComment} opts.baseBenefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BaseBenefitComment} and HTTP response
     */

  }, {
    key: "createBaseBenefitCommentWithHttpInfo",
    value: function createBaseBenefitCommentWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitComment'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BaseBenefitComment.default;
      return this.apiClient.callApi('/base-benefit-plans/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitComment} opts.baseBenefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BaseBenefitComment}
     */

  }, {
    key: "createBaseBenefitComment",
    value: function createBaseBenefitComment(opts) {
      return this.createBaseBenefitCommentWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitRevision} opts.baseBenefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BaseBenefitRevision} and HTTP response
     */

  }, {
    key: "createBaseBenefitRevisionWithHttpInfo",
    value: function createBaseBenefitRevisionWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitRevision'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BaseBenefitRevision.default;
      return this.apiClient.callApi('/base-benefit-plans/revisions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitRevision} opts.baseBenefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BaseBenefitRevision}
     */

  }, {
    key: "createBaseBenefitRevision",
    value: function createBaseBenefitRevision(opts) {
      return this.createBaseBenefitRevisionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes a base benefit
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteBaseBenefitByIdWithHttpInfo",
    value: function deleteBaseBenefitByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBaseBenefitById");
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
      return this.apiClient.callApi('/base-benefit-plans/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes a base benefit
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBaseBenefitById",
    value: function deleteBaseBenefitById(id) {
      return this.deleteBaseBenefitByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteBaseBenefitCommentByIdWithHttpInfo",
    value: function deleteBaseBenefitCommentByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBaseBenefitCommentById");
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
      return this.apiClient.callApi('/base-benefit-plans/comments/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBaseBenefitCommentById",
    value: function deleteBaseBenefitCommentById(id) {
      return this.deleteBaseBenefitCommentByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteBaseBenefitRevisionByIdWithHttpInfo",
    value: function deleteBaseBenefitRevisionByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBaseBenefitRevisionById");
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
      return this.apiClient.callApi('/base-benefit-plans/revisions/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBaseBenefitRevisionById",
    value: function deleteBaseBenefitRevisionById(id) {
      return this.deleteBaseBenefitRevisionByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Searches for a list of base benefits
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter2} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BaseBenefitPlan>} and HTTP response
     */

  }, {
    key: "findWithHttpInfo",
    value: function findWithHttpInfo(opts) {
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
      var returnType = [_BaseBenefitPlan.default];
      return this.apiClient.callApi('/base-benefit-plans', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Searches for a list of base benefits
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter2} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BaseBenefitPlan>}
     */

  }, {
    key: "find",
    value: function find(opts) {
      return this.findWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves a base benefit
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BaseBenefitPlan} and HTTP response
     */

  }, {
    key: "findBaseBenefitByIdWithHttpInfo",
    value: function findBaseBenefitByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findBaseBenefitById");
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
      var returnType = _BaseBenefitPlan.default;
      return this.apiClient.callApi('/base-benefit-plans/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves a base benefit
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BaseBenefitPlan}
     */

  }, {
    key: "findBaseBenefitById",
    value: function findBaseBenefitById(id) {
      return this.findBaseBenefitByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BaseBenefitComment} and HTTP response
     */

  }, {
    key: "findBaseBenefitCommentsByIdWithHttpInfo",
    value: function findBaseBenefitCommentsByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findBaseBenefitCommentsById");
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
      var returnType = _BaseBenefitComment.default;
      return this.apiClient.callApi('/base-benefit-plans/comments/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BaseBenefitComment}
     */

  }, {
    key: "findBaseBenefitCommentsById",
    value: function findBaseBenefitCommentsById(id) {
      return this.findBaseBenefitCommentsByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BaseBenefitRevision} and HTTP response
     */

  }, {
    key: "findBaseBenefitRevisionByIdWithHttpInfo",
    value: function findBaseBenefitRevisionByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findBaseBenefitRevisionById");
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
      var returnType = _BaseBenefitRevision.default;
      return this.apiClient.callApi('/base-benefit-plans/revisions/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BaseBenefitRevision}
     */

  }, {
    key: "findBaseBenefitRevisionById",
    value: function findBaseBenefitRevisionById(id) {
      return this.findBaseBenefitRevisionByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter1} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BaseBenefitRevision>} and HTTP response
     */

  }, {
    key: "findBaseBenefitRevisionsWithHttpInfo",
    value: function findBaseBenefitRevisionsWithHttpInfo(opts) {
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
      var returnType = [_BaseBenefitRevision.default];
      return this.apiClient.callApi('/base-benefit-plans/revisions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter1} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BaseBenefitRevision>}
     */

  }, {
    key: "findBaseBenefitRevisions",
    value: function findBaseBenefitRevisions(opts) {
      return this.findBaseBenefitRevisionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BaseBenefitComment>} and HTTP response
     */

  }, {
    key: "findCommentsWithHttpInfo",
    value: function findCommentsWithHttpInfo(opts) {
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
      var returnType = [_BaseBenefitComment.default];
      return this.apiClient.callApi('/base-benefit-plans/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BaseBenefitComment>}
     */

  }, {
    key: "findComments",
    value: function findComments(opts) {
      return this.findCommentsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Replaces a base benefit
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitPlan} opts.baseBenefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "replaceBaseBenefitByIdWithHttpInfo",
    value: function replaceBaseBenefitByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitPlan']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling replaceBaseBenefitById");
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
      return this.apiClient.callApi('/base-benefit-plans/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Replaces a base benefit
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitPlan} opts.baseBenefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "replaceBaseBenefitById",
    value: function replaceBaseBenefitById(id, opts) {
      return this.replaceBaseBenefitByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitComment} opts.baseBenefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "replaceBaseBenefitCommentByIdWithHttpInfo",
    value: function replaceBaseBenefitCommentByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitComment']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling replaceBaseBenefitCommentById");
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
      return this.apiClient.callApi('/base-benefit-plans/comments/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitComment} opts.baseBenefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "replaceBaseBenefitCommentById",
    value: function replaceBaseBenefitCommentById(id, opts) {
      return this.replaceBaseBenefitCommentByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitRevision} opts.baseBenefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "replaceBaseBenefitRevisionByIdWithHttpInfo",
    value: function replaceBaseBenefitRevisionByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitRevision']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling replaceBaseBenefitRevisionById");
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
      return this.apiClient.callApi('/base-benefit-plans/revisions/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitRevision} opts.baseBenefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "replaceBaseBenefitRevisionById",
    value: function replaceBaseBenefitRevisionById(id, opts) {
      return this.replaceBaseBenefitRevisionByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BaseBenefitComment} opts.baseBenefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "updateAllBaseBenefitCommentsWithHttpInfo",
    value: function updateAllBaseBenefitCommentsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitComment'];
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
      return this.apiClient.callApi('/base-benefit-plans/comments', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BaseBenefitComment} opts.baseBenefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "updateAllBaseBenefitComments",
    value: function updateAllBaseBenefitComments(opts) {
      return this.updateAllBaseBenefitCommentsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BaseBenefitRevision} opts.baseBenefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "updateAllBaseBenefitRevisionsWithHttpInfo",
    value: function updateAllBaseBenefitRevisionsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitRevision'];
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
      return this.apiClient.callApi('/base-benefit-plans/revisions', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BaseBenefitRevision} opts.baseBenefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "updateAllBaseBenefitRevisions",
    value: function updateAllBaseBenefitRevisions(opts) {
      return this.updateAllBaseBenefitRevisionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates a set of base benefits
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BaseBenefitPlan} opts.baseBenefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "updateAllBaseBenefitsWithHttpInfo",
    value: function updateAllBaseBenefitsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitPlan'];
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
      return this.apiClient.callApi('/base-benefit-plans', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates a set of base benefits
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BaseBenefitPlan} opts.baseBenefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "updateAllBaseBenefits",
    value: function updateAllBaseBenefits(opts) {
      return this.updateAllBaseBenefitsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates a base benefit
     * @param {String} id 
     * @param {Object} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateBaseBenefitByIdWithHttpInfo",
    value: function updateBaseBenefitByIdWithHttpInfo(id, body) {
      var postBody = body; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBaseBenefitById");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBaseBenefitById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json', 'application/json-patch+json', 'multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/base-benefit-plans/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates a base benefit
     * @param {String} id 
     * @param {Object} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateBaseBenefitById",
    value: function updateBaseBenefitById(id, body) {
      return this.updateBaseBenefitByIdWithHttpInfo(id, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitComment} opts.baseBenefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateBaseBenefitCommentByIdWithHttpInfo",
    value: function updateBaseBenefitCommentByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitComment']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBaseBenefitCommentById");
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
      return this.apiClient.callApi('/base-benefit-plans/comments/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitComment} opts.baseBenefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateBaseBenefitCommentById",
    value: function updateBaseBenefitCommentById(id, opts) {
      return this.updateBaseBenefitCommentByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitRevision} opts.baseBenefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateBaseBenefitRevisionByIdWithHttpInfo",
    value: function updateBaseBenefitRevisionByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['baseBenefitRevision']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBaseBenefitRevisionById");
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
      return this.apiClient.callApi('/base-benefit-plans/revisions/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BaseBenefitRevision} opts.baseBenefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateBaseBenefitRevisionById",
    value: function updateBaseBenefitRevisionById(id, opts) {
      return this.updateBaseBenefitRevisionByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UnderwritingBenefitsApi;
}();

exports.default = UnderwritingBenefitsApi;