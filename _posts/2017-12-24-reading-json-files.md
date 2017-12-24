---
layout: post
title:  "Reading JSON files"
categories: javascript
---

Although AJAX was designed to work with files in the XML format, it will read the contents of any text file. So the data can really be in any format; the trick is to know how to parse or translate the data into objects that JavaScript can manipulate. An obvious choice is to use the file in the JSON format. JASON stands for JavaScript Object Notation, and is a way to structure data so that it can be easily converted to a JavaScript object.

```javascript
var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var items = JSON.parse(request.responseText);
		var output = '<ul>';
		for (var key in items) {
			output += '<li>' + items[key].name + '</li>';
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
}
request.send();
```
So here's the bad news: JSON parse is not available in some older browsers. So, if you go to this website, you could see that it's available in most modern browsers, but a lot of the older versions of IE do not support the parse command. So your options are to use EVAL--but that has some security issues--write your own parser, or use an existing library. jQuery for example, takes care of this very well.
