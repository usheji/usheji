$(function(){
	window.onload=function(){
		
// 上下滚	    
		var myScroll;


		myScroll = new IScroll('#wrapper', { mousewheel:true,scrollbars:true,
		fadeScrollbars:true, shrinkScrollbars:'scale',click:true


		});	
	}
// 滑动
		var swiper1 = new Swiper('.swiper-container1', {
        //  pagination: '.swiper-pagination',
	        slidesPerView: 4,
	        // slidesOffsetBefore : 15,
	        // slidesOffsetAfter : -100,
	        paginationClickable: true,
	        simulateTouch : true,
	        // spaceBetween: 30,
	        freeMode: true
	    });
// 点赞取消赞
	
	$('.ly-cellect1').on('touchstart',function(){
		
		var v=$(this).children('p').text();
		if($(this).attr('class')=='ly-cellect1 zl-z'){
			$(this).children('p').html(v-1)
			$(this).children('img').attr('src','../img/ly/ly-white.png')
		}else{
			$(this).children('p').html(v-0+1)
			$(this).children('img').attr('src','../img/ly/ly-red.png')
		}
		$(this).toggleClass('zl-z');
	})	    
// 返回按钮
	$('.ly-return').on('touchstart',function(){
		window.history.back();
	})
// 搜索框跳转
	$('.ly-select>input').on('touchstart',function(){
		// location.href=''
		location.href='zl-sousuoz.html'
	})
// 作品的旋转小三角
	$('.ly-zp').on('touchstart',function(){
		$(this).children('span').toggleClass('zl-arrow')
	})
})