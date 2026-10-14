/**
 * Xeoo Theme Suite - Professional Studio Dashboard Extension (v2.2.1)
 * Provides an Activity Bar Studio with organized sections:
 * - System Status & Version Header (v2.2.1)
 * - Live Active Theme Indicator
 * - Quick Action Tools (Quick Pick, Surprise Me, Refresh)
 * - Structured Theme Library (15 Categories • 43 Expert Palettes)
 * - Syntax & Engine Feature Diagnostics
 */

const vscode = require('vscode');
const { palettes } = require('./tokens/palettes');

// Dynamically track version from package.json manifest
let EXTENSION_VERSION = '2.2.2';
try {
  const pkg = require('../package.json');
  if (pkg && pkg.version) {
    EXTENSION_VERSION = pkg.version;
  }
} catch (e) {
  // fallback
}

// 15 Curated Color Categories with aesthetic iconography and accents
const CATEGORY_META = {
  Red: { icon: '🔴', tag: 'Crimson & Ruby', desc: 'Vibrant & Bold' },
  Green: { icon: '🟢', tag: 'Emerald & Sage', desc: 'Natural & Restful' },
  Blue: { icon: '🔵', tag: 'Sapphire & Cobalt', desc: 'Classic & Focused' },
  Yellow: { icon: '🟡', tag: 'Canary & Honey', desc: 'High-Contrast Warm' },
  Black: { icon: '⚫', tag: 'OLED & Obsidian', desc: 'True Black Contrast' },
  White: { icon: '⚪', tag: 'Paper & Alabaster', desc: 'Zero-Glare Light' },
  Purple: { icon: '🟣', tag: 'Amethyst & Twilight', desc: 'Mystic & Royal' },
  Orange: { icon: '🟠', tag: 'Ember & Terracotta', desc: 'Energetic Flame' },
  Pink: { icon: '🌸', tag: 'Sakura & Rose', desc: 'Modern Neon Pink' },
  Cyan: { icon: '💠', tag: 'Aqua & Cyber Cyan', desc: 'High-Tech Futurism' },
  Gray: { icon: '🪙', tag: 'Titanium & Slate', desc: 'Zero Distraction' },
  Indigo: { icon: '🔮', tag: 'Midnight & Deep Space', desc: 'Deep Electric' },
  Brown: { icon: '🟤', tag: 'Mocha & Walnut', desc: 'Coffeehouse Warmth' },
  Gold: { icon: '👑', tag: 'Imperial Gold & Amber', desc: 'Luxurious Prestige' },
  Teal: { icon: '🌊', tag: 'Deep Sea & Lagoon', desc: 'Balanced Aquatic' },
};

class XeooTreeItem extends vscode.TreeItem {
  constructor(label, collapsibleState, options = {}) {
    super(label, collapsibleState);
    if (options.description) this.description = options.description;
    if (options.tooltip) this.tooltip = options.tooltip;
    if (options.command) this.command = options.command;
    if (options.iconPath) this.iconPath = options.iconPath;
    if (options.contextValue) this.contextValue = options.contextValue;
  }
}

