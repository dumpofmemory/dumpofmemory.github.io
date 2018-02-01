---
layout: post
title: Diff Two Arrays
categories: freeCodeCamp
---
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Here are some helpful links:
+ [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
+ [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
+ [Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
+ [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
+ [for loop](https://devdocs.io/javascript/statements/for)
+ [array.includes](https://devdocs.io/javascript/global_objects/array/includes)

```javascript
function diffArray(arr1, arr2) {
  var newArr = [];

  function search(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
      }
    }
  }

  search(arr1, arr2);
  search(arr2, arr1);

  // console.log(newArr);
  return newArr;
}



diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); //should return ["pink wool"]

```
