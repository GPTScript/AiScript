---
name: One operation per line
description: Each statement performs one distinct operation — no chaining side effects or stacking assignments
type: syntax
issue: 15
---

# One operation per line, more or less

This is for readability.

We don't want lots of symbols and we don't want clearly distinct, different things happening all together.

## Bad Examples

```js
let x = (thing1(), thing2());
```

```js
if (arr.some(function (el) {
  return el.foo;
})) {
  // do stuff
}
```

```js
arr.push(await doStuff());
```

## Good Examples

```js
thing1();

let x = thing2();
```

```js
let hasFoo =  arr.some(function (el) {
  return el.foo;
});

if (hasFoo) {
  // do stuff
}
```

```js
let result = await doStuff();
arr.push(result);
```
