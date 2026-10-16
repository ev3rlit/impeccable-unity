<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Distill

## Use and input
Remove complexity that interferes with the target task. Simpler means clearer operation, not the fewest possible visible elements.

## Read
Read unity-design.md, unity-uxml.md, unity-csharp.md, unity-review.md and design-policy.md. Trace actions, queried names, binding paths and the information users need to decide.

## Work
1. Separate required decisions/actions from duplicate labels, empty containers, redundant borders, decorative metrics and unnecessary steps.
2. Remove or merge visual noise while retaining hierarchy and useful identity. Never nest cards inside cards; not every standalone panel is a forbidden card.
3. Use progressive disclosure only when the hidden function remains discoverable and operable through supported devices. Preserve necessary effects, conditions and costs.
4. Remove obsolete selectors/queries/subscriptions with their elements. Verify focus paths, localization references and overlay ownership after restructuring.

## Boundary and output
Edit the scoped UI and affected callers, not gameplay capabilities. Do not trade away accessibility, essential information or recovery to make the screen look empty.

## Verify and fallback
Walk the same task before/after, including non-pointer operation and hidden-state recovery. With source only, confirm references and state paths and label discoverability/rendering limits; fewer lines alone is not success.

## Official example and Unity transfer

Read the [distill Before/After case](before-after-cases.md#distill) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
