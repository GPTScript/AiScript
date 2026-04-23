---
name: Auto-import stdlib
description: Automatically add import for AjScript stdlib when its functions are used (e.g. Promise._sleep)
type: tooling
issue: 24
---

# Auto-import dependencies

If the tooling sees that you're using any of the AjScript std library, such as `Promise._sleep`, it should be imported automatically:

```diff
  "use strict";
+ require('ajscript');

  let n = Math._randomInt(0, 100);
  console.log(n);
```
