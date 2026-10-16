<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Audit

## Use and input
Inspect measurable technical quality of a named UI feature. Unlike critique, this examines implementation contracts; unlike polish, it does not fix them.

## Read
Read unity-uss.md, unity-uxml.md, unity-csharp.md, unity-review.md and design-policy.md. Identify target version, assemblies, host, themes, input maps and available runtime evidence.

## Work
1. Check UXML parsing/asset paths, valid USS names AND value grammar, theme precedence, missing queries, supported APIs and player/Editor assembly separation.
2. Inspect labels/focus/navigation/alternative state cues, theme/token consistency, panel-size behavior, text overflow and device input ownership. Do not translate ARIA or browser audits into a Unity accessibility pass.
3. Trace lifecycle subscriptions, binding direction, list reuse, cancel/capture/focus-loss behavior and UI/world action boundaries. Inspect performance evidence where available without inventing measurements.
4. Validate suspected findings and false positives. Report location, trigger, contract violation, actual evidence, impact, P0–P3 and a bounded fix recommendation. List checked scope and unobserved dimensions separately.

## Boundary and output
Conversation findings only; do not edit files, add a report directory, run the HTML detector on UXML or repair unrelated drift. Applicable scoring is optional and must not treat missing runtime evidence as a pass.

## Verify and fallback
Use actual import/Console/test evidence when available. Without an Editor, make a static audit and explicitly leave importer/render/input claims open. Unknown USS on an unconfirmed version is a version question to resolve, not an invented universal ban.

## Official example and Unity transfer

Read the [audit Before/After case](before-after-cases.md#audit) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. The After is a sourced diagnostic; do not silently apply its recommendation.
