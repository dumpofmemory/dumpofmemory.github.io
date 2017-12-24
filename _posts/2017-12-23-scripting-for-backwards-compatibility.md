---
layout: post
title:  "Scripting for backwards compatibility"
categories: javascript
---

Although usage of early versions of Internet Explorer have dropped dramatically in the last few years, it's still important to know how to run AJAX requests that are compatible with those systems. And actually, the whole concept behind XHR requests was created by Microsoft and implemented first in a browser in IE5. To accomplish this, Microsoft used a technology called ActiveX. Because ActiveX was not available to other browsers like Safari, Firefox, and Chrome, they created a different implementation of the API using the XMLHttpRequest object.

Since ActiveX was seen as a proprietary implementation, the XMLHttpRequest object became the standard. So like with a lot of other web technologies, we've ended up with a fragmented implementation when trying to support older browsers. Luckily, all we have to do to support these browsers is to check if the browser API has an XHR object.

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
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();
```

So even though you might not run into a situation in which you have to support really old browsers, it's good to know that doing it takes just a few lines of code.
