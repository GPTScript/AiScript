# AGENTS.md

This file provides guidance to Ai Agents when working with code in this repository.

## What This Repo Is

AjScript — a minimal, strictly & strongly-typed language for Browsers and Bun.
Design decisions are tracked as ADRs (Architecture Decision Records) in `docs/`,
synced 1:1 with GitHub issues on `GPTScript/AiScript`.

## ADR Management

ADR files live in `docs/` with the naming convention `{label}-{NNN}-{description}.md`.
Labels: `syntax`, `std`, `tooling`, `js-style`, `general` (default for unlabeled issues).
Each file maps to a single GitHub issue by its zero-padded number (e.g. `syntax-003-no-async-try-catch.md` → issue #3).

### Scripts

```sh
# Pull all open GitHub issues into local ADR files (includes comments)
./scripts/adr-sync-down

# Pull a single issue
./scripts/adr-sync-down --issue 43

# Push local edits back to the GitHub issue (body + title, strips Comments section)
./scripts/adr-sync-up docs/syntax-003-no-async-try-catch.md

# Create a new ADR (creates GitHub issue + local file)
./scripts/adr-new --title "Title here" --label syntax

# List local ADRs as TSV, optionally filtered by label
./scripts/adr-list
./scripts/adr-list --label std
```

All scripts accept `--dry-run` (except `adr-list`) and `--help`.

### Workflow

1. `adr-sync-down` to get latest from GitHub
2. Edit the local markdown file
3. `adr-sync-up <file>` to push changes back
4. For new decisions, use `adr-new` which creates both sides

When editing ADRs locally, the `## Comments` section at the bottom is stripped on sync-up — only the heading and body above `---` are pushed to the issue.
