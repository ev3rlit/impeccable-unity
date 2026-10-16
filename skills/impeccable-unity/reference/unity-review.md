<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Evidence and verification

Finish the authorized work at its actual scope. Read-only commands report findings; editing commands repair their scoped defects and verify the changed behavior. Batch findings from one inspection before taking another capture. Do not create verification reports, hidden snapshots, benchmark histories or audit folders; report results and limitations in conversation. Test code and regression fixtures are different from reports and may be added where the project requires them.

## Static checks

Inspect complete UXML, referenced USS, names/queries, C# ownership, target assembly and version. Check XML escaping, missing assets and GUIDs, supported properties AND values/functions/units/selectors, inline overrides and theme precedence. Verify expected classes actually exist and no web utility/runtime dependency leaked into the Unity path. XML well-formedness or a build of unrelated C# code does not prove Unity accepted the assets.

## Editor checks

Discover the connected Editor's supported commands through unity-cli or an existing Unity connector. Target the exact project. Reimport complete changed assets, wait for compilation to finish and inspect Console errors and USS warnings. Open the actual screen/state; inspect Visual Tree, matching selectors and resolved values with UI Toolkit Debugger. Capture relevant panel sizes and states with the project theme and font assets. Changes made only in Debugger are temporary: persist them in source and recreate the tree to check durability.

Run the project's existing relevant EditMode/PlayMode checks through its Taskfile. Add focused regressions for a bug or risky behavior; no need to mirror a trivial color declaration with an artificial test. Rendering checks need the real host, PanelSettings and content. Exercise disable/re-enable and UI reload where changed. If tools cannot perform an Editor check, finish supported source verification and say exactly which import, compilation, render or device check did not run.

## State and device checks

Cover default, hover where applicable, focus, active, disabled, loading, error and empty states that the surface actually supports. Use realistic short/long/localized text, zeros, high values and large lists. Inspect CJK and mixed-script glyphs, fallback, ellipsis, contrast and supported font weight. Check clipping, overlays, focus restoration and lost input after navigation.

Synthesize actual pointer/key/navigation input when tools allow; separately record physical-device tests. For changed gestures exercise drag threshold, scrolling across controls, cancellation, capture loss, focus loss, multiple pointers and UI/world exclusivity. A resized Game view proves layout at that size, not a phone touch gesture. Entering Play mode alone does not prove the game is advancing; confirm frames or observable state changes before a runtime claim.

## Measurements and conclusions

Use Unity Profiler/UI modules, frame time, style/layout/geometry updates, GC allocation, draw calls, batching and atlas behavior according to the suspected bottleneck. Compare the same project, device, scene, data, resolution and warm/cold conditions before and after. Core Web Vitals, a browser DOM detector and HTML accessibility scoring are not Unity measurements. Reuse the same focused measurement after a fix; do not claim improvement without it.

Accessibility needs semantic controls, labels, focus, contrast, alternative cues and device operation; platform screen-reader integration requires its own API/device evidence. Do not stamp a web WCAG/ARIA pass onto a game because a checklist looks similar. When scoring a review, show applicable dimensions and available evidence, leaving unobserved dimensions unscored rather than assigning fabricated zeros or passes.

End with changed paths, reasons, actual verification and residual limits. Preserve useful strengths; distinguish technical failures from aesthetic judgment. Stop when the scoped findings are resolved, rather than escalating every finishing pass into redesign.
