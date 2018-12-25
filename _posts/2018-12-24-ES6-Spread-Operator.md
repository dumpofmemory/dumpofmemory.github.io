---
layout: post
title: ES6 Use the Spread Operator to Evaluate Arrays In-Place
categories: freeCodeCamp
---

## Theory
ES6 introduces the **spread** operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:
```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```
We had to use <code>Math.max.apply(null, arr)</code> because <code>Math.max(arr)</code>> returns <code>NaN</code>. <code>Math.max()</code> expects comma-separated arguments, but not an array.

The **spread** operator makes this syntax much better to read and maintain.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```
<code>...arr</code> returns an unpacked array. In other words, it spreads the array.

However, the **spread** operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

```js
const spreaded = ...arr; // will throw a syntax error
```

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

### Task Conditions to be satisfied
- arr2 is correct copy of arr1.
- ... spread operator was used to duplicate arr1.
- arr2 remains unchanged when arr1 is changed.

## Solution
```javascript

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  // arr2 = []; // change this line
  arr2 = [...arr1]; 
})();
console.log(arr2);

```

