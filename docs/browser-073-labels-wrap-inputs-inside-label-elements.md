---
name: Labels — wrap inputs
description: Wrap inputs inside label elements for full click-target coverage — for/id only when nesting is impossible
type: browser
issue: 73
---

# Labels — wrap inputs inside label elements

MUST: Wrap the input inside `<label>`. The entire label text becomes a click target that focuses the input — no `for`/`id` pairing needed.

Before:
```html
<!-- ❌ hit target = only the label text pixels; easy to miss on mobile -->
<label for="card-number">Card number</label>
<input id="card-number" type="text">
```

After:
```html
<!-- ✅ entire label text is the hit target; no id required -->
<label>
  Card number
  <input name="card-number" type="text" autocomplete="cc-number">
</label>
```

`for`/`id` is only required when label and input cannot be nested (e.g. label in a table header, input in a data cell). That layout is rare — almost always you can wrap.

See also: #74 (when IDs are unavoidable, use hyphens).
