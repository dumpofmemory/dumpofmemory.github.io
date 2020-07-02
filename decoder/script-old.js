let textarea = document.querySelector('textarea');
let box1 = document.querySelector('#box1');
let container = document.querySelector('.container');
let box2 = document.querySelector('#box2');
let h3 = document.querySelectorAll('h3');
let base64Button = document.getElementById('base64');
let hexButton = document.getElementById('hex');

box1.innerText = '';
box2.innerText = '';

function clearAllFields() {
  box1.innerText = '';
  textarea.value = '';
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(
    Array.prototype.map
      .call(atob(decodeURIComponent(str)), function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}

function base16decoder(hexstr) {
  let hex = hexstr.toString();
  let decoded = '';

  for (let n = 0; n < hex.length; n += 2) {
    decoded += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }

  escapedResult = encodeURI(decoded).replace(/(%\S{1,2}\d*)/g, '.');
  return escapedResult;
}

base64Button.addEventListener('click', () => {
  let contents = textarea.value;

  if(box1.innerText.length) {
    clearAllFields();
  }

  if(contents.length) {
    let content  = textarea.value;
    console.log(content)
    box1.innerHTML = b64DecodeUnicode(content);
    box2.value = b64DecodeUnicode(textarea.value).replace(/[^\x00-\x7F]/g, "");
  } else  {
    box1.innerText = '';
  }
});


hexButton.addEventListener('click', () => {
  let contents = textarea.value;

  if (box1.innerHTML.length) {
    box1.innerText = '';
    textarea.value = '';
  }

  if (contents.length) {
    let content = textarea.value;
    console.log(content)
    box1.textContent = base16decoder(content);
  }
});

container.addEventListener("click", function () {
  window.getSelection().selectAllChildren(box1);

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('copy text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
