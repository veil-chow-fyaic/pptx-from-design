/**
 * Slide 12 — Summary: 核心结论
 */
function createSlide(pres, theme, shapes, tools) {
  const { addGlowOrb, addCornerMarks, card } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addGlowOrb(slide, -0.5, -0.5, 3.5, 3.5, theme.accent, 94);
  addGlowOrb(slide, 7, 4, 3, 3, theme.accent2, 95);
  addCornerMarks(slide);

  // Quote
  slide.addText([
    { text: "\"模型是", options: { fontSize: 20, fontFace: "Microsoft YaHei", color: theme.secondary } },
    { text: "大脑", options: { fontSize: 20, fontFace: "Microsoft YaHei", color: theme.accent, bold: true } },
    { text: "，Harness 是", options: { fontSize: 20, fontFace: "Microsoft YaHei", color: theme.secondary } },
    { text: "神经系统和操作系统", options: { fontSize: 20, fontFace: "Microsoft YaHei", color: theme.accent, bold: true } },
    { text: "。\n大脑再聪明，如果系统调度一团糟，最后还是会把活干崩。\"", options: { fontSize: 20, fontFace: "Microsoft YaHei", color: theme.secondary } },
  ], { x: 0.6, y: 0.4, w: 8.8, h: 1.0, valign: "top", lineSpacingMultiple: 1.3 });

  // Divider
  slide.addShape(shapes.RECTANGLE, { x: 0.6, y: 1.55, w: 8.8, h: 0.01, fill: { color: theme.border } });

  // Takeaways
  const takeaways = [
    { dot: theme.accent, text: "执行循环是核心 — ReAct 灵活但昂贵，Plan-Execute 可靠但僵化，混合策略最优" },
    { dot: theme.accent2, text: "图式执行是趋势 — DAG/状态机解决了链式模型的回退/并行/暂停/恢复四大痛点" },
    { dot: theme.accent3, text: "Durable Execution 是基石 — 状态持久化 + 检查点 + 恢复策略 = 长任务可靠性" },
    { dot: theme.warn, text: "Claude Code 是标杆 — 三层压缩 + Worktree 隔离 + 精细权限 = 生产级范本" },
    { dot: theme.danger, text: "MCP + A2A 互补 — MCP 统一工具接口，A2A 统一 Agent 间通信" },
    { dot: theme.accent, text: "Agent 即基础设施 — 从特定应用到新兴基础设施，以\"数字员工\"身份融入企业" },
  ];

  takeaways.forEach((t, i) => {
    const tx = i % 2 === 0 ? 0.6 : 5.3;
    const ty = 1.8 + Math.floor(i / 2) * 0.95;
    // Dot
    slide.addShape(shapes.OVAL, { x: tx, y: ty + 0.1, w: 0.12, h: 0.12, fill: { color: t.dot } });
    slide.addText(t.text, { x: tx + 0.22, y: ty, w: 4.2, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3, valign: "top" });
  });

  // Footer
  slide.addText("Agent Runtime Harness 深度调研 2025-2026 · 技术调研报告", { x: 0, y: 5.2, w: 10, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "middle" });
}

module.exports = { createSlide };
