/**
 * Slide 05 — Content: 执行模型对比
 */
function createSlide(pres, theme, shapes, tools) {
  const { addBadge, card } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addBadge(slide, 5);

  slide.addText("执行模型：链式 → 图式 → 事件驱动", { x: 0.6, y: 0.3, w: 8, h: 0.4, fontSize: 24, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("不同执行模型决定了 Agent 如何管理状态、处理分支和保持可恢复性", { x: 0.6, y: 0.7, w: 7, h: 0.25, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });

  const cols = [
    {
      x: 0.6, tag: "CHAINED", tagColor: theme.accent, title: "链式执行",
      desc: "线性流程：输入 → 步骤1 → 步骤2 → 输出",
      items: ["✗ 无法回退", "✗ 无法并行", "✗ 无法暂停", "✗ 恢复成本高"],
      itemColors: [theme.danger, theme.danger, theme.danger, theme.danger],
      rep: "早期 LangChain AgentExecutor",
    },
    {
      x: 3.6, tag: "GRAPH / DAG", tagColor: theme.accent2, title: "图式执行",
      desc: "控制流定义为有向图，支持环、分支和持久化",
      items: ["✓ 环(Cycle)——可回退", "✓ 分支与并行", "✓ 持久化检查点", "✓ 人机协作(HITL)"],
      itemColors: [theme.accent3, theme.accent3, theme.accent3, theme.accent3],
      rep: "LangGraph StateGraph",
    },
    {
      x: 6.6, tag: "EVENT-DRIVEN", tagColor: theme.accent3, title: "事件驱动",
      desc: "消息传递和异步通信实现多 Agent 协作",
      items: ["✓ 多 Agent 协作", "✓ 异步通信", "✗ 抽象多，系统复杂", "✗ 调试和迁移成本高"],
      itemColors: [theme.accent3, theme.accent3, theme.danger, theme.danger],
      rep: "AutoGen, MS Agent Framework",
    },
  ];

  cols.forEach(col => {
    // Tag
    slide.addShape(shapes.ROUNDED_RECTANGLE, { x: col.x, y: 1.15, w: 2.6, h: 0.3, fill: { color: col.tagColor, transparency: 85 }, rectRadius: 0.04 });
    slide.addText(col.tag, { x: col.x, y: 1.15, w: 2.6, h: 0.3, fontSize: 9, fontFace: "Arial", color: col.tagColor, bold: true, align: "center", valign: "middle" });
    // Title
    slide.addText(col.title, { x: col.x, y: 1.5, w: 2.6, h: 0.3, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    // Card
    card(slide, col.x, 1.9, 2.6, 2.3);
    slide.addText(col.desc, { x: col.x + 0.15, y: 1.95, w: 2.3, h: 0.45, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3 });
    // Items
    col.items.forEach((item, i) => {
      slide.addText(item, { x: col.x + 0.15, y: 2.5 + i * 0.35, w: 2.3, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: col.itemColors[i] });
    });
    // Rep
    card(slide, col.x, 4.35, 2.6, 0.4, { fill: theme.bgCardAlt });
    slide.addText(col.rep, { x: col.x + 0.1, y: 4.35, w: 2.4, h: 0.4, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "middle" });
  });
}

module.exports = { createSlide };
