---
layout: post
title: ES6 Use the Rest Operator with Function Parameters
categories: freeCodeCamp
---

## Theory
In order to help us create more flexible functions, ES6 introduces the <code>rest</code> operator for function parameters. With the <code>rest</code> operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:
```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```
The **rest** operator eliminates the need to check the args array and allows us to apply <code>map()</code>, <code>filter()</code> and <code>reduce()</code> on the parameters array.

## Task
Modify the function *sum* so that it uses the **rest** operator and it works in the same way with any number of parameters.

```js
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
```

### Task Conditions to be satisfied
- arr should be [3,4,5,6,7,8,9,10]
- Destructuring should be used.
- <code>Array.slice()</code> should not be used.

## Solution
```javascript

const sum = (function() {
  "use strict";
  return function sum(...args) {
    // removed this line const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3)); // 6
console.log(sum(0,1,2)); //should be 3
console.log(sum(1,2,3,4)); //should be 10
console.log(sum(5)); // should be 5
console.log(sum()); //should be 0

```

### Notes
