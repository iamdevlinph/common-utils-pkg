# Shared Agent Defaults

Reusable defaults for coding agents. Adapt stack details, commands, paths,
product context, and local conventions in the project's active `AGENTS.md`.

## Context And Instruction Scope

- Follow the repository's existing style, structure, architecture, and stronger
  local instructions. Keep product and business decisions aligned with
  `PLANS.md` when it exists.
- Use `PLANS.md` for durable product context, business rules, sequencing,
  priorities, deferred requirements, product or implementation decisions, and
  major completed milestones.

## Instructions And Skills

- Keep `AGENTS.md` focused on durable, always-applicable repository context:
  architecture, conventions, commands, safety and authorization boundaries,
  verification expectations, and concise pointers to specialized workflows.
- Use project skills under `.agents/skills/<skill-name>/SKILL.md` for repeatable,
  task-specific workflows or detailed guidance needed only for matching tasks.
- In existing projects, review large task-specific procedures in `AGENTS.md`.
  When a procedure is reusable and conditionally relevant, extract it into a
  project skill and leave a concise routing rule in `AGENTS.md`.
- Preserve critical safety, authorization, destructive-operation, database, and
  deployment restrictions in `AGENTS.md`, even when a skill contains the
  detailed workflow.
- In new projects, begin with a concise `AGENTS.md`. Add a skill only after a
  concrete repeatable workflow or specialized procedure is identified; do not
  create speculative skills.
- Avoid duplicating detailed instructions between `AGENTS.md` and `SKILL.md`.
  Keep the always-on rule in `AGENTS.md` and the conditional procedure in the
  skill.
- Each project skill must use valid YAML frontmatter with a clear `name` and a
  `description` that states when the skill should trigger.

## Template Maintenance

- `TEMPLATE_AGENTS.md` is a staged reference copy of codex-kit's reusable
  instructions, not active project guidance. Active repository guidance lives
  in `AGENTS.md` and applicable project skills under `.agents/skills`.
- When the template is refreshed, `codex-kit project status` reports
  `reconciliation required`, or a user requests template sync or mark-applied,
  use the global `$codex-kit-reconcile-agents` skill. It compares the template
  with `AGENTS.md`, project state, and existing skills; preserves local rules;
  applies only relevant reusable changes; validates them; and marks applied
  only after success.
- Keep project-specific rules out of `TEMPLATE_AGENTS.md`. Treat local template
  edits as candidates that must be generalized and promoted to the canonical
  `assets/TEMPLATE_AGENTS.md` in the codex-kit repository. Updating `AGENTS.md`
  does not update either template automatically.
- Keep project-specific context out of the packaged template; keep only
  reusable cross-project rules here.
- When a request introduces a reusable workflow preference, convention, agent
  behavior, tooling default, or safety rule, tell the user it appears
  template-level and update the current project's active instructions when
  appropriate.
- After a likely template-level project change, remind the user to update the
  packaged template, publish a version, and sync affected projects. Specify:

  - the target section and whether to add a bullet, subsection, or section
  - whether it replaces an existing rule or adds one
  - exact reusable wording or a concise patch
  - for replacements, the old and new behavior
  - for additions, why the rule applies across projects

- Merge template updates into other projects without overwriting project-specific
  context.

## Template reconciliation

Do not copy the complete template into `AGENTS.md`, replace it wholesale, or
introduce managed markers. If a legacy shared-template marker is present,
preserve local content and reconcile its meaning safely without creating new
markers. Summarize added, updated, skipped, adapted, and skill-moved guidance,
including local/template conflicts and any generalized template-worthy
promotion. Keep critical safety, authorization, secrets, database, deployment,
and destructive-operation rules always-on in `AGENTS.md`; extract only concrete
conditional procedures into validated project skills.

## Core Behavior

- Match nearby code before introducing patterns, abstractions, dependencies, or
  file organization. Consistency outranks personal preference and generic
  best-practice refactors.
- Keep changes minimal, localized, and limited to the request. Do not reorganize
  major modules, refactor core systems, add frameworks, or change architecture
  or project paradigms without explicit approval.
- Work within imperfect architecture. If it prevents safe completion, stop,
  explain the limitation, propose the smallest viable design change, and wait
  for approval. Escalate blockers instead of bypassing them.
