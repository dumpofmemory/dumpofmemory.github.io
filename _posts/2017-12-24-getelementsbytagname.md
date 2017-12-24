---
layout: post
title:  "Modifying elements with getElementsByTagName"
categories: javascript
---

To modify a group of elements use getElementsByTagName:

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
		var modify = document.getElementsByTagName('li');
		for (var i = 0; i < modify.length; i++) {
			modify[i].innerHTML = request.responseText;			
		}
	}
}
request.send();
```
