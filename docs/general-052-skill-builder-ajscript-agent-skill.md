---
name: Skill Builder
description: Tracking issue — checkboxes for each ADR to incorporate into the AjScript agent skill
type: meta
issue: 52
---

# Skill Builder: AjScript Agent Skill

# AjScript Agent Skill Builder

Track progress building an agent skill that can write correct AjScript code.
Each checkbox maps to an ADR that must be incorporated into the skill.

## Status Legend

- [ ] = not yet incorporated
- [x] = incorporated into skill

---

## Axioms & Goals (meta / philosophy)

- [ ] #28 Axioms of AJ (meta: each axiom is a design principle)
  - [ ] 0: Limit usefulness (RISC principle)
  - [ ] 3: return something, or return nothing
  - [ ] 4: return await, or await without return
  - [ ] 5: let errors bubble (correct, classify, don't catch)
  - [ ] remaining axioms (1,2,6-16) — review for skill relevance
- [ ] #35 Language Goals (static analysis, write-time tooling, subset of JS)
- [ ] #33 ISL-R Design Pattern

## Syntax Rules

- [ ] #1 const & let (`var` for variables, `const` only for true constants)
- [ ] #3 NO async try/catch (use .catch() for async errors)
- [ ] #5 `else` with extreme prejudice (minimize else) — **NEEDS CONTENT**
- [ ] #7 expressions not allowed in template strings
- [ ] #13 package main, init, macros, and side-effects
- [ ] #15 one operation per line
- [ ] #20 no mixing implicit and explicit object structuring
- [ ] #22 require underscore delimiter for numbers over 9000
- [ ] #29 not allowed to await non-async chain
- [ ] #30 strictly & strongly typed (not statically)
- [ ] #31 if statements: single boolean expressions only
- [ ] #36 if statements: boolean and nullish only (not falsey)
- [ ] #37 no ternary shorthand expressions
- [ ] #49 onymous loops required
- [ ] #50 import/export default, NO require
- [ ] #51 3-space tabs

## Language Draft (split from #43)

- [ ] #43 Type System (duck typing, type drafting, concrete types)
- [ ] #43 Functions (camelCase, no chaining, async rules, void, special fns)
- [ ] #43 Variables (var only, shadowing for type change, ALL_CAPS constants)
- [ ] #43 Expressions (types, capture rules, accessor chaining)
- [ ] #43 Strings (template constraints, no invocations)
- [ ] #43 Numbers (NaturalNumber, BitwiseInteger, Integer, BigInt, Float)
- [ ] #43 Macro System (arrow→function, class→factory)
- [ ] #43 Keywords (reserved, special, unused)
- [ ] #43 Syntax Characters (operators, accessors, strings)

## Standard Library

- [ ] #4 escapeHtml
- [ ] #6 Array._removeItem, Array._remove, Array._insertAt
- [ ] #9 Promise._parallel(qty, arr, fn)
- [ ] #10 Promise._forEach (async sequential)
- [ ] #11 RegExp._escape
- [ ] #14 Promise._map (async sequential with results)
- [ ] #18 Crypto._randomString + Crypto._randomDictBaseX
- [ ] #21 Math._randomInt(max)
- [ ] #23 Promise._sleep(ms)
- [ ] #25 process._prompt (CLI input)
- [ ] #26 Identity functions (noop, false, true, invert, self, null)
- [ ] #27 Date._toLocalISOString
- [ ] #39 Object._trim (remove undefined values)
- [ ] #47 Promise._queue (fixed-size ongoing queue)

## Style Rules

- [ ] #2 console: info, error, debug, warn (no log in prod)
- [ ] #8 no meta programming / subscripting on imports/exports
- [ ] #32 all promise-returning functions must be async

## Tooling (for linter/formatter, not skill directly)

- [ ] #16 sort requires by type, alphabetically
- [ ] #17 auto-convert strings to backtick templates
- [ ] #19 autocorrect: extract expressions from templates
- [ ] #24 auto-import dependencies
- [ ] #34 show unused exports (static tree-shaking)
- [ ] #38 auto-magic `?.`

## Needs Triage

- [ ] #5 `else` with extreme prejudice — only a YouTube link, needs written ADR
- [ ] #8 no meta programming — overlaps with #43 functions section
- [ ] #12 package structure — assess if distinct from #13
- [ ] #41 JavaScript objects — empty issue, close or flesh out
- [ ] #42 alternate name ideas — not relevant to skill
- [ ] #44 example: type return analysis — fold into #43 type system or #35?
- [ ] #45 LSP exploration — reference links only, not skill relevant
- [ ] #46 test case: transitive conditions — fold into #35 or #43?
- [ ] #48 vim-ale integrations — not skill relevant

---

## Notes

- **#43 Language Draft** is the biggest compound ADR — contains ~9 distinct topics that should eventually become their own issues
- **#28 Axioms** is intentionally a meta-issue; axioms with detailed commentary (0, 3, 4, 5) may warrant their own ADRs
- **Tooling ADRs** (#16-19, #24, #34, #38) define formatter/linter behavior, not code-writing rules — include in skill as "what the tools will fix" context
- **#5 and #41** need content before they can be incorporated
