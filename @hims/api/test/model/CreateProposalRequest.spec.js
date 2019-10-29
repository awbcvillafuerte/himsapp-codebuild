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
    factory(root.expect, root.@HimsApi);
  }
}(this, function(expect, @HimsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @HimsApi.CreateProposalRequest();
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

  describe('CreateProposalRequest', function() {
    it('should create an instance of CreateProposalRequest', function() {
      // uncomment below and update the code to test CreateProposalRequest
      //var instane = new @HimsApi.CreateProposalRequest();
      //expect(instance).to.be.a(@HimsApi.CreateProposalRequest);
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instane = new @HimsApi.CreateProposalRequest();
      //expect(instance).to.be();
    });

    it('should have the property nodes (base name: "nodes")', function() {
      // uncomment below and update the code to test the property nodes
      //var instane = new @HimsApi.CreateProposalRequest();
      //expect(instance).to.be();
    });

  });

}));
