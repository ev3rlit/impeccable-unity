<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Ownership, lifecycle and input

Use the existing host and assembly boundaries. Resolve UIDocument initialization versus version-supported PanelRenderer reload callbacks; for 6000.6 use the API's versioned reload callback instead of copying its deprecated two-argument overload. EditorWindow CreateGUI initialization is a different lifecycle. Reacquire elements on a new tree, remove obsolete external subscriptions and prevent duplicate children, callbacks, manipulators and scheduled work. Disabling/re-enabling an unchanged tree is not necessarily a reload. Unsubscribe with the same delegate and propagation phase; avoid throwaway lambdas when later removal is required.

Finite states such as selected/expanded/error belong in classes and control values. Use computed values only where needed, following project authoring policy; do not rebuild appearance every Update. New custom UXML elements on supported Unity versions use [UxmlElement] partial classes and [UxmlAttribute] members with namespace-only declarations. Constructor, serialized setter and attachment order must not assume final geometry. Keep code out of UnityEditor assemblies when it must run in the player.

## Data and lists

Runtime DataBinding supports plain C# sources via Unity.Properties/property bags. Expose intended properties with CreateProperty where required; use actual relative PropertyPath member paths, not the type name prepended to a data source. Use nameof for resolvable member segments. Define direction and update trigger, clear or rebind on a new tree and avoid stale source ownership. SerializedObject binding is for Editor serialized data and must preserve Undo, multi-selection and persistence. Do not cast Runtime data into Editor binding just to reuse an example.

Rendering model changes must not accidentally fire user commands. Use SetValueWithoutNotify where appropriate and prevent cyclic updates or duplicate requests. UI requests a gameplay action; it does not duplicate purchase/collection/equipment rules or decide server authority. Preserve failure recovery, async cancellation and the existing action owner.

ListView/TreeView reuse elements. Separate creation, binding, unbinding and destruction. Do not capture an index permanently in a recycled row or accumulate callbacks in bindItem. Clear item-specific selection/disabled/tooltip state and subscriptions on rebind. Prefer stable item identity for pending actions; a row index can change during scrolling or sorting.

## Pointer and navigation contracts

Before input work read the target project's input rules and existing InputActionAsset/action maps. Map devices to shared actions and contextual maps, not parallel copies of game rules. Inspect Active Input Handling and an existing EventSystem/InputSystemUIInputModule before adding components. UI Toolkit can have a default event system; a new EventSystem is not universally required.

Use pointer events for device-neutral gestures and a reusable PointerManipulator when appropriate. Track pointerId, activation conditions, movement threshold and the current gesture owner. Capture only at the intended ownership transition and release on terminal paths. Convert screen/world/panel/local coordinates explicitly. Distinguish target from currentTarget and trickle-down from bubble-up; do not indiscriminately stop all propagation.

- Normal pointer up can request a valid drop after all conditions pass.
- PointerCancelEvent cancels without executing the gameplay action.
- PointerCaptureOutEvent is not successful drop evidence; cancel unfinished work unless normal completion was already recorded.
- Focus loss, screen/component disable, detach, interruption, context change and a second touch must clear timers, previews, capture and held state as applicable.
- Scroll and drag must not trigger clicks accidentally. A gesture owned by UI must not simultaneously fire the world action. Define the one-to-two-finger ownership transition and do not resume an interrupted held action until the project's rearm condition holds.

Define focus entry, visible focused state, navigation, Submit/Cancel and restoration after closing an overlay. Use supported focusable/tabIndex/FocusController APIs and preserve native control behavior. Do not confuse PickingMode.Ignore with disabling a control or blocking world input. Inspect touch target size in panel-to-device context; a screenshot is not gesture evidence.

## Drawing and animation

Prefer standard elements for labels and controls. For justified custom visuals use generateVisualContent with local content geometry, and Painter2D or a mesh as supported. Treat the element as read-only inside its drawing callback; request MarkDirtyRepaint when visual data changes outside it. It is not automatically a per-frame update callback. Pool/cache hot data where measured, cancel scheduling on lifecycle transitions and retain a static/reduced-motion path. Do not use drawing APIs to evade design bans.

Sources: [reload](https://docs.unity.com/en-us/engine/6000.6/script-reference/unityengine/uielements/panelrenderer/registeruireloadcallback), [binding](https://docs.unity.com/en-us/engine/6000.6/manual/uitoolkits/uielements/uie-data-binding/uie-runtime-binding/types), [events](https://docs.unity.com/en-us/engine/6000.6/manual/uitoolkits/uielements/uie-events/handling), [capture](https://docs.unity.com/en-us/engine/6000.6/manual/uitoolkits/uielements/uie-events/uie-capture-the-pointer), [drawing](https://docs.unity.com/en-us/engine/6000.6/script-reference/unityengine/uielements/visualelement/generatevisualcontent).
