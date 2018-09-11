$(function(){
//网页头部轮播图显示
	var i=0;
	var timer1;
	timer1=setInterval(run,4000);
	$('div.header .banner .dot ul li').eq(0).css('background','red')
	function run(){
			$('div.header .banner .img img').eq(i).animate({'opacity':0.8},1000).hide().siblings().show().animate({'opacity':1},1000);
			// 设置小圆点背景
			$('div.header .banner .dot ul li').eq(i).css('background','white').siblings().css('background','red');
			//判断当前显示图片
			if(i<1){
				i++;
			}else{
				i=0;
			}
	};
	// 给小圆点绑定移入移出事件
	$('div.header .banner .dot ul li').on('mouseover',function(){
		clearInterval(timer1)
		i=$(this).index();
		$(this).css('background','red').siblings().css('background','white');
		$('div.header .banner .img img').eq(i).animate({'opacity':1},1000).show().siblings().animate({'opacity':0.5},1000).hide();
	})
	$('div.header .banner .dot ul li').on('mouseout',function(){
		timer1=setInterval(run,4000);
	})
	// 文字淡入
	// $('div.wrap>.header>.banner>div.text').animate({'top':'170px','left':'54px'},1000)
	$('div.wrap>.header>.banner>div.text').animate({'top':'170px','left':'54px','opacity':'0.5'},2500).animate({'opacity':'1'},2000)

})
