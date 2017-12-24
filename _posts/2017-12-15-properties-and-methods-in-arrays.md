---
layout: post
title:  "Properties and Methods in Arrays"
categories: javascript
---

Arrays are objects.
- In JavaScript, objects have properties and methods.
- Properties are pieces of meta information about the object we can retrieve and use.
- Methods are functions that belong to that object.


```JavaScript
var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
console.log("Array length: ", pens.length);

// METHODS:
// Reverse the array:
pens.reverse();

// Remove the first value of the array:
pens.shift();

// Add comma-separated list of values to the front of the array:
pens.unshift("purple", "black");

// Remove the last value of the array:
pens.pop();

// Add comma-separated list of values to the end of the array:
pens.push("pink", "prussian blue");

//******************************************************************************************************

//If you need to remove items in the middle of the array, let's say you want to take away this green item here. You can use the splice method. Splice takes two arguments, position and number. Position is the item you want to start from. So for instance if we want to remove green, we would start from position two. So one, two, that's blue. Number is the number of items you want to remove. In this case, one. So if I want to get rid of green in the middle of my array, I say position two.

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
pens.splice(pos, n) // Starts at the seccond item and removes two items.

console.log("After: ", pens);
//******************************************************************************************************
// Slice creates a copy of the array and then returns it to us and typically we would place it inside a variable, or use it directly in some sort of function. So here I've placed pens.slice in a new variable called newPens and console.log out newPens.

//So if you ever want to copy the contents of an array quickly to do something with it, slice is the method you want to use.


// Create a copy of an array. Typically assigned to a new variable:
var newPens = pens.slice();
console.log("New pens: ", newPens);
//******************************************************************************************************

//indexOf, gives us the index number for a specific search. So for example, if we want to search for the item that has the word orange in it and we want to search from a specific point within the array say maybe from the second or third position, we provide the search string in question and the index position we want to start the search from. So in this case, if I want to start from blue and then move forward, the index position is zero, one.

// So I would say one and run it. What we get in return is the index number for the result. So in this case, orange has the index number three because it's zero, one, two, three. I can now use this number for something else. Let's say I want the actual value of orange. I could then say the index position of, so I'll change that to the value is and then say pens and instead of placing the number inside this call for a specific position, I place result in there because result has been populated by the index number.

// Save that and we get orange. This example is kind of weird because I'm searching for the string and then I just get the string in return, but in a more advance setup, you would have more advanced data and this would work really well.

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
var result = pens.indexOf(search, index);
console.log("The search result index is: ", result);
//******************************************************************************************************

// Finally, we have join. This is the method you'll probably use the most. Join is a really useful method. It takes all the items in your array, join them together in a single string and separate them with a comma. So if I just take the separator out for now and run it, you'll see what we get is red comma blue comma green comma orange.

// So if you want to just output the contents of an array as a string in your HTML, join is the method you want to use. Now, you'll notice that the commas have no space after them, so if you want to use these as actual HTML, you probably want to change that separator. You can do that by changing it in the arguments here. So I'll say comma, space, save. Now we have a nicely comma separated list. You can also replace the comma with literally anything else, so maybe a pipe. Pipe separated list. Or a dash, dash separated list or ampersand, whatever you want.

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
var arrayString = pens.join(separator);
console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

```
