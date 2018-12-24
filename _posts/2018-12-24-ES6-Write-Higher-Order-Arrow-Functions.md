---
layout: post
title: ES6 Write Higher Order Arrow Functions
categories: freeCodeCamp
---

Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array *realNumberArray* and store the new array in the variable *squaredIntegers*.

```javascript

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((item) => item%2 == 0 && item >= 0)
  .map((item) => Math.pow(item, 2));
  
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

```
