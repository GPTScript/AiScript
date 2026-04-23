---
name: Deliberate constraints define craft
description: AjScript exists because "use all of JavaScript" is not a craft — choosing a curated subset and using it intentionally is
type: meta
issue: 68
---

# Deliberate constraints define craft

> "The constraint of the medium defines the Art. 'Anything goes' is _not_ a workable constraint." — [Axiom 14](#28)

"Create artwork" is not an assignment — there's no medium. "Create artwork from trash" is — the constraint to trash means you're probably working with metal, plastic, or glass, and that constraint is what makes the result interesting.

The same applies to code. If you use every feature of a language at will, you have no craft. Choosing which features to use — and which to refuse — is what defines a skillful codebase.

AjScript is this principle applied to JavaScript: a curated subset where each excluded feature (classes, ternaries, single quotes, `++`, loose equality) is a deliberate constraint that makes the remaining code more consistent and analyzable.

See also: #35 (language goals — intersection of languages, not union), #28 Axiom 0 (limit usefulness — RISC principle).

## Every AjScript rule is a constraint that defines the craft

| Constraint | What it forces |
|-----------|---------------|
| No `else` (#5) | Early returns, flat control flow |
| No ternary (#37) | Named variables for conditional values |
| No `++` (#60) | Explicit `n = n + 1` |
| No single quotes (#57) | Backtick templates everywhere |
| No `class` (#59) | Factory functions with explicit state |
| One operation per line (#15) | Each line does one thing |
