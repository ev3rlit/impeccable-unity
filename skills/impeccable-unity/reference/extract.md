<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Extract

## Use and input
Consolidate genuinely repeated design patterns in a named feature or project. Find evidence of the same intent in three or more uses before introducing a new abstraction; future hypothetical reuse is not evidence.

## Read
Read unity-uss.md, unity-uxml.md, unity-csharp.md, unity-review.md and design-policy.md. Locate the existing shared tokens/components and consumer queries/bindings.

## Work
1. Compare repeated uses, intent and differences. Choose the existing shared location or resolve that location before editing; avoid a second competing design system.
2. Extract a complete token value, UXML template or version-supported custom VisualElement with the smallest useful public contract. Preserve intentional variants and internal state semantics.
3. Migrate every scoped caller and remove superseded duplication. Preserve .meta/GUID references, query names, assembly boundaries and runtime resource inclusion.
4. Check TemplateContainer effects on layout/selectors, event ownership, recycled state and reload binding. Update existing design-system documentation only for the actual consolidation.

## Boundary and output
Edit the shared assets and their scoped consumers. No visual redesign, new feature or token for every one-off value. Return what was consolidated and where each caller now goes.

## Verify and fallback
Compare before/after representative states and import all changed assets; exercise callers and reload where relevant. With no Editor, verify paths/contracts and state that visual/interaction equivalence remains unverified. A new shared file with callers left untouched is unfinished extraction.

## Official example and Unity transfer

Read the [extract Before/After case](before-after-cases.md#extract) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
