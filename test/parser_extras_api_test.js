var chai = require('chai'),
    expect = chai.expect,
    fs = require('fs'),
    fsJson = require('jsonfile'),
    path = require('path'),
    jKif = require('../src/jkif'),
    ast = require('../src/ast_constructors/ast_constructors'),
    testResourcesPath = path.resolve(__dirname + './../test_resources/'),
    kifFilePath = path.resolve(testResourcesPath + '/sumo_core.kif'),
    jsonTestOutputPath = path.resolve(testResourcesPath + '/test_output.json');


describe('jKif.Parser Extras', function() {

  describe('#parseFile', function() {
    it('should parse a .kif file into a KIFNode', function(done) {
      jKif.Parser.parseFile(kifFilePath, function(err, parsed) {
        expect(parsed).to.be.an.instanceof(ast.KIFNode);
        done();
      });
    });
  });

  describe('#writeParsedToFile', function() {
    var parsed;
    beforeEach(function(done) {
      jKif.Parser.parseFile(kifFilePath, function(err, kif) {
        parsed = kif;
        jKif.Parser.writeParsedToFile(jsonTestOutputPath, parsed, function(success) {
          done();
        });
      });
    });

    afterEach(function(done) {
      fs.unlink(jsonTestOutputPath, function() {
        done();
      });
    });

    it('should write parsed kif to a file', function(done) {
      fsJson.readFile(jsonTestOutputPath, function(err, data) {
        expect(data.type).to.equal('KIFNode');
        done();
      });
    });
  });

});
