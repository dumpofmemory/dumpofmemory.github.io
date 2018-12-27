---
layout: post
title: Basic Data Structures Add Items to an Array with push() and unshift()
categories: freeCodeCamp
---

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable. In this challenge, we will look at two methods with which we can programmatically modify an array: Array.push() and Array.unshift().

Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning. Consider the following:

```javascript
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
```

Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

## Task
We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

```javascript
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
```

### Task Conditions to be satisfied
- <code>mixedNumbers(["IV", 5, "six"])</code> should now return <code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</code>
- The <code>mixedNumbers</code> function should utilize the <code>push()</code> method
- The <code>mixedNumbers</code> function should utilize the <code>unshift()</code> method


## Solution
```javascript

function mixedNumbers(arr) {
  // change code below this line
    arr.unshift("I", 2, "three")
    arr.push(7, "VIII", 9);
  // change code above this line
  console.log(arr);
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

```

### Notes


---

# Basic Data Structures: Remove Items from an Array with pop() and shift()

Both <code>push()</code> and <code>unshift()</code> have corresponding methods that are nearly functional opposites: <code>pop()</code> and <code>shift()</code>. As you may have guessed by now, instead of adding, <code>pop()</code> *removes* an element from the end of an array, while <code>shift()</code> removes an element from the beginning. The key difference between <code>pop()</code> and <code>shift()</code> and their cousins <code>push()</code> and <code>unshift()</code>, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

Let's take a look:
```javascript
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
We can also return the value of the removed element with either method like this:

let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```
We can also return the value of the removed element with either method like this:
```javascript
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```

## Task

We have defined a function, <code>popShift</code>, which takes an array as an argument and returns a new array. Modify the function, using <code>pop()</code> and <code>shift()</code>, to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

```javascript
function popShift(arr) {
  let popped; // change this line
  let shifted; // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

### Task Conditions to be satisfied
- popShift(["challenge", "is", "not", "complete"]) should return ["challenge", "complete"]
- The popShift function should utilize the pop() method
- The popShift function should utilize the shift() method

## Solution
```javascript
function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
```
