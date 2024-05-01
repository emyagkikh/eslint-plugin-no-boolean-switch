module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow using boolean literals as switch statement arguments',
    },
    messages: {
      avoidBoolean: 'Avoid using a "{{discriminantValue}}" literal as switch statement argument',
    },
    schema: [],
  },
  create: function(context) {
    return {
      SwitchStatement(node) {
        if (node.discriminant.type === "Literal" && [true, false].includes(node.discriminant.value)) {
          context.report({
            node,
            messageId: 'avoidBoolean',
            data: {
              discriminantValue: node.discriminant.value,
            },
          })
        }
      }
    }
  },
}
