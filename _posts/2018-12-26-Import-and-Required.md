---
layout: post
title: ES6 Understand the Differences Between import and require
categories: freeCodeCamp
---

In the past, the function <code>require()</code> would be used to import the functions and code in external files and modules. While handy, this presents a problem: some files and modules are rather large, and you may only need certain code from those external resources.

ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.

Consider the following example. Imagine that <code>math_array_functions</code> has about 20 functions, but I only need one, <code>countItems</code>, in my current file. The old <code>require()</code> approach would force me to bring in all 20 functions. With this new <code>import</code> syntax, I can bring in just the desired function, like so:


```javascript
import { countItems } from "math_array_functions"
```

A description of the above code:
```javascript
import { function } from "file_path_goes_here"
// We can also import variables the same way!
```

There are a few ways to write an <code>import</code> statement, but the above is a very common use-case.

### Note
The whitespace surrounding the function inside the curly braces is a best practice - it makes it easier to read the <code>import</code> statement.

### Note
The lessons in this section handle non-browser features. <code>import</code>, and the statements we introduce in the rest of these lessons, won't work on a browser directly. However, we can use various tools to create code out of this to make it work in browser.

### Note
In most cases, the file path requires a <code>./</code> before it; otherwise, node will look in the <code>node_modules</code> directory first trying to load it as a dependency.

## Task
Add the appropriate <code>import</code> statement that will allow the current file to use the <code>capitalizeString</code> function. The file where this function lives is called <code>"string_functions"</code>, and it is in the same directory as the current file.

```javascript

"use strict";
capitalizeString("hello!");

```

### Task Conditions to be satisfied
- valid <code>import</code> statement


## Solution
```javascript

import { capitalizeString } from "string_functions";

"use strict";
capitalizeString("hello!");

```

### Notes

---

# ES6: Use * to Import Everything from a File

Suppose you have a file that you wish to import all of its contents into the current file. This can be done with the *import* syntax.

Here's an example where the contents of a file named <code>"math_functions"</code> are imported into a file in the same directory:

```javascript
import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

And breaking down that code:
```javascript
import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function
```

You may use any name following the <code>import * as</code> portion of the statement. In order to utilize this method, it requires an object that receives the imported values. From here, you will use the dot notation to call your imported values.

## Task
The code below requires the contents of a file, <code>"capitalize_strings"</code>, found in the same directory as it, imported. Add the appropriate <code>import *</code> statement to the top of the file, using the object provided.

## Solution

```javascript
"use strict";

import * as captStrings from "capitalize_strings";
```
