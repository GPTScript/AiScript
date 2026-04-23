---
name: String rules
description: Double quotes for all strings — backtick templates only when interpolation is needed or the string contains double quotes — no single quotes
type: syntax
issue: 57
---

# String and template literal rules

Split from #43 Language Draft — Strings section.

See also #7 (no expressions in template strings) and #17 (auto-convert to backtick strings).

## String quote conventions

- **Double quotes** for all strings by default
- **Backtick templates** only when interpolation is needed (`${var}`) or when the string contains double quotes that would need escaping
- **No single quotes** ever

```js
// ✅ double quotes — default
let name = "world";
let sel = "[name=\"phone\"]";   // escaping needed — use backtick instead

// ✅ backtick — interpolation
let msg = `Hello ${name}`;

// ✅ backtick — string contains double quotes
let sel = `[name="phone"]`;
let html = `<input type="hidden" name="token">`;

// ❌ single quotes
let name = 'world';
```

## No invocations in template interpolation

Templates MUST ONLY contain variables and accessor expressions — no function calls:

Before:
```js
// ❌
let name = me.getName();
let msg = `Hello ${friend[i].name}, I'm ${me.getName()}`;
```

After:
```js
// ✅
let name = me.getName();
let msg = `Hello ${friend[i].name}, I'm ${name}`;
```
