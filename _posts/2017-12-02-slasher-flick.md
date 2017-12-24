---
layout: post
title:  "Slasher Flick"
categories: freeCodeCamp
---

Return the remaining elements of an array after chopping off _n_ elements from the head.

The head means the beginning of the array, or the zeroth index.

```javascript
function slasher(arr, howMany) {
  // it doesn't always pay to be first

  for (var i = 0; i < arr.length; i++) {

    if (howMany == 0) {
      return arr;
    } else {
      arr.splice(i, i += howMany);
    }

  }
  return arr;
}
```

Actually I found better solutions from freeCodeCamp hint page [https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-slasher-flick/16047]

### Basic Code Solution:

> The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
More on this: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice]

```javascript
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}
slasher([1, 2, 3], 2);
```

### Intermediate Code Solution:

> The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
More on this: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice]

```javascript
function slasher(arr, howMany) {

  // Return string after the amount chopped off.
  return arr.slice(howMany);
}
```
