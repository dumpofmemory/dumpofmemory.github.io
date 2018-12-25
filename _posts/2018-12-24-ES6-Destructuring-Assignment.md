---
layout: post
title: ES6 Use Destructuring Assignment to Assign Variables from Objects
categories: freeCodeCamp
---

## Theory
We saw earlier how <code>spread</code> operator **can effectively spread, or unpack, the contents of the array**.

We can do something similar with objects as well. Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables.

Consider the following ES5 code:

```js
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```
Here's the same assignment statement with ES6 destructuring syntax:

```js
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
```

If instead you want to store the values of <code>voxel.x</code> into <code>a</code>, <code>voxel.y</code> into <code>b</code>, and <code>voxel.z</code> into <code>c</code>, you have that freedom as well.

Think of the syntax like the following:

<code>const {objectPropertyName: newVariableName } = objectName;</code>

```js
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
```

You may read it as "get the field <code>x</code> and copy the value into <code>a</code>," and so on.


## Task
Use destructuring to obtain the average temperature for tomorrow from the input object <code>AVG_TEMPERATURES</code>, and assign value with key <code>tomorrow</code> to <code>tempOfTomorrow</code> in line.

```js
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const tempOfTomorrow = undefined; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
```

### Task Conditions to be satisfied
- getTempOfTmrw(AVG_TEMPERATURES) should be 79
- destructuring with reassignment was used

## Solution
```javascript

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow: tempOfTomorrow} = avgTemperatures;  // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

```

### Notes
Actually, when I was writing this line <code> const {tomorrow: tempOfTomorrow} = avgTemperatures;</code> intially I did not pay attention and used <code>AVG_TEMPERATURES</code> instead of <code>avgTemperatures</code>, and due to that I could not fulfil the " ‘Destructuring **with** reassignment was used’" condition.  