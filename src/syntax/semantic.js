/**
 * Xeoo Theme Suite - Semantic Token Colors (LSP Highlight Support)
 * Enhances TypeScript, JavaScript, Python, PHP, Go, Rust, Java, C#, and modern LSPs.
 */

function generateSemanticTokens(themeConfig) {
  const syntax = themeConfig.syntax || themeConfig;

  return {
    // -------------------------------------------------------------
    // Standard Token Types
    // -------------------------------------------------------------
    'namespace': syntax.class,
    'type': syntax.type,
    'type.defaultLibrary': syntax.type,
    'class': syntax.class,
    'class.defaultLibrary': syntax.class,
    'interface': syntax.interface || syntax.type,
    'enum': syntax.class,
    'enumMember': syntax.constant,
    'typeParameter': syntax.type,

    'function': syntax.func,
    'function.defaultLibrary': syntax.builtin || syntax.func,
    'method': syntax.method,
    'method.defaultLibrary': syntax.builtin || syntax.method,
    'macro': syntax.macro || syntax.keyword,

    'variable': syntax.variable,
    'variable.readonly': syntax.constant,
    'variable.defaultLibrary': syntax.builtin || syntax.variable,
    'parameter': syntax.parameter,
    'property': syntax.property,
    'property.readonly': syntax.property,

    'decorator': syntax.decorator || syntax.attribute,
    'keyword': syntax.keyword,
    'modifier': syntax.storage,
    'comment': syntax.comment,
    'string': syntax.string,
    'number': syntax.number,
    'regexp': syntax.regex,
    'operator': syntax.operator,
    'event': syntax.func,
    'label': syntax.keyword,

    // -------------------------------------------------------------
    // Semantic Modifiers & State Handling
    // -------------------------------------------------------------
    '*.deprecated': {
      fontStyle: 'strikethrough'
    },
    'variable.declaration': {
      foreground: syntax.variable
    },
    'parameter.declaration': {
      foreground: syntax.parameter
    },
    'function.declaration': {
      foreground: syntax.func
    },
    'method.declaration': {
      foreground: syntax.method
    },
    'class.declaration': {
      foreground: syntax.class
    },
    'selfKeyword': {
      foreground: syntax.keyword,
      fontStyle: 'italic'
    },

    // -------------------------------------------------------------
    // Language-Specific Semantic Selectors
    // -------------------------------------------------------------
    // Python (Pylance / Pyright)
    'magicFunction:python': syntax.method,
    'class.builtin:python': syntax.class,
    'typeHint:python': syntax.type,
    'parameter.declaration:python': syntax.parameter,

    // Rust (rust-analyzer)
    'lifetime:rust': syntax.storage,
    'formatSpecifier:rust': syntax.stringEscape || syntax.regex,
    'attribute:rust': syntax.decorator || syntax.attribute,
    'builtinType:rust': syntax.type,

    // TypeScript / JavaScript
    'jsxText': syntax.variable,

    // Go (gopls)
    'package:go': syntax.class,

    // PHP (Intelephense)
    'property:php': syntax.property,
    'member:php': syntax.property
  };
}

module.exports = { generateSemanticTokens };
