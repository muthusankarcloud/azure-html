/** (c) Walgreen Co. All rights reserved.**/
$.ajaxSetup({
timeout: 30000, //Time in milliseconds
errorHandler: false,
cacheHandler: false
});
var https_urls = {
urls: ["/checkout/cart.jsp", "/optimizedcheckout/optimize_order_review.jsp", "/optimizedcheckout/ship_address.jsp", "/optimizedcheckout/payment_method.jsp", "/checkout/confirmorder_sdd.jsp", "/checkout/brmemberlookup.jsp", "/checkout/cl_customer_prescriber_info.jsp", "/checkout/cl_prescriber_search_results.jsp", "/clhistory/contactlenshist.jsp", "/orderstatus/order-history-details.jsp", "/orderstatus/orderstatus.jsp", "/orderstatus/orderstatusnew.jsp", "/orderstatus/purchase-history-details.jsp", "/checkout/bml_detail.jsp", "/autoreorder/ss_schedule_order_manager.jsp", "/checkout/selectpickuptimesdd.jsp", "login.jsp", "/logout.jsp", "/qrloyaltylanding.jsp", "/register/aarp_registration.jsp", "/register/loyalty_enroll.jsp", "/register/pharmacyRegistration.jsp", "/register/reg_confirmation.jsp", "/register/regOptions.jsp", "/register/regpersonalinfo.jsp", "/register/reviewconfirmation_single_match.jsp", "/register/reviewconfirmation.jsp", "/pharmacy/register/completePharmacyReg.jsp", "/pharmacy/register/confirmCompleteRxReg.jsp", "/pharmacy/register/pharmacyconfirmreg.jsp", "/youraccount/loyalty/loyalty_activity_detail.jsp", "/youraccount/loyalty/loyalty_landing.jsp", "/youraccount/loyalty/loyalty_points_earned.jsp", "/youraccount/loyalty/loyalty_rewards_settings.jsp", "/youraccount/aarp_membership_information.jsp", "/youraccount/communication_preferences.jsp", "/youraccount/default.jsp", "/youraccount/editemailaddress.jsp", "/youraccount/personal_information.jsp", "/youraccount/youraccount_upsellbanner.jsp", "/password/username_reset.jsp", "/password/password_reset.jsp", "/youraccount/addressbook/manage_address.jsp", "/topic/help/mobileandsocial.jsp", "/topic/help/accounthelp/account_help_main.jsp", "/topic/help/generalhelp/privacyandsecurity.jsp", "/shoplocal/shoplocal_confirmation.jsp", "/qr/invalid_link.jsp", "/password/create_securityquestion.jsp", "/password/reset_password.jsp", "/password/reset_securityquestion_dummy.jsp", "/password/reset_securityquestion.jsp", "/password/reset.jsp", "/password/resetpassword_answer.jsp", "/password/retrieve_username_confirmation.jsp", "/password/send.jsp", "/webmd/webmd_confirmation.jsp", "/pharmacy/familyaccount/addadult.jsp", "/pharmacy/familyaccount/addchild.jsp", "/pharmacy/familyaccount/addpet.jsp", "/pharmacy/familyaccount/authform_decline.jsp", "/pharmacy/familyaccount/authform.jsp", "/pharmacy/familyaccount/child_send_invite.jsp", "/pharmacy/familyaccount/manageaccountaccess.jsp", "/pharmacy/familyaccount/managefamilyaccounts.jsp", "/pharmacy/hippa/hipaa_disclaimer.jsp", "/oauth/device_confirmation.jsp", "/oauth/login.jsp", "/oauth/password_prompt.jsp", "/pharmacy/register/qr/refillreminder/completerxprofile.jsp", "/pharmacy/register/qr/refillreminder/rxsignin.jsp", "/pharmacy/register/qr/rxconfirmcancel.jsp","/youraccount/dlorder/reorder-old.jsp"]
};
var exclude_login_redirection = {
urls: ["/offers/offers.jsp", "/balancerewards/balance-rewards.jsp"]
};
var cac_configs = {
"handleIECache": true
};
var iso_svc_timeouts = {
"getCartInfo": 40000,
"submitOrderSuccess": 40000
};
var svc_timeouts = {

//CAC 
"getCartInfo": 20000,
"updateItem": 20000,
"proceedToCheckout": 20000,
"submitOrderSuccess": 20000,
"getOrderInfo": 20000,
"getOrderStatus": 60000,
"postPaginationStatus": 60000,
"postOrderStatus": 60000,
"addShipAddressOrderSuccess": 20000,
"updateAddressBookOrder": 20000,
"addPaymentOrder": 20000,
"updatePaymentOrder": 20000,
"updateShipMethod": 20000,
"paypalPost": 60000,
"expressPaypal": 20000,

//DPF Time Out service keyword
"getStoreandaccount": 30000,
"getRefillHubPrescription": 20000,
"getRefillPrescriptionCard": 20000,
"requestRefill": 50000,
"getrxhistory": 15000,
"getRxStatusInfo": 30000,
"getReloadStatusInfo": 15000,
"getLeanCheckout": 80000,
"setLeanCheckout": 80000,
"postRxNum": 30000,
"getRxInformation": 10000,
"getnewRxInformation":30000,
"getIndividualRefillHubPrescription": 25000,
"getRefillHubSearchPrescription": 20000,
"getAutoRefillPrescription": 10000,
"getAutoRefillRetailMailPrescription": 10000,
"addPaymentRetail": 60000,
"addPaymentMail": 60000,
"addShippingAddressRetail": 60000,
"addShippingAddressMail": 60000,
"turnOnRetailPickupAutoRefill": 20000,
"turnOnMailAutoRefill": 20000,
"getAutoRefill": 11000,
"PutAutoRefill": 10000,
"makePayment": 60000,
//DPC Time Out service keyword
"getAuthenticationOptions": 60000,
"getQuestionsNOptionsPrimary": 60000,
"getQuestionsNOptionsSecondary": 60000,
"getPrescriptionVerification": 60000,
"getPinVerification": 60000,
"getPhoneVerification": 60000,
"deletePsmMessage": 60000,
"getPsmMessageInbox": 60000,
"getPsmMessageDetail": 60000,
"postPsmReplyMessage": 60000,
"getDrugBrowse": 60000,
"getDrugDosage": 60000,
"getDrugInfo": 60000,
"getDrugSearch": 60000,
"postDrugSearch": 60000,
//DHS Time Out service keyword
"getStepsActivities": 60000,


//DCS Time Out Service keyword - START
//DCS Service
"getTimeSlot": 60000,
"getFamilyMemberManagement": 60000,
"getdashboardwidgets": 60000,
"getApptSelectDateTime": 60000,
"getApptStoreInfo": 60000,
"getSelectService": 60000,
"getVaccineInfo": 60000,
"getSelectLoc": 60000,
"getPatientForm": 60000,
"sendpatientsInfo": 60000,

//To check
"getpatientsinfo": 60000,
"getRescheduleData": 60000,
"getapptview": 60000,
"postSearchView": 60000,
"getProfileInfo": 60000,
"getimmunizationhistory": 60000,
"getvaccinelist": 60000,
"addEditImmunization": 60000,
"getImmPatientInfo": 60000,
"hideUnhideImmRec": 60000,
"sendApptCancelRequest": 60000,
"getallstate": 60000,
"getuser": 60000,
"addFamilyMember": 60000,
"getStoreServices": 60000,

"getUserInfo": 60000,
"getAppointmentLanding": 60000,
"getStateInfo": 60000,
"getAddressBook": 60000,
"getImmCard": 60000,
"hideImmCard": 60000,
"addImmCard": 60000,
"apptReconcile": 60000,
//DCS Service timeout keyword - END

//Insurance and prices
"getInsPlansStoresList": 60000,
"getInsuransPlansList": 60000,
"postPurchaseHistory": 20000,
"getReorderTimeouts": 20000,
"getPurchaseDetails": 20000
};
var cac_paycapture_url = "https://www.securecheckout.billmelater.com/paycapture-ws/paycapturelite";
var cac_visacheckout_sdk_url = "https://assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js";
var cac_visacheckout_button="https://secure.checkout.visa.com/wallet-services-web/xo/button.png?height=32&width=160";
var cac_visacheckout_pay_button="https://secure.checkout.visa.com/wallet-services-web/xo/button.png?height=47&width=288";
var cac_visacheckout_radio_button="https://assets.secure.checkout.visa.com/VmeCardArts/partner/POS_horizontal_99x34.png";
var cac_masterpass_sdk_url="https://static.masterpass.com/integration/merchant.js";
var salesForceChatInputs = {
"JS_btn_id_daily_living":"57360000000GnKS",
"JS_btn_img_daily_living":"https://www.walgreens.com/images/adaptive/share/images/adapive_need_help_live_chat.PNG",
"JS_liveagent_chat_queue_iframe":"http://wagcco.force.com/Site1/LiveAgentChatQueue",
"JS_liveagent_deployment_js":"https://c.la2w1.salesforceliveagent.com/content/g/js/36.0/deployment.js",
"JS_liveagent_init_url":"https://d.la2w1.salesforceliveagent.com/chat",
"JS_liveagent_init_id1":"57260000000Gn7u",
"JS_liveagent_init_id2":"00D60000000KXhO",
"JS_cobrowsejs_url":"https://walgreens.glancecdn.net/cobrowse/CobrowseJS.ashx",
"JS_cobrowsejs_groupid":"19448",
"JS_cobrowsejs_site":"production",
"JS_cobrowsejs_inputevents":"{'shift-13':'startSession'}"
};
//Below variable added for session sharing
var hostNameRegexes = ["drugstore.com", "beauty.com"];
var excludeHostNameRegexes = "walgreens";
var crossDomainURLs = ["self", "https://www3.wag-static.com/**", "http://www3.wag-static.com/**", "https://www.wag-static.com/**", "http://www.wag-static.com/**"];
var elasticSearchContextRootPath = "productsearch/v1";
var elasticStoreLocatorContextRootPath = "storelocator/v1";
var elasticPharmacyContextRootPath = 'pharmacysearch/v1';
var elasticCouponContextPath = 'couponsearch/v1';
var elasticSearchServiceConfig = {
"www3.walgreens.com":"https://www3-customersearch.walgreens.com/" + elasticSearchContextRootPath,
"n-www3.walgreens.com":"https://www3-customersearch.walgreens.com/" + elasticSearchContextRootPath,
"www.walgreens.com":"https://customersearch.walgreens.com/" + elasticSearchContextRootPath,
"n-www.walgreens.com":"https://customersearch.walgreens.com/" + elasticSearchContextRootPath,
"ecomm-preview.walgreens.com":"https://customersearch.walgreens.com/" + elasticSearchContextRootPath
}
var elasticStoreLocatorServiceConfig = {
"www3.walgreens.com":"https://www3-customersearch.walgreens.com/" + elasticStoreLocatorContextRootPath,
"n-www3.walgreens.com":"https://www3-customersearch.walgreens.com/" + elasticStoreLocatorContextRootPath,
"www.walgreens.com":"https://customersearch.walgreens.com/" + elasticStoreLocatorContextRootPath,
"n-www.walgreens.com":"https://customersearch.walgreens.com/" + elasticStoreLocatorContextRootPath,
"ecomm-preview.walgreens.com":"https://customersearch.walgreens.com/" + elasticStoreLocatorContextRootPath
}
var elasticPharmacyServiceConfig = {
"www3.walgreens.com":"https://www3-customersearch.walgreens.com/" + elasticPharmacyContextRootPath,
"n-www3.walgreens.com":"https://www3-customersearch.walgreens.com/" + elasticPharmacyContextRootPath,
"www.walgreens.com":"https://customersearch.walgreens.com/" + elasticPharmacyContextRootPath,
"n-www.walgreens.com":"https://customersearch.walgreens.com/" + elasticPharmacyContextRootPath,
"ecomm-preview.walgreens.com":"https://customersearch.walgreens.com/" + elasticPharmacyContextRootPath
}

