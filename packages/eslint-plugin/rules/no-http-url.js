const RULE_NAME = 'no-http-url';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    fixable: null,
    messages: {
      noHttpUrl: 'Recommended "{{url}}" switch to HTTPS',
    },
  },
  create(content) {
    return {
      Literal: function handleRequires(node) {
        if(node.value && typeof node.value === 'string' && node.value.indexOf('http:') === 0) {
          content.report({
            node,
            messageId: 'noHttpUrl',
            data: {
              url: node.value,
            },
          });
        }
      }
    }
  },
};
