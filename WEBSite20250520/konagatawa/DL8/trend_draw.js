
var window_x_def = 720;
var scale_x = 7200;
var scale_y = 370;
var scale_offset = 25;
var canvas_x,window_x;

var trend_samples;
var trend_year;
var trend_mon;
var trend_day;
var trend_hour;
var trend_min;
var trend_sec;
var trend_pagename;
var trend_speed;
var trend_type;
var trend_name;
var trend_comm;
var trend_color;
var trend_unit;
var trend_offset;
var trend_thick;
var trend_range1;
var trend_range2;
var trend_range3;
var trend_range4;
var trend_ch1;
var trend_ch2;
var trend_ch3;
var trend_ch4;

var draw_pen;

function trend_init( page )
{
    draw_pen = new Array(4);
    draw_pen[0] = new cursor_pen("01", "pen_bkground");
    draw_pen[1] = new cursor_pen("02", "pen_bkground");
    draw_pen[2] = new cursor_pen("03", "pen_bkground");
    draw_pen[3] = new cursor_pen("04", "pen_bkground");

	if( page == "p1" ){
		trend_samples  = trend_p1_samples;
		trend_max_smp  = trend_p1_max_smp;
		trend_year     = trend_p1_year;
		trend_mon      = trend_p1_mon;
		trend_day      = trend_p1_day;
		trend_hour     = trend_p1_hour;
		trend_min      = trend_p1_min;
		trend_sec      = trend_p1_sec;
		trend_pagename = trend_p1_pagename;
		trend_speed    = trend_p1_speed;
		trend_type     = trend_p1_type;
		trend_name     = trend_p1_name;
		trend_comm     = trend_p1_comm;
		trend_color    = trend_p1_color;
		trend_point    = trend_p1_point;
		trend_unit_on  = trend_p1_unit_on;
		trend_unit_off = trend_p1_unit_off;
		trend_offset   = trend_p1_offset;
		trend_thick    = trend_p1_thick;
		trend_range1   = trend_p1_range1;
		trend_range2   = trend_p1_range2;
		trend_range3   = trend_p1_range3;
		trend_range4   = trend_p1_range4;
		trend_ch1      = trend_p1_ch1;
		trend_ch2      = trend_p1_ch2;
		trend_ch3      = trend_p1_ch3;
		trend_ch4      = trend_p1_ch4;
	} else if( page == "p2" ){
		trend_samples  = trend_p2_samples;
		trend_max_smp  = trend_p2_max_smp;
		trend_year     = trend_p2_year;
		trend_mon      = trend_p2_mon;
		trend_day      = trend_p2_day;
		trend_hour     = trend_p2_hour;
		trend_min      = trend_p2_min;
		trend_sec      = trend_p2_sec;
		trend_pagename = trend_p2_pagename;
		trend_speed    = trend_p2_speed;
		trend_type     = trend_p2_type;
		trend_name     = trend_p2_name;
		trend_comm     = trend_p2_comm;
		trend_color    = trend_p2_color;
		trend_point    = trend_p2_point;
		trend_unit_on  = trend_p2_unit_on;
		trend_unit_off = trend_p2_unit_off;
		trend_offset   = trend_p2_offset;
		trend_thick    = trend_p2_thick;
		trend_range1   = trend_p2_range1;
		trend_range2   = trend_p2_range2;
		trend_range3   = trend_p2_range3;
		trend_range4   = trend_p2_range4;
		trend_ch1      = trend_p2_ch1;
		trend_ch2      = trend_p2_ch2;
		trend_ch3      = trend_p2_ch3;
		trend_ch4      = trend_p2_ch4;
	} else if( page == "p3" ){
		trend_samples  = trend_p3_samples;
		trend_max_smp  = trend_p3_max_smp;
		trend_year     = trend_p3_year;
		trend_mon      = trend_p3_mon;
		trend_day      = trend_p3_day;
		trend_hour     = trend_p3_hour;
		trend_min      = trend_p3_min;
		trend_sec      = trend_p3_sec;
		trend_pagename = trend_p3_pagename;
		trend_speed    = trend_p3_speed;
		trend_type     = trend_p3_type;
		trend_name     = trend_p3_name;
		trend_comm     = trend_p3_comm;
		trend_color    = trend_p3_color;
		trend_point    = trend_p3_point;
		trend_unit_on  = trend_p3_unit_on;
		trend_unit_off = trend_p3_unit_off;
		trend_offset   = trend_p3_offset;
		trend_thick    = trend_p3_thick;
		trend_range1   = trend_p3_range1;
		trend_range2   = trend_p3_range2;
		trend_range3   = trend_p3_range3;
		trend_range4   = trend_p3_range4;
		trend_ch1      = trend_p3_ch1;
		trend_ch2      = trend_p3_ch2;
		trend_ch3      = trend_p3_ch3;
		trend_ch4      = trend_p3_ch4;
	} else if( page == "p4" ){
		trend_samples  = trend_p4_samples;
		trend_max_smp  = trend_p4_max_smp;
		trend_year     = trend_p4_year;
		trend_mon      = trend_p4_mon;
		trend_day      = trend_p4_day;
		trend_hour     = trend_p4_hour;
		trend_min      = trend_p4_min;
		trend_sec      = trend_p4_sec;
		trend_pagename = trend_p4_pagename;
		trend_speed    = trend_p4_speed;
		trend_type     = trend_p4_type;
		trend_name     = trend_p4_name;
		trend_comm     = trend_p4_comm;
		trend_color    = trend_p4_color;
		trend_point    = trend_p4_point;
		trend_unit_on  = trend_p4_unit_on;
		trend_unit_off = trend_p4_unit_off;
		trend_offset   = trend_p4_offset;
		trend_thick    = trend_p4_thick;
		trend_range1   = trend_p4_range1;
		trend_range2   = trend_p4_range2;
		trend_range3   = trend_p4_range3;
		trend_range4   = trend_p4_range4;
		trend_ch1      = trend_p4_ch1;
		trend_ch2      = trend_p4_ch2;
		trend_ch3      = trend_p4_ch3;
		trend_ch4      = trend_p4_ch4;
	} else if( page == "p5" ){
		trend_samples  = trend_p5_samples;
		trend_max_smp  = trend_p5_max_smp;
		trend_year     = trend_p5_year;
		trend_mon      = trend_p5_mon;
		trend_day      = trend_p5_day;
		trend_hour     = trend_p5_hour;
		trend_min      = trend_p5_min;
		trend_sec      = trend_p5_sec;
		trend_pagename = trend_p5_pagename;
		trend_speed    = trend_p5_speed;
		trend_type     = trend_p5_type;
		trend_name     = trend_p5_name;
		trend_comm     = trend_p5_comm;
		trend_color    = trend_p5_color;
		trend_point    = trend_p5_point;
		trend_unit_on  = trend_p5_unit_on;
		trend_unit_off = trend_p5_unit_off;
		trend_offset   = trend_p5_offset;
		trend_thick    = trend_p5_thick;
		trend_range1   = trend_p5_range1;
		trend_range2   = trend_p5_range2;
		trend_range3   = trend_p5_range3;
		trend_range4   = trend_p5_range4;
		trend_ch1      = trend_p5_ch1;
		trend_ch2      = trend_p5_ch2;
		trend_ch3      = trend_p5_ch3;
		trend_ch4      = trend_p5_ch4;
	} else if( page == "p6" ){
		trend_samples  = trend_p6_samples;
		trend_max_smp  = trend_p6_max_smp;
		trend_year     = trend_p6_year;
		trend_mon      = trend_p6_mon;
		trend_day      = trend_p6_day;
		trend_hour     = trend_p6_hour;
		trend_min      = trend_p6_min;
		trend_sec      = trend_p6_sec;
		trend_pagename = trend_p6_pagename;
		trend_speed    = trend_p6_speed;
		trend_type     = trend_p6_type;
		trend_name     = trend_p6_name;
		trend_comm     = trend_p6_comm;
		trend_color    = trend_p6_color;
		trend_point    = trend_p6_point;
		trend_unit_on  = trend_p6_unit_on;
		trend_unit_off = trend_p6_unit_off;
		trend_offset   = trend_p6_offset;
		trend_thick    = trend_p6_thick;
		trend_range1   = trend_p6_range1;
		trend_range2   = trend_p6_range2;
		trend_range3   = trend_p6_range3;
		trend_range4   = trend_p6_range4;
		trend_ch1      = trend_p6_ch1;
		trend_ch2      = trend_p6_ch2;
		trend_ch3      = trend_p6_ch3;
		trend_ch4      = trend_p6_ch4;
	} else if( page == "p7" ){
		trend_samples  = trend_p7_samples;
		trend_max_smp  = trend_p7_max_smp;
		trend_year     = trend_p7_year;
		trend_mon      = trend_p7_mon;
		trend_day      = trend_p7_day;
		trend_hour     = trend_p7_hour;
		trend_min      = trend_p7_min;
		trend_sec      = trend_p7_sec;
		trend_pagename = trend_p7_pagename;
		trend_speed    = trend_p7_speed;
		trend_type     = trend_p7_type;
		trend_name     = trend_p7_name;
		trend_comm     = trend_p7_comm;
		trend_color    = trend_p7_color;
		trend_point    = trend_p7_point;
		trend_unit_on  = trend_p7_unit_on;
		trend_unit_off = trend_p7_unit_off;
		trend_offset   = trend_p7_offset;
		trend_thick    = trend_p7_thick;
		trend_range1   = trend_p7_range1;
		trend_range2   = trend_p7_range2;
		trend_range3   = trend_p7_range3;
		trend_range4   = trend_p7_range4;
		trend_ch1      = trend_p7_ch1;
		trend_ch2      = trend_p7_ch2;
		trend_ch3      = trend_p7_ch3;
		trend_ch4      = trend_p7_ch4;
	} else if( page == "p8" ){
		trend_samples  = trend_p8_samples;
		trend_max_smp  = trend_p8_max_smp;
		trend_year     = trend_p8_year;
		trend_mon      = trend_p8_mon;
		trend_day      = trend_p8_day;
		trend_hour     = trend_p8_hour;
		trend_min      = trend_p8_min;
		trend_sec      = trend_p8_sec;
		trend_pagename = trend_p8_pagename;
		trend_speed    = trend_p8_speed;
		trend_type     = trend_p8_type;
		trend_name     = trend_p8_name;
		trend_comm     = trend_p8_comm;
		trend_color    = trend_p8_color;
		trend_point    = trend_p8_point;
		trend_unit_on  = trend_p8_unit_on;
		trend_unit_off = trend_p8_unit_off;
		trend_offset   = trend_p8_offset;
		trend_thick    = trend_p8_thick;
		trend_range1   = trend_p8_range1;
		trend_range2   = trend_p8_range2;
		trend_range3   = trend_p8_range3;
		trend_range4   = trend_p8_range4;
		trend_ch1      = trend_p8_ch1;
		trend_ch2      = trend_p8_ch2;
		trend_ch3      = trend_p8_ch3;
		trend_ch4      = trend_p8_ch4;
	}
}


