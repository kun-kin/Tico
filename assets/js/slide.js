var swiper = new Swiper(".related-post-list", {
    slidesPerView: 3,
    spaceBetween: 35,
    loop: true,
    autoplay: false,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1366: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        374: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
    },
});