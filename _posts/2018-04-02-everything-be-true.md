---
layout: post
title: Everything Be True
categories: freeCodeCamp
---
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either <code>dot notation</code> or <code>[] notation</code>.

> A truthy value is a value that translates to true when evaluated in a Boolean context.

> All values are truthy unless they are defined as falsy (i.e. except for false, 0, "", null, undefined and NaN).


```javascript

function truthCheck(collection, pre) {
  var count=0;
  var res = true;

  for (var i in collection) {
    // console.log(collection[i]);
    var obj = collection[i];

    console.log(obj);

    //check if each individual object of the tested array has a pre (or second argument) in place
    if (obj.hasOwnProperty(pre)) {
      var target = obj[pre];

      if(Boolean(target)) {
//         console.log("checking if its true");
//         console.log(Boolean(target));
        res = Boolean(target);
      }
      else {
        console.log("checking if its false");
        console.log(Boolean(target));
        // res = Boolean(target);
        count++;

      }

} else {

  count++;

}

  }
  if(count > 0) {
//     console.log("this object has one or more false");
    res = !res;
  } else {
//     console.log("this object has all true");
    res = res;
  }
console.log(res);
  return res;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); //should return true.

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); //should return false.

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"); //should return false.

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"); //should return false

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); //should return true

truthCheck([{"single": "yes"}], "single"); //should return  true
truthCheck([{"single": ""}, {"single": "double"}], "single"); //should return false

truthCheck([{"single": "double"}, {"single": undefined}], "single"); //should return false

truthCheck([{"single": "double"}, {"single": NaN}], "single"); //should return false


```