class XeooStudioTreeDataProvider {
  constructor() {
    this._onDidChangeTreeData = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;

    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('workbench.colorTheme')) {
        this.refresh();
      }
    });
  }

  refresh() {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element) {
    return element;
  }

  getChildren(element) {
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');

    // =============================================================
    // Root Level Dashboard Layout
    // =============================================================
    if (!element) {
      const activePalette = palettes.find((p) => p.name === currentTheme);
      const activeDesc = activePalette
        ? `${activePalette.category} (${activePalette.variant})`
        : 'Default/External';

      // 1. Studio Status Banner Item (Header with Version Info)
      const headerItem = new XeooTreeItem(
        'Xeoo Theme Suite',
        vscode.TreeItemCollapsibleState.None,
        {
          description: `v${EXTENSION_VERSION}`,
          tooltip: new vscode.MarkdownString(
            `### 🚀 Xeoo Theme Suite (v${EXTENSION_VERSION})\n\n` +
            `* **Version:** v${EXTENSION_VERSION}\n` +
            `* **Palette Engine:** 43 Calibrated Themes across 15 Color Families\n` +
            `* **Standard:** WCAG AA Contrast Compliant (≥ 4.5:1)\n` +
            `* **Syntax:** Auto-HTML & Tailwind CSS Engine\n` +
            `* **Privacy:** 100% Offline & Zero Telemetry`
          ),
          iconPath: new vscode.ThemeIcon('verified'),
          command: {
            command: 'xeoo-theme.showInfo',
            title: 'Xeoo Theme Suite Details',
          },
          contextValue: 'dashboardHeader',
        }
      );

      // 2. Active Theme Status Item
      const activeItem = new XeooTreeItem(
        `Active: ${currentTheme || 'None'}`,
        vscode.TreeItemCollapsibleState.None,
        {
          description: `✦ ${activeDesc.toUpperCase()}`,
          tooltip: new vscode.MarkdownString(
            `### 🎯 Currently Active Theme\n\n` +
            `**${currentTheme}** is applied to your workspace.\n\n` +
            `Click here to quickly browse and switch palettes.`
          ),
          iconPath: new vscode.ThemeIcon('pass-filled'),
          command: {
            command: 'xeoo-theme.quickPick',
            title: 'Quick Pick Palette',
          },
          contextValue: 'activeThemeBadge',
        }
      );

      // 3. Quick Actions Group
      const quickControlsItem = new XeooTreeItem(
        '⚡ Quick Controls',
        vscode.TreeItemCollapsibleState.Expanded,
        {
          description: 'Search & Tools',
          tooltip: 'Quick access to palette picker and randomized theme selection.',
          iconPath: new vscode.ThemeIcon('tools'),
          contextValue: 'quickControlsGroup',
        }
      );
      quickControlsItem.subSection = 'quickControls';

      // 4. Color Categories Library
      const libraryItem = new XeooTreeItem(
        '🎨 Theme Palettes Library',
        vscode.TreeItemCollapsibleState.Expanded,
        {
          description: '15 Categories • 43 Variants',
          tooltip: 'Browse all 43 professionally calibrated Dark, Soft, and Light themes.',
          iconPath: new vscode.ThemeIcon('paintcan'),
          contextValue: 'paletteLibraryGroup',
        }
      );
      libraryItem.subSection = 'paletteLibrary';

      return [headerItem, activeItem, quickControlsItem, libraryItem];
    }

    // =============================================================
    // Sub-Section: Quick Controls
    // =============================================================
    if (element.subSection === 'quickControls') {
      return [
        new XeooTreeItem('Search All Palettes...', vscode.TreeItemCollapsibleState.None, {
          description: 'Quick Pick Modal',
          iconPath: new vscode.ThemeIcon('search'),
          command: {
            command: 'xeoo-theme.quickPick',
            title: 'Quick Pick Palette',
          },
          tooltip: 'Open the Quick Pick modal to search and preview themes instantly.',
        }),
        new XeooTreeItem('Surprise Me! (Random Palette)', vscode.TreeItemCollapsibleState.None, {
          description: 'Shuffle Themes',
          iconPath: new vscode.ThemeIcon('sparkle'),
          command: {
            command: 'xeoo-theme.randomTheme',
            title: 'Surprise Me',
          },
          tooltip: 'Switch to an unexpected, freshly curated Xeoo palette.',
        }),
        new XeooTreeItem('Refresh Studio Dashboard', vscode.TreeItemCollapsibleState.None, {
          description: 'Sync Status',
          iconPath: new vscode.ThemeIcon('refresh'),
          command: {
            command: 'xeoo-theme.refresh',
            title: 'Refresh Dashboard',
          },
          tooltip: 'Force refresh the studio sidebar tree data.',
        }),
      ];
    }

    // =============================================================
    // Sub-Section: Palettes Library (15 Categories)
    // =============================================================
    if (element.subSection === 'paletteLibrary') {
      const categories = Object.keys(CATEGORY_META);

      return categories.map((catKey) => {
        const meta = CATEGORY_META[catKey];
        const themesInCat = palettes.filter((p) => p.category === catKey);
        const hasActiveTheme = themesInCat.some((p) => p.name === currentTheme);

        const item = new XeooTreeItem(
          `${meta.icon}  ${catKey}`,
          hasActiveTheme ? vscode.TreeItemCollapsibleState.Expanded : vscode.TreeItemCollapsibleState.Collapsed,
          {
            description: hasActiveTheme
              ? `✦ ACTIVE (${themesInCat.length} variants)`
              : `(${themesInCat.length} variants) • ${meta.tag}`,
            tooltip: new vscode.MarkdownString(
              `### ${meta.icon} ${catKey} Category\n\n` +
              `* **Style:** ${meta.tag}\n` +
              `* **Atmosphere:** ${meta.desc}\n` +
              `* **Themes:** ${themesInCat.length} Calibrated Variants (Dark, Soft, Light)`
            ),
            iconPath: hasActiveTheme ? new vscode.ThemeIcon('check') : new vscode.ThemeIcon('folder'),
            contextValue: 'categoryItem',
          }
        );
        item.categoryKey = catKey;
        return item;
      });
    }

    // =============================================================
    // Category Level: Variants (Dark, Soft, Light) inside Category
    // =============================================================
    if (element.categoryKey) {
      const themes = palettes.filter((p) => p.category === element.categoryKey);

      return themes.map((theme) => {
        const isActive = currentTheme === theme.name;

        let variantBadge = `[${theme.variant.toUpperCase()}]`;
        if (isActive) {
          variantBadge = `✦ CURRENT ACTIVE`;
        }

        const icon = isActive
          ? new vscode.ThemeIcon('pass-filled')
          : (theme.type === 'light' ? new vscode.ThemeIcon('sun') : (theme.variant === 'Soft' ? new vscode.ThemeIcon('moon') : new vscode.ThemeIcon('symbol-color')));

        const tooltip = new vscode.MarkdownString();
        tooltip.appendMarkdown(`### ✨ ${theme.name}\n\n`);
        tooltip.appendMarkdown(`* **Category:** ${element.categoryKey} (${theme.variant} Edition)\n`);
        tooltip.appendMarkdown(`* **Concept:** ${theme.description}\n`);
        tooltip.appendMarkdown(`* **Type:** ${theme.type === 'light' ? 'Anti-Glare Light Paper' : (theme.variant === 'Soft' ? 'Muted Night Soft' : 'High-Contrast OLED Dark')}\n`);
        tooltip.appendMarkdown(`* **Status:** ${isActive ? 'Currently applied to workspace' : 'Click to apply immediately'}\n`);

        return new XeooTreeItem(
          theme.name,
          vscode.TreeItemCollapsibleState.None,
          {
            description: variantBadge,
            tooltip,
            iconPath: icon,
            command: {
              command: 'xeoo-theme.applyTheme',
              title: 'Apply Theme',
              arguments: [theme.name, theme.variant, element.categoryKey],
            },
            contextValue: 'themeItem',
          }
        );
      });
    }

    return [];
  }
}

