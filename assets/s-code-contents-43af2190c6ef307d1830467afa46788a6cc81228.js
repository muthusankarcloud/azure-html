/*Custoxm code starts*/
s = new AppMeasurement();

s.account = "walgrns-adaptive-invalid";
var u = window.location.host + window.location.pathname;

if (u.indexOf("www.walgreens.com") > -1) {
    s.account = "walgrns"
}

if (u.indexOf("www3.walgreens.com") > -1) {
    s.account = "walgrns"
}

if ((u.indexOf("m-qa2.walgreens.com") > -1) 
    || (u.indexOf("m-perf.walgreens.com") > -1) 
    || (u.indexOf("m-perf2.walgreens.com") > -1) 
    || (u.indexOf("m-int1.walgreens.com") > -1)) {
  
    s.account = "walgrnswalgrnsadaptivestaging"
}

//native app testing
/*if (u.indexOf("n-www.walgreens.com") > -1) {
    s.account = "walgrns"
}

if (u.indexOf("n-www3.walgreens.com") > -1) {
    s.account = "walgrns"
}*/

if ((u.indexOf("n-qa2.walgreens.com") > -1) 
    || (u.indexOf("n-perf.walgreens.com") > -1) 
    || (u.indexOf("n-perf2.walgreens.com") > -1) 
    || (u.indexOf("n-int1.walgreens.com") > -1)) {
  
    s.account = "walgrnswalgrnsadaptivestaging"
}
//ends here

if ((u.indexOf("decwb02.walgreens.com") > -1) 
    || (u.indexOf("mycomputer.walgreens.com") > -1)) {
  
    s.account = "walgrnswalgrnsadaptivedev"
}

if (u.indexOf("mycomputer.drugstore.com") > -1) {
    s.account = "drugstoreadaptivedev"
}

if (u.indexOf("mycomputer.beauty.com") > -1) {
    s.account = "beautyadaptivedev"
}

if (u.indexOf("tumblr.walgreens.com") > -1) {
    s.account = "walgrns"
}

if (u.indexOf("smile.walgreens.com") > -1) {
    s.account = "walgrns"
}

if (u.indexOf("staywell.walgreens.com") > -1) {
    s.account = "walgrns"
}

if (u.indexOf("bebeautiful.walgreens.com") > -1) {
    s.account = "walgrns"
}
if (u.indexOf("medicare.walgreens.com") > -1) {
    s.account = "walgrns"
}



s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
s.linkInternalFilters = "javascript:,walgreens.com,walgreensenespanol.com,walgreensenspanol.com,walgreensespanol.com,walgreensinspanish.com,walgreensspanish.com,walgreensphotocenter.com,wal-green.com,walgrens.com,walgreen.com,walgreenpharmacy.com,wal-greens.com,walgreens.net,wal-gren.com,wal-grens.com,wallgreens.com,wallgreen.com,wgus9.qa.snapfish.com,wgus11.qa.snapfish.com,walgreens.jobs,wgus1.qa.snapfish.com,wgus3.qa.snapfish.com,walgreens.tumblr.com,walgreenssmile.tumblr.com,walgreensstaywell.tumblr.com,walgreensbebeautiful.tumblr.com,medicare.walgreens.com";
s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.currencyCode = "USD";
s.formList = "getinfo,loginform";
s.trackFormList = true;
s.trackPageName = true;
s.useCommerce = false;
s.varUsed = "prop2";
s.eventList = "";
s.usePlugins = true;

s.doPlugins = function(s) {
       // s.setupFormAnalysis();
        if (!s.campaign) {
            s.campaign = s.Util.getQueryParam("rem")
        }
        if (!s.campaign) {
            s.campaign = s.Util.getQueryParam("rxr")
        }
        if (!s.campaign) {
            s.campaign = s.Util.getQueryParam("ec")
        }
        if (!s.campaign) {
            s.campaign = s.Util.getQueryParam("ext")
        }
        if (!s.campaign) {
            s.campaign = s.Util.getQueryParam("ols")
        }
        if (!s.campaign) {
            s.campaign = s.Util.getQueryParam("pid")
        }
        if (!s.campaign) {
            s.campaign = s.Util.getQueryParam("ep_mid")
        }
        if (!s.eVar40) {
            s.eVar40 = s.Util.getQueryParam("ep_rid")
        }
        if (!s.eVar1) {
            s.eVar1 = s.Util.getQueryParam("ban")
        }
        if (!s.eVar2) {
            s.eVar2 = s.Util.getQueryParam("nug")
        }
        if (!s.eVar3) {
            s.eVar3 = s.Util.getQueryParam("area")
        }
        if (!s.eVar4) {
            s.eVar4 = s.Util.getQueryParam("swp")
        }
        if (!s.eVar5) {
            s.eVar5 = s.Util.getQueryParam("term")
        }
        if (!s.eVar22) {
            s.eVar22 = s.Util.getQueryParam("erule")
        }
        s.eVar62 = s.Util.getQueryParam("adtype");
        if (!s.eVar23) {
            s.eVar23 = s.Util.getQueryParam("tab")
        }
        if (!s.eVar31) {
            s.eVar31 = s.Util.getQueryParam("foot")
        }
        if (!s.eVar60) {
            s.eVar60 = s.Util.getQueryParam("rkg_id")
        }
        if (s.Util.getQueryParam("sst") != "") {
            s.eVar48 = s.Util.getQueryParam("sst")
        }
        if (s.Util.getQueryParam("AID") != "") {
            s.eVar49 = s.Util.getQueryParam("AID")
        }
        if (s.Util.getQueryParam("PID") != "") {
            s.eVar50 = s.Util.getQueryParam("PID")
        }
        if (s.Util.getQueryParam("SID") != "") {
            s.eVar27 = s.Util.getQueryParam("SID")
        }
        if (s.Util.getQueryParam("CAID") != "") {
            s.eVar28 = s.Util.getQueryParam("CAID")
        }
        if (s.Util.getQueryParam("soc") != "") {
            s.eVar58 = s.Util.getQueryParam("soc")
        }

        function isAvlb(x) {
            return x in window
        }
        if (isAvlb("s_pageName")) {
            s.pageName = s_pageName
        } 
        if (isAvlb("s_channel")) {
            s.channel = s_channel
        }
        if (isAvlb("s_server")) {
            s.server = s_server
        }
        if (isAvlb("s_events")) {
            s.events = s_events
        }
        if (isAvlb("s_products")) {
            s.products = s_products
        }
        for (i = 1; i <= 100; i++) {
            if (isAvlb("s_prop" + i)) {
                s["prop" + i] = eval("s_prop" + i)
            }
            if (isAvlb("s_eVar" + i)) {
                s["eVar" + i] = eval("s_eVar" + i)
            }
        }
        if (s.Util.getQueryParam("erule") != "") {
            s.eVar5 = s.Util.getQueryParam("erule")
        }
        if (isAvlb("s_purchaseID")) {
            s.purchaseID = s_purchaseID
        }
        if (isAvlb("s_linkTrackVars")) {
            s.linkTrackVars = s_linkTrackVars
        }
        if (isAvlb("s_linkTrackEvents")) {
            s.linkTrackEvents = s_linkTrackEvents
        }
        if (isAvlb("s_state")) {
            s.state = s_state
        }
        if (isAvlb("s_zip")) {
            s.zip = s_zip
        }
        var kr = document.referrer,
            kk = s.Util.getQueryParam("q", "", kr),
            ks = s.Util.getQueryParam("esrc", "", kr);
        if (kr.indexOf("www.google.com") && !kk && ks == "s") {
            var ksr = kr.split("q="),
                kq = "q=Google%20Secure%20Search";
            s.referrer = ksr[0] + kq + ksr[1]
        }
        s.tnt = s.trackTNT();
    }
    //s.doPlugins = s_doPlugins;

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/*
 * TNT Integration Plugin v2.1AM
 */
