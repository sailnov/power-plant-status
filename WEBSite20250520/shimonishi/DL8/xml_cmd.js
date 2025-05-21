//=============================================================================
//
//=============================================================================
var httpObj;

var httpCmd;
var httpCmd_doing = 0;

var timer;
var timeout_callback = null;


//=============================================================================
//
//=============================================================================
function update_header()
{
	var str;
	str = dl_name1;
	document.getElementById("name1").innerHTML = str;
	str = dl_name2;
	document.getElementById("name2").innerHTML = str;
	str = dl_name3;
	document.getElementById("name3").innerHTML = str;
	str = dl_time2;
	document.getElementById("time").innerHTML = str;
	str = dl_time1;
	document.getElementById("date").innerHTML = str;
}

function update_header_time()
{
	var str;
	str = dl_time2;
	document.getElementById("time").innerHTML = str;
	str = dl_time1;
	document.getElementById("date").innerHTML = str;
}


//=============================================================================
//	Auto Update
//=============================================================================
function update_timeout()
{
	clearInterval( timer );
	httpObj.abort();
	timeout_callback();
}

function update_data_ai( callback, timeout_cbk )
{
	if( httpCmd_doing ){
		if( timeout_cbk ){
			timeout_cbk();
		}
		return;
	}

	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			return;
		}
	} catch( e ){
		return;
	}

	if( timeout_cbk ){
		timeout_callback = timeout_cbk;
		timer = setInterval("update_timeout()",10000);
	}

	httpObj.open( "get", "data_ai.json", true );
	httpObj.setRequestHeader('Pragma', 'no-cache');
	httpObj.setRequestHeader('Cache-Control', 'no-cache');
	httpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	httpObj.send( null );
	httpObj.onreadystatechange = function(){
		if( httpObj.readyState == 4 ){
			if( httpObj.status == 200 ){
				clearInterval( timer );

				var d = JSON.parse(this.responseText);
				dl_time1       = d.dl_time1;
				dl_time2       = d.dl_time2;
				ai_real        = d.ai_real;
				ai_per         = d.ai_per;
				ai_color       = d.ai_color;
				ai_area        = d.ai_area;

				if( callback ) callback();
			}
		}
	}
}

function update_data_di( callback, timeout_cbk )
{
	if( httpCmd_doing ){
		if( timeout_cbk ){
			timeout_cbk();
		}
		return;
	}

	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			return;
		}
	} catch( e ){
		return;
	}

	if( timeout_cbk ){
		timeout_callback = timeout_cbk;
		timer = setInterval("update_timeout()",10000);
	}

	httpObj.open( "get", "data_di.json", true );
	httpObj.setRequestHeader('Pragma', 'no-cache');
	httpObj.setRequestHeader('Cache-Control', 'no-cache');
	httpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	httpObj.send( null );
	httpObj.onreadystatechange = function(){
		if( httpObj.readyState == 4 ){
			if( httpObj.status == 200 ){
				clearInterval( timer );

				var d = JSON.parse(this.responseText);
				dl_time1       = d.dl_time1;
				dl_time2       = d.dl_time2;
				di_count       = d.di_count;
				di_data        = d.di_data;
				di_color       = d.di_color;

				if( callback ) callback();
			}
		}
	}
}

function update_data_pi( callback, timeout_cbk )
{
	if( httpCmd_doing ){
		if( timeout_cbk ){
			timeout_cbk();
		}
		return;
	}

	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			return;
		}
	} catch( e ){
		return;
	}

	if( timeout_cbk ){
		timeout_callback = timeout_cbk;
		timer = setInterval("update_timeout()",10000);
	}

	httpObj.open( "get", "data_pi.json", true );
	httpObj.setRequestHeader('Pragma', 'no-cache');
	httpObj.setRequestHeader('Cache-Control', 'no-cache');
	httpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	httpObj.send( null );
	httpObj.onreadystatechange = function(){
		if( httpObj.readyState == 4 ){
			if( httpObj.status == 200 ){
				clearInterval( timer );
				var d = JSON.parse(this.responseText);
				dl_time1       = d.dl_time1;
				dl_time2       = d.dl_time2;
				pi_real        = d.pi_real;
				pi_per         = d.pi_per;
				pi_color       = d.pi_color;
				pi_area        = d.pi_area;

				if( callback ) callback();
			}
		}
	}
}

