---
name: ES modules only
description: Use import/export syntax, not CommonJS require() — supported everywhere now
type: syntax
issue: 50
---

# `import` and `export default`, NO `require`

The target for AiScript is Evergreen Browsers, Node, Bun, and Deno.

Until this year, `import` and `export` were not fully cross-supported in those environments.

BUT, now they are! And so, we will NOT use the previously-universal `require` (works in a browser just fine, believe it or not).

See:
- https://git.rootprojects.org/root/walk.js/issues/1#issuecomment-9821
