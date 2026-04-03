/**
 * Slide 09 — Content: Claude Code 核心架构
 */
function createSlide(pres, theme, shapes, tools) {
  const { addBadge, card } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addBadge(slide, 9);

  slide.addText("Claude Code 核心架构", { x: 0.6, y: 0.25, w: 8, h: 0.35, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("工具系统 ~29K 行代码 · 三层上下文压缩 · Worktree 文件系统隔离 · 五级权限模型", { x: 0.6, y: 0.6, w: 8, h: 0.25, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Left: Architecture layers
  const layers = [
    { label: "QueryEngine", color: theme.accent2, desc: "流式响应 · 工具调用循环 · 扩展思考 · 重试与 Token 计数" },
    { label: "工具系统", color: theme.accent, desc: "~29K 行 · 原子性 · 可组合性 · 自我描述性 (Zod Schema)" },
    { label: "上下文管理", color: theme.accent3, desc: "三层压缩：子智能体隔离 → 上下文压缩 → 任务持久化" },
    { label: "多智能体协调", color: theme.warn, desc: "6 种架构模式 · Worktree 文件系统隔离 · 独立消息数组" },
    { label: "权限系统", color: theme.danger, desc: "默认/计划/自动/绕过/不询问 · 细粒度规则 · Git Worktree 沙箱" },
  ];

  layers.forEach((l, i) => {
    const ly = 1.05 + i * 0.82;
    card(slide, 0.6, ly, 4.4, 0.7, { accentBorder: l.color });
    slide.addText(l.label, { x: 0.8, y: ly + 0.08, w: 1.2, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: l.color, bold: true });
    slide.addText(l.desc, { x: 2.0, y: ly + 0.08, w: 2.8, h: 0.5, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3, valign: "top" });
  });

  // Right: Key highlights
  // Three-layer compression
  card(slide, 5.3, 1.05, 4.2, 1.65, { accentBorder: theme.accent3 });
  slide.addText("三层上下文压缩", { x: 5.5, y: 1.1, w: 3, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent3, bold: true });
  slide.addText([
    { text: "L1 ", options: { color: theme.accent3, bold: true } },
    { text: "子智能体隔离 — 独立消息数组\n", options: {} },
    { text: "L2 ", options: { color: theme.accent3, bold: true } },
    { text: "上下文压缩 — 保留关键，丢弃冗余\n", options: {} },
    { text: "L3 ", options: { color: theme.accent3, bold: true } },
    { text: "任务持久化 — 磁盘文件，跨会话恢复", options: {} },
  ], { x: 5.5, y: 1.45, w: 3.8, h: 1.1, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.4, valign: "top" });

  // Worktree
  card(slide, 5.3, 2.9, 4.2, 1.1, { accentBorder: theme.accent });
  slide.addText("Worktree 隔离机制", { x: 5.5, y: 2.95, w: 3, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("Git Worktree 为每个子智能体提供独立工作区，安全修改代码副本。任务完成后通过 Git Merge 合并回主分支。", { x: 5.5, y: 3.3, w: 3.8, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, lineSpacingMultiple: 1.3 });

  // Error recovery
  card(slide, 5.3, 4.2, 4.2, 1.1, { accentBorder: theme.accent2 });
  slide.addText("错误恢复体系", { x: 5.5, y: 4.25, w: 2, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent2, bold: true });
  const errTags = ["429/529 重试", "401 OAuth", "413 上下文恢复", "MaxToken 升预算", "失败回退模型", "流式→非流式续"];
  errTags.forEach((t, i) => {
    const tx = 5.5 + (i % 3) * 1.25;
    const ty = 4.6 + Math.floor(i / 3) * 0.3;
    slide.addShape(shapes.ROUNDED_RECTANGLE, { x: tx, y: ty, w: 1.15, h: 0.22, fill: { color: theme.border }, rectRadius: 0.03 });
    slide.addText(t, { x: tx, y: ty, w: 1.15, h: 0.22, fontSize: 8, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "middle" });
  });
}

module.exports = { createSlide };
