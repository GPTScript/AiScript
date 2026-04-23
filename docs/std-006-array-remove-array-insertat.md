---
name: Array utilities
description: Array._removeItem(val), Array._remove(index), Array._insertAt(index, item) — readable splice wrappers
type: std
issue: 6
---

# Array#remove && Array#insertAt

## Array#_removeItem

A nice alternative to an inverted `.filter()`.

```js
Array.prototype._removeItem = function (item) {
    let index = this.indexOf(item);
    if (index >= 0) {
        return this.splice(index, 1)[0];
    }
    return null;
};
```

Thought: maybe use the `.find()` function to use a function to find the item for the `indexOf()`

## Array#_remove

A more readable alternative to `.splice(index, 1)`.

```js
Array.prototype._remove = function (index, n = 1) {
    return this.splice(index, n);
};
```

## Array#_insertAt

I've used this functionality before... but not often. In consideration.

```js
Array.prototype._insertAt = function (index, item) {
    this.splice(index, 0, item);
    return this;
};
```

## Array#_insertAt

I don't know if I've ever had this use case... so maybe not.

```js
Array.prototype._insertAllAt = function (index, items) {
    // the only appropriate use of `...` is where it would otherwise require the use of `.apply()`
    this.splice(index, 0, ...items);
    return this;
};
```
