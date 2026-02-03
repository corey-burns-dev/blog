---
title: "JavaScript Variables Without the Fog"
pubDate: 2026-02-03
description: "A quick, practical guide to const, let, var, and scope—so your code reads clean and behaves on purpose."
heroImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2000&auto=format&fit=crop"
---

## The three ways to name a value

JavaScript gives you three keywords to create variables: `const`, `let`, and `var`. They look similar, but they behave very differently. The short version:

- Use `const` by default.
- Use `let` when the value must change.
- Avoid `var` unless you're reading old code.

### `const`: the stable anchor

`const` creates a variable you can't reassign. It's perfect for values that should stay the same.

```js
const siteName = "Studio Journal";
const maxPosts = 12;
```

Important: `const` doesn't make objects immutable. It only prevents reassigning the variable.

```js
const profile = { name: "Corey" };
profile.name = "C.";
```

### `let`: the flexible workhorse

Use `let` when you expect the value to change over time.

```js
let views = 0;
views = views + 1;
```

### `var`: the legacy keyword

`var` is function-scoped and hoisted in ways that can surprise you. Most modern code avoids it.

```js
function demo() {
  if (true) {
    var msg = "hi";
  }
  // msg is still available here
  return msg;
}
```

## Scope: where a variable lives

Scope is the “room” your variable exists in. `let` and `const` are block-scoped, so they only live inside `{ ... }`. `var` is function-scoped, so it ignores blocks.

```js
if (true) {
  const inside = "only here";
  let alsoInside = "also only here";
}

// inside and alsoInside are not defined here
```

```js
if (true) {
  var leaking = "still around";
}

// leaking is defined here
```

## The practical rule set

- Default to `const`.
- Use `let` when reassignment is part of the story.
- Skip `var` unless you’re maintaining older code.

That’s it. Simple rules, fewer surprises, and code that reads like it meant to be written that way.
