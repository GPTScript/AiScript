---
name: ISL-R Design Pattern
description: Organize by component (Interaction, Shape, Logic, Routing) not by category (models, views, controllers)
type: js-style
issue: 33
---

# The ISL-R Design Pattern (MVC is dead, long live MVC)

Re:
- https://beyondcodebootcamp.github.io/presos/long-live-mvc/ 
- https://www.youtube.com/watch?v=bO7nynlX8a0

The ISL-R design pattern is a component-oriented rehash of MVC (MVVM, MVP), but with more practical (less computer-sciencey) naming.

A component (or package or module) can be thought of as parts:

- Interaction (parsing arguments, query, etc)
- Shape (typeable adaptation of storage)
- Logic (testable, valuable logic)
- and Routing (index of capabilities)

# Component Architecture

As opposed to category architecture.

Meaning "all the stuff related to `widgets` goes together, and all of the stuff related to `gizmos` goes together" instead of "all the stuff related to data storage goes together".

Grouping things by how they could be exported as a small, independent unit.

❌ Not this

```txt
foobar5000/
├── models/
│  ├── gizmos.db
│  └── widgets.db
├── views/
│  ├── gizmos.fml
│  └── widgets.fml
└── controllers/
   ├── gizmos.app
```

✅ This

`./lib/gizmos.js`:

```js
Gizmos.data.getUpsideDownGizmos = async function () {
  // ...
};

Gizmos.lib.calculateAveragePrice = function (gizmos) {
  // ...
};

Gizmos.json.showAverageCost = function (req, res) {
  let gizmos = await Gizmos.data.getUpsideDownGizmos();
  let average = Gizmos.lib.calculateAveragePrice(gizmos);
  res.json({ average });
};
```

`router.js`:

```js
router.get(
  "/api/gizmos/average-cost",
  Gizmos.json.showAverageCost
);
```

# Interaction

Separating the bits that handle how a user (developer, machine, or product customer) interacts with the system from the unique, valuable work (business logic).

# Shape

TODO

# Logic

TODO

# Routing

TODO
