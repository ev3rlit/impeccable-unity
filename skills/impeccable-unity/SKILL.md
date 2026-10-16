---
name: impeccable-unity
description: Design, plan, critique, audit, refine and implement Unity UI Toolkit interfaces with Impeccable design discipline. Use for Unity UXML, USS, VisualElement, runtime menus, HUDs, Editor tools, typography, layout, UX copy, themes, input feedback and design systems. Preserve anti-slop policies while using version-correct Unity APIs. Not for web UI, uGUI, IMGUI, backend work or general gameplay logic.
license: Apache-2.0
metadata:
  version: "0.1.0"
  upstream-version: "4.6.0"
  upstream-commit: "5bf0a069dc857e1b5f4b090e004d9d5b231416ca"
---

# Impeccable Unity

> Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md.

One design skill, 21 task-specific commands. Preserve Impeccable's design judgment and the brief's authority. Use Unity implementation mechanics, never a browser surrogate. Project instructions and the human's established decisions take precedence. Communicate in the user's language.

## Setup

1. Read the request and target project's applicable AGENTS.md, PRODUCT.md, DESIGN.md and, before input changes, its input rules. Respect dirty work and the requested write boundary. Detect the exact Editor version, Runtime/Editor surface, UI system and existing host. Do not manufacture missing product facts or infer a new visual identity from a missing DESIGN.md.
2. Resolve the skill base directory from this SKILL.md. Run `node <skill-base-dir>/scripts/impeccable-unity.mjs <command> --project <workspace> --target <existing-target>` once for the request. Omit `--target` if a target has not been located; search first when the user names a screen. Omit the command for a menu. This helper only reads files and returns context, allowed writes and the exact reference paths to load; it does not perform the requested design work. Use structured arguments rather than interpolating user text into a shell. No command prefix or installation path is hardcoded to a user's home folder.
3. Read the returned command playbook and selected shared references before acting. The router also returns the selected official example and Unity transfer: read that command’s section in [before-after-cases.md](reference/before-after-cases.md). Identify the concrete defect, intended change and properties that must stay fixed before editing. For every UI edit, also read [design-policy.md](reference/design-policy.md) immediately before editing. It is generated from the upstream craft floor; obey its conditions, exceptions and mode-specific refinements in [unity-design.md](reference/unity-design.md). Do not run the web launcher, browser detector or visual variant machinery for Unity.
4. Do the command's work and complete its output contract. Review commands report in conversation and do not silently fix files. Editing commands write complete assets, then follow [unity-review.md](reference/unity-review.md). Never create verification reports or hidden critique history when the consuming project prohibits them.

If the helper or Node is unavailable, say which step could not run, then read [unity-platform.md](reference/unity-platform.md), [design-principles.md](reference/design-principles.md), the command's linked playbook and relevant shared references directly. Continue work the available tools can substantiate. Missing Editor access limits runtime evidence, not all useful work; never label a file check as an Editor pass.

## Commands

| Command | Purpose | Playbook |
| --- | --- | --- |
| `init` | Capture product truth | [init](reference/init.md) |
| `shape` | Confirm a screen brief | [shape](reference/shape.md) |
| `document` | Record the incumbent design system | [document](reference/document.md) |
| `extract` | Consolidate reusable patterns | [extract](reference/extract.md) |
| `critique` | Evaluate design | [critique](reference/critique.md) |
| `audit` | Inspect technical quality | [audit](reference/audit.md) |
| `layout` | Improve composition and spacing | [layout](reference/layout.md) |
| `typeset` | Improve typography | [typeset](reference/typeset.md) |
| `colorize` | Apply intentional color | [colorize](reference/colorize.md) |
| `clarify` | Clarify UX copy | [clarify](reference/clarify.md) |
| `polish` | Fix bounded finishing defects | [polish](reference/polish.md) |
| `distill` | Remove unnecessary complexity | [distill](reference/distill.md) |
| `bolder` | Increase appropriate impact | [bolder](reference/bolder.md) |
| `quieter` | Reduce overstimulation | [quieter](reference/quieter.md) |
| `adapt` | Adapt to devices and sizes | [adapt](reference/adapt.md) |
| `harden` | Handle real data and lifecycle edges | [harden](reference/harden.md) |
| `animate` | Add purposeful motion | [animate](reference/animate.md) |
| `delight` | Add an earned moment | [delight](reference/delight.md) |
| `onboard` | Teach the first useful action | [onboard](reference/onboard.md) |
| `overdrive` | Build a requested ambitious effect | [overdrive](reference/overdrive.md) |
| `optimize` | Measure and improve performance | [optimize](reference/optimize.md) |

## Routing

An explicit command selects exactly its playbook. Without a command, answer workflow questions with advice; for a bare invocation show a contextual menu and wait rather than editing. For an ordinary new UI request use [unity-design.md](reference/unity-design.md)'s new-work flow and implement the authorized screen, rather than adding a deprecated creation alias. For a narrow improvement choose the closest command by the requested outcome and preserve everything else. Ask only when an unresolved choice materially changes the work, without asking again for decisions already established.

This skill has no browser live-variant commands. If requested, explain that those workflows require a separately implemented Unity comparison surface; do not forward to the web engine or claim they work. Requests for uGUI/IMGUI or web work route to their appropriate existing skills instead of silently converting their UI system.

## Comparing an improvement

Use the same input content, state, assets, viewport and art direction for Before and After. Change only what the selected command owns. Card removal or a more game-like appearance is not a success criterion. Evaluate the specific correction: grouping, hierarchy, recovery wording, state continuity or the relevant code/document output. For source examples distinguish an authored illustration from an executed skill result; do not claim a workflow-only command has a visual Before/After. In controlled comparisons, independent agents receive the same frozen Before and task, load only their assigned skill, and do not inspect each other’s outputs. A single pass is a demonstration, not a general benchmark.

## Evidence and delivery

For the actual changed surface explain what changed, why and what was checked. Distinguish static inspection, an agent behavior exercise, Editor import/compilation, rendered layout and device input. Name the actual target, version and unresolved limits. Screenshot evidence proves appearance at that state, not touch gestures or advancing frames. No invented measurements, score, screenshot, successful import or finished test.