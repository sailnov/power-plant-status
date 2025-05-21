var AvailableLocalStorage = null;

function localstorageAvailable() {
    if(AvailableLocalStorage != null) 
        return AvailableLocalStorage;

    try {
        var storage;
        storage = window["localStorage"];
        var x = '__storage_test__';
		storage.setItem(x, x);
		if( storage.getItem(x) != x){
			storage.removeItem(x);
			AvailableLocalStorage = false;
			return false;
		}
        storage.removeItem(x);
        AvailableLocalStorage = true;
        return true;
    }
    catch(e) {
		AvailableLocalStorage = false;
        return false;
    }
}

function getCookieSub(key,  tmp1, tmp2, xx1, xx2, xx3) {
    tmp1 = " " + document.cookie + ";";
    xx1 = xx2 = 0;
    len = tmp1.length;
    while (xx1 < len) {
        xx2 = tmp1.indexOf(";", xx1);
        tmp2 = tmp1.substring(xx1 + 1, xx2);
        xx3 = tmp2.indexOf("=");
        if (tmp2.substring(0, xx3) == key) {
            return(unescape(tmp2.substring(xx3 + 1, xx2 - xx1 - 1)));
        }
        xx1 = xx2 + 1;
    }
    return("");
}

function getLocalStorageSub(key) {

	var path =  location.pathname.substring(0,location.pathname.lastIndexOf("/"));
	var port = location.port;
	var val = null;

	// Cookieが自パスより上位を参照可能なため
	while(1){
		val = localStorage.getItem(port + path + "/" +key);
		if(val != null) break;	
		path = path.substring(0, path.lastIndexOf("/"));
		if (path == "") break;
	}
	
	if(val == null) return ("");
    return val;
}

function getCookie(key,  tmp1, tmp2, xx1, xx2, xx3) {

    if(localstorageAvailable()){

		var val = getLocalStorageSub(key);
		if (val == ""){
			val = getCookieSub(key,  tmp1, tmp2, xx1, xx2, xx3);
			if(val != "" )	setCookie(key, val);
		}
		return val;
    }
    else{
        return getCookieSub(key,  tmp1, tmp2, xx1, xx2, xx3);
    }
}

function setCookieSub(key, val, tmp) {
    tmp = key + "=" + escape(val) + "; ";
//    tmp += "path=" + location.pathname + "; ";
//    tmp += "expires=Tue, 31-Dec-2030 23:59:59; ";
    tim = new Date();
    tim.setTime(tim.getTime()+1000*60*60*24*20);
    tmp += "expires=" + tim.toGMTString() + "; ";
    document.cookie = tmp;
}

function setLocalStorageSub(key, val) {

	var path =  location.pathname.substring(0,location.pathname.lastIndexOf("/"));
	var port = location.port;
	localStorage.setItem(port + path + "/" +key, val);
}

function setCookie(key, val, tmp) {

    if(localstorageAvailable()){
        setLocalStorageSub(key, val);
    }
    else{
        setCookieSub(key, val, tmp);
    }
}

function setCookieXSub(key, val, tmp) {
	/*
		tmp = key + "=" + escape(val) + "; ";
	//    tmp += "path=" + location.pathname + "; ";
		tmp += "expires=Tue, 31-Dec-2030 23:59:59; ";
		document.cookie = tmp;
	*/
	
		tmp = key + "=" + escape(val) + "; ";
	//    tmp += "path=" + location.pathname + "; ";
	//    tmp += "expires=Tue, 31-Dec-2030 23:59:59; ";
		tim = new Date();
	//    tim.setTime(tim.getTime()+1000*60*60*24*20);
		tim.setTime(tim.getTime()+1000*60*60*24*365*10);
		tmp += "expires=" + tim.toGMTString() + "; ";
		document.cookie = tmp;
	}

function setCookieX(key, val, tmp) {

    if(localstorageAvailable()){
        setLocalStorageSub(key, val);
    }
    else{
        setCookieXSub(key, val, tmp);
    }
}

function clearCookieSub(key) {
    document.cookie = key + "=" + "xx; expires=Tue, 1-Jan-1980 00:00:00;";
}

function clearCookie(key) {

	if(localstorageAvailable()){
        key =  location.pathname.substring(0,location.pathname.lastIndexOf("/")) + "/" +key;
		var port = location.port;
		localStorage.removeItem(port + key);
    }
    else{
        clearCookieSub(key);
    }
}


var	httpObj;
function httpRequest_get2( target_url )
{
	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
//			alert('ERROR!');
			return;
		}
	} catch( e ){
//		alert('ERROR!');
		return;
	}
	ok = 0;
	httpObj.open( "get", target_url, false );
	httpObj.setRequestHeader('Pragma', 'no-cache');
	httpObj.setRequestHeader('Cache-Control', 'no-cache');
	httpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	httpObj.send( null );
    if( httpObj.readyState == 4 ){
		if( httpObj.status == 200 ){
			ok = 1;
		}
    }
//	if( !ok ) alert('ERROR!!');
}

function file_load_ie2( url)
{
	var userAgent = window.navigator.userAgent.toLowerCase();
	if( (userAgent.indexOf("msie") > -1) || (userAgent.indexOf("trident") > -1) || (userAgent.indexOf("opera") > -1) ){
		httpRequest_get2( url );
	}
}

function disp_menu(){
	file_load_ie2( "./index.html" );
	document.location = "index.html";
}

