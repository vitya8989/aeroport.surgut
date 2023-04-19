// Запуск и остановка видео

const videoBlocks = document.querySelectorAll('.js_video');

if (videoBlocks.length > 0) {
    videoBlocks.forEach((block) => {
        // let videoBtn = block.querySelector('.js_video_btn');
        let video = block.querySelector('video');
        video.volume = 0.3;

        // videoBtn.addEventListener('click', () => {
        //     video.play();
        //     videoBtn.classList.add('hidden');
        // });
        // block.addEventListener('click', (e) => {
        //   if (!e.target.closest('.js_video_btn') && videoBtn.classList.contains('hidden')) {
        //       video.pause();
        //       videoBtn.classList.remove('hidden');
        //   }
        // });
    });
}

// Дефолтный слайдер

const defaultSliders = document.querySelectorAll('.js_slider');

if (defaultSliders.length > 0) {
    defaultSliders.forEach((slider) => {
        new Swiper(slider, {
            speed: 500,
            slidesPerView: 1,
            pagination: {
                el: '.text_sample__slider_pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.text_sample__slider_next',
                prevEl: '.text_sample__slider_prev',
            },
        });
    });
}

// Дефолтные аккордеоны

const sampleAccordionHeads = document.querySelectorAll('.js_sample_accordion_head');

if (sampleAccordionHeads.length > 0) {
    sampleAccordionHeads.forEach((head) =>{
        head.addEventListener('click', function () {
            // sampleAccordionHeads.forEach((head) => {
            //     if (head.nextElementSibling.classList.contains('opened') && head !== this) {
            //         head.nextElementSibling.classList.remove('opened');
            //         head.nextElementSibling.style.maxHeight = 0;
            //         head.classList.remove('active');
            //     }
            // });
            if (this.nextElementSibling.classList.contains('opened')) {
                this.nextElementSibling.classList.remove('opened');
                this.nextElementSibling.style.maxHeight = 0;
                this.classList.remove('active');
            } else {
                this.nextElementSibling.classList.add('opened');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    });
}