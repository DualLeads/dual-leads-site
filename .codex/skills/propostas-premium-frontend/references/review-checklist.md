# Review Checklist

Use this checklist after editing proposal pages in this repository.

## Visual

- Header, hero, CTA, and footer feel like one brand system.
- Logo integration looks intentional, not pasted in.
- Accent color use is consistent and restrained.
- The page feels premium, not generic.

## Typography

- Heading scale is strong but not excessive.
- Body text remains readable on long sections.
- Spacing creates rhythm between dense sections.
- Tables and cards do not feel cramped.

## Interaction

- Mobile menu opens and closes cleanly.
- `aria-expanded` changes correctly.
- Menu icon state matches open/closed state.
- Fixed WhatsApp CTA does not overpower the page.
- Back-to-top control is visible only when useful.

## Layout

- No section feels visually collapsed or overstuffed.
- Contrast sections are used intentionally.
- Image blocks support the message instead of just decorating.
- Pricing/investment blocks are easy to scan.

## Technical

- Relative asset paths resolve from the proposal folder.
- Proposal assets exist both in source and generated `dist`.
- Internal anchor links map to real `id`s.
- Run `npm run build` before publishing.
- Confirm output exists under the expected `dist/propostas/...` path.
