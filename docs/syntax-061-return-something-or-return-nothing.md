---
name: Return values must be meaningful
description: Every return must convey meaning to the caller — use bare return to exit, never return a discarded value
type: syntax
issue: 61
---

# Return values must be meaningful

> "Return something, or return nothing" — [Axiom 3](#28)

A `return` either makes a result available to the caller, or exits early with no value. Never use `return` as a shortcut that discards a value.

See also: #5 (minimize else — early returns), #54 (function rules — void for side effects).

## ALWAYS use bare `return` when the value is not used by the caller

Before:
```js
if (x) {
   return res.json(x);
}
```

After:
```js
if (x) {
   res.json(x);
   return;
}
```

## ALWAYS await side-effect-only async calls instead of returning them

Before:
```js
function runJob() {
   return otherWiseUnusedPromisableThing()
}
```

After:
```js
async function runJob() {
   await otherWiseUnusedPromisableThing()
}
```
