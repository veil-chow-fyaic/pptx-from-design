---
name: pptx-from-design
description: "Design-first PPTX generator: creates visually stunning presentations by designing HTML mockups first, then compiling to PPTX via PptxGenJS. Use this skill when the user wants to make a PPT/PPTX/PowerPoint/slide deck with high design quality, or says things like '做个ppt'、'做一份演示文稿'、'生成slides'、'make a presentation' with source material provided. Triggers on any PPT creation request where design quality matters — even if the user just says '用这个做个PPT'. Always prefer this skill over plain pptx-generator when the user provides content/material and wants a polished result."
license: See LICENSE.txt for complete terms
metadata:
  version: "3.0.0"
  category: productivity
---

# Design-First PPTX Generator

Two-phase workflow: **design in HTML first, then compile to PPTX**.

Why two phases? Because designing directly in PptxGenJS code is like painting blindfolded — you can't see the result until compilation. HTML gives instant browser preview, so you can iterate on layout and aesthetics visually before committing to PPTX code. This produces dramatically better-looking slides than jumping straight to code.

---

## When to Use

User provides source material (markdown, text, article, notes) and wants a high-design presentation. This handles the full pipeline: content analysis → visual design → file generation.

---

## Phase 1: HTML Slide Design

Read [references/design-guide.md](references/design-guide.md) for design thinking and aesthetic guidelines.

**Important**: The HTML mockup is a *preview vehicle*, not the final product. During Phase 2, only elements that can be faithfully reproduced in PptxGenJS will survive. Read [references/html-to-pptx-mapping.md](references/html-to-pptx-mapping.md) to understand what translates well and what doesn't, so you design within achievable bounds from the start.

### 1.1 Read & Analyze Source Material

Extract from user input:
- Core topic and narrative arc
- Key data points, arguments, findings
- Natural section breaks → these become slides

### 1.2 Choose Aesthetic Direction

Following the design guide, commit to a **bold, specific** aesthetic:
- **Tech** → dark bg, neon accents, geometric lines
- **Business** → clean/warm, subtle gradients, ample white space
- **Academic** → editorial serif, restrained palette, structured grids
- **Creative** → experimental layouts, bold color clashes, asymmetric

Lock in design decisions:
- **Color palette**: from [references/pptxgenjs.md](references/pptxgenjs.md) palettes, or topic-specific
- **Typography**: Chinese = Microsoft YaHei (PPTX compat); English display font = pick something memorable
- **Layout system**: card-based / asymmetric / editorial — pick one
- **Decorative motifs**: pick 2-3, reuse consistently
- **Background depth**: never flat solid — but stay within PptxGenJS capabilities (solid + semi-transparent shapes, not CSS gradients)

**AVOID**: Inter/Roboto/Space Grotesk, purple-on-white gradients, predictable card grids, templatey layouts, accent lines under titles.

### 1.3 Generate HTML Mockup

Create `slides-design.html` with all slides as `<div class="slide">` sections. Each slide = 1280×720px.

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

Read [references/pptxgenjs.md](references/pptxgenjs.md) for PptxGenJS API reference (shapes, text, icons, charts, shadows, pitfalls).
Read [references/editing.md](references/editing.md) for XML-based editing workflow (useful for QA fixes on compiled PPTX).

### 2.1 Set Up Working Directory

Copy the template files from this skill's `scripts/` directory:

```
slides/
├── slide-01.js ... slide-NN.js   ← one file per slide (use scripts/slide-template.js)
├── compile.js                    ← entry point (use scripts/compile.js)
└── output/                       ← auto-created by compile.js
```

Why one file per slide? Because it isolates changes — fixing slide 3 won't accidentally break slide 7. Each slide is an independent module with its own config.

### 2.2 Translate HTML → PptxGenJS

For each slide, create a JS file following the template in `scripts/slide-template.js`. Key translation rules (see [references/html-to-pptx-mapping.md](references/html-to-pptx-mapping.md) for the full mapping):

- **Colors**: 6-char hex WITHOUT `#` → `"00C8FF"` not `"#00C8FF"`
- **Chinese font**: `"Microsoft YaHei"`, English: `"Arial"`
- **Page badge**: Circle or pill badge on every slide except Cover
- **CSS gradients** → approximate with semi-transparent OVAL shapes
- **CSS animations** → drop entirely, focus on static visual impact
- **Grid/flex layouts** → manually calculate x/y/w/h positions

### 2.3 Compile

```bash
cd slides && npm install pptxgenjs && node compile.js
```

### 2.4 QA

Follow the QA workflow from [references/pptxgenjs.md](references/pptxgenjs.md) (QA section) and [references/editing.md](references/editing.md):
- Convert to images: `python scripts/office/soffice.py --headless --convert-to pdf output.pptx && pdftoppm -jpeg -r 150 output.pdf slide`
- Inspect with subagents for fresh eyes
- Fix-and-verify loop — do not declare success after just one pass

### 2.5 Deliver

Tell the user where both files are:
- `slides-design.html` — browser preview
- `slides/output/presentation.pptx` — final presentation

---

## File Structure

```
pptx-from-design/
├── SKILL.md
├── LICENSE.txt
├── package.json
├── requirements.txt               ← Python dependencies (QA scripts)
├── references/
│   ├── design-guide.md            ← slide design principles (Phase 1)
│   ├── html-to-pptx-mapping.md   ← HTML→PPTX capability boundary
│   ├── pptxgenjs.md               ← PptxGenJS full API + design + QA (Phase 2)
│   └── editing.md                 ← XML editing workflow (QA fixes)
├── scripts/
│   ├── compile.js                 ← PPTX compile entry point
│   ├── slide-template.js          ← per-slide JS template
│   ├── add_slide.py               ← duplicate/add slides to PPTX
│   ├── clean.py                   ← remove orphaned files
│   ├── thumbnail.py               ← visual grid of slides
│   └── office/
│       ├── soffice.py             ← LibreOffice headless conversion
│       ├── unpack.py              ← extract PPTX to XML
│       ├── pack.py                ← repack XML to PPTX
│       ├── validate.py            ← validate PPTX structure
│       ├── helpers/               ← merge_runs, simplify_redlines
│       ├── schemas/               ← XSD schemas (ISO, ECMA, Microsoft)
│       └── validators/            ├── base, docx, pptx, redlining
└── .gitignore
```