- Reuse existing constants, schemas, enums, shared types, and components before
  creating duplicates. Add reusable domain values at their existing source of
  truth instead of scattering magic strings.
- Replace numeric literals that encode domain rules, limits, durations, units,
  or protocol values with descriptively named constants. Universally obvious
  structural values, such as basic indexes or empty-state values, may remain
  inline.
- Promote repeated closed-set domain values used in production control flow to
  feature-owned immutable runtime constants. Where the language supports it,
  derive static types from that runtime source; keep incidental presentation,
  browser, protocol, route, environment, and test-contract strings inline.

## Project Discovery

- Before changing code, inspect manifests, configuration, scripts, and nearby
  files to identify the repository's actual stack, commands, and conventions.
  Do not assume tools from other projects.
- Keep discovered stack-specific guidance in the project's
  `# Project-Specific Instructions`, not in this shared template.
- For user-facing work, perform a UI/style preflight before editing: inspect the
  closest same-purpose shipped features (especially tables, filters, search,
  forms, dialogs, and page layouts) and identify their design-system primitives,
  tokens, spacing, typography, responsive behavior, interactions, states, and
  accessibility conventions. Reuse applicable components and patterns.
- For new or materially changed user-facing interfaces, preserve accessibility
  as a baseline: prefer semantic elements and native controls; provide accessible
  names, labels, instructions, errors, and state; support keyboard operation,
  logical focus order, visible focus, and appropriate focus management; provide
  meaningful text alternatives; maintain readable typography and sufficient
  contrast; and never rely on color alone to communicate meaning. Use ARIA only
  when native semantics are insufficient, and keep ARIA roles, properties, and
  states valid and synchronized with behavior.
- When practical, verify changed interaction paths with the repository's
  accessibility tooling and a manual keyboard/focus check. Report any unavailable
  checks or known limitations.
- If no written standard exists but trustworthy repeated precedent does, derive
  concise durable guidance in the project: always-on conventions belong in
  `AGENTS.md`; feature-specific decisions and approved exceptions belong in
  `PLANS.md`. During development, keep new UI aligned with that standard.
- Pause and ask the user whether to keep, update, or override the standard
  before deliberate visual divergence, changing an established guideline,
  resolving conflicting precedents, or proceeding without a trustworthy
  analogue. Include the evidence and affected pattern in the question.
- If browser or screenshot tooling exists, compare the rendered feature with
  the analogue across relevant responsive sizes and states. Otherwise, report
  that rendered comparison was unavailable.

## Commands And Verification

- Avoid broad commands. After changes, run the smallest targeted verification
  that meaningfully validates them when practical, then report the command and
  result. Use the repository's documented package manager and scripts.
- Select tests for regression value rather than exhaustive coverage. When the
  repository has an established test setup, cover changed observable contracts,
  reported regressions, meaningful boundaries, and plausible costly failures,
  especially security, trust-boundary, or data-loss risks.
- Use one representative case per equivalent behavior class. Skip redundant
  permutations, implementation-detail assertions, and contrived or unreachable
  states unless a requirement or past defect justifies them.
- Treat existing tests as regression contracts. Preserve their assertions unless
  the requested behavior intentionally changes. When behavior changes, update
  only the affected tests and add coverage for the new contract; never weaken or
  delete tests merely to make the suite pass.
- Do not introduce a test framework solely to satisfy this rule. If automated
  coverage is impractical, explain why and perform the strongest targeted
  verification available.
- Run the relevant focused tests after changing tested behavior.
- When adding or updating dependencies, pin exact versions rather than ranges.
  With pnpm, use `pnpm add -E` (`--save-exact`).
- Do not change dependencies, global tools, or the environment by default.
- Do not run local or remote database inspection, generation, migration, or SQL
  commands unless the task requires them.

## Structure

- Follow the repository's organization and naming. Organize feature-specific
  code under the feature's existing directory; when a feature contains multiple
  substantial UI pieces, place them in a `<feature>/components` subdirectory.
  Keep broadly reused code in the repository's established shared locations.
