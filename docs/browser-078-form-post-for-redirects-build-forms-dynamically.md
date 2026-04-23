---
name: Form POST for redirects
description: Use semantic hidden forms in markup for POST-then-redirect flows — JS populates values and submits, only build dynamically when the form can't exist until runtime
type: browser
issue: 78
---

# Form POST for redirects — semantic hidden forms

When you need a POST that results in a page redirect (not an API call), prefer a semantic form in the markup with `hidden`. JS populates values and calls `form.submit()`.

## Default: semantic form in markup

Before:
```html
<!-- ❌ style="display:none", id without hyphen, no onsubmit handler -->
<form id="redirectForm" method="POST" action="/checkout" style="display:none">
  <input type="hidden" name="token" value="">
</form>
```

After:
```html
<!-- ✅ semantic, hidden, wired to handler, data-* for runtime values -->
<form name="checkout-form" data-id="abc123" method="POST" action="/checkout"
      onsubmit="App.Checkout.submit(window.event, this.dataset.id)" hidden>
   <input type="hidden" name="token">
</form>
```

```js
App.Checkout.submit = async function(event, id) {
   currentEvent = event;
   event.preventDefault();

   let form = event.target;
   let tokenInput = $(`[name="token"]`, form);
   tokenInput.value = await getToken(id);
   form.submit();
};
```

## Exception: dynamic forms for runtime-only targets

Only build forms in JS when the form literally cannot exist until runtime — e.g. a third-party callback hands you a URL and token that the server determined:

```js
function postRedirect(action, fields) {
   let form = document.createElement("form");
   form.method = "POST";
   form.action = action;
   form.hidden = true;
   document.body.appendChild(form);

   for (let field of fields) {
      let input = document.createElement("input");
      input.type = "hidden";
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
   }

   form.submit();
}
```

This is rare. If you know the action and fields at page-render time, use the semantic form.
