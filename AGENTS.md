# AGENTS.md

This file provides guidance to Ai Agents when working with code in this repository.

## Writing AjScript

AjScript is a minimal, strictly & strongly-typed subset of JavaScript for Browsers and Bun.

**When writing AjScript code**, load `docs/MEMORY.md` for the full rule index. Each entry links to an ADR with Before/After examples. The rules in MEMORY.md are the authoritative source for what valid AjScript looks like.

Key constraints (non-exhaustive — see MEMORY.md for all):
- `var` module-scope, `let` function/block-scope, `const` true constants only, 3-space tabs
- No `else`, no ternary, no arrow functions, no `class`
- No nested parens — extract sub-expressions into named variables
- Double quotes for strings, backticks only for interpolation or when string contains double quotes
- One operation per line, all expressions must be captured
- `User.create()` not `createUser()` — namespace objects, not bare functions
- `.catch()` for async errors, `try/catch` only for short sync blocks like JSON.parse

## Developing the Language

ADRs (Architecture Decision Records) in `docs/` define AjScript's design. `docs/README.md` lists tooling, ideas, and undecided proposals that aren't yet actionable as code rules.

ADR files use the naming convention `{label}-{NNN}-{description}.md` with frontmatter (name, description, type, issue). Labels: `syntax`, `std`, `tooling`, `js-style`, `meta`, `ideas`, `general`.

### Scripts — what to use when

**Use directly:**
- `adr-new` — creates both the GitHub issue and local file in one shot
- `adr-sync-up <file>` — pushes local edits to GitHub (strips frontmatter and ## Comments)
- `adr-index` — regenerates `docs/MEMORY.md` and `docs/README.md` from frontmatter

**Use `gh` instead:**
- To read an issue: `gh issue view <N>` (faster than sync-down for a single issue)
- To check labels/state: `gh issue list` or `gh issue view <N> --json labels`

**Use sparingly:**
- `adr-sync-down` — bulk import or initial setup only. During a working session, edit local files directly and sync-up. Sync-down overwrites local files from GitHub and may rename files if the title changed. **Never sync-down without syncing up first** — unsaved local edits will be lost.
- `adr-list` — `docs/MEMORY.md` is usually more useful

```sh
./scripts/adr-new --title "Title here" --label syntax
./scripts/adr-sync-up docs/syntax-003-no-async-try-catch.md
./scripts/adr-index
```

All scripts accept `--help`.

### Workflow — ADR first, always

The source of truth flows: **ADR → MEMORY.md → SKILL.md**. Never skip to SKILL.md.

**Adding a new rule:**
1. `adr-new --title "..." --label syntax` — creates GitHub issue + local file
2. Edit the local file — add frontmatter, Before/After examples
3. `adr-sync-up <file>` — push to GitHub
4. `adr-index` — regenerate `docs/MEMORY.md` and `docs/README.md`
5. Update `SKILL.md` if the rule belongs in the dense reference

**Updating an existing rule:**
1. Edit the local ADR file
2. `adr-sync-up <file>`
3. `adr-index`
4. Update `SKILL.md` if affected

Frontmatter is local-only metadata — preserved by sync-down, stripped by sync-up.
