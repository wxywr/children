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
	

	
	$('.list-wrap .wrap-l .add').click(function(){
		$('.layout').css('display','block');
	})


// 添加学生
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

		$('#ul-a').append('<li class="names"></li>');
		$('.names').html($('input[name="name"]').val());
		$('.names').append('<i class="i-icon"></i>');

		// 删除
		$('.i-icon').on('click',function(){
			if(window.confirm('确定要删除吗？')){
				$(this).parent().remove();
				return true;
			}
			else{
				return false;
			}
		})
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


	// 关闭弹层
	$('.Popup .close').click(function(){
		$('.Popup').css('display','none');
	})
	$('.layout .close').click(function(){
		$('.layout').css('display','none');
	})

	// 提交亲子表单
	$('.gallery-top .Submit').click(function(){
		var sw = $('input[name="morning"]').val();
		var xw = $('input[name="afternoon"]').val();
		var sc = $('input[name="am"]:checked').val();
		var xc = $('input[name="pm"]:checked').val();
		var zs = $('input[name="zhu"]').val();
		var sa = $('input[name="shu"]').val();
		var ta = $('input[name="soup"]').val();
		var jy = $('input[name="sug"]').val();
		var zh = $('input[name="zhus"]:checked').val();
		var su = $('input[name="su"]:checked').val();
		var tg = $('input[name="tg"]:checked').val();
		var xi = $('input[name="wa"]:checked').val();
		var ci = $('input[name="bu"]').val();
		var jw = $('input[name="jw"]:checked').val();
		var take =[];
		$('.bring input[type="checkbox"]:checked').each(function(){ 
            take.push($(this).val()); 
        });
		if(sw==''){
			alert("请输入上午的点心");
			return false
		}
		if(xw==''){
			alert("请输入下午的点心");
			return false
		}
		if(zs==''){
			alert("请输入主食");
			return false
		}
		if(sa==''){
			alert("请输入蔬菜名");
			return false
		}
		if(ta==''){
			alert("请输入汤名");
			return false
		}
		if(jy==''){
			alert("请输入老师的建议");
			return false
		}
		if(ci==''){
			alert("请输入换尿布次数");
			return false
		}

	
		$.ajax({
			type: "post",
			url: " ",
			data: {
				"sw": sw,
				"xw": xw,
				"sc": sc,
				"xc": xc,
				"zs": zs,
				"sa": sa,
				"ta": ta,
				"jy": jy,
				"zh": zh,
				"su": su,
				"tg": tg,
				"xi": xi,
				"ci": ci,
				"jw": jw,
				"take": take.toString(),
			},
			success : function(){
				
			},
			error : function(){
				alert("页面出错！");
			}
		});

	});

})

