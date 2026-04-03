/**
 * slide-template.js — 单页 Slide 模板
 *
 * Phase 2 时根据 Phase 1 的 HTML 设计，按此模板逐页生成 slide JS。
 */
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',   // cover | toc | section | content | summary
  index: 1,          // slide 序号
  title: 'Slide Title'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ─── 内容区域 ────────────────────────────────────────────
  // 根据 Phase 1 HTML 设计稿逐元素翻译为 PptxGenJS 调用

  // ─── 页码徽章（Cover 页除外）─────────────────────────────
  if (slideConfig.type !== 'cover') {
    slide.addShape(pres.shapes.OVAL, {
      x: 9.3, y: 5.1, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(slideConfig.index), {
      x: 9.3, y: 5.1, w: 0.4, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  }

  return slide;
}

// ─── Standalone Preview ──────────────────────────────────────
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "E8EAF6", secondary: "8B92B8",
    accent: "00C8FF", light: "8B5CF6", bg: "06081A"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: `slide-${String(slideConfig.index).padStart(2, '0')}-preview.pptx` });
}

module.exports = { createSlide, slideConfig };
