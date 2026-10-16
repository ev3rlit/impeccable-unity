<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Structure and assets

Author complete XML files with a UXML root and explicit namespaces, normally ui="UnityEngine.UIElements". Runtime code must not depend on UnityEditor.UIElements or Editor assemblies. Escape attribute values; use exact attribute names and types. A single screen container is an authoring convention, not a parser restriction: several visual children under UXML are legal. Link the actual USS asset and verify its location rather than inventing a path.

Use built-in Button, Toggle, Slider and TextField semantics instead of rebuilding their input behavior in generic VisualElements. Inspect internal control parts through the UI Toolkit Debugger and documented USS classes. Preserve labels, accessibility and focus states while styling. A decorative child should not steal its parent's pointer handling; picking-mode concerns pointer targeting, not keyboard focus or world-input ownership.

Reuse repeated structure through Template/Instance, VisualTreeAsset or a justified custom VisualElement. Scope queries to the owning screen/control, detect missing required elements and requery after tree reload. Instantiate/CloneTree and TemplateContainer can introduce a wrapper; inspect the real hierarchy before adding child selectors or layout constraints. When extracting a component, move its callers and preserve UXML names that external code queries.

Asset references may use supported relative/project/package paths according to the project's loading policy. Preserve .meta files and GUIDs when moving assets; do not fabricate imported asset identities. AssetDatabase and EditorGUIUtility are Editor-only loaders. Verify Runtime asset inclusion via the project's existing serialized references, Resources or Addressables policy without introducing a new dependency unasked.

Generate only needed assets. A visual-only request does not automatically require a new C# controller. A request for interaction does require real handlers and state integration, not a static imitation of behavior. Neither wording ambiguity nor a skill default may narrow a clearly functional request to appearance alone. Follow existing assembly/folder conventions before choosing new ones.

Sources: [UXML](https://docs.unity3d.com/6000.6/Documentation/Manual/UIE-WritingUXMLTemplate.html), [templates](https://docs.unity3d.com/6000.6/Documentation/Manual/UIE-reuse-uxml-files.html), [instantiation](https://docs.unity3d.com/6000.6/Documentation/Manual/UIE-LoadingUXMLcsharp.html).
