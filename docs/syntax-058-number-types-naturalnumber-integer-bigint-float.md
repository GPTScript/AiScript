---
name: Number types
description: NaturalNumber (1+), BitwiseInteger (0+), Integer (neg), BigInt (1n), Float (1.0) — speculative
type: syntax
issue: 58
---

# Number types: NaturalNumber, Integer, BigInt, Float

Split from #43 Language Draft — Numbers section.

Some rough, not-well-thought-out ideas (Re: can division throw):
- 1 - NaturalNumber? (only 1 - Math.MAX_SAFE_NUMBER)
- 0 - BitwiseInteger (can be zero, but not negative, up to 2**32)
- -1 - Integer (can be 0, or negative)
- 1n - BigInt
- 1.0 - Float

See also #22 (underscore delimiters for numbers over 9000).
