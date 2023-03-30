// Слайдер "Партнеры"

const mainPartnersSlider = document.querySelector('.js_main_partners_slider');

if (mainPartnersSlider) {
    new Swiper('.js_main_partners_slider', {
        speed: 300,
        spaceBetween: 15,
        slidesPerView: 'auto',
        pagination: {
            el: '.main_partners__slider_pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.main_partners__slider_next',
            prevEl: '.main_partners__slider_prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 24,
                slidesPerView: 5,
            },
            1100: {
                spaceBetween: 32,
                slidesPerView: 6,
            },
            1500: {
                spaceBetween: 47,
                slidesPerView: 7,
            }
        }
    });
}
