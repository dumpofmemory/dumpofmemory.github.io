---
layout: post
title:  "Confirm the ending"
categories: freeCodeCamp
---

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

---
> There's a subtle difference between the substring() and substr() methods, and you should be careful not get them confused.

> Where the arguments of the substring() method represent the starting and ending indexes, the arguments of substr() method represent the starting index and the length of characters to include in the resulting string.

```javascript
var text = 'Mozilla';
console.log(text.substring(2,5)); // => "zil"
console.log(text.substr(2,3)); // => "zil"
```

---


```javascript
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var newStr = str.substr(str.length - target.length);

  if(newStr == target){
    str=true;
  }
  else {
    str=false;
  }
  return str;
}

confirmEnding("Bastian", "n");
```
