---
name: pptx-from-design
description: "Design-first PPTX generator: creates visually stunning presentations by designing HTML mockups first, then compiling to PPTX via PptxGenJS. Use this skill when the user wants to make a PPT/PPTX/PowerPoint/slide deck with high design quality, or says things like '做个ppt'、'做一份演示文稿'、'生成slides'、'make a presentation' with source material provided. Triggers on any PPT creation request where design quality matters — even if the user just says '用这个做个PPT'. Always prefer this skill over plain pptx-generator when the user provides content/material and wants a polished result."
license: MIT
metadata:
  version: "1.0"
  category: productivity
---

# Design-First PPTX Generator

Two-phase workflow: **design in HTML first, then compile to PPTX**. Phase 1 creates a visual mockup as HTML; Phase 2 translates it into PptxGenJS modules and compiles the final `.pptx`. This skill is fully self-contained — no other skills required.

## When to Use

User provides source material (markdown, text, article, notes) and wants a presentation. This handles the full pipeline: content analysis → visual design → file generation.

---

## Phase 1: HTML Slide Design

### 1.1 Read & Analyze Source Material

Read the user's input. Extract:
- Core topic and narrative arc
- Key data points, arguments, findings
- Natural section breaks → these become slides

### 1.2 Choose Aesthetic Direction

Commit to a **bold, specific** aesthetic. Consider topic + audience:
- **Tech** → dark bg, neon accents, geometric lines
- **Business** → clean/warm, subtle gradients, ample white space
- **Academic** → editorial serif, restrained palette, structured grids
- **Creative** → experimental layouts, bold color clashes, asymmetric

Lock in design decisions:
- **Color palette**: dominant bg + 2-3 accent colors → CSS variables
- **Typography**: distinctive pairing. Chinese defaults to Microsoft YaHei (PPTX compat); English display font = pick something memorable (Orbitron, Rajdhani, Exo 2, Playfair Display, etc.)
- **Layout system**: card-based / asymmetric / editorial — pick one, stick with it
- **Decorative motifs**: pick 2-3 (corner lines, gradient orbs, noise textures, color-coded bars) and reuse consistently
- **Background depth**: never flat solid. Use layered effects — gradient meshes (radial gradients at corners), noise texture overlays (SVG feTurbulence), blurred color orbs behind content, subtle grid lines. This creates atmosphere and separates this output from generic templates.
- **Motion in HTML phase**: add CSS transitions for inter-slide navigation and staggered reveal animations (animation-delay on child elements). These won't carry to PPTX, but make the HTML preview feel polished and help the user evaluate the design.

**AVOID**: Inter/Roboto, purple-on-white gradients, predictable card grids, templatey layouts.

#### Curated Color Palettes

| Name | bg | primary | secondary | accent | light |
|------|----|---------|-----------|--------|-------|
| **Dark Neon** | `06081A` | `E8EAF6` | `8B92B8` | `00C8FF` | `8B5CF6` |
| **Warm Dark** | `1A1210` | `F5E6D3` | `A89080` | `E8734A` | `F0B429` |
| **Ocean Deep** | `0A1628` | `E0F0FF` | `6B8DB5` | `00A3CC` | `1B6B93` |
| **Forest Night** | `0D1A0F` | `D4E7D0` | `7BA07E` | `4CAF50` | `81C784` |
| **Clean Light** | `F5F5F0` | `22223B` | `4A4E69` | `9A8C98` | `C9ADA7` |
| **Editorial** | `FAFAFA` | `1A1A2E` | `5C5C7A` | `E94560` | `0F3460` |

### 1.3 Generate HTML Mockup

Create a single `slides-design.html` file with all slides as `<div class="slide">` sections. Each slide = 1280×720px.

#### Slide Types

| Type | Purpose | Key Elements |
|------|---------|-------------|
| **Cover** | First impression | Title, subtitle, author, date, decorative accents |
| **TOC** | Navigation overview | Numbered chapter cards in grid |
| **Section Divider** | Chapter breaks | Large chapter number + title |
| **Content** | Main workhorse | Text, lists, diagrams, code, comparisons |
| **Summary** | Closing | Key takeaways, flow diagram, quote |

Present the HTML to the user. Wait for approval before Phase 2.

---

## Phase 2: PPTX Compilation

### 2.1 Directory Structure

```
slides/
├── slide-01.js ... slide-NN.js
├── compile.js
└── output/
```

### 2.2 Slide JS File Template

Every slide file follows this exact pattern:

```javascript
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'cover', index: 1, title: 'Slide Title' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ... add shapes, text, etc.

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "E8EAF6", secondary: "8B92B8", accent: "00C8FF", light: "8B5CF6", bg: "06081A" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
```

### 2.3 PptxGenJS API Reference

#### Essentials
- **Dimensions**: 10" × 5.625" (`LAYOUT_16x9`)
- **Colors**: 6-char hex **without** `#` → `"00C8FF"` not `"#00C8FF"`
- **Chinese font**: `"Microsoft YaHei"`
- **English font**: `"Arial"` (safe PPTX default)

#### Theme Object Contract

The compile script passes exactly these 5 keys. Use no others.

```javascript
const theme = {
  primary: "E8EAF6",   // titles, prominent text
  secondary: "8B92B8", // body text, descriptions
  accent: "00C8FF",    // highlights, badges, links
  light: "8B5CF6",     // secondary accent
  bg: "06081A"         // slide background
};
```

#### Shapes

