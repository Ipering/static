 //轮播图swiper
 var swiper = new Swiper('.swiper-container', {
// 		updateOnImagesReady : true,
        pagination: '.swiper-pagination',
//      nextButton: '.swiper-button-next',
//      prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,     
        autoplay: 2500,
        autoplayDisableOnInteraction: false
   });
   
//语言模块点击事件
$(document).ready(function(){
	$('.right').click(function(){
		$('.show-box').fadeToggle(500);
	});
});
//语言模块点击事件1
//window.onload=function(){
//var flag=true;
//$('.right').click(function(){
//	if(flag==true){
//	$('.show-box').css("display","block");	
////	$('.show-box').animate({
////	 opacity:0.25,
////      left:'50px',
////      color:'#abcdef',
////      rotateZ:'45deg',
////      translate3d:'0,10px,0'	
////	}, 500, 'ease-in');
//	flag=false;
//	}else{
//	$('.show-box').css("display","none");
////	$('.show-box').animate({
//////	$('.show-box').css("display","block");		
//////	display:"none"
////	}, 500, 'ease-out');
//	flag=true;
//	}	
//});
//};
//语言模块点击事件2
//$(".right").click(function(){
//	var sty=$(".show-box")[0].style.display;
//	if(sty =="none"){
//		$(".show-box")[0].style.display="block";
//	}else{
//		$(".show-box")[0].style.display="none";
//	}
//});

//滚轮滚动固定导航
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var topHeight = $(".content_head").height();
        if (scrollTop > topHeight) {
        	$(".dip").addClass("fixed");
//      	$(".content_head").css("display","none"); 
        	$(".show-box").css("display","none"); 
            $(".scroll").css("marginTop", $(".dip").height() + "px");
        } else {
        	$(".dip").removeClass("fixed");
        	$(".content_head").css("display","block");           
            $(".scroll").css("marginTop", "0px");
        }
    });
});

//导航栏 点击跳转 样式变化
$(".lis").tap(function(){
		//样式变化
		$(".lis").children("a").css("font-size","0.81rem");
		$(".lis").children("a").css("color","rgb(173,199,254)");
		
	    $(this).children("a").css("font-size","1rem");
	    $(this).children("a").css("color","white");	
	    console.log($(this).children("a").css("color")=="white");
	   
		//跳转到顶部	
			$(window).scrollTop(0);		
	    //div显示
	    $(".comment").css("display","none");
	    $(".comment:eq("+$(this).index()+")").css("display","block");
	    //判断有声栏目
	    if($(".comment:eq(2)")[0].style.display=="block"){
			$(".footers").css("display","none");
		}else{
			$(".footers").css("display","block");
		}
});



//视频列表跳转
$(".voides ul li").click(function(){
	window.location.href="cvideo.html";
});

//资讯详情跳转
$(".onews").click(function(){
	window.location.href="news.html";
});
$(".tnews").click(function(){
	window.location.href="news.html";
});

//联系我们跳转
$("footer span:nth-child(1)").click(function(){
	window.location.href="link.html";
});
//关于跳转
$("footer span:nth-child(2)").click(function(){
	window.location.href="about.html";
});
//语言选择跳转
$(".mid").click(function(){
	window.location.href="bg.html";
});
//判断是否为浏览器打开
if(navigator.userAgent.indexOf("Windows")>-1){
	console.log(111111);
	$("body").css("width","100%");
	$("html").css("font-size","25px");
	$(".box").css("width","500px");
	$(".box").css("margin","auto");
	$(".box").css("left","0");
	$(".box").css("right","0");	
	$("#dip").css("width","500px");
//	$(".swiper-slide").css("width","500px");
 //轮播图swiper
   var swiper = new Swiper('.swiper-container', {
   		width : 500,
   		roundLengths : true, 
// 		updateOnImagesReady : true,
        pagination: '.swiper-pagination',
//      nextButton: '.swiper-button-next',
//      prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,     
        autoplay: 2500,
        autoplayDisableOnInteraction: false
   });
   
   //导航栏 点击跳转 样式变化
$(".lis").click(function(){
		//样式变化
		$(".lis").children("a").css("font-size","0.81rem");
		$(".lis").children("a").css("color","rgb(173,199,254)");
		
	    $(this).children("a").css("font-size","1rem");
	    $(this).children("a").css("color","white");	
	    console.log($(this).children("a").css("color")=="white");
	   
		//跳转到顶部	
			$(window).scrollTop(0);		
	    //div显示
	    $(".comment").css("display","none");
	    $(".comment:eq("+$(this).index()+")").css("display","block");
	    //判断有声栏目
	    if($(".comment:eq(2)")[0].style.display=="block"){
			$(".footers").css("display","none");
		}else{
			$(".footers").css("display","block");
		}
});
      
}

