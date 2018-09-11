$(function(){
	// 绑定失焦事件
	// 判断是否为11位电话号码
	var flag = false;

	$('div.wrap>.container>.bot>.right>form input.number').on('blur',function(){
		var val=$(this).val()
		if(val ==''){
			$(this).next().html('手机号码不能为空').css({'color':'red','font-size':'12px','text-align':'center'});
			flag = false;
		}else{
			if( !isNaN(val) && val!=11 ){
					$(this).next().html('手机号码必须是11位').css({'color':'red','font-size':'12px','text-align':'center'})
					flag=false;
			}
			if(isNaN(val)){
				$(this).next().html('手机号码必须是数字').css({'color':'red','font-size':'12px','text-align':'center'});
				flag=false;
			}
		} 
		
	})
	$('div.wrap>.container>.bot>.right>form select').on('blur',function(){
		$(this).css({'color':'#5a5a5a','font-size':'14px'});
	})
	// $('form button').click(function(){
	// 	// $(window).refresh();
	// })
})