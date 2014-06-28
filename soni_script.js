// JavaScript Document
$(document).ready(function(e) {
    console.log("ready!");
});

function add_to_plan(e,b_id){
var d=	$(e).val();
	//alert(d);
	alert(b_id);
}

//

function change_stage(stage){
	
	switch(stage){
		case 1:
		alert("main");
		//change stage heading at top of page
		//clear content in all tabs
		//add new content to all tabs
		break;
		case 2:
		alert("second");
		break;
		case 3:
		alert("bohemia");
		break;
		case 4:
		alert("red bull");
		break;
		case 5:
		alert("jager");
		break;
	}
	$("#stage_panel").panel("close");
}