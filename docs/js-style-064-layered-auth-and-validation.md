---
name: Layered auth and validation
description: Apply broad checks broadly via middleware, fine checks locally in handlers — don't copy-paste auth into every handler
type: js-style
issue: 64
---

# Layered auth and validation

> "Gatekeepers at the Gates, Doorkeepers at the Doors" — [Axiom 6](#28)

When an important condition can be made more visible and applied more broadly, do that.

See also: #5 (minimize else — early returns make conditions visible).

## ALWAYS use route-scoped middleware for shared auth

Before:
```js
app.get("/api/operators/dashboard", async function (req, res) {
   var user = await Auth.getUser(req);
   if (!user) { return void res.json(401, { error: "login required" }); }
   if (!user.isOperator) { return void res.json(403, { error: "forbidden" }); }
   // ... handler
});

app.get("/api/operators/reports", async function (req, res) {
   var user = await Auth.getUser(req);
   if (!user) { return void res.json(401, { error: "login required" }); }
   if (!user.isOperator) { return void res.json(403, { error: "forbidden" }); }
   // ... handler
});
```

After:
```js
app.use("/api/users/", Auth.requireLogin);
app.use("/api/operators/", Auth.requireOperator);
app.use("/api/admins/", Auth.requireTenantAdmin);
app.use("/api/users/share/", Auth.requireScope("can-share"));

app.get("/api/operators/dashboard", async function (req, res) {
   // ... handler only
});
```
