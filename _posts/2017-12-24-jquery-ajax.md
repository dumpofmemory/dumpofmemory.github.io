---
layout: post
title:  "jQuery AJAX"
categories: javascript
---

jQuery is a framework that fixes compatibility issues that happen with JavaScript in older browsers. The library also gives you a lot of additional tools for working with the DOM and makes it easy to work with AJAX.
jQuery is taking care of a lot of problems with backwards compatibility in older browsers, and it also creates and sends the XHR request.

Use jQuery's load method to load some text from an external source:
```javascript
$('#update:even').load('data.txt');
```
If you're looking to load structured data, jQuery has a method called getJSON. As the name implies, it's designed to load data in the JSON format.

So in our script file we'll start off by calling the getJSON method. We'll pass it along the file name that we want to load and then we'll create a function. This would be a function literal so it will have no name. And we want to pass along the data that we get from the getJSON command into this function. So let's go ahead and output the data to our console so we can take a look at it.

```javascript
$.getJSON('data.json', function(data) {
	console.log(data);
//And that should give you a list or an array of objects.
//And if we open that up, we can see that each one of those objects has
//name and value pairs with different parameters here. And this is
//essentially how a JSON object looks to your browser.
});
```

So instead of using the for-in JavaScript loop, I'm going to use jQuery's built-in Each statement. I'm going to pass along the data and then a function literal. And that function literal is going to have a couple of variables: one of them called key and the other one called value. So this is similar to using a for-in statement, but a little better because jQuery always tries to do a great job of dealing with browser and platform issues.

```javascript
$.getJSON('data.json', function(data) {
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>' + val.name + '</li>';
	});
	output +='</ul>';
	$('#update').prepend(output);
});
```

When you have a choice, it's always better to use the built-in functions. So in here I'm going to modify my output variable, and I'll output a list item, and I'm going to use the value variable and pass along the name and close out my list item.
So where am I getting this name from? That's actually from the list of objects and the name of value pairs that I get right here. So the name is right here for each one of these objects.

![](https://github.com/dumpofmemory/dumpofmemory.github.io/blob/master/img/Screen%20Shot%202017-12-24%20at%2018.58.45.png?raw=true)

To update the HTML, we need to use the jQuery HTML method. So I want to target our update div and then change the HTML to have the output that we created above.

```javascript
$('#update').html(output);
```

So jQuery also provides additional methods to manage your data.
Let's say, for example, that instead of just replacing all the HTML inside a tag, we wanted to append some HTML to the end of our list.

So let's modify our HTML so that we already have something in this div id update. So I'll just create an h1 tag right here and I'll call it Speakers.

```
<div id="update">
	<h1>Speakers</h1>
</div>
```

So if we were to run this right now, you would see the Speakers in the text and it would disappear and get replaced with this list. But instead of just replacing the HTML, we can actually do stuff like append the HTML, just with an append method right here.

```javascript
$('#update').prepend(output);
```
