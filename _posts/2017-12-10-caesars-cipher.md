---
layout: post
title:  "Caesar's Cipher"
categories: freeCodeCamp
---

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


```javascript
rot13(str) {
  var near = [];
  var shift = 13;
  str = str.split("");

  var last = str[str.length - 1];


  var dict = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for (var i = 0; i < str.length; i++) {

    if (str[i] === " ") {
      near += " ";
    }

    for (var j = 0; j < dict.length; j++) {

      if (str[i] == dict[j]) {

        j += shift;
        if (j >= dict.length) {

          near += (dict[j - dict.length]);

        } else {
          near += (dict[j]);
        }

      }

    }

  }
  // near = near.replace(/\W_/g,"");
  if (last.charCodeAt() == 33 || last.charCodeAt() == 46 || last.charCodeAt() == 63) {
    // console.log(near + last);
    return near + last;
  } else {
    // console.log(near);
    return near;
  }
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
```

(how to create dictionary with key value pairs)[http://pietschsoft.com/post/2015/09/05/JavaScript-Basics-How-to-create-a-Dictionary-with-KeyValue-pairs
function]
