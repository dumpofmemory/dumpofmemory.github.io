---
layout: post
title:  "Updating the DOM with getElementById"
categories: javascript
---

AJAX uses JavaScript to make changes to the current document through something called the DOM. This is the Document Object Model, and its job is to keep track of the structure of our HTML document. When you work with AJAX it's usually because you want to change something in your page after it has loaded. The easiest way to make a change in the DOM is through a JavaScript method called getElementByID.

in index.html add an element with an ID:
```
<head>
	<meta charset="utf-8" />
	<title>JavaScript AJAX</title>
</head>
<body>
<h1>AJAX page</h1>
<div id="update"></div>
<script src="script.js"></script>
</body>
```

in script.js modify that element:
```javascript
var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var modify = document.getElementById('update');
		modify.innerHTML = request.responseText;
	}
}
request.send();
```
