---
layout: post
title: DNA Pairing
categories: freeCodeCamp
---
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


```javascript
function pairElement(str) {
  var near = [];
  var arrayofChr = [];

  for (var i = 0; i < str.length; i++) {
    arrayofChr.push(str[i]);
    console.log(arrayofChr);
  }

  for (var j = 0; j < arrayofChr.length; j++) {
    switch (arrayofChr[j]) {
      case "G":
        near.push(["G", "C"]);
        break;
      case "C":
        near.push(["C", "G"]);
        break;
      case "A":
        near.push(["A", "T"]);
        break;
      case "T":
        near.push(["T", "A"]);
        break;
    }

  }
  console.log(near);
  // return near;
}

pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

```
