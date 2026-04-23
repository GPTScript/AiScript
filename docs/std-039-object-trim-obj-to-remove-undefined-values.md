---
name: Object._trim
description: Return new object with all undefined properties removed — useful for APIs and serialization
type: std
issue: 39
---

# `Object._trim(obj)` to remove `undefined` values

```js
var x = {
  foo: undefined,
  bar: undefined,
  baz: undefined,
  qux: 'quux',
};

var y = Object._trim(x);
// { qux: 'quux' }
```

## Rationalé

Depending on how the rest of the language is implemented, this may not be necessary.

However, often times you'll want and expect undefined values to be ignored, but instead they get stringified or cause an error, such as with:
- `new URLSearchParams({ foo: undefined, bar: 'baz' })` // `foo=undefined&bar=baz`
- `db.query({ id: undefined, username: 'coolaj86' })`

## Considerations

This has to be implemented with care to keep type safety and to not break JIT optimizations.

For example:
- `delete` may convert an optimized struct instance into an unoptimized key-value map
- `JSON.stringify` will convert `Date`s to strings

### Option A

```js
Object._trim = function (obj) {
    let copied = {};
    for (let k in obj) {
        if ('undefined' !== typeof obj[k]) {
            copied[k] = obj[k];
        }
    }
    return copied;
}
```

### Option B

```js
Object._trim = function (obj) {
    for (let k in obj) {
        if ('undefined' === typeof obj[k]) {
            delete obj[k];
        }
    }
    return obj;
}
```
