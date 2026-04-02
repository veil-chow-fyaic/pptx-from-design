# pptx-from-design

Design-first PPTX generator skill for Claude Code.

Two-phase workflow: **HTML visual design → PptxGenJS compilation**.

## Features

- Fully self-contained, zero external skill dependencies
- Phase 1: HTML visual mockup with bold aesthetics, 6 curated color palettes
- Phase 2: PptxGenJS compilation with complete API reference (shapes/text/images/tables/charts)
- Accepts raw source material (articles, notes, markdown) — no structured JSON required
- HTML mockup serves as a preview before final PPTX generation

## Quick Start

1. Copy `SKILL.md` to `~/.claude/skills/pptx-from-design/SKILL.md`
2. Ask Claude Code to make a PPT from any content

## License

MIT