```javascript
// Rectangle
slide.addShape(pres.shapes.RECTANGLE, {
  x: 1, y: 1, w: 3, h: 2,
  fill: { color: "0D1129" },
  line: { color: "1A1F3A", width: 0.75 }
});

// Rounded Rectangle (rectRadius controls corner rounding)
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 1, y: 1, w: 3, h: 2,
  fill: { color: "0D1129" },
  rectRadius: 0.1
});

// Oval / Circle
slide.addShape(pres.shapes.OVAL, {
  x: 1, y: 1, w: 1, h: 1,
  fill: { color: "00C8FF" }
});

// Line
slide.addShape(pres.shapes.LINE, {
  x: 1, y: 1, w: 5, h: 0,
  line: { color: "00C8FF", width: 1 }
});
```

#### Text

```javascript
// Simple text
slide.addText("Hello", {
  x: 1, y: 1, w: 5, h: 1,
  fontSize: 32, fontFace: "Microsoft YaHei",
  color: "E8EAF6", bold: true,
  align: "center", valign: "middle"
});

// Mixed-format text
slide.addText([
  { text: "Bold part", options: { bold: true, color: "00C8FF" } },
  { text: " normal part", options: { color: "8B92B8" } }
], {
  x: 1, y: 1, w: 5, h: 1,
  fontSize: 16, fontFace: "Microsoft YaHei"
});

// Key text options
// align: "left" | "center" | "right"
// valign: "top" | "middle" | "bottom"
// lineSpacingMultiple: 1.5
// letterSpacing: 2
```

#### Fill with Transparency

```javascript
// Semi-transparent fill (0=opaque, 100=invisible)
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 1, y: 1, w: 3, h: 2,
  fill: { color: "00C8FF", transparency: 85 }
});
```

#### Page Number Badge (REQUIRED on all slides except Cover)

```javascript
// Circle badge (default)
slide.addShape(pres.shapes.OVAL, {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fill: { color: theme.accent }
});
slide.addText("3", {
  x: 9.3, y: 5.1, w: 0.4, h: 0.4,
  fontSize: 12, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

// Pill badge (alternative)
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 9.1, y: 5.15, w: 0.6, h: 0.35,
  fill: { color: theme.accent },
  rectRadius: 0.15
});
slide.addText("03", {
  x: 9.1, y: 5.15, w: 0.6, h: 0.35,
  fontSize: 11, fontFace: "Arial",
  color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});
```

#### Images

```javascript
// Add image from local file
slide.addImage({ path: "imgs/photo.png", x: 1, y: 1, w: 3, h: 2 });

// Add image from URL
slide.addImage({ path: "https://example.com/img.png", x: 1, y: 1, w: 3, h: 2 });

// Image with sizing options
// sizing: { type: "cover" | "contain" | "crop", w: 3, h: 2 }
```

#### Tables

```javascript
slide.addTable(
  [          // rows → array of arrays
    [         // row 1 (header)
      { text: "Header 1", options: { bold: true, color: "FFFFFF", fill: { color: "00C8FF" } } },
      { text: "Header 2", options: { bold: true, color: "FFFFFF", fill: { color: "00C8FF" } } }
    ],
    [         // row 2
      { text: "Cell 1", options: { color: "E8EAF6" } },
      { text: "Cell 2", options: { color: "8B92B8" } }
    ]
  ],
  {
    x: 0.8, y: 1.5, w: 8.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    border: { type: "solid", pt: 0.5, color: "1A1F3A" },
    colW: [4.2, 4.2],
    rowH: [0.5, 0.4]
  }
);
```

#### Charts

```javascript
// Bar chart
slide.addChart(pres.charts.BAR, [
  { name: "Series 1", labels: ["A", "B", "C"], values: [10, 20, 30] }
], { x: 1, y: 1, w: 5, h: 3, showTitle: true, title: "Chart Title" });

// Other chart types: pres.charts.LINE, PIE, DOUGHNUT, SCATTER, BUBBLE, RADAR
```

### 2.4 Compile Script

```javascript
// compile.js
const pptxgen = require('pptxgenjs');
const path = require('path');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "E8EAF6", secondary: "8B92B8",
  accent: "00C8FF", light: "8B5CF6", bg: "06081A"
};

for (let i = 1; i <= N; i++) {  // set N = total slides
  const num = String(i).padStart(2, '0');
  require(path.join(__dirname, `slide-${num}.js`)).createSlide(pres, theme);
}

pres.writeFile({ fileName: outputPath });
```

Run: `cd slides && node compile.js`

### 2.5 QA Checklist

After compilation, verify:
- [ ] File opens without errors in PowerPoint
- [ ] All slides render (no blank slides)
- [ ] Text is readable (no dark-on-dark or light-on-light)
- [ ] Page numbers appear on all slides except cover
- [ ] Chinese characters display correctly (Microsoft YaHei)
- [ ] No shapes or text overflow outside slide bounds

### 2.6 Deliver

Copy the `.pptx` to the user's requested location. Tell them where both files are:
- `slides-design.html` — browser preview
- `output.pptx` — final presentation

---

## Design Tips

- **1 idea per slide** — white space is your friend
- **Consistency** — reuse the same card style, spacing, accent placement across all slides
- **2-3 motifs max** — corner lines + gradient dividers + color-coded bars is plenty
- **Dark theme trick** — use `transparency: 80-90` for subtle glows and borders
- **Emoji as icons** — emoji characters work well inside PptxGenJS shape containers
- **Grid alignment** — keep text blocks and cards on a consistent grid; it makes even simple layouts feel polished

## Dependency

- `npm install -g pptxgenjs`
