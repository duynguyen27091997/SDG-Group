//show phần login cho mobile
$('.btn-login').click(function () {
    $('.btn-login__ul').slideToggle('200');
});
let btnToggle = $(".btn-toggle");
btnToggle.click(function () {
    $('.header__list').slideToggle('200');
});
//chuyển động cho button show menu mobile
btnToggle.click(function () {
    $(this).toggleClass('toggle');
});
//về đầu trang
$(document).on("scroll",function () {
    if (window.pageYOffset>=400){
        $('.contact-right').show();
        $('.btn-back-to-top').show();
    }else {
        $('.contact-right').hide();
        $('.btn-back-to-top').hide();
    }
});
$(".btn-back-to-top").click(function () {
    $('html,body').stop().animate({
        scrollTop: 0
    }, 700);
});
//js form đăng kí đăng nhập
$(".header__btn-login").click(function () {
    event.defaultPrevented;
    $("#login").fadeIn();
});
$(".header__btn-sign").click(function () {
    event.defaultPrevented;
    $("#sign").fadeIn();
});
$(".btn-account-close").click(function () {
   $('.account').fadeOut();
});
$('.btn-sign').click(function () {
   $('#sign').fadeIn();
   $('.account').not('#sign').fadeOut();
})
;$('.btn-log').click(function () {
   $('#login').fadeIn();
   $('.account').not('#login').fadeOut();
});
$(".btn-forget-pass").click(function (e) {
    e.preventDefault();
    $("#forget-pass").fadeIn();
    $('.account').not('#forget-pass').fadeOut();
});