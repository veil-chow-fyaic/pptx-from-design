# HTML → PPTX Capability Mapping

The HTML mockup is a *preview* — not everything in HTML can be faithfully reproduced in PptxGenJS. Understanding these boundaries before Phase 1 prevents designing effects that will be lost or degraded in Phase 2.

---

## What Translates Well

| HTML/CSS Effect | PptxGenJS Equivalent | Fidelity |
|----------------|---------------------|----------|
| Solid background color | `slide.background = { color }` | Perfect |
| Colored text | `addText` with `color` option | Perfect |
| Font weight (bold/normal) | `bold: true/false` | Perfect |
| Font size | `fontSize: N` (pt) | Perfect |
| Rounded rectangles | `ROUNDED_RECTANGLE` + `rectRadius` | Perfect |
| Circles/ovals | `OVAL` shape | Perfect |
| Semi-transparent shapes | `fill: { color, transparency: N }` | Perfect |
| Lines | `LINE` shape with `line` option | Perfect |
| Tables | `addTable` with cell options | Good |
| Images (local/URL) | `addImage` with path | Good |
| Charts | `addChart` with data | Good |
| Left/center/right align | `align` option | Perfect |
| Vertical align | `valign` option | Perfect |
| Border on shapes | `line: { color, width }` | Good |
| Grid layouts | Manual x/y/w/h calculation | Exact (but manual) |

## What Doesn't Translate

| HTML/CSS Effect | Why It Fails | Workaround |
|----------------|-------------|------------|
| **CSS gradients** (linear/radial) | PptxGenJS only supports solid fills | Approximate with multiple semi-transparent OVALs at different positions |
| **background-clip: text** (gradient text) | No PPTX equivalent | Use solid accent color instead |
| **box-shadow** | No PPTX shadow on shapes | Use slightly larger, darker shape behind the main shape |
| **CSS animations** (fade, slide, pulse) | PPTX supports transitions but not element animations | Drop entirely — design for static impact |
| **SVG graphics** | Not embeddable in PptxGenJS | Convert to PNG first, or approximate with shapes |
| **Emoji characters** | PowerPoint renders inconsistently across platforms | Use shapes (colored circles with text) instead |
| **Google Fonts** | Not available in PowerPoint | Use Microsoft YaHei (Chinese) / Arial or system fonts (English) |
| **Flexbox/Grid auto-layout** | PptxGenJS uses absolute positioning | Manually calculate all x, y, w, h values |
| **CSS transforms** (rotate, skew) | Limited in PptxGenJS | Avoid or pre-render to image |
| **Opacity on text** | Use `transparency` on text options | Works but limited |
| **Noise/grain texture overlays** | No texture fill in PptxGenJS | Skip entirely, use subtle shape layers instead |
| **Blur effects** | No blur in PptxGenJS | Use color + transparency to simulate |

---

## Design Within Bounds

Given these constraints, the most effective design strategy for Phase 1 is:

### Do These in HTML (They'll Survive Phase 2)
- Bold color choices with high contrast
- Strong typographic hierarchy (large titles, small body)
- Semi-transparent colored shapes for depth
- Geometric decorative elements (circles, lines, corner marks)
- Card-based layouts with rounded rectangles
- Large stat numbers with small labels
- Asymmetric compositions

### Don't Rely On These (They Won't Survive)
- Multi-stop gradients or gradient text
- Complex animations or hover effects
- Intricate SVG illustrations
- CSS grid auto-layouts (calculate positions yourself)
- Custom fonts (they'll become YaHei/Arial)

### The "Good Enough" Rule
When translating from HTML to PptxGenJS, the goal isn't pixel-perfect reproduction — it's **visual impact preservation**. If the HTML slide feels "premium dark tech" and the PPTX version also feels "premium dark tech" (even with some detail loss), that's success.

---

## Position Calculation Guide

PptxGenJS uses inches, not pixels. For 16:9 slides (10" × 5.625"):

```
HTML pixel → PPTX inch: divide by 128 (for 1280px width) or 128 (for 720px height)

Example: HTML element at x=320px, width=640px
PPTX: x = 320/128 = 2.5", w = 640/128 = 5.0"

Margins: ≥ 0.5" (64px) from all edges
Gap between elements: 0.3-0.5" (38-64px)
```
