---
name: Variable declarations
description: var for module-scope, let for function/block-scope, shadow with let re-declaration to change types, ALL_CAPS for constants
type: syntax
issue: 55
---

# Variable declarations: var, let, shadowing, and constants

Split from #43 Language Draft — Variables section.

- `var` for module-scope / globals
- `let` for function- and block-scope (prefer immutable references)
- Shadowing with a new `let` to change types — never reassign to a different type
  ```js
  // ❌ cannot change types by reassignment
  let age = input.value;
  age = parseInt(age, 10);
  ```
  ```js
  // ✅ shadow with new let
  let age = input.value;
  let age = parseInt(age, 10);
  ```
- Constants are `ALL_CAPS`
  ```js
  const PI = 3.14;
  ```

See also #1 (var/let/const) and #30 (strict/strong typing).
