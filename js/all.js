$(function(){
	$('.btn').click(function(){
		var name = $('.username').val();
		var psd = $('.password').val();
		if(name=="" || name==null){
			alert("请输入姓名");
			return false;
		}
		if(psd==''){
			alert("请输入密码");
			return false;
		}
		// window.location.href="";
	})
})
