# All functions that can return a Promise should be async

As a general rule, anything that can return a promise should be marked as `async`.

## ❌ Bad Example

```js
function mightBeAPromise(foo, bar) {
  let coord = foo.x + bar.y; // synchronous exception if bar is not defined!
  return willPromise() // this is async, but it's not obvious
}
```

## ✅ Good Example

```js
function async mightBeAPromise(foo, bar) {
  let coord = foo.x + bar.y; // Rejection if bar is not defined!
  return await willPromise() // now we can tell that this is async part at-a-glance
}
```

As far as I know it's not presently possible to enforce this through existing tooling, but it should be to introspect and enforce with better tooling.

## Rationalé

- It makes it clear that the things downstream can return promises, which might otherwise be non-obvious
- It ensures that _only_ a promise is returned (there can't be a synchronous error), otherwise you'd have to do something like this around it, which would be annoying:
   ```js
   let p;
   try {
     p = mightReturnAPromise();
   } catch(e) {
     p = Promise.reject(e);
   }
   return p;
   ```
