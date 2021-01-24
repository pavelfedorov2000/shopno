$('.partners-slider').slick({
    prevArrow: '<button class="partners-slider__btn partners-slider__btn--prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"><g><g opacity="0.67"><path d="M14 14.999l-7.574-7.5L14-.001H7.575L0 7.499l7.575 7.5z"/></g></g></svg></button>',
    nextArrow: '<button class="partners-slider__btn partners-slider__btn--next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"><g><g opacity="0.67"><path d="M0 14.999l7.574-7.5L0-.001h6.425L14 7.499l-7.575 7.5z"/></g></g></svg></button>',
    dots: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        },
    ]
});

$('.partners-slider__item-rate').rateYo({
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"><g><g><path fill="#f2da3b" d="M7.682 0l2.532 4.4 5.15.948-3.585 3.666.65 4.986-4.747-2.133L2.934 14l.65-4.986L0 5.348l5.15-.949L7.682 0"/></g></g></svg>',
    starWidth: "16px",
    spacing: "6px",
    readOnly: true
});