var timer;
var timeout_callback = null;
var Obj;

function update_trend_timeout()
{
	clearInterval( timer );
	Obj.abort();
	timeout_callback();
}

function update_trend_data( target_url, page, check_cbk, callback, timeout_cbk, init )
{
	try{
	    if( window.XMLHttpRequest ){
			Obj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			Obj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			if( timeout_cbk ) timeout_cbk();
//			alert('ERROR!');
			return;
		}
	} catch( e ){
		if( timeout_cbk ) timeout_cbk();
//		alert('ERROR!');
		return;
	}

	if( timeout_cbk ){
		timeout_callback = timeout_cbk;
		timer = setInterval("update_trend_timeout()",10000);
	}

	Obj.open( "get", target_url, true );
	Obj.setRequestHeader('Pragma', 'no-cache');
	Obj.setRequestHeader('Cache-Control', 'no-cache');
	Obj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	Obj.send( null );
	Obj.onreadystatechange = function(){
		if( Obj.readyState == 4 ){
			if( Obj.status == 200 ){
				clearInterval( timer );
				var update = 1;
				if( check_cbk ) update = check_cbk();
				if( update ){
//alert(this.responseText);
					var d = JSON.parse(this.responseText);
					dl_time1       = d.dl_time1;
					dl_time2       = d.dl_time2;
					trend_samples  = d.trend_samples;
					trend_year     = d.trend_year;
					trend_mon      = d.trend_mon;
					trend_day      = d.trend_day;
					trend_hour     = d.trend_hour;
					trend_min      = d.trend_min;
					trend_sec      = d.trend_sec;
					trend_ch1      = d.trend_ch1;
					trend_ch2      = d.trend_ch2;
					trend_ch3      = d.trend_ch3;
					trend_ch4      = d.trend_ch4;
					if( callback ) callback();
				} else{
					if( timeout_cbk ) timeout_cbk();
				}
			}
		}
	}
}