/**
 * Switch Theme with Luxurious Feedback Notification
 */
async function applyTheme(themeName, variant, category) {
  try {
    const config = vscode.workspace.getConfiguration('workbench');
    await config.update('colorTheme', themeName, vscode.ConfigurationTarget.Global);

    const action = await vscode.window.showInformationMessage(
      `✨ Xeoo Studio — Activated "${themeName}"! [WCAG AA Calibrated]`,
      '🎨 Quick Palette',
      '🎲 Surprise Me'
    );

    if (action === '🎨 Quick Palette') {
      vscode.commands.executeCommand('xeoo-theme.quickPick');
    } else if (action === '🎲 Surprise Me') {
      vscode.commands.executeCommand('xeoo-theme.randomTheme');
    }
  } catch (err) {
    vscode.window.showErrorMessage(`Failed to switch theme: ${err.message}`);
  }
}

function activate(context) {
  const treeDataProvider = new XeooStudioTreeDataProvider();

  const treeView = vscode.window.createTreeView('xeoo-theme-switcher', {
    treeDataProvider,
    showCollapseAll: true,
  });

  const applyCmd = vscode.commands.registerCommand('xeoo-theme.applyTheme', async (themeName, variant, cat) => {
    if (themeName) {
      await applyTheme(themeName, variant, cat);
    }
  });

  const quickPickCmd = vscode.commands.registerCommand('xeoo-theme.quickPick', async () => {
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');

    const items = palettes.map((p) => {
      const isCur = p.name === currentTheme;
      const catMeta = CATEGORY_META[p.category] || { icon: '🎨' };
      return {
        label: isCur ? `✦ ${p.name}` : `${catMeta.icon} ${p.name}`,
        description: `[${p.category} • ${p.variant.toUpperCase()}]`,
        detail: p.description,
        themeName: p.name,
        variant: p.variant,
        category: p.category,
      };
    });

    const selected = await vscode.window.showQuickPick(items, {
      placeHolder: '🔍 Search among all 43 Xeoo Studio Color Palettes...',
      matchOnDescription: true,
      matchOnDetail: true,
    });

    if (selected && selected.themeName) {
      await applyTheme(selected.themeName, selected.variant, selected.category);
    }
  });

  const randomCmd = vscode.commands.registerCommand('xeoo-theme.randomTheme', async () => {
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');
    const available = palettes.filter((p) => p.name !== currentTheme);
    const pick = available[Math.floor(Math.random() * available.length)];

    if (pick) {
      await applyTheme(pick.name, pick.variant, pick.category);
    }
  });

  const refreshCmd = vscode.commands.registerCommand('xeoo-theme.refresh', () => {
    treeDataProvider.refresh();
  });

  const infoCmd = vscode.commands.registerCommand('xeoo-theme.showInfo', () => {
    vscode.window.showInformationMessage(
      `Xeoo Theme Studio v${EXTENSION_VERSION} — 43 calibrated themes, auto inline-HTML detection, and Tailwind CSS highlighting.`,
      '🎨 Browse Themes'
    ).then((choice) => {
      if (choice === '🎨 Browse Themes') {
        vscode.commands.executeCommand('xeoo-theme.quickPick');
      }
    });
  });

  context.subscriptions.push(treeView, applyCmd, quickPickCmd, randomCmd, refreshCmd, infoCmd);
  console.log(`✨ [Xeoo Theme Studio] v${EXTENSION_VERSION} Activated!`);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
