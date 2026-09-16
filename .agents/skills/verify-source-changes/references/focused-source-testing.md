# Focused Source Testing

Read this reference for every change under `src`.

1. Inspect the changed contract and nearby tests. Preserve existing assertions
   unless behavior intentionally changes.
2. Add or update only focused colocated Vitest coverage for changed observable
   behavior, regressions, meaningful boundaries, and costly failures. Use one
   representative case per equivalent behavior; skip implementation details and
   redundant permutations.
3. Run the narrowest relevant Vitest command. For broader production changes,
   also run the repository checks required by the release-preparation reference.
4. Report the tests run and any unavailable or blocked validation.
