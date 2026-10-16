<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Adapt

## Use and input
Adapt an existing surface to a named device, screen shape, input method or use context. Resolve the destination conditions; adaptation is restructuring, not uniform pixel scaling.

## Read
Read unity-platform.md, unity-uxml.md, unity-csharp.md, unity-review.md and design-policy.md, existing PanelSettings and input rules.

## Work
1. Identify which source assumptions fail: aspect ratio, reach, density, keyboard/gamepad focus, pointer hover, safe area or scroll/drag ownership.
2. Preserve primary capability and information hierarchy while adjusting grouping, columns, overlay placement and progressive disclosure. Start with flexible constraints; use bounded GeometryChangedEvent state classes only when needed.
3. Implement supported USS sizes and host scaling. Convert safe-area/pointer coordinates through the actual screen/panel/local mapping, not CSS viewport assumptions.
4. Add or preserve visible focus, Submit/Cancel and touch alternatives to hover. Exercise scrolling across a control, interrupted drag, second touch and UI/world exclusivity where changed.

## Boundary and output
Edit target layout and input presentation; do not change game rules, migrate the host or install a new input stack unasked. Maintain the approved identity.

## Verify and fallback
Test relevant panel sizes AND synthesize device actions when possible. A resized Game view proves layout only, never touch gestures. If a device/Editor cannot be exercised, report the actual static/emulated/physical evidence and remaining gap rather than claiming broad device support.

## Official example and Unity transfer

Read the [adapt Before/After case](before-after-cases.md#adapt) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
