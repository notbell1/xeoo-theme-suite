/**
 * Xeoo Theme Suite - Luxurious Studio Extension
 * Provides an elite Activity Bar Sidebar with 15 Color Categories,
 * distinct Dark/Soft/Light variants, active badges, and quick controls.
 */

const vscode = require('vscode');
const { palettes } = require('./tokens/palettes');

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

    // Root Level: The 15 Curated Color Categories
    if (!element) {
      const categories = Object.keys(CATEGORY_META);

      return categories.map((catKey) => {
        const meta = CATEGORY_META[catKey];
        const themesInCat = palettes.filter((p) => p.category === catKey);
        const hasActiveTheme = themesInCat.some((p) => p.name === currentTheme);

        const item = new XeooTreeItem(
          `${meta.icon}  ${catKey}`,
          hasActiveTheme ? vscode.TreeItemCollapsibleState.Expanded : vscode.TreeItemCollapsibleState.Collapsed,
          {
            description: hasActiveTheme ? `(✦ ACTIVE) • ${meta.tag}` : `(${themesInCat.length} variants) • ${meta.tag}`,
            tooltip: new vscode.MarkdownString(`### ${meta.icon} ${catKey} Category\n\n* **Style:** ${meta.tag}\n* **Atmosphere:** ${meta.desc}\n* **Themes:** ${themesInCat.length} Calibrated Variants`),
            iconPath: hasActiveTheme ? new vscode.ThemeIcon('circle-filled') : new vscode.ThemeIcon('folder'),
            contextValue: 'category',
          }
        );
        item.categoryKey = catKey;
        return item;
      });
    }

    // Children Level: Variants (Dark, Soft, Light) inside category
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
          : (theme.type === 'light' ? new vscode.ThemeIcon('sun') : new vscode.ThemeIcon('symbol-color'));

        const tooltip = new vscode.MarkdownString();
        tooltip.appendMarkdown(`### ✨ ${theme.name}\n\n`);
        tooltip.appendMarkdown(`* **Category:** ${element.categoryKey} (${theme.variant} Edition)\n`);
        tooltip.appendMarkdown(`* **Concept:** ${theme.description}\n`);
        tooltip.appendMarkdown(`* **Mode:** ${theme.type === 'light' ? 'Anti-Glare Light Paper' : 'Deep Contrast Dark'}\n`);
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

  context.subscriptions.push(treeView, applyCmd, quickPickCmd, randomCmd);
  console.log('✨ [Xeoo Theme Studio] Activated with 15 categories and 43 themes!');
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
