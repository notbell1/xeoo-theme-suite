<div align="center">

  <p align="center">
    <img src="https://raw.githubusercontent.com/notbell1/xeoo-theme-suite/main/assets/xeoo-icon.png" alt="Xeoo Theme Icon" width="84" height="84" style="margin-bottom: 6px;" />
  </p>

  <h1>✨ XEOO THEME SUITE ✨</h1>

  <p align="center">
    <strong>VS Code Theme Studio: 15 Master Color Categories &bull; 43 Variations (Dark, Soft, Light)</strong><br/>
    <em>Full UI Elevation (Distinct Header, Sidebar, Editor &amp; Footer) &bull; Zero Eye-Strain &bull; 1-Click Studio Switcher</em>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Version-2.2.2-f43f5e?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="Version 2.2.2" />
    <img src="https://img.shields.io/badge/Publisher-NTTBELL-10b981?style=for-the-badge&logo=github&logoColor=white" alt="Publisher NTTBELL" />
    <img src="https://img.shields.io/badge/Colors-15%20Categories-a855f7?style=for-the-badge&logo=artstation&logoColor=white" alt="15 Categories" />
    <img src="https://img.shields.io/badge/Total%20Themes-43%20Choices-00f5ff?style=for-the-badge&logo=palette&logoColor=white" alt="43 Themes" />
    <img src="https://img.shields.io/badge/Contrast-WCAG%20AA%20Compliant-22c55e?style=for-the-badge&logo=checkmarx&logoColor=white" alt="WCAG AA" />
    <img src="https://img.shields.io/badge/Security-100%25%20Safe%20%7C%20No%20Malware-10b981?style=for-the-badge&logo=shield&logoColor=white" alt="100% Safe" />
  </p>

  <br/>

</div>

---

## ⚡ What Makes Xeoo Theme Different?

> **"Not Just Syntax — Your Entire VS Code Workspace Transforms!"**

Unlike conventional themes that only recolor editor syntax, **Xeoo Theme** meticulously redesigns the entire visual hierarchy of VS Code. Every major workbench zone is distinct, purposeful, and calibrated for long hours of coding:

* 🧭 **Header (Title Bar)**: A solid anchor color at the top separating the VS Code window from the desktop background.
* 📁 **Sidebar (Explorer)**: A dedicated backdrop with crisp bordering, creating an unmistakable boundary between file trees and the active code canvas.
* 📝 **Editor Canvas**: A clean, balanced canvas with scientifically calibrated contrast (**WCAG AA 4.5:1 ~ 14:1**), razor-sharp typography, and zero harsh glare.
* 📊 **Footer (Status Bar)**: Displays the signature accent of the active theme family with high-contrast text and active status indicators.

---

## 🛡️ Security & Privacy Guarantee (100% Safe & Verified)

> [!IMPORTANT]
> **This extension is 100% Clean, Free of Malware/Telemetry, and Completely Safe.**
> The entire codebase is open-source, fully transparent, and can be audited by anyone.

For developers installing this extension offline from a `.vsix` package:

| Security Parameter | Status | Technical Verification & Details |
| :--- | :---: | :--- |
| 🛡 **Zero Third-Party Dependencies** | 🟢 **100% Clean** | Contains **zero external npm libraries** (`dependencies: {}`). Free from supply-chain risks or third-party vulnerabilities. |
| 🌐 **Offline Native & Zero Telemetry** | 🟢 **Pure Offline** | **Zero network activity**. No `fetch`, `http`, `axios`, or tracking pings. Your code and workspace stay entirely private. |
| 📄 **No Binary Executables** | 🟢 **Pure Plaintext** | Contains no `.exe`, `.dll`, `.bat`, or compiled binaries. 100% of the codebase consists of JSON color tokens and standard VS Code JavaScript APIs. |
| 🔒 **Sandboxed Execution** | 🟢 **Non-Intrusive** | Runs strictly within VS Code's theme configuration scope (`vscode.workspace.getConfiguration('workbench').update`). It has zero permissions to read, edit, or delete external project files. |
| 🔍 **Transparent `.vsix` Package** | 🟢 **User-Auditable** | The `.vsix` installer is a standard ZIP archive. You can rename `xeoo-theme-2.2.2.vsix` to `xeoo-theme-2.2.2.zip` and inspect every line of code inside. |

