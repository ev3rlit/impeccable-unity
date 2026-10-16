<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Onboard

## Use and input
Design the shortest path to a real first useful action for a named feature. Input includes novice situation, first value and returning-user behavior; resolve missing facts before inventing a tutorial.

## Read
Read unity-design.md, unity-uxml.md, unity-csharp.md, unity-review.md and design-policy.md, existing progression/save state and input rules.

## Work
1. Identify the action the player should actually perform, prerequisite knowledge and the few instructions needed at that moment. Prefer contextual learning to a feature tour.
2. Build progressive hints or honest empty states around real controls and content. Keep necessary information discoverable without requiring completion of the tour.
3. Provide skip, dismiss and replay through existing state ownership. Respect a returning user's saved dismissal and do not repurpose player progression to store UI state without an explicit contract.
4. Handle focus/navigation, touch input, controller hints, reload, interrupted flow and missing data. Keep overlays out of clipping and from accidentally triggering world actions.

## Boundary and output
Edit scoped onboarding UXML/USS and required presentation/state integration. No invented reward, account setup or analytics requirement. Preserve normal access to the feature.

## Verify and fallback
Exercise first visit, skip, replay, returning visit and interrupted step on supported devices where possible. Without persistence/Editor access, label those transitions unverified rather than claiming a working saved tutorial.

## Official example and Unity transfer

Read the [onboard Before/After case](before-after-cases.md#onboard) for the source, concrete problem, preserved properties and acceptance criteria. The example teaches a correction, not an art preset. Keep unrelated appearance and behavior unchanged; make the named improvement observable.
