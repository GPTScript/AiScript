---
name: No ternary expressions
description: No ternary operator — use if statements and named variables for conditional logic
type: syntax
issue: 37
---

# No ternary shorthand expressions

This rule comes from pretty much all decent languages (Go, Zig, Python).

# ❌ Bad

```js
let a = b ? c : d ? : e;
```

# ✅ Good

```js
// assign the fallback value
let a = e;
if (b) {
  if (c) {
    // update if the right conditions are met
    a = d;
  }
}
```

## Rationalé

Ternaries are the devil's playground.

> Readability counts.
