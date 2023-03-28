// Слайдер "Об аэропорте"

const mainAboutSlider = document.querySelector('.js_main_about_slider');

if (mainAboutSlider) {
    new Swiper('.js_main_about_slider', {
        speed: 300,
        spaceBetween: 15,
        slidesPerView: 'auto',
        pagination: {
            el: '.main_about__slider_pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.main_about__slider_next',
            prevEl: '.main_about__slider_prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 32,
                slidesPerView: 2,
            },
            1100: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            1500: {
                spaceBetween: 32,
                slidesPerView: 4,
            }
        }
    });
}