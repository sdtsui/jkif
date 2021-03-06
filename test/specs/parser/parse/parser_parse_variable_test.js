var chai = require('chai'),
    expect = chai.expect,
    jKif = require('../../../../lib/jkif'),
    ast = require('../../../../lib/ast_constructors/ast_constructors');


describe('jKif.Parser.parse Variable parsing', function() {

  it('correctly parses Row Variables into VariableNodes', function () {
    expect(jKif.Parser.parse('@row').expressions[0]).to.be.an.instanceof(ast.VariableNode);
  });

  it('correctly parses Independent Variables into VariableNodes', function () {
    expect(jKif.Parser.parse('?ind').expressions[0]).to.be.an.instanceof(ast.VariableNode);
  });

  it('correctly parses Variables with variableType "ROW"', function () {
    expect(jKif.Parser.parse('@row').expressions[0].variableType).to.equal('ROW');
  });

  it('correctly parses Variables with variableType "IND"', function () {
    expect(jKif.Parser.parse('?ind').expressions[0].variableType).to.equal('IND');
  });

  it('correctly parses Row Variable names', function () {
    expect(jKif.Parser.parse('@row').expressions[0].variableName).to.equal('row');
  });

  it('correctly parses Independent Variable names', function () {
    expect(jKif.Parser.parse('?ind').expressions[0].variableName).to.equal('ind');
  });

});
