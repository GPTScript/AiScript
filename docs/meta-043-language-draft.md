---
name: Language Draft
description: Index — split into #53-#60. Retains guiding principles and open questions.
type: meta
issue: 43
---

# Language Draft

This issue has been split into focused ADRs. See individual issues for details.

## Open Questions

- Is it possible to eliminate semicolons without creating opportunities for obscure errors?
- Is it possible to eliminate either try/catch or .catch().then()? \
  (probably not since you can't unwind an async stack)

## Guiding Principles

- readability first
- everything is an interface
- maximize tool-assisted coding

Language Principles
- smaller language, larger standard library
- environment dictates use case
   - single-core Browser with mostly-memcopy workers (<https://brave.com/>)
   - single-core servers that scale horizontally (<https://bun.sh/>)
   - low-latency document-processing systems (<https://wintercg.org/>)
   - low-hertz microcontrollers (<https://bellard.org/quickjs/>)

Syntax Principles
- performance over cool functional and CS concepts \
   (no prototypes, no inheritance, no chaining, no reduce)
- minimize human brain parser complexity \
   (at the expense of expressiveness and the tax of verbosity)
- minimize machine parser complexity (hopefully for all benefits)

## Split Issues

- #53 Type system: duck typing, type drafting, and narrowing
- #54 Function rules: naming, chaining, async, void, and special functions
- #55 Variable declarations: var, shadowing, and constants
- #56 Expression types, capture rules, and accessor chaining
- #57 String and template literal rules
- #58 Number types: NaturalNumber, Integer, BigInt, Float
- #59 Macro system: arrow-to-function, class-to-factory
- #60 Keywords, reserved words, operators, and syntax characters
