---
title: "Disable ESLint Rules with Comment Syntax"
date: "2019-03-06"
updated: "2019-03-06"
type: post
status: published
permalink: /posts/eslint-disable-rule-by-comment-generator
aliases:
  [
    "/eslint-disable-comment-syntax",
    "/eslint-disable-rules-with-comment-syntax/",
    "/posts/eslint-disable-by-comment-syntax/",
  ]
tags: ["JavaScript", "ESLint", "Developer Experience"]
description: Learn how to disable ESLint rules with the comment syntax
---

Learn all the ways to disable ESLint rules with the comment syntax.

## Ignore ESLint rules for file

In general, using file level `eslint-disable` is an indicator that the code needs to be fixed rather than ignored, but there are definitely times when using `eslint-disable` at the file level is necessary.

### Ignore all rules for a file

Syntax: `/* eslint-disable */`

Example:

```js
/* eslint-disable */
var myObj = {};
```

### Ignore single rule for a file

Syntax: `/* eslint-disable <rule> */`

Example (using `no-unused-vars`):

```js
/* eslint-disable no-unused-vars */
var myObj = {};
```

### Ignore multiple ESLint rules for a file

Syntax: `/* eslint-disable <rule>, <rule>, <etc> */`

Example (using `no-unused-vars` and `no-shadow`):

```js
/* eslint-disable no-unused-vars, no-shadow */
var myObj = { old: "thing" };

function myFunc() {
  var myObj = { new: "thing" };
}
```

## Ignore ESLint rules in a block of code

Sometimes you may want to ignore a rule inside of a block of code and re-enable outside of it.

### Ignore all rules in a block of code

Syntax: `/* eslint-disable */ /* ...block of code... */ /* eslint-enable */`

Example:

```js
var myObj = { old: "thing" };

/* eslint-disable */
function myFunc() {
  var myObj = { new: "thing" };
}

function myFunc2() {
  var myObj = { new: "thing" };
}
/* eslint-enable */
```

### Ignore single rule in a block of code

Syntax: `/* eslint-disable <rule> */ /* ...block of code... */ /* eslint-enable <rule> */`

Example (using `no-shadow`):

```js
var myObj = { old: "thing" };

/* eslint-disable no-shadow */
function myFunc() {
  var myObj = { new: "thing" };
}

function myFunc2() {
  var myObj = { new: "thing" };
}
/* eslint-enable no-shadow */
```

### Ignore multiple rules in a block of code

Syntax: `/* eslint-disable <rule>, <rule>, <etc> */ /* ...block of code... */ /* eslint-enable <rule>, <rule>, <etc> */`

Example (using `no-shadow` and `no-unused-vars`):

```js
var myObj = { old: "thing" };

/* eslint-disable no-shadow, no-unused-vars */
function myFunc() {
  var myObj = { new: "thing" };
}

function myFunc2() {
  var myObj = { new: "thing" };
}
/* eslint-enable no-shadow, no-unused-vars */
```

## Ignore ESLint rules for current line

This is useful for ignoring rules for a single line. I find it useful because if code gets moved around, it guarantees that the `eslint-disable` comment is preserved with the code it's meant for.

### Ignore all rules for current line

Syntax: `// eslint-disable-line`

Example:

```js
var myObj = {}; // eslint-disable-line
```

### Ignore single rule for current line

Syntax: `// eslint-disable-line <rule>`

Example (using `no-var`):

```js
var myObj = {}; // eslint-disable-line no-var
```

### Ignore multiple rules for current line

Syntax: `// eslint-disable-line <rule>, <rule>, <etc>`

Example (using `no-var` and `no-unused-vars`):

```js
var myObj = {}; //eslint-disable-line no-var, no-unused-vars
```

## Ignore ESLint rules for next line

This is useful for when you have a declaration/definition that spans multiple lines. Some examples of this may be multi-line imports or destructuring, multi-line function definitions or multi-line object definitions.

### Ignore all rules for next line

Syntax: `// eslint-disable-next-line`

Example:

```js
// eslint-disable-next-line
module.exports = () => {
  /* lots of code here, all covered under the eslint-disable comment */
};
```

### Ignore single rule for next line

Syntax: `// eslint-disable-next-line <rule>`

Example (using `no-unused-vars`):

```js
// eslint-disable-next-line no-unused-vars
module.exports = () => {
  /* lots of code here, all covered under the eslint-disable comment */
};
```

### Ignore multiple rules for next line

Syntax: `// eslint-disable-next-line <rule>, <rule>, <etc>`

Example (using `no-var` and `no-unused-vars`):

```js
// eslint-disable-next-line no-var, no-unused-vars
module.exports = () => {
  var myObj = {};
  /* lots of code here, all covered under the eslint-disable comment */
};
```
