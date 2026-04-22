# if statements only allow boolean and nullish expressions (not falsey ones)

This rule is taken from Go.

## ❌ Bad Example

```js
if (!arr.length) {
    throw new Error("no items in array");
}
```

## ✅ Good Example

```js
if (0 === arr.length) {
    throw new Error("no items in array");
}
```

## Rationale

It's more difficult to do proper checking of type-constrained conditions if `0` and `""` are considered valid boolean expressions.

For example:

```js
/** @type {Number|String} foo */

if (!foo) {
  // if we constrain the boolean expression then we can detect
  // that there's a conflict between the code and the type:
  // `foo` is not optional according to the type, but perhaps the user thinks it can be
}
```
