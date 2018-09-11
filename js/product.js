$(function(){
	var index=0;
	// 产品中心绑定点击事件
	$('div.wrap>.container>div.bbot>.bot').eq(0).show().siblings().hide();
	// 给12345绑定点击事件
	$('div.wrap>.container>div.sub>ul>li').on('click',function(){
		index=$(this).index()-1;
		$('div.wrap>.container>div.bbot>.bot').eq(index).show().siblings().hide();
	})
	//给 < 绑定点击事件
	$('div.wrap>.container>div.sub>ul>p').eq(0).click(function(){
			if(index>0){
				index--;
				$('div.wrap>.container>div.bbot>.bot').eq(index).show().siblings().hide();
			}else{
				index=4;
			}
	})
	//给 > 绑定点击事件
	$('div.wrap>.container>div.sub>ul>p').eq(1).click(function(){
			if(index<4){
				index++;
				$('div.wrap>.container>div.bbot>.bot').eq(index).show().siblings().hide();
			}else if(index==4){
				index=0;
			}
	})
	// 给top中li 绑定点击事件
	$('div.wrap>.container>div.top>ul>li').click(function(){
		index=$(this).index();
		$('div.wrap>.container>div.bbot>.bot').eq(index).show().siblings().hide();
	})
})