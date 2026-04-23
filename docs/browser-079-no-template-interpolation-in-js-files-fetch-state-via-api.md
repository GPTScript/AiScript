---
name: No template interpolation in JS files
description: JS files must contain no server-side template syntax — fetch initial state via API, or use a tiny inline script block for unavoidable config
type: browser
issue: 79
---

# No template interpolation in JS files — fetch state via API

MUST: JS files must contain no server-side template syntax (`{{.Foo}}`, `<%= %>`, `${serverVar}`, etc.). Template syntax makes JS files unlintable, unformattable, and uncacheable.

## Fetch initial state via API

Before:
```js
// ❌ in dashboard.js — template syntax contaminates the file
let verified = {{.Verified}};
let username = "{{.Username}}";
```

After:
```js
// ✅ in dashboard.js — pure JS, lintable, formattable, cacheable
async function initDashboard() {
   let resp = await fetch("/api/session");
   if (!resp.ok) {
      showLogin();
      return;
   }
   let data = await resp.json();
   showDashboard(data.username);
}
void initDashboard();
```

## Tiny inline script for unavoidable config

When server-side init values are truly unavoidable (CSRF tokens, feature flags baked into the page), isolate them in a single inline `<script>` block in the HTML template — never in the `.js` file:

```html
<!-- in dashboard.html (template) -->
<script>var __cfg = {csrfToken: "{{.CSRFToken}}"};</script>
<script type="module" src="/dashboard.js"></script>
```

```js
// in dashboard.js (pure JS)
var csrfToken = window.__cfg.csrfToken;
```

See also: #13 (side effects in main/init only), #71 (no top-level await in libraries).
