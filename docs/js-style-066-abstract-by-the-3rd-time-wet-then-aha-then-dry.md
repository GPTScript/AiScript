---
name: When to abstract (WET/AHA/DRY)
description: Tolerate duplication until the 3rd occurrence — don't abstract on first sight, but don't avoid the pattern forever either
type: js-style
issue: 66
---

# When to abstract — WET then AHA then DRY

> "But by the 3rd or 4th time, you should know what it is" — [Axiom 9](#28)

- **WET** — Write Everything Twice. First duplication is fine.
- **AHA** — Avoid Hasty Abstractions. Don't generalize until you see the real pattern.
- **DRY** — Don't Repeat Yourself. By the 3rd time, extract it.

See also: #65 (no thin wrappers — when you do abstract, make it deep).

## First time: just write it

```js
var user = await Users.get(userId);
if (!user) {
   throw new Error("user not found");
}
```

## Second time: note the similarity, keep it inline

```js
var order = await Orders.get(orderId);
if (!order) {
   throw new Error("order not found");
}
```

## Third time: the pattern is real — extract it

```js
async function mustGet(Resource, id) {
   var item = await Resource.get(id);
   if (!item) {
      throw new Error(`${Resource.name} not found`);
   }
   return item;
}
```
