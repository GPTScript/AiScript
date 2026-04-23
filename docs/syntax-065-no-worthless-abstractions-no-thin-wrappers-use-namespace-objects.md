---
name: No thin wrappers, use namespace exports
description: Don't wrap a call without adding value — export namespace objects (User.create) not bare functions (createUser)
type: syntax
issue: 65
---

# No thin wrappers, use namespace exports

> "No worthless abstractions" — [Axiom 8](#28)
>
> "Abstractions should be deep" — John Ousterhout

See also: #12 (package structure), #54 (function rules), #66 (when to abstract).

## NEVER create a function that just forwards a call

Before:
```js
function doLess() {
   return doer.less();
}

function doStuff(thing, widget, sprocket) {
   return doer.stuff.run("default", thing, widget, sprocket);
}
```

After:
```js
doer.less();

// if "default" is always the first arg, that default belongs in doer.stuff
doer.stuff.run("default", a, b, c);
```

## ALWAYS export namespace objects, not bare functions

Before:
```js
import { createUser, updateUser } from "./user.js";

createUser();
```

After:
```js
import User from "./user.js";

User.create();
```
