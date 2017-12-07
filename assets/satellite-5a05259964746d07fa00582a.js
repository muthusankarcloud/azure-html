_satellite.pushAsyncScript(function(event, target, $variables){
  /* START: Check first element in array for special pagetypes */
function getPageType(pathname) {
  var pagetypes = [];
  var pagetype = pathname.split("/")[1]; // create array and get first element in array
  switch (pagetype) {
    case "store":
      pagetypes = [
        { key: "-tier3contactlens", value: "index" },
        { key: "-tier3", value: "index" },
        { key: "-tier2clense", value: "Tier2" },
        { key: "-tier2general", value: "Tier2" },
        { key: "-tier1", value: "Tier1" },
        { key: "-product", value: "product" },
        { key: "/category/productlist.jsp", value: "index" },
        { key: "/catalog/shopLanding", value: "ShopLanding" },
        { key: "/checkout/cart.jsp", value: "cart" },
        { key: "/checkout/", value: "checkout" }
      ];
      break;
    case "offers":
      pagetypes = [{ key: "/offers/offers.jsp", value: "PaperlessCoupons" }];
      break;
    case "search":
      pagetypes = [{ key: "/search/results.jsp", value: "index" }];
      break;
    case "pharmacy":
      pagetypes = [
        {
          key: "/pharmacy/prescriptioncheckout_confirmation.jsp",
          value: "RxPurchase"
        },
        { key: "/pharmacy/leancheckout_confirmation.jsp", value: "RxPurchase" }
      ];
      break;
    case "":
      pagetypes = [
        { key: "smile.walgreens.com", value: "smile" },
        { key: "developer.walgreens.com", value: "developer" },
        { key: "jobs.walgreens.com", value: "jobs" },
        { key: "", value: "main" }
      ];
      break;
    default:
      pagetypes = [
        { key: "/login.jsp", value: "signInRegister" },
        { key: "/logout.jsp", value: "logout" },
        { key: "/servererror.jsp", value: "servererror" }
      ];
      break;
  }

  if (pagetypes.length > 0) {
    for (var i in pagetypes) {
      var regex = new RegExp(pagetypes[i].key);
      if (regex.test(pathname)) {
        pagetype = pagetypes[i].value;
        break;
      }
    }
  }
  return pagetype;
}
/* END: Check first element in array for special pagetypes */

try {
  var pathname = window.location.pathname;
  var pagetype = getPageType(pathname);
  console.log("pagetype: " + pagetype);
  window.monetateQ = window.monetateQ || [];
  window.monetateQ.push(["setPageType", pagetype]);
  window.monetateQ.push(["trackData"]);
} catch (err) {
  console.log("An error has occurred: " + err.message);
}

});
