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

## Project Discovery

- Before changing code, inspect manifests, configuration, scripts, and nearby
  files to identify the repository's actual stack, commands, and conventions.
  Do not assume tools from other projects.
- Keep discovered stack-specific guidance in the project's
  `# Project-Specific Instructions`, not in this shared template.

## Commands And Verification

- Avoid broad commands. After changes, run the smallest targeted verification
  that meaningfully validates them when practical, then report the command and
  result. Use the repository's documented package manager and scripts.
- For behavior changes and bug fixes, add or update the smallest focused
  automated tests that meaningfully prevent regression when the repository has
  an established test setup.
- Do not introduce a test framework or create low-value tests solely to satisfy
  this rule. If automated coverage is impractical, explain why and perform the
  strongest targeted verification available.
- Run the relevant focused tests after changing tested behavior.
- When adding or updating dependencies, pin exact versions rather than ranges.
  With pnpm, use `pnpm add -E` (`--save-exact`).
- Do not change dependencies, global tools, or the environment by default.
- Do not run local or remote database inspection, generation, migration, or SQL
  commands unless the task requires them.

## Structure

- Follow the repository's organization and naming. Prefer focused files and
  split mixed responsibilities when readability improves.
- Keep route and page files focused on page-level composition, data loading, and
  orchestration. Extract substantial self-contained UI sections and complex
  page-specific logic into colocated feature components or modules. Keep small
  one-use markup inline; do not create components solely to reduce line count.
- Use intent-revealing domain names. A reader should understand what a variable
  contains or what a helper guarantees at the call site without opening its
  implementation. Avoid vague transformation names such as `normalized`,
  `processed`, `result`, or `data` when a value- or behavior-specific name is
  available.
- Do not reorganize feature directories, shared modules, routes, server
  boundaries, schemas, or state patterns unless requested and approved.

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
