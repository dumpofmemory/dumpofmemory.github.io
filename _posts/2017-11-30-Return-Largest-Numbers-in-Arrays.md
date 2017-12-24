---
layout: post
title:  "Return Largest Numbers in Arrays"
categories: [javascript, freeCodeCamp]
---

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

```javascript
function largestOfFour(arr) {
  // You can do this!
  var tempA = 0;
  var tempB = 0;
  var newArra = [];
  // how many subarrays there are in a given array
  var howManySubarrays = arr.length;
  console.log("There are " + howManySubarrays + " subarrays in total\n");

  //loop through the given array
  for (var i = 0; i < howManySubarrays; i++) {
    console.log("\nI am array # " + i + " and my values are: " + arr[i]);

    //loop through each individual subarray
    for (var j = 0; j < arr[i].length; j++) {
      //  console.log("*** I am # " + j + " and my value is: " + arr[i][j] + "***");

      //set the initial tempA value
      tempA = arr[i][j];
      console.log("I am the initial tempA value: " + tempA);

      while (j < arr[i].length - 1) {
        //set the initial tempB value
        tempB = arr[i][j + 1];
        console.log("I am current tempB vaLue: " + tempB);

        if (tempA < tempB) {
          tempA = tempB;
          console.log("The biggest value: " + tempA + "\n");
        } else {
          tempB = tempA;
          console.log(" ~ The biggest value now: " + tempB + " ~ \n");
        }
        j++;
      }
      newArra.push(tempB);
      //console.log(newArra);
    }
  }
  arr = newArra;
  return arr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

```
