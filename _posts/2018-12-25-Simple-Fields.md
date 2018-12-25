---
layout: post
title: ES6 Write Concise Object Literal Declarations Using Simple Fields
categories: freeCodeCamp
---

ES6 adds some nice support for easily defining object literals.

Consider the following code:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

<code>getMousePosition</code> is a simple function that returns an object containing two fields.

ES6 provides the syntactic sugar to eliminate the redundancy of having to write <code>x: x</code>. You can simply write <code>x</code> once, and it will be converted to <code>x: x</code> (or something equivalent) under the hood.

Here is the same function from above rewritten to use this new syntax:
```js
const getMousePosition = (x, y) => ({ x, y });
```

## Task
Use simple fields with object literals to create and return a Person object.

```js

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

```

### Task Conditions to be satisfied
- the output is {name: "Zodiac Hasbro", age: 56, gender: "male"}.
- No : were used.


## Solution
```javascript

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  name, age, gender;
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

```

### Notes
