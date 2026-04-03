/**
 * compile.js — PPTX 编译入口
 * Agent Runtime Harness 深度调研 2025-2026
 */
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'AI Research';
pres.title = 'Agent Runtime Harness 深度调研 2025-2026';

// ─── Theme ──────────────────────────────────────────────
const theme = {
  primary: "E2E8F0",
  secondary: "94A3B8",
  accent: "06B6D4",
  accent2: "8B5CF6",
  accent3: "10B981",
  danger: "EF4444",
  warn: "F59E0B",
  bg: "0A0E1A",
  bgCard: "111827",
  bgCardAlt: "0F172A",
  border: "1E293B",
};

// ─── Helpers ────────────────────────────────────────────
const makeShadow = () => ({ type: "outer", blur: 4, offset: 1, angle: 135, color: "000000", opacity: 0.12 });

function addBadge(slide, num) {
  slide.addShape(pres.shapes.OVAL, {
    x: 9.35, y: 5.1, w: 0.38, h: 0.38,
    fill: { color: theme.accent },
  });
  slide.addText(String(num), {
    x: 9.35, y: 5.1, w: 0.38, h: 0.38,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle",
  });
}

function addCornerMarks(slide) {
  // Top-left
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 0.2, w: 0.18, h: 0.02, fill: { color: theme.accent }, transparency: 60 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 0.2, w: 0.02, h: 0.18, fill: { color: theme.accent }, transparency: 60 });
  // Bottom-right
  slide.addShape(pres.shapes.RECTANGLE, { x: 9.6, y: 5.4, w: 0.18, h: 0.02, fill: { color: theme.accent }, transparency: 60 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 9.76, y: 5.22, w: 0.02, h: 0.18, fill: { color: theme.accent }, transparency: 60 });
}

function addGlowOrb(slide, x, y, w, h, color, transparency) {
  slide.addShape(pres.shapes.OVAL, {
    x, y, w, h,
    fill: { color, transparency },
  });
}

function addSectionNum(slide, num) {
  slide.addText(num, {
    x: 7.2, y: 3.2, w: 3, h: 2.5,
    fontSize: 200, fontFace: "JetBrains Mono",
    color: theme.accent, bold: true,
    transparency: 93,
    align: "right", valign: "bottom",
  });
}

function card(slide, x, y, w, h, opts = {}) {
  const fillColor = opts.fill || theme.bgCard;
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: fillColor },
    line: { color: opts.border || theme.border, width: 0.75 },
    rectRadius: 0.05,
  });
  if (opts.accentBorder) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y: y + 0.02, w: 0.04, h: h - 0.04,
      fill: { color: opts.accentBorder },
    });
  }
}

// ─── Slides ─────────────────────────────────────────────
const totalSlides = 12;

for (let i = 1; i <= totalSlides; i++) {
  const num = String(i).padStart(2, '0');
  const { createSlide } = require(path.join(__dirname, `slide-${num}.js`));
  createSlide(pres, theme, pres.shapes, { addBadge, addCornerMarks, addGlowOrb, addSectionNum, card, makeShadow });
}

// ─── Output ─────────────────────────────────────────────
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'presentation.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => console.log(`PPTX generated: ${outputPath}`))
  .catch(err => console.error('Generation failed:', err));
