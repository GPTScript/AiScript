---
name: Minimize else
description: Prefer early returns, switch, and extracting branches into functions — else is discouraged, not banned, but the exception proves the rule
type: syntax
issue: 5
---

# `else` with extreme prejudice

`else` is discouraged, not banned — the exception proves the rule (#69). But the default is no `else`.

The happy path should run down the left edge of the function. Edge cases and error handling indent in, get resolved, and return — then you're back to the happy path. This is the "line-of-sight" principle: glance down the left margin and you see what the function does.

Prefer early returns, `switch` for multi-branch, and extracting large branches into functions.
Flip the condition: instead of `if (ok)` with the happy path indented, write `if (!ok)` and return early.

See also: Matt Ryer, [Things in Go I Never Use](https://youtu.be/5DVV36uqQ4E?t=668) (11:08)

- **Early return**: guard clause resolves the condition and moves on.
  ALWAYS use early return instead of if/else nesting.

Before:
```js
function getUser(id) {
   if (id) {
      var user = db.find(id);
      if (user) {
         return user;
      } else {
         throw new Error("not found");
      }
   } else {
      throw new Error("id required");
   }
}
```
After:
```js
function getUser(id) {
   if (!id) {
      throw new Error("id required");
   }

   var user = db.find(id);
   if (!user) {
      throw new Error("not found");
   }

   return user;
}
```

- **Extract to function**: when both branches have real work, pull them out.
  ALWAYS extract when an else block is more than a few lines.

Before:
```js
function processOrder(order) {
   if (order.isPaid) {
      var invoice = generateInvoice(order);
      sendEmail(order.email, invoice);
      return { success: true };
   } else {
      scheduleRetry(order.id);
      notifySupport(order.id);
      return { success: false };
   }
}
```
After:
```js
function processOrder(order) {
   if (!order.isPaid) {
      return handleUnpaidOrder(order);
   }

   return fulfillOrder(order);
}
```

See also: #28 Axioms 11 (top-to-bottom over left-to-right) and 12 (optimize for the happy path).
