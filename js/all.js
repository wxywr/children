$(function(){
	$('.login li .username').focus(function(){
		$(this).css('border','1px solid #5EA8E5');
	});
	$('.login li .username').blur(function(){
		$(this).css('border','1px solid #ccc');
	});
	
	$('.login li .password').focus(function(){
		$(this).css('border','1px solid #5EA8E5');
	});
	$('.login li .password').blur(function(){
		$(this).css('border','1px solid #ccc');
	});

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
		window.location.href="student-list.html";
	})

	// 删除
	$('.list-wrap .wrap-l li i').click(function(){
		if(window.confirm('确定要删除吗？')){
	        $(this).parent().remove();
	            return true;
	        }else{
	            return false;
	        }
	})

	// 添加学生
	$('.list-wrap .wrap-l .add').click(function(){
		$('.layout').css('display','block');
	})


	$('.layout .add-stu .button').click(function(){
		var name = $('input[name="name"]').val();
		var phone = $('input[name="phone"]').val();
		
		if(name=="" || phone==null){
			alert("请输入姓名");
			return false;
		}
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('请输入正确的手机号码');
			return false;
		}


		$('.layout').css('display','none');
		
		$('#ul-a').append('<li><i></i></li>');
	})

	// 修改信息
	$('.xiu').click(function(){
		$('.Popup').css('display','block');
	})

	$('.Popup .add-stu .button').click(function(){
		var pho = $('input[name="pho"]').val();
		
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(pho))){
			alert('请输入正确的手机号码');
			return false;
		}

		$('.Popup').css('display','none');

		$(".zj").text(pho);
	})



})