function conv_data( d, upper, lower, offset )
{
	var scale_y1 = scale_y - scale_offset * 2;
	var scale_y2 = scale_y - scale_offset;
//	return Math.floor( scale_y2 - ( (100.0 * (d - lower) / (upper - lower)) + offset ) * scale_y1 / 100.0 + 0.5 );
	return ( scale_y2 - ( (100.0 * (d - lower) / (upper - lower)) + offset ) * scale_y1 / 100.0 );
}

var draw_1st = 0;
function trend_draw( init ) {

	var ctx;
	var canvas;
	var samples,upper,lower,offset;
	var ch_count = 0;
	var x,y,s,i;
	var y_100,y_0,wid25,y_25,y_50,y_75;

	if( trend_type[0] != "NONE" ) ch_count++;
	if( trend_type[1] != "NONE" ) ch_count++;
	if( trend_type[2] != "NONE" ) ch_count++;
	if( trend_type[3] != "NONE" ) ch_count++;
	if( ch_count == 0 ) return;

	if( init != 0 ){
		window_x = window_x_def;
	} else{
		window_x = window_x_def - Math.floor(document.getElementById("draw_area").scrollLeft);
	}

	scale_x = trend_max_smp;
	canvas_x = scale_x + window_x - 1;

	canvas = document.getElementById("draw_area_canvas");
	if( !canvas ){
		alert("canvas error1");
		return;
	}
	if( !canvas.getContext ){
		alert("canvas error2");
		return;
	}

	ctx = canvas.getContext("2d");

	if( draw_1st == 0 ){
		canvas.width = canvas_x;
		canvas.height = scale_y;
		draw_1st = 1;
	}

	ctx.clearRect( 0, 0, canvas.width, canvas.height );

	y_100 = scale_offset;
	y_0   = scale_y - scale_offset;
	wid25 = Math.floor((y_0 - y_100) / 4);
	y_25  = y_0 - wid25;
	y_50  = y_25 - wid25;
	y_75  = y_100 + wid25;

	ctx.strokeStyle = "#ffffff";
	ctx.lineWidth = 1;

	ctx.beginPath();
	ctx.moveTo(window_x,y_0);
	ctx.lineTo(canvas_x,y_0);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(window_x,y_25);
	ctx.lineTo(canvas_x,y_25);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(window_x,y_50);
	ctx.lineTo(canvas_x,y_50);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(window_x,y_75);
	ctx.lineTo(canvas_x,y_75);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(window_x,y_100);
	ctx.lineTo(canvas_x,y_100);
	ctx.stroke();

	offset = 0;
	if( (trend_speed == '10M') || (trend_speed == '30M') ){
		offset = 144;
	} else{
		offset = 120;
	}
	x = canvas_x - 1;
	while( x > window_x ){
		ctx.beginPath();
		ctx.moveTo(x,0);
		ctx.lineTo(x,scale_y);
		ctx.stroke();
		x -= offset;
	}
	ctx.beginPath();
	ctx.moveTo(window_x,0);
	ctx.lineTo(window_x,scale_y);
	ctx.stroke();

	x = canvas_x - offset;
	s = trend_samples - 1 - offset;
	ctx.font = "12px 'ＭＳ ゴシック'";
	ctx.fillStyle = "white";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	if( s >= 0 ){
		while( s >= 0 ){
			ctx.fillText(("0"+trend_year[s]).slice(-4) + "/" + ("0"+trend_mon[s]).slice(-2) + "/" + ("0"+trend_day[s]).slice(-2),x+2,2);
			ctx.fillText(("0"+trend_hour[s]).slice(-2) + ":" + ("0"+trend_min[s]).slice(-2) + ":" + ("0"+trend_sec[s]).slice(-2),x+2,12);
			s -= offset;
			x -= offset;
		}
	} else{
		ctx.fillText("  ",x+2,12);
	}

	samples = trend_samples;
	lower = trend_range1[0];
	upper = trend_range1[1];
	offset = trend_offset[0];
	if( trend_type[0] == "NONE" ){
		samples = 0;
	}
	if( samples >= 2 ){
		if( samples > scale_x ) samples = scale_x;
		ctx.beginPath();
		ctx.strokeStyle =  trend_color[0];
		ctx.lineWidth = trend_thick[0];
		x = canvas_x-samples;
		y = conv_data(trend_ch1[0],upper,lower,offset);
		ctx.moveTo(x,y);
		for( i=1; i<samples; i++ ){
			x = canvas_x-samples+i;
			y = conv_data(trend_ch1[i],upper,lower,offset);
			ctx.lineTo(x,y);
		}
		ctx.stroke();
		draw_pen[0].setPos(y);
	}

	samples = trend_samples;
	lower = trend_range2[0];
	upper = trend_range2[1];
	offset = trend_offset[1];
	if( trend_type[1] == "NONE" ){
		samples = 0;
	}
	if( samples >= 2 ){
		if( samples > scale_x ) samples = scale_x;
		ctx.beginPath();
		ctx.strokeStyle =  trend_color[1];
		ctx.lineWidth = trend_thick[1];
		x = canvas_x-samples;
		y = conv_data(trend_ch2[0],upper,lower,offset);
		ctx.moveTo(x,y);
		for( i=1; i<samples; i++ ){
			x = canvas_x-samples+i;
			y = conv_data(trend_ch2[i],upper,lower,offset);
			ctx.lineTo(x,y);
		}
		ctx.stroke();
		draw_pen[1].setPos(y);
	}

	samples = trend_samples;
	lower = trend_range3[0];
	upper = trend_range3[1];
	offset = trend_offset[2];
	if( trend_type[2] == "NONE" ){
		samples = 0;
	}
	if( samples >= 2 ){
		if( samples > scale_x ) samples = scale_x;
		ctx.beginPath();
		ctx.strokeStyle =  trend_color[2];
		ctx.lineWidth = trend_thick[2];
		x = canvas_x-samples;
		y = conv_data(trend_ch3[0],upper,lower,offset);
		ctx.moveTo(x,y);
		for( i=1; i<samples; i++ ){
			x = canvas_x-samples+i;
			y = conv_data(trend_ch3[i],upper,lower,offset);
			ctx.lineTo(x,y);
		}
		ctx.stroke();
		draw_pen[2].setPos(y);
	}

	samples = trend_samples;
	lower = trend_range4[0];
	upper = trend_range4[1];
	offset = trend_offset[3];
	if( trend_type[3] == "NONE" ){
		samples = 0;
	}
	if( samples >= 2 ){
		if( samples > scale_x ) samples = scale_x;
		ctx.beginPath();
		ctx.strokeStyle =  trend_color[3];
		ctx.lineWidth = trend_thick[3];
		x = canvas_x-samples;
		y = conv_data(trend_ch4[0],upper,lower,offset);
		ctx.moveTo(x,y);
		for( i=1; i<samples; i++ ){
			x = canvas_x-samples+i;
			y = conv_data(trend_ch4[i],upper,lower,offset);
			ctx.lineTo(x,y);
		}
		ctx.stroke();
		draw_pen[3].setPos(y);
	}

	if( init != 0 ){
		document.getElementById("draw_area").scrollLeft = canvas_x - window_x + 10;
		document.getElementById("draw_area").setAttribute( "style", "overflow-y: hidden");
		document.getElementById("draw_area").setAttribute( "style", "overflow-x: auto");
	} else{
		document.getElementById("draw_area").scrollLeft = 0;
		document.getElementById("draw_area").setAttribute( "style", "overflow: hidden");
	}
}


