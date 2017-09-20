$(function(){
	$(".top_img2").mouseenter(function(){
		$(".sp1").show();
		$(".top_right").hide();
	})
	$(".top_img2").mouseleave(function(){
		$(".sp1").hide();
		$(".top_right").show();
	})
	$(".top_righty").mouseenter(function(){
		$(".more").show();
		
	})
	$(".top_righty").mouseleave(function(){
		$(".more").hide();
		
	})
	$(".btn_right").mouseenter(function(){
		$(".qybox").show();
	})
	$(".btn_right").mouseleave(function(){
		$(".qybox").hide();
	})
	$("#zz").mouseenter(function(){
		$(".time").show();
		$(".time1").hide();
		$(".time2").hide();
		$(".time3").hide();
		$(".time4").hide();
	})
	$("#zz").mouseleave(function(){
		$(".time1").hide();
		$(".time2").hide();
		$(".time3").hide();
		$(".time4").hide();
	})
	$("#xw").mouseenter(function(){
		$(".time1").show();
		$(".time4").hide();
		$(".time2").hide();
		$(".time3").hide();
		$(".time").hide();
	})
	$("#xw").mouseleave(function(){
		$(".time4").hide();
		$(".time2").hide();
		$(".time3").hide();
		$(".time").hide();
	})
	$("#gg").mouseenter(function(){
		$(".time2").show();
		$(".time1").hide();
		$(".time").hide();
		$(".time3").hide();
		$(".time4").hide();
	})
	$("#gg").mouseleave(function(){
		$(".time1").hide();
		$(".time").hide();
		$(".time3").hide();
		$(".time4").hide();
	})
	$("#hd").mouseenter(function(){
		$(".time3").show();
		$(".time").hide();
		$(".time2").hide();
		$(".time1").hide();
		$(".time4").hide();
	})
	$("#hd").mouseleave(function(){
		$(".time").hide();
		$(".time2").hide();
		$(".time1").hide();
		$(".time4").hide();
	})
	$("#mt").mouseenter(function(){
		$(".time4").show();
		$(".time0").hide();
		$(".time2").hide();
		$(".time3").hide();
		$(".time1").hide();
	})
	$("#mt").mouseleave(function(){
		$(".time0").hide();
		$(".time2").hide();
		$(".time3").hide();
		$(".time1").hide();
	})
	$(".mp ul li:eq(0)").click(function(){
//		$(this).css("background-image","url(on.jpg)");
		$(".mp ul li:eq(0)").css("background","url(img/logo.png) no-repeat -590px -180px")
		$(".mp ul li:eq(0)").siblings().css("background","url(img/logo.png) no-repeat -590px 0px");
		$(".banner").show();
		$(".banner1").hide();
		$(".banner2").hide();
		$(".banner3").hide();
		$(".banner4").hide();
		$(".banner5").hide();
	})
	$(".mp ul li:eq(1)").click(function(){
		$(".mp ul li:eq(1)").css("background","url(img/logo.png) no-repeat -590px -210px")
		$(".mp ul li:eq(1)").siblings().css("background","url(img/logo.png) no-repeat -590px -30px");
		$(".banner1").show();
		$(".banner").hide();
		$(".banner2").hide();
		$(".banner3").hide();
		$(".banner4").hide();
		$(".banner5").hide();
	})
	$(".mp ul li:eq(2)").click(function(){
		$(".mp ul li:eq(2)").css("background","url(img/logo.png) no-repeat -590px -240px")
		$(".mp ul li:eq(2)").siblings().css("background","url(img/logo.png) no-repeat -590px -60px");
		$(".banner2").show();
		$(".banner1").hide();
		$(".banner").hide();
		$(".banner3").hide();
		$(".banner4").hide();
		$(".banner5").hide();
	})
	$(".mp ul li:eq(3)").click(function(){
		$(".mp ul li:eq(3)").css("background","url(img/logo.png) no-repeat -590px -270px")
		$(".mp ul li:eq(3)").siblings().css("background","url(img/logo.png) no-repeat -590px -90px");
		$(".banner3").show();
		$(".banner1").hide();
		$(".banner2").hide();
		$(".banner").hide();
		$(".banner4").hide();
		$(".banner5").hide();
	})
	$(".mp ul li:eq(4)").click(function(){
		$(".mp ul li:eq(4)").css("background","url(img/logo.png) no-repeat -590px -300px")
		$(".mp ul li:eq(4)").siblings().css("background","url(img/logo.png) no-repeat -590px -120px");
		$(".banner4").show();
		$(".banner1").hide();
		$(".banner2").hide();
		$(".banner3").hide();
		$(".banner").hide();
		$(".banner5").hide();
	})
	$(".mp ul li:eq(5)").click(function(){
		$(".mp ul li:eq(5)").css("background","url(img/logo.png) no-repeat -590px -330px")
		$(".mp ul li:eq(5)").siblings().css("background","url(img/logo.png) no-repeat -590px -150px");
		$(".banner5").show();
		$(".banner1").hide();
		$(".banner2").hide();
		$(".banner3").hide();
		$(".banner4").hide();
		$(".banner").hide();
	})
	//手风琴
	$(".sf_left ul li").on('click',function(){
				$('.sf_left ul li').stop(true,true);
				$(this).animate({width:"70%"},500).siblings().animate({width:"7%"},500)
			})
	//轮播图
//	var imgwidth=$(".slider-img").width();
//	console.log(imgwidth);
//	var liarr=$(".slider-img ul").children();
//	console.log(liarr);
//	var aarr=$(".slider-wenzi").children();
//	console.log(aarr);
//	var num=0;//当前图片索引
//	var index=$(this).index();
//		$(".slider-img ul li").css({"left":imgwidth}); 
//		$(".slider-img ul li:eq(0)").css({"left":0}); 
//		$(".slider-wenzi span").eq(0).css("background","#60b076")
//		$each($(".slider-wenzi span"),function(i,obj){
//			$(".slider-wenzi span").eq(index).click(function(){
//			alert(i)
//			})
//		})
	var pic_index=0;
	var timer=null;
	function sliders(){
			$(".slider-img ul li").eq(pic_index).fadeIn().siblings().fadeOut();
			$(".slider-wenzi span").eq(pic_index).css("background","#60b076").siblings().css("background","#383721");
			$(".slider-wenzi span a").eq(pic_index).css("color","white");
			$(".slider-wenzi span").eq(pic_index).siblings().children().css("color","#c0bda9");
			if(pic_index<5){
				pic_index++;
			}else{
				pic_index=0;
			}
	}
	timer=setInterval(sliders,1000);
	$(".slider-img").mouseover(function(){
		clearInterval(timer);
	})
	$(".slider-img").mouseout(function(){
		clearInterval(timer);
		timer=setInterval(sliders,1000);
	})
		$(".slider-wenzi span").click(function(){
//			clearInterval(timer);
			var index=$(this).index();
			$(".slider-img ul li").eq(index).fadeIn().siblings().fadeOut();
			$(".slider-wenzi span").eq(index).css("background","#60b076").siblings().css("background","#383721");
			$(".slider-wenzi span a").eq(index).css("color","white");
			$(".slider-wenzi span").eq(index).siblings().children().css("color","#c0bda9");
			pic_index=index;
		})
})