function update_data_do( callback, timeout_cbk )
{
	if( httpCmd_doing ){
		if( timeout_cbk ){
			timeout_cbk();
		}
		return;
	}

	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			return;
		}
	} catch( e ){
		return;
	}

	if( timeout_cbk ){
		timeout_callback = timeout_cbk;
		timer = setInterval("update_timeout()",10000);
	}

	httpObj.open( "get", "data_do.json", true );
	httpObj.setRequestHeader('Pragma', 'no-cache');
	httpObj.setRequestHeader('Cache-Control', 'no-cache');
	httpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	httpObj.send( null );
	httpObj.onreadystatechange = function(){
		if( httpObj.readyState == 4 ){
			if( httpObj.status == 200 ){
				clearInterval( timer );

				var d = JSON.parse(this.responseText);
				dl_time1       = d.dl_time1;
				dl_time2       = d.dl_time2;
				do_data        = d.do_data;
				do_color       = d.do_color;

				if( callback ) callback();
			}
		}
	}
}

function update_data_ao( callback, timeout_cbk )
{
	if( httpCmd_doing ){
		if( timeout_cbk ){
			timeout_cbk();
		}
		return;
	}

	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			return;
		}
	} catch( e ){
		return;
	}

	if( timeout_cbk ){
		timeout_callback = timeout_cbk;
		timer = setInterval("update_timeout()",10000);
	}

	httpObj.open( "get", "data_ao.json", true );
	httpObj.setRequestHeader('Pragma', 'no-cache');
	httpObj.setRequestHeader('Cache-Control', 'no-cache');
	httpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	httpObj.send( null );
	httpObj.onreadystatechange = function(){
		if( httpObj.readyState == 4 ){
			if( httpObj.status == 200 ){
				clearInterval( timer );

				var d = JSON.parse(this.responseText);
				dl_time1       = d.dl_time1;
				dl_time2       = d.dl_time2;
//				ai_real        = d.ai_real;
				ao_real         = d.ao_real;
//				ai_color       = d.ai_color;
//				ai_area        = d.ai_area;

				if( callback ) callback();
			}
		}
	}
}

function update_event( callback, timeout_cbk )
{
	if( httpCmd_doing ){
		if( timeout_cbk ){
			timeout_cbk();
		}
		return;
	}

	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			return;
		}
	} catch( e ){
		return;
	}

	if( timeout_cbk ){
		timeout_callback = timeout_cbk;
		timer = setInterval("update_timeout()",10000);
	}

	httpObj.open( "get", "event_log.json", true );
	httpObj.setRequestHeader('Pragma', 'no-cache');
	httpObj.setRequestHeader('Cache-Control', 'no-cache');
	httpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	httpObj.send( null );
	httpObj.onreadystatechange = function(){
		if( httpObj.readyState == 4 ){
			if( httpObj.status == 200 ){
				clearInterval( timer );

				var d = JSON.parse(this.responseText);
				dl_time1       = d.dl_time1;
				dl_time2       = d.dl_time2;
				ev_time1       = d.ev_time1;
				ev_time2       = d.ev_time2;
				event_cnt      = d.event_cnt;
				ev_ch          = d.ev_ch;
				ev_name        = d.ev_name;
				ev_comment     = d.ev_comment;
				ev_message     = d.ev_message;
				ev_color       = d.ev_color;

				if( callback ) callback();
			}
		}
	}
}


//=============================================================================
//	File Get
//=============================================================================
function httpRequest_get( target_url )
{
	var Obj;

	try{
	    if( window.XMLHttpRequest ){
			Obj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			Obj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			return;
		}
	} catch( e ){
		return;
	}

	Obj.open( "get", target_url, false );
	Obj.setRequestHeader('Pragma', 'no-cache');
	Obj.setRequestHeader('Cache-Control', 'no-cache');
	Obj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	Obj.send( null );
	Obj.onreadystatechange = function(){
		if( Obj.readyState == 4 ){
			if( Obj.status == 200 ){
				// OK
				
			}
		}
	}
}

function file_load_ie( url)
{
	var userAgent = window.navigator.userAgent.toLowerCase();
	if( (userAgent.indexOf("msie") > -1) || (userAgent.indexOf("trident") > -1) || (userAgent.indexOf("opera") > -1) ){
		httpRequest_get( url );
	}
}

function file_load( url)
{
	httpRequest_get( url );
}

function update_data( filename, callback ) {
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", filename);
	var userAgent = window.navigator.userAgent.toLowerCase();
	if( (userAgent.indexOf("msie") > -1) || (userAgent.indexOf("trident") > -1) || (userAgent.indexOf("opera") > -1) ){
		if( script.addEventListener ){
			script.addEventListener("load",callback,false);
		}else if(script.readyState) {
			script.onreadystatechange = function(){
				if(script.readyState == "complete"|| script.readyState == "loaded" ){
					if( callback ) callback();
				}
			};
		}
	}else{
		script.onload = function(){
			if( callback ) callback();
		};
	}
	document.getElementsByTagName("head")[0].appendChild(script);
}


//=============================================================================
//	Callback
//=============================================================================
function DI_Update()
{
	update_data_di( update_auto, null );
	return;
}
function PI_Update()
{
	update_data_pi( update_auto, null );
	return;
}
function DO_Update()
{
	update_data_do( update_auto, null );
	return;
}
function AO_Update()
{
	update_data_ao( update_auto, null );
	return;
}


