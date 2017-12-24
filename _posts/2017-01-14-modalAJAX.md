---
layout: post
title:  "Loading Content in Modal Body via AJAX"
categories: javascript
---

```javascript
jQuery(document).ready(function($) {
  $('[data-toggle="ajaxModal"]').on('click',
              function(e) {
                $('#ajaxModal').remove();
                e.preventDefault();
                var $this = $(this)
                  , $remote = $this.data('remote') || $this.attr('href')
                  , $modal = $('<div class="modal" id="ajaxModal"><div class="modal-body"></div></div>');
                $('body').append($modal);
                $modal.modal({backdrop: 'static', keyboard: false});
                $modal.load($remote);
              }
            );
   });
```
http://stackoverflow.com/questions/19663555/bootstrap-3-how-to-load-content-in-modal-body-via-ajax
