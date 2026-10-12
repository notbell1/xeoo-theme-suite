/**
 * Xeoo Theme Suite - Automated Compiler & Build System
 * Compiles all 26 themes from modular design tokens into optimized VS Code JSON themes.
 * Also synchronizes package.json "contributes.themes" manifest automatically.
 */

const fs = require('fs');
const path = require('path');

const THEMES_DIR = path.resolve(__dirname, '../themes');
const PACKAGE_JSON_PATH = path.resolve(__dirname, '../package.json');

function build() {
  console.log('\n🚀 [Xeoo Theme] Building full theme suite...');

  if (!fs.existsSync(THEMES_DIR)) {
    fs.mkdirSync(THEMES_DIR, { recursive: true });
  }

  // Clear caches for watch mode
  Object.keys(require.cache).forEach((key) => {
    if (key.includes(path.join('zx-theme', 'src'))) {
      delete require.cache[key];
    }
  });

  const { palettes } = require('./tokens/palettes');
  const { generateWorkbenchColors } = require('./tokens/ui');
  const { generateTextMateTokens } = require('./syntax/textmate');
  const { generateSemanticTokens } = require('./syntax/semantic');

  const themeContributions = [];

  palettes.forEach((themeConfig, idx) => {
    const filename = `${themeConfig.id}-color-theme.json`;
    const outputPath = path.join(THEMES_DIR, filename);

    const fullTheme = {
      name: themeConfig.name,
      type: themeConfig.type || 'dark',
      semanticHighlighting: true,
      colors: generateWorkbenchColors(themeConfig),
      tokenColors: generateTextMateTokens(themeConfig),
      semanticTokenColors: generateSemanticTokens(themeConfig),
    };

    fs.writeFileSync(outputPath, JSON.stringify(fullTheme, null, 2), 'utf8');

    themeContributions.push({
      label: themeConfig.name,
      uiTheme: themeConfig.type === 'light' ? 'vs' : 'vs-dark',
      path: `./themes/${filename}`
    });

    const uiCount = Object.keys(fullTheme.colors).length;
    console.log(`  [${idx + 1}/${palettes.length}] ✓ Built "${themeConfig.name}" (${themeConfig.type.toUpperCase()}) -> ${filename} [${uiCount} UI keys]`);
  });

  // Synchronize package.json contributes.themes
  if (fs.existsSync(PACKAGE_JSON_PATH)) {
    const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
    pkg.contributes = pkg.contributes || {};
    pkg.contributes.themes = themeContributions;
    fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
    console.log(`\n  📝 Updated package.json manifest with ${themeContributions.length} themes.`);
  }

  console.log(`\n✨ [Xeoo Theme] Successfully generated all ${palettes.length} themes!\n`);
}

// Watch mode support
const isWatch = process.argv.includes('--watch');

build();

if (isWatch) {
  console.log('👀 Watching src/ for changes... (Press Ctrl+C to stop)\n');
  const srcDir = path.resolve(__dirname);
  
  let debounceTimeout = null;
  fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
    if (filename && (filename.endsWith('.js') || filename.endsWith('.json'))) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        console.log(`🔄 Change detected in ${filename}. Rebuilding...`);
        try {
          build();
        } catch (err) {
          console.error('❌ Build error:', err.message);
        }
      }, 200);
    }
  });
}
