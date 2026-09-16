# Production Release Preparation

Read this reference only when production files under `src` are added, updated,
moved, or removed.

1. Confirm public utilities follow
   `src/<kebab-case-name>/<kebab-case-name>.ts`, use a camelCase named export,
   include JSDoc, and have a colocated `.test.ts` file when behavior changes.
2. Classify the highest-impact SemVer recommendation:
   - **major**: backward-incompatible public API or behavior change
   - **minor**: new public API or substantial backward-compatible update
   - **patch**: smaller backward-compatible fix, refactor, or code update
3. Calculate the next version from `package.json`. Update
   `docs-md/changelog.md` under that version, merging with an existing unreleased
   entry when present. Do not change the package version unless explicitly
   requested.
4. Run `pnpm run docusaurus:generate`, which replaces `docs-md/api` and
   regenerates `src/index.ts`. Inspect generated and changelog changes, keeping
   only changes caused by the production source work.
5. After the focused test, run `pnpm exec biome check .`, `pnpm run test:ci`,
   `pnpm run build`, and `pnpm run docusaurus:build`.
6. Report the recommended version, changelog and generated changes, validation
   results, and exact blockers.
