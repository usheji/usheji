$(document).ready(function() {
	$('.slip').on('touchstart',function(){
//		$(".xx-slip").css("left","1.3rem")
		$(".xx-slip").animate({
		    left: "1.3rem"
	  	}, 1000 );
	  	$(".sc-play").animate({
		    marginLeft : "-6.2rem"
	  	}, 1000 );
	  	$(".xx-zhe").animate({
	  		backgroundColor:"rgba(0,0,0,.2)"
	  	})
	})
//	$('body').on('swiperight',function(){
////		$(".xx-slip").css("left","1.3rem")
//		$(".xx-slip").animate({
//		    left: "100%"
//	  	}, 1000 );
//	  	$(".sc-play").animate({
//		    marginLeft : ".24rem"
//	  	}, 1000 );
//	})
//	$("body").get('swipe').set({ 
//		$(".xx-slip").animate({
//		    left: "100%"
//	  	}, 1000 );
//	  	$(".sc-play").animate({
//		    marginLeft : ".24rem"
//	  	}, 1000 );
//	});
	var hammertime = new Hammer(document.querySelector("body"));
	hammertime.on("swiperight", function () {
		console.log(1)
		$(".xx-slip").animate({
		    left: "100%"
	  	}, 1000 );
	  	$(".sc-play").animate({
		    marginLeft : ".24rem"
	  	}, 1000 );
	})
})
