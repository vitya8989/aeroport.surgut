if (document.querySelector('.hotel_detail_slider')) {
    new Swiper('.hotel_detail_slider', {
        speed: 500,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 8,
        slidesToScroll: 1,
        centeredSlides: true,
        pagination: {
            el: '.hotel_detail_slider__pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.hotel_detail_slider__next',
            prevEl: '.hotel_detail_slider__prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 24,
            }
        }
    });
}

const orderContent = document.querySelectorAll('.js_order_content');


if (orderContent.length > 0) {
    function setActiveContentOrderForm() {
        orderContent.forEach((content) => {
            if (content.dataset.content === 'thanks' && content.classList.contains('active')) {
                content.classList.remove('active');
            } else if (content.dataset.content === 'form' && !content.classList.contains('active')) {
                content.classList.add('active');
            }
        });
    }
    function setActiveContentOrderThanks() {
        orderContent.forEach((content) => {
            if (content.dataset.content === 'thanks' && !content.classList.contains('active')) {
                content.classList.add('active');
            } else if (content.dataset.content === 'form' && content.classList.contains('active')) {
                content.classList.remove('active');
            }
        });
    }

    const orderForm = document.querySelector('.js_order_form');

    if (orderForm) {
        const orderFormInputs = orderForm.querySelectorAll('.js_order_form_input');

        orderFormInputs.forEach((input) => {
            input.addEventListener('focus', () => {
                input.previousElementSibling.classList.add('top_position');
                if (input.classList.contains('error') && input.nextElementSibling && input.previousElementSibling) {
                    input.classList.remove('error');
                    input.previousElementSibling.classList.remove('error');
                    input.nextElementSibling.classList.remove('error');
                    input.nextElementSibling.textContent = '';
                }
            });
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    input.previousElementSibling.classList.remove('top_position');
                }
            });
        });

        $('.js_tel_mask').inputmask({
            mask: '+7 (999) 999-9999',
            showMaskOnHover: false
        });

        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(orderForm)) {
                return;
            }
            // Отправка формы
            setActiveContentOrderThanks();
            orderForm.reset();
        });

        function validateForm (form) {
            let valid = true;
            const validateInputs = form.querySelectorAll('.js_order_form_input_required');

            validateInputs.forEach((input) => {
                if (input.value === '') {
                    valid = false;
                    input.classList.add('error');
                    input.previousElementSibling.classList.add('error');
                    input.nextElementSibling.classList.add('error');
                    input.nextElementSibling.textContent = 'Это обязательное поле';
                }
                if (input.classList.contains('js_tel_mask') && input.value.indexOf('_') !== -1) {
                    valid = false;
                    input.classList.add('error');
                    input.previousElementSibling.classList.add('error');
                    input.nextElementSibling.classList.add('error');
                    input.nextElementSibling.textContent = 'Неверно введен телефон';
                }
            });

            return valid;
        }
    }

    const orderThanksBtn = document.querySelector('.js_order_thanks_btn');

    orderThanksBtn.addEventListener('click', () => {
        setActiveContentOrderForm();
    });
}