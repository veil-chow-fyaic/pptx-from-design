# PPTX Reference Guide

Source: create-pptx skill — complete PptxGenJS API, design patterns, and QA workflow for Phase 2 compilation.

---

## Quick Reference

| Task | Guide |
|------|-------|
| Create from scratch | PptxGenJS API sections below |
| Visual QA | See QA section at bottom |

---

## PptxGenJS Essentials

- **Dimensions**: 10" x 5.625" (`LAYOUT_16x9`)
- **Colors**: 6-char hex **without** `#` → `"00C8FF"` not `"#00C8FF"`
- **Chinese font**: `"Microsoft YaHei"`
- **English font**: `"Arial"` (safe PPTX default)

### Theme Object Contract

```javascript
const theme = {
  primary: "E8EAF6",   // titles, prominent text
  secondary: "8B92B8", // body text, descriptions
  accent: "00C8FF",    // highlights, badges, links
  light: "8B5CF6",     // secondary accent
  bg: "06081A"         // slide background
};
```

---

## Shapes

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

---

## Text

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

---

## Fill with Transparency

```javascript
// Semi-transparent fill (0=opaque, 100=invisible)
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 1, y: 1, w: 3, h: 2,
  fill: { color: "00C8FF", transparency: 85 }
});
```

---

## Page Number Badge

```javascript
// Circle badge
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

---

## Images

```javascript
// Add image from local file
slide.addImage({ path: "imgs/photo.png", x: 1, y: 1, w: 3, h: 2 });

// Add image from URL
slide.addImage({ path: "https://example.com/img.png", x: 1, y: 1, w: 3, h: 2 });

