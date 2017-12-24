---
layout: post
title: Where do I belong
categories: freeCodeCamp
---

Return the lowest index at which a value _(second argument)_ should be inserted into an array _(first argument)_ once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

```javascript

function getIndexToIns(arr, num) {
  // Extract the num
  num =  Array.from(arguments).slice(1);
  // store extracted value in targetNum
  var targetNum = num[0];
  // push targetNum into array
  arr.push(targetNum);
  // console.log(targetNum);


//the compare function can simply subtract b from a.
//The following function will sort the array ascending
//(if it doesn't contain Infinity and NaN):
  function compareNumbers(a, b) {
    return a - b;
  }

// store the ascending sorted array
  arr = arr.sort(compareNumbers);

// loop thru it
    for(var i=0;i<arr.length;i++){
      if(targetNum <= arr[i]) {
        return i;
      }
    }

}

getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5); // should return 2
```

(forEach function example)[https://appendto.com/2016/05/iterating-javascript-arrays-with-array-foreach/]
