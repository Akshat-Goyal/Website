$(window).bind("resize",function(){
	if($(window).width()<=820){
		$(".top-right-section").hide();
	}else{
		$(".top-right-section").show();
	}
})

$("#icon").click(function(){
	$(".top-right-section").toggle();
});
