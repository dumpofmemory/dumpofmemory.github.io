---
layout: post
title: getDuplicates in Array JS function
categories: javascript
---

###  returns an object where the keys are the duplicate entries and the values are an array with their indices

```javascript
Array.prototype.getDuplicates = function () {
    var duplicates = {};
    for (var i = 0; i < this.length; i++) {
        if(duplicates.hasOwnProperty(this[i])) {
            duplicates[this[i]].push(i);
        } else if (this.lastIndexOf(this[i]) !== i) {
            duplicates[this[i]] = [i];
        }
    }

    return duplicates;
};
//It returns an object where the keys are the duplicate entries and the values are an array with their indices, i.e.

//["abc","def","abc"].getDuplicates() -> { "abc": [0, 2] }
```
