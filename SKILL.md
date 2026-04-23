# AjScript — Agent Skill

AjScript is the intersection of the best of Go and Zig, applied to Node and browser runtimes. It is a strict, minimal subset of JavaScript.

**Approach AjScript as a Senior Golang Engineer writing JavaScript.** The philosophies of the Zen of Python, Go Proverbs, and Zen of Zig are the foundation. If it's not listed here, it's not AjScript. When in doubt, write the boring version.

Full ADR index: `docs/MEMORY.md`. Each entry links to a file with detailed examples.

---

## Variables & Constants

- `var` — module-scope, globals, anything that may need redeclaration
- `let` — function- and block-scope, prefer immutable references
- `const` — true compile-time constants only

```js
// module scope
var App = {};
var Server = {};

// function scope
function greet(name) {
   let msg = `Hello ${name}`;
   return msg;
}

// true constants
const PI = 3.14159;
const MY_ENUM = Object.freeze({ A: "a", B: "b" });
```

Shadow with a new `let` to change types — never reassign to a different type:

```js
let raw = input.value;
let num = parseInt(raw, 10);
```

## Indentation

Tab character, displayed at 3-space width. Use literal spaces only when tabs can't be used.

## Strings

Double quotes for all strings. Backtick templates only when interpolation is needed or the string contains double quotes. No single quotes.

```js
// ✅ double quotes — default
let name = "world";

// ✅ backtick — interpolation
let msg = `Hello ${name}`;

// ✅ backtick — string contains double quotes
let sel = `[name="phone"]`;
```

No function calls inside `${}` — only variables and property access:

```js
// ❌
let msg = `Hello ${user.getName()}`;

// ✅
let name = user.getName();
let msg = `Hello ${name}`;
```

## Functions

`function` declarations only. No arrow functions. No generators. camelCase names.

```js
// ❌
const greet = (name) => `Hello ${name}`;

// ✅
function greet(name) {
   return `Hello ${name}`;
}
```

A function call is the **end** of an expression — no chaining after `()`:

```js
// ❌
let len = getItems().length;

// ✅
let items = getItems();
let len = items.length;
```

Return values must be used or `void`ed:

```js
let result = doStuff();  // ✅ captured
void doStuff();          // ✅ discarded explicitly
doStuff();               // ❌ uncaptured
```

## Async

Mark all promise-returning functions `async`. Use `.catch()`, not `try/catch`:

```js
// ❌
try {
   let data = await fetchData();
} catch (e) {
   handleError(e);
}

// ✅
let data = await fetchData().catch(function (e) {
   throw new Error("fetch failed", { cause: e });
});
```

`try/catch` is only for short sync blocks like `JSON.parse`.

Always `return await` — never return a bare promise:

```js
// ❌
return fetchResponse.json();

// ✅
return await fetchResponse.json();
```

Each `await` is its own statement — no chaining after:

```js
// ❌
let name = await getUser().name;

// ✅
let user = await getUser();
let name = user.name;
```

## Control Flow

**`else` is discouraged, not banned** — the exception proves the rule. But the default is early returns:

```js
// ❌ typical
if (user) {
   return user;
} else {
   throw new Error("not found");
}

// ✅ default: early return
if (!user) {
   throw new Error("not found");
}
return user;
```

**No ternary.** Use `if` and named variables:

```js
// ❌
let label = isAdmin ? "admin" : "user";

// ✅
let label = "user";
if (isAdmin) {
   label = "admin";
}
```

**Single boolean per `if`.** Break complex conditions into named variables:

```js
// ❌
if (user && user.age > 18 && user.verified) {}

// ✅
let isEligible = user && user.age > 18 && user.verified;
if (isEligible) {}
```

**No falsy checks for numbers/strings.** Use explicit comparisons — but truthiness is fine for nullish values:

