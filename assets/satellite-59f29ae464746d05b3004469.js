_satellite.pushBlockingScript(function(event, target, $variables){
  $(".wag-vpd-cl-cont-addition .wag-vpd-cl-hdr").html('Addition');// FOr CL VPD IN REACT, Remove on 11/15/2017 
try {

  var canonical = $("link[rel='canonical']").attr("href").split("ID=")[1];
  var productIdVPD = canonical.split("-product")[0] || "";

  /*Monetate trigger*/
  window.monetateQ = window.monetateQ || [];
  window.monetateQ.push(["setPageType", "product"]);
  window.monetateQ.push(["trackData"]);
  /*Monetate trigger*/

} catch(err) {
  console.log("An error has occurred: " + err);
}
});
