/**
 * Xeoo Theme Suite - TextMate Syntax Scope Tokens
 * Tuned for PHP, Laravel (Blade), JavaScript, TypeScript, Luau/Lua, HTML/CSS, JSON, Markdown.
 */

function generateTextMateTokens(themeConfig) {
  const syntax = themeConfig.syntax || themeConfig;

  return [
    // -------------------------------------------------------------
    // Comments & Documentation
    // -------------------------------------------------------------
    {
      name: 'Comments',
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.comment'
      ],
      settings: {
        foreground: syntax.comment,
        fontStyle: 'italic'
      }
    },
    {
      name: 'Documentation Comments',
      scope: [
        'comment.block.documentation',
        'comment.block.documentation punctuation.definition.comment',
        'storage.type.class.jsdoc',
        'entity.name.type.instance.jsdoc'
      ],
      settings: {
        foreground: syntax.comment,
        fontStyle: 'italic'
      }
    },

    // -------------------------------------------------------------
    // Keywords & Control Flow
    // -------------------------------------------------------------
    {
      name: 'Keywords & Control Flow',
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
        'keyword.other.unit'
      ],
      settings: {
        foreground: syntax.keyword,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Storage Types & Modifiers',
      scope: [
        'storage',
        'storage.type',
        'storage.modifier',
        'keyword.declaration'
      ],
      settings: {
        foreground: syntax.storage
      }
    },

    // -------------------------------------------------------------
    // Strings & Character Escapes
    // -------------------------------------------------------------
    {
      name: 'Strings',
      scope: [
        'string',
        'string.quoted',
        'string.template',
        'punctuation.definition.string'
      ],
      settings: {
        foreground: syntax.string
      }
    },
    {
      name: 'Regex & Escape Characters',
      scope: [
        'string.regexp',
        'constant.character.escape',
        'constant.other.placeholder'
      ],
      settings: {
        foreground: syntax.regex
      }
    },

    // -------------------------------------------------------------
    // Numbers, Booleans & Constants
    // -------------------------------------------------------------
    {
      name: 'Numbers & Units',
      scope: [
        'constant.numeric',
        'keyword.other.unit'
      ],
      settings: {
        foreground: syntax.number
      }
    },
    {
      name: 'Language Constants & Booleans',
      scope: [
        'constant.language',
        'constant.language.boolean',
        'constant.language.null',
        'constant.language.undefined',
        'support.constant'
      ],
      settings: {
        foreground: syntax.constant,
        fontStyle: 'bold'
      }
    },

    // -------------------------------------------------------------
    // Functions & Methods
    // -------------------------------------------------------------
    {
      name: 'Functions & Calls',
      scope: [
        'entity.name.function',
        'meta.function-call',
        'variable.function',
        'support.function'
      ],
      settings: {
        foreground: syntax.func
      }
    },
    {
      name: 'Object & Class Methods',
      scope: [
        'meta.method.declaration entity.name.function',
        'entity.name.function.member',
        'support.function.misc'
      ],
      settings: {
        foreground: syntax.method
      }
    },

    // -------------------------------------------------------------
    // Classes, Types, Interfaces & Namespaces
    // -------------------------------------------------------------
    {
      name: 'Classes & Types',
      scope: [
        'entity.name.type',
        'entity.name.class',
        'support.class',
        'support.type',
        'entity.other.inherited-class'
      ],
      settings: {
        foreground: syntax.class
      }
    },
    {
      name: 'Interfaces & Type Aliases',
      scope: [
        'entity.name.type.interface',
        'entity.name.type.alias'
      ],
      settings: {
        foreground: syntax.type
      }
    },

    // -------------------------------------------------------------
    // Variables & Parameters
    // -------------------------------------------------------------
    {
      name: 'Variables',
      scope: [
        'variable',
        'variable.other.readwrite',
        'variable.other.object'
      ],
      settings: {
        foreground: syntax.variable
      }
    },
    {
      name: 'Function Parameters',
      scope: [
        'variable.parameter',
        'meta.parameters variable.other'
      ],
      settings: {
        foreground: syntax.parameter
      }
    },
    {
      name: 'Properties & Object Keys',
      scope: [
        'variable.other.property',
        'variable.object.property',
        'support.type.property-name',
        'meta.object-literal.key'
      ],
      settings: {
        foreground: syntax.property
      }
    },
    {
      name: 'Language Builtin Variables (this, self, super)',
      scope: [
        'variable.language.this',
        'variable.language.special.self',
        'variable.language.super',
        'variable.language'
      ],
      settings: {
        foreground: syntax.keyword,
        fontStyle: 'italic'
      }
    },

    // -------------------------------------------------------------
    // Operators & Punctuation
    // -------------------------------------------------------------
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'keyword.operator.arithmetic',
        'keyword.operator.comparison',
        'keyword.operator.assignment'
      ],
      settings: {
        foreground: syntax.operator
      }
    },
    {
      name: 'Punctuation & Delimiters',
      scope: [
        'punctuation',
        'punctuation.separator',
        'punctuation.terminator',
        'punctuation.accessor'
      ],
      settings: {
        foreground: syntax.delimiter
      }
    },

    // -------------------------------------------------------------
    // HTML / XML / JSX / Blade Tags & Attributes
    // -------------------------------------------------------------
    {
      name: 'Tags',
      scope: [
        'entity.name.tag',
        'meta.tag.sgml',
        'punctuation.definition.tag'
      ],
      settings: {
        foreground: syntax.tag
      }
    },
    {
      name: 'Attributes',
      scope: [
        'entity.other.attribute-name',
        'entity.other.attribute-name.html',
        'entity.other.attribute-name.id'
      ],
      settings: {
        foreground: syntax.attribute,
        fontStyle: 'italic'
      }
    },

    // -------------------------------------------------------------
    // PHP & Laravel Specific Tuning
    // -------------------------------------------------------------
    {
      name: 'PHP Variables',
      scope: [
        'variable.other.php',
        'punctuation.definition.variable.php'
      ],
      settings: {
        foreground: syntax.variable
      }
    },
    {
      name: 'PHP Namespaces & Use Statements',
      scope: [
        'support.other.namespace.use.php',
        'support.other.namespace.php',
        'entity.name.type.namespace.php'
      ],
      settings: {
        foreground: syntax.class
      }
    },
    {
      name: 'Laravel Blade Directives',
      scope: [
        'keyword.blade',
        'entity.name.function.blade',
        'punctuation.definition.directive.blade'
      ],
      settings: {
        foreground: syntax.keyword,
        fontStyle: 'bold'
      }
    },

    // -------------------------------------------------------------
    // Luau / Lua Specific Tuning
    // -------------------------------------------------------------
    {
      name: 'Luau Builtins & Globals',
      scope: [
        'support.function.lua',
        'support.function.luau',
        'support.constant.lua',
        'support.variable.lua'
      ],
      settings: {
        foreground: syntax.func
      }
    },
    {
      name: 'Luau Type Annotations',
      scope: [
        'entity.name.type.lua',
        'entity.name.type.luau',
        'meta.type.annotation.lua'
      ],
      settings: {
        foreground: syntax.type
      }
    },

    // -------------------------------------------------------------
    // CSS & SCSS Styling
    // -------------------------------------------------------------
    {
      name: 'CSS Properties',
      scope: [
        'support.type.property-name.css',
        'support.type.property-name.scss'
      ],
      settings: {
        foreground: syntax.property
      }
    },
    {
      name: 'CSS Values & Units',
      scope: [
        'support.constant.property-value.css',
        'keyword.other.unit.css'
      ],
      settings: {
        foreground: syntax.number
      }
    },
    {
      name: 'CSS Selectors (Classes & IDs)',
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.pseudo-class.css'
      ],
      settings: {
        foreground: syntax.attribute
      }
    },

    // -------------------------------------------------------------
    // JSON & Data Structures
    // -------------------------------------------------------------
    {
      name: 'JSON Property Keys',
      scope: [
        'support.type.property-name.json',
        'entity.name.tag.yaml'
      ],
      settings: {
        foreground: syntax.keyword
      }
    },

    // -------------------------------------------------------------
    // Markdown
    // -------------------------------------------------------------
    {
      name: 'Markdown Headings',
      scope: [
        'markup.heading',
        'punctuation.definition.heading.markdown',
        'entity.name.section.markdown'
      ],
      settings: {
        foreground: syntax.keyword,
        fontStyle: 'bold'
      }
    },
    {
      name: 'Markdown Code & Inline Raw',
      scope: [
        'markup.inline.raw.markdown',
        'markup.raw.block.markdown',
        'markup.raw.block.fenced.markdown'
      ],
      settings: {
        foreground: syntax.string
      }
    },
    {
      name: 'Markdown Links & URLs',
      scope: [
        'string.other.link.title.markdown',
        'constant.other.reference.link.markdown',
        'markup.underline.link'
      ],
      settings: {
        foreground: syntax.func,
        fontStyle: 'underline'
      }
    },
    {
      name: 'Markdown Emphasis',
      scope: ['markup.bold'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.number
      }
    },
    {
      name: 'Markdown Italic',
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
        foreground: syntax.attribute
      }
    },
    {
      name: 'Markdown Blockquote',
      scope: [
        'markup.quote',
        'punctuation.definition.blockquote.markdown'
      ],
      settings: {
        foreground: syntax.comment,
        fontStyle: 'italic'
      }
    }
  ];
}

module.exports = { generateTextMateTokens };
