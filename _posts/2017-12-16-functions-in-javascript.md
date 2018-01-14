---
layout: post
title:  "Functions in JavaScript"
categories: javascript
---

To help structure our code and make common operations reusable, we create ***functions*** and ***objects***.
Functions are mini programs inside our scripts. They can be used to segment off sections of our code to make it easier to manage, or to run repeated operations, or both. Functions wrap around code blocks, which contain the actual statements to be run, and typically include some combination of variable assignments, operations, and conditions.

![types of functions](https://github.com/dumpofmemory/blog/blob/gh-pages/img/Screen%20Shot%202017-12-16%20at%2011.35.53.png?raw=true)

Functions do one of two things: either create a result immediately, like change the contents of an element on a webpage, or provide an answer or output to be used by other functions, called a return value.
In JavaScript, we work with three types of functions:
- **named functions**, which are executed when called by name,
- **anonymous functions**, which typically run once they are triggered by a specific event, and
- **immediately invoked function expressions**, which run the moment the browser encounters them.

All functions have the same overall structure. They start with the word function, which tells the browser, here I am declaring a function, followed by their name, two parentheses, and then a pair of curly brackets which wrap around the code block.
To run a **named function**, we call it by its name at a location in the script where we want it to run. That means we can define a function at the very top of the script and choose to run it at the very bottom of the script. In fact, this is the coding standard for functions.

![func def](https://github.com/dumpofmemory/blog/blob/gh-pages/img/Screen%20Shot%202017-12-16%20at%2011.36.56.png?raw=true)

Technically, it doesn't matter where in the script a function sits because the browser will load all the JavaScript first and then run it. But for readability for humans, we typically place a function before it's called in the script. This provides a semblance of logical structure in our code when you read it from the top to the bottom. Oh, here's a function that does something, and here it's called and I already know what it is, so I can move on.
**Anonymous functions** don't have a name, so the parentheses appears right after function.

**Immediately invoked function expressions** are anonymous functions with another parentheses pair at the end to trigger them, all wrapped inside parentheses. Every function comes with an argument's object, an array of possible arguments you can pass to the function when you call it. These arguments are separated by commas, and can be used inside the function itself based on their names in the function declaration. Finally, functions can return values to where they were called from using the return keyword.

Whatever is returned is not executed directly, but instead captured in a variable or used immediately in another function.

![..](https://github.com/dumpofmemory/blog/blob/gh-pages/img/Screen%20Shot%202017-12-16%20at%2011.38.30.png?raw=true)

That's because, although we've defined the function, we have not actually made it run. To get the function to run, we have to call it by its name:

```javascript
function findBiggestFraction(a,b) {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction,secondFraction);
```

---

# Add arguments to the function

```javascript
function findBiggestFraction(a, b) {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction, secondFraction);
findBiggestFraction(7/16, secondFraction13/25);
findBiggestFraction(1/3, 1/2);
```

---

# Return values from a function

```javascript
function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["firstFraction: ", a] : result = ["secondFraction: ", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

//console.log(findBiggestFraction(firstFraction,secondFraction));

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
// console.log(fractionResult);
console.log("first fraction result: ", firstFraction);
console.log("second fraction result: ", secondFraction);
console.log("fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");
```
---


# Anonymous functions

Here, my anonymous function is placed inside a variable as a _function expression_, meaning it is stored as if it were a normal value and only executes if we call the variable as if it were a function.
So, to get this function to run, I have to call the variable, <code>theBiggest</code> and add a <code>()</code> at the end of it. This tells JavaScript, that inside <code>theBiggest</code> variable, there's an anonymous function, and to run that anonymous function; and then we should get the console log result out in the console.

```javascript
var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest(7/9,13/25));
```
or
```javascript
var a = 3/4;
var b = 5/7;

var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest());
```
