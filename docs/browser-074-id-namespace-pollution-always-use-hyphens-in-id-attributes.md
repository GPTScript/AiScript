---
name: ID namespace pollution — use hyphens
description: Avoid id attributes where possible — when unavoidable, always include a hyphen so the name can't collide with JS identifiers on window
type: browser
issue: 74
---

# ID namespace pollution — always use hyphens in id attributes

`id` attributes become properties on `window`. `id="cardnumber"` silently creates `window.cardnumber`, which can shadow variables.

## Avoid IDs where possible

`name`, `data-*`, and contextual selectors (see #72) cover most use cases. Reserve `id` for cases that require it: `<label for="...">`, `<datalist>`, `aria-labelledby`, `aria-describedby`.

## When an ID is unavoidable, always include a hyphen

A hyphen makes the name an invalid JS identifier — `window['card-number']` exists but can't be accessed as `window.cardnumber`:

Before:
```html
<!-- ❌ window.cardnumber — pollutes global scope -->
<input id="cardnumber" type="text">
```

After:
```html
<!-- ✅ window['card-number'] is not a valid JS identifier — safe -->
<label for="card-number">Card number</label>
<input id="card-number" type="text">
```
