/**
 * Xeoo Theme Suite - Interactive Sidebar Extension
 * Provides a dedicated Activity Bar Sidebar for one-click theme switching,
 * live previewing, quick pick palettes, and category navigation.
 */

const vscode = require('vscode');
const { palettes } = require('./tokens/palettes');

class XeooThemeTreeItem extends vscode.TreeItem {
  constructor(label, collapsibleState, options = {}) {
    super(label, collapsibleState);
    if (options.description) this.description = options.description;
    if (options.tooltip) this.tooltip = options.tooltip;
    if (options.command) this.command = options.command;
    if (options.iconPath) this.iconPath = options.iconPath;
    if (options.contextValue) this.contextValue = options.contextValue;
  }
}

class XeooThemeTreeDataProvider {
  constructor() {
    this._onDidChangeTreeData = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;

    // Listen to workbench theme changes to update active checkmark in sidebar
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

    // Root level: Group by category
    if (!element) {
      const categories = [
        { name: 'Crimson & Ruby', icon: 'heart', badge: 'Signature' },
        { name: 'Cyber & Neon', icon: 'zap', badge: 'High-Tech' },
        { name: 'Ocean & Water', icon: 'symbol-water', badge: 'Cool' },
        { name: 'Earth & Forest', icon: 'symbol-leaf', badge: 'Organic' },
        { name: 'Minimalist & Slate', icon: 'circle-filled', badge: 'Clean' },
        { name: 'Light & Paper', icon: 'sun', badge: 'Anti-Glare' },
      ];

      return categories.map((cat) => {
        const count = palettes.filter((p) => p.category === cat.name).length;
        const item = new XeooThemeTreeItem(
          cat.name,
          vscode.TreeItemCollapsibleState.Expanded,
          {
            description: `(${count} themes)`,
            tooltip: `Category: ${cat.name} (${cat.badge})`,
            iconPath: new vscode.ThemeIcon(cat.icon || 'paintcan'),
            contextValue: 'category',
          }
        );
        item.categoryName = cat.name;
        return item;
      });
    }

    // Children level: Themes inside category
    if (element.categoryName) {
      const themesInCategory = palettes.filter((p) => p.category === element.categoryName);

      return themesInCategory.map((theme) => {
        const isActive = currentTheme === theme.name;
        const iconName = isActive ? 'check' : (theme.type === 'light' ? 'sun' : 'symbol-color');

        return new XeooThemeTreeItem(
          theme.name,
          vscode.TreeItemCollapsibleState.None,
          {
            description: isActive ? '✓ ACTIVE' : (theme.type === 'light' ? 'Light' : 'Dark'),
            tooltip: `${theme.name}\n${theme.description}\nType: ${theme.type.toUpperCase()}`,
            iconPath: new vscode.ThemeIcon(iconName),
            command: {
              command: 'xeoo-theme.applyTheme',
              title: 'Apply Theme',
              arguments: [theme.name],
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
 * Apply theme to VS Code workbench configuration
 */
async function applyTheme(themeName) {
  try {
    const config = vscode.workspace.getConfiguration('workbench');
    await config.update('colorTheme', themeName, vscode.ConfigurationTarget.Global);
    vscode.window.showInformationMessage(`✨ Switched to "${themeName}"!`);
  } catch (err) {
    vscode.window.showErrorMessage(`Failed to switch theme: ${err.message}`);
  }
}

/**
 * Extension Activation Entrypoint
 */
function activate(context) {
  const treeDataProvider = new XeooThemeTreeDataProvider();
  
  // Register Sidebar TreeView
  const treeView = vscode.window.createTreeView('xeoo-theme-switcher', {
    treeDataProvider,
    showCollapseAll: true,
  });

  // Command: Apply Theme directly
  const applyThemeCmd = vscode.commands.registerCommand('xeoo-theme.applyTheme', async (themeName) => {
    if (themeName) {
      await applyTheme(themeName);
    }
  });

  // Command: QuickPick Palette Picker
  const quickPickCmd = vscode.commands.registerCommand('xeoo-theme.quickPick', async () => {
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');
    const items = palettes.map((p) => ({
      label: p.name === currentTheme ? `$(check) ${p.name}` : `$(color-mode) ${p.name}`,
      description: `[${p.category}] • ${p.type.toUpperCase()}`,
      detail: p.description,
      themeName: p.name,
    }));

    const selected = await vscode.window.showQuickPick(items, {
      placeHolder: 'Select a Xeoo Theme variant to apply...',
      matchOnDescription: true,
      matchOnDetail: true,
    });

    if (selected && selected.themeName) {
      await applyTheme(selected.themeName);
    }
  });

  // Command: Random Theme (Surprise Me!)
  const randomThemeCmd = vscode.commands.registerCommand('xeoo-theme.randomTheme', async () => {
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');
    const otherThemes = palettes.filter((p) => p.name !== currentTheme);
    const randomPick = otherThemes[Math.floor(Math.random() * otherThemes.length)];

    if (randomPick) {
      await applyTheme(randomPick.name);
    }
  });

  context.subscriptions.push(treeView, applyThemeCmd, quickPickCmd, randomThemeCmd);
  console.log('✨ [Xeoo Theme] Sidebar Studio activated successfully!');
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

