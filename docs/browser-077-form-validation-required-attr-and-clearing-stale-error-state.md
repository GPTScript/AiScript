---
name: Form validation — required + clear stale state
description: Use required attr for mandatory inputs — clear custom validation errors at the top of each submit handler
type: browser
issue: 77
---

# Form validation — required attr and clearing stale error state

## Use `required` on all mandatory inputs

ALWAYS add `required` to inputs the user must fill. The browser enforces this before any JS runs — free validation, correct `aria-required`, no extra code:

```html
<input type="tel" name="phone" required>
<input type="text" name="otp" inputmode="numeric" maxlength="6" required>
```

When NOT to use `required`:
- Optional fields (billing name, ZIP when not validated server-side)
- Conditionally shown fields — add/remove `required` when the field is shown/hidden

## Clear stale error state before re-submitting

ALWAYS clear custom validation state at the top of the submit handler — otherwise stale errors persist after the user corrects their input:

Before:
```js
// ❌ stale error from previous attempt still visible
App.submit = async function(event) {
   currentEvent = event;
   let article = event.target.closest("article");
   let $phone = $(`[name="phone"]`, article);
   let phone = $phone.value.trim();
   // ...
};
```

After:
```js
// ✅ clear previous error before doing anything
App.submit = async function(event) {
   currentEvent = event;
   let article = event.target.closest("article");
   let $result = $(`[role="alert"]`, article);
   $result.hidden = true;

   let $phone = $(`[name="phone"]`, article);
   let phone = $phone.value.trim();
   // ...
};
```

See also: #76 (alert visibility with hidden attr), #80 (global rejection handler).