// Image with sizing options
// sizing: { type: "cover" | "contain" | "crop", w: 3, h: 2 }
```

---

## Tables

```javascript
slide.addTable(
  [
    [
      { text: "Header 1", options: { bold: true, color: "FFFFFF", fill: { color: "00C8FF" } } },
      { text: "Header 2", options: { bold: true, color: "FFFFFF", fill: { color: "00C8FF" } } }
    ],
    [
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

---

## Charts

```javascript
// Bar chart
slide.addChart(pres.charts.BAR, [
  { name: "Series 1", labels: ["A", "B", "C"], values: [10, 20, 30] }
], { x: 1, y: 1, w: 5, h: 3, showTitle: true, title: "Chart Title" });

// Other chart types: pres.charts.LINE, PIE, DOUGHNUT, SCATTER, BUBBLE, RADAR
```

---

## Design Ideas

**Don't create boring slides.** Plain bullets on a white background won't impress anyone.

### Before Starting

- **Pick a bold, content-informed color palette**: The palette should feel designed for THIS topic. If swapping your colors into a completely different presentation would still "work," you haven't made specific enough choices.
- **Dominance over equality**: One color should dominate (60-70% visual weight), with 1-2 supporting tones and one sharp accent. Never give all colors equal weight.
- **Dark/light contrast**: Dark backgrounds for title + conclusion slides, light for content ("sandwich" structure). Or commit to dark throughout for a premium feel.
- **Commit to a visual motif**: Pick ONE distinctive element and repeat it — rounded image frames, icons in colored circles, thick single-side borders. Carry it across every slide.

### Color Palettes

Choose colors that match your topic — don't default to generic blue.

| Theme | Primary | Secondary | Accent |
|-------|---------|-----------|--------|
| **Midnight Executive** | `1E2761` (navy) | `CADCFC` (ice blue) | `FFFFFF` (white) |
| **Forest & Moss** | `2C5F2D` (forest) | `97BC62` (moss) | `F5F5F5` (cream) |
| **Coral Energy** | `F96167` (coral) | `F9E795` (gold) | `2F3C7E` (navy) |
| **Warm Terracotta** | `B85042` (terracotta) | `E7E8D1` (sand) | `A7BEAE` (sage) |
| **Ocean Gradient** | `065A82` (deep blue) | `1C7293` (teal) | `21295C` (midnight) |
| **Charcoal Minimal** | `36454F` (charcoal) | `F2F2F2` (off-white) | `212121` (black) |
| **Teal Trust** | `028090` (teal) | `00A896` (seafoam) | `02C39A` (mint) |
| **Berry & Cream** | `6D2E46` (berry) | `A26769` (dusty rose) | `ECE2D0` (cream) |
| **Sage Calm** | `84B59F` (sage) | `69A297` (eucalyptus) | `50808E` (slate) |
| **Cherry Bold** | `990011` (cherry) | `FCF6F5` (off-white) | `2F3C7E` (navy) |

### For Each Slide

**Every slide needs a visual element** — image, chart, icon, or shape. Text-only slides are forgettable.

**Layout options:**
- Two-column (text left, illustration on right)
- Icon + text rows (icon in colored circle, bold header, description below)
- 2x2 or 2x3 grid (image on one side, grid of content blocks on other)
- Half-bleed image (full left or right side) with content overlay

**Data display:**
- Large stat callouts (big numbers 60-72pt with small labels below)
- Comparison columns (before/after, pros/cons, side-by-side options)
- Timeline or process flow (numbered steps, arrows)

**Visual polish:**
- Icons in small colored circles next to section headers
- Italic accent text for key stats or taglines

### Typography

**Choose an interesting font pairing** — don't default to Arial. Pick a header font with personality and pair it with a clean body font.

| Header Font | Body Font |
|-------------|-----------|
| Georgia | Calibri |
| Arial Black | Arial |
| Calibri | Calibri Light |
| Cambria | Calibri |
| Trebuchet MS | Calibri |
| Impact | Arial |
| Palatino | Garamond |
| Consolas | Calibri |

| Element | Size |
|---------|------|
| Slide title | 36-44pt bold |
| Section header | 20-24pt bold |
| Body text | 14-16pt |
| Captions | 10-12pt muted |

### Spacing

- 0.5" minimum margins
- 0.3-0.5" between content blocks
- Leave breathing room—don't fill every inch

### Common Mistakes to Avoid

- **Don't repeat the same layout** — vary columns, cards, and callouts across slides
- **Don't center body text** — left-align paragraphs; center only titles
- **Don't skimp on size contrast** — titles need 36pt+ to stand out from 14-16pt body
- **Don't default to blue** — pick colors that reflect the specific topic
- **Don't mix spacing randomly** — choose 0.3" or 0.5" gaps and use consistently
- **Don't style one slide and leave the rest plain** — commit fully or keep it simple throughout
- **Don't create text-only slides** — add images, icons, charts, or visual elements
- **Don't use low-contrast elements** — icons AND text need strong contrast
- **Don't forget text box padding** — set `margin: 0` or offset shapes to account
- **NEVER use accent lines under titles** — hallmark of AI-generated slides

---

## QA (Required)

**Assume there are problems. Your job is to find them.**

Your first render is almost never correct. Approach QA as a bug hunt, not a confirmation step. If you found zero issues on first inspection, you weren't looking hard enough.

### Content QA

```bash
python -m markitdown output.pptx
```

Check for missing content, typos, wrong order.

```bash
python -m markitdown output.pptx | grep -iE "xxxx|lorem|ipsum|this.*(page|slide).*layout"
```

If grep returns results, fix them before declaring success.

### Visual QA

**USE SUBAGENTS** — even for 2-3 slides. You've been staring at the code and will see what you expect, not what's there. Subagents have fresh eyes.

Convert slides to images (see Converting to Images below), then use this prompt:

```
Visually inspect these slides. Assume there are issues — find them.

Look for:
- Overlapping elements (text through shapes, lines through words, stacked elements)
- Text overflow or cut off at edges/box boundaries
- Decorative lines positioned for single-line text but title wrapped to two lines
- Source citations or footers colliding with content above
- Elements too close (< 0.3" gaps) or cards/sections nearly touching
- Uneven gaps (large empty area in one place, cramped in another)
- Insufficient margin from slide edges (< 0.5")
- Columns or similar elements not aligned consistently
- Low-contrast text (e.g., light gray text on cream-colored background)
- Low-contrast icons (e.g., dark icons on dark backgrounds without a contrasting circle)
- Text boxes too narrow causing excessive wrapping
- Leftover placeholder content

For each slide, list issues or areas of concern, even if minor.

Read and analyze these images:
1. /path/to/slide-01.jpg (Expected: [brief description])
2. /path/to/slide-02.jpg (Expected: [brief description])

Report ALL issues found, including minor ones.
```

### Verification Loop

1. Generate → Convert to images → Inspect
2. **List issues found** (if none found, look again more critically)
3. Fix issues
4. **Re-verify affected slides** — one fix often creates another problem
5. Repeat until a full pass reveals no new issues

**Do not declare success until you've completed at least one fix-and-verify cycle.**

---

## Converting to Images

Convert presentations to individual slide images for visual inspection using LibreOffice + Poppler:

```bash
# Convert PPTX to PDF
soffice --headless --convert-to pdf output.pptx

# Convert PDF to individual slide images
pdftoppm -jpeg -r 150 output.pdf slide
```

This creates `slide-01.jpg`, `slide-02.jpg`, etc.

To re-render specific slides after fixes:

```bash
pdftoppm -jpeg -r 150 -f N -l N output.pdf slide-fixed
```

---

## Dependencies

All dependencies are declared in the skill's `package.json` or are system-level tools:

- `pptxgenjs` (in package.json) — PPTX generation
- System tools (optional, for QA only):
  - `markitdown` (`pip install "markitdown[pptx]"`) — text extraction
  - LibreOffice (`soffice`) — PDF conversion
  - Poppler (`pdftoppm`) — PDF to images
