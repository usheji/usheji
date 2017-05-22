$(function(){
	window.onload=function(){
		
// 上下滚	    
		var myScroll;


		myScroll = new IScroll('#wrapper', { mousewheel:true,scrollbars:true,
		fadeScrollbars:true, shrinkScrollbars:'scale',click:true


		});	
	}	    
// 返回按钮
	$('.ly-return').on('touchstart',function(){
		window.history.back();
	})
// 作品的旋转小三角
	$('.ly-zp').on('touchstart',function(){
		$(this).children('span').toggleClass('zl-arrow')
	})
//搜索
	var data={'0':'插画素材','1':'插画师','2':'插画教程','3':'插画中国','4':'插画设计','5':'插画学习'}
	var search=$('input');
	var result=$('.zl-result');
	// var reg=/插画师/;
	var reg;
	result.slideUp(0);
		// console.log(typeof(reg))
	search.focus().on('keyup',function(){
		// console.log(typeof(reg))
		// console.log(search.val())
		reg=$(this).val();
		// console.log(reg)
		// if($(this).val()=='插画'){
		// 	result.slideDown(200);

		// }
		if(reg!=''){

			$.each(data,function(index,value){
				// console.log(index,value)
			// console.log(reg)
				if(value.match(reg)){
					result.slideDown(200);
					console.log(index);
					result.children('div').eq(index).css('display','block');
					// result.children('div').eq(index).css('display','block').children('a').children('p').html(`<b>${reg}</b>`);
				}
			})
		}else{
			result.slideUp(200);

		}
	});
})