var elasticInventoryServiceConfig = {
"www3.walgreens.com":"https://www3-customersearch.walgreens.com",
"n-www3.walgreens.com":"https://www3-customersearch.walgreens.com",
"www.walgreens.com":"https://customersearch.walgreens.com",
"n-www.walgreens.com":"https://customersearch.walgreens.com",
"ecomm-preview.walgreens.com":"https://customersearch.walgreens.com"
}

var elasticCouponServiceConfig = {
"www3.walgreens.com": "https://www3-customersearch.walgreens.com/" + elasticCouponContextPath,
"n-www3.walgreens.com": "https://www3-customersearch.walgreens.com/" + elasticCouponContextPath,
"www.walgreens.com": "https://customersearch.walgreens.com/" + elasticCouponContextPath,
"n-www.walgreens.com": "https://customersearch.walgreens.com/" + elasticCouponContextPath,
"ecomm-preview.walgreens.com": "https://customersearch.walgreens.com/" + elasticCouponContextPath
}

var elasticSearchServiceEndPoint = elasticSearchServiceConfig[window.location.hostname];
var elasticStoreLocatorServiceEndPoint = elasticStoreLocatorServiceConfig[window.location.hostname];
var elasticPharmacyServiceEndPoint = elasticPharmacyServiceConfig[window.location.hostname];
var elasticInventoryServiceEndPoint = elasticInventoryServiceConfig[window.location.hostname];
var elasticCouponServiceEndPoint = elasticCouponServiceConfig[window.location.hostname];
