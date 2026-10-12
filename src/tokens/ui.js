/**
 * Xeoo Theme Suite - Universal Workbench UI Generator
 * Generates 180+ tokens with unmistakable visual distinction between:
 * - Header (Title Bar)
 * - Sidebar (File Explorer / Primary Side Bar)
 * - Editor Canvas (Main Workspace)
 * - Footer (Status Bar with signature theme color)
 * - Tabs & Floating Overlays
 */

function generateWorkbenchColors(themeConfig) {
  const { neutral, footer, accent, syntax, type = 'dark' } = themeConfig;
  const isLight = type === 'light';

  // Derived ANSI colors for integrated terminal
  const terminal = {
    black: isLight ? '#0f172a' : neutral.bgHeader,
    red: syntax.keyword || accent.primary,
    green: syntax.string || '#10b981',
    yellow: syntax.number || '#f59e0b',
    blue: syntax.func || '#3b82f6',
    magenta: syntax.parameter || accent.primary,
    cyan: syntax.operator || '#06b6d4',
    white: isLight ? '#f8fafc' : neutral.fgBright,
    brightBlack: neutral.fgMuted,
    brightRed: accent.hover || syntax.keyword,
    brightGreen: syntax.string || '#34d399',
    brightYellow: syntax.type || '#facc15',
    brightBlue: syntax.method || syntax.func,
    brightMagenta: accent.primary,
    brightCyan: syntax.operator,
    brightWhite: isLight ? '#020617' : '#ffffff',
  };

  // Status indicators
  const status = {
    info: isLight ? '#0284c7' : '#38bdf8',
    success: isLight ? '#16a34a' : '#22c55e',
    warning: isLight ? '#d97706' : '#f59e0b',
    error: isLight ? '#dc2626' : '#f43f5e',
    gitAdded: isLight ? '#16a34a' : '#4ade80',
    gitModified: isLight ? '#0284c7' : '#38bdf8',
    gitDeleted: isLight ? '#dc2626' : '#f43f5e',
    gitUntracked: isLight ? '#15803d' : '#a3e635',
    gitIgnored: neutral.fgMuted,
  };

  return {
    // -------------------------------------------------------------
    // Base & Global
    // -------------------------------------------------------------
    'focusBorder': accent.primary,
    'foreground': neutral.fgDefault,
    'descriptionForeground': neutral.fgMuted,
    'errorForeground': status.error,
    'selection.background': accent.selection,
    'widget.shadow': isLight ? '#00000015' : '#00000077',
    'sash.hoverBorder': accent.primary,

    // -------------------------------------------------------------
    // 1. HEADER (Title Bar) - Anchoring Top Level
    // -------------------------------------------------------------
    'titleBar.activeBackground': neutral.bgHeader,
    'titleBar.activeForeground': neutral.fgBright,
    'titleBar.inactiveBackground': neutral.bgHeader,
    'titleBar.inactiveForeground': neutral.fgMuted,
    'titleBar.border': neutral.borderSubtle,

    // -------------------------------------------------------------
    // 2. ACTIVITY BAR - Accent Hub
    // -------------------------------------------------------------
    'activityBar.background': neutral.bgHeader,
    'activityBar.foreground': accent.primary,
    'activityBar.inactiveForeground': neutral.fgMuted,
    'activityBar.border': neutral.borderSubtle,
    'activityBarBadge.background': accent.primary,
    'activityBarBadge.foreground': '#ffffff',
    'activityBar.activeBorder': accent.primary,
    'activityBar.activeBackground': `${accent.primary}18`,

    // -------------------------------------------------------------
    // 3. SIDEBAR - Distinct Tone from Editor & Titlebar
    // -------------------------------------------------------------
    'sideBar.background': neutral.bgSidebar,
    'sideBar.foreground': neutral.fgDefault,
    'sideBar.border': neutral.borderSubtle,
    'sideBarTitle.foreground': neutral.fgBright,
    'sideBarSectionHeader.background': neutral.bgHeader,
    'sideBarSectionHeader.foreground': neutral.fgBright,
    'sideBarSectionHeader.border': neutral.borderSubtle,

    // -------------------------------------------------------------
    // 4. EDITOR CANVAS - The Main Workspace
    // -------------------------------------------------------------
    'editor.background': neutral.bgBase,
    'editor.foreground': neutral.fgDefault,
    'editorLineNumber.foreground': `${neutral.fgMuted}88`,
    'editorLineNumber.activeForeground': accent.primary,
    'editorCursor.foreground': accent.primary,
    'editor.selectionBackground': accent.selection,
    'editor.selectionHighlightBackground': `${accent.primary}25`,
    'editor.inactiveSelectionBackground': `${accent.selection}77`,
    'editor.wordHighlightBackground': `${accent.primary}20`,
    'editor.wordHighlightStrongBackground': `${accent.primary}35`,
    'editor.findMatchBackground': `${accent.primary}66`,
    'editor.findMatchHighlightBackground': `${accent.primary}30`,
    'editor.findRangeHighlightBackground': `${neutral.bgHighlight}66`,
    'editor.hoverHighlightBackground': `${accent.primary}18`,
    'editor.lineHighlightBackground': neutral.bgHighlight,
    'editor.lineHighlightBorder': '#00000000',
    'editorLink.activeForeground': accent.hover || accent.primary,
    'editorWhitespace.foreground': `${neutral.fgMuted}33`,
    'editorIndentGuide.background1': `${neutral.borderSubtle}bb`,
    'editorIndentGuide.activeBackground1': accent.primary,
    'editorRuler.foreground': neutral.borderSubtle,
    'editorCodeLens.foreground': neutral.fgMuted,
    'editorBracketMatch.background': `${accent.primary}22`,
    'editorBracketMatch.border': accent.primary,

    // Bracket Pair Rainbow Highlights
    'editorBracketHighlight.foreground1': accent.primary,
    'editorBracketHighlight.foreground2': syntax.func,
    'editorBracketHighlight.foreground3': syntax.type || '#f59e0b',
    'editorBracketHighlight.foreground4': syntax.string,
    'editorBracketHighlight.foreground5': syntax.parameter || '#c084fc',
    'editorBracketHighlight.foreground6': syntax.operator || '#38bdf8',

    // -------------------------------------------------------------
    // 5. TABS & EDITOR GROUPS - Clear Tab Separation
    // -------------------------------------------------------------
    'editorGroupHeader.tabsBackground': neutral.bgHeader,
    'editorGroupHeader.tabsBorder': neutral.borderSubtle,
    'editorGroup.border': neutral.borderSubtle,
    'tab.activeBackground': neutral.bgBase,
    'tab.activeForeground': neutral.fgBright,
    'tab.activeBorder': '#00000000',
    'tab.activeBorderTop': accent.primary,
    'tab.inactiveBackground': neutral.bgHeader,
    'tab.inactiveForeground': neutral.fgMuted,
    'tab.border': neutral.borderSubtle,
    'tab.hoverBackground': neutral.bgHighlight,
    'tab.hoverForeground': neutral.fgBright,
    'tab.unfocusedActiveForeground': neutral.fgDefault,
    'tab.unfocusedInactiveForeground': `${neutral.fgMuted}aa`,

    // -------------------------------------------------------------
    // 6. FOOTER (Status Bar) - Unmistakable Theme Identity
    // -------------------------------------------------------------
    'statusBar.background': footer.bg,
    'statusBar.foreground': footer.fg,
    'statusBar.border': neutral.borderSubtle,
    'statusBar.debuggingBackground': '#7c2d12',
    'statusBar.debuggingForeground': '#ffffff',
    'statusBar.noFolderBackground': footer.bg,
    'statusBarItem.hoverBackground': '#ffffff25',
    'statusBarItem.activeBackground': '#ffffff35',
    'statusBarItem.remoteBackground': accent.primary,
    'statusBarItem.remoteForeground': '#ffffff',
    'statusBarItem.prominentBackground': '#00000033',

    // -------------------------------------------------------------
    // 7. BREADCRUMBS
    // -------------------------------------------------------------
    'breadcrumb.background': neutral.bgBase,
    'breadcrumb.foreground': neutral.fgMuted,
    'breadcrumb.focusForeground': neutral.fgBright,
    'breadcrumb.activeSelectionForeground': accent.primary,
    'breadcrumbPicker.background': neutral.bgElevated,

    // -------------------------------------------------------------
    // 8. LISTS & TREES (File Tree, Explorer, Quick Open)
    // -------------------------------------------------------------
    'list.activeSelectionBackground': isLight ? `${accent.primary}25` : `${accent.primary}40`,
    'list.activeSelectionForeground': isLight ? neutral.fgBright : '#ffffff',
    'list.inactiveSelectionBackground': isLight ? `${accent.primary}15` : `${accent.primary}22`,
    'list.inactiveSelectionForeground': neutral.fgBright,
    'list.hoverBackground': neutral.bgHighlight,
    'list.hoverForeground': neutral.fgBright,
    'list.focusBackground': isLight ? `${accent.primary}20` : `${accent.primary}30`,
    'list.focusForeground': neutral.fgBright,
    'list.highlightForeground': accent.primary,
    'list.dropBackground': `${accent.primary}33`,
    'tree.indentGuidesStroke': neutral.borderSubtle,

    // -------------------------------------------------------------
    // 9. INPUTS, DROPDOWNS & BUTTONS
    // -------------------------------------------------------------
    'input.background': neutral.bgElevated,
    'input.foreground': neutral.fgBright,
    'input.border': neutral.borderSubtle,
    'input.placeholderForeground': neutral.fgMuted,
    'inputOption.activeBorder': accent.primary,
    'inputOption.activeBackground': `${accent.primary}22`,
    'inputValidation.infoBackground': neutral.bgElevated,
    'inputValidation.infoBorder': status.info,
    'inputValidation.warningBackground': neutral.bgElevated,
    'inputValidation.warningBorder': status.warning,
    'inputValidation.errorBackground': neutral.bgElevated,
    'inputValidation.errorBorder': status.error,

    'dropdown.background': neutral.bgElevated,
    'dropdown.foreground': neutral.fgBright,
    'dropdown.border': neutral.borderSubtle,

    'button.background': accent.primary,
    'button.foreground': '#ffffff',
    'button.hoverBackground': accent.hover || accent.primary,
    'button.secondaryBackground': neutral.bgElevated,
    'button.secondaryForeground': neutral.fgBright,
    'button.secondaryHoverBackground': neutral.bgHighlight,

    // -------------------------------------------------------------
    // 10. BADGES & PROGRESS
    // -------------------------------------------------------------
    'badge.background': accent.primary,
    'badge.foreground': '#ffffff',
    'progressBar.background': accent.primary,

    // -------------------------------------------------------------
    // 11. COMMAND PALETTE & NOTIFICATIONS
    // -------------------------------------------------------------
    'quickInput.background': neutral.bgElevated,
    'quickInput.foreground': neutral.fgBright,
    'pickerGroup.border': neutral.borderSubtle,
    'pickerGroup.foreground': accent.primary,

    'notificationCenterHeader.background': neutral.bgElevated,
    'notificationCenterHeader.foreground': neutral.fgBright,
    'notifications.background': neutral.bgElevated,
    'notifications.foreground': neutral.fgDefault,
    'notifications.border': neutral.borderStrong,
    'notificationToast.border': accent.primary,

    'peekView.border': accent.primary,
    'peekViewEditor.background': neutral.bgSidebar,
    'peekViewEditorGutter.background': neutral.bgSidebar,
    'peekViewResult.background': neutral.bgElevated,
    'peekViewResult.fileForeground': neutral.fgBright,
    'peekViewResult.lineForeground': neutral.fgMuted,
    'peekViewResult.matchHighlightBackground': `${accent.primary}44`,
    'peekViewResult.selectionBackground': `${accent.primary}33`,

    // -------------------------------------------------------------
    // 12. GIT & VERSION CONTROL
    // -------------------------------------------------------------
    'gitDecoration.addedResourceForeground': status.gitAdded,
    'gitDecoration.modifiedResourceForeground': status.gitModified,
    'gitDecoration.deletedResourceForeground': status.gitDeleted,
    'gitDecoration.untrackedResourceForeground': status.gitUntracked,
    'gitDecoration.ignoredResourceForeground': status.gitIgnored,
    'gitDecoration.conflictingResourceForeground': status.warning,
    'gitDecoration.submoduleResourceForeground': neutral.fgMuted,

    'editorGutter.addedBackground': status.gitAdded,
    'editorGutter.modifiedBackground': status.gitModified,
    'editorGutter.deletedBackground': status.gitDeleted,

    'diffEditor.insertedTextBackground': `${status.gitAdded}22`,
    'diffEditor.removedTextBackground': `${status.gitDeleted}22`,

    // -------------------------------------------------------------
    // 13. SCROLLBAR & MINIMAP
    // -------------------------------------------------------------
    'scrollbar.shadow': isLight ? '#00000010' : '#00000044',
    'scrollbarSlider.background': `${neutral.fgMuted}22`,
    'scrollbarSlider.hoverBackground': `${neutral.fgMuted}40`,
    'scrollbarSlider.activeBackground': `${accent.primary}55`,
    'minimap.selectionHighlight': `${accent.primary}66`,
    'minimap.findMatchHighlight': `${accent.primary}88`,
    'minimapGutter.addedBackground': status.gitAdded,
    'minimapGutter.modifiedBackground': status.gitModified,
    'minimapGutter.deletedBackground': status.gitDeleted,

    // -------------------------------------------------------------
    // 14. INTEGRATED TERMINAL
    // -------------------------------------------------------------
    'terminal.background': neutral.bgBase,
    'terminal.foreground': neutral.fgDefault,
    'terminalCursor.foreground': accent.primary,
    'terminal.selectionBackground': accent.selection,
    'terminal.ansiBlack': terminal.black,
    'terminal.ansiRed': terminal.red,
    'terminal.ansiGreen': terminal.green,
    'terminal.ansiYellow': terminal.yellow,
    'terminal.ansiBlue': terminal.blue,
    'terminal.ansiMagenta': terminal.magenta,
    'terminal.ansiCyan': terminal.cyan,
    'terminal.ansiWhite': terminal.white,
    'terminal.ansiBrightBlack': terminal.brightBlack,
    'terminal.ansiBrightRed': terminal.brightRed,
    'terminal.ansiBrightGreen': terminal.brightGreen,
    'terminal.ansiBrightYellow': terminal.brightYellow,
    'terminal.ansiBrightBlue': terminal.brightBlue,
    'terminal.ansiBrightMagenta': terminal.brightMagenta,
    'terminal.ansiBrightCyan': terminal.brightCyan,
    'terminal.ansiBrightWhite': terminal.brightWhite,
  };
}

module.exports = { generateWorkbenchColors };
