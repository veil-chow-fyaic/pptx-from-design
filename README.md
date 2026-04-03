# pptx-from-design

Design-first PPTX generator skill for Claude Code.

Two-phase workflow: **HTML visual design → PptxGenJS compilation**.

## Structure

```
pptx-from-design/
├── SKILL.md                      ← Skill orchestration (Phase 1 → Phase 2)
├── references/
│   ├── design-guide.md           ← Frontend design principles (from frontend-design skill)
│   └── pptx-reference.md         ← PptxGenJS API + QA workflow (from create-pptx skill)
├── scripts/
│   ├── compile.js                ← Compile entry point template
│   └── slide-template.js         ← Per-slide module template
├── package.json
└── .gitignore
```

## How It Works

1. **Phase 1 — Design**: Analyzes source material, chooses bold aesthetic direction, generates HTML mockup (1280×720px slides)
2. **Phase 2 — Compile**: Translates approved HTML to PptxGenJS modules, compiles to `.pptx`, runs QA

## Install

Copy the entire directory to `~/.claude/skills/pptx-from-design/`.

## License

MIT
