
$ = function(id){
	return document.getElementById(id);
}

var cursor_pen = function(my_id, parent_id)
{
    this.id       = my_id;
    this.id_color = "cp_color_" + my_id;
    this.id_text  = "cp_text_" + my_id;

	/* cursor_pen */
	var e = document.createElement("div");
	e.setAttribute("id", this.id);
	e.setAttribute("class", "cursor_pen");
	e.setAttribute("unselectable", "on");
	$(parent_id).appendChild(e);

	/* color bar */
	var e = document.createElement("div");
	e.setAttribute("id", this.id_color);
	e.setAttribute("class", "color_bar");
	e.setAttribute("unselectable", "on");
	$(this.id).appendChild(e);

	/* text bar */
	var e = document.createElement("div");
	e.setAttribute("id", this.id_text);
	e.setAttribute("class", "text_bar");
	e.setAttribute("unselectable", "on");
	$(this.id).appendChild(e);

	/* initial value */
	$(this.id_color).style.backgroundColor = "black";
	$(this.id_text).textContent = "" + my_id;
	$(this.id).top = 0;
    $(this.id).style.visibility = "hidden";
}

cursor_pen.prototype = {
	setColor : function(color) {
    	$(this.id_color).style.backgroundColor = color;
	},
	setText : function(text) {
    	$(this.id_text).textContent = text;
	},
	setPos : function(pos) {
    	$(this.id).style.top = (pos - 2) + "px";
	},
	visibility : function(mode) {
        $(this.id).style.visibility = mode;
	},
}


