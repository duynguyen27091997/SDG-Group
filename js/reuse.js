$('.btn-login').click(function () {
    $('.btn-login__ul').slideToggle('200');
});
let btnToggle = $(".btn-toggle");
btnToggle.click(function () {
    $('.header__list').slideToggle('200');
});
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
btnToggle.click(function () {
    $(this).toggleClass('toggle');
});