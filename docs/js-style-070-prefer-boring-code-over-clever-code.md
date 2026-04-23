---
name: Prefer boring code over clever code
description: If a solution feels clever, that's a warning — choose the obvious approach that any reader can follow without thinking
type: js-style
issue: 70
---

# Prefer boring code over clever code

> "If it sounds cool, DON'T DO IT" — [Axiom 16](#28)

"Cool" is, by definition, unintuitive or surprising — something you have to be in-the-know to appreciate. If something sounds cool, that's a signal it's probably an interesting curiosity, not a helpful tool.

Counter-rule (#69): practicality beats purity — if the boring version is genuinely worse, the clever version may be the right call. But the default is boring.

See also: #65 (no thin wrappers), #63 (no nested parens).

## "Cool" features to avoid in AjScript

These are things a senior Go engineer would avoid in JavaScript — clever syntax that requires insider knowledge to read:

- **Arrow functions** — implicit return, no `this`, multiple syntax forms
- **Map / WeakMap / Set** — surprising syntax and semantics in JS, not much gain
- **Chain-builder chaining** — `query.where().select().limit().exec()`
- **Destructuring with renames** — `var { data: users } = response`
- **Proxy / Reflect** — magical behavior at a distance, impossible to trace
- **Getters and setters** — `user.name` looks like a read but runs code
- **Tagged template literals** — `html\`<div>${x}</div>\``
- **Generator functions / yield** — invisible state machine
- **Bitwise math tricks** — `~~num` instead of `Math.floor(num)`
- **Comma operator** — `(a++, b++)` disguises two operations as one
- **Array destructuring for swaps** — `[a, b] = [b, a]`

## ALWAYS prefer the obvious version over the compact one

Before:
```js
var type = ({ string: 1, number: 2, boolean: 3 })[typeof val] || 0;
```

After:
```js
var type = 0;
switch (typeof val) {
   case "string":
      type = 1;
      break;
   case "number":
      type = 2;
      break;
   case "boolean":
      type = 3;
      break;
}
```

## ALWAYS use a loop when reduce obscures the intent

Before:
```js
var total = items.reduce(function (sum, item) {
   return sum + item.price * (item.taxable ? 1 + taxRate : 1);
}, 0);
```

After:
```js
var total = 0;
for (var item of items) {
   var price = item.price;
   if (item.taxable) {
      price = price + (price * taxRate);
   }
   total = total + price;
}
```
