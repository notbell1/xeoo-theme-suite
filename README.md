# ZX Theme 🍎

A sophisticated, modern dark theme featuring **Fresh Deep Crimson** accents. Engineered with strict visual hierarchy and WCAG-compliant contrast for developers in **PHP, Laravel, Luau, JavaScript, and TypeScript**.

---

## 🎨 Themes Included

| Variant | Base Background | Accent Personality | Description |
| :--- | :--- | :--- | :--- |
| **ZX Theme** | `#121215` (Obsidian Charcoal) | `#f43f5e` (Crimson Rose) | **Flagship**. Soft on the eyes for 10+ hour coding sessions with refined depth. |
| **ZX Theme (Midnight)** | `#09090b` (True OLED Black) | `#ff3366` (Neon Crimson) | **High Contrast**. Pitch-black background engineered for OLED displays. |

---

## ✨ Design Principles & UI/UX Highlights

- **Visual Depth & Elevation Hierarchy**: Distinct background steps for Base Editor (`#121215`), Receded Panels/Sidebar (`#0e0e11`), and Floating Surfaces (`#18181d`).
- **Balanced Crimson Accents**: Replaced harsh raw red (`#ff0000`) with modern, eye-friendly Crimson & Ruby scales (`#f43f5e`, `#be123c`, `#881337`).
- **Readable Syntax Contrast (WCAG AA)**:
  - **Keywords & Control**: Crimson Coral (`#ff4d6d`)
  - **Functions & Methods**: Sky Blue (`#60a5fa`)
  - **Strings**: Soft Emerald Mint (`#4ade80`) — no more eye-fatiguing electric green!
  - **Numbers & Constants**: Warm Tangerine Orange (`#fb923c`) — high contrast and instant legibility.
  - **Types & Classes**: Amber Yellow (`#fbbf24`)
  - **Variables**: Clean Ice White (`#f1f5f9`)
  - **Comments**: Slate Grey (`#64748b`) with italic styling
- **Full Workbench Coverage**: Over 180 styled UI elements including Editor, Tabs, Activity Bar, Breadcrumbs, Status Bar, Terminal, Git Gutter, Notifications, and Command Palette.
- **Modern Semantic Tokens**: Supports modern VS Code Language Server Protocol (LSP) semantic token highlighting.

---

## 🏗 Modular Project Architecture

This project is built with a scalable **Design Token System** to make maintenance and future development seamless:

```text
zx-theme/
├── package.json
├── src/
│   ├── build.js                 # Automated build script (npm run build / watch)
│   ├── tokens/
│   │   ├── palette.js           # Core color palette & design tokens (SSOT)
│   │   └── ui.js                # VS Code Workbench UI color definitions
│   ├── syntax/
│   │   ├── textmate.js          # TextMate syntax scopes (PHP, Luau, JS, HTML, CSS, etc.)
│   │   └── semantic.js          # Modern VS Code semantic LSP highlights
│   └── themes/
│       ├── zx-theme.js          # Flagship Theme Generator
│       └── zx-theme-midnight.js # Midnight OLED Variant Generator
└── themes/
    ├── zx-theme-color-theme.json          # Compiled Theme
    └── zx-theme-midnight-color-theme.json # Compiled Variant
```

---

## 🛠 Development & Maintenance Workflow

### 1. Build the Themes
To compile the theme JSON files from source tokens:
```bash
npm run build
```

### 2. Live Watch Mode (Hot Reloading)
To automatically recompile whenever you edit tokens or syntax in `src/`:
```bash
npm run watch
```

### 3. Test in VS Code (Extension Development Host)
1. Press `F5` in VS Code to open a new **Extension Development Host** window.
2. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Select **Preferences: Color Theme** and choose **ZX Theme** or **ZX Theme (Midnight)**.

### 4. Package Extension
To package the extension into a `.vsix` file:
```bash
npm run package
```

---

## 📝 License

Distributed under the [MIT License](LICENSE). Developed with ❤️ by **ZXMARCHIA**.
