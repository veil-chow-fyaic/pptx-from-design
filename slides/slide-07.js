/**
 * Slide 07 — Content: 9 大框架能力矩阵
 */
function createSlide(pres, theme, shapes, tools) {
  const { addBadge } = tools;
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addBadge(slide, 7);

  slide.addText("9 大 Agent 框架能力矩阵", { x: 0.4, y: 0.2, w: 8, h: 0.4, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("按类型分组的框架对比，覆盖执行模型、状态管理、权限、中断恢复等核心维度", { x: 0.4, y: 0.55, w: 8, h: 0.25, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });

  const rows = [
    { name: "OpenAI Agents SDK", type: "SDK", typeC: theme.accent, model: "执行循环", state: "有限", perm: "基本", recover: "有限", advantage: "极简原语，快速上手" },
    { name: "Claude Agent SDK", type: "SDK", typeC: theme.accent, model: "执行循环", state: "有限", perm: "中等", recover: "有限", advantage: "MCP 原生支持，多模型" },
    { name: "LangGraph", type: "Graph", typeC: theme.accent2, model: "状态机/DAG", state: "强", stateC: theme.accent3, perm: "中等", recover: "强", recoverC: theme.accent3, advantage: "持久化+时间旅行调试" },
    { name: "MS Agent Framework", type: "Event", typeC: theme.accent3, model: "事件驱动", state: "强", stateC: theme.accent3, perm: "强", permC: theme.accent3, recover: "中等", advantage: "企业级工作流编排" },
    { name: "AutoGen", type: "Event", typeC: theme.accent3, model: "事件驱动", state: "中等", perm: "中等", recover: "中等", advantage: "对话驱动多智能体协作" },
    { name: "Claude Code", type: "Host", typeC: theme.accent, model: "宿主控制", state: "强", stateC: theme.accent3, perm: "极强", permC: theme.accent, recover: "强", recoverC: theme.accent3, advantage: "三层压缩+Worktree隔离", highlight: true },
    { name: "OpenHands", type: "Host", typeC: theme.accent, model: "宿主控制", state: "中等", perm: "强", permC: theme.accent3, recover: "中等", advantage: "贴近真实宿主环境" },
    { name: "CrewAI", type: "Role", typeC: theme.accent2, model: "任务驱动", state: "中等", perm: "中等", recover: "有限", advantage: "角色驱动，上手极快" },
    { name: "Google ADK", type: "Kit", typeC: theme.accent, model: "多范式", state: "强", stateC: theme.accent3, perm: "强", permC: theme.accent3, recover: "强", recoverC: theme.accent3, advantage: "模型无关，随处部署" },
  ];

  const headers = ["框架", "类型", "执行模型", "状态", "权限", "恢复", "核心优势"];
  const colW = [1.5, 0.65, 0.95, 0.6, 0.6, 0.6, 1.9];
  const colX = [];
  let cx = 0.4;
  colW.forEach(w => { colX.push(cx); cx += w + 0.05; });

  // Header row
  headers.forEach((h, i) => {
    slide.addText(h, { x: colX[i], y: 0.95, w: colW[i], h: 0.3, fontSize: 8, fontFace: "Arial", color: theme.accent, bold: true, valign: "middle" });
  });
  slide.addShape(shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 6.2, h: 0.012, fill: { color: theme.accent } });

  // Data rows
  rows.forEach((row, ri) => {
    const ry = 1.3 + ri * 0.45;
    const bg = row.highlight ? theme.accent : undefined;
    const bgTrans = row.highlight ? 93 : undefined;
    if (row.highlight) {
      slide.addShape(shapes.RECTANGLE, { x: 0.35, y: ry - 0.02, w: 6.3, h: 0.44, fill: { color: theme.accent }, transparency: 93 });
    }

    slide.addText(row.name, { x: colX[0], y: ry, w: colW[0], h: 0.4, fontSize: 9, fontFace: "Microsoft YaHei", color: row.highlight ? theme.accent : theme.primary, bold: true, valign: "middle" });

    // Type tag
    slide.addShape(shapes.ROUNDED_RECTANGLE, { x: colX[1] + 0.02, y: ry + 0.05, w: colW[1] - 0.04, h: 0.22, fill: { color: row.typeC, transparency: 85 }, rectRadius: 0.03 });
    slide.addText(row.type, { x: colX[1] + 0.02, y: ry + 0.05, w: colW[1] - 0.04, h: 0.22, fontSize: 7, fontFace: "Arial", color: row.typeC, bold: true, align: "center", valign: "middle" });

    slide.addText(row.model, { x: colX[2], y: ry, w: colW[2], h: 0.4, fontSize: 8, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "middle" });
    slide.addText(row.state, { x: colX[3], y: ry, w: colW[3], h: 0.4, fontSize: 8, fontFace: "Microsoft YaHei", color: row.stateC || theme.secondary, bold: !!row.stateC, valign: "middle" });
    slide.addText(row.perm, { x: colX[4], y: ry, w: colW[4], h: 0.4, fontSize: 8, fontFace: "Microsoft YaHei", color: row.permC || theme.secondary, bold: !!row.permC, valign: "middle" });
    slide.addText(row.recover, { x: colX[5], y: ry, w: colW[5], h: 0.4, fontSize: 8, fontFace: "Microsoft YaHei", color: row.recoverC || theme.secondary, bold: !!row.recoverC, valign: "middle" });
    slide.addText(row.advantage, { x: colX[6], y: ry, w: colW[6], h: 0.4, fontSize: 8, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "middle" });

    // Row separator
    if (ri < rows.length - 1) {
      slide.addShape(shapes.RECTANGLE, { x: 0.4, y: ry + 0.42, w: 6.2, h: 0.005, fill: { color: theme.border } });
    }
  });
}

module.exports = { createSlide };
