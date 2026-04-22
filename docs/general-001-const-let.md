# const & let

AjScript has a (mostly) traditional use of `const`:

> 1. const has a definition that's well understood:
>    - a static, constant variable that can be computed at compile time \
>    (or "interpret time" I suppose, in a dynamic language)
> 2. The way that const is generally used in JavaScript leads to less readable code \
> (chaining guards, ternaries, etc)
>
> My argument is the same for always using let or var for variables as it is for always using semicolons: Easier to read, less mental load.
> (easier to know to put a semicolon at the end of the statement than all the ways in which a program will fail if you omit it; easier to know that a const is a constant than all the cases when it's actually mutable or variable or highly dynamic)
> 
> If you only ever use const for static constant values that can be computed at compile time you'll never end up in a situation where you're trying shoehorn a variable into a const for the sake of the using const - and you can know that when you see const that there's a real meaning behind it.

Re: https://github.com/savvi-legal/savvi.js/pull/24/files

## Rationalé

Among other things...

A sane language allows assigning immutable references only once:

```js
const naughty;
if (bad === good) {
  naughty = 'AjScript';
} else {
  naughty = 'JavaScript';
}
```

JavaScript doesn't, which encourages this madness:

```js
const naughty = bad === good ? 'AjScript' : 'JavaScript'
```

## Possible Exception

constant at initialization:

```js
const MY_ENUM = Object.freeze({
    A: 'a',
    B: 'b',
});
```