---

## 🚀 Installation Guide

> [!NOTE]
> You can install Xeoo Theme directly using the included `.vsix` installer or via the developer workflow:

<br/>

### 🌟 Method 1: Install VSIX via VS Code UI (Recommended)

```
[ Open VS Code ] ➔ [ Extensions (Ctrl+Shift+X) ] ➔ [ Click "..." menu (top right) ] ➔ [ Install from VSIX... ]
```

<details open>
<summary><b>👉 Step-by-Step Instructions</b></summary>
<br/>

1. Open **Visual Studio Code**.
2. Open the Extensions sidebar with **`Ctrl + Shift + X`** (or **`Cmd + Shift + X`** on macOS).
3. Click the **three dots (`...`)** (*Views and More Actions*) in the top-right corner of the Extensions view.
4. Select **`Install from VSIX...`**.
5. Pick the **`xeoo-theme-2.2.2.vsix`** file located in this repository folder and click **Install**.
6. **Done! 🎉** The Xeoo Studio icon will appear on your left **Activity Bar**.

> 💡 **Quick Terminal Install:**
> ```bash
> code --install-extension xeoo-theme-2.2.2.vsix
> ```

</details>

<br/>

### 📂 Method 2: Manual Directory Copy

<details>
<summary><b>👉 Step-by-Step Manual Copy</b></summary>
<br/>

Copy this entire project folder into your VS Code extensions directory:

* 🪟 **Windows**: `%USERPROFILE%\.vscode\extensions\xeoo-theme`
* 🍎 **macOS**: `~/.vscode/extensions/xeoo-theme`
* 🐧 **Linux**: `~/.vscode/extensions/xeoo-theme`

Restart VS Code after copying.

</details>

<br/>

### 🧪 Method 3: Developer Host Mode (F5)

<details>
<summary><b>👉 Development Host Launch</b></summary>
<br/>

1. Open this repository folder in VS Code.
2. Press **`F5`** to launch an **Extension Development Host** window.
3. All 43 themes and the Studio Sidebar will be loaded live!

</details>

---

## 🎮 Using the Xeoo Studio Activity Bar

1. **Open Studio**: Click the Xeoo icon on the left **Activity Bar**.
2. **System Header**: Displays **Xeoo Theme Suite** and active engine version (`v2.2.2`). Click to view suite diagnostics.
3. **Current Active Status**: Highlights which theme is currently applied to your workspace with a prominent badge.
4. **Quick Controls**:
   - 🔍 **Search All Palettes**: Opens the instant fuzzy-picker modal (`xeoo-theme.quickPick`).
   - 🎲 **Surprise Me!**: Selects an aesthetic random theme from all 43 options.
   - 🔄 **Synchronize Dashboard**: Refreshes workspace theme tracking state.
5. **Theme Palettes Library**: Browse all 15 color families, each containing calibrated **Dark**, **Soft**, and **Light** variants.
6. **1-Click Switch**: Click any theme to apply it instantly without restarting VS Code.

---

## 🎨 The 15 Master Color Categories (43 Themes)

Every color category features 3 scientifically tuned variants:
* **Dark**: Deep, rich obsidian backgrounds with vibrant accents — ideal for dark rooms and maximum syntax focus.
* **Soft**: Muted pastel tones and gentle slate backgrounds — designed for fatigue-free marathon coding sessions.
* **Light**: Anti-glare paper finishes with rich, deep sumi ink contrast — ideal for bright daylight environments.

