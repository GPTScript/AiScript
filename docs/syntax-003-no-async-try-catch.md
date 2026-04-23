---
name: No async try/catch
description: Use .catch() for async errors, try/catch only for short sync parsing blocks
type: syntax
issue: 3
---

# NO async try/catch

# Sync

try/catch is for parsers where you don't want to catch every possible little error, but the error can be handled in a particular way.

It should be no more than 6-10 lines long:

```js
let data;
try {
  data = JSON.parse(json)
} catch(e) {
  data = {};
}
```

DO NOT execute many instructions in a `try/catch` block. Encapsulate things that need to be `try`d in a function.

# Async

Don't use `try/catch`. Async functions are promises. Use `.catch()`.

```js
await doStuff().catch(function (e) {
  throw new Error("oversimplified explanation", { cause: e });
});
```

```js
let data = await doStuff().catch(function (e) {
  if ('NOT_FOUND' !== e.code) {
    throw e;
  }
  return {};
});
```

See also: #28 Axioms 5 (let errors bubble — correct or classify, don't catch) and 10 (don't trade one pyramid of doom for another).
