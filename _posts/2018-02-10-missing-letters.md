---
layout: post
title: Missing Letters
categories: freeCodeCamp
---
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Here are some helpful links:
+ [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
+ [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)


```javascript
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

function fearNotLetter(str) {
  var near = [];
  var positionOfNewArrayValue;
  var alphabetValue;
  var newArrValue;
  var test = [];
  var next;
  var prev;
  var res;

  //======turn the string into array of chars
  for (var i = 0; i < str.length; i++) {
    near.push(str[i]);
  }
  //==============================

  for (var idx = 0; idx < near.length; idx++) {
    // the position of the near's values in the alphabet
    // console.log(alpha.indexOf(near[idx]));
    newArrValue = near[idx];


    positionOfNewArrayValue = alpha.indexOf(near[idx]);


    test.push(positionOfNewArrayValue);


  }

  console.log(test);

  for (var prev = 0; prev < test.length - 1; prev++) {
    prev = test[prev];
    console.log(prev + " prev");
  }
  for (var next = 1; next <= test.length - 1; next++) {

    next = test[next];
    console.log(next + " next");

  }
  res = next - prev;

  if (res != 1) {
    // loop through alphabet
    for (var j = 0; j < alpha.length; j++) {
      alphabetValue = alpha[j];

      if (near.indexOf(alphabetValue) === -1) {
        console.log("missing letter: " + alphabetValue);
        str = alphabetValue;
        break;

      }
    }
  } else {
    str = undefined;
    // console.log("undefined");
  }

  console.log(str);
  // return asdf;


}

fearNotLetter("abce") //should return "d".
fearNotLetter("abcdefghjklmno") //should return "i".
fearNotLetter("bcd") //should return undefined.
fearNotLetter("yz") //should return undefined.

```
