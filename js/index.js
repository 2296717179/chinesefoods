$(function(){
//首页主体热门推荐
	//图片显示隐藏
		$('div.container .product .proBot .recom').eq(0).find('img').css('left','-678px')
		$('div.container .product .proBot .recom').eq(2).find('img').css('left','-678px')
		$('div.container .product .proBot .recom').eq(1).find('img').css('right','-339px')
		$('div.container .product .proBot .recom').eq(3).find('img').css('right','-339px')
		// //绑定滚动条事件		
		$(window).scroll(function(){
			var scrollTop=$(window).scrollTop();
			// PRODUCT CENTER  图片滑入
			if(scrollTop>920&&scrollTop<1000){
				$('div.container .product .proBot .recom .img img').eq(0).animate({'top':'60px','left':'339px'},1000).show();
				$('div.container .product .proBot .recom .img img').eq(1).animate({'top':'60px','left':'339px'},1000).show();
			}else if(scrollTop>1130){
				$('div.container .product .proBot .recom .img img').eq(2).animate({'top':'60px','left':'339px'},1000).show();
				$('div.container .product .proBot .recom .img img').eq(3).animate({'top':'60px','left':'339px'},1000).show();
			}	
			//滚动条滚动advantage 背景隐藏显示
			if(scrollTop<3594){
				$('.container .advantage').addClass('active')
			}else{
				$('.container .advantage').removeClass('active')
			}
			// 锚点监听
			if(scrollTop>3800){
				$('div.wrap>div.ahref').show(800)
			}
		})
//首页主体公司介绍
	//轮播图滚动显示
		var i=0;
		var timer;
		// 追加方式轮播
		timer=setInterval(run,10)
		function run(){
				if(i== -215){
					$('.container .introduce .intFooter ul').append($('.container .introduce .intFooter ul li').first())
					i+=215;
					$('.container .introduce .intFooter ul').css('left',i+'px')
				}
				i--;
				$('.container .introduce .intFooter ul').css('left',i+'px')
		};
		// 鼠标移入停止轮播，移除继续轮播
		$('.container .introduce .intFooter  ul').hover(
			function(){
				clearInterval(timer);
			},
			function(){
				timer=setInterval(run,10)
			})
// 首页主体厨师团队
	// 给“查看更多”添加a链接
	$('div.wrap>.container>.kitchen>.kitBot>ul>li>.check').wrapInner('<a href="kitchen.html"></a>').find('a').css('color','white');
	// 给li绑定hover事件
	$('div.wrap>.container>.kitchen>.kitBot>ul>li').hover(function(){
		$(this).css('opacity','0.8').children('.text').css({'color':'red'}).prevAll('.check').css('background','rgb(151,2,4)')
	},function(){
		$(this).css('opacity','1').children('.text').css({'color':'black'}).prevAll('.check').css('background','red')
	})
//首页主体优势介绍
	//图文定位
		$('.container>.advantage>.advBot>.banText').eq(0).css({'position':'absolute','top':'-75px','left':'107px'}).children('.img').css('margin','47px 0px 0px -40px');
		$('.container>.advantage>.advBot>.banText').eq(1).css({'position':'absolute','bottom':'-75px','left':'92px'});
		$('.container>.advantage>.advBot>.banText').eq(2).css({'position':'absolute','top':'-75px','right':'69px'});
		$('.container>.advantage>.advBot>.banText').eq(3).css({'position':'absolute','bottom':'-100px','right':'69px'}).children('.img').css('margin','47px 0px 0px -40px')
	//轮播图
		var index=0;
		function banner(){
			if(index>2){
				index=0;
				$('div.wrap>.container>.advantage>.advBot>.banImg>ul').find('li').eq(index).show(2500).siblings().hide(2500);
			}
			$('div.wrap>.container>.advantage>.advBot>.banImg>ul').find('li').eq(index).hide(2500).next().show(2500);
			index++;		
		}
		var timer1=setInterval(banner,2500)
		$('div.wrap>.container>.advantage>.advBot>.banImg>ul').on('mouseover',function(){
			clearInterval(timer1);
		})
		$('div.wrap>.container>.advantage>.advBot>.banImg>ul').on('mouseout',function(){
			timer=setInterval(banner,2500)
		})
})