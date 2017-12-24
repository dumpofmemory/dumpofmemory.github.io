---
layout: post
title:  "jQuery UI Modal"
categories: javascript
---

A handy soluition for adding modal popups to your website.

```html
<body>
<p><a name="Test" href="test2.html">Click Here!</a></p>
<div id="modal"></div>

<!-- jQuery -->
<script src="js/jquery-1.11.1.js"></script>    
<script src="http://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
</body>
```

```javascript
jQuery(document).ready(function ($) {
  $(function() {
    $('a[name=Test]').on('click', function(e){
      e.preventDefault();
      $('#modal').load(this.href).dialog({ modal : true });
    });
  });
});
```
