<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Clarify

## Use and input
Improve confusing labels, instructions, empty states and recovery copy in context. Input is the target interaction and real product terminology, not an invitation to add explanatory filler.

## Read
Read unity-uxml.md, unity-review.md and design-policy.md plus the actual control behavior, localization source and project voice/terminology rules.

## Work
1. Walk what the user sees before and after the message. Identify ambiguous actions, missing outcomes, misleading progress and errors with no recovery path.
2. Use concise action names and specific cause/recovery language; keep persistent labels for fields. Preserve factual/legal meaning, costs, skill effects and necessary conditions exactly.
3. Edit the authoritative UXML/C#/localization string rather than a generated display copy. Use complete translatable messages and existing formatting conventions, not concatenated language fragments.
4. Check all callers, placeholders, pluralization, long Korean strings, focus hints and ellipsis. Do not invent facts, claims or friendly jokes that obscure a decision.

## Boundary and output
Change scoped copy and existing localization entries only. Do not rename queried elements or alter actions/game rules. Follow project minimal-copy policy and preserve information needed to judge or operate.

## Verify and fallback
Verify placeholders and semantic equivalence against the action, then rendered wrapping where available. If the actual error cause is unknown, ask for that fact or keep a neutral accurate message; do not fabricate a diagnosis. No Editor means text layout remains unverified.

## Official example and Unity transfer

Read the [clarify Before/After case](before-after-cases.md#clarify) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
