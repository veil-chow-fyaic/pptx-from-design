# Slide Design Guide

Design principles specifically for presentation slides — not generic web pages. Slides have unique constraints: fixed 16:9 aspect ratio, no scrolling, no interactivity, and must translate to PPTX.

---

## Design Thinking

Before creating anything, understand the context and commit to a **bold, specific** aesthetic direction:

- **Purpose**: What is this presentation trying to achieve? Persuade? Inform? Inspire? Teach?
- **Audience**: Board room? Conference? Classroom? Client pitch?
- **Tone**: Pick an extreme — brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, editorial/magazine, brutalist/raw, art deco/geometric. Commit fully.
- **Differentiation**: What's the ONE thing someone will remember about these slides?

**CRITICAL**: Bold maximalism and refined minimalism both work. The enemy is the middle ground — "professional but safe" slides are instantly forgettable.

---

## Slide Design Principles

### Typography

Fonts make or break a slide deck. Choose deliberately.

- **Chinese**: Microsoft YaHei is the only reliable PPTX font — but in HTML mockup you can preview with any font (e.g., Noto Sans SC, Source Han Sans). Just know it'll be YaHei in the final PPTX.
- **English display font**: Pick something with personality. Avoid overused defaults.
- **Pairing strategy**: One bold display font for headlines, one clean font for body text.
- **Size hierarchy must be dramatic**: 36-44pt titles vs 14-16pt body. No timid size steps.

**Avoid**: Inter, Roboto, Arial (as display font), Space Grotesk — these signal "AI-generated."

### Color

Color is the fastest way to make slides feel designed.

- **Dominance over equality**: One color at 60-70% visual weight, 1-2 supporting tones, one sharp accent.
- **Topic-specific**: If your palette works on a completely different topic, it's not specific enough.
- **Dark/light contrast**: Dark backgrounds for cover + closing slides ("sandwich" structure), lighter for content. Or commit to dark throughout for premium feel.
- **Never flat solid backgrounds**: Layer a solid color with semi-transparent shapes (OVALs) to create depth — gradient meshes, blurred color orbs, subtle geometric overlays.

**Avoid**: Generic blue, purple-on-white gradients, equal-weight rainbow palettes.

### Spatial Composition

Slides are canvases, not documents. Use the full space.

- **Asymmetric layouts** beat centered grids almost every time.
- **Generous negative space** OR **controlled density** — pick one, don't waffle.
- **Overlap** elements intentionally (shape behind text, number bleeding off edge).
- **Diagonal flow**: guide the eye from top-left to bottom-right with element placement.
- **Grid-breaking**: one element that intentionally breaks the grid creates visual tension.

**Avoid**: Symmetric 3-column card grids, everything centered, templates.

### Decorative Motifs

Pick 2-3 decorative elements and carry them through EVERY slide:

- Geometric shapes (circles, angular marks, corner brackets)
- Large watermark numbers (chapter indicators)
- Accent bars or lines (but NOT under titles)
- Icon-style markers (colored circles with symbols)

Consistency of motifs > variety. A deck that repeats 2 motifs looks designed. A deck that uses 8 different decorations looks random.

### Background Depth

Never use a flat solid color as the only background element. Build layers:

1. **Base color**: Solid fill (the theme's background color)
2. **Atmosphere**: 1-2 large, very transparent OVALs (transparency 85-95%) positioned off-center — this simulates gradient orbs or light spots
3. **Texture** (optional): Subtle geometric pattern using thin lines or small shapes

This layered approach translates well to PptxGenJS (unlike CSS gradients or noise textures).

---

## Slide Type Patterns

### Cover Slide
- Make it unforgettable — this sets expectations for the entire deck
- Asymmetric layout: title offset from center, large decorative element on one side
- Title should be the largest text in the entire deck

### Section Dividers
- Large chapter number (watermark-style, very transparent) behind the title
- Each section can use a different accent color from the palette

### Content Slides
- **Vary the layout** across slides — never repeat the same pattern two slides in a row
- Layout rotation: left-text-right-visual → full-width cards → asymmetric split → centered data
- Every slide needs at least one visual element (shape, data highlight, icon marker)

### Summary/Closing
- Echo the cover's aesthetic (creates bookend effect)
- Key takeaways in a clean, memorable layout
- Optional: closing quote or call-to-action

---

## Anti-Patterns

NEVER use these — they're hallmarks of generic AI slides:

- Accent lines or underlines beneath titles
- Predictable 3-column card grids on every content slide
- Purple-on-white color schemes
- Inter/Roboto/Space Grotesk fonts
- Symmetric, everything-centered layouts
- Template-style layouts (title at top, bullet points below)
