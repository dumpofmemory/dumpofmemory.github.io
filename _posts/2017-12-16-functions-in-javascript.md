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
<br>
---
<br>
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
<br>
---
<br>
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
<br>
---
<br>


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
<br>
---
<br>
# Immediately invoked functional expressions

How do I populate the variable with the result of an anonymous function? - use an **immediately invoked function expression** that runs as soon as the browser encounters it.

Here's what that looks like. First, we wrap our entire anonymous function in parenthesis. Then, we invoke the function by adding a set of parenthesis at the end. And we need to place arguments inside this new set of parenthesis. So I'll cut them out, and paste them in here.

Now when the script is read from the top down, the browser says, "Hey, here is a variable, "and inside the variable we have an "immediately invoked function expression, "so I'm going to run the function right now, "with these arguments, and return "the result back into the variable." That means, now we can console log out just <code>theBiggest</code>, and get the result.

```javascript
var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(7/9,13/25)

console.log(theBiggest);
```


The browser runs the function when it's encountered, so you'll remember previously when we made our named function, we placed it at the top, and then we called the function later on after we defined the variables? Well now, if we want to use external variables, those variables have to be defined before we list out our immediately invoked function expression.

```javascript
var firstFraction = 7/9;
var secondFraction = 13/25;

var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction, secondFraction)

console.log(theBiggest);
```


So why would you want to use an immediately invoked function expression?

The benefit of this function is that it runs immediately where it's located in the code, and produces a direct output.

That means, on first run, it is unaffected by code which appears further down in the script, which can be useful.
These functions are great for quickly populating a variable or argument in a larger function or a property in an object, and are often hooked to event listeners for an immediate output.

However, when you use these, you need to be very careful about how you structure your script, because as you see, they are invoked immediately, they don't wait for you to call <code>theBiggest</code> variable, they just run as soon as the browser encounters them.


---

# Variable scope

When we start working with functions, it's important to understand the concept of variable scope, where in your code your variable is available. In JavaScript, the location of your variable declaration decides where it can be used in your code. There are two types of variable scopes, global and local. When you declare a variable in the root of your script, so, independently, outside of any function, it becomes a global variable you can access from anywhere within the script. That means you can use it, update its value, do whatever you want with it in both the root of the script and inside functions.

If you make it change to that variable inside a function, that change becomes global and all other references to it will receive the same updated value. When you declare a variable inside a function, it becomes a local variable. This variable is only available as long as you're inside a function, so, inside its scope, and if you try to call it from outside the function, you get an error. Let's see how this works in practice using the example we've been working with.

Right now, the first fraction and second fraction variables are defined in the root of the script, so, they have a global scope. That means I can access them from the root of the script and inside any function, so, if I console log their values from inside the function, it works. Result, on the other hand, is defined inside the function and is a locally scoped variable. That means it is available only inside the function and if I try to console log it outside, I get an Uncaught ReferenceError, result is not defined.

A large percentage of JavaScript errors is caused by losing track of the scope of variables. Most commonly, the developer tries to call a local variable outside its scope and things run awry. This is one reason why we have the return keyword so we can package up a local value and send it somewhere outside the local scope. Now that you understand how scopes work, you may be tempted to just make all variables global. Don't. That makes variables far less useful.

**The great thing about local variables is they are proverbial scribble pads. They exist only for as long as the function runs and are then discarded by the browser and their names are not reserved globally so you can use them again and again. This will come in handy later when we start working with loops. Unlike global variables, which are stored in the browser memory for as long as the script runs, local variables don't take up valuable resources. They are used then discarded when we leave the scope.**

**There's one weird quirk here. Remember when we first talked about variables, I said, if you declare a new variable without the var prefix, the browser will create a new variable for you? Well, that variable becomes a global variable even if you declare it inside a function. This can cause all sorts of confusion and is very bad practice. So, for scope control alone, you should always declare your variables using the var prefix.**
