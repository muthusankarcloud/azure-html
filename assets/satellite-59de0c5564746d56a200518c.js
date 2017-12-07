_satellite.pushAsyncScript(function(event, target, $variables){
  if (window.location.pathname === '/offers/offers.jsp/weeklyad') {
	s.pageName = "Weekly Ad | Walgreens";
} else {
	s.pageName = "Paperless Coupon | Walgreens";
}
});
