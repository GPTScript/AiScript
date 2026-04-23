---
name: DOM queries — $/$$ AJQuery
description: Use $/$$ helpers with optional parent scope instead of getElementById — prefer name, data-*, and contextual selectors over IDs
type: browser
issue: 72
---

# DOM queries — $/$$ AJQuery pattern with scoped parents

NEVER use `getElementById`. Always use `$`/`$$` helpers with an optional parent for scoped queries.

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

## Scoped queries via contextual parent

ALWAYS scope queries to the nearest relevant ancestor — not the whole document:

Before:
```js
// ❌ queries the entire document
let phone = document.getElementById("phone").value;
```

After:
```js
// ✅ scoped to the nearest article
let article = event.target.closest("article");
let $phone = $(`[name="phone"]`, article);
let phone = $phone.value.trim();
let alerts = $$(`[role="alert"]`, article);
```

## Prefer name, data-*, and contextual selectors over IDs

Before:
```js
// ❌ IDs pollute window namespace, require global uniqueness
let $phone = document.getElementById("phone");
let phone = $phone.value;
```

After:
```js
// ✅ name attrs, data attrs, scoped queries
let $phone = $(`[name="phone"]`, article);
let phone = $phone.value;
let $token = $(`[data-id="card-token"]`);
```

See also: #74 (ID namespace pollution).
