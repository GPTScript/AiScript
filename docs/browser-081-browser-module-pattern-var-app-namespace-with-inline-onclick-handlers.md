---
name: Browser module pattern — var App + onclick
description: Export a plain App namespace object, expose via window.App, wire events with inline onclick handlers — no addEventListener, no class
type: browser
issue: 81
---

# Browser module pattern — var App namespace with inline onclick handlers

Browser apps export a plain `App` namespace object (not a class). Expose it on `window` for inline `onclick` handlers — no `addEventListener` wiring.

## Pattern

```js
var App = {};
App.Tenants = {};
App.Domains = {};

function $(sel, $parent = document) {
   return $parent.querySelector(sel);
}
function $$(sel, $parent = document) {
   return Array.from($parent.querySelectorAll(sel));
}

App.Tenants.add = async function(event) {
   currentEvent = event;
   // ...
};

App.Tenants.delete = async function(event, id) {
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
<button onclick="App.Tenants.add(event)">Add Tenant</button>
```

## Rules

- `var App = {}` at module scope — not `let`, not `class`
- `window.App = App` in the inline `<script>` — exposes for `onclick`
- Inline `onclick="App.Entity.verb(event)"` — no `addEventListener`
- Group by entity then action: `App.Tenants.add`, not `App.addTenant`
- Declare namespace sub-objects before assigning methods: `App.Tenants = {};`

See also: #65 (namespace objects), #80 (currentEvent in async handlers), #71 (ESM exports with CJS compat).
