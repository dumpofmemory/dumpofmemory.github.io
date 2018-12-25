---
layout: post
title: ES6 Create Strings using Template Literals
categories: freeCodeCamp
---


A new feature of ES6 is the *template literal*. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

```js

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

```

A lot of things happened there.

Firstly, the example uses backticks (<code>`</code>), not quotes (<code>'</code> or <code>"</code>), to wrap the string.

Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting <code>\n</code> within strings.

The <code>${variable}</code> syntax used above is a placeholder. Basically, you won't have to use concatenation with the <code>+</code> operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with <code>${ and }</code>. Similarly, you can include other expressions in your string literal, for example <code>${a + b}</code>.

This new way of creating strings gives you more flexibility to create robust strings.


## Task
Use template literal syntax with backticks to display each entry of the <code>result</code> object's <code>failure</code> array. Each entry should be wrapped inside an <code>li</code> element with the class attribute <code>text-warning</code>, and listed within the <code>resultDisplayArray</code>.

```js

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = null;
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

```

### Task Conditions to be satisfied
- resultDisplayArray is an array containing result failure messages.
- resultDisplayArray is the desired output.
- Template strings were used


## Solution
```javascript

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};


function makeList(arr) {
  "use strict";
  console.log([...arr]);
  // change code below this line
  const resultDisplayArray = arr.map((item) => `<li class="text-warning">${item}</li>`);
  // change code above this line

  // console.log(resultDisplayArray);
  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);


```

### Notes
