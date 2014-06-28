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
		//change stage heading at top of page
		//clear content in all tabs
		//add new content to all tabs
	var stage_name;
	
	switch(stage){
		case 1:
		//alert("apollo");
		stage_name= "Apollo";
		break;
		case 2:
		//alert("saturn");
		stage_name= "Saturn";
		break;
		case 3:
		//alert("bohemia");
		stage_name = "Bohemia";
		break;
		case 4:
		//alert("jager");
		stage_name = "Jagermeister";
		break;
	}
	//change stage header
	$("#stage_name_heading").text(stage_name);
	//remove content in tabs
	$("#tab_one,#tab_two,#tab_three").empty();
	//add new content to all tabs
	//execute query for stage, order bands into day and desc time
var name ="notsaturn";
	if(stage_name=="Saturn"){
		name="kevin";
	}
	
	//friday
	for(var i=0;i<10;i++){
	$("#tab_one").append("<div class='lineup_band' ><strong>BAND NAME"+i+name+"</strong>"+
	"<br/><span class='darker_text'>START TIME - END TIME</span><br/>"+
	"<form><select name='flip"+i+"' id='flip"+i+"' data-role='flipswitch' data-mini='true' data-theme='c' onChange='add_to_plan(this,'bandid"+i+"')'><option value='off'>Off</option> <option value='on'>On</option></select></form> </div>");
	}
	//saturday
	for(var ii=0;ii<10;ii++){
	$("#tab_two").append("<div class='lineup_band' ><strong>BAND NAME"+ii+name+"</strong>"+
	"<br/><span class='darker_text'>START TIME - END TIME</span><br/>"+
	"<form><select name='flip"+ii+"' id='flip"+ii+"' data-role='flipswitch' data-mini='true' data-theme='c' onChange='add_to_plan(this,'bandid"+ii+"')'><option value='off'>Off</option> <option value='on'>On</option></select></form> </div>");
	}
	//sunday
	for(var iii=0;iii<10;iii++){
	$("#tab_three").append("<div class='lineup_band' ><strong>BAND NAME"+iii+name+"</strong>"+
	"<br/><span class='darker_text'>START TIME - END TIME</span><br/>"+
	"<form><select name='flip"+iii+"' id='flip"+iii+"' data-role='flipswitch' data-mini='true' data-theme='c' onChange='add_to_plan(this,'bandid"+iii+"')'><option value='off'>Off</option> <option value='on'>On</option></select></form> </div>");
	}
	
	
	$(".lineup_band").trigger('create');
	$("#stage_panel").panel("close");
	$("#tabs").trigger('updatelayout');
}