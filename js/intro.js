$('.btn-more-info').click(function () {
   $('.main__info-more').slideToggle(200);
});
$(".main__list li.nav-item").click(function () {
    $(this).addClass('active');
    $(".main__list li.nav-item").not($(this)).removeClass('active');
   $('.main__info-title').text($(this).text());
   let id = $(this).data('id');
    $(".main__info").each(function () {
            if (id === $(this).data('id')){
                $(this).fadeIn();
            }else {
                $(this).fadeOut()
            }
    })
});