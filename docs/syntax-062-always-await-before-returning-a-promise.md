---
name: Always await before returning
description: Never return an un-awaited promise — omitting await hides bugs when you later add logic before the return
type: syntax
issue: 62
---

# Always await before returning

> "Return await, or await without return" — [Axiom 4](#28)

Omitting `await` looks harmless, but breaks when you refactor to add logic before the return.

See also: #29 (no await chaining), #3 (no async try/catch).

## ALWAYS use `return await` when returning an async result

Before:
```js
return fetchResponse.json()

// later, refactored:
var data = fetchResponse.json()
data.foo = "foo" // BUG: data is a Promise, not the resolved value
return data
```

After:
```js
return await fetchResponse.json()

// later, refactored:
var data = await fetchResponse.json()
data.foo = "foo"
return data
```
