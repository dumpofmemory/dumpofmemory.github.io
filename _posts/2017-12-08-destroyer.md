---
layout: post
title:  "Destroyer"
categories: freeCodeCamp
---

```JavaScript
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  // console.log(args);
  return arr.filter(function(arrEl) {
    // console.log(arrEl);
    //evaluates to true if the array element is present
    // console.log(args.includes(arrEl));
    return !args.includes(arrEl);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