<details open>
<summary><b>🔴 1. Red — Crimson &amp; Ruby</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Red Dark** | Dark | Obsidian Crimson | `#be123c` | `#f43f5e` | Energetic, high-impact crimson flagship. |
| **Xeoo Red Soft** | Soft | Muted Rosé Slate | `#2b1b20` | `#fb7185` | Gentle pastel rosé tones for late-night sessions. |
| **Xeoo Red Light** | Light | Porcelain White | `#be123c` | `#e11d48` | Warm porcelain paper with dense ruby ink. |

</details>

<details>
<summary><b>🟢 2. Green — Emerald &amp; Sage</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Green Dark** | Dark | Deep Pine Green | `#15803d` | `#22c55e` | Lush emerald matrix; crisp, refreshing, and calming. |
| **Xeoo Green Soft** | Soft | Herbal Sage Slate | `#1f2d24` | `#4ade80` | Muted herbal sage slate; easy on tired eyes. |
| **Xeoo Green Light** | Light | Cream Herbal Paper | `#166534` | `#15803d` | Natural herbal parchment with deep pine ink. |

</details>

<details>
<summary><b>🔵 3. Blue — Sapphire &amp; Cobalt</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Blue Dark** | Dark | Abyssal Royal Navy | `#1d4ed8` | `#3b82f6` | Royal sapphire navy with razor-sharp contrast. |
| **Xeoo Blue Soft** | Soft | Denim Polar Slate | `#1c263c` | `#60a5fa` | Tranquil denim slate maintaining deep focus. |
| **Xeoo Blue Light** | Light | Glacier Mist Paper | `#1d4ed8` | `#2563eb` | Cool glacier mist paper with sharp cobalt ink. |

</details>

<details>
<summary><b>🟡 4. Yellow — Canary &amp; Amber</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Yellow Dark** | Dark | Dark Umber Slate | `#b45309` | `#eab308` | High-contrast canary yellow over dark umber. |
| **Xeoo Yellow Soft** | Soft | Honeycomb Slate | `#2f2819` | `#facc15` | Warm honeycomb slate; gentle and relaxing. |
| **Xeoo Yellow Light** | Light | Butter Parchment | `#d97706` | `#ca8a04` | Warm butter parchment with rich ochre ink. |

</details>

<details>
<summary><b>⚫ 5. Black — OLED &amp; Obsidian</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Black OLED** | Dark | True Black `#000000` | `#141414` | `#ffffff` | Absolute true black designed specifically for OLED displays. |
| **Xeoo Black Soft** | Soft | Matte Obsidian | `#222226` | `#e2e8f0` | Matte obsidian charcoal; balanced and understated. |

</details>

<details>
<summary><b>⚪ 6. White — Paper &amp; Alabaster (Anti-Glare)</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo White Paper** | Light | Japanese Parchment | `#292524` | `#44403c` | Glare-free warm parchment with dense sumi ink. |
| **Xeoo White Soft** | Soft | Alabaster Slate | `#334155` | `#475569` | Cool alabaster slate with muted contrast. |

</details>

<details>
<summary><b>🟣 7. Purple — Amethyst &amp; Twilight</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Purple Dark** | Dark | Deep Twilight | `#7e22ce` | `#a855f7` | Luminous amethyst purple with a mystical aura. |
| **Xeoo Purple Soft** | Soft | Lavender Night | `#2a1f3c` | `#c084fc` | Calming pastel lavender reducing cognitive fatigue. |
| **Xeoo Purple Light** | Light | Lilac Cream Paper | `#6b21a8` | `#7e22ce` | Soft lilac porcelain with royal purple ink. |

</details>

<details>
<summary><b>🟠 8. Orange — Ember &amp; Terracotta</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Orange Dark** | Dark | Ember Obsidian | `#c2410c` | `#f97316` | Blazing amber embers; warm, focused, and energetic. |
| **Xeoo Orange Soft** | Soft | Terracotta Slate | `#332014` | `#fb923c` | Earthy terracotta warmth; friendly and cozy. |
| **Xeoo Orange Light**| Light | Apricot Paper | `#c2410c` | `#ea580c` | Bright apricot parchment with dark copper ink. |

