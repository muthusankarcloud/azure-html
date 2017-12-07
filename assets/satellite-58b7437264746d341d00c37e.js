_satellite.pushAsyncScript(function(event, target, $variables){
  function loadAdvertiseScript(src, callback) {
	var advertiseScript = document.createElement('script');
	advertiseScript.src = src;
	advertiseScript.type = 'text/javascript';
	advertiseScript.onreadystatechange = advertiseScript.onerror = function() {
    var state = advertiseScript.readyState;
    if (!callback.done && (!state || /loaded|complete/.test(state))) {
			callback.done = true;
			callback();
		}
	};
	document.body.appendChild(advertiseScript);
}
loadAdvertiseScript('/share/jslib/custom/advertise.js', function() {
	if (window.isAdvertiseJSBlocked === undefined) {
		$(document).trigger("triggerDTM", "WAG_Ad_Blocker_EVAR83");
	}
});
});
