//中间点击显示内容
var more=document.querySelector(".load img");
var morebtn=document.querySelector(".load");
var content=document.querySelector('.txts');
more.style.webkitTransform = 'rotate(0deg)';

morebtn.onclick = function () {
    if (more.style.webkitTransform == 'rotate(0deg)') {
        content.style.overflow = 'inherit';
        content.style.height="9rem";
//      box.style.height = '20rem';
        more.style.webkitTransform = 'rotate(180deg)'
    } else if (more.style.webkitTransform == 'rotate(180deg)') {
        content.style.overflow = 'hidden';
        content.style.height="7.5rem";
//      box.style.height = '9rem';
        more.style.webkitTransform = 'rotate(0deg)'
    }
}

//下部swiper 轮播
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });
    
//点击图片变颜色
// window.onload = function(){
//var cur;
//var tr = document.querySelectorAll(".ppt");
//for(var i=0;i<tr.length;i++){
//tr[i].onclick = function(){
//cur ? cur.style.color = '#333333' : '';
//changecolor(this);
//cur = this;
//}
//}
//}
// function changecolor(val){
// 	val.style.color="red";
// }
