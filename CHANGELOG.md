# Change Log

All notable changes to the "xeoo-theme" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [2.2.2] - 2026-10-14

### Fixed
- **Extension Details Branding & Logo Rendering**: Fixed broken logo in VS Code Extension Details page by declaring Default Icon asset in VSIX manifest and pointing README media to canonical raw repository assets.
- **VSIX Packaging**: Added `CHANGELOG.md` and icon assets to addressable VSIX assets bundle.

## [2.2.1] - 2026-10-14

### Changed
- **Streamlined Studio Dashboard Header**: Consolidated all version and engine branding into the prominent root header item (`Xeoo Theme Suite` • `v2.2.1`), removing duplicate sub-items for a cleaner, modern Activity Bar layout.
- **Dynamic Version Resolution**: Linked tree view badge dynamically to `package.json` manifest version.
- **Enhanced HTML Plain Text Color Contrast**: Improved contrast for plain text within inline HTML tags (`<p>`, `<span>`, `<h1>`–`<h5>`, `<div>`) mapping `text.html.basic` cleanly to high-contrast white.

## [2.2.0] - 2026-10-14

### Added
- **Automatic Inline HTML & Tailwind Detection**: TextMate grammar injection (`syntaxes/inline-html.tmLanguage.json`) that automatically parses HTML elements, comments, attributes, and Tailwind utility classes inside JavaScript & TypeScript template literals (`` `...` ``) without requiring `/* html */` or `html` tags.
- **Redesigned Professional Studio Dashboard**: Enhanced Activity Bar Studio with organized sections: System Status & Version Header, Live Active Theme Status, Quick Controls Bar, and structured Curated Palettes Library.
- **Quick Controls & Diagnostics**: Integrated quick palette search, random shuffle, and dashboard synchronization actions.

## [2.1.0] - 2026-10-14

### Added
- **Consistent Cross-Language Syntax Highlighting Engine**: Standardized semantic tokens across Web, Backend, Systems, Mobile, Data, and Game Development languages.
- **Advanced Tailwind CSS Scope Support**: Calibrated highlights for `@tailwind`, `@apply`, `@layer`, `theme()`, responsive variants (`sm:`, `md:`, `lg:`), state variants (`hover:`, `focus:`, `dark:`), separator `:`, and arbitrary values (`bg-[#121217]`, `w-[500px]`).
- **Comprehensive LSP Semantic Highlighting**: Enabled and defined all standard semantic tokens (`typeParameter`, `decorator`, `macro`, `property`, `variable`, etc.) with state modifiers (`*.deprecated`, `readonly`, `defaultLibrary`).
- **Distinct Framework Component Highlighting**: Custom React/Vue component tags (`<Header>`, `<About>`) now render with distinct component accents separate from standard HTML elements.
- **Template Literal Interpolation Protection**: Solved template expression bleeding inside `` `${...}` `` and template strings containing embedded markup.
- **Automated Syntax Test Matrix**: Added comprehensive automated test suite and multi-language test fixtures.

## [2.0.0] - 2026-10-12

- Initial master release of Xeoo Theme Suite with 43 themes across 15 color categories.
- Interactive Theme Switcher Activity Bar Studio.
