/**
 * Slide 02 — TOC: 内容导航
 */
function createSlide(pres, theme, shapes, tools) {
  const { addGlowOrb, addBadge, card } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  addGlowOrb(slide, -0.5, 0.5, 3, 3, theme.accent2, 94);
  addBadge(slide, 2);

  slide.addText("内容导航", { x: 0.6, y: 0.3, w: 3, h: 0.45, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("CONTENTS", { x: 0.6, y: 0.7, w: 2, h: 0.3, fontSize: 11, fontFace: "Arial", color: theme.secondary });

  const sections = [
    { num: "01", title: "理论模型与设计原理", desc: "ReAct vs Plan-and-Execute · 执行模型对比 · Durable Execution", color: theme.accent },
    { num: "02", title: "主流框架深度对比", desc: "SDK/Runner · Graph Runtime · Event-driven · Host-loop", color: theme.accent2 },
    { num: "03", title: "Claude Code 源码级剖析", desc: "核心循环 · 三层压缩 · Worktree 隔离 · 权限系统", color: theme.accent3 },
    { num: "04", title: "生产级关键挑战", desc: "断点续跑 · 人机协作 · 多 Agent 治理 · 成本控制", color: theme.warn },
    { num: "05", title: "行业趋势：标准化与演进", desc: "MCP 协议 · A2A 协议 · Framework → Runtime · Agent 即基础设施", color: theme.danger },
  ];

  // 2x2 + 1 wide layout
  sections.forEach((sec, idx) => {
    let x, y, w, h;
    if (idx < 2) {
      x = 0.6 + idx * 4.5; y = 1.2; w = 4.2; h = 1.5;
    } else if (idx < 4) {
      x = 0.6 + (idx - 2) * 4.5; y = 2.9; w = 4.2; h = 1.5;
    } else {
      x = 0.6; y = 4.6; w = 8.7; h = 0.8;
    }
    card(slide, x, y, w, h);
    slide.addText(sec.num, { x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5, fontSize: 28, fontFace: "Arial", color: sec.color, bold: true, transparency: 40 });
    slide.addText(sec.title, { x: x + 0.7, y: y + 0.15, w: w - 0.9, h: 0.35, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, valign: "middle" });
    slide.addText(sec.desc, { x: x + 0.7, y: y + 0.55, w: w - 0.9, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  });
}

module.exports = { createSlide };
