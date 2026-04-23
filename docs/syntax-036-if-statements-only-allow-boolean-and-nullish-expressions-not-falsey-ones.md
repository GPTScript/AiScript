---
name: No falsey conditionals — truthiness allowed for nullish
description: Use explicit comparisons for numbers/strings (arr.length === 0) — but truthiness checks are fine for nullish values (objects, DOM returns, optional params)
type: syntax
issue: 36
---

# if statements — explicit comparisons for values, truthiness for nullish

This rule is taken from Go. Modern tooling prevents accidental assignment in conditions (`if (x = null)`), so yoda expressions (`0 === x`) are no longer needed — use natural order.

## No falsy checks for numbers and strings

Before:
```js
if (!arr.length) {
   throw new Error("no items in array");
}
```

After:
```js
if (arr.length === 0) {
   throw new Error("no items in array");
}
```

## Truthiness is fine for nullish values

When a variable can only be nullish (null/undefined) or an object/function, there is no risk of `0` or `""` confusion — truthiness checks are safe and readable:

```js
// ✅ nullish-or-object — truthiness is safe
if (!user) {
   throw new Error("not found");
}

// ✅ DOM return — always Element | null
let article = event.target.closest("article");
if (!article) {
   console.error("unhandled:", reason);
   return;
}

// ✅ module-scope variable initialized to null
var currentEvent = null;
// ...
if (!currentEvent) {
   console.error("unhandled:", reason);
   return;
}
```

Use `=== null` only when you need to distinguish null from undefined explicitly.

## Rationale

It's more difficult to do proper checking of type-constrained conditions if `0` and `""` are considered valid boolean expressions. But nullish values (null/undefined) don't have this ambiguity — a variable that holds either an object or null/undefined is safe to check with `!x`.

```js
/** @type {Number|String} foo */

if (!foo) {
   // ❌ bad — 0 and "" are valid values, not missing
}

/** @type {User|null} user */

if (!user) {
   // ✅ fine — null is the only falsy possibility
}
```
