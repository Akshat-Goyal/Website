$(window).bind("resize",function(){
	if($(window).width()>820){
		$(".top-right-section").show();
	}else{
		$(".top-right-section").hide();
	}
})

$("#icon").click(function(){
	$(".top-right-section").toggle();
});
