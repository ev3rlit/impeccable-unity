<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Overdrive

## Use and input
Implement an explicitly requested ambitious expression of an existing feature. Resolve the named target, approved world, device/frame budget and what must remain operable. This is not new gameplay or backend development.

## Read
Read unity-design.md, unity-uss.md, unity-csharp.md, unity-review.md and design-policy.md. Check the selected Editor/render path and existing effect assets before choosing an API.

## Work
1. Present two or three materially different directions with effect, complexity, costs and fallback. Obtain the missing direction decision; a precise already-approved effect does not require repeating that choice.
2. Focus ambition on one authored moment. Pick version-supported transitions, Painter2D/geometry, UI materials or imported assets only when they express an allowed design. A shader or texture does not earn back a prohibited aesthetic.
3. Implement a clear static/reduced-motion or lower-cost fallback and cancel/cleanup paths. Preserve navigation, legibility, hit targets and action completion under rapid use.
4. Measure on the actual render path/device and tune the approved effect. Sound needs explicit opt-in; impressive must not mean blocking input, fake latency or uncontrolled GPU work.

## Boundary and output
Edit the approved effect and supporting UI assets only. No new feature, backend, global render-pipeline migration or speculative dependency. Explain the tradeoff and functioning fallback.

## Verify and fallback
Exercise effect entry/exit/interruption and fallback, inspect progressive frames and measure frame/render cost. If the required API or Editor is absent, do not invent a successful effect: use an approved supported fallback or identify the concrete decision/capability needed.

## Official example and Unity transfer

Read the [overdrive Before/After case](before-after-cases.md#overdrive) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
