<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Animate

## Use and input
Add purposeful motion to a named transition or interaction. Resolve the focal moment, continuity, feedback and budget before changing timing.

## Read
Read unity-uss.md, unity-csharp.md, unity-review.md and design-policy.md. Inspect incumbent motion, host lifecycle, pause/time behavior and any reduced-motion setting.

## Work
1. State the motion thesis: what changes, what the motion explains, what stays quiet and how quickly the task must resume. Avoid one identical entrance on every region.
2. Implement supported transitions on base states and appropriate transform/control values. Avoid expensive layout animation unless justified and measured. Do not add default bounce/elastic or decorative blur as generic polish.
3. Handle reverse/interrupted transitions, rapid repeated actions, reload/disable and scheduled-work cleanup. Motion completion must not become the only way a game command can finish.
4. Provide an intentional reduced-motion alternative that still communicates state/continuity. Use the project's setting or an explicitly supported platform signal; do not emit a web media query or globally kill all feedback.

## Boundary and output
Edit scoped motion and necessary feedback code. Preserve approved design, action timing and player control; no new dependency or sound without scope/consent.

## Verify and fallback
Observe real progressing frames, repeated/interrupted use and reduced motion. Compare frame behavior/cost when material. With no Editor or motion capture, validate supported syntax and terminal paths but label motion quality/performance unverified.

## Official example and Unity transfer

Read the [animate Before/After case](before-after-cases.md#animate) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
