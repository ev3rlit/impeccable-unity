<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Optimize

## Use and input
Improve a demonstrated UI performance problem in a named scenario. Resolve scene, target device, data size, panel resolution, cold/warm state and symptom before editing.

## Read
Read unity-uss.md, unity-csharp.md, unity-review.md and design-policy.md, actual source and available Unity Profiler evidence.

## Work
1. Measure the baseline: relevant frame/UI CPU time, Update Styling/layout/geometry, allocations, draw calls/batches/atlas or GPU filter work. Select the dominant cost rather than convenient micro-optimizations.
2. Trace it to concrete behavior: ancestor hover invalidation, excessive classes/inline updates, repeated geometry rebuilds, unvirtualized lists, duplicate subscriptions, allocations or effect passes.
3. Make the smallest useful change preserving behavior, visual identity and accessibility. Consider stable state classes, transform instead of layout motion, list recycling and lifecycle cleanup according to evidence.
4. Reproduce the same conditions and measure after. Check interaction/appearance regressions and report actual values with matched conditions and any tradeoff.

## Boundary and output
Edit the measured hot path and necessary supporting assets/tests only. No new feature, aesthetic downgrade, invented frame gain or browser metric. Report findings/results in conversation, not benchmark history files.

## Verify and fallback
Without Profiler/Editor access, provide a source-grounded hypothesis and, if authorized, a defensible bounded fix. Mark performance improvement unverified until matched measurements run; a cleaner file is not evidence of a faster frame.

## Official example and Unity transfer

Read the [optimize Before/After case](before-after-cases.md#optimize) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Separate a code strategy from measured performance; report unmeasured effects as unmeasured.
