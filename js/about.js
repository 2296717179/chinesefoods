$(function(){
// 关于我们之轮播图显示
	//绑定循环定时器
	var aLeft=0;
	var timer;
	timer=setInterval(run,10)
	function run(){
			if(aLeft==-230){
				$('.container .conbot .sub  div ul').append($('.container .conbot .sub  div ul li').first())
				aLeft+=230;
				$('.container .conbot .sub  div ul').css('left',aLeft+'px')
			}
			aLeft-=1;
			$('.container .conbot .sub  div ul').css('left',aLeft+'px')
			// console.log(aLeft)
	};
	//移入时停止轮播，移入时继续轮播
	$('.container .conbot .sub div ul').hover(function(){
			clearInterval(timer)
			},
			function(){
				timer=setInterval(run,10)
	})
})