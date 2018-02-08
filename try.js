var url="https://prod.iris.yahoo.com/prod/rpc?v=8&crumb=";
var fetch= new XMLHttpRequest();
fetch.onreadystatechange= function(){
if(fetch.readyState == fetch.DONE) {
request_data = JSON.parse(fetch.responseText);
  var crumb= request_data.crumb;
  alert(crumb);

}
}
fetch.open("post",url,false);
fetch.withCredentials = true;
fetch.setRequestHeader("Content-Type", "application/json");
fetch.send('{"msg":"OpenSession","device":{"kind":"web","identifier":"AAAAAAAAAAAAAAAAAAA"},"auth":{"provider":"signin"},"version":{"platform":"web","app":"iris/dogfood","appVersion":1579},"batch":[],"appId":"messenger","locale":"en-IN"}');
