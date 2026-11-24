---
name: Signal Field
mode: Experience / Read
status: seeded
---

# Design System

## Direction

An analytical observatory: a dark, spatial signal field for the portfolio entrance, transitioning into high-contrast editorial reading surfaces. The visual metaphor is not “finance dashboard”; it is ideas as connected signals whose relationships shift as the reader explores.

## Typography

- Instrument Sans for interface and body text.
- Newsreader for large editorial headlines and quotations.
- Noto Sans SC for reliable Chinese glyph coverage.
- Monospace is reserved for dates, measurements, and compact metadata.

## Color

- Near-black ink background, warm paper text, electric cyan for active signals, coral for challenges and counterarguments, and chartreuse for evidence or confirmed states.
- Article pages use a warm light reading surface by default while preserving the same accents.

## Motion

- The first viewport contains one continuous canvas-based signal field reacting gently to pointer position.
- Navigation, cards, and filters use short state transitions only.
- Respect `prefers-reduced-motion`; the canvas becomes a quiet static field.

## Components

- Article rows are editorial list items, not repeated floating cards.
- Tags are compact rectangular labels with small radii.
- Primary calls to action use text plus a directional icon.
- Focus states are high-contrast cyan outlines with visible offset.

## Layout

- Wide first viewport with asymmetric copy and live visualization.
- Article archive uses a dense index with filters and generous row spacing.
- Reading measure stays between 65 and 72 characters where possible.
