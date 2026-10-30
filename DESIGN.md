---
name: EzWin Portfolio
description: Edit-bay portfolio for one operator who builds bots, panels, game servers and edits.
colors:
  base: "#07060a"
  panel: "#0b0910"
  ink: "#f3f0f8"
  muted: "#a6a0b4"
  dim: "#7c768c"
  violet: "#a78bfa"
  violet-deep: "#8b5cf6"
  magenta: "#d946ef"
  mint: "#5eead4"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(60px, 8.6vw, 132px)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 64px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  accent-italic:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontStyle: italic
    fontWeight: 400
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "9px"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "18px"
  xl: "20px"
  pill: "99px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.violet-deep}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "0 20px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.035)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "0 20px"
  chip:
    backgroundColor: "rgba(255,255,255,0.02)"
    textColor: "{colors.dim}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "0 13px"
  project-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: EzWin Portfolio

## Overview

**Creative North Star: "The Edit Bay at 3 A.M."**

The site behaves like a grading suite running one operator's reel: a near-black room, a violet light leak bleeding across the top of the frame, film grain over everything, and every project presented as a clip with a timecode, a duration and a playhead. Interface chrome — sprocket holes, corner ticks, REC indicators, waveform bars — is the decoration, so the page never needs ornamental flourishes.

Type carries the confidence: Archivo in tight, oversized caps states what the operator does, Instrument Serif italic drops the human aside inside the sentence, JetBrains Mono labels carry machine truth (indices, timecodes, stack lines). The palette is deliberately narrow: violet is the light source, magenta the cut marker, mint the single "live" signal.

Tonal section bands — violet and magenta washes between the dark blocks — define the rhythm of the scroll instead of dividers or boxes. Everything must be readable before motion runs: the reel montage, marquees and reveals are optional layers over static content.

**Key Characteristics:**
- Single dark ground with two tonal bands and a violet light leak at the top
- Film grain, sprocket bands and corner ticks as the only ornament
- Caps display type against italic serif interruptions
- Monospace labels for all metadata
- Motion as broadcast furniture: marquee reel, playhead, waveform, timecode

## Colors

A near-black studio ground with one violet light source and two signal accents.

