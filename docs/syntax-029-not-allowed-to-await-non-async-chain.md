# Not allowed to await non-async chain

Each await chain MUST be on its own line.

An "await chain" is
- any statement that starts with `await`
and terminates when
- the result of a return is not a promise
- (or when it's the end of the line).

### Bug

Intuitively you'd think these should work as `await` signals that the interpreter should resolve all promises in the chain... but 'tis not so!

```js
// error, oppsSync is not a property of the return value
let foo = await buildAsyncChain().buildMore().oopsSync().result;

// same as above
let bar = await doAsyncStuff().oopsSync().asyncMore();
```

### Good Example

This is the desired, non-buggy behavior:

```js
let fooPartial = await buildAsyncChain().buildMore().asyncStuff();
let foo = stuff.oopsSync().result;

let barPartial = await doAsyncStuff();
let bar = await barPartial.oopsSync().asyncMore();
```

### Bad Example

```js
let foo = (await doSyncStuff().asyncStuff()).oopsSync();

let bar = await (await doAsyncStuff()).oopsSync().asyncMore();
```
