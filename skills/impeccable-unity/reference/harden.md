<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Harden

## Use and input
Make a named feature resilient to real data, interruption and UI lifecycle changes. Identify the actual user path and failure/data ranges before inventing defenses.

## Read
Read unity-uxml.md, unity-csharp.md, unity-review.md and design-policy.md, including project input rules, binding/data ownership and existing error handling.

## Work
1. Exercise empty/loading/error, zero/extreme values, missing assets/glyphs, long/localized text, large lists and unavailable data. Keep useful recovery within the affected component.
2. Resolve UI reload/re-enable duplication, stale async completion, obsolete subscriptions, recycled-row state and binding errors. Never execute gameplay actions from a display update.
3. Handle gesture cancellation, capture loss, focus loss, detach/disable and context/multi-touch changes without stuck holds or unintended drops. Distinguish cancellation from successful action.
4. Preserve required information, focus and primary action during failure. Add focused input/state regression tests for confirmed bugs, not a report file claiming coverage.

## Boundary and output
Edit scoped presentation/binding/interaction code and tests. Preserve domain/server contracts; do not replace error handling with silent swallowing or refactor unrelated systems.

## Verify and fallback
Run targeted EditMode/PlayMode cases and reproduce the trigger when available. Source inspection alone cannot prove cancellation recovery. State which cases actually ran and which Editor/device paths remain unverified.

## Official example and Unity transfer

Read the [harden Before/After case](before-after-cases.md#harden) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