### Primary
- **Light-Leak Violet** (#a78bfa, deeper #8b5cf6): the accent for links, active chips, CTA gradients, card glow and section eyebrows. Used as light, not paint: gradients and radial washes rather than large flat fills.

### Secondary
- **Cut Magenta** (#d946ef): appears only at punctuation — the dot after the hero line, band gradients, the progress bar tail, the second marquee.
- **Live Mint** (#5eead4): reserved for presence — status dot, Discord CTA dot, "yeni projelere açık". Never used as a general accent.

### Neutral
- **Studio Black** (#07060a): page ground.
- **Panel Black** (#0b0910): cards, sheet, header glass.
- **Ink** (#f3f0f8): headings and primary text.
- **Muted** (#a6a0b4): body copy.
- **Dim** (#7c768c): metadata, indices, disabled states.
- **Hairline** (rgba(255,255,255,0.09)): borders and dividers; strong variant 0.16 for hover.

### Named Rules
**The One Light Rule.** Violet behaves like a practical light: it enters through gradients, radial washes and glows, never as a large solid block behind text.
**The Presence Rule.** Mint means live and only live. If it isn't a status or the Discord CTA, it isn't mint.

## Typography

**Display Font:** Archivo (with ui-sans-serif fallback)
**Accent Font:** Instrument Serif italic (with Georgia fallback)
**Label/Mono Font:** JetBrains Mono

**Character:** Broadcast titling against a handwritten aside: Archivo states, Instrument Serif confides, JetBrains Mono annotates.

### Hierarchy
- **Display** (800, `clamp(60px, 8.6vw, 132px)`, 0.82, -0.045em): the hero's three-line statement. The third line is outlined (`-webkit-text-stroke: 1.3px`) with a round magenta dot.
- **Headline** (800, `clamp(34px, 4.6vw, 64px)`, 0.92): section titles, always with one word in Instrument Serif italic.
- **Title** (800, `clamp(24px, 2.3vw, 34px)`): card and sheet project names.
- **Body** (400, 14–16.5px, 1.6–1.65, max ~52ch): descriptions; muted, never pure white.
- **Label** (mono, 500, 8.5–10.5px, 0.13–0.2em, uppercase): indices, categories, durations, stack chips, section eyebrows.

### Named Rules
**The Italic Exception Rule.** One word per headline bends into Instrument Serif italic. Two is a costume.

## Layout

A 1360px max container (`--wrap`) on a 68px sticky header; hero is a two-column split (statement / viewer) collapsing at 1120px, then single column at 860px. The project wall is a 12-column grid where cards span 4 (wide: 8, narrow: 4, third: 4) and collapse to full width below 860px, opening into a two-column detail sheet.

Sections alternate between plain ground and tonal bands (`band-violet`, `band-magenta`) to create scroll rhythm. Vertical spacing scales with `clamp(30px, 4vw, 48px)` inside sections and roughly double between them. The reel band and tech line are full-bleed marquees that sit between sections instead of dividers.

## Elevation & Depth

Depth is tonal, not shadowed: cards sit a step above the ground (`#0d0b13` → `#09080d`) with a radial accent glow in the corner, and lift on hover with a 900px perspective tilt plus a pointer-tracked spotlight. Shadows appear only under the primary CTA and the detail sheet.

### Shadow Vocabulary
- **CTA lift** (`0 14px 34px -14px rgba(139,92,246,0.9)`): primary buttons only.
- **Sheet float** (`0 60px 150px -40px rgba(0,0,0,0.9)`): the project dialog, never cards.

### Named Rules
**The Flat-Card Rule.** Cards are flat at rest; motion (tilt, spotlight, border shift) is the elevation signal.

## Shapes

Rounded rectangles with broadcast details: 18px cards, 10px buttons, pill chips, 20px sheet and contact panel, 6px reel frames. Corners are decorated with 13px L-shaped ticks, the viewer and bands carry sprocket-hole bands, and the footer closes on a 300px ghost word. Logos are never boxed — they are screen-blended into the dark surface.

## Components

### Buttons
- **Shape:** 48px tall, 10px radius, mono 10.5px uppercase with 0.14em tracking.
- **Primary:** violet gradient `#8b5cf6 → #7c3aed`, white label, violet lift shadow; arrow glyph with 4px gap and a hover nudge.
- **Ghost:** 3.5% white fill, 0.16 hairline border, ink label; hover brightens border and background.
- **Hover / Focus:** 0.2s transform + border/background; focus uses a 2px violet outline at 3px offset.

### Chips
- **Style:** 32px pill, mono 9px uppercase, dim text on 2% white with hairline border.
- **State:** active is violet-tinted with a violet border and ink text; counts read `07 / 07 PROJE`.

### Cards / Containers
- **Corner Style:** 18px radius.
- **Background:** panel gradient with a per-project accent radial in the top-right.
- **Shadow Strategy:** none at rest (see Elevation).
- **Border:** 0.09 hairline; hover mixes the project accent to 55%.
- **Internal Padding:** `clamp(18px, 2vw, 26px)`.

### Navigation
Fixed 68px glass header with a 2px scroll-progress rail on top. Left: monogram + EZWIN. Center: mono nav links that brighten on hover. Right: live timecode (`TC HH:MM:SS:FF`), Discord pill with a mint dot, and a MENU toggle under 860px that opens a full-width panel.

### Signature Components
**The Reel Viewer.** A player chrome with filename, blinking REC dot, corner ticks, a cycled project logo (3.6s, paused on hover), playhead scrub bar, waveform and timecode metadata. Clicking it opens the project sheet.

**The Reel Band.** A 62s full-bleed marquee of 228×136 sprocket frames, one per project; the duplicate track is `aria-hidden` and unfocusable.

**The Project Sheet.** A portal dialog with a blended logo art column, stats, avatar-less metadata, feature list, stack chips and a Discord CTA; Esc/backdrop closes, focus is trapped and restored.

## Do's and Don'ts

### Do:
- **Do** keep the ground at `#07060a` and let sections change tonal band instead of adding dividers.
- **Do** label metadata in JetBrains Mono uppercase, including indices (`01 / 07`) and timecodes.
- **Do** put one Instrument Serif italic word inside each big headline.
- **Do** screen-blend project logos into the surface so their black backgrounds vanish.
- **Do** respect `prefers-reduced-motion`: animations collapse, content is never gated.

### Don't:
- **Don't** introduce a second neutral palette or light mode; the studio is black.
- **Don't** use mint outside presence/live signals or violet as large flat fills behind text.
- **Don't** put entrance animations in front of the first viewport; the hero must be readable instantly.
- **Don't** box logos, add drop shadows to cards, or use photos as card backgrounds.
- **Don't** fabricate metrics, testimonials or client names; every number must come from the project archive.
