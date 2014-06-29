// JavaScript Document
$(document).ready(function(e) {
    console.log("ready!");
	//setup database if it does not exist
	//if it exists then check date with todays date
	//if date is not a soni date then show message saying when festival starts bands will appear here
	set_up_soni_db();
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

	
	//friday
	for(var i=0;i<10;i++){
		var id = "flip"+i;
		var band_id = "band_id"+i;
		
	$("#tab_one").append("<div class='lineup_band' ><strong>BAND NAME"+i+stage_name+"</strong>"+
	"<br/><span class='darker_text'>START TIME - END TIME</span><br/>"+
	"<form><select name='"+id+"' id='"+id+"' data-role='flipswitch' data-mini='true' data-theme='c' onChange='add_to_plan(this,'band')'><option value='off'>Off</option> <option value='on'>On</option></select></form> </div>");
	
	}
	//saturday
	for(var ii=0;ii<10;ii++){
	$("#tab_two").append("<div class='lineup_band' ><strong>BAND NAME"+ii+stage_name+"</strong>"+
	"<br/><span class='darker_text'>START TIME - END TIME</span><br/>"+
	"<form><select name='flip'"+ii+" id='flip'"+ii+" data-role='flipswitch' data-mini='true' data-theme='c' onChange='add_to_plan(this,'bandid'"+ii+")'><option value='off'>Off</option> <option value='on'>On</option></select></form> </div>");
	}
	//sunday
	for(var iii=0;iii<10;iii++){
	$("#tab_three").append("<div class='lineup_band' ><strong>BAND NAME"+iii+stage_name+"</strong>"+
	"<br/><span class='darker_text'>START TIME - END TIME</span><br/>"+
	"<form><select name='flip'"+iii+" id='flip'"+iii+" data-role='flipswitch' data-mini='true' data-theme='c' onChange='add_to_plan(this,'bandid'"+iii+")'><option value='off'>Off</option> <option value='on'>On</option></select></form> </div>");
	}
	
	
	$(".lineup_band").trigger('create');
	$("#stage_panel").panel("close");
	$("#tabs").trigger('updatelayout');
}