/**
 * Slide 03 — Section Divider: PART 01 理论模型
 */
function createSlide(pres, theme, shapes, tools) {
  const { addGlowOrb, addBadge, addSectionNum } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addGlowOrb(slide, 6, 0.5, 5, 5, theme.accent, 92);
  addSectionNum(slide, "01");
  addBadge(slide, 3);

  // Tag
  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.6, w: 1.1, h: 0.28, fill: { color: theme.accent, transparency: 85 }, rectRadius: 0.05 });
  slide.addText("PART 01", { x: 0.6, y: 1.6, w: 1.1, h: 0.28, fontSize: 10, fontFace: "Arial", color: theme.accent, bold: true, align: "center", valign: "middle" });

  slide.addText("理论模型与\n设计原理", { x: 0.6, y: 2.1, w: 5, h: 1.4, fontSize: 40, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, lineSpacingMultiple: 1.1 });
  slide.addText("执行循环是 Harness 的核心组件，决定了 Agent 如何在\"思考-行动-观察\"之间循环迭代", { x: 0.6, y: 3.7, w: 4.5, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3 });

  // Right side concept card
  tools.card(slide, 6.2, 1.8, 3.4, 2.8, { accentBorder: theme.accent });
  slide.addText("核心概念", { x: 6.4, y: 1.95, w: 2, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText([
    { text: "▸ ", options: { color: theme.accent } },
    { text: "执行循环：ReAct / Plan-and-Execute\n", options: {} },
    { text: "▸ ", options: { color: theme.accent } },
    { text: "执行模型：状态机 / DAG / 事件驱动\n", options: {} },
    { text: "▸ ", options: { color: theme.accent } },
    { text: "Durable Execution：长任务基石", options: {} },
  ], { x: 6.4, y: 2.4, w: 2.9, h: 1.8, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.5, valign: "top" });
}

module.exports = { createSlide };
