_satellite.pushAsyncScript(function(event, target, $variables){
  setTimeout(function(){var dtmSrc = window.location.protocol + "//login.dotomi.com/ucm/UCMController?"+
	"dtm_com=28&dtm_fid=101&dtm_cid=2623&dtm_cmagic=8e68c3&dtm_format=5";
    var dtmTag = new Array();
    dtmTag.cli_promo_id = "1";
		if(window.header && window.header.profileInfo && window.header.profileInfo.loggedIn === 'true' && window.header.profileInfo.loyaltyId){dtmTag.dtm_br_id = window.header.profileInfo.loyaltyId;}
    dtmTag.dtmc_ref = document.referrer;
    dtmTag.dtmc_loc = document.location.href;
    for (var item in dtmTag){
	    if(typeof dtmTag[item] != "function" && typeof dtmTag[item] != "object")
		    dtmSrc += "&" + item + "=" + escape(dtmTag[item]);
    }
    function timeOutDotomi() {document.getElementById("dtmdiv").innerHTML = "";}

  	setTimeout(function(){document.getElementById("dtmdiv").innerHTML = "";},3000);
    $('body').append('<div id="dtmdiv" style="display:none;">' +
    '<iframe name="response_frame" title="dotomi_ucm_controller" src="' + dtmSrc + '"></iframe></div>');
    
/*Monetate tracking*/
window.monetateQ = window.monetateQ || [];
window.monetateQ.push(["setPageType", "main"]);
window.monetateQ.push(["trackData"]);
/*Monetate tracking*/


/*Google remarketing*/
 var noSrpt  			= document.createElement('noscript');
 var imgtag  			= document.createElement('img');
 
 imgtag.style  		= "display:none;border-style:none;";
 imgtag.width  		= "1";
 imgtag.height 		= "1";
 imgtag.alt 			= "";
 
 var google_tag_params 	= '';
 
 google_tag_params = ("data.ecomm_prodid=&data.ecomm_pagetype=home&data.ecomm_totalvalue=");
 imgtag.src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1053606420/?value=0&guid=ON&script=0&"+google_tag_params;
 noSrpt.appendChild(imgtag);

 document.body.appendChild(noSrpt);

//fix for home page DTM
//_satellite.track("BAS_Global_Site_Catalyst");
/*Google remarketing*/
                     },50);

});
