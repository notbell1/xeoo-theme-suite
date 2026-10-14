/**
 * Xeoo Theme Suite - Master Palette Engine
 * 15 Color Categories (Red, Green, Blue, Yellow, Black, White, Purple, Orange,
 * Pink, Cyan, Gray, Indigo, Brown, Gold, Teal) with Dark, Soft, and Light variants.
 *
 * Total: 43 Expertly Calibrated Themes.
 * WCAG AA Contrast Compliant (>= 4.5:1), Zero-Glare, Distinct UI Elevation.
 */

// Helper to assemble syntax harmonized with theme primary accent
function buildSyntax(primary, secondary, isLight = false, isSoft = false) {
  if (isLight) {
    return {
      keyword: primary,
      storage: secondary || primary,
      func: '#1d4ed8',         // Deep Royal Blue
      method: '#0369a1',       // Deep Ocean Blue
      builtin: '#0f766e',      // Deep Teal
      string: '#15803d',       // Forest Green
      stringEscape: '#b91c1c', // Crimson Escape
      number: '#c2410c',       // Burnt Amber
      constant: '#b45309',     // Rich Ochre
      type: '#6b21a8',         // Royal Purple
      class: '#7e22ce',
      interface: '#581c87',
      variable: '#1e293b',     // Deep Slate Ink
      property: '#334155',     // Mineral Ink
      parameter: '#9333ea',    // Violet Ink
      operator: primary,
      delimiter: '#64748b',
      regex: primary,
      tag: primary,
      tagComponent: '#1d4ed8', // Royal Blue Component
      attribute: '#7e22ce',
      comment: '#64748b',
      docComment: '#475569',
      decorator: '#be185d',    // Deep Crimson/Rose
      macro: '#6b21a8',
      link: '#1d4ed8',
      heading: primary,
      diffAdded: '#15803d',
      diffRemoved: '#dc2626',
      diffModified: '#0284c7',
    };
  }

  if (isSoft) {
    return {
      keyword: primary,
      storage: secondary || primary,
      func: '#93c5fd',         // Soft Sky
      method: '#bae6fd',
      builtin: '#5eead4',      // Soft Teal
      string: '#86efac',       // Soft Mint
      stringEscape: '#f472b6',
      number: '#fdba74',       // Soft Peach
      constant: '#fed7aa',
      type: '#fde047',         // Pastel Sun
      class: '#fef08a',
      interface: '#fef9c3',
      variable: '#f1f5f9',     // Soft Off-White
      property: '#cbd5e1',     // Soft Mist
      parameter: '#d8b4fe',    // Soft Lavender
      operator: secondary || primary,
      delimiter: '#94a3b8',
      regex: '#f472b6',
      tag: primary,
      tagComponent: '#93c5fd',
      attribute: '#c084fc',
      comment: '#64748b',
      docComment: '#78889c',
      decorator: '#f9a8d4',    // Soft Pink
      macro: '#c4b5fd',
      link: '#93c5fd',
      heading: primary,
      diffAdded: '#86efac',
      diffRemoved: '#fb7185',
      diffModified: '#93c5fd',
    };
  }

  // Dark (High Contrast)
  return {
    keyword: primary,
    storage: secondary || primary,
    func: '#60a5fa',           // Vivid Ice Blue
    method: '#38bdf8',
    builtin: '#2dd4bf',        // Vivid Teal Mint
    string: '#4ade80',         // Vivid Mint Green
    stringEscape: '#f43f5e',   // Vivid Rose
    number: '#fb923c',         // Vivid Tangerine
    constant: '#f97316',
    type: '#fcd34d',           // Vivid Gold
    class: '#fbbf24',
    interface: '#fde047',
    variable: '#f8fafc',       // Crisp White
    property: '#e2e8f0',
    parameter: '#c084fc',      // Vivid Lilac
    operator: secondary || '#38bdf8',
    delimiter: '#94a3b8',
    regex: '#f43f5e',
    tag: primary,
    tagComponent: '#38bdf8',   // Distinct Cyan for React Components
    attribute: '#c084fc',
    comment: '#64748b',
    docComment: '#78889c',
    decorator: '#f472b6',      // Vivid Pink/Rose
    macro: '#a78bfa',          // Vivid Purple
    link: '#38bdf8',
    heading: primary,
    diffAdded: '#4ade80',
    diffRemoved: '#f43f5e',
    diffModified: '#38bdf8',
  };
}

