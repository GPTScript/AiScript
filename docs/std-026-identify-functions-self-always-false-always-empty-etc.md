---
name: Identity functions
description: Function._noop, Boolean._false/_true, Object._self, Object._null — functional programming primitives
type: std
issue: 26
---

# Identify functions - self, always false, always empty, etc

- `Function._noop` does nothing (return is not defined)
- `String._empty` returns an empty string
- `Boolean._false` always returns `false`
- `Boolean._true` always returns `true`
- `Boolean._invert` always returns the opposite
- `Object._self` always returns the input \
   (an identity function like `Object` itself, but for all types)
- `Object._null` always returns null

There are other functions that make _sense_ to include, but that I don't think I've actually found use for:

- `Number._zero`
- Is `Boolean._false` redundant with `Function._noop`?

```js
Function._noop = function () {};
Boolean._false = function () { return false; };
Boolean._true = function () { return true; };
Object._self = function (val) { return val; };
```
