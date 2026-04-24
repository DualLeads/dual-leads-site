---
name: propostas-premium-frontend
description: Use when working on proposal pages in this repository, especially under public/propostas. Applies the project's premium commercial frontend standard for visual direction, mobile polish, CTA hierarchy, brand cohesion, and pre-publish review.
---

# Propostas Premium Frontend

Use this skill when creating, updating, reviewing, or polishing proposal pages in this repository.

Primary targets:
- `public/propostas/**/index.html`
- proposal hub pages under `public/propostas/`
- per-proposal local assets such as logos and images

## Goal

Make proposal pages feel premium, intentional, and brand-aware, not like generic polished templates.

The page should feel:
- institutional
- commercially credible
- visually calm but high-value
- mobile-friendly
- clear enough to convert without looking aggressive

## Visual Standard

Prioritize these outcomes:
- Strong brand cohesion: typography, color, imagery, logo treatment, and buttons should feel like one system.
- Premium restraint: avoid loud gradients, gimmicky motion, oversized neon CTAs, or startup-style UI clutter.
- Hierarchy first: hero, section headers, proof blocks, pricing/investment, and CTA need obvious visual rhythm.
- High readability: long proposal pages must stay easy to scan on desktop and mobile.
- Signature over template: avoid "generic luxury landing page" repetition.

## Project-Specific Guidance

For this repo, default to:
- sober corporate palettes
- elegant serif + restrained sans pairing when the page already supports it
- softened panels, borders, and shadows instead of loud effects
- local brand asset usage when provided by the user
- proposal-specific assets stored beside the proposal HTML when possible

When a logo exists for a specific proposal:
- place it in the proposal folder
- use relative paths from that page
- integrate it in the header and, when appropriate, the footer
- ensure the rest of the page visually matches the logo instead of treating it as an isolated add-on

## What To Improve First

When reviewing or refining a page, use this order:

1. Brand fit
2. Typography and spacing rhythm
3. Hero composition
4. CTA hierarchy
5. Mobile navigation and mobile readability
6. Section transitions and visual consistency
7. Tables, cards, and dense information blocks

## Brand Fit Checklist

Ask:
- Does the page feel like it belongs to the logo/brand now visible on it?
- Are accent colors derived from or compatible with the mark?
- Do header, footer, CTA, and cards feel part of the same design language?
- Is the page more "proposal for a serious client" than "marketing template"?

If not, adjust:
- logo sizing and framing
- accent usage
- button style
- heading tone
- image treatment

## Typography Rules

Prefer:
- expressive but restrained headings
- readable body copy with comfortable line height
- strong spacing between sections
- fewer font-size jumps, more rhythm through margin and layout

Avoid:
- too many decorative text styles
- cramped card content
- body text that feels washed out against the background
- giant headings that overpower the rest of the page

## CTA Rules

CTA buttons should feel premium and deliberate.

Prefer:
- one primary CTA at a time per viewport focus
- clear contrast without looking cheap
- WhatsApp buttons that are recognizable but still visually integrated
- fixed/floating CTA that does not dominate mobile content

Avoid:
- multiple competing primaries in the same cluster
- CTA color that feels disconnected from the rest of the page
- large floating buttons that obscure content on small screens

## Mobile Rules

Mobile quality is mandatory.

Always check:
- nav open/close behavior
- touch target size
- hero readability
- table overflow behavior
- floating CTA overlap
- footer spacing

For mobile menus:
- prefer a real icon treatment over text glyph toggles when the page supports it
- use class-based animation states rather than swapping broken special characters
- preserve `aria-expanded`

## Proposal Content Layout

Long proposal pages should alternate density.

Use a healthy mix of:
- text + visual split sections
- high-contrast emphasis bands
- structured grids
- tables only where density is useful

If multiple heavy sections appear in sequence, introduce visual relief by changing:
- background tone
- layout structure
- card density
- image presence

## Review Standard

When asked to review a proposal frontend:
- prioritize real visual or UX problems over style nitpicks
- call out generic-looking sections
- identify weak brand integration
- identify mobile friction
- identify CTA imbalance
- identify readability issues in dense sections

## Publishing Workflow

For proposal pages in this repo:
- keep the existing route unless the user explicitly asks to rename it
- place proposal assets inside the proposal folder
- update local hub pages only if navigation should expose the proposal
- validate with a production build before publishing
- check that expected files appear in `dist/propostas/...`

After edits, read [references/review-checklist.md](references/review-checklist.md) and run that checklist.
