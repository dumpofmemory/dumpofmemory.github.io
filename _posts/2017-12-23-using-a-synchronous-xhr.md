---
layout: post
title:  "Using a synchronous XHR"
categories: javascript
---

The first step in working with AJAX is to learn about the API browsers provide for sending and retrieving information.
The way you access the API is by using a XML HTTP request or XHR object.

File structure:

- index.html:

```html
<head>
	<meta charset="utf-8" />
	<title>JavaScript AJAX</title>
</head>
<body>
<script src="script.js"></script>
</body>
```

- data.txt:
This file is just going to have the words "Hello world!"

- script.js:
Creating the simplest of XHR requests. We'll need to create a new variable for the object that we're creating. Next, we need to create the request to our XHR object. The open function of this object is going to require three parameters.

First, the method, which is going to be either GET or POST. Then the location of the data file. Since it's in the same folder as this document, it will just be the name of the file. I should note here that AJAX requests have what's called a same domain policy, so you cannot request data objects from domains other than the one you're currently on. Now, the last parameter we pass is a Boolean that specifies whether we want the request to be asynchronous or not. To keep things simple, we're making that false, and that makes a request a synchronous request.

This makes our browser wait until the request is done before it does anything else, and this is generally a bad idea, but this is going to make our code simpler for now. So we've created this request, but it hasn't gone to the server yet. The send command is going to take care of that.

Now, you can see that text from the file that was loaded in the response and responseText properties. The responseText property is what you want to use because it always has just the text of our response.

So let's go ahead and output that to our document with the writeln command.

And now we can see the text Hello World appear in our browser.

So I mentioned before that these requests we're making are synchronous and that means the server is waiting until the requests are done before it continues. Right now you really can't see that as a problem, because we're only making a single request. So I'm going to change the code and make 100 requests to the server to see what would happen.

reload the page, and you'll see all the requests being made because I have the console open right now. You can see that there's nothing appearing in my browser until it finishes with all the requests. If you take a look at the Network tab in the Developer Tools in Chrome, you can actually see that the browser is executing the requests in sequence and that the page is not even updating until the whole thing is done, and that's not necessarily a good thing.

So use the XMLhttpRequest object to make calls and request data from your server. You start by opening a connection and then sending the data. You can check the status of your requests, as well as access the text returned by your request and do something with that, like writing it to your page.

```javascript
for (var i = 0; i < 100; i++) {
	var request = new XMLHttpRequest();
	request.open('GET', 'data.txt', false);
	request.send();
	if (request.status===200) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
```
