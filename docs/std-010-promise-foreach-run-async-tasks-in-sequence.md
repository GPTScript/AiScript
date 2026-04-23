---
name: Promise._forEach
description: Run async tasks sequentially without collecting results — Promise._forEach(arr, fn)
type: std
issue: 10
---

# Promise._forEach: run async tasks in sequence

This is about the simplest implementation of this, and it works.

```js
// do something like `throw new Error('break');` to stop
Promise._forEach = async function (arr, fn) {
    await arr.reduce(async function (promise, el, i) {
        await promise;
        await fn(el, i, arr);
    }, Promise.resolve());
};
```

---

## Comments

### coolaj86 (2022-02-23)

- https://youtu.be/X85QdHe1tDw?t=410
- https://gist.github.com/coolaj86/4af3a41b14229f1b24c16c8f95fbe181
