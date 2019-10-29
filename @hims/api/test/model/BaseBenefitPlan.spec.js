/**
 * HIMS API - Client
 * HIMS API Defintions for Client Subsystem
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: hims-info@veridata.com.ph
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HimsApiClient);
  }
}(this, function(expect, HimsApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HimsApiClient.BaseBenefitPlan();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BaseBenefitPlan', function() {
    it('should create an instance of BaseBenefitPlan', function() {
      // uncomment below and update the code to test BaseBenefitPlan
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be.a(HimsApiClient.BaseBenefitPlan);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "is_deleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property baseId (base name: "base_id")', function() {
      // uncomment below and update the code to test the property baseId
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property treeId (base name: "tree_id")', function() {
      // uncomment below and update the code to test the property treeId
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property treePath (base name: "tree_path")', function() {
      // uncomment below and update the code to test the property treePath
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property sortIndex (base name: "sort_index")', function() {
      // uncomment below and update the code to test the property sortIndex
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property limits (base name: "limits")', function() {
      // uncomment below and update the code to test the property limits
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property remarks (base name: "remarks")', function() {
      // uncomment below and update the code to test the property remarks
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property children (base name: "children")', function() {
      // uncomment below and update the code to test the property children
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property revisions (base name: "revisions")', function() {
      // uncomment below and update the code to test the property revisions
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property canAvail (base name: "canAvail")', function() {
      // uncomment below and update the code to test the property canAvail
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property canCover (base name: "canCover")', function() {
      // uncomment below and update the code to test the property canCover
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property renderContract (base name: "renderContract")', function() {
      // uncomment below and update the code to test the property renderContract
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property renderProposal (base name: "renderProposal")', function() {
      // uncomment below and update the code to test the property renderProposal
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property renderClause (base name: "renderClause")', function() {
      // uncomment below and update the code to test the property renderClause
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

    it('should have the property contractFooter (base name: "contract_footer")', function() {
      // uncomment below and update the code to test the property contractFooter
      //var instane = new HimsApiClient.BaseBenefitPlan();
      //expect(instance).to.be();
    });

  });

}));