//=============================================================================
//	Command Request
//=============================================================================
function httpRequest( target_url, method, data, callback )
{
	if( httpCmd_doing ){
		return;
	}
	httpCmd_doing = 1;

	try{
	    if( window.XMLHttpRequest ){
			httpCmd = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpCmd = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			httpCmd_doing = 0;
			return;
		}
	} catch( e ){
		httpCmd_doing = 0;
		return;
	}

	timer = setInterval("timeoutError()",60000);	// timer=60s

	httpCmd.open(method, target_url, true);
	httpCmd.send(data);
	httpCmd.onreadystatechange = function(){
		if( httpCmd.readyState == 4 ){
			httpCmd_doing = 0;
			clearInterval(timer);
			if( httpCmd.status == 200 ){
				callback();
			}
		}
	}

	return;
}

function timeoutError()
{
	httpCmd_doing = 0;
	clearInterval(timer);
	httpCmd.abort();
//	alert('Time Out');
}

//=============================================================================
//	Command Function
//=============================================================================
function OutputDO( ch, cmd, name, stat )
{
	var t_open,t_close,data;
	var str = name + " -> " + stat + "?";
	if( confirm(str) == true ){
		t_open  = "<CH" + ch + ">";
		t_close = "</CH" + ch + ">";

		// Start XML
		data = '<?xml version="1.0" encoding="utf-8"?> '+'\r\n';

		// 
		data = data + '<DL_CMD>'+'\r\n';

		data = data + '<DO>'+'\r\n';

		// Command
		data = data + t_open + cmd + t_close +"\r\n";

		data = data + '</DO>'+'\r\n';

		// End XML
		data = data + "</DL_CMD>"+"\r\n";

		// File Send
		httpRequest( "./command.xml", "post", data, DO_Update );
	}
}

function OutputAO( ch, local_ch )
{
	var t_open,t_close,data,v_data,msg;
	var n_data = ao_real[local_ch];
	var value = window.prompt( "AO" + ch + " [%]", n_data );
	
	msg = "Illegal input value";
	
	if( value == null ){
		return;
	}

	if( value == "" ){
		return;
	}

	if( isNaN(value) == true ){
		alert(msg);
		return;
	}
	
	if( (parseFloat( value ) > 10000000000.0) || (parseFloat( value ) < -10000000000.0) ){
		alert(msg);
		return;
	}
	
	if( (parseFloat( value ) < parseFloat( ao_lower[local_ch] )) || (parseFloat( value ) > parseFloat( ao_upper[local_ch] )) ){
		alert(msg);
		return;
	}

	t_open  = "<CH" + ch + ">";
	t_close = "</CH" + ch + ">";

	// Start XML
	data = '<?xml version="1.0" encoding="utf-8"?> '+'\r\n';

	// 
	data = data + '<DL_CMD>'+'\r\n';

	data = data + '<AO>'+'\r\n';

	// Command
	data = data + t_open + value + t_close +"\r\n";

	data = data + '</AO>'+'\r\n';

	// End XML
	data = data + "</DL_CMD>"+"\r\n";

	// File Send
	httpRequest( "./command.xml", "post", data, AO_Update );
}

function ResetCi( ch, name )
{
	var t_open,t_close,data;
	var str = name + " Reset?";
	if( confirm(str) == true ){
		t_open  = "<CH" + ch + ">";
		t_close = "</CH" + ch + ">";

		// Start XML
		data = '<?xml version="1.0" encoding="utf-8"?> '+'\r\n';

		// 
		data = data + '<DL_CMD>'+'\r\n';

		data = data + '<CI>'+'\r\n';

		// Command
		data = data + t_open + 'RESET' + t_close +"\r\n";

		data = data + '</CI>'+'\r\n';

		// End XML
		data = data + "</DL_CMD>"+"\r\n";

		// File Send
		httpRequest( "./command.xml", "post", data, DI_Update );
	}
}

function ResetPi( ch, name )
{
	var t_open,t_close,data;
	var str = name + " Reset?";
	if( confirm(str) == true ){
		t_open  = "<CH" + ch + ">";
		t_close = "</CH" + ch + ">";

		// Start XML
		data = '<?xml version="1.0" encoding="utf-8"?> '+'\r\n';

		// 
		data = data + '<DL_CMD>'+'\r\n';

		data = data + '<PI>'+'\r\n';

		// Command
		data = data + t_open + 'RESET' + t_close +"\r\n";

		data = data + '</PI>'+'\r\n';

		// End XML
		data = data + "</DL_CMD>"+"\r\n";

		// File Send
		httpRequest( "./command.xml", "post", data, PI_Update );
	}
}

