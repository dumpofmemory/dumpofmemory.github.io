---
layout: post
title:  "Chunky Monkey"
categories: freeCodeCamp
---

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

```javascript
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newAra = [];

  for (var i = 0; i < arr.length; i += size) {
    newAra.push(arr.slice(i, i+size));
  }
  arr=newAra;
  // console.log(arr);
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```
**.slice(start, end)**

## What does ”i+size” let us achieve?


**i=0 -> then i+size (where size is 2) = 0 + 2 = 2**
So, in the first cycle of _foor loop_, **slice(i, i+size)** means start with **0**, and end with **0+2= 2**, which returns us array[“a”, ”b”].

In the second cycle of _foor loop_, **i** will be equal to **2** because we are incrementing by **_size_** **(i+=size, which is 2 in this case)**
So, in this cycle, **.slice(i, i+size)** means **.slice(start with 2, and end with 4)** and thus the result of slice will be array[“c”, ”d”].
