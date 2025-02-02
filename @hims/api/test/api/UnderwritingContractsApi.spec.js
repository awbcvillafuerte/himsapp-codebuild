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
    instance = new HimsApiClient.UnderwritingContractsApi();
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

  describe('UnderwritingContractsApi', function() {
    describe('canAvail', function() {
      it('should call canAvail successfully', function(done) {
        //uncomment below and update the code to test canAvail
        //instance.canAvail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('count', function() {
      it('should call count successfully', function(done) {
        //uncomment below and update the code to test count
        //instance.count(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create', function() {
      it('should call create successfully', function(done) {
        //uncomment below and update the code to test create
        //instance.create(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteById', function() {
      it('should call deleteById successfully', function(done) {
        //uncomment below and update the code to test deleteById
        //instance.deleteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('find', function() {
      it('should call find successfully', function(done) {
        //uncomment below and update the code to test find
        //instance.find(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findById', function() {
      it('should call findById successfully', function(done) {
        //uncomment below and update the code to test findById
        //instance.findById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMemberBenefits', function() {
      it('should call getMemberBenefits successfully', function(done) {
        //uncomment below and update the code to test getMemberBenefits
        //instance.getMemberBenefits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPdf', function() {
      it('should call getPdf successfully', function(done) {
        //uncomment below and update the code to test getPdf
        //instance.getPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPdfFooter', function() {
      it('should call getPdfFooter successfully', function(done) {
        //uncomment below and update the code to test getPdfFooter
        //instance.getPdfFooter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceById', function() {
      it('should call replaceById successfully', function(done) {
        //uncomment below and update the code to test replaceById
        //instance.replaceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAll', function() {
      it('should call updateAll successfully', function(done) {
        //uncomment below and update the code to test updateAll
        //instance.updateAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateById', function() {
      it('should call updateById successfully', function(done) {
        //uncomment below and update the code to test updateById
        //instance.updateById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
