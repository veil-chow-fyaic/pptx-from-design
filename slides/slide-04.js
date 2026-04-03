/**
 * Slide 04 — Content: ReAct vs Plan-and-Execute
 */
function createSlide(pres, theme, shapes, tools) {
  const { addBadge, card } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addBadge(slide, 4);

  // Header
  slide.addText("执行循环：ReAct vs Plan-and-Execute", { x: 0.6, y: 0.3, w: 8, h: 0.4, fontSize: 24, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("两种主流执行循环模式的核心差异与适用场景", { x: 0.6, y: 0.7, w: 6, h: 0.25, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Left: ReAct
  card(slide, 0.6, 1.15, 4.2, 3.3, { accentBorder: theme.accent });
  slide.addText("ReAct (Reasoning + Acting)", { x: 0.8, y: 1.25, w: 3.8, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("模仿人类解决复杂问题的直觉——一边推理，一边行动", { x: 0.8, y: 1.55, w: 3.8, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText([
    { text: "Thought", options: { color: theme.accent, bold: true, fontSize: 11 } },
    { text: "  → 内部思考，分析当前状态\n", options: { fontSize: 11 } },
    { text: "Action", options: { color: theme.accent, bold: true, fontSize: 11 } },
    { text: "  → 调用工具或向用户提问\n", options: { fontSize: 11 } },
    { text: "Observation", options: { color: theme.accent, bold: true, fontSize: 11 } },
    { text: " → 获取结果与反馈\n", options: { fontSize: 11 } },
    { text: "Loop", options: { color: theme.accent, bold: true, fontSize: 11 } },
    { text: "      → 回到 Thought", options: { fontSize: 11 } },
  ], { x: 0.8, y: 1.95, w: 3.8, h: 1.4, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.4, valign: "top" });

  // ReAct metrics
  card(slide, 0.6, 3.85, 4.2, 0.55);
  slide.addText([
    { text: "灵活性 ", options: { color: theme.secondary, fontSize: 10 } },
    { text: "极高  ", options: { color: theme.accent3, fontSize: 10, bold: true } },
    { text: " Token消耗 ", options: { color: theme.secondary, fontSize: 10 } },
    { text: "高  ", options: { color: theme.danger, fontSize: 10, bold: true } },
    { text: " 适用 ", options: { color: theme.secondary, fontSize: 10 } },
    { text: "动态/探索性任务", options: { fontSize: 10 } },
  ], { x: 0.8, y: 3.9, w: 3.8, h: 0.4, fontFace: "Microsoft YaHei", valign: "middle" });

  // Right: Plan-and-Execute
  card(slide, 5.2, 1.15, 4.2, 2.4, { accentBorder: theme.accent2 });
  slide.addText("Plan-and-Execute", { x: 5.4, y: 1.25, w: 3.8, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent2, bold: true });
  slide.addText("目标明确、步骤清晰，对可靠性和可审计性要求高", { x: 5.4, y: 1.55, w: 3.8, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText([
    { text: "Plan", options: { color: theme.accent2, bold: true, fontSize: 11 } },
    { text: "    → 大模型制定完整执行计划\n", options: { fontSize: 11 } },
    { text: "Execute", options: { color: theme.accent2, bold: true, fontSize: 11 } },
    { text: " → 轻量模型逐步执行\n", options: { fontSize: 11 } },
    { text: "Verify", options: { color: theme.accent2, bold: true, fontSize: 11 } },
    { text: "   → 验证结果，必要时重规划", options: { fontSize: 11 } },
  ], { x: 5.4, y: 1.95, w: 3.8, h: 1.1, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.4, valign: "top" });

  // P&E metrics
  card(slide, 5.2, 3.0, 4.2, 0.55);
  slide.addText([
    { text: "灵活性 ", options: { color: theme.secondary, fontSize: 10 } },
    { text: "较低  ", options: { color: theme.danger, fontSize: 10, bold: true } },
    { text: " Token消耗 ", options: { color: theme.secondary, fontSize: 10 } },
    { text: "低  ", options: { color: theme.accent3, fontSize: 10, bold: true } },
    { text: " 适用 ", options: { color: theme.secondary, fontSize: 10 } },
    { text: "结构化/高可靠性", options: { fontSize: 10 } },
  ], { x: 5.4, y: 3.05, w: 3.8, h: 0.4, fontFace: "Microsoft YaHei", valign: "middle" });

  // Bottom: Mixed strategy
  card(slide, 5.2, 3.85, 4.2, 0.55, { accentBorder: theme.accent3 });
  slide.addText([
    { text: "混合策略", options: { color: theme.accent3, bold: true, fontSize: 10 } },
    { text: "：Plan-and-Execute 框架下为复杂子任务嵌入 ReAct——\"大处着眼规划，小处着手应变\"", options: { fontSize: 10 } },
  ], { x: 5.4, y: 3.88, w: 3.8, h: 0.45, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "middle" });
}

module.exports = { createSlide };
