/**
 * Slide 11 — Content: 五大挑战 + MCP/A2A 协议
 */
function createSlide(pres, theme, shapes, tools) {
  const { addBadge, card } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addBadge(slide, 11);

  slide.addText("五大生产挑战 + 互操作协议", { x: 0.6, y: 0.25, w: 8, h: 0.35, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("MCP 解决 Agent 与工具的连接，A2A 解决 Agent 与 Agent 的通信", { x: 0.6, y: 0.6, w: 8, h: 0.25, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Left: 5 challenges
  const challenges = [
    { num: "01", title: "Long-running Task Recovery", desc: "状态持久化 · 检查点策略 · 状态一致性 · 中断恢复", color: theme.accent },
    { num: "02", title: "Human-in-the-Loop", desc: "审批流程设计 · 状态可见性 · 责任界定 · 用户体验", color: theme.accent2 },
    { num: "03", title: "Multi-agent Governance", desc: "任务分解 · 沟通协议 · 角色定义 · 监控与审计", color: theme.accent3 },
    { num: "04", title: "Cost / Resource Control", desc: "预算管理 · 资源配额 · 优先级调度 · 成本预测", color: theme.warn },
    { num: "05", title: "Observability & Tracing", desc: "结构化日志 · 分布式追踪 · 可视化 · 审计合规", color: theme.danger },
  ];

  challenges.forEach((ch, i) => {
    const cy = 1.0 + i * 0.85;
    card(slide, 0.6, cy, 4.2, 0.72);
    // Num circle
    slide.addShape(shapes.OVAL, { x: 0.75, y: cy + 0.12, w: 0.3, h: 0.3, fill: { color: ch.color, transparency: 85 } });
    slide.addText(ch.num, { x: 0.75, y: cy + 0.12, w: 0.3, h: 0.3, fontSize: 9, fontFace: "Arial", color: ch.color, bold: true, align: "center", valign: "middle" });
    slide.addText(ch.title, { x: 1.15, y: cy + 0.08, w: 3.5, h: 0.28, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, valign: "middle" });
    slide.addText(ch.desc, { x: 1.15, y: cy + 0.38, w: 3.5, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
  });

  // Right: Protocols
  // MCP
  card(slide, 5.2, 1.0, 4.2, 1.6, { accentBorder: theme.accent });
  slide.addText([
    { text: "MCP", options: { color: theme.accent, bold: true, fontSize: 14 } },
    { text: "  ", options: {} },
  ], { x: 5.4, y: 1.05, w: 1, h: 0.3, fontFace: "Arial", valign: "middle" });
  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 5.9, y: 1.08, w: 1.2, h: 0.22, fill: { color: theme.accent, transparency: 85 }, rectRadius: 0.04 });
  slide.addText("Agent ↔ Tools", { x: 5.9, y: 1.08, w: 1.2, h: 0.22, fontSize: 8, fontFace: "Arial", color: theme.accent, bold: true, align: "center", valign: "middle" });
  slide.addText("Model Context Protocol · Anthropic 2024", { x: 5.4, y: 1.35, w: 3.8, h: 0.2, fontSize: 9, fontFace: "Arial", color: theme.secondary });
  slide.addText("统一工具集成接口，写一次处处可用", { x: 5.4, y: 1.55, w: 3.8, h: 0.2, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText([
    { text: "▸ ", options: { color: theme.accent } },
    { text: "三层架构：Host → Client → Server\n", options: {} },
    { text: "▸ ", options: { color: theme.accent } },
    { text: "暴露 Tools / Resources / Prompts\n", options: {} },
    { text: "▸ ", options: { color: theme.accent } },
    { text: "N+M 集成复杂度（vs N×M）", options: {} },
  ], { x: 5.4, y: 1.8, w: 3.8, h: 0.7, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3, valign: "top" });

  // A2A
  card(slide, 5.2, 2.8, 4.2, 1.6, { accentBorder: theme.accent2 });
  slide.addText([
    { text: "A2A", options: { color: theme.accent2, bold: true, fontSize: 14 } },
    { text: "  ", options: {} },
  ], { x: 5.4, y: 2.85, w: 1, h: 0.3, fontFace: "Arial", valign: "middle" });
  slide.addShape(shapes.ROUNDED_RECTANGLE, { x: 5.9, y: 2.88, w: 1.3, h: 0.22, fill: { color: theme.accent2, transparency: 85 }, rectRadius: 0.04 });
  slide.addText("Agent ↔ Agent", { x: 5.9, y: 2.88, w: 1.3, h: 0.22, fontSize: 8, fontFace: "Arial", color: theme.accent2, bold: true, align: "center", valign: "middle" });
  slide.addText("Agent-to-Agent Protocol · Google 2025", { x: 5.4, y: 3.15, w: 3.8, h: 0.2, fontSize: 9, fontFace: "Arial", color: theme.secondary });
  slide.addText("标准化多 Agent 互操作，类 TCP/IP 四层架构", { x: 5.4, y: 3.35, w: 3.8, h: 0.2, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText([
    { text: "▸ ", options: { color: theme.accent2 } },
    { text: "能力发现 (Agent Card)\n", options: {} },
    { text: "▸ ", options: { color: theme.accent2 } },
    { text: "任务管理 + 协作引擎\n", options: {} },
    { text: "▸ ", options: { color: theme.accent2 } },
    { text: "HTTP/2 + WebSocket 传输", options: {} },
  ], { x: 5.4, y: 3.6, w: 3.8, h: 0.7, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3, valign: "top" });

  // Evolution
  card(slide, 5.2, 4.6, 4.2, 0.7, { accentBorder: theme.accent3 });
  slide.addText("演进路径", { x: 5.4, y: 4.62, w: 1.5, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.accent3, bold: true });
  slide.addText("Framework → Runtime → Harness（叠加使用）", { x: 5.4, y: 4.85, w: 3.8, h: 0.2, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("2026 年预计出现统一智能体协议标准框架", { x: 5.4, y: 5.05, w: 3.8, h: 0.2, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.secondary });
}

module.exports = { createSlide };
