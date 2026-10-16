<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Bolder

## Use and input
Amplify an existing named target within its current world. A request for bolder directions during concept selection belongs to that selection flow, not an unrelated global restyle.

## Read
Read unity-design.md, unity-uss.md, unity-review.md and design-policy.md. Identify the incumbent vocabulary and actual target boundary.

## Work
1. Diagnose where the intended focal point lacks conviction: scale, hierarchy, composition, density or contrast.
2. Choose one decisive structural move using the system's strongest existing vocabulary. Do not scatter effects or introduce new palette/type primitives as a shortcut.
3. Implement scoped hierarchy/spacing/type emphasis with supported USS and layout. Keep controls recognizable, inactive states quiet and the main action clear.
4. Check contrast, long text, small panels, focus/disabled states and neighboring hierarchy so stronger expression does not harm operation.

## Boundary and output
Edit only the existing target. No new visual world, unrelated screen edits, gratuitous blur/gradient/glow or invented content. Explain the one meaningful change and preserved constraints.

## Verify and fallback
Compare the actual target before/after at the same states. Without a rendered target, make only source-grounded changes and disclose uncertainty about achieved visual impact; do not add more effects to compensate for missing evidence.

## Official example and Unity transfer

Read the [bolder Before/After case](before-after-cases.md#bolder) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
