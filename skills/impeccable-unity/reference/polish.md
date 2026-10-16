<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Polish

## Use and input
Finish an existing user path by fixing concrete defects. Read any current findings provided in conversation, checking their target/state/source freshness before using them as a backlog.

## Read
Read unity-uss.md, unity-uxml.md, unity-csharp.md, unity-review.md and design-policy.md plus incumbent tokens/components. Preserve identity; this is not a new visual direction exercise.

## Work
1. Walk the whole relevant path once and gather a bounded list. Prioritize blocking/data/accessibility issues, missing states, flow/system drift, appearance/motion, then cleanup.
2. Fix alignment, grouping, token inconsistencies, text clipping, control states, focus/cancel feedback and misleading copy that materially affect that path. Prefer existing components and values.
3. Batch related fixes, reimport complete files and revisit the same states. If an older finding no longer matches current content, do not blindly apply it.
4. Close each scoped finding using evidence. Do not repeatedly hunt new defects or redesign an otherwise coherent screen to keep polishing.

## Boundary and output
Actually edit the scoped assets and necessary presentation code. Avoid unrelated refactors, factual copy changes or new features. Report fixes and remaining items in conversation, without critique snapshots or verification documents.

## Verify and fallback
Check rendering and relevant interactions, tree recreation and reload where affected. With no Editor, complete source fixes and static checks while distinguishing them from visual/gesture confirmation. Do not call open blocking findings a pass.

## Official example and Unity transfer

Read the [polish Before/After case](before-after-cases.md#polish) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
