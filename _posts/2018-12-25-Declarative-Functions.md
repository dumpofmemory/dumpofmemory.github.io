---
layout: post
title: Write Concise Declarative Functions with ES6
categories: freeCodeCamp
---

When defining functions within objects in ES5, we have to use the keyword <code>function</code> as follows:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

With ES6, You can remove the <code>function</code> keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```



## Task
Refactor the function <code>setGear</code> inside the object <code>bicycle</code> to use the shorthand syntax described above.

```js
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

### Task Conditions to be satisfied
- Traditional function expression was not used.
- <code>setGear</code> is a declarative function.
- <code>bicycle.setGear(48)</code> changes the gear value to 48.


## Solution
```javascript
// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

### Notes
