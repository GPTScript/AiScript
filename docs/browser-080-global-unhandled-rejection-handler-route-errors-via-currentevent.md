---
name: Global rejection handler — currentEvent routing
description: Set currentEvent at the top of each async handler so the global unhandledrejection listener can route errors to the right UI element
type: browser
issue: 80
---

# Global unhandled rejection handler — route errors via currentEvent

Instead of try/catch in every async handler (see #3), use a single global `unhandledrejection` listener. Each handler sets `currentEvent` so the listener knows which UI element triggered the error.

## Pattern

```js
var currentEvent = null;

App.submit = async function(event) {
   currentEvent = event;
   // ... no try/catch — errors propagate to the global handler
};

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

ALWAYS set `currentEvent = event` as the first line of every async handler. The global handler uses it to find the nearest `article` and display the error in the right `[role="alert"]` element.

See also: #3 (no async try/catch), #76 (alert visibility), #77 (clearing stale error state).
