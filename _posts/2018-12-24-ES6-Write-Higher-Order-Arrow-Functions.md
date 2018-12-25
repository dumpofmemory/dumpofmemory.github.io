---
layout: post
title: ES6 Write Higher Order Arrow Functions
categories: freeCodeCamp
---

It's time we see how powerful arrow functions are when processing data.

Arrow functions work really well with higher order functions, such as <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>, that take other functions as arguments for processing collections of data.

Read the following code:
```js
FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
```
We have written this with <code>filter()</code> to at least make it somewhat readable. Now compare it to the following code which uses arrow function syntax instead:
```js
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
```
This code is more succinct and accomplishes the same task with fewer lines of code.

## Task
Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array *realNumberArray* and store the new array in the variable *squaredIntegers*.

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

### Task Conditions to be satisfied
- squaredIntegers should be a constant variable (by using const).
- squaredIntegers should be an array
- squaredIntegers should be [16, 1764, 36]
- function keyword was not used.
- loop should not be used
- map, filter, or reduce should be used


## Solution
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
