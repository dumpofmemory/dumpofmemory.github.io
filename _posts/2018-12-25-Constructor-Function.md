---
layout: post
title: ES6 Use class Syntax to Define a Constructor Function
categories: freeCodeCamp
---

ES6 provides a new syntax to help create objects, using the keyword <code>class</code>.

This is to be noted, that the <code>class</code> syntax is just a syntax, and not a full-fledged class based implementation of object oriented paradigm, unlike in languages like Java, or Python, or Ruby etc.

In ES5, we usually define a constructor function, and use the <code>new</code> keyword to instantiate an object.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

The class syntax simply replaces the constructor function creation:
```js
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Notice that the <code>class</code> keyword declares a new function, and a constructor was added, which would be invoked when <code>new</code> is called - to create a new object.


## Task
Use <code>class</code> keyword and write a proper constructor to create the <code>Vegetable</code> class.

The <code>Vegetable</code> lets you create a vegetable object, with a property <code>name</code>, to be passed to constructor.

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```

### Task Conditions to be satisfied
- <code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.
- <code>class</code> keyword was used.
- <code>Vegetable</code> can be instantiated.
- <code>carrot.name</code> should return <code>carrot</code>.


## Solution
```javascript
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```

### Notes
