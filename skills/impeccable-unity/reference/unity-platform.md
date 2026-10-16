<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Target discovery

Resolve an existing file, screen or component within the selected workspace. If the workspace contains several Unity projects and the target does not identify one, ask for the project before editing. Read its ProjectSettings/ProjectVersion.txt; record the exact version instead of hardcoding the research baseline. Check Packages/manifest.json and assembly boundaries when choosing package APIs. UI Toolkit uses UXML/USS/VisualElement; do not silently migrate Canvas/uGUI or OnGUI/IMGUI.

Inspect applicable AGENTS.md, PRODUCT.md, DESIGN.md, common USS/TSS, prefabs, font assets and project-specific input rules. Detect Runtime versus Editor from assemblies, namespaces and host source, not merely the presence of UXML. Runtime may use UIDocument or PanelRenderer depending on version and existing implementation; Editor windows typically use CreateGUI/rootVisualElement and Editor-specific binding. Do not add a PanelSettings asset to an EditorWindow because a runtime recipe requires it.

For Runtime, inspect the host's source asset, PanelSettings, theme, sort order, scale mode, reference resolution, text settings and rendering mode. Distinguish panel units, device pixels, world units and local coordinates. Before safe-area work inspect the actual screen-to-panel conversion and overlay owner. Existing host migration is a separate scope decision.

Unity official ui-uitk references are implementation input, not overrides of design policy. Use unity-cli for connected Editor work when available: first discover its supported commands and pass the exact project path if multiple Editors may be open. Do not install/update tools, packages or project settings merely to get a screenshot without checking existing capabilities and the task's scope. Prefer available supported commands over inventing an eval/console API. A disconnected Editor or Safe Mode is a limitation to diagnose, not proof that the code compiles.

No automatic remote URL probing, browser server, engine download or browser detector is required. Read-only planning can continue with source and supplied images. For unavailable Editor access, finish authorized source work, label import/render/input unverified and describe the specific missing capability in conversation. Do not ask the user to repeat checks that the available connection can perform.

Sources: [Unity ui-uitk](https://github.com/Unity-Technologies/skills/tree/9d282100540601cfddc4bbd69f36a239d7a6f55c/skills/ui-uitk), [Unity CLI](https://github.com/Unity-Technologies/skills/tree/9d282100540601cfddc4bbd69f36a239d7a6f55c/skills/unity-cli). Skill policies and APIs must be checked separately against the selected Editor version.
