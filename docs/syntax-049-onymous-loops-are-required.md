---
name: Named loops required
description: All loops must have labels (yloop:, xloop:) so break/continue targets are explicit
type: syntax
issue: 49
---

# Onymous Loops are required

For simplicity we'll probably require that all loops be Onymous to start, but in the future we could make it so that only broken loops are required to be Onymous.

Naming could be automated by using the name of the variable in the loop (`iFor`, `jFor`, `fooFor`). Minifiers could remove it when not used, of course.

## Bad Example

```js
for (let y of yyyy) {
   for (let x of xxxx) {
      if (y[x]) {
         break; // SYNTAX ERROR!!
      }
   }
}
```

## Good Example

```js
yloop: for (let y of yyyy) {
   xloop: for (let x of xxxx) {
      if (y[x]) {
         break xloop;
      }
   }
}
```
