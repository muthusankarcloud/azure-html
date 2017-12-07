_satellite.pushAsyncScript(function(event, target, $variables){
  function readCookieByName(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) === ' ') c = c.substring(1, c.length);
  if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}
// Instructions: please embed this snippet directly into every page in your website template.
// For optimal performance, this must be embedded directly into the template, not referenced
// as an external file.

// Answers Cloud Services Embed Script v1.02
// DO NOT MODIFY BELOW THIS LINE *****************************************
;var foreseeHostedCode = (function (g) {
  var d = document, i, am = d.createElement('script'), h = d.head || d.getElementsByTagName("head")[0],
      aex = {
        "src": "//gateway.answerscloud.com/walgreens/production/gateway.min.js",
        "type": "text/javascript",
        "async": "true",
        "data-vendor": "acs",
        "data-role": "gateway"
      };
  for (var attr in aex) { am.setAttribute(attr,aex[attr]); }
  h.appendChild(am);
  g['acsReady'] = function () {var aT = '__acsReady__', args = Array.prototype.slice.call(arguments, 0),k = setInterval(function () {if (typeof g[aT] === 'function') {clearInterval(k);for (i = 0; i < args.length; i++) {g[aT].call(g, function(fn) { return function() { setTimeout(fn, 1) };}(args[i]));}}}, 50);};
});
if(window.location.hostname === "www.walgreens.com"){
  if(readCookieByName('wag_int_acs') !== "true" || window.location.search.indexOf("loadforesee=true") > -1 ){
    foreseeHostedCode(window);
  }
} else { 
  foreseeHostedCode(window);  
}
});
