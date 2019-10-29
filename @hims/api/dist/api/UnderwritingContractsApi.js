"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BenefitComment = _interopRequireDefault(require("../model/BenefitComment"));

var _BenefitPlan = _interopRequireDefault(require("../model/BenefitPlan"));

var _BenefitRevision = _interopRequireDefault(require("../model/BenefitRevision"));

var _CanAvailRequest = _interopRequireDefault(require("../model/CanAvailRequest"));

var _CanAvailResponse = _interopRequireDefault(require("../model/CanAvailResponse"));

var _CreateProposalRequest = _interopRequireDefault(require("../model/CreateProposalRequest"));

var _Filter = _interopRequireDefault(require("../model/Filter3"));

var _Filter2 = _interopRequireDefault(require("../model/Filter4"));

var _Filter3 = _interopRequireDefault(require("../model/Filter5"));

var _Filter4 = _interopRequireDefault(require("../model/Filter6"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UnderwritingContracts service.
* @module api/UnderwritingContractsApi
* @version 1.0.0
*/
var UnderwritingContractsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new UnderwritingContractsApi. 
  * @alias module:api/UnderwritingContractsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UnderwritingContractsApi(apiClient) {
    _classCallCheck(this, UnderwritingContractsApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {String} opts.memberCardNo 
   * @param {module:model/CanAvailRequest} opts.params 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CanAvailResponse} and HTTP response
   */


  _createClass(UnderwritingContractsApi, [{
    key: "canAvailWithHttpInfo",
    value: function canAvailWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'member_card_no': opts['memberCardNo'],
        'params': opts['params']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CanAvailResponse.default;
      return this.apiClient.callApi('/benefit-plans/can-avail', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.memberCardNo 
     * @param {module:model/CanAvailRequest} opts.params 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CanAvailResponse}
     */

  }, {
    key: "canAvail",
    value: function canAvail(opts) {
      return this.canAvailWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "countBenefitCommentsWithHttpInfo",
    value: function countBenefitCommentsWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/benefit-plans/comments/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "countBenefitComments",
    value: function countBenefitComments(opts) {
      return this.countBenefitCommentsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "countBenefitRevisionsWithHttpInfo",
    value: function countBenefitRevisionsWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/benefit-plans/revisions/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "countBenefitRevisions",
    value: function countBenefitRevisions(opts) {
      return this.countBenefitRevisionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Counts the number of matching benefit nodes in a given filter.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "countBenefitsWithHttpInfo",
    value: function countBenefitsWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/benefit-plans/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Counts the number of matching benefit nodes in a given filter.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "countBenefits",
    value: function countBenefits(opts) {
      return this.countBenefitsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Adds a new benefit node to a proposal/contract.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BenefitPlan} and HTTP response
     */

  }, {
    key: "createBenefitWithHttpInfo",
    value: function createBenefitWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BenefitPlan.default;
      return this.apiClient.callApi('/benefit-plans', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Adds a new benefit node to a proposal/contract.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BenefitPlan}
     */

  }, {
    key: "createBenefit",
    value: function createBenefit(opts) {
      return this.createBenefitWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitComment} opts.benefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BenefitComment} and HTTP response
     */

  }, {
    key: "createBenefitCommentWithHttpInfo",
    value: function createBenefitCommentWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['benefitComment'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BenefitComment.default;
      return this.apiClient.callApi('/benefit-plans/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitComment} opts.benefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BenefitComment}
     */

  }, {
    key: "createBenefitComment",
    value: function createBenefitComment(opts) {
      return this.createBenefitCommentWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitRevision} opts.benefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BenefitRevision} and HTTP response
     */

  }, {
    key: "createBenefitRevisionWithHttpInfo",
    value: function createBenefitRevisionWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['benefitRevision'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BenefitRevision.default;
      return this.apiClient.callApi('/benefit-plans/revisions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitRevision} opts.benefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BenefitRevision}
     */

  }, {
    key: "createBenefitRevision",
    value: function createBenefitRevision(opts) {
      return this.createBenefitRevisionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Creates a new proposal/contract.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProposalRequest} opts.createProposalRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateProposalRequest} and HTTP response
     */

  }, {
    key: "createProposalWithHttpInfo",
    value: function createProposalWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['createProposalRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateProposalRequest.default;
      return this.apiClient.callApi('/benefit-plans/proposals', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a new proposal/contract.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProposalRequest} opts.createProposalRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateProposalRequest}
     */

  }, {
    key: "createProposal",
    value: function createProposal(opts) {
      return this.createProposalWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a benefit node given an ID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteBenefitByIdWithHttpInfo",
    value: function deleteBenefitByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBenefitById");
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
      return this.apiClient.callApi('/benefit-plans/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a benefit node given an ID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBenefitById",
    value: function deleteBenefitById(id) {
      return this.deleteBenefitByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteBenefitCommentByIdWithHttpInfo",
    value: function deleteBenefitCommentByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBenefitCommentById");
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
      return this.apiClient.callApi('/benefit-plans/comments/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBenefitCommentById",
    value: function deleteBenefitCommentById(id) {
      return this.deleteBenefitCommentByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteBenefitRevisionByIdWithHttpInfo",
    value: function deleteBenefitRevisionByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBenefitRevisionById");
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
      return this.apiClient.callApi('/benefit-plans/revisions/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBenefitRevisionById",
    value: function deleteBenefitRevisionById(id) {
      return this.deleteBenefitRevisionByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Find a benefit node given an ID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BenefitPlan} and HTTP response
     */

  }, {
    key: "findBenefitByIdWithHttpInfo",
    value: function findBenefitByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findBenefitById");
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
      var returnType = _BenefitPlan.default;
      return this.apiClient.callApi('/benefit-plans/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Find a benefit node given an ID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BenefitPlan}
     */

  }, {
    key: "findBenefitById",
    value: function findBenefitById(id) {
      return this.findBenefitByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BenefitComment} and HTTP response
     */

  }, {
    key: "findBenefitCommentByIdWithHttpInfo",
    value: function findBenefitCommentByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findBenefitCommentById");
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
      var returnType = _BenefitComment.default;
      return this.apiClient.callApi('/benefit-plans/comments/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BenefitComment}
     */

  }, {
    key: "findBenefitCommentById",
    value: function findBenefitCommentById(id) {
      return this.findBenefitCommentByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter3} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BenefitComment>} and HTTP response
     */

  }, {
    key: "findBenefitCommentsWithHttpInfo",
    value: function findBenefitCommentsWithHttpInfo(opts) {
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
      var returnType = [_BenefitComment.default];
      return this.apiClient.callApi('/benefit-plans/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter3} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BenefitComment>}
     */

  }, {
    key: "findBenefitComments",
    value: function findBenefitComments(opts) {
      return this.findBenefitCommentsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BenefitRevision} and HTTP response
     */

  }, {
    key: "findBenefitRevisionByIdWithHttpInfo",
    value: function findBenefitRevisionByIdWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findBenefitRevisionById");
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
      var returnType = _BenefitRevision.default;
      return this.apiClient.callApi('/benefit-plans/revisions/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BenefitRevision}
     */

  }, {
    key: "findBenefitRevisionById",
    value: function findBenefitRevisionById(id) {
      return this.findBenefitRevisionByIdWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter5} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BenefitRevision>} and HTTP response
     */

  }, {
    key: "findBenefitRevisionsWithHttpInfo",
    value: function findBenefitRevisionsWithHttpInfo(opts) {
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
      var returnType = [_BenefitRevision.default];
      return this.apiClient.callApi('/benefit-plans/revisions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter5} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BenefitRevision>}
     */

  }, {
    key: "findBenefitRevisions",
    value: function findBenefitRevisions(opts) {
      return this.findBenefitRevisionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Search benefit nodes.
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter6} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BenefitPlan>} and HTTP response
     */

  }, {
    key: "findBenefitsWithHttpInfo",
    value: function findBenefitsWithHttpInfo(opts) {
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
      var returnType = [_BenefitPlan.default];
      return this.apiClient.callApi('/benefit-plans', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search benefit nodes.
     * @param {Object} opts Optional parameters
     * @param {module:model/Filter6} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BenefitPlan>}
     */

  }, {
    key: "findBenefits",
    value: function findBenefits(opts) {
      return this.findBenefitsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.memberCardNo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BenefitPlan} and HTTP response
     */

  }, {
    key: "getMemberBenefitsWithHttpInfo",
    value: function getMemberBenefitsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'member_card_no': opts['memberCardNo']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BenefitPlan.default;
      return this.apiClient.callApi('/benefit-plans/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.memberCardNo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BenefitPlan}
     */

  }, {
    key: "getMemberBenefits",
    value: function getMemberBenefits(opts) {
      return this.getMemberBenefitsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.id 
     * @param {String} opts.type 
     * @param {module:model/Filter4} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "getPdfWithHttpInfo",
    value: function getPdfWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'id': opts['id'],
        'type': opts['type'],
        'filter': opts['filter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/pdf'];
      var returnType = File;
      return this.apiClient.callApi('/benefit-plans/io/pdf', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.id 
     * @param {String} opts.type 
     * @param {module:model/Filter4} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "getPdf",
    value: function getPdf(opts) {
      return this.getPdfWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRootId 
     * @param {String} opts.xFooterAttribute 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "getPdfFooterWithHttpInfo",
    value: function getPdfFooterWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Root-Id': opts['xRootId'],
        'X-Footer-Attribute': opts['xFooterAttribute']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/benefit-plans/io/pdf/footer', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRootId 
     * @param {String} opts.xFooterAttribute 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "getPdfFooter",
    value: function getPdfFooter(opts) {
      return this.getPdfFooterWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Replace a benefit node given an ID.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitPlan} opts.benefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "replaceBenefitByIdWithHttpInfo",
    value: function replaceBenefitByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['benefitPlan']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling replaceBenefitById");
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
      return this.apiClient.callApi('/benefit-plans/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Replace a benefit node given an ID.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitPlan} opts.benefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "replaceBenefitById",
    value: function replaceBenefitById(id, opts) {
      return this.replaceBenefitByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitComment} opts.benefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "replaceBenefitCommentByIdWithHttpInfo",
    value: function replaceBenefitCommentByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['benefitComment']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling replaceBenefitCommentById");
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
      return this.apiClient.callApi('/benefit-plans/comments/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitComment} opts.benefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "replaceBenefitCommentById",
    value: function replaceBenefitCommentById(id, opts) {
      return this.replaceBenefitCommentByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitRevision} opts.benefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "replaceBenefitRevisionByIdWithHttpInfo",
    value: function replaceBenefitRevisionByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['benefitRevision']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling replaceBenefitRevisionById");
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
      return this.apiClient.callApi('/benefit-plans/revisions/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitRevision} opts.benefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "replaceBenefitRevisionById",
    value: function replaceBenefitRevisionById(id, opts) {
      return this.replaceBenefitRevisionByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BenefitComment} opts.benefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "updateAllBenefitCommentsWithHttpInfo",
    value: function updateAllBenefitCommentsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['benefitComment'];
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
      return this.apiClient.callApi('/benefit-plans/comments', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BenefitComment} opts.benefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "updateAllBenefitComments",
    value: function updateAllBenefitComments(opts) {
      return this.updateAllBenefitCommentsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BenefitRevision} opts.benefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "updateAllBenefitRevisionsWithHttpInfo",
    value: function updateAllBenefitRevisionsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['benefitRevision'];
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
      return this.apiClient.callApi('/benefit-plans/revisions', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BenefitRevision} opts.benefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "updateAllBenefitRevisions",
    value: function updateAllBenefitRevisions(opts) {
      return this.updateAllBenefitRevisionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update benefit nodes.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BenefitPlan} opts.benefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "updateAllBenefitsWithHttpInfo",
    value: function updateAllBenefitsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['benefitPlan'];
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
      return this.apiClient.callApi('/benefit-plans', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update benefit nodes.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.where 
     * @param {module:model/BenefitPlan} opts.benefitPlan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "updateAllBenefits",
    value: function updateAllBenefits(opts) {
      return this.updateAllBenefitsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a benefit node given an ID.
     * @param {String} id 
     * @param {Object} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateBenefitByIdWithHttpInfo",
    value: function updateBenefitByIdWithHttpInfo(id, body) {
      var postBody = body; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBenefitById");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBenefitById");
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
      return this.apiClient.callApi('/benefit-plans/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a benefit node given an ID.
     * @param {String} id 
     * @param {Object} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateBenefitById",
    value: function updateBenefitById(id, body) {
      return this.updateBenefitByIdWithHttpInfo(id, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitComment} opts.benefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateBenefitCommentByIdWithHttpInfo",
    value: function updateBenefitCommentByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['benefitComment']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBenefitCommentById");
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
      return this.apiClient.callApi('/benefit-plans/comments/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitComment} opts.benefitComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateBenefitCommentById",
    value: function updateBenefitCommentById(id, opts) {
      return this.updateBenefitCommentByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitRevision} opts.benefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateBenefitRevisionByIdWithHttpInfo",
    value: function updateBenefitRevisionByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['benefitRevision']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBenefitRevisionById");
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
      return this.apiClient.callApi('/benefit-plans/revisions/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/BenefitRevision} opts.benefitRevision 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateBenefitRevisionById",
    value: function updateBenefitRevisionById(id, opts) {
      return this.updateBenefitRevisionByIdWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UnderwritingContractsApi;
}();

exports.default = UnderwritingContractsApi;