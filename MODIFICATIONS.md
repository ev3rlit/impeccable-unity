# Modifications and provenance

This is an unofficial Unity UI Toolkit adaptation of [Impeccable](https://github.com/pbakaus/impeccable), originally authored by Paul Bakaus and contributors and distributed under Apache-2.0. The adaptation is maintained by [ev3rlit](https://github.com/ev3rlit) and was prepared with AI assistance.

- Upstream baseline: [`5bf0a069dc857e1b5f4b090e004d9d5b231416ca`](https://github.com/pbakaus/impeccable/tree/5bf0a069dc857e1b5f4b090e004d9d5b231416ca)
- Upstream skill version: 4.6.0. The adaptation uses its own version sequence.
- Initial adaptation and standalone packaging: 2026-10-16.
- License: [Apache License 2.0](LICENSE). Original notices are retained in [NOTICE](NOTICE).

## Changes from upstream

Paths below are relative to the installable `skills/impeccable-unity/` folder.

| Distributed files | Source relationship and modifications |
| --- | --- |
| `SKILL.md` | Adapted from upstream `skill/SKILL.src.md`; scopes the workflow to Unity UI Toolkit, preserves project art direction, and routes 21 commands to Unity playbooks. Browser-only workflows and the deprecated creation alias are excluded. |
| `reference/design-policy.md` | Adapted from upstream `skill/reference/craft-floor.md`. The design rules, rule identifiers and conditions remain; browser implementation language is translated to Unity-supported techniques. |
| `reference/{command}.md` | Unity adaptations of the corresponding upstream `skill/reference/{command}.md` playbooks. Web implementation instructions are replaced with UXML, USS, C# and Unity evidence boundaries. |
| `reference/design-principles.md`, `reference/unity-design.md` | Adapted design-authority, refinement and surface-mode guidance. They keep the user's chosen art direction and do not impose a universal game aesthetic. |
| `reference/unity-*.md` other than `unity-design.md` | Unity-specific additions about version support, USS, UXML, C#, lifecycle, input and verification. Official source links are included where relevant. |
| `reference/before-after-cases.md`, `scripts/before-after-cases.json` | Original-source-linked summaries and Unity transfer scenarios for 21 commands. They distinguish authored illustrations, workflow examples, diagnostics, documents and unmeasured performance strategies. They are not copies of the official website's screenshots or executable demos. |
| `scripts/impeccable-unity.mjs`, `scripts/command-metadata.json` | Unity-specific read-only routing and project-context discovery. Standalone packaging adds per-file provenance and a `commands` envelope to the metadata; the 21 command names and behavior remain. No web detector, telemetry hook or engine download is included. |
| `agents/openai.yaml` | Adapted agent metadata explicitly labels this distribution unofficial. |

Each adapted Markdown, JavaScript, JSON and YAML file carries its own modification/provenance notice. The original Apache license text is preserved unchanged. Newly authored repository documentation, packaging and tests support this adaptation and do not claim to be upstream files.

## Distribution boundaries

The installable skill folder contains all its local references, scripts, LICENSE, NOTICE and this document. It is the maintained source of truth in this repository; there is no dependency on a sibling checkout or an ignored build folder.

Unity project demos, Editor screenshots, Unity binaries/packages, upstream iOS/Android references, the upstream web engine and its provider-specific hooks are not included. Upstream's notice for the excluded iOS/Android files is retained with an explicit scope note in NOTICE.

The upstream website examples are summarized with source links. A referenced website or Unity document retains its own applicable terms; inclusion of a link does not relicense that external material.

This adaptation is not endorsed by the Impeccable authors or Unity Technologies. The project names identify source and compatibility, not official affiliation.
