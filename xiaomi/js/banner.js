// 4.初始化Swiper
var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    autoplay:{
        delay:6000,
        disableOnInteraction: true,
    },//可自动轮播
    // 如果需要分页器
    effect:'fade',
    fadeEffect:{
        crossFade:true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})       