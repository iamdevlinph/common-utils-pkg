---
name: docs-site-ui
description: >-
  Implement or review appearance, layout, responsive behavior, accessibility,
  or interaction changes in the common-utils-pkg Docusaurus documentation site.
  Use for docs UI and visual-regression work, not utility source changes or
  prose-only documentation edits.
---

# Documentation Site UI

Before editing, inspect the closest same-purpose shipped Docusaurus feature and
reuse its patterns. The site uses Docusaurus classic and Infima; configuration
lives in `docusaurus.config.ts` and `sidebars.ts`, global theme overrides live in
`css/custom.css`, content lives in `docs-md`, and static assets live in `static`.
Prefer those existing extension points over swizzling or adding dependencies.

Identify the analogue's tokens, spacing, typography, responsive behavior,
interaction states, and light/dark-mode treatment. Preserve semantic HTML,
accessible names and instructions, keyboard operation, logical focus, visible
focus, readable contrast, and non-color status cues. Use ARIA only when native
semantics are insufficient.

Ask before deliberate divergence from an established analogue, changing a
written convention, or proceeding when precedents conflict or no trustworthy
analogue exists. Keep independently changeable UI concerns feature-local and
leave page or configuration entrypoints focused on composition.

Run the narrowest relevant checks, then `pnpm run format:check` and
`pnpm run docusaurus:build`. When browser or screenshot tooling is available,
compare the changed view with its analogue at relevant sizes, themes, and states;
otherwise report that rendered comparison was unavailable. For visual-regression
tests under `src`, also use `$verify-source-changes` and follow its test-only
branch.
