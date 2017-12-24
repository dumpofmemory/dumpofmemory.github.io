---
layout: post
title:  "Making requests asynchronous"
categories: javascript
---

So AJAX requests are supposed to be asynchronous by nature, which means that they should run in the background independently of other events.

There's an event that we're interested in called **onreadystatechange**. The browser's AJAX API maintains a property called **readyState** that has a number indicating how far along the request has progressed.

If the Value is 0, for example, then the request hasn't been sent yet. Once the value of that property reaches 4, then the operation of sending and receiving the requests has been completed. So what we want to do is modify our code so that it checks the status of this property.
If readyState has the value of 4, then our asynchronous request has been received and we can do something with the data we get back.

![](https://github.com/dumpofmemory/blog/blob/gh-pages/img/Screen%20Shot%202017-12-23%20at%2022.54.40.png?raw=true)

First, before we send our request, we want to change our open method and take out the false parameter at the end. We could send a Boolean value of true, but this is the default and so we don't really need to pass it.

```javascript
var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();
```

This is an honest-to-goodness proper AJAX request. It sends a request to our server and then waits for that request to come back at some point; that's called asynchronously.
If you want to learn more about the XHR requests, take a look at this document from Mozilla [https://developer.mozilla.org/en-US/docs/DOM/XMLhttpRequest]. It's a good resource to see all of the different options available in XHR requests.
