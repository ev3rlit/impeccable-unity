<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Colorize

## Use and input
Introduce or improve purposeful color in a named target. A monochrome system can be correct; first identify what color should communicate rather than assuming every neutral is defective.

## Read
Read unity-design.md, unity-uss.md, unity-review.md and design-policy.md plus palette authority, semantic tokens and state appearances.

## Work
1. Map primary action, selection, status and surface roles. Preserve brand commitments and existing identity; do not invent a new palette under a narrow refinement.
2. Choose the amount of color the surface earns, from restrained to committed. Do not enforce a universal percentage formula or flood inactive states with saturated accents.
3. Define complete hex/RGBA USS tokens and apply them to correct control parts. A perceptual color method is useful for choosing values, not permission to emit unverified web color functions or nested var() arithmetic.
4. Check text/background contrast, colored-surface secondary text and disabled/hover/focus/error states. Add a non-color cue for meaningful status. Preserve neutral gray where it belongs to the world rather than globally banning it.

## Boundary and output
Edit target USS and genuinely shared palette tokens; inspect affected consumers before shared changes. No gradient/glass decoration to manufacture interest and no new gameplay status without real data.

## Verify and fallback
Compare states in the actual panel/theme and check source token resolution. Without rendering, distinguish calculated color-pair contrast from final composited pixel contrast, and do not claim a complete theme pass.

## Official example and Unity transfer

Read the [colorize Before/After case](before-after-cases.md#colorize) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
