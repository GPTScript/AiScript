---
name: Promise._sleep
description: Async delay utility for tests, rate-limiting, and CLI — Promise._sleep(ms)
type: std
issue: 23
---

# Promise._sleep(ms)

- **`Promise._sleep(n)`**
- [`Proimse._map(arr, fn)`](https://github.com/coolaj86/AJScript/issues/14)
- [`Proimse._parallel(n, arr, fn)`](https://github.com/coolaj86/AJScript/issues/9)

Another one of those things that just ought to be included.

As simple as it is, it's darn useful for:
- Tests
- CLI output
- Rate-limiting

```js
/**
 * @param {Number} ms
 * @returns {Promise<void>}
 */
Promise._sleep = async function (ms) {
  return await new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};
```
