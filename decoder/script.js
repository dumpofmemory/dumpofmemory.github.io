let textarea = document.querySelector('textarea');
let box1 = document.querySelector('#box1 > div');
let container = document.querySelector('.container');
let boxes = document.querySelector('.boxes');
let box2 = document.querySelector('#box2 > div');
let h3 = document.querySelectorAll('h3');
let base64Button = document.getElementById('base64');
let hexButton = document.getElementById('hex');
let textareaContents = '';
box1.innerText = 'Nothing to decode...';
box2.innerText = 'Nothing to decode...';

function clearAllFields() {
  textareaContents = '';
  box1.innerText = 'Nothing to decode...';
  box2.innerText = 'Nothing to decode...';
}

function b64DecodeUnicode(str) {
  return urlBase64Decode(str)
}

function urlBase64Decode(str) { // From https://jwt.io/js/jwt.js
  var output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      var b64 =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

      window.atob = function (string) {
        // atob can work with strings with whitespaces, even inside the encoded part,
        // but only \t, \n, \f, \r and ' ', which can be stripped.
        string = String(string).replace(/[\\\t\n\f\r ]+/g, "");
        if (!b64re.test(string))
          throw new TypeError(
            "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
          );

        // Adding the padding if missing
        string += "==".slice(2 - (string.length & 3));
        var bitmap,
          result = "",
          r1,
          r2,
          i = 0;
        for (; i < string.length; ) {
          bitmap =
            (b64.indexOf(string.charAt(i++)) << 18) |
            (b64.indexOf(string.charAt(i++)) << 12) |
            ((r1 = b64.indexOf(string.charAt(i++))) << 6) |
            (r2 = b64.indexOf(string.charAt(i++)));

          result +=
            r1 === 64
              ? String.fromCharCode((bitmap >> 16) & 255)
              : r2 === 64
              ? String.fromCharCode((bitmap >> 16) & 255, (bitmap >> 8) & 255)
              : String.fromCharCode(
                  (bitmap >> 16) & 255,
                  (bitmap >> 8) & 255,
                  bitmap & 255
                );
        }
        return result;
      };
  }
  var result = window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
  try{
    return decodeURIComponent(escape(result));
  } catch (err) {
    console.log(err);
    return escape(result);
  }
}

function base16decoder(hexstr) {
  let hex = hexstr.toString();
  let decoded = '';

  for (let n = 0; n < hex.length; n += 2) {
    decoded += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }

  escapedResult = encodeURI(decoded).replace(/(%\S{1,2}\d*)/g, '.');
  return escape(escapedResult);
}

textarea.addEventListener('input', () => {
  textareaContents = textarea.value;
  if(!textareaContents && box1 && box2) {
    box1.innerText = "Nothing to decode...";
    box2.innerText = "Nothing to decode...";
  }
});

base64Button.addEventListener('click', () => {
  if (textareaContents) {
    box1.innerHTML = b64DecodeUnicode(textareaContents);
    box2.innerHTML = b64DecodeUnicode(textareaContents).replace(/[^\x00-\x7F]/g, "");
  } else  {
    box1.innerText = 'Nothing to decode...';
    box2.innerText = 'Nothing to decode...';
  }
});


hexButton.addEventListener('click', () => {
  console.log(textareaContents)
  if (textareaContents.length) {

    box1.innerText = base16decoder(textareaContents);
    if (box2.textContent.length) {
      box2.innerText = 'Nothing to decode...';
    }  
  }
  else {
    box1.innerText = 'Nothing to decode...';
  }
});

  boxes.addEventListener('click', event => {
    if (event.target == box1) {
      window.getSelection().selectAllChildren(box1);
    }
    if (event.target == box2) {
      window.getSelection().selectAllChildren(box2);
    }
    try {
      var copyResult = document.execCommand('copy');
      var msg = copyResult ? 'success' : 'failed';
      console.log('copy ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
