$('.banner__list').slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 300,
    arrows: true
});
$('.banner__info-new__list').slick({
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300
});

for (let i =1 ;i<=4;i++){
    let tabToggle =$(`#tab-${i}-toggle`);
    tabToggle.click(function () {
        tabToggle.addClass('active');
        $('.tab-toggle').not(tabToggle).removeClass('active');
        let tab = $(`.tab-${i}`);
        tab.show();
        $(`.jumbotron__tab`).not(tab).hide();
    })
}