</details>

<details>
<summary><b>🌸 9. Pink — Sakura &amp; Berry</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Pink Dark** | Dark | Midnight Berry | `#be185d` | `#ec4899` | Modern cyberpunk neon pink against dark berry slate. |
| **Xeoo Pink Soft** | Soft | Rose Quartz Night | `#301a2a` | `#f472b6` | Delicate rose quartz pastel inspired by cherry blossoms. |
| **Xeoo Pink Light** | Light | Cherry Blossom Cream | `#be185d` | `#db2777` | Sweet cherry blossom paper with vivid berry ink. |

</details>

<details>
<summary><b>💠 10. Cyan — Aqua &amp; Cyber Cyan</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Cyan Dark** | Dark | Cybernetic Aqua | `#0e7490` | `#06b6d4` | Futuristic cybernetic cyan with high luminosity. |
| **Xeoo Cyan Soft** | Soft | Seafoam Slate | `#182b30` | `#22d3ee` | Cool pastel seafoam reminiscent of shallow tropical seas. |
| **Xeoo Cyan Light** | Light | Crystal Pool Paper | `#0e7490` | `#0891b2` | Ice pool paper with deep ocean blue ink. |

</details>

<details>
<summary><b>🪙 11. Gray — Titanium &amp; Slate</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Gray Dark** | Dark | Titanium Charcoal | `#27272a` | `#94a3b8` | Neutral industrial titanium slate; distraction-free. |
| **Xeoo Gray Soft** | Soft | Minimal Slate | `#2b2b31` | `#cbd5e1` | Pure minimal slate for maximum coding concentration. |
| **Xeoo Gray Light** | Light | Platinum Paper | `#343a40` | `#495057` | Editorial platinum paper with sharp charcoal ink. |

</details>

<details>
<summary><b>🔮 12. Indigo — Midnight &amp; Deep Space</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Indigo Dark** | Dark | Deep Midnight Space | `#4338ca` | `#6366f1` | Deep cosmic midnight blue paired with electric indigo. |
| **Xeoo Indigo Soft** | Soft | Atmospheric Twilight | `#242347` | `#818cf8` | Peaceful atmospheric twilight for sensitive eyes. |
| **Xeoo Indigo Light**| Light | Silver Mist Paper | `#3730a3` | `#4f46e5` | Silver mist parchment with deep midnight indigo ink. |

</details>

<details>
<summary><b>🟤 13. Brown — Roasted Mocha &amp; Walnut</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Brown Dark** | Dark | Roasted Dark Mocha | `#78350f` | `#b45309` | Dark roasted mocha coffee with rich caramel warmth. |
| **Xeoo Brown Soft** | Soft | Coffeehouse Slate | `#2e221b` | `#d97706` | Relaxing coffeehouse aesthetic; comfortable and warm. |
| **Xeoo Brown Light** | Light | Vintage Book Parchment | `#78350f` | `#92400e` | Antique library book parchment with dark walnut ink. |

</details>

<details>
<summary><b>👑 14. Gold — Imperial Gold &amp; Amber</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Gold Dark** | Dark | Imperial Obsidian | `#b45309` | `#f59e0b` | Opulent imperial gold with commanding contrast. |
| **Xeoo Gold Soft** | Soft | Champagne Slate | `#352914` | `#fbbf24` | Soft champagne gold that treats your eyes with luxury. |
| **Xeoo Gold Light** | Light | Ivory Parchment | `#b45309` | `#d97706` | Warm ivory paper with dark amber gold ink. |

</details>

<details>
<summary><b>🌊 15. Teal — Oceanic Trench &amp; Lagoon</b></summary>

