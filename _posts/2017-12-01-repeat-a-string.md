---
layout: post
title: Repeat a string repeat a string
categories: freeCodeCamp
---

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

```javascript
function repeatStringNumTimes(str, num) {
  // repeat after me

var i = 0;
var temp = "";
while(i < num){
  temp += str;
  i++;

}
str = temp;
console.log(str);
  return str;
}

repeatStringNumTimes("abc", 3);
```
