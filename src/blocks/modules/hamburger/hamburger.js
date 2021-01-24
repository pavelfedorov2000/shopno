$('.hamburger-btn').on('click', function() {
    $(this).toggleClass('hamburger-btn--active');
    $('.header__menu').toggleClass('header__menu--active');
});