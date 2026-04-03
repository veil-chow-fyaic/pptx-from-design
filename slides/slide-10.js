/**
 * Slide 10 — Section Divider: PART 04 生产级挑战
 */
function createSlide(pres, theme, shapes, tools) {
  const { addGlowOrb, addBadge, addSectionNum } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addGlowOrb(slide, -0.5, 1, 3.5, 3.5, theme.danger, 94);
  addSectionNum(slide, "04");
  addBadge(slide, 10);

  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.6, w: 1.1, h: 0.28, fill: { color: theme.danger, transparency: 85 }, rectRadius: 0.05 });
  slide.addText("PART 04", { x: 0.6, y: 1.6, w: 1.1, h: 0.28, fontSize: 10, fontFace: "Arial", color: theme.danger, bold: true, align: "center", valign: "middle" });

  slide.addText("生产级\n关键挑战", { x: 0.6, y: 2.1, w: 5.5, h: 1.2, fontSize: 40, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, lineSpacingMultiple: 1.1 });
  slide.addText("从概念验证到生产落地，Agent Harness 面临的五大核心工程难题", { x: 0.6, y: 3.5, w: 5, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3 });
}

module.exports = { createSlide };
