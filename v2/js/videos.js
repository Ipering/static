//点击跳到视频播放页
$('.fang').click(function(){
	window.location.href="cvideo.html";
});

//判断是否为浏览器打开
if(navigator.userAgent.indexOf("Windows")>-1){
	console.log(111111);
	$("body").css("width","100%");
	$("html").css("font-size","25px");
	$(".boxmin").css("width","500px");
	$(".boxmin").css("margin","auto");
	$(".boxmin").css("left","0");
	$(".boxmin").css("right","0");	
	$("header").css("width","500px");
}
