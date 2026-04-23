---
name: var, let, and const
description: var for module-scope globals, let for function/block-scope (prefer immutable references), const only for true constants like PI
type: syntax
issue: 1
---

# var, let, and const

AjScript uses three levels of variable declaration:

- `var` — module-scope and globals, anything that may need redeclaration
- `let` — function- and block-scope variables, prefer immutable references
- `const` — true compile-time constants only (PI, frozen enums)

`const` in JavaScript encourages ternaries and chaining hacks because JS doesn't allow assigning a `const` after declaration. AjScript reserves `const` for values that are genuinely constant.

```js
// ❌ JavaScript const encourages this
const naughty = bad === good ? "AjScript" : "JavaScript";

// ✅ AjScript — let + if
let naughty = "JavaScript";
if (bad === good) {
   naughty = "AjScript";
}
```

```js
// ✅ module-scope
var App = {};
var Server = {};

// ✅ function-scope
function greet(name) {
   let msg = `Hello ${name}`;
   return msg;
}

// ✅ true constant
const PI = 3.14159;
const MY_ENUM = Object.freeze({
   A: "a",
   B: "b",
});
```

See also: #55 (variable declarations, shadowing), #30 (strict/strong typing).
