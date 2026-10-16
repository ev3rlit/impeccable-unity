<!-- Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md. -->

# Version-correct USS

Treat compatibility and permission as two questions. Preserve Impeccable’s design-policy.md and the target project's bans. The official ui-uitk skill also imposes authoring restrictions; do not silently discard a consuming project's adopted policy because the engine supports a feature. Its historical unsupported-property claims are not permanent engine facts. If a useful exception is needed, make it an explicit policy decision and keep its scope narrow.

Use the selected version's official property table, value grammar, selectors and API reference. Research evidence below is for 6000.6 unless otherwise stated, not all Unity 6. For uncertain versions use a documented fallback or verify before generating a declaration. Do not claim a CSS linter validates USS.

## Layout, units and selectors

Unity uses a Yoga/Flex subset, with column as the default direction and a border-box-like sizing model. Use explicit row direction where intended. Equal grow does not always give equal columns: content basis and min sizes matter. Supported lengths are property-dependent px and percentages; map typography and spacing intentions to panel units rather than pasting rem/em/viewport units.

For 6000.6, do not generate CSS Grid, gap/row-gap/column-gap, z-index, order, border shorthand, fixed/sticky positioning, overflow:auto/scroll, pointer-events or !important. Use Flex rows/wrap, explicit child spacing classes, border-width plus border-color, visual tree/overlay ordering and ScrollView/ListView. Panel host sort order is separate from ordering children. Do not simulate a grid by scattering absolute positions unless the surface is genuinely spatial.

Use type, class, name, child, descendant and combined selectors. Supported pseudo-classes include hover, active, inactive, focus, disabled, enabled, checked and root. Use checked for appropriate controls and explicit application-state classes for other selections. Do not emit first/last/nth-child, attribute selectors or unverified sibling/has/not/pseudo-element selectors. Create explicit first/spaced/last classes when needed. Avoid broad ancestor hover invalidation and deep selectors. Classes listed later in UXML do not become an override system.

## Tokens, color and assets

Use --tokens and var(--token, fallback) for complete values. Do not generate rgb(var(--r),...) or variable arithmetic; USS does not support those compositions. Treat calc/min/max/clamp, modern web color functions, media/container rules and nesting as unverified unless the selected version documents them. Store finished colors as hex/RGBA; a perceptual color design method does not require outputting its web color function. Do not derive arbitrary utility names or assume Tailwind's spacing configuration exists.

Reuse project asset paths and loading policy. Relative url() paths resolve from the USS file; project and package asset references are valid where documented, as is resource(). A remote HTTP URL is not an imported Unity asset. Preserve GUID/meta references and check player build inclusion; Editor AssetDatabase is not a Runtime loader.

## Typography, motion and effects

Use actual font assets with -unity-font-definition/-unity-font-style and -unity-text-align; do not paste font-family/font-weight/text-align/line-height. Check font-size, letter-spacing, white-space, overflow and ellipsis in context. Built-in control child styles and default theme rules may override apparent root settings. See unity-review.md for rendered evidence.

Use independent translate/scale/rotate/transform-origin rather than a CSS transform string. USS transitions can name properties; 6000.6 documentation supports transition-property lists. Put transition rules on the base state so reverse transitions work. An engine support fact does not automatically relax an adopted skill restriction. Verify timing units, animatability, interruption and reduced-motion alternatives.

6000.6 documents filter/backdrop-filter and aspect-ratio. Its filter functions are a subset: blur, grayscale, invert, opacity, sepia, tint, hue-rotate, contrast and drop-shadow; do not assume all web filters exist or separate filter classes compose. Intermediate texture costs matter. box-shadow and outline are not equivalent properties. In 6000.7 background documentation, linear/radial gradients exist with up to four stops and radial-circle limitations; do not copy those into 6000.6 on that evidence alone. No API ability overrides a prohibited gradient-text or decorative-glass policy. Never route a forbidden visual through a texture or custom geometry to evade the ban.

Static appearance belongs in reusable USS. Toggle finite states with classes. C# computed positioning/progress may require control values or limited inline values; if the project adopted the official skill's stronger prohibition, resolve the specific exception before using it. Clear temporary overrides and avoid per-frame appearance reapplication. Keep engine constraints, authoring conventions and design bans visibly separate.

Official versioned sources: [property table](https://docs.unity.com/en-us/engine/6000.6/manual/uitoolkits/uielements/uie-uss/properties/reference), [common values](https://docs.unity.com/en-us/engine/6000.6/manual/uitoolkits/uielements/uie-uss/properties/supported-properties), [variables](https://docs.unity.com/en-us/engine/6000.6/manual/uitoolkits/uielements/uie-uss/variables/custom-properties), [transitions](https://docs.unity.com/en-us/engine/6000.6/manual/uitoolkits/uielements/uie-uss/properties/uie-transitions), [filters](https://docs.unity.com/en-us/engine/6000.6/manual/uitoolkits/uielements/uie-uss/uss-filter/built-in-filters), [6.7 backgrounds](https://docs.unity.com/en-us/engine/6000.7/manual/uitoolkits/uielements/uie-uss/properties/uib-styling-ui-backgrounds).
