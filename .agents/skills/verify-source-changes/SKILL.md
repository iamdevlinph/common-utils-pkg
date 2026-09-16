---
name: verify-source-changes
description: >-
  Test and validate changes under src in common-utils-pkg, adding release
  preparation only when production source changes. Use whenever files under src
  are added, updated, moved, or removed.
---

# Verify Source Changes

Classify pending `src` changes by behavior, not merely path:

- For test-only changes, read
  [references/focused-source-testing.md](references/focused-source-testing.md)
  and follow only that workflow.
- For production-source changes, read both
  [references/focused-source-testing.md](references/focused-source-testing.md)
  and
  [references/production-release-preparation.md](references/production-release-preparation.md).
- For mixed test and production changes, follow both references.

Test-only work does not require a SemVer recommendation, changelog entry,
documentation generation, export generation, build, or release checks unless
the test changes expose a required production change.

Do not publish, tag, change the package version, alter dependency or security
policy, or bypass a policy failure unless explicitly requested. Report blockers
instead.
