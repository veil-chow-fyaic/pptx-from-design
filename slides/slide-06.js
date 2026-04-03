/**
 * Slide 06 — Section Divider: PART 02 框架对比
 */
function createSlide(pres, theme, shapes, tools) {
  const { addGlowOrb, addBadge, addSectionNum } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addGlowOrb(slide, 2, 4, 4, 3, theme.accent2, 93);
  addSectionNum(slide, "02");
  addBadge(slide, 6);

  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.6, w: 1.1, h: 0.28, fill: { color: theme.accent2, transparency: 85 }, rectRadius: 0.05 });
  slide.addText("PART 02", { x: 0.6, y: 1.6, w: 1.1, h: 0.28, fontSize: 10, fontFace: "Arial", color: theme.accent2, bold: true, align: "center", valign: "middle" });

  slide.addText("主流框架\n深度对比", { x: 0.6, y: 2.1, w: 5, h: 1.2, fontSize: 40, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, lineSpacingMultiple: 1.1 });
  slide.addText("SDK/Runner · Graph Runtime · Event-driven Multi-agent · Host-loop\n四种路线各有优劣", { x: 0.6, y: 3.5, w: 5, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3 });
}

module.exports = { createSlide };
