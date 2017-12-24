---
layout: post
title:  "Mutations"
categories: freeCodeCamp
---

## String.prototype.indexOf()

The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

```javascript
function mutation(arr) {
  var newAra = [];

  //loop through the array
  //show words
  for (var i = 0; i < arr.length; i++) {
    newAra.push(arr[i].toLowerCase());
  }
  console.log(newAra);


// checking if a specific string exists within another string
  if (newAra[0].indexOf(newAra[1]) !== -1) {
    console.log("true");
  } else {
    console.log("false");
  }

}

mutation(["hello: ", "Hello"]);
mutation(["Alien", "line"]);
mutation(["hello", "hey"]);

```

---

## Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

### Basic Code Solution: Procedural

```javascript

function mutation(arr) {
// test will hold what we are looking for in target
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  // loop through our test characters
  //and if any of them is not found we return false
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) === -1)
      return false;
  }
  return true;
 }
 ```

```javascript
function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for (i=0;i<second.length;i++) {
    if (first.indexOf(second[i]) === -1)
      console.log("false");
  }
  console.log("true");
 }
 mutation(["hello: ", "Hello"]);
 mutation(["Alien", "line"]);
 mutation(["hello", "hey"]);
```


 ### Intermediate Code Solution: Declarative

```javascript
 function mutation(arr) {
   return arr[1].toLowerCase()
     .split('')
     .every(function(letter) {
       return arr[0].toLowerCase()
         .indexOf(letter) !== -1;
     });
 }
 ```
