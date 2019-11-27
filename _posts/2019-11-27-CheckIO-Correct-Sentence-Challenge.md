---
layout: post
title: topic
categories: CheckiO
---





Check out this code:
```javascript
function correctSentence(text) {
    // returns a corrected sentence which starts with capital letter
    // and ends with dot.

    const lastCharacter = text.length - 1;

    if(text[0] !== text[0].toUpperCase()) {
      text = text.replace(text[0], text[0].toUpperCase());
    }

    if(text[lastCharacter] !== ".") {
      return text += "."
    }
    // your code here
    return text;
}

console.log(correctSentence("greetings, friends"))
console.log(correctSentence("greetings, friends"), "Greetings, friends.")
console.log(correctSentence("Greetings, friends"), "Greetings, friends.")
console.log(correctSentence("Greetings, friends."), "Greetings, friends.")
console.log(correctSentence("hi"), "Hi.")
console.log(correctSentence("welcome to New York"), "Welcome to New York.")
```




## Task


```javascript


```

### Task Conditions to be satisfied



## Solution
```javascript

```

### Notes
