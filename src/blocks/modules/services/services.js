$('.services__item-more').on('click', function(e) {
    e.preventDefault();
    $('.services__item-content-more').removeClass('services__item-content-more--active');
    $(this).parent().siblings().addClass('services__item-content-more--active');
});

$('.services__item-close').on('click', function() {
    $(this).parent().removeClass('services__item-content-more--active');
});