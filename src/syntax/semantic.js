/**
 * Xeoo Theme Suite - Semantic Token Colors (LSP Highlight Support)
 * Enhances TypeScript, JavaScript, Python, PHP, Go, Rust, and modern LSPs.
 */

function generateSemanticTokens(themeConfig) {
  const syntax = themeConfig.syntax || themeConfig;

  return {
    'parameter': syntax.parameter,
    'variable.readonly': syntax.constant,
    'property.readonly': syntax.constant,
    'type': syntax.type,
    'class': syntax.class,
    'interface': syntax.class,
    'enum': syntax.class,
    'enumMember': syntax.constant,
    'function': syntax.func,
    'method': syntax.method,
    'macro': syntax.keyword,
    'keyword': syntax.keyword,
    'modifier': syntax.storage,
    'comment': syntax.comment,
    'string': syntax.string,
    'number': syntax.number,
    'regexp': syntax.regex,
    'operator': syntax.operator,
    'namespace': syntax.class,
    'selfKeyword': {
      foreground: syntax.keyword,
      fontStyle: 'italic'
    },
    '*.declaration': {
      fontStyle: 'bold'
    }
  };
}

module.exports = { generateSemanticTokens };
