<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Quieter

## Use and input
Reduce visual aggression or stimulation while preserving character, information hierarchy and usability of the named target.

## Read
Read unity-design.md, unity-uss.md, unity-review.md and design-policy.md, then active/inactive/focus states and existing motion.

## Work
1. Identify competing saturated areas, oversized emphasis, heavy borders/shadows and repeated movement that distract from the task.
2. Reduce secondary intensity first, restoring a meaningful focal point. Use the existing palette/type vocabulary, not an indiscriminate gray or tiny-text treatment.
3. Remove decorative motion while preserving state feedback. In this quieter pass never use bounce or elastic motion; that local rule is stricter than a general caution against reflex easing.
4. Recheck contrast, touch size, focus visibility, selection and warning distinction. Calm must not mean faint, disabled-looking or unrecognizable.

## Boundary and output
Edit target appearance and necessary motion parameters. Preserve identity, content, actions and useful feedback; do not flatten every role to the same style.

## Verify and fallback
Inspect repeated use and all relevant control states at target sizes. Without Editor, verify parameter/state changes but leave perceived intensity and motion confirmation open.

## Official example and Unity transfer

Read the [quieter Before/After case](before-after-cases.md#quieter) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
