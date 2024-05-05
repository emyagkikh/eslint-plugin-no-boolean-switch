# eslint-plugin-no-boolean-switch

[![NPM Version](https://img.shields.io/npm/v/eslint-plugin-no-boolean-switch.svg?style=flat-square)](npmjs.com/package/eslint-plugin-no-boolean-switch)

Adds [eslint](http://eslint.org/) rules to disallow using boolean literals as switch statement arguments

## Necessity
You should avoid such constructions, because they contain logical errors

```js
const x = 1;

switch (true) {
  case !!x:
    console.log('logging first case');
    break;
  case x === 1:
    console.log('logging second case');
    break;
}
```

Let's use an example to see how switch(true) can be rewritten more safely

### Was:
```js
function getNodeDescriptionSwitch(node: Node) { 
  switch (true) { 
    case isArrayLiteralExpression(node): 
    case isObjectLiteralExpression(node): 
      return "Array or object"; 
    case isBigIntLiteral(node): 
    case isNumericLiteral(node): 
      return "Numberish"; 
    case isNoSubstitutionTemplateLiteral(node): 
    case isRegularExpressionLiteral(node): 
    case isStringLiteral(node): 
    case isTemplateLiteral(node): 
      return "Stringlike"; 
    default: 
      return "Some sort of node"; 
  } 
}
```
### Became:
```js
function getNodeDescriptionSwitch(node) {
  if (isArrayLiteralExpression(node) || isObjectLiteralExpression(node)) {
    return "Array or object";
  } else if (isBigIntLiteral(node) || isNumericLiteral(node)) {
    return "Numberish";
  } else if (
    isNoSubstitutionTemplateLiteral(node) ||
    isRegularExpressionLiteral(node) ||
    isStringLiteral(node) ||
    isTemplateLiteral(node)
  ) {
    return "Stringlike";
  } else {
    return "Some sort of node";
  }
}
```

## Changelog

#### 0.1.1
- Delete eslint package from peerDependencies
- Added the correct readme.md
- Set the package version to the semantically correct one

#### 0.0.1
- Initial Release
