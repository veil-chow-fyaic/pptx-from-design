/**
 * Slide 08 — Section Divider: PART 03 Claude Code
 */
function createSlide(pres, theme, shapes, tools) {
  const { addGlowOrb, addBadge, addSectionNum, card } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addGlowOrb(slide, 6.5, 0.3, 4, 4, theme.accent, 92);
  addSectionNum(slide, "03");
  addBadge(slide, 8);

  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.6, w: 1.1, h: 0.28, fill: { color: theme.accent, transparency: 85 }, rectRadius: 0.05 });
  slide.addText("PART 03", { x: 0.6, y: 1.6, w: 1.1, h: 0.28, fontSize: 10, fontFace: "Arial", color: theme.accent, bold: true, align: "center", valign: "middle" });

  slide.addText("Claude Code\n源码级剖析", { x: 0.6, y: 2.1, w: 5.5, h: 1.2, fontSize: 40, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, lineSpacingMultiple: 1.1 });
  slide.addText("Host-loop 型 Harness 的顶级实践\nAgent Loop + Harness = Claude Code", { x: 0.6, y: 3.5, w: 5, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3 });

  // Right formula card
  card(slide, 6.3, 1.8, 3.2, 2.2, { accentBorder: theme.accent });
  slide.addText("FORMULA", { x: 6.5, y: 1.9, w: 1.5, h: 0.25, fontSize: 9, fontFace: "Arial", color: theme.secondary });
  slide.addText([
    { text: "Agent Loop", options: { color: theme.accent2, bold: true, fontSize: 16 } },
    { text: " + ", options: { color: theme.secondary, fontSize: 16 } },
    { text: "Harness", options: { color: theme.accent, bold: true, fontSize: 16 } },
    { text: "\n= Production Agent", options: { color: theme.primary, bold: true, fontSize: 16 } },
  ], { x: 6.5, y: 2.2, w: 2.8, h: 0.9, fontFace: "Microsoft YaHei", valign: "top" });
  slide.addText("不试图成为智能体本身，而是为智能体提供功能完备的操作环境", { x: 6.5, y: 3.3, w: 2.8, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3 });
}

module.exports = { createSlide };
