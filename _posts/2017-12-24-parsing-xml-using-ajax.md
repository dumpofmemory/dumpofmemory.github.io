---
layout: post
title:  "Parsing XML using AJAX"
categories: javascript
---

Reading XML data into JavaScript is super simple. As a matter of fact, the XHR object comes with a special attribute called **responseXML**. It's sort of like the responseText property, except that it converts the data into an object that you can manipulate through JavaScript.

The XML object is really easy to go through. We can use the getElementsByTagName with an HTML or an XML document.

```javascript
if ((request.readyState===4) && (request.status===200)) {
	console.log(request.responseXML.getElementsByTagName('name')[1]);
}
```

And what we get back is the entire <name> tag of that XML node.
So every element inside an XML structure is considered a node.
Elements inside other elements, including the text inside an element, is also considered a node.
So, to get to the text of this node we could use this.

```javascript
	console.log(request.responseXML.getElementsByTagName('name')[1].childNodes[0]);
```
You can see that we are getting the name. It still has quotes which is not exactly correct, but at least we are not getting the tag anymore.

So there is actually a shortcut for the first element in any array, and it's called *firstChild*. So if we do this, it's the same as writing *.childNodes[0]*.

So if you look at what we get, it's the value in quotes, and it's not exactly the text of the node. To get that we would have to use the *nodeValue* property like this.

```javascript
console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);
```

and now we get just the text without the quotes.

So, let's see what it will take to make a list of our speakers.

We'll have to cycle through the XML file using a for loop.
When the request is ready we'll create a variable that looks for the elements with a tag of name. Then we are going to create an output variable with an unordered list. Inside this, we are going to create a loop. And here we'll go ahead and add the value of each result as list items.

Now we will send the results of all this to our div with a value of update.  

```javascript
var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

		var items = request.responseXML.getElementsByTagName('name');
		var output = '<ul>';
		for (var i = 0; i < items.length; i++) {
			output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
}
request.send();
```
So, although you can read data in any format besides XML, the AJAX API was designed with an easy-to-use responseXML property that makes it a trivial matter to read and parse XML files.