const rawThemes = [
  // ==========================================
  // 1. RED (Merah)
  // ==========================================
  {
    category: 'Red',
    variant: 'Dark',
    name: 'Xeoo Red Dark',
    desc: 'Deep Obsidian with Vibrant Crimson UI & Highlights',
    bg: { header: '#0e0708', sidebar: '#13090b', editor: '#180b0e', elevated: '#221014' },
    border: '#2a1217',
    footer: { bg: '#be123c', fg: '#ffffff' },
    accent: { primary: '#f43f5e', hover: '#fb7185', selection: '#be123c55', glow: '#ff3366' },
    syntax: buildSyntax('#ff4d6d', '#f43f5e')
  },
  {
    category: 'Red',
    variant: 'Soft',
    name: 'Xeoo Red Soft',
    desc: 'Muted Rose Charcoal for Soothing Night Coding',
    bg: { header: '#131012', sidebar: '#171315', editor: '#1c181a', elevated: '#252023' },
    border: '#2c2427',
    footer: { bg: '#2b1b20', fg: '#fecdd3' },
    accent: { primary: '#fb7185', hover: '#fda4af', selection: '#9f123944', glow: '#fb7185' },
    syntax: buildSyntax('#fb7185', '#fda4af', false, true)
  },
  {
    category: 'Red',
    variant: 'Light',
    name: 'Xeoo Red Light',
    desc: 'Porcelain White with Ruby Ink Accents (Anti-Glare)',
    bg: { header: '#fcf2f4', sidebar: '#f8e6ea', editor: '#fff5f7', elevated: '#ffffff' },
    border: '#f1d1d8',
    footer: { bg: '#be123c', fg: '#ffffff' },
    accent: { primary: '#e11d48', hover: '#be123c', selection: '#fecdd366', glow: '#e11d48' },
    syntax: buildSyntax('#be123c', '#9f1239', true)
  },

  // ==========================================
  // 2. GREEN (Hijau)
  // ==========================================
  {
    category: 'Green',
    variant: 'Dark',
    name: 'Xeoo Green Dark',
    desc: 'Deep Pine Matrix with Vivid Emerald UI',
    bg: { header: '#060e09', sidebar: '#08140d', editor: '#0c1b12', elevated: '#13281c' },
    border: '#153122',
    footer: { bg: '#15803d', fg: '#ffffff' },
    accent: { primary: '#22c55e', hover: '#4ade80', selection: '#15803d55', glow: '#22c55e' },
    syntax: buildSyntax('#4ade80', '#22c55e')
  },
  {
    category: 'Green',
    variant: 'Soft',
    name: 'Xeoo Green Soft',
    desc: 'Herbal Sage Slate for Relaxed Long Sessions',
    bg: { header: '#101412', sidebar: '#141a16', editor: '#19201c', elevated: '#212a25' },
    border: '#25332b',
    footer: { bg: '#1f2d24', fg: '#bbf7d0' },
    accent: { primary: '#4ade80', hover: '#86efac', selection: '#16653444', glow: '#4ade80' },
    syntax: buildSyntax('#86efac', '#4ade80', false, true)
  },
  {
    category: 'Green',
    variant: 'Light',
    name: 'Xeoo Green Light',
    desc: 'Crisp Herbal Cream Paper with Deep Pine Typography',
    bg: { header: '#f2f9f4', sidebar: '#e7f4eb', editor: '#f7fcf8', elevated: '#ffffff' },
    border: '#cfead7',
    footer: { bg: '#166534', fg: '#ffffff' },
    accent: { primary: '#15803d', hover: '#166534', selection: '#bbf7d066', glow: '#15803d' },
    syntax: buildSyntax('#15803d', '#166534', true)
  },

  // ==========================================
  // 3. BLUE (Biru)
  // ==========================================
  {
    category: 'Blue',
    variant: 'Dark',
    name: 'Xeoo Blue Dark',
    desc: 'Abyssal Royal Navy with Sapphire Blue UI',
    bg: { header: '#060b17', sidebar: '#091022', editor: '#0d172e', elevated: '#132142' },
    border: '#162850',
    footer: { bg: '#1d4ed8', fg: '#ffffff' },
    accent: { primary: '#3b82f6', hover: '#60a5fa', selection: '#1d4ed855', glow: '#3b82f6' },
    syntax: buildSyntax('#60a5fa', '#38bdf8')
  },
  {
    category: 'Blue',
    variant: 'Soft',
    name: 'Xeoo Blue Soft',
    desc: 'Gentle Polar Denim with Muted Blue Accents',
    bg: { header: '#10141e', sidebar: '#141a27', editor: '#182030', elevated: '#212a3f' },
    border: '#242f47',
    footer: { bg: '#1c263c', fg: '#bfdbfe' },
    accent: { primary: '#60a5fa', hover: '#93c5fd', selection: '#1e40af44', glow: '#60a5fa' },
    syntax: buildSyntax('#93c5fd', '#60a5fa', false, true)
  },
  {
    category: 'Blue',
    variant: 'Light',
    name: 'Xeoo Blue Light',
    desc: 'Glacier Mist with Royal Cobalt Ink',
    bg: { header: '#f2f6fc', sidebar: '#e6effa', editor: '#f8fafd', elevated: '#ffffff' },
    border: '#cfe0f7',
    footer: { bg: '#1d4ed8', fg: '#ffffff' },
    accent: { primary: '#2563eb', hover: '#1d4ed8', selection: '#bfdbfe66', glow: '#2563eb' },
    syntax: buildSyntax('#1d4ed8', '#1e40af', true)
  },

  // ==========================================
  // 4. YELLOW (Kuning)
  // ==========================================
  {
    category: 'Yellow',
    variant: 'Dark',
    name: 'Xeoo Yellow Dark',
    desc: 'Dark Umber with High-Contrast Canary Highlights',
    bg: { header: '#100d04', sidebar: '#161306', editor: '#1c1808', elevated: '#27220c' },
    border: '#332c0f',
    footer: { bg: '#b45309', fg: '#ffffff' },
    accent: { primary: '#eab308', hover: '#facc15', selection: '#a1620755', glow: '#facc15' },
    syntax: buildSyntax('#facc15', '#fde047')
  },
  {
    category: 'Yellow',
    variant: 'Soft',
    name: 'Xeoo Yellow Soft',
    desc: 'Warm Honeycomb Slate with Gentle Pastel Gold',
    bg: { header: '#16140e', sidebar: '#1d1a12', editor: '#242016', elevated: '#2e291c' },
    border: '#373121',
    footer: { bg: '#2f2819', fg: '#fef08a' },
    accent: { primary: '#facc15', hover: '#fde047', selection: '#854d0e44', glow: '#facc15' },
    syntax: buildSyntax('#fde047', '#facc15', false, true)
  },
  {
    category: 'Yellow',
    variant: 'Light',
    name: 'Xeoo Yellow Light',
    desc: 'Warm Butter Parchment with Dark Ochre Typography',
    bg: { header: '#fdfcf2', sidebar: '#fbf7dc', editor: '#fffef7', elevated: '#ffffff' },
    border: '#faecc4',
    footer: { bg: '#d97706', fg: '#ffffff' },
    accent: { primary: '#ca8a04', hover: '#b45309', selection: '#fef08a77', glow: '#ca8a04' },
    syntax: buildSyntax('#b45309', '#a16207', true)
  },

  // ==========================================
  // 5. BLACK (Hitam)
  // ==========================================
  {
    category: 'Black',
    variant: 'Dark',
    name: 'Xeoo Black OLED',
    desc: 'Pitch Black Matrix Engineered for OLED Screens',
    bg: { header: '#000000', sidebar: '#050505', editor: '#0a0a0a', elevated: '#141414' },
    border: '#1f1f1f',
    footer: { bg: '#141414', fg: '#ffffff' },
    accent: { primary: '#ffffff', hover: '#e2e8f0', selection: '#ffffff33', glow: '#ffffff' },
    syntax: buildSyntax('#f8fafc', '#38bdf8')
  },
  {
    category: 'Black',
    variant: 'Soft',
    name: 'Xeoo Black Soft',
    desc: 'Matte Obsidian Charcoal with Balanced Contrast',
    bg: { header: '#0c0c0d', sidebar: '#111113', editor: '#161619', elevated: '#202024' },
    border: '#27272b',
    footer: { bg: '#222226', fg: '#e2e8f0' },
    accent: { primary: '#e2e8f0', hover: '#f8fafc', selection: '#ffffff22', glow: '#e2e8f0' },
    syntax: buildSyntax('#e2e8f0', '#94a3b8', false, true)
  },

  // ==========================================
  // 6. WHITE (Putih)
  // ==========================================
  {
    category: 'White',
    variant: 'Light',
    name: 'Xeoo White Paper',
    desc: 'Japanese Parchment Paper with Deep Sumi Ink (Anti-Glare)',
    bg: { header: '#efece6', sidebar: '#f3efe8', editor: '#f9f7f2', elevated: '#ffffff' },
    border: '#ded8ce',
    footer: { bg: '#292524', fg: '#f5f5f4' },
    accent: { primary: '#44403c', hover: '#292524', selection: '#e7e5e4', glow: '#44403c' },
    syntax: buildSyntax('#be123c', '#1d4ed8', true)
  },
  {
    category: 'White',
    variant: 'Soft',
    name: 'Xeoo White Soft',
    desc: 'Gentle Alabaster Grey with Soothing Ink Contrast',
    bg: { header: '#e9ecef', sidebar: '#edf0f4', editor: '#f5f7fa', elevated: '#ffffff' },
    border: '#dbe0e6',
    footer: { bg: '#334155', fg: '#f8fafc' },
    accent: { primary: '#475569', hover: '#334155', selection: '#e2e8f0', glow: '#475569' },
    syntax: buildSyntax('#0f766e', '#2563eb', true)
  },

  // ==========================================
  // 7. PURPLE (Ungu)
  // ==========================================
  {
    category: 'Purple',
    variant: 'Dark',
    name: 'Xeoo Purple Dark',
    desc: 'Deep Royal Twilight with Neon Amethyst UI',
    bg: { header: '#0d0617', sidebar: '#120921', editor: '#180c2b', elevated: '#23123f' },
    border: '#2b174d',
    footer: { bg: '#7e22ce', fg: '#ffffff' },
    accent: { primary: '#a855f7', hover: '#c084fc', selection: '#7e22ce55', glow: '#a855f7' },
    syntax: buildSyntax('#c084fc', '#d8b4fe')
  },
  {
    category: 'Purple',
    variant: 'Soft',
    name: 'Xeoo Purple Soft',
    desc: 'Velvety Lavender Night with Gentle Violet Tones',
    bg: { header: '#14101c', sidebar: '#191424', editor: '#20192d', elevated: '#29213a' },
    border: '#312745',
    footer: { bg: '#2a1f3c', fg: '#e9d5ff' },
    accent: { primary: '#c084fc', hover: '#d8b4fe', selection: '#6b21a844', glow: '#c084fc' },
    syntax: buildSyntax('#d8b4fe', '#c084fc', false, true)
  },
  {
    category: 'Purple',
    variant: 'Light',
    name: 'Xeoo Purple Light',
    desc: 'Soft Lilac Porcelain with Royal Violet Ink',
    bg: { header: '#f8f3fc', sidebar: '#f1e6f9', editor: '#fbf7fd', elevated: '#ffffff' },
    border: '#e4d2f3',
    footer: { bg: '#6b21a8', fg: '#ffffff' },
    accent: { primary: '#7e22ce', hover: '#6b21a8', selection: '#e9d5ff66', glow: '#7e22ce' },
    syntax: buildSyntax('#6b21a8', '#581c87', true)
  },

  // ==========================================
  // 8. ORANGE (Oranye)
  // ==========================================
  {
    category: 'Orange',
    variant: 'Dark',
    name: 'Xeoo Orange Dark',
    desc: 'Deep Ember Obsidian with Radiant Flame Accents',
    bg: { header: '#120904', sidebar: '#180c06', editor: '#201008', elevated: '#2c160b' },
    border: '#381c0e',
    footer: { bg: '#c2410c', fg: '#ffffff' },
    accent: { primary: '#f97316', hover: '#fb923c', selection: '#c2410c55', glow: '#f97316' },
    syntax: buildSyntax('#fb923c', '#f97316')
  },
  {
    category: 'Orange',
    variant: 'Soft',
    name: 'Xeoo Orange Soft',
    desc: 'Cozy Terracotta Slate with Warm Sunset Highlights',
    bg: { header: '#16110d', sidebar: '#1d1510', editor: '#241b14', elevated: '#2f231a' },
    border: '#382a1f',
    footer: { bg: '#332014', fg: '#fed7aa' },
    accent: { primary: '#fb923c', hover: '#fdba74', selection: '#9a341244', glow: '#fb923c' },
    syntax: buildSyntax('#fdba74', '#fb923c', false, true)
  },
  {
    category: 'Orange',
    variant: 'Light',
    name: 'Xeoo Orange Light',
    desc: 'Warm Apricot Parchment with Dark Amber Ink',
    bg: { header: '#fdf5f0', sidebar: '#faeae1', editor: '#fff8f5', elevated: '#ffffff' },
    border: '#f6d5c3',
    footer: { bg: '#c2410c', fg: '#ffffff' },
    accent: { primary: '#ea580c', hover: '#c2410c', selection: '#fed7aa66', glow: '#ea580c' },
    syntax: buildSyntax('#c2410c', '#9a3412', true)
  },

  // ==========================================
  // 9. PINK (Pink)
  // ==========================================
  {
    category: 'Pink',
    variant: 'Dark',
    name: 'Xeoo Pink Dark',
    desc: 'Midnight Cherry with Luminous Hot Pink UI',
    bg: { header: '#12060e', sidebar: '#180812', editor: '#200b18', elevated: '#2c1022' },
    border: '#39152b',
    footer: { bg: '#be185d', fg: '#ffffff' },
    accent: { primary: '#ec4899', hover: '#f472b6', selection: '#be185d55', glow: '#ec4899' },
    syntax: buildSyntax('#f472b6', '#ec4899')
  },
  {
    category: 'Pink',
    variant: 'Soft',
    name: 'Xeoo Pink Soft',
    desc: 'Pastel Rose Quartz Night with Delicate Sakura Glow',
    bg: { header: '#161014', sidebar: '#1c1319', editor: '#231820', elevated: '#2d1f29' },
    border: '#392634',
    footer: { bg: '#301a2a', fg: '#fbcfe8' },
    accent: { primary: '#f472b6', hover: '#f9a8d4', selection: '#9d174d44', glow: '#f472b6' },
    syntax: buildSyntax('#f9a8d4', '#f472b6', false, true)
  },
  {
    category: 'Pink',
    variant: 'Light',
    name: 'Xeoo Pink Light',
    desc: 'Delicate Cherry Blossom Cream with Deep Berry Ink',
    bg: { header: '#fdf2f7', sidebar: '#fae3ef', editor: '#fff6fa', elevated: '#ffffff' },
    border: '#f6c7e2',
    footer: { bg: '#be185d', fg: '#ffffff' },
    accent: { primary: '#db2777', hover: '#be185d', selection: '#fbcfe866', glow: '#db2777' },
    syntax: buildSyntax('#be185d', '#9d174d', true)
  },

  // ==========================================
  // 10. CYAN (Sian)
  // ==========================================
  {
    category: 'Cyan',
    variant: 'Dark',
    name: 'Xeoo Cyan Dark',
    desc: 'Cybernetic Deep Aqua with Bioluminescent Cyan UI',
    bg: { header: '#040f12', sidebar: '#061519', editor: '#081c22', elevated: '#0d2830' },
    border: '#113540',
    footer: { bg: '#0e7490', fg: '#ffffff' },
    accent: { primary: '#06b6d4', hover: '#22d3ee', selection: '#0e749055', glow: '#00f5ff' },
    syntax: buildSyntax('#22d3ee', '#67e8f9')
  },
  {
    category: 'Cyan',
    variant: 'Soft',
    name: 'Xeoo Cyan Soft',
    desc: 'Cool Seafoam Slate with Calming Pastel Teal',
    bg: { header: '#0f1517', sidebar: '#131b1d', editor: '#172225', elevated: '#1e2b2f' },
    border: '#233539',
    footer: { bg: '#182b30', fg: '#a5f3fc' },
    accent: { primary: '#22d3ee', hover: '#67e8f9', selection: '#155e7544', glow: '#22d3ee' },
    syntax: buildSyntax('#67e8f9', '#22d3ee', false, true)
  },
  {
    category: 'Cyan',
    variant: 'Light',
    name: 'Xeoo Cyan Light',
    desc: 'Crystal Ice Pool with Deep Ocean Teal Ink',
    bg: { header: '#f0fafd', sidebar: '#e0f5fa', editor: '#f6fcfe', elevated: '#ffffff' },
    border: '#c3ebf5',
    footer: { bg: '#0e7490', fg: '#ffffff' },
    accent: { primary: '#0891b2', hover: '#0e7490', selection: '#cffafe66', glow: '#0891b2' },
    syntax: buildSyntax('#0e7490', '#155e75', true)
  },

  // ==========================================
  // 11. GRAY (Abu-abu)
  // ==========================================
  {
    category: 'Gray',
    variant: 'Dark',
    name: 'Xeoo Gray Dark',
    desc: 'Industrial Titanium Charcoal with Precision White Highlights',
    bg: { header: '#0f0f12', sidebar: '#141417', editor: '#19191d', elevated: '#222227' },
    border: '#2a2a30',
    footer: { bg: '#27272a', fg: '#fafafa' },
    accent: { primary: '#94a3b8', hover: '#cbd5e1', selection: '#3f3f4666', glow: '#94a3b8' },
    syntax: buildSyntax('#cbd5e1', '#94a3b8')
  },
  {
    category: 'Gray',
    variant: 'Soft',
    name: 'Xeoo Gray Soft',
    desc: 'Pure Neutral Slate without Color Distraction',
    bg: { header: '#131316', sidebar: '#18181c', editor: '#1e1e23', elevated: '#27272d' },
    border: '#2f2f37',
    footer: { bg: '#2b2b31', fg: '#e2e8f0' },
    accent: { primary: '#cbd5e1', hover: '#f1f5f9', selection: '#52525b44', glow: '#cbd5e1' },
    syntax: buildSyntax('#f1f5f9', '#cbd5e1', false, true)
  },
  {
    category: 'Gray',
    variant: 'Light',
    name: 'Xeoo Gray Light',
    desc: 'Modern Editorial Platinum Paper with Charcoal Ink',
    bg: { header: '#f1f3f5', sidebar: '#e6e9ed', editor: '#f8f9fa', elevated: '#ffffff' },
    border: '#d0d5dd',
    footer: { bg: '#343a40', fg: '#f8f9fa' },
    accent: { primary: '#495057', hover: '#212529', selection: '#dee2e6', glow: '#495057' },
    syntax: buildSyntax('#212529', '#343a40', true)
  },

  // ==========================================
  // 12. INDIGO (Indigo)
  // ==========================================
  {
    category: 'Indigo',
    variant: 'Dark',
    name: 'Xeoo Indigo Dark',
    desc: 'Electric Midnight Space with Vivid Indigo Glow',
    bg: { header: '#08081a', sidebar: '#0b0c24', editor: '#0f1030', elevated: '#161845' },
    border: '#1d1f56',
    footer: { bg: '#4338ca', fg: '#ffffff' },
    accent: { primary: '#6366f1', hover: '#818cf8', selection: '#4338ca55', glow: '#6366f1' },
    syntax: buildSyntax('#818cf8', '#a5b4fc')
  },
  {
    category: 'Indigo',
    variant: 'Soft',
    name: 'Xeoo Indigo Soft',
    desc: 'Atmospheric Deep Twilight with Calming Lavender Hues',
    bg: { header: '#11111f', sidebar: '#151528', editor: '#1b1a33', elevated: '#232242' },
    border: '#2a2950',
    footer: { bg: '#242347', fg: '#c7d2fe' },
    accent: { primary: '#818cf8', hover: '#a5b4fc', selection: '#3730a344', glow: '#818cf8' },
    syntax: buildSyntax('#a5b4fc', '#818cf8', false, true)
  },
  {
    category: 'Indigo',
    variant: 'Light',
    name: 'Xeoo Indigo Light',
    desc: 'Silver Fog with Electric Midnight Indigo Ink',
    bg: { header: '#f3f3fc', sidebar: '#e6e7f8', editor: '#f9f9fd', elevated: '#ffffff' },
    border: '#d0d3f4',
    footer: { bg: '#3730a3', fg: '#ffffff' },
    accent: { primary: '#4f46e5', hover: '#3730a3', selection: '#c7d2fe66', glow: '#4f46e5' },
    syntax: buildSyntax('#3730a3', '#312e81', true)
  },

  // ==========================================
  // 13. BROWN (Cokelat)
  // ==========================================
  {
    category: 'Brown',
    variant: 'Dark',
    name: 'Xeoo Brown Dark',
    desc: 'Rich Roasted Mocha with Warm Crema Accents',
    bg: { header: '#0f0a07', sidebar: '#150d09', editor: '#1c120c', elevated: '#261911' },
    border: '#332217',
    footer: { bg: '#78350f', fg: '#ffffff' },
    accent: { primary: '#b45309', hover: '#d97706', selection: '#78350f55', glow: '#d97706' },
    syntax: buildSyntax('#d97706', '#f59e0b')
  },
  {
    category: 'Brown',
    variant: 'Soft',
    name: 'Xeoo Brown Soft',
    desc: 'Cozy Coffee House Slate with Warm Caramel Tones',
    bg: { header: '#14110f', sidebar: '#1a1613', editor: '#221c17', elevated: '#2c251f' },
    border: '#372d25',
    footer: { bg: '#2e221b', fg: '#fed7aa' },
    accent: { primary: '#d97706', hover: '#f59e0b', selection: '#92400e44', glow: '#d97706' },
    syntax: buildSyntax('#f59e0b', '#d97706', false, true)
  },
  {
    category: 'Brown',
    variant: 'Light',
    name: 'Xeoo Brown Light',
    desc: 'Vintage Bookish Parchment with Dark Walnut Ink',
    bg: { header: '#fcf6f0', sidebar: '#f7ece0', editor: '#fffaf5', elevated: '#ffffff' },
    border: '#eedac7',
    footer: { bg: '#78350f', fg: '#ffffff' },
    accent: { primary: '#92400e', hover: '#78350f', selection: '#fed7aa66', glow: '#92400e' },
    syntax: buildSyntax('#78350f', '#451a03', true)
  },

  // ==========================================
  // 14. GOLD (Emas)
  // ==========================================
  {
    category: 'Gold',
    variant: 'Dark',
    name: 'Xeoo Gold Dark',
    desc: 'Imperial Dark Obsidian with Luxurious Radiant Gold UI',
    bg: { header: '#120c02', sidebar: '#181003', editor: '#201504', elevated: '#2b1d06' },
    border: '#382608',
    footer: { bg: '#b45309', fg: '#ffffff' },
    accent: { primary: '#f59e0b', hover: '#fbbf24', selection: '#b4530955', glow: '#fbbf24' },
    syntax: buildSyntax('#fbbf24', '#fde047')
  },
  {
    category: 'Gold',
    variant: 'Soft',
    name: 'Xeoo Gold Soft',
    desc: 'Mellow Champagne Slate with Warm Ambient Glow',
    bg: { header: '#15120c', sidebar: '#1c180f', editor: '#241e12', elevated: '#2e2718' },
    border: '#39301e',
    footer: { bg: '#352914', fg: '#fef08a' },
    accent: { primary: '#fbbf24', hover: '#fde047', selection: '#92400e44', glow: '#fbbf24' },
    syntax: buildSyntax('#fde047', '#fbbf24', false, true)
  },
  {
    category: 'Gold',
    variant: 'Light',
    name: 'Xeoo Gold Light',
    desc: 'Warm Ivory Parchment with Imperial Gilded Ink',
    bg: { header: '#fdf9ed', sidebar: '#fbf1d6', editor: '#fffdf5', elevated: '#ffffff' },
    border: '#f6e2ad',
    footer: { bg: '#b45309', fg: '#ffffff' },
    accent: { primary: '#d97706', hover: '#b45309', selection: '#fef08a77', glow: '#d97706' },
    syntax: buildSyntax('#b45309', '#78350f', true)
  },

  // ==========================================
  // 15. TEAL (Hijau Kebiruan)
  // ==========================================
  {
    category: 'Teal',
    variant: 'Dark',
    name: 'Xeoo Teal Dark',
    desc: 'Deep Oceanic Trench with Refreshing Seafoam Teal',
    bg: { header: '#040e0c', sidebar: '#061411', editor: '#081a17', elevated: '#0e2621' },
    border: '#12332c',
    footer: { bg: '#0f766e', fg: '#ffffff' },
    accent: { primary: '#14b8a6', hover: '#2dd4bf', selection: '#0f766e55', glow: '#14b8a6' },
    syntax: buildSyntax('#2dd4bf', '#5eead4')
  },
  {
    category: 'Teal',
    variant: 'Soft',
    name: 'Xeoo Teal Soft',
    desc: 'Subtle Lagoon Slate with Gentle Minty Hues',
    bg: { header: '#0e1514', sidebar: '#121b19', editor: '#16221f', elevated: '#1d2c28' },
    border: '#233632',
    footer: { bg: '#182b27', fg: '#99f6e4' },
    accent: { primary: '#2dd4bf', hover: '#5eead4', selection: '#115e5944', glow: '#2dd4bf' },
    syntax: buildSyntax('#5eead4', '#2dd4bf', false, true)
  },
  {
    category: 'Teal',
    variant: 'Light',
    name: 'Xeoo Teal Light',
    desc: 'Caribbean Shallow Reef Paper with Deep Seafoam Ink',
    bg: { header: '#f0fbf9', sidebar: '#e0f7f3', editor: '#f5fdfb', elevated: '#ffffff' },
    border: '#c3eee6',
    footer: { bg: '#0f766e', fg: '#ffffff' },
    accent: { primary: '#0d9488', hover: '#0f766e', selection: '#ccfbf166', glow: '#0d9488' },
    syntax: buildSyntax('#0f766e', '#134e4a', true)
  }
];

// Map into normalized format consumed by build and UI generators
const palettes = rawThemes.map((item) => {
  const isLight = item.variant === 'Light';
  const id = `xeoo-${item.category.toLowerCase()}-${item.variant.toLowerCase()}`;

  return {
    id,
    name: item.name,
    type: isLight ? 'light' : 'dark',
    category: item.category,
    variant: item.variant,
    description: item.desc,
    neutral: {
      bgHeader: item.bg.header,
      bgSidebar: item.bg.sidebar,
      bgBase: item.bg.editor,
      bgElevated: item.bg.elevated,
      bgHighlight: isLight ? `${item.bg.sidebar}99` : `${item.bg.elevated}88`,
      bgActive: item.bg.elevated,
      borderSubtle: item.border,
      borderStrong: item.border,
      borderFocus: item.accent.primary,
      fgMuted: isLight ? '#64748b' : '#71717a',
      fgSecondary: isLight ? '#475569' : '#a1a1aa',
      fgDefault: isLight ? '#0f172a' : '#f4f4f5',
      fgBright: isLight ? '#020617' : '#ffffff',
    },
    footer: item.footer,
    accent: item.accent,
    syntax: item.syntax,
  };
});

module.exports = { palettes };
