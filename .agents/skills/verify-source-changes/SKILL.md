---
name: verify-source-changes
description: >-
  Determine the next semantic version, update the changelog, regenerate derived
  documentation and exports, then validate source changes in common-utils-pkg.
  Use whenever files under src are added, updated, moved, or removed.
---

# Verify Source Changes

## Workflow

1. Confirm public utilities follow
   `src/<kebab-case-name>/<kebab-case-name>.ts`, use a camelCase named export,
   include JSDoc, and have a colocated `.test.ts` file when behavior changes.
2. Inspect all pending source changes and classify the highest-impact SemVer
   bump:
   - **major**: any backward-incompatible public API or behavior change
   - **minor**: a new public method or substantial backward-compatible update
   - **patch**: a smaller backward-compatible fix, refactor, or code update
3. Calculate the next version from `package.json`. Update
   `docs-md/changelog.md` with a concise entry under that version, merging into
   an existing unreleased entry when present. Do not change the package version,
   create a tag, or publish unless explicitly requested.
4. Run `pnpm run docusaurus:generate`. It rewrites `docs-md/api` and regenerates
   `src/index.ts`.
5. Inspect changelog and generated changes. Keep only updates caused by the
   source change.
6. Run the relevant focused Jest test, then:
   - `pnpm exec biome check .`
   - `pnpm run test:ci`
   - `pnpm run build`
7. Run `pnpm run docusaurus:build`.
8. Report the recommended version, changelog and generated files, and validation
   results. If pnpm or a security policy blocks validation, do not bypass it or
   change dependency policy; report the exact blocker.
