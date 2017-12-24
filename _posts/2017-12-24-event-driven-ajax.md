---
layout: post
title:  "Using event-driven AJAX"
categories: javascript
---

()[https://www.w3schools.com/tags/ref_eventattributes.asp]

So right now this script is executing whenever it gets to it in the index.html file, which is at the very end. So this page loads and then the script runs right here, so all this is executing right then. So what we'll do is prevent that from happening, by putting everything inside a function. Now, in order for the code to be executed the function must be called.

```
<body>
<button onclick="loadAJAX();">Load</button>
<div id="update"></div>
<script src="script.js"></script> <!-- here -->
</body>
```

So one of the ways to call a function is by creating a trigger. So I'm going to add a button here and I'll call this button Load, and I'm going to do an *onclick* event here, and it looks just like an attribute. And then I'll put LoadAJAX, which will call the function we created in JavaScript.
And when we click on it, it should load the text from our file. Of course there's more events that you can use. For example, you can see if somebody has placed the mouse over the button. So we can do that with a different kind of event here; sometimes these are called event handlers.



```javascript
function loadAJAX(){
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
}
```

So events can be triggered either as attributes, like we have done right here, and they can also be triggered directly through JavaScript.

```
<body>
<button id="loadbutton">Load</button>
<div id="update"></div>
<script src="script.js"></script>
</body>
```

```javascript
var mybutton = document.getElementById('loadbutton');
mybutton.onclick = function() {
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
} // loadAJAX
```
or

```javascript
var mybutton = document.getElementById('loadbutton');
mybutton.onclick = loadAJAX;

function loadAJAX() {
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
} // loadAJAX
