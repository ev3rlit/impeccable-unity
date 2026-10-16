<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Document

## Use and input
Record the existing visual system of a named project/screen. Distinguish a scan of current truth from a user-authorized seed for a missing system. Missing DESIGN.md alone does not authorize redesign.

## Read
Read design-principles.md, unity-uss.md and unity-uxml.md. Inspect existing DESIGN.md, shared USS/TSS, PanelSettings, fonts, control parts, assets and representative states.

## Work
1. Identify actual token sources and precedence, repeated spacing/type roles, color semantics, control states, layer ownership and layouts. Trace values back to authoritative declarations, not merely a screenshot impression.
2. Record concrete asset paths, supported units, naming, component contracts and observed usage. Separate established rules from inconsistencies and open decisions; do not invent nonexistent reusable components.
3. Describe the identity in specific useful language, confirming uncertain atmosphere claims only when consequential. Preserve exact user-specified values.
4. Add/update the authorized DESIGN.md sections with actual token values and reference paths. Do not silently replace an existing system or create a web design sidecar that Unity cannot consume.

## Boundary and output
Write DESIGN.md or the explicitly requested design-system document only. Do not edit runtime UI, normalize drift, change tokens or add verification history as a side effect. System extraction is a separate command.

## Verify and fallback
Check each documented value/control against source and, when available, resolved styles in the Editor. Reimport is unnecessary for prose-only changes. Without rendered evidence distinguish inferred visual character from source-observed values and do not describe the screen as visually verified.

## Official example and Unity transfer

Read the [document Before/After case](before-after-cases.md#document) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Show the requested brief or document; a planning/documentation command does not authorize a UI redesign.