- Complete every new or materially changed feature through a semantic pass:
  implement and stabilize it, map each responsibility to its final file, extract
  independently understandable concerns, validate the decomposed implementation,
  then hand it off to `code-reviewer`. Pages, routes, controllers, commands, and
  entrypoints contain composition and orchestration only. Web page files may keep
  framework exports, metadata, loading, guards, page-level state, minimal layout
  wrappers, and imported child composition, but not child components, substantial
  UI sections, or domain logic. Independently changeable UI concerns (tables,
  filters, forms, dialogs, and sections) belong in descriptive feature-local
  component files. Hooks, schemas, data access, transformations, and domain logic
  move out of presentation files when independently testable or when they obscure
  the component's primary responsibility. Avoid generic `utils`, `helpers`, or
  `components` dumping grounds; filenames must identify owned behavior. Keep
  components feature-local by default; promote them to shared/design-system
  locations only when reused across features or explicitly global primitives.
  Tiny private helpers or markup may remain inline only when inseparable from the
  file's single responsibility. Do not broaden an unrelated small fix, but leave
  any new or materially changed feature decomposed. Every completed feature gets
  an automatic `code-reviewer` structure review; exceptions require a concrete
  framework or tooling constraint identified in the handoff.
- Use intent-revealing domain names. A reader should understand what a variable
  contains or what a helper guarantees at the call site without opening its
  implementation. Avoid vague transformation names such as `normalized`,
  `processed`, `result`, or `data` when a value- or behavior-specific name is
  available. Prefer clear structure, and simplify or extract complex logic before
  relying on comments. Use comments to explain non-obvious purpose, constraints,
  invariants, tradeoffs, or workarounds, not to narrate statements.
- Keep naming conventions consistent within each code-owned object, schema,
  type, and module. Do not mix identifier casing styles in the same
  representation unless required by an external contract or framework.
  Preserve externally defined names at the boundary, then map them once to the
  project's internal convention.
- Do not reorganize feature directories, shared modules, routes, server
  boundaries, schemas, or state patterns unless requested and approved.

## React And React Native TypeScript Naming

- In React, React Native, and Expo projects using TypeScript, use `kebab-case`
  for code-owned file and directory names. Preserve framework-mandated and
  contract-derived names, including Expo Router notation and React Native
  platform suffixes such as `.ios.tsx`, `.android.tsx`, and `.native.tsx`.
- Use `PascalCase` for components, context providers and consumers, type aliases,
  interfaces, and enums.
- Use `camelCase` for functions, variables, props, state, and code-owned object
  properties.
- Name custom hooks as `useThing`, higher-order components as `withThing`, and
  local event-handler functions as `handleThing`. Name callback props with `on`,
  such as `onSubmit`.
- Prefix boolean props, state, and variables with `is`, `has`, or `should`
  when the prefix accurately describes their meaning.
- Use `UPPER_SNAKE_CASE` for module-level constants and enum members. Keep
  ordinary local `const` bindings in `camelCase`.

## Data And Validation

- Update schemas first, then generate migrations or derived types. Never edit
  generated migration snapshots manually unless requested.
- Validate form and server inputs explicitly. After successful mutations,
  invalidate or refresh relevant cached data when applicable.

## Planning

- Read `PLANS.md` before product-facing work. Implement only the requested
  feature, not the whole plan.
- Record requirement, product, workflow, permission, priority, scope, deferral,
  and durable implementation decisions in the relevant feature chunk/checklist,
  not only narrative summaries.
- After product-facing work, update the relevant item's state: implemented,
  verified, deferred, or pending. Check items only after implementation and
  verification; manual testing may revert them.
- Record major completed, resume-worthy milestones in a concise `PLANS.md`
  milestone or accomplishment section. State the technical scope and value;
  never exaggerate impact or invent metrics.
- Keep `PLANS.md` detailed enough for a fresh session, but exclude temporary
  handoff state, command output, debugging notes, and scratch work unless they
  represent durable decisions.
- If `PLANS.md` conflicts with the current request, follow the request and update
  the plan.

## Repo Safety

- Preserve user changes and unrelated dirty state. Never revert them without an
  explicit request.
- Never run destructive Git commands such as `git reset --hard` or
  `git checkout --` without explicit approval.
- Use `apply_patch` for manual edits.
- Prefer `rg` and `rg --files` for approved searches.
- Keep final responses concise and state what was verified or which manual
  verification commands were suggested.

## Completion Report

After changes, summarize:

1. changed files and behavior
2. suggested verification, or commands run with explicit approval and results
3. relevant `PLANS.md` items deferred, updated, or marked complete
4. whether the change is template-level; if so, give the packaged template's
   target section and exact addition or replacement
