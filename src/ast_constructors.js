function KIFNode(kifExpressions) {
  this.type = 'KIFNode';
  this.expressions = this.expressions || [];
  this.expressions = this.expressions.concat(kifExpressions);
}

function WordNode(identifier) {
  this.type = 'WordNode';
  this.word = identifier;
}

function VariableNode(identifier, variableType) {
  this.type = 'VariableNode';
  this.variableType = variableType || 'IND';
  this.variableName = identifier;
}

function FunctionTermNode(funcName, argsList) {
  this.type = 'FunctionTermNode';
  this.functionName = funcName;
  this.functionArgumentList = this.functionArgumentList || [];
  this.functionArgumentList = this.functionArgumentList.concat(argsList);
}

function EquationNode(firstTerm, secondTerm) {
  this.type = 'EquationNode';
  this.terms = this.terms || [];
  this.terms = this.terms.concat(firstTerm, secondTerm);
}

function StringLiteralNode(rawString) {
  this.type = 'StringLiteralNode';
  this.rawString = rawString;
  this.chars = rawString.substring(1, rawString.length - 1);
}

module.exports = {
  KIFNode: KIFNode,
  WordNode: WordNode,
  VariableNode: VariableNode,
  StringLiteralNode: StringLiteralNode,
  FunctionTermNode: FunctionTermNode,
  EquationNode: EquationNode
};
