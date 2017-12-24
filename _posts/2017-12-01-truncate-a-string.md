---
layout: post
title:  "Truncate a string"
categories: freeCodeCamp
---

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

```javascript
function truncateString(str, num) {
  // Clear out that junk in your trunk

  // truncate a str if it is longer
  // than the given max string length

  if (str.length > num) {
    var truncated = str.substring(0, num - 3) + "...";
    // if the given maximum string length num
    // is less than or equal to 3, then
    // the addition of the three dots does not
    // add to the string length in determining
    // the truncated string.

    if (num < 3) {
      truncated = str.substring(0, num) + "...";
    }
    str = truncated;
  }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
```
