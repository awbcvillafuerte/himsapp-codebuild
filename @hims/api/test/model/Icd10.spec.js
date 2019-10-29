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
    instance = new HimsApiClient.Icd10();
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

  describe('Icd10', function() {
    it('should create an instance of Icd10', function() {
      // uncomment below and update the code to test Icd10
      //var instane = new HimsApiClient.Icd10();
      //expect(instance).to.be.a(HimsApiClient.Icd10);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HimsApiClient.Icd10();
      //expect(instance).to.be();
    });

    it('should have the property categoryCode (base name: "category_code")', function() {
      // uncomment below and update the code to test the property categoryCode
      //var instane = new HimsApiClient.Icd10();
      //expect(instance).to.be();
    });

    it('should have the property diagnosisCode (base name: "diagnosis_code")', function() {
      // uncomment below and update the code to test the property diagnosisCode
      //var instane = new HimsApiClient.Icd10();
      //expect(instance).to.be();
    });

    it('should have the property fullCode (base name: "full_code")', function() {
      // uncomment below and update the code to test the property fullCode
      //var instane = new HimsApiClient.Icd10();
      //expect(instance).to.be();
    });

    it('should have the property abbreviatedDescription (base name: "abbreviated_description")', function() {
      // uncomment below and update the code to test the property abbreviatedDescription
      //var instane = new HimsApiClient.Icd10();
      //expect(instance).to.be();
    });

    it('should have the property fullDescription (base name: "full_description")', function() {
      // uncomment below and update the code to test the property fullDescription
      //var instane = new HimsApiClient.Icd10();
      //expect(instance).to.be();
    });

    it('should have the property categoryTitle (base name: "category_title")', function() {
      // uncomment below and update the code to test the property categoryTitle
      //var instane = new HimsApiClient.Icd10();
      //expect(instance).to.be();
    });

  });

}));
