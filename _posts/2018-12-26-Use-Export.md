---
layout: post
title: ES6 Use export to Reuse a Code Block
categories: freeCodeCamp
---

In the previous challenge, you learned about <code>import</code> and how it can be leveraged to import small amounts of code from large files. In order for this to work, though, we must utilize one of the statements that goes with import, known as <code>export</code>. When we want some code - a function, or a variable - to be usable in another file, we must export it in order to import it into another file. Like <code>import</code>, <code>export</code> is a non-browser feature.

The following is what we refer to as a *named export*. With this, we can import any code we export into another file with the <code>import</code> syntax you learned in the last lesson. Here's an example:

```javascript
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.
```

Alternatively, if you would like to compact all your <code>export</code> statements into one line, you can take this approach:

```javascript
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
```

Either approach is perfectly acceptable.

## Task
Below are two variables that I want to make available for other files to use. Utilizing the first way I demonstrated <code>export</code>, export the two variables.

```javascript
"use strict";
const foo = "bar";
const bar = "foo"
```

### Task Conditions to be satisfied
- foo is exported.
- bar is exported.


## Solution
```javascript
"use strict";
export const foo = "bar";
export const bar = "foo";
```

### Notes



# [ES6] Create an Export Fallback with export default

In the <code>export</code> lesson, you learned about the syntax referred to as a named *export*. This allowed you to make multiple functions and variables available for use in other files.

There is another <code>export</code> syntax you need to know, known as *export default*. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Here is a quick example of <code>export default</code>:
```javascript
export default function add(x,y) {
  return x + y;
}
```

### Note
Since <code>export default</code> is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use <code>export default</code> with <code>var</code>, <code>let</code>, or <code>const</code>.

## Task
The following function should be the fallback value for the module. Please add the necessary code to do so.

```javascript
"use strict";
function subtract(x,y) {return x - y;}
```

### Task Conditions to be satisfied
- Proper used of <code>export<code> fallback.

## Solution
```javascript
"use strict";
export default function subtract(x,y) {return x - y;}
```



# [ES6] Import a Default Export

In the last challenge, you learned about <code>export default</code> and its uses. It is important to note that, to import a default export, you need to use a different <code>import<code> syntax.

In the following example, we have a function, <code>add</code>, that is the default export of a file, <code>"math_functions"</code>. Here is how to import it:

```javascript
import add from "math_functions";
add(5,4); //Will return 9
```

The syntax differs in one key place - the imported value, <code>add</code>, is not surrounded by curly braces, <code>{}</code>. Unlike exported values, the primary method of importing a default export is to simply write the value's name after <code>import</code>.

## Task
In the following code, please import the default export, <code>subtract</code>, from the file <code>"math_functions"</code>, found in the same directory as this file.

```javascript
"use strict";
subtract(7,4);
```

### Task Conditions to be satisfied
- Properly imports <code>export default</code> method.

## Solution
```javascript
"use strict";
import subtract from "math_functions";
subtract(7,4);
```
