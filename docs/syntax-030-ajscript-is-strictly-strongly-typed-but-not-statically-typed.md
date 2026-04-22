# AjScript is Strictly & Strongly Typed (but not Statically) Typed

No type coercion and no type changes.

AjScript Types are like Go: Strong, Inferred.

- once you assign a type to a variable, it cannot be any other type
  - (arrays are exclusive from objects)
- types do not automatically change (except maybe to boolean)

## Bad Examples

```js
1 + ''

let foo = "1";
foo = parseInt(foo, 10);
```

## Good Examples

```js
(1).toString()
```

```js
let fooInput = "1";
let foo = parseInt(fooInput, 10);
```

It would be nice if AjScript could support proper variable shadowing, like Rust, but it cannot.

## Consideration

The use of `String` is a code smell. It signifies that you both don't know whether a type can be `null` or `undefined`, and don't know what other types it could be (otherwise you might use `(x || '').toString()` or `x.toString()`).
