$(function(){
	waterFall();
});

function waterFall() {
	var boxs = $('#min>div');
	// 包括padding和border
	var w = boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);
	$('#main').css({"width":w*cols,"margin":"0 auto"});
	var hArr = [];
	boxs.each(function(index,value){
		
	});
}


