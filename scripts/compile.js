/**
 * compile.js — PPTX 编译入口模板
 *
 * 使用方式：
 *   1. 复制到 slides/ 工作目录
 *   2. 修改 theme 为 Phase 1 选定的配色
 *   3. 设置 totalSlides 为实际数量
 *   4. 运行: node compile.js
 */
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

// ─── Theme（与 Phase 1 HTML 设计保持一致）───────────────────
const theme = {
  primary: "E8EAF6",
  secondary: "8B92B8",
  accent: "00C8FF",
  light: "8B5CF6",
  bg: "06081A"
};

// ─── Slide 编译 ──────────────────────────────────────────
const totalSlides = 0; // TODO: 改为实际 slide 数量

for (let i = 1; i <= totalSlides; i++) {
  const num = String(i).padStart(2, '0');
  const { createSlide } = require(path.join(__dirname, `slide-${num}.js`));
  createSlide(pres, theme);
}

// ─── 输出 ────────────────────────────────────────────────
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'presentation.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => console.log(`PPTX generated: ${outputPath}`))
  .catch(err => console.error('Generation failed:', err));
