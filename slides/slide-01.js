/**
 * Slide 01 — Cover: Agent Runtime Harness 深度调研
 */
function createSlide(pres, theme, shapes, tools) {
  const { addCornerMarks, addGlowOrb, card } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addGlowOrb(slide, 7.5, -1, 5, 5, theme.accent, 92);
  addGlowOrb(slide, 0.5, 3.5, 3.5, 3.5, theme.accent2, 94);
  addCornerMarks(slide);

  // Tag
  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.3, w: 2.2, h: 0.28, fill: { color: theme.accent, transparency: 85 }, rectRadius: 0.05 });
  slide.addText("DEEP RESEARCH 2025-2026", { x: 0.6, y: 1.3, w: 2.2, h: 0.28, fontSize: 9, fontFace: "Arial", color: theme.accent, bold: true, align: "center", valign: "middle" });

  // Title
  slide.addText("Agent Runtime\nHarness 深度调研", { x: 0.6, y: 1.8, w: 5.5, h: 1.6, fontSize: 44, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, lineSpacingMultiple: 1.1 });

  // Subtitle
  slide.addText("从\"Prompt\"到\"Harness\"——AI Agent 的范式转移\n执行循环 · 状态管理 · 工具沙箱 · 恢复机制", { x: 0.6, y: 3.5, w: 5, h: 0.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3 });

  // Meta
  slide.addText([
    { text: "2025-2026", options: {} },
    { text: "    技术调研", options: {} },
    { text: "    9 大框架对比", options: {} },
  ], { x: 0.6, y: 4.5, w: 4, h: 0.3, fontSize: 11, fontFace: "Arial", color: theme.secondary });

  // Right diagram card
  card(slide, 6.3, 0.8, 3.3, 4.3);
  // Flow diagram
  const flowY = 1.2;
  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 6.55, y: flowY, w: 0.8, h: 0.3, fill: { color: theme.accent2, transparency: 80 }, rectRadius: 0.04 });
  slide.addText("LLM", { x: 6.55, y: flowY, w: 0.8, h: 0.3, fontSize: 10, fontFace: "Arial", color: theme.accent2, bold: true, align: "center", valign: "middle" });
  slide.addText("→", { x: 7.35, y: flowY, w: 0.3, h: 0.3, fontSize: 16, color: theme.secondary, align: "center", valign: "middle" });
  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 7.6, y: flowY, w: 1, h: 0.3, fill: { color: theme.accent, transparency: 80 }, rectRadius: 0.04 });
  slide.addText("Harness", { x: 7.6, y: flowY, w: 1, h: 0.3, fontSize: 10, fontFace: "Arial", color: theme.accent, bold: true, align: "center", valign: "middle" });
  slide.addText("→", { x: 8.55, y: flowY, w: 0.3, h: 0.3, fontSize: 16, color: theme.secondary, align: "center", valign: "middle" });
  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 8.8, y: flowY, w: 0.6, h: 0.3, fill: { color: theme.accent3, transparency: 80 }, rectRadius: 0.04 });
  slide.addText("Tools", { x: 8.8, y: flowY, w: 0.6, h: 0.3, fontSize: 10, fontFace: "Arial", color: theme.accent3, bold: true, align: "center", valign: "middle" });

  // Divider
  slide.addShape(shapes.RECTANGLE, { x: 6.55, y: 1.85, w: 2.85, h: 0.008, fill: { color: theme.border } });

  // Formula
  slide.addText("Agent Loop + Harness\n= Production Agent", { x: 6.55, y: 2.0, w: 2.85, h: 0.7, fontSize: 14, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });

  // Divider
  slide.addShape(shapes.RECTANGLE, { x: 6.55, y: 2.85, w: 2.85, h: 0.008, fill: { color: theme.border } });

  // Tags
  const tags = ["ReAct", "DAG", "HITL", "MCP", "A2A"];
  const tagColors = [theme.accent, theme.accent2, theme.accent3, theme.accent, theme.accent2];
  tags.forEach((tag, idx) => {
    slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 6.65 + idx * 0.58, y: 3.1, w: 0.5, h: 0.24, fill: { color: tagColors[idx], transparency: 85 }, rectRadius: 0.04 });
    slide.addText(tag, { x: 6.65 + idx * 0.58, y: 3.1, w: 0.5, h: 0.24, fontSize: 8, fontFace: "Arial", color: tagColors[idx], bold: true, align: "center", valign: "middle" });
  });

  // Subtitle in card
  slide.addText("不试图成为智能体本身\n而是为智能体提供功能完备的操作环境", { x: 6.55, y: 3.6, w: 2.85, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "top", lineSpacingMultiple: 1.3 });

  // Framework list in card
  slide.addText([
    { text: "OpenAI SDK", options: { color: theme.accent, fontSize: 10 } },
    { text: "  LangGraph", options: { color: theme.accent2, fontSize: 10 } },
    { text: "  Claude Code", options: { color: theme.accent3, fontSize: 10 } },
  ], { x: 6.55, y: 4.5, w: 2.85, h: 0.3, fontFace: "Arial", align: "center", valign: "middle" });
}

module.exports = { createSlide };