s.trackTNT = new Function("v", "p", "b", "" + "var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false" + ",b=(b)?b:true;if(s.Util.getQueryParam(q)!=''){s.referrer=s.Util.get" + "QueryParam(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.c" + "ookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(" + "(document.cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.in" + "dexOf(q+'=')!=-1&&s.Util.getQueryParam(q)=='')){s.referrer='Typed/B" + "ookmarked';document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:" + "00:01 GMT;';}if(s.Util.getQueryParam(p)!=''){pm=s.Util.getQueryPara" + "m(p);}else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+'=;path=/;exp" + "ires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(s.c_r(p)==''&&s.Util." + "getQueryParam(p)==''){pm='';}if(pm)r+=(pm+',');if(window[v]!=undefi" + "ned)r+=window[v];if(b)window[v]='';return r;");

/*
 * Plugin: Form Analysis 2.2 (Success, Error, Abandonment)
 */
s.setupFormAnalysis = new Function("" + "var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s." + "wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even" + "tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''" + ",'','')}");
s.sendFormEvent = new Function("t", "pn", "fn", "en", "" + "var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='" + "s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s.faol = new Function("e", "" + "var s=s_c_il[" + s._in + "],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd." + "event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng" + "th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name" + ";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);" + "if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='" + "No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element" + "s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();if(t.indexOf" + "('FIELDSET')<0){var md=el.onmousedown,kd=el.onkeydown,omd=md?md.toS" + "tring():'',okd=kd?kd.toString():'';if(omd.indexOf('.fam(')<0&&okd.i" + "ndexOf('.fam(')<0){el.s_famd=md;el.s_fakd=kd;el.onmousedown=s.fam;e" + "l.onkeydown=s.fam}}}}}}f.ul=s.wd.onunload;s.wd.onunload=s.fasl;}ret" + "urn r;");
s.faos = new Function("e", "" + "var s=s_c_il[" + s._in + "],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v" + "u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru" + "e;");
s.fasl = new Function("e", "" + "var s=s_c_il[" + s._in + "],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag" + "eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path" + "name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]=" + "'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]" + "='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]" + "!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV" + "ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars=" + "ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt" + "e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'" + ",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s" + ".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f." + "vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object" + "();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us" + "ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");
s.fam = new Function("e", "" + "var s=s_c_il[" + s._in + "],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas" + "tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this." + "form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e." + "which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW" + "N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM" + "AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e" + "n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1" + "){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va[" + "1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s" + "_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak" + "d(e);");
s.ee = new Function("e", "n", "" + "return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s.fage = new Function("e", "a", "" + "var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");

s.visitorNamespace = "walgrns";
s.dc = 112;
s.visitorMigrationKey = "4D4DA30D";
s.trackingServer = "metrics.walgreens.com";
s.trackingServerSecure = "smetrics.walgreens.com";

/*Custom code ends*/
/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f) {
    function g(a, d) {
        var b, c, n;
        if (a && d && (b = e.c[d] || (e.c[d] = d.split(","))))
            for (n = 0; n < b.length && (c = b[n++]);)
                if (-1 < a.indexOf(c)) return null;
        p = 1;
        return a
    }

    function q(a, d, b, c, e) {
        var g, h;
        if (a.dataset && (h = a.dataset[d])) g = h;
        else if (a.getAttribute)
            if (h = a.getAttribute("data-" + b)) g = h;
            else if (h = a.getAttribute(b)) g = h;
        if (!g && f.useForcedLinkTracking && e && (g = "", d = a.onclick ? "" + a.onclick : "")) {
            b = d.indexOf(c);
            var l, k;
            if (0 <= b) {
                for (b += 10; b < d.length && 0 <= "= \t\r\n".indexOf(d.charAt(b));) b++;
                if (b < d.length) {
                    h = b;
                    for (l = k = 0; h < d.length && (";" != d.charAt(h) || l);) l ? d.charAt(h) != l || k ? k = "\\" == d.charAt(h) ? !k : 0 : l = 0 : (l = d.charAt(h), '"' != l && "'" != l && (l = 0)), h++;
                    if (d = d.substring(b, h)) a.e = new Function("s", "var e;try{s.w." + c + "=" + d + "}catch(e){}"), a.e(f)
                }
            }
        }
        return g || e && f.w[c]
    }

    function r(a, d, b) {
        var c;
        return (c = e[d](a, b)) && (p ? (p = 0, c) : g(k(c), e[d + "Exclusions"]))
    }

    function s(a, d, b) {
        var c;
        if (a && !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && t[c]) && (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c), b.a ||
                b.t || b.s || !a.getAttribute || ((c = a.getAttribute("alt")) ? b.a = c : (c = a.getAttribute("title")) ? b.t = c : "IMG" == ("" + a.nodeName).toUpperCase() && (c = a.getAttribute("src") || a.src) && (b.s = c)), (c = a.childNodes) && c.length))
            for (a = 0; a < c.length; a++) s(c[a], d, b)
    }

    function k(a) {
        if (null == a || void 0 == a) return a;
        try {
            return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
                "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}", "mg"), " ").substring(0, 254)
        } catch (d) {}
    }
    var e = this;
    e.s = f;
    var m = window;
    m.s_c_in || (m.s_c_il = [], m.s_c_in = 0);
    e._il = m.s_c_il;
    e._in = m.s_c_in;
    e._il[e._in] = e;
    m.s_c_in++;
    e._c = "s_m";
    e.c = {};
    var p = 0,
        t = {
            SCRIPT: 1,
            STYLE: 1,
            LINK: 1,
            CANVAS: 1
        };
    e._g = function() {
        var a, d, b, c = f.contextData,
            e = f.linkObject;
        (a = f.pageName || f.pageURL) && (d = r(e, "link", f.linkName)) && (b = r(e, "region")) && (c["a.activitymap.page"] = a.substring(0,
            255), c["a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d, c["a.activitymap.region"] = 127 < b.length ? b.substring(0, 127) : b, c["a.activitymap.pageIDType"] = f.pageName ? 1 : 0)
    };
    e.link = function(a, d) {
        var b;
        if (d) b = g(k(d), e.linkExclusions);
        else if ((b = a) && !(b = q(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
            var c, f;
            (f = g(k(a.innerText || a.textContent), e.linkExclusions)) || (s(a, c = [], b = {
                a: void 0,
                t: void 0,
                s: void 0
            }), (f = g(k(c.join("")))) || (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) || !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() :
                "") || ("INPUT" == c || "SUBMIT" == c && a.value ? f = g(k(a.value)) : a.src && "IMAGE" == c && (f = g(k(a.src)))));
            b = f
        }
        return b
    };
    e.region = function(a) {
        for (var d, b = e.regionIDAttribute || "id"; a && (a = a.parentNode);) {
            if (d = q(a, b, b, b)) return d;
            if ("BODY" == a.nodeName) return "BODY"
        }
    }
}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.6
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement() {
    var a = this;
    a.version = "1.6";
    var k = window;
    k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
    a._il = k.s_c_il;
    a._in = k.s_c_in;
    a._il[a._in] = a;
    k.s_c_in++;
    a._c = "s_c";
    var q = k.AppMeasurement.Db;
    q || (q = null);
    var r = k,
        n, t;
    try {
        for (n = r.parent, t = r.location; n && n.location && t && "" + n.location != "" + t && r.location && "" + n.location != "" + r.location && n.location.host == t.host;) r = n, n = r.parent
    } catch (u) {}
    a.sb = function(a) {
        try {
            console.log(a)
        } catch (b) {}
    };
    a.Ba = function(a) {
        return "" + parseInt(a) == "" + a
    };
    a.replace = function(a, b, d) {
        return !a ||
            0 > a.indexOf(b) ? a : a.split(b).join(d)
    };
    a.escape = function(c) {
        var b, d;
        if (!c) return c;
        c = encodeURIComponent(c);
        for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return c
    };
    a.unescape = function(c) {
        if (!c) return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
        try {
            return decodeURIComponent(c)
        } catch (b) {}
        return unescape(c)
    };
    a.kb = function() {
        var c = k.location.hostname,
            b = a.fpCookieDomainPeriods,
            d;
        b || (b = a.cookieDomainPeriods);
        if (c && !a.cookieDomain &&
            !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
            for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
            a.cookieDomain = 0 < d ? c.substring(d) : c
        }
        return a.cookieDomain
    };
    a.c_r = a.cookieRead = function(c) {
        c = a.escape(c);
        var b = " " + a.d.cookie,
            d = b.indexOf(" " + c + "="),
            f = 0 > d ? d : b.indexOf(";", d);
        c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
        return "[[B]]" != c ? c : ""
    };
    a.c_w = a.cookieWrite = function(c, b, d) {
        var f = a.kb(),
            e = a.cookieLifetime,
            g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" !=
            e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1E3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
        return c && "NONE" != e ? (a.d.cookie = c + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
    };
    a.G = [];
    a.da = function(c, b, d) {
        if (a.va) return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0,
            e = (new Date).getTime() + a.maxDelay,
            g = a.d.visibilityState,
            m = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ea)
                for (a.ea = 1, d = 0; d < m.length; d++) a.d.addEventListener(m[d], function() {
                    var c = a.d.visibilityState;
                    c || (c = a.d.webkitVisibilityState);
                    "visible" == c && (a.ea = 0, a.delayReady())
                });
            f = 1;
            e = 0
        } else d || a.l("_d") && (f = 1);
        f && (a.G.push({
            m: c,
            a: b,
            t: e
        }), a.ea || setTimeout(a.delayReady, a.maxDelay));
        return f
    };
    a.delayReady = function() {
        var c = (new Date).getTime(),
            b = 0,
            d;
        for (a.l("_d") ? b = 1 : a.pa(); 0 < a.G.length;) {
            d = a.G.shift();
            if (b && !d.t && d.t > c) {
                a.G.unshift(d);
                setTimeout(a.delayReady,
                    parseInt(a.maxDelay / 2));
                break
            }
            a.va = 1;
            a[d.m].apply(a, d.a);
            a.va = 0
        }
    };
    a.setAccount = a.sa = function(c) {
        var b, d;
        if (!a.da("setAccount", arguments))
            if (a.account = c, a.allAccounts)
                for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
            else a.allAccounts = c.split(",")
    };
    a.foreachVar = function(c, b) {
        var d, f, e, g, m = "";
        e = f = "";
        if (a.lightProfileID) d = a.K, (m = a.lightTrackVars) && (m = "," + m + "," + a.ia.join(",") + ",");
        else {
            d = a.e;
            if (a.pe || a.linkType) m = a.linkTrackVars,
                f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (m = a[e].Cb, f = a[e].Bb));
            m && (m = "," + m + "," + a.B.join(",") + ",");
            f && m && (m += ",events,")
        }
        b && (b = "," + b + ",");
        for (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!m || 0 <= m.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    };
    a.o = function(c, b, d, f, e) {
        var g = "",
            m, p, k, w, n = 0;
        "contextData" == c && (c = "c");
        if (b) {
            for (m in b)
                if (!(Object.prototype[m] || e && m.substring(0, e.length) != e) && b[m] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + m + ","))) {
                    k = !1;
                    if (n)
                        for (p =
                            0; p < n.length; p++) m.substring(0, n[p].length) == n[p] && (k = !0);
                    if (!k && ("" == g && (g += "&" + c + "."), p = b[m], e && (m = m.substring(e.length)), 0 < m.length))
                        if (k = m.indexOf("."), 0 < k) p = m.substring(0, k), k = (e ? e : "") + p + ".", n || (n = []), n.push(k), g += a.o(p, b, d, f, k);
                        else if ("boolean" == typeof p && (p = p ? "true" : "false"), p) {
                        if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (k = m.substring(0, 4), w = m.substring(4), m) {
                            case "transactionID":
                                m = "xact";
                                break;
                            case "channel":
                                m = "ch";
                                break;
                            case "campaign":
                                m = "v0";
                                break;
                            default:
                                a.Ba(w) && ("prop" ==
                                    k ? m = "c" + w : "eVar" == k ? m = "v" + w : "list" == k ? m = "l" + w : "hier" == k && (m = "h" + w, p = p.substring(0, 255)))
                        }
                        g += "&" + a.escape(m) + "=" + a.escape(p)
                    }
                }
                "" != g && (g += "&." + c)
        }
        return g
    };
    a.mb = function() {
        var c = "",
            b, d, f, e, g, m, p, k, n = "",
            r = "",
            s = e = "";
        if (a.lightProfileID) b = a.K, (n = a.lightTrackVars) && (n = "," + n + "," + a.ia.join(",") + ",");
        else {
            b = a.e;
            if (a.pe || a.linkType) n = a.linkTrackVars, r = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n = a[e].Cb, r = a[e].Bb));
            n && (n = "," + n + "," + a.B.join(",") + ",");
            r && (r = "," + r + ",",
                n && (n += ",events,"));
            a.events2 && (s += ("" != s ? "," : "") + a.events2)
        }
        if (a.visitor && 1.5 <= parseFloat(a.visitor.version) && a.visitor.getCustomerIDs) {
            e = q;
            if (g = a.visitor.getCustomerIDs())
                for (d in g) Object.prototype[d] || (f = g[d], e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState));
            e && (c += a.o("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.o("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            m = e.substring(4);
            !g &&
                "events" == e && s && (g = s, s = "");
            if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
                switch (e) {
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g";
                        255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0,
                            255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf";
                        a.ssl && a.visitorMigrationServerSecure && (g = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf";
                        !a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e =
                            "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        s && (g += ("" != g ? "," : "") + s);
                        if (r)
                            for (m =
                                g.split(","), g = "", f = 0; f < m.length; f++) p = m[f], k = p.indexOf("="), 0 <= k && (p = p.substring(0, k)), k = p.indexOf(":"), 0 <= k && (p = p.substring(0, k)), 0 <= r.indexOf("," + p + ",") && (g += (g ? "," : "") + m[f]);
                        break;
                    case "events2":
                        g = "";
                        break;
                    case "contextData":
                        c += a.o("c", a[e], n, e);
                        g = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss";
                        a.lightProfileID || (g = "");
                        break;
                    case "lightIncrementBy":
                        e = "mti";
                        a.lightProfileID || (g = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e =
                            "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (c += a.o("mts", a[e], n, e));
                        g = "";
                        break;
                    default:
                        a.Ba(m) && ("prop" == f ? e = "c" + m : "eVar" == f ? e = "v" + m : "list" == f ? e = "l" + m : "hier" == f && (e = "h" + m, g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.c && (c += a.c)
        }
        return c
    };
    a.v = function(a) {
        var b = a.tagName;
        if ("undefined" != "" + a.Gb || "undefined" != "" + a.wb && "HTML" != ("" + a.wb).toUpperCase()) return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
        "SHAPE" == b && (b = "");
        b && (("INPUT" == b ||
            "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
    };
    a.xa = function(a) {
        var b = a.href ? a.href : "",
            d, f, e;
        d = b.indexOf(":");
        f = b.indexOf("?");
        e = b.indexOf("/");
        b && (0 > d || 0 <= f && d > f || 0 <= e && d > e) && (f = a.protocol && 1 < a.protocol.length ? a.protocol : l.protocol ? l.protocol : "", d = l.pathname.lastIndexOf("/"), b = (f ? f + "//" : "") + (a.host ? a.host : l.host ? l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, 0 > d ? 0 : d) + "/" : "") + b);
        return b
    };
    a.H = function(c) {
        var b = a.v(c),
            d, f, e = "",
            g = 0;
        return b &&
            (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : c.src && "IMAGE" == b && (e = c.src) : e = a.xa(c), e) ? {
                id: e.substring(0, 100),
                type: g
            } : 0
    };
    a.Eb = function(c) {
        for (var b = a.v(c), d = a.H(c); c && !d && "BODY" != b;)
            if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.v(c), d = a.H(c);
        d && "BODY" != b || (c = 0);
        c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
        return c
    };
    a.vb = function() {
        var c, b, d = a.linkObject,
            f = a.linkType,
            e = a.linkURL,
            g, m;
        a.ja = 1;
        d || (a.ja = 0, d = a.clickObject);
        if (d) {
            c = a.v(d);
            for (b = a.H(d); d && !b && "BODY" != c;)
                if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.v(d), b = a.H(d);
            b && "BODY" != c || (d = 0);
            if (d && !a.linkObject) {
                var p = d.onclick ? "" + d.onclick : "";
                if (0 <= p.indexOf(".tl(") || 0 <= p.indexOf(".trackLink(")) d = 0
            }
        } else a.ja = 1;
        !e && d && (e = a.xa(d));
        e &&
            !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var n = 0,
                r = 0,
                q;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (p = e.toLowerCase(), g = p.indexOf("?"), m = p.indexOf("#"), 0 <= g ? 0 <= m && m < g && (g = m) : g = m, 0 <= g && (p = p.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), m = 0; m < g.length; m++)(q = g[m]) && p.substring(p.length - (q.length + 1)) == "." + q && (f = "d");
            if (a.trackExternalLinks && !f && (p = e.toLowerCase(), a.Aa(p) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname),
                    g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), n = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                for (m = 0; m < g.length; m++) q = g[m], 0 <= p.indexOf(q) && (r = 1);
                r ? n && (f = "e") : n || (f = "e")
            }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats) a.c = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.c = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") +
            "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
    };
    a.nb = function() {
        var c = a.ja,
            b = a.linkType,
            d = a.linkURL,
            f = a.linkName;
        b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
        a.abort && (c = 0);
        if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
            var b = {},
                d = 0,
                e = a.cookieRead("s_sq"),
                g = e ? e.split("&") : 0,
                m, p, k, e = 0;
            if (g)
                for (m = 0; m < g.length; m++) p = g[m].split("="), f = a.unescape(p[0]).split(","), p = a.unescape(p[1]),
                    b[p] = f;
            f = a.account.split(",");
            m = {};
            for (k in a.contextData) k && !Object.prototype[k] && "a.activitymap." == k.substring(0, 14) && (m[k] = a.contextData[k], a.contextData[k] = "");
            a.c = a.o("c", m) + (a.c ? a.c : "");
            if (c || a.c) {
                c && !a.c && (e = 1);
                for (p in b)
                    if (!Object.prototype[p])
                        for (k = 0; k < f.length; k++)
                            for (e && (g = b[p].join(","), g == a.account && (a.c += ("&" != p.charAt(0) ? "&" : "") + p, b[p] = [], d = 1)), m = 0; m < b[p].length; m++) g = b[p][m], g == f[k] && (e && (a.c += "&u=" + a.escape(g) + ("&" != p.charAt(0) ? "&" : "") + p + "&u=0"), b[p].splice(m, 1), d = 1);
                c || (d = 1);
                if (d) {
                    e =
                        "";
                    m = 2;
                    !c && a.c && (e = a.escape(f.join(",")) + "=" + a.escape(a.c), m = 1);
                    for (p in b) !Object.prototype[p] && 0 < m && 0 < b[p].length && (e += (e ? "&" : "") + a.escape(b[p].join(",")) + "=" + a.escape(p), m--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    };
    a.ob = function() {
        if (!a.Ab) {
            var c = new Date,
                b = r.location,
                d, f, e = f = d = "",
                g = "",
                m = "",
                k = "1.2",
                n = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                q = "",
                s = "";
            if (c.setUTCDate && (k = "1.3", (0).toPrecision && (k = "1.5", c = [], c.forEach))) {
                k = "1.6";
                f = 0;
                d = {};
                try {
                    f = new Iterator(d), f.next && (k = "1.7", c.reduce && (k = "1.8", k.trim &&
                        (k = "1.8.1", Date.parse && (k = "1.8.2", Object.create && (k = "1.8.5")))))
                } catch (t) {}
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
            m = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"), q = a.b.Fb(b) ? "Y" : "N"
            } catch (u) {}
            try {
                a.b.addBehavior("#default#clientCaps"), s = a.b.connectionType
            } catch (x) {}
            a.resolution = d;
            a.colorDepth =
                f;
            a.javascriptVersion = k;
            a.javaEnabled = e;
            a.cookiesEnabled = n;
            a.browserWidth = g;
            a.browserHeight = m;
            a.connectionType = s;
            a.homepage = q;
            a.Ab = 1
        }
    };
    a.L = {};
    a.loadModule = function(c, b) {
        var d = a.L[c];
        if (!d) {
            d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](a) : {};
            a.L[c] = a[c] = d;
            d.Qa = function() {
                return d.Ua
            };
            d.Va = function(b) {
                if (d.Ua = b) a[c + "_onLoad"] = b, a.da(c + "_onLoad", [a, d], 1) || b(a, d)
            };
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                    get: d.Qa,
                    set: d.Va
                }) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        b && (a[c + "_onLoad"] =
            b, a.da(c + "_onLoad", [a, d], 1) || b(a, d))
    };
    a.l = function(c) {
        var b, d;
        for (b in a.L)
            if (!Object.prototype[b] && (d = a.L[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
        return 0
    };
    a.qb = function() {
        var c = Math.floor(1E13 * Math.random()),
            b = a.visitorSampling,
            d = a.visitorSamplingGroup,
            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
            f = a.cookieRead(d);
        if (b) {
            f && (f = parseInt(f));
            if (!f) {
                if (!a.cookieWrite(d, c)) return 0;
                f = c
            }
            if (f % 1E4 > v) return 0
        }
        return 1
    };
    a.M = function(c, b) {
        var d,
            f, e, g, m, k;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.qa : a.e, e = 0; e < f.length; e++)
                if (g = f[e], (m = c[g]) || c["!" + g]) {
                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (k in a[g]) m[k] || (m[k] = a[g][k]);
                    a[g] = m
                }
    };
    a.Ja = function(c, b) {
        var d, f, e, g;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.qa : a.e, e = 0; e < f.length; e++) g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
    };
    a.ib = function(a) {
        var b, d, f, e, g, m = 0,
            k, n = "",
            q = "";
        if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (k = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0,
                7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? m = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (m = ",p,ei,"), m && k)))) {
            if ((a = k.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= m.indexOf("," + e.substring(0, d) + ",") ? n += (n ? "&" : "") + e : q += (q ? "&" : "") + e;
                n && q ? k = n + "&" + q : q = ""
            }
            d = 253 - (k.length - q.length) - b.length;
            a = b + (0 < d ? g.substring(0, d) : "") + "?" + k
        }
        return a
    };
    a.Pa = function(c) {
        var b =
            a.d.visibilityState,
            d = ["webkitvisibilitychange", "visibilitychange"];
        b || (b = a.d.webkitVisibilityState);
        if (b && "prerender" == b) {
            if (c)
                for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {
                    var b = a.d.visibilityState;
                    b || (b = a.d.webkitVisibilityState);
                    "visible" == b && c()
                });
            return !1
        }
        return !0
    };
    a.Z = !1;
    a.D = !1;
    a.Xa = function() {
        a.D = !0;
        a.i()
    };
    a.X = !1;
    a.Q = !1;
    a.Ta = function(c) {
        a.marketingCloudVisitorID = c;
        a.Q = !0;
        a.i()
    };
    a.aa = !1;
    a.R = !1;
    a.Ya = function(c) {
        a.visitorOptedOut = c;
        a.R = !0;
        a.i()
    };
    a.U = !1;
    a.N = !1;
    a.La = function(c) {
        a.analyticsVisitorID =
            c;
        a.N = !0;
        a.i()
    };
    a.W = !1;
    a.P = !1;
    a.Na = function(c) {
        a.audienceManagerLocationHint = c;
        a.P = !0;
        a.i()
    };
    a.V = !1;
    a.O = !1;
    a.Ma = function(c) {
        a.audienceManagerBlob = c;
        a.O = !0;
        a.i()
    };
    a.Oa = function(c) {
        a.maxDelay || (a.maxDelay = 250);
        return a.l("_d") ? (c && setTimeout(function() {
            c()
        }, a.maxDelay), !1) : !0
    };
    a.Y = !1;
    a.C = !1;
    a.pa = function() {
        a.C = !0;
        a.i()
    };
    a.isReadyToTrack = function() {
        var c = !0,
            b = a.visitor;
        a.Z || a.D || (a.Pa(a.Xa) ? a.D = !0 : a.Z = !0);
        if (a.Z && !a.D) return !1;
        b && b.isAllowed() && (a.X || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID ||
            (a.X = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.Ta]), a.marketingCloudVisitorID && (a.Q = !0)), a.aa || a.visitorOptedOut || !b.isOptedOut || (a.aa = !0, a.visitorOptedOut = b.isOptedOut([a, a.Ya]), a.visitorOptedOut != q && (a.R = !0)), a.U || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.U = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.La]), a.analyticsVisitorID && (a.N = !0)), a.W || a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.W = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a,
                a.Na
            ]), a.audienceManagerLocationHint && (a.P = !0)), a.V || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.V = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ma]), a.audienceManagerBlob && (a.O = !0)), a.X && !a.Q && !a.marketingCloudVisitorID || a.U && !a.N && !a.analyticsVisitorID || a.W && !a.P && !a.audienceManagerLocationHint || a.V && !a.O && !a.audienceManagerBlob || a.aa && !a.R) && (c = !1);
        a.Y || a.C || (a.Oa(a.pa) ? a.C = !0 : a.Y = !0);
        a.Y && !a.C && (c = !1);
        return c
    };
    a.k = q;
    a.p = 0;
    a.callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {};
        f.bb = c;
        f.ab = b;
        f.Za = d;
        a.k == q && (a.k = []);
        a.k.push(f);
        0 == a.p && (a.p = setInterval(a.i, 100))
    };
    a.i = function() {
        var c;
        if (a.isReadyToTrack() && (a.Wa(), a.k != q))
            for (; 0 < a.k.length;) c = a.k.shift(), c.ab.apply(c.bb, c.Za)
    };
    a.Wa = function() {
        a.p && (clearInterval(a.p), a.p = 0)
    };
    a.Ra = function(c) {
        var b, d, f = q,
            e = q;
        if (!a.isReadyToTrack()) {
            b = [];
            if (c != q)
                for (d in f = {}, c) f[d] = c[d];
            e = {};
            a.Ja(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a, a.track, b);
            return !0
        }
        return !1
    };
    a.lb = function() {
        var c = a.cookieRead("s_fid"),
            b = "",
            d = "",
            f;
        f = 8;
        var e = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
            c = b + "-" + d
        }
        a.cookieWrite("s_fid", c, 1) || (c = 0);
        return c
    };
    a.t = a.track = function(c, b) {
        var d, f = new Date,
            e = "s" + Math.floor(f.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()),
            g = f.getYear(),
            g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " +
                f.getDay() + " " + f.getTimezoneOffset());
        a.visitor && (a.visitor.jb && (a.authState = a.visitor.jb()), !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)));
        a.l("_s");
        a.Ra(c) || (b && a.M(b), c && (d = {}, a.Ja(d, 0), a.M(c)), a.qb() && !a.visitorOptedOut && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.lb()), a.vb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp &&
            (a.timestamp = Math.floor(f.getTime() / 1E3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Ka || (a.referrer = r.document.referrer), a.Ka = 1, a.referrer = a.ib(a.referrer), a.l("_g")), a.nb() && !a.abort && (a.ob(), g += a.mb(), a.ub(e, g), a.l("_t"), a.referrer = ""))), c && a.M(d, 1));
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.c = a.lightProfileID = 0
    };
    a.tl = a.trackLink = function(c, b, d, f, e) {
        a.linkObject =
            c;
        a.linkType = b;
        a.linkName = d;
        e && (a.j = c, a.r = e);
        return a.track(f)
    };
    a.trackLight = function(c, b, d, f) {
        a.lightProfileID = c;
        a.lightStoreForSeconds = b;
        a.lightIncrementBy = d;
        return a.track(f)
    };
    a.clearVars = function() {
        var c, b;
        for (c = 0; c < a.e.length; c++)
            if (b = a.e[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] =
                void 0
    };
    a.tagContainerMarker = "";
    a.ub = function(c, b) {
        var d, f = a.trackingServer;
        d = "";
        var e = a.dc,
            g = "sc.",
            k = a.visitorNamespace;
        f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (k || (k = a.account, f = k.indexOf(","), 0 <= f && (k = k.substring(0, f)), k = k.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() : "d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"), g = ""), f = k + "." + e + "." + g + d);
        d = a.ssl ? "https://" : "http://";
        e = a.AudienceManagement && a.AudienceManagement.isReady();
        d += f + "/b/ss/" + a.account +
            "/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.zb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].AudienceManagement.passData&" : "") + b + "&AQE=1";
        a.gb(d);
        a.fa()
    };
    a.gb = function(c) {
        a.g || a.pb();
        a.g.push(c);
        a.ha = a.u();
        a.Ha()
    };
    a.pb = function() {
        a.g = a.rb();
        a.g || (a.g = [])
    };
    a.rb = function() {
        var c, b;
        if (a.ma()) {
            try {
                (b = k.localStorage.getItem(a.ka())) && (c = k.JSON.parse(b))
            } catch (d) {}
            return c
        }
    };
    a.ma = function() {
        var c = !0;
        a.trackOffline && a.offlineFilename &&
            k.localStorage && k.JSON || (c = !1);
        return c
    };
    a.ya = function() {
        var c = 0;
        a.g && (c = a.g.length);
        a.A && c++;
        return c
    };
    a.fa = function() {
        if (!a.A)
            if (a.za = q, a.la) a.ha > a.J && a.Fa(a.g), a.oa(500);
            else {
                var c = a.$a();
                if (0 < c) a.oa(c);
                else if (c = a.wa()) a.A = 1, a.tb(c), a.xb(c)
            }
    };
    a.oa = function(c) {
        a.za || (c || (c = 0), a.za = setTimeout(a.fa, c))
    };
    a.$a = function() {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
        c = a.u() - a.Ea;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
    };
    a.wa = function() {
        if (0 < a.g.length) return a.g.shift()
    };
    a.tb = function(c) {
        if (a.debugTracking) {
            var b = "AppMeasurement Debug: " + c;
            c = c.split("&");
            var d;
            for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
            a.sb(b)
        }
    };
    a.Sa = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    };
    a.T = !1;
    var s;
    try {
        s = JSON.parse('{"x":"y"}')
    } catch (x) {
        s = null
    }
    s && "y" == s.x ? (a.T = !0, a.S = function(a) {
        return JSON.parse(a)
    }) : k.$ && k.$.parseJSON ? (a.S = function(a) {
        return k.$.parseJSON(a)
    }, a.T = !0) : a.S = function() {
        return null
    };
    a.xb = function(c) {
        var b, d, f;
        a.Sa() && 2047 < c.length && ("undefined" !=
            typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2), b && a.AudienceManagement && a.AudienceManagement.isReady() && (a.T ? b.ra = !0 : b = 0));
        !b && a.Ia && (c = c.substring(0, 2047));
        !b && a.d.createElement && a.AudienceManagement && a.AudienceManagement.isReady() && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 3) : b =
            0);
        b || (b = new Image, b.alt = "");
        b.ua = function() {
            try {
                a.na && (clearTimeout(a.na), a.na = 0), b.timeout && (clearTimeout(b.timeout), b.timeout = 0)
            } catch (c) {}
        };
        b.onload = b.yb = function() {
            b.ua();
            a.fb();
            a.ba();
            a.A = 0;
            a.fa();
            if (b.ra) {
                b.ra = !1;
                try {
                    var c = a.S(b.responseText);
                    a.AudienceManagement.passData(c)
                } catch (d) {}
            }
        };
        b.onabort = b.onerror = b.hb = function() {
            b.ua();
            (a.trackOffline || a.la) && a.A && a.g.unshift(a.eb);
            a.A = 0;
            a.ha > a.J && a.Fa(a.g);
            a.ba();
            a.oa(500)
        };
        b.onreadystatechange = function() {
            4 == b.readyState && (200 == b.status ? b.yb() :
                b.hb())
        };
        a.Ea = a.u();
        if (1 == d || 2 == d) {
            var e = c.indexOf("?");
            f = c.substring(0, e);
            e = c.substring(e + 1);
            e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
            1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
        } else if (b.src = c, 3 == d) {
            if (a.Ca) try {
                f.removeChild(a.Ca)
            } catch (g) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Ca = a.cb
        }
        b.abort && (a.na = setTimeout(b.abort, 5E3));
        a.eb = c;
        a.cb = k["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracking && a.F || a.r) a.forcedLinkTrackingTimeout ||
            (a.forcedLinkTrackingTimeout = 250), a.ca = setTimeout(a.ba, a.forcedLinkTrackingTimeout)
    };
    a.fb = function() {
        if (a.ma() && !(a.Da > a.J)) try {
            k.localStorage.removeItem(a.ka()), a.Da = a.u()
        } catch (c) {}
    };
    a.Fa = function(c) {
        if (a.ma()) {
            a.Ha();
            try {
                k.localStorage.setItem(a.ka(), k.JSON.stringify(c)), a.J = a.u()
            } catch (b) {}
        }
    };
    a.Ha = function() {
        if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
            for (; a.g.length > a.offlineLimit;) a.wa()
        }
    };
    a.forceOffline = function() {
        a.la = !0
    };
    a.forceOnline = function() {
        a.la = !1
    };
    a.ka =
        function() {
            return a.offlineFilename + "-" + a.visitorNamespace + a.account
        };
    a.u = function() {
        return (new Date).getTime()
    };
    a.Aa = function(a) {
        a = a.toLowerCase();
        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    };
    a.setTagContainer = function(c) {
        var b, d, f;
        a.zb = c;
        for (b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
                a.M(d);
                if (d.lmq)
                    for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
                if (d.ml)
                    for (f in d.ml)
                        if (a[f])
                            for (b in c = a[f],
                                f = d.ml[f], f) !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
                if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                if (d.tq)
                    for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                d.s = a;
                break
            }
    };
    a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(c, b, d) {
            var f;
            b || (b = a.pageURL ? a.pageURL : k.location);
            d || (d = "&");
            return c &&
                b && (b = "" + b, f = b.indexOf("?"), 0 <= f && (b = d + b.substring(f + 1) + d, f = b.indexOf(d + c + "="), 0 <= f && (b = b.substring(f + d.length + c.length + 1), f = b.indexOf(d), 0 <= f && (b = b.substring(0, f)), 0 < b.length))) ? a.unescape(b) : ""
        }
    };
    a.B = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
    a.e = a.B.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.ia = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.K = a.ia.slice(0);
    a.qa = "account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
    for (n = 0; 250 >= n; n++) 76 > n && (a.e.push("prop" + n), a.K.push("prop" + n)), a.e.push("eVar" + n), a.K.push("eVar" + n), 6 > n && a.e.push("hier" + n), 4 > n && a.e.push("list" + n);
    n = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");
    a.e = a.e.concat(n);
    a.B = a.B.concat(n);
    a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.offlineThrottleDelay = 0;
    a.offlineFilename =
        "AppMeasurement.offline";
    a.Ea = 0;
    a.ha = 0;
    a.J = 0;
    a.Da = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = k;
    a.d = k.document;
    try {
        if (a.Ia = !1, navigator) {
            var y = navigator.userAgent;
            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= y.indexOf("MSIE ") || 0 <= y.indexOf("Trident/") && 0 <= y.indexOf("Windows NT 6")) a.Ia = !0
        }
    } catch (z) {}
    a.ba = function() {
        a.ca && (k.clearTimeout(a.ca), a.ca = q);
        a.j && a.F && a.j.dispatchEvent(a.F);
        a.r && ("function" == typeof a.r ? a.r() : a.j && a.j.href && (a.d.location =
            a.j.href));
        a.j = a.F = a.r = 0
    };
    a.Ga = function() {
        a.b = a.d.body;
        a.b ? (a.q = function(c) {
            var b, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.ta)
                    if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.q, !1);
                    else {
                        a.b.removeEventListener("click", a.q, !0);
                        a.ta = a.useForcedLinkTracking = 0;
                        return
                    }
                else a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.I && a.I == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject =
                        0;
                    else {
                        var m = a.I = a.clickObject;
                        a.ga && (clearTimeout(a.ga), a.ga = 0);
                        a.ga = setTimeout(function() {
                            a.I == m && (a.I = 0)
                        }, 1E4);
                        f = a.ya();
                        a.track();
                        if (f < a.ya() && a.useForcedLinkTracking && c.target) {
                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
                            if (e && (g = e.href, a.Aa(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                try {
                                    b = a.d.createEvent("MouseEvents")
                                } catch (n) {
                                    b = new k.MouseEvent
                                }
                                if (b) {
                                    try {
                                        b.initMouseEvent("click",
                                            c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                    } catch (q) {
                                        b = 0
                                    }
                                    b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.j = c.target, a.F = b)
                                }
                            }
                        }
                    }
                } catch (r) {
                    a.clickObject = 0
                }
            }
        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.q) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") &&
            k.MouseEvent) && (a.ta = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.q, !0)), a.b.addEventListener("click", a.q, !1))) : setTimeout(a.Ga, 30)
    };
    a.Ga();
    a.loadModule("ActivityMap")
}

function s_gi(a) {
    var k, q = window.s_c_il,
        r, n, t = a.split(","),
        u, s, x = 0;
    if (q)
        for (r = 0; !x && r < q.length;) {
            k = q[r];
            if ("s_c" == k._c && (k.account || k.oun))
                if (k.account && k.account == a) x = 1;
                else
                    for (n = k.account ? k.account : k.oun, n = k.allAccounts ? k.allAccounts : n.split(","), u = 0; u < t.length; u++)
                        for (s = 0; s < n.length; s++) t[u] == n[s] && (x = 1);
            r++
        }
    x || (k = new AppMeasurement);
    k.setAccount ? k.setAccount(a) : k.sa && k.sa(a);
    return k
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);

function s_pgicq() {
    var a = window,
        k = a.s_giq,
        q, r, n;
    if (k)
        for (q = 0; q < k.length; q++) r = k[q], n = s_gi(r.oun), n.setAccount(r.un), n.setTagContainer(r.tagContainerName);
    a.s_giq = 0
}
s_pgicq();