```js
// ❌ number — 0 is a valid value, not "missing"
if (!arr.length) {}

// ✅ explicit comparison
if (arr.length === 0) {}

// ✅ nullish-or-object — truthiness is safe
if (!user) {
   throw new Error("not found");
}
```

## Expressions

One operation per line. All expressions must be captured.

**No nested parentheses** — extract sub-expressions:

```js
// ❌
let n = (2 / (2 + 3)) * 2;

// ✅
let divisor = 2 + 3;
let ratio = 2 / divisor;
let result = ratio * 2;
```

Numbers over 9000 use underscores: `10_000`, `1_000_000`.

Use `===` only (not `==`). No `++`, `--`, `+=`.

```js
// ❌
count++;

// ✅
count = count + 1;
```

## Objects

No mixed shorthand — all explicit or all shorthand:

```js
// ❌
let obj = { name, age: 42 };

// ✅
let obj = { name: name, age: 42 };
// or
let obj = { name, age };
```

## Imports & Exports

ES modules only. Namespace objects, not bare functions:

```js
// ❌
import { createUser, updateUser } from "./user.js";
createUser();

// ✅
import User from "./user.js";
User.create();
```

All imports/exports explicit by name — no dynamic keys or `Object.assign`.

For CJS/npm compatibility, reduplicate named exports:

```js
export default User;
export let create = User.create;
```

No top-level `await` in libraries — breaks CJS/npm compat. Libraries use `create()` (sync) + `async init()`, or just `async init()` for true singletons.

## Loops

`for...of` for iteration. No `.forEach()`. Index only when needed.

```js
// ❌
items.forEach(function (item) {
   process(item);
});

// ✅
for (let item of items) {
   process(item);
}
```

## Return Semantics

`return` either produces a value or is bare. Never return a discarded value:

```js
// ❌
return res.json(data);

// ✅
res.json(data);
return;
```

## Console

`console.info()` for output, `.error()` for errors, `.debug()` for debug, `.warn()` for recoverable. Never `console.log()` in committed code.

## Package Structure

- Side effects in `main()` (CLIs) or `init()` (modules) only
- Top-level code must be statically analyzable
- `function create()` must NOT be async, `async function init()` MUST be async

## Style Principles