function page_button()
{
	var id_class = new Array( "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8" );
	var sel = new Array( "p1sel", "p2sel", "p3sel", "p4sel", "p5sel", "p6sel", "p7sel", "p8sel" );

	for( p=0; p<8; p++ ){
		var pg = document.getElementById( id_class[p] );
		if( id_class[p] == now_page ){
//			pg.setAttribute( "class", sel[p] );
			btn = document.createElement("input");
			btn.setAttribute( "class", sel[p] );
			btn.setAttribute( "type", "button" );
			if( button_disable == 0 ){
				btn.setAttribute( "title", "auto refresh" );
				btn.setAttribute( "onclick", "refresh_rate();" );
			}
			pg.appendChild(btn);
		} else{
			btn = document.createElement("input");
			btn.setAttribute( "class", id_class[p] );
			btn.setAttribute( "type", "button" );
			btn.setAttribute( "title", trend_page[p] );
			btn.setAttribute( "onclick", "disp_trend_page('" + id_class[p] + "');" );
			pg.appendChild(btn);
		}
	}
}


function trend_modify( pos )
{
	var ch_count = 0;
	var str;
	var scroll = 0;

	draw_pen[0].visibility("hidden");
	draw_pen[1].visibility("hidden");
	draw_pen[2].visibility("hidden");
	draw_pen[3].visibility("hidden");

	if( trend_type[0] != "NONE" ) ch_count++;
	if( trend_type[1] != "NONE" ) ch_count++;
	if( trend_type[2] != "NONE" ) ch_count++;
	if( trend_type[3] != "NONE" ) ch_count++;
	if( ch_count == 0 ) return;

	if( pos != (trend_samples-1) ){
		scroll = 1;
	}

	str = trend_pagename;
	document.getElementById("trend_pname").innerHTML = str;

	str = "";
	if( (pos >= 0) && (pos < trend_samples) ){
		str += ("0"+trend_year[pos]).slice(-4) + "/" +  ("0"+trend_mon[pos]).slice(-2) + "/" + ("0"+trend_day[pos]).slice(-2) + "<br>";
		str += ("0"+trend_hour[pos]).slice(-2) + ":" + ("0"+trend_min[pos]).slice(-2) + ":" + ("0"+trend_sec[pos]).slice(-2);
	}
	document.getElementById("trend_time").innerHTML = str;
	if( scroll != 0 ){
		document.getElementById("trend_time").setAttribute( "style", "color: blue" );
	} else{
		document.getElementById("trend_time").setAttribute( "style", "color: gray" );
	}

	str = "";
	if( (trend_type[0] != "NONE") && (trend_type[0] != "DI") && (trend_type[0] != "DO") ){
		str += '<font color=' + trend_color[0] + '>' + trend_range1[1] + '<br></font>';
	}
	if( (trend_type[1] != "NONE") && (trend_type[1] != "DI") && (trend_type[1] != "DO")){
		str += '<font color=' + trend_color[1] + '>' + trend_range2[1] + '<br></font>';
	}
	if( (trend_type[2] != "NONE") && (trend_type[2] != "DI") && (trend_type[2] != "DO")){
		str += '<font color=' + trend_color[2] + '>' + trend_range3[1] + '<br></font>';
	}
	if( (trend_type[3] != "NONE") && (trend_type[3] != "DI") && (trend_type[3] != "DO")){
		str += '<font color=' + trend_color[3] + '>' + trend_range4[1] + '<br></font>';
	}
	document.getElementById("scale_100").innerHTML = str;

	str = "";
	if( (trend_type[0] != "NONE") && (trend_type[0] != "DI") && (trend_type[0] != "DO") ){
		str += '<font color=' + trend_color[0] + '>' + trend_range1[0] + '<br></font>';
	}
	if( (trend_type[1] != "NONE") && (trend_type[1] != "DI") && (trend_type[1] != "DO")){
		str += '<font color=' + trend_color[1] + '>' + trend_range2[0] + '<br></font>';
	}
	if( (trend_type[2] != "NONE") && (trend_type[2] != "DI") && (trend_type[2] != "DO")){
		str += '<font color=' + trend_color[2] + '>' + trend_range3[0] + '<br></font>';
	}
	if( (trend_type[3] != "NONE") && (trend_type[3] != "DI") && (trend_type[3] != "DO")){
		str += '<font color=' + trend_color[3] + '>' + trend_range4[0] + '<br></font>';
	}
	document.getElementById("scale_0").innerHTML = str;

	if( trend_type[0] != "NONE" ){
		document.getElementById("no_p1").innerHTML = "01";
		document.getElementById("mark_p1").style.backgroundColor = trend_color[0];
		draw_pen[0].setColor(trend_color[0]);
		str = "";
		str += '&nbsp;&nbsp;' + trend_name[0] + '<br>';
		str += '&nbsp;&nbsp;&nbsp;' + '<font size="2">' + trend_comm[0] + '<br></font>';
		if( (pos >= 0) && (pos < trend_samples) ){
			if( (trend_type[0] != "DI") && (trend_type[0] != "DO") ){
				str += '<font size="6">' + '&nbsp;&nbsp;' + trend_ch1[pos].toFixed(trend_point[0]) + '</font>';
				str += '<font size="2">' + '&nbsp;[' + trend_unit_on[0] + ']' + '</font>';
			} else{
				if( trend_ch1[pos] != 0 ){
					str += '<font size="6">' + '&nbsp;&nbsp;' + trend_unit_on[0] + '</font>';
				} else{
					str += '<font size="6">' + '&nbsp;&nbsp;' + trend_unit_off[0] + '</font>';
				}
			}
		}
		document.getElementById("num_p1x").innerHTML = str;
		if( scroll != 0 ){
			document.getElementById("num_p1x").setAttribute( "style", "color: blue" );
    		draw_pen[0].visibility("hidden");
		} else{
			document.getElementById("num_p1x").setAttribute( "style", "color: gray" );
    		draw_pen[0].visibility("visible");
		}
	}
	if( trend_type[1] != "NONE" ){
		document.getElementById("no_p2").innerHTML = "02";
		document.getElementById("mark_p2").style.backgroundColor = trend_color[1];
		draw_pen[1].setColor(trend_color[1]);
		str = "";
		str += '&nbsp;&nbsp;' + trend_name[1] + '<br>';
		str += '&nbsp;&nbsp;&nbsp;' + '<font size="2">' + trend_comm[1] + '<br></font>';
		if( (pos >= 0) && (pos < trend_samples) ){
			if( (trend_type[1] != "DI") && (trend_type[1] != "DO") ){
				str += '<font size="6">' + '&nbsp;&nbsp;' + trend_ch2[pos].toFixed(trend_point[1]) + '</font>';
				str += '<font size="2">' + '&nbsp;[' + trend_unit_on[1] + ']' + '</font>';
			} else{
				if( trend_ch2[pos] != 0 ){
					str += '<font size="6">' + '&nbsp;&nbsp;' + trend_unit_on[1] + '</font>';
				} else{
					str += '<font size="6">' + '&nbsp;&nbsp;' + trend_unit_off[1] + '</font>';
				}
			}
		}
		document.getElementById("num_p2x").innerHTML = str;
		if( scroll != 0 ){
			document.getElementById("num_p2x").setAttribute( "style", "color: blue" );
    		draw_pen[1].visibility("hidden");
		} else{
			document.getElementById("num_p2x").setAttribute( "style", "color: gray" );
    		draw_pen[1].visibility("visible");
		}
	}
	if( trend_type[2] != "NONE" ){
		document.getElementById("no_p3").innerHTML = "03";
		document.getElementById("mark_p3").style.backgroundColor = trend_color[2];
		draw_pen[2].setColor(trend_color[2]);
		str = "";
		str += '&nbsp;&nbsp;' + trend_name[2] + '<br>';
		str += '&nbsp;&nbsp;&nbsp;' + '<font size="2">' + trend_comm[2] + '<br></font>';
		if( (pos >= 0) && (pos < trend_samples) ){
			if( (trend_type[2] != "DI") && (trend_type[2] != "DO") ){
				str += '<font size="6">' + '&nbsp;&nbsp;' + trend_ch3[pos].toFixed(trend_point[2]) + '</font>';
				str += '<font size="2">' + '&nbsp;[' + trend_unit_on[2] + ']' + '</font>';
			} else{
				if( trend_ch3[pos] != 0 ){
					str += '<font size="6">' + '&nbsp;&nbsp;' + trend_unit_on[2] + '</font>';
				} else{
					str += '<font size="6">' + '&nbsp;&nbsp;' + trend_unit_off[2] + '</font>';
				}
			}
		}
		document.getElementById("num_p3x").innerHTML = str;
		if( scroll != 0 ){
			document.getElementById("num_p3x").setAttribute( "style", "color: blue" );
    		draw_pen[2].visibility("hidden");
		} else{
			document.getElementById("num_p3x").setAttribute( "style", "color: gray" );
    		draw_pen[2].visibility("visible");
		}
	}
	if( trend_type[3] != "NONE" ){
		document.getElementById("no_p4").innerHTML = "04";
		document.getElementById("mark_p4").style.backgroundColor = trend_color[3];
		draw_pen[3].setColor(trend_color[3]);
		str = "";
		str += '&nbsp;&nbsp;' + trend_name[3] + '<br>';
		str += '&nbsp;&nbsp;&nbsp;' + '<font size="2">' + trend_comm[3] + '<br></font>';
		if( (pos >= 0) && (pos < trend_samples) ){
			if( (trend_type[3] != "DI") && (trend_type[3] != "DO") ){
				str += '<font size="6">' + '&nbsp;&nbsp;' + trend_ch4[pos].toFixed(trend_point[3]) + '</font>';
				str += '<font size="2">' + '&nbsp;[' + trend_unit_on[3] + ']' + '</font>';
			} else{
				if( trend_ch4[pos] != 0 ){
					str += '<font size="6">' + '&nbsp;&nbsp;' + trend_unit_on[3] + '</font>';
				} else{
					str += '<font size="6">' + '&nbsp;&nbsp;' + trend_unit_off[3] + '</font>';
				}
			}
		}
		document.getElementById("num_p4x").innerHTML = str;
		if( scroll != 0 ){
			document.getElementById("num_p4x").setAttribute( "style", "color: blue" );
    		draw_pen[3].visibility("hidden");
		} else{
			document.getElementById("num_p4x").setAttribute( "style", "color: gray" );
    		draw_pen[3].visibility("visible");
		}
	}
}


