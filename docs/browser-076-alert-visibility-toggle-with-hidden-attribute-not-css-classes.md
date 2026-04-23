---
name: Alert visibility — hidden attribute
description: Toggle role="alert" elements with the hidden attribute and data-variant — no wrapper divs or custom CSS classes
type: browser
issue: 76
---

# Alert visibility — toggle with hidden attribute, not CSS classes

When using classless / semantic CSS (e.g. [oat.ink](https://oat.ink)), `role="alert"` elements are styled by the browser and CSS framework based on their attributes — no custom classes needed.

Toggle visibility with the `hidden` attribute. Use `data-variant` for success/error styling:

```html
<div role="alert" hidden></div>
```

Before:
```js
// ❌ custom CSS class for visibility
el.classList.add("alert-visible");
el.classList.remove("alert-visible");
el.className = ok ? "alert-success" : "alert-error";
```

After:
```js
// ✅ hidden attr + data-variant — works with semantic CSS
let variant = "error";
if (ok) {
   variant = "success";
}
el.dataset.variant = variant;
el.hidden = false;
```

```js
// hide
el.hidden = true;
```

This pattern works with any classless CSS framework that styles `[role="alert"]` and `[data-variant]` selectors.