function disp_data(){
	type = getCookie("DATA_TYPE");
	if( type == "AI" ){
		file_load_ie2( "./data_ai.html" );
		file_load_ie2( "./data_ai.js" );
		document.location = "data_ai.html";
	} else if( type == "DI" ){
		file_load_ie2( "./data_di.html" );
		file_load_ie2( "./data_di.js" );
		document.location = "data_di.html";
	} else if( type == "PI" ){
		file_load_ie2( "./data_pi.html" );
		file_load_ie2( "./data_pi.js" );
		document.location = "data_pi.html";
	} else if( type == "DO" ){
		file_load_ie2( "./data_do.html" );
		file_load_ie2( "./data_do.js" );
		document.location = "data_do.html";
	} else if( type == "AO" ){
		file_load_ie2( "./data_ao.html" );
		file_load_ie2( "./data_ao.js" );
		document.location = "data_ao.html";
	} else{
		file_load_ie2( "./data_ai.html" );
		file_load_ie2( "./data_ai.js" );
		document.location = "data_ai.html";
	}
}

function disp_trend(){
	page = getCookie("TREND_PAGE");
	if( page == "p1" ){
		file_load_ie2( "./trend_p1.html" );
		file_load_ie2( "./trend_p1.js" );
		document.location = "trend_p1.html";
	} else if( page == "p2" ){
		file_load_ie2( "./trend_p2.html" );
		file_load_ie2( "./trend_p2.js" );
		document.location = "trend_p2.html";
	} else if( page == "p3" ){
		file_load_ie2( "./trend_p3.html" );
		file_load_ie2( "./trend_p3.js" );
		document.location = "trend_p3.html";
	} else if( page == "p4" ){
		file_load_ie2( "./trend_p4.html" );
		file_load_ie2( "./trend_p4.js" );
		document.location = "trend_p4.html";
	} else if( page == "p5" ){
		file_load_ie2( "./trend_p5.html" );
		file_load_ie2( "./trend_p5.js" );
		document.location = "trend_p5.html";
	} else if( page == "p6" ){
		file_load_ie2( "./trend_p6.html" );
		file_load_ie2( "./trend_p6.js" );
		document.location = "trend_p6.html";
	} else if( page == "p7" ){
		file_load_ie2( "./trend_p7.html" );
		file_load_ie2( "./trend_p7.js" );
		document.location = "trend_p7.html";
	} else if( page == "p8" ){
		file_load_ie2( "./trend_p8.html" );
		file_load_ie2( "./trend_p8.js" );
		document.location = "trend_p8.html";
	} else{
		file_load_ie2( "./trend_p1.html" );
		file_load_ie2( "./trend_p1.js" );
		document.location = "trend_p1.html";
	}
}

function disp_trend_page(page){
	setCookie("TREND_PAGE",page);
	if( page == "p1" ){
		file_load_ie2( "./trend_p1.html" );
		file_load_ie2( "./trend_p1.js" );
		document.location = "trend_p1.html";
	} else if( page == "p2" ){
		file_load_ie2( "./trend_p2.html" );
		file_load_ie2( "./trend_p2.js" );
		document.location = "trend_p2.html";
	} else if( page == "p3" ){
		file_load_ie2( "./trend_p3.html" );
		file_load_ie2( "./trend_p3.js" );
		document.location = "trend_p3.html";
	} else if( page == "p4" ){
		file_load_ie2( "./trend_p4.html" );
		file_load_ie2( "./trend_p4.js" );
		document.location = "trend_p4.html";
	} else if( page == "p5" ){
		file_load_ie2( "./trend_p5.html" );
		file_load_ie2( "./trend_p5.js" );
		document.location = "trend_p5.html";
	} else if( page == "p6" ){
		file_load_ie2( "./trend_p6.html" );
		file_load_ie2( "./trend_p6.js" );
		document.location = "trend_p6.html";
	} else if( page == "p7" ){
		file_load_ie2( "./trend_p7.html" );
		file_load_ie2( "./trend_p7.js" );
		document.location = "trend_p7.html";
	} else if( page == "p8" ){
		file_load_ie2( "./trend_p8.html" );
		file_load_ie2( "./trend_p8.js" );
		document.location = "trend_p8.html";
	} else{
		file_load_ie2( "./trend_p1.html" );
		file_load_ie2( "./trend_p1.js" );
		document.location = "trend_p1.html";
	}
}

function disp_event()
{
	file_load_ie2( "./event.html" );
	file_load_ie2( "./event_log.js" );
	document.location = "event.html";
}

function update()
{
	document.location = document.location;
}

function data_ai(){
	setCookie( "DATA_TYPE", "AI" );
	file_load_ie2( "./data_ai.html" );
	file_load_ie2( "./data_ai.js" );
	document.location = "data_ai.html";
}

function data_di(){
	setCookie( "DATA_TYPE", "DI" );
	file_load_ie2( "./data_di.html" );
	file_load_ie2( "./data_di.js" );
	document.location = "data_di.html";
}

function data_pi(){
	setCookie( "DATA_TYPE", "PI" );
	file_load_ie2( "./data_pi.html" );
	file_load_ie2( "./data_pi.js" );
	document.location = "data_pi.html";
}

function data_do(){
	setCookie( "DATA_TYPE", "DO" );
	file_load_ie2( "./data_do.html" );
	file_load_ie2( "./data_do.js" );
	document.location = "data_do.html";
}

function data_ao(){
	setCookie( "DATA_TYPE", "AO" );
	file_load_ie2( "./data_ao.html" );
	file_load_ie2( "./data_ao.js" );
	document.location = "data_ao.html";
}

