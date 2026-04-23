---
name: ESM exports with CJS compat
description: Export default namespace + reduplicate named exports for CJS — no top-level await in libraries
type: syntax
issue: 71
---

# ESM exports with CJS compatibility — no top-level await in libraries

AjScript uses ES modules (`import`/`export`), not CommonJS `require()` (see #50). But libraries published to npm must also work when consumed via CJS.

## Default export + reduplicated named exports

ALWAYS export a namespace object as default, then reduplicate individual methods as named exports for CJS consumers:

Before:
```js
// ❌ only default — CJS consumers can't destructure
export default User;
```

After:
```js
// ✅ both — works with ESM import and CJS require
export default User;
export let create = User.create;
export let get = User.get;
```

## No top-level await in libraries

NEVER use top-level `await` in library code — it breaks CJS/npm compatibility.

Libraries use `create()` (sync factory) + `async init()`, or just `async init()` for true singletons:

Before:
```js
// ❌ top-level await — CJS consumers crash on require()
var db = await Database.connect(url);
export default db;
```

After:
```js
// ✅ sync create, async init — CJS safe
var Db = {};

Db.create = function (opts) {
   let db = { _opts: opts, _pool: null };
   db.init = async function () {
      db._pool = await Database.connect(db._opts.url);
   };
   return db;
};

export default Db;
export let create = Db.create;
```

Top-level `await` is fine in entry points (`main.js`, CLI scripts, `<script type="module">`) — just not in importable library modules.

See also: #50 (ESM only), #8 (no dynamic imports/exports), #13 (side effects in main/init only).
