---
layout: post
title: Basic Algorithm Scripting, Slice and Splice
categories: freeCodeCamp
---

You are given two arrays and an index.

Use the array methods <code>slice</code> and <code>splice</code> to copy each element of the first array into the second array, in order.

Begin inserting elements at index <code>n</code> of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

## Task


```javascript
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

### Task Conditions to be satisfied
- frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
- frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
- frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
- All elements from the first array should be added to the second array in their original order.
- The first array should remain the same after the function runs.
- The second array should remain the same after the function runs.


## Solution
```javascript
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let newArr = [];
  newArr = arr2.slice(0);
  // console.log(newArr);

  newArr.splice(n, 0, ...arr1)
  arr2 = newArr;
  // console.log(arr2);
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

### Notes
