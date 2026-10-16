<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Typeset

## Use and input
Improve legibility, font roles, hierarchy and text rhythm of the target. Honor the existing font authority; replacing it with a new identity needs a separate direction decision.

## Read
Read unity-design.md, unity-uss.md, unity-review.md and design-policy.md, then font assets, Panel Text Settings, relevant USS and real localized text.

## Work
1. Inventory roles, available weights/styles, glyph coverage, fallback and actual panel scaling. Operate labels may use one familiar family; do not impose an expressive display face everywhere.
2. Build a coherent role scale, readable measure, line wrapping and spacing with supported font-size, letter-spacing, white-space and Unity font/alignment properties. Map intended ratios to real panel units; never paste rem/clamp/font-family syntax.
3. Fix truncated or colliding text with suitable layout constraints and ellipsis/reveal behavior. Do not shrink all text until it fits or turn essential information into hover-only content.
4. Check Korean, Latin, digits, punctuation, mixed scripts, long names and missing weight/glyph fallbacks. Preserve exact copy and domain meaning unless a copy change is separately authorized.

## Boundary and output
Edit scoped USS and existing text/font configuration. New font assets require licensed sources and project-compatible import; no guessed built-in asset paths or TMP asset substitution. Keep unrelated composition and gameplay intact.

## Verify and fallback
Inspect real glyphs/weights at the target scale and low/high resolutions. Without the required font asset or Editor, fix supported source issues but identify the missing font/render evidence rather than claiming visual parity.

## Official example and Unity transfer

Read the [typeset Before/After case](before-after-cases.md#typeset) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