| Theme Name | Variant | Header / Sidebar | Footer Bar | Primary Accent | Character &amp; Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Xeoo Teal Dark** | Dark | Oceanic Trench | `#0f766e` | `#14b8a6` | Deep ocean abyss highlighted with crisp teal accents. |
| **Xeoo Teal Soft** | Soft | Lagoon Slate | `#182b27` | `#2dd4bf` | Calming pastel lagoon waters for relaxed coding. |
| **Xeoo Teal Light** | Light | Shallow Reef Paper | `#0f766e` | `#0d9488` | Shallow coral reef paper with deep teal ink. |

</details>

---

## ⚙️ Technical Architecture Deep-Dive

For developers interested in the internals of Xeoo Theme, here is a detailed breakdown of how the extension is engineered:

### 1. ⚡ Activation Optimization (`activationEvents`)
```json
"activationEvents": [
  "onStartupFinished"
]
```
* **Mechanism**: Defers extension activation until VS Code has finished rendering the main editor UI.
* **Why it matters**: Prevents blocking workbench startup. Xeoo Theme introduces **0 ms startup delay**.

---

### 2. 🔤 Cross-Language Syntax Engine & Inline-HTML Injection
Xeoo Theme includes an advanced TextMate injection grammar (`syntaxes/inline-html.tmLanguage.json`):
* **Automatic Detection**: Automatically detects HTML tags (`<div>`, `<p>`, `<span>`, `<h1>`–`<h5>`, etc.) and Tailwind CSS utility classes inside JavaScript and TypeScript template literals (`` `...` ``) without requiring explicit `/* html */` or `html` tags.
* **Contrast Isolation**: Distinguishes tag names, attribute keys, Tailwind utility classes, modifiers (`sm:`, `hover:`, `dark:`), arbitrary brackets (`bg-[#121217]`), and text content so code never flattens into a single monochromatic string.
* **Semantic LSP Compatibility**: Implements full standard semantic tokens (`typeParameter`, `decorator`, `macro`, `property`, `variable`, etc.) with state modifiers (`*.deprecated`, `readonly`, `defaultLibrary`).

---

### 3. 🎮 Extension Commands (`contributes.commands`)
* **`xeoo-theme.applyTheme`**: Applies a theme globally via the official VS Code configuration API:
  ```javascript
  await vscode.workspace.getConfiguration('workbench').update('colorTheme', themeName, vscode.ConfigurationTarget.Global);
  ```
* **`xeoo-theme.quickPick`**: Interactive fuzzy modal (`vscode.window.showQuickPick()`) to instantly search and preview any of the 43 palettes.
* **`xeoo-theme.randomTheme`**: Randomizer selecting an aesthetic theme on demand.
* **`xeoo-theme.refresh`**: Forces synchronization of the Activity Bar Studio with the active workbench theme.
* **`xeoo-theme.showInfo`**: Displays technical specifications and WCAG compliance metrics.

---

### 4. 🌳 Studio Tree Provider (`vscode.TreeDataProvider`)
* Registered in `src/extension.js` as `XeooStudioTreeDataProvider`.
* Hierarchical structure:
  - **Header Banner**: Dynamic engine version and status indicator.
  - **Active Indicator**: Real-time tracking of active theme via `vscode.workspace.onDidChangeConfiguration`.
  - **Quick Controls**: Quick Pick, Randomizer, and Refresh actions.
  - **Curated Palettes**: 15 color families expandable to reveal Dark, Soft, and Light variants.

---

## 🛠️ Developer Scripts

* 🔨 **Rebuild Theme Palette Files**:
  ```bash
  npm run build
  ```
* 🧪 **Run Syntax & Compliance Tests**:
  ```bash
  npm test
  ```
* 👀 **Watch Mode**:
  ```bash
  npm run watch
  ```
* 📦 **Package Standalone `.vsix` Installer**:
  ```bash
  npm run package
  ```

---

<div align="center">

  <p>Crafted with ❤️ and uncompromising attention to detail by <strong>NTTBELL</strong>.</p>
  <p>Licensed under the <a href="LICENSE">MIT License</a>.</p>

  <p><em>Elevate your coding environment with <strong>Xeoo Theme Suite</strong>! 🚀</em></p>

</div>
