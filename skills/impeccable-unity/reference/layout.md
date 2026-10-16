<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Layout

## Use and input
Improve composition, grouping, alignment and visual rhythm of an existing target. Preserve its visual identity and content; a layout request is not a redesign authorization.

## Read
Read unity-design.md, unity-uss.md, unity-uxml.md, unity-review.md and design-policy.md. Inspect actual hierarchy and resolved geometry, including template wrappers and built-in parts.

## Work
1. State the spatial thesis: what leads, what belongs together and how the user's eye and focus travel. Diagnose structure before nudging margins.
2. Prefer proximity/spacing and a clear primary region over boxing everything into cards. Preserve meaningful repetition while breaking accidental monotony and avoiding nested cards.
3. Implement supported Flex direction/basis/grow/shrink/wrap, min/max constraints and explicit spacing classes. Do not output gap, CSS Grid, nth-child, media rules or fixed positioning as USS.
4. Match visual order and navigation order. Test long content, narrow/wide panels, scrolling and overlays; avoid absolute positioning as a general layout substitute.

## Boundary and output
Edit scoped UXML/USS and only necessary geometry-state code. Preserve names, actions and binding contracts. Explain the hierarchy change rather than listing every pixel adjustment.

## Verify and fallback
Use matching selectors/resolved geometry and captures at intended sizes. Recreate the tree to ensure fixes were saved. Without Editor, check supported syntax and hierarchy and label layout appearance unverified; do not use an HTML mock as evidence.

## Official example and Unity transfer

Read the [layout Before/After case](before-after-cases.md#layout) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
