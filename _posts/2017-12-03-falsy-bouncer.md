---
layout: post
title:  "Falsy Bouner"
categories: freeCodeCamp
---

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:
- (Boolean Objects)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean]
- (Array.prototype.filter())[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter]

>Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, “” (empty string), and false of course.

```javascript
function bouncer(arr) {
  // you can do this!
  console.log(arr);
  var tempAr = [];
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

    if (arr[i] !== 0 && arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== false || typeof(arr[i]) === 'string') {
      if (!(typeof(arr[i]) === 'string' && arr[i].length == 0)) {

        tempAr.push(arr[i]);
      }
    }
  }
  console.log(tempAr);
  return tempAr;
}


bouncer([1, NaN, 2, undefined]);
bouncer([7, "", "ate", false, 9]);
bouncer([1, null, NaN, 2, undefined]);
bouncer([1, null, NaN, 2, undefined, 0]);
bouncer([false, null, 0, NaN, undefined,""]);
```

An elegant solution proposed by freeCodeCamp on their forum:

### Advanced Code Solution:
```javascript
function bouncer(arr) {
  return arr.filter(Boolean);
}
```