- Prefer boring code over clever code (#70)
- Fix root causes, don't add workarounds (#67)
- Tolerate duplication twice, extract on the 3rd time (#66)
- Broad auth in middleware, fine auth in handlers (#64)
- Organize by component, not by category (#33)

---

## Browser UI Patterns

Browser apps use classless / semantic CSS (e.g. [oat.ink](https://oat.ink)) and vanilla JS. These patterns assume `$`/`$$` helpers are defined (see #72).

### DOM queries — $/$$ with scoped parents (#72)

```js
function $(sel, $parent = document) {
   let $child = $parent.querySelector(sel);
   return $child;
}

function $$(sel, $parent = document) {
   let $children = $parent.querySelectorAll(sel);
   let children = Array.from($children);
   return children;
}
```

Scope queries to the nearest ancestor — never the whole document:

```js
let article = event.target.closest("article");
let $phone = $(`[name="phone"]`, article);
let phone = $phone.value.trim();
```

Prefer `name`, `data-*`, and contextual selectors over IDs (#74).

### Module pattern — var App + inline onclick (#81)

```js
var App = {};
App.Tenants = {};

App.Tenants.add = async function(event) {
   currentEvent = event;
   // ...
};

export default App;
```

```html
<script type="module">
  import App from "./app.js";
  window.App = App;
  void App.init();
</script>
<button onclick="App.Tenants.add(event)">Add</button>
```

- `var App = {}` at module scope, `window.App = App` for onclick access
- Group by entity then action: `App.Tenants.add` not `App.addTenant` (#65)
- No `addEventListener` — inline `onclick` with `event` passed through

### Labels — wrap inputs (#73)

```html
<label>
  Card number
  <input name="card-number" type="text" autocomplete="cc-number">
</label>
```

Wrap input inside `<label>` for full click-target coverage. `for`/`id` only when nesting is impossible.

### ID namespace pollution (#74)

Avoid IDs. When unavoidable, always include a hyphen: `id="card-number"` not `id="cardnumber"`.

### DOM text safety (#75)

NEVER `innerHTML` for user/API content. Use `textContent`, `innerText`, or `insertAdjacentText`:

```js
el.textContent = "";
let p = document.createElement("p");
p.innerText = apiData.message;
el.appendChild(p);
```

### Alert visibility — hidden attribute (#76)

Toggle `role="alert"` with `hidden` and `data-variant` — no CSS classes:

```html
<div role="alert" hidden></div>
```

```js
let variant = "error";
if (ok) {
   variant = "success";
}
el.dataset.variant = variant;
el.hidden = false;
```

### Form validation (#77)

- `required` on all mandatory inputs — browser enforces before JS runs
- Clear stale error state at the top of each submit handler:

```js
App.submit = async function(event) {
   currentEvent = event;
   let article = event.target.closest("article");
   let $result = $(`[role="alert"]`, article);
   $result.hidden = true;
   // ...
};
```

### Form POST for redirects (#78)

Prefer semantic hidden forms in markup — JS populates values and submits:

```html
<form name="checkout-form" data-id="abc123" method="POST" action="/checkout"
      onsubmit="App.Checkout.submit(window.event, this.dataset.id)" hidden>
   <input type="hidden" name="token">
</form>
```

Only build forms dynamically when the target URL/fields can't exist until runtime.

### No template interpolation in JS files (#79)

JS files must contain zero server-side template syntax. Fetch state via API, or isolate unavoidable config in a tiny inline `<script>`:

```html
<script>var __cfg = {csrfToken: "{{.CSRFToken}}"};</script>
<script type="module" src="/dashboard.js"></script>
```

### Global rejection handler (#80)

Set `currentEvent` at the top of each async handler. One global `unhandledrejection` listener routes errors to the right UI element:

```js
var currentEvent = null;

window.addEventListener("unhandledrejection", function(e) {
   let reason = String(e.reason);
   if (e.reason instanceof Error) {
      reason = e.reason.message;
   }

   if (!currentEvent) {
      console.error("unhandled:", reason);
      return;
   }

   let article = currentEvent.target.closest("article");
   if (!article) {
      console.error("unhandled:", reason);
      return;
   }

   void setResult(article, reason, "", false);
});
```

---

## Using This Repo to Create Memories

This repo is an indexed collection of AjScript design decisions. To turn ADRs into agent memories:

1. **Load `docs/MEMORY.md`** — the full index of actionable rules, grouped by label
2. **Read individual ADRs** when the index description isn't enough — each file has Before/After examples
3. **Create project memories** from ADRs that are relevant to the project you're working in:
   - The frontmatter `name` and `description` fields are written for agent consumption
   - Use the `description` as the memory's description — it's already optimized for relevance matching
   - The `type` field tells you the category: `syntax` (hard rules), `js-style` (patterns), `std` (stdlib API), `meta` (philosophy)
4. **For syntax rules**, the memory content should be the ALWAYS/NEVER directive with a minimal Before/After example
5. **For stdlib**, the memory content should be the function signature and one-line purpose
6. **Skip `docs/README.md` entries** — those are tooling, ideas, and undecided proposals, not actionable rules

Example memory from an ADR:

```markdown
---
name: AjScript — no else, early returns
description: Eliminate else by using early returns and guard clauses — happy path at left margin
type: project
---

ALWAYS use early return instead of if/else.

Before:
\`\`\`js
if (user) { return user; } else { throw new Error("not found"); }
\`\`\`

After:
\`\`\`js
if (!user) { throw new Error("not found"); }
return user;
\`\`\`

Source: docs/syntax-005-else-with-extreme-prejudice.md
```
