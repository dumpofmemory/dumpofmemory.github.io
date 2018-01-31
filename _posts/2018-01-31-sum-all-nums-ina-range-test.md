---
layout: post
title: Sum All Numbers in a Range
categories: freeCodeCamp
---
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Here are some helpful links:
+ [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
+ [Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
+ [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

```javascript
function sumAll(arr) {
    var max;
    var min;
    var near = [];
    var sum;
  arr.reduce(function(a, b) {

    max = Math.max(a, b);
    min = Math.min(a, b);

    for (var i = min; i <= max; i++) {
      near.push(i);
      // console.log(near);
    }
    sum = near.reduce(function(a, b) {
      return a + b;
    }, 0);

  });
  return sum;
}

sumAll([1, 4]) //should return a number.
sumAll([1, 4]) //should return 10.
sumAll([4, 1]) //should return 10.
sumAll([5, 10]) //should return 45.
sumAll([10, 5]) //should return 45.
```
