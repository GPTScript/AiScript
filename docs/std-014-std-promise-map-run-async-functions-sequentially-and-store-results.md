---
name: Promise._map
description: Run async functions one at a time, return ordered results array — Promise._map(arr, fn)
type: std
issue: 14
---

# [std] Promise._map: run async functions sequentially and store results

- [`Promise._sleep(n)`](https://github.com/coolaj86/AJScript/issues/23)
- **`Proimse._map(arr, fn)`**
- [`Proimse._parallel(n, arr, fn)`](https://github.com/coolaj86/AJScript/issues/9)

Run `fn` on each element of `arr`, one at a time, and give back a sequentially ordered list of results.

```js
// do something like `throw new Error('break');` to stop
Promise._map = async function (arr, fn) {
    let results = [];
    await arr.reduce(async function (promise, el, i) {
        await promise;
        let result = await fn(el, i, arr);
        results.push(result);
    }, Promise.resolve());
    return results;
};
```
