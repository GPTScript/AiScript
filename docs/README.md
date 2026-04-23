# AjScript Reference ADRs

Tooling, ideas, tracking, and undecided proposals. Not directly actionable for writing code.

## general

- [#52](general-052-skill-builder-ajscript-agent-skill.md) — Skill Builder: Tracking issue — checkboxes for each ADR to incorporate into the AjScript agent skill

## ideas

- [#42](ideas-042-alternate-name-ideas.md) — Alternate Name Ideas: Brainstorming language names — not actionable for skill
- [#45](ideas-045-lsp-exploration.md) — LSP Exploration: Reference links to LSP tutorials and implementations — not actionable for skill

## meta

- [#43](meta-043-language-draft.md) — Language Draft: Index — split into #53-#60. Retains guiding principles and open questions.

## syntax

- [#49](syntax-049-onymous-loops-are-required.md) — Named loops required: All loops must have labels (yloop:, xloop:) so break/continue targets are explicit
- [#58](syntax-058-number-types-naturalnumber-integer-bigint-float.md) — Number types: NaturalNumber (1+), BitwiseInteger (0+), Integer (neg), BigInt (1n), Float (1.0) — speculative

## tooling

- [#16](tooling-016-sort-requires-by-type-alphabetically.md) — Sort imports by category: Group imports by type (exports, env, built-in, 1st-party, 3rd-party) then alphabetically within each
- [#17](tooling-017-automatically-convert-all-strings-to-strings.md) — Auto-convert to backtick strings: All strings become backtick templates except require() paths, object keys, and "use strict" (double quotes)
- [#19](tooling-019-autocorrect-no-invocations-or-nesting-in-string-templates.md) — Autocorrect template expressions: Extract function calls and nested templates from template literals into named variables
- [#24](tooling-024-auto-import-dependencies.md) — Auto-import stdlib: Automatically add import for AjScript stdlib when its functions are used (e.g. Promise._sleep)
- [#34](tooling-034-show-unused-exports-within-a-package-static-tree-shaking.md) — Unused export warnings: Warn on exported functions never imported anywhere in the package — static tree-shaking for apps
- [#38](tooling-038-auto-magic.md) — Auto optional chaining: Automatically insert or remove ?. based on static type analysis — tooling manages it, not the programmer
- [#48](tooling-048-vim-ale-integrations.md) — vim-ale integrations: LSP integration via vim-ale plugin — editor tooling reference
- [#59](tooling-059-macro-system-arrow-to-function-class-to-factory.md) — Macro system: On-save transforms — arrow expressions to function declarations, class statements to factory functions
