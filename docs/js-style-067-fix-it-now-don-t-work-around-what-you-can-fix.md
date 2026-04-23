---
name: Fix it now, don't work around it
description: When you encounter a fixable problem, fix it — don't add a workaround that you and others will repeat forever
type: js-style
issue: 67
---

# Fix it now, don't work around it

> "When it is broken, it is the right time to fix it" — [Axiom 13](#28)

The faucet is leaky unless you fidget with it, so you fidget every time — but grabbing the wrench and tightening it takes about the same effort and actually solves it. Code workarounds are the same: they cost almost as much as the fix but solve nothing, and every person after you pays the same cost again.

See also: #66 (when to abstract — but this is about fixing, not abstracting).

## ALWAYS fix the root cause instead of adding a workaround

Before:
```js
var ts = Timestamp.parse(row.created_at);
// Timestamp.parse returns seconds, not ms
var ms = ts * 1000;
var date = new Date(ms);
```

After:
```js
// fix Timestamp.parse to return ms
var ms = Timestamp.parse(row.created_at);
var date = new Date(ms);
```

## ALWAYS fix the function instead of patching every call site

Before:
```js
var users = await Users.list();
// Users.list doesn't sort, so every caller does
users.sort(function (a, b) {
   return a.name.localeCompare(b.name);
});
```

After:
```js
// add sortBy option to Users.list
var users = await Users.list({ sortBy: "name" });
```
