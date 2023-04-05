// Попап "Задать вопрос"

const askPopup = document.querySelector('.js_ask_popup');
const askAddOpen = document.querySelector('.js_ask_add_open');

if (askPopup && askAddOpen) {
    askAddOpen.addEventListener('click', () => {
        askPopupOpen();
    });

    const askPopupCloseBtns = askPopup.querySelectorAll('.js_ask_popup_close');
    askPopupCloseBtns.forEach((close) => {
        close.addEventListener('click', () => {
            askPopupClose();
        });
    });

    askPopup.addEventListener('click', (e) =>{
        if (!e.target.closest('.ask_popup__body')) {
            askPopupClose();
        }
    });

    const askContent = askPopup.querySelectorAll('.js_ask_content');

    function askPopupOpen () {
        askPopup.classList.add('open');
        document.body.classList.add('this--overflow');
    }

    function setActiveContentForm() {
        askContent.forEach((content) => {
            if (content.dataset.content === 'thanks' && content.classList.contains('active')) {
                content.classList.remove('active');
            } else if (content.dataset.content === 'form' && !content.classList.contains('active')) {
                content.classList.add('active');
            }
        });
    }
    function setActiveContentThanks() {
        askContent.forEach((content) => {
            if (content.dataset.content === 'thanks' && !content.classList.contains('active')) {
                content.classList.add('active');
            } else if (content.dataset.content === 'form' && content.classList.contains('active')) {
                content.classList.remove('active');
            }
        });
    }


    function askPopupClose () {
        askPopup.classList.remove('open');
        document.body.classList.remove('this--overflow');
        setTimeout(() => {
            setActiveContentForm()
        }, 250);
    }

    // Форма "Задать вопрос"

    const askPopupForm = document.querySelector('.js_ask_popup_form');

    if (askPopupForm) {
        const askPopupFormInputs = askPopupForm.querySelectorAll('.js_ask_popup_input');

        askPopupFormInputs.forEach((input) => {
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

        askPopupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(askPopupForm)) {
                return;
            }
            // Отправка формы
            setActiveContentThanks();
            askPopupForm.reset();
        });

        function validateForm (form) {
            let valid = true;
            const validateInputs = form.querySelectorAll('.js_ask_popup_input_required');

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

    const askPopupNewQuestion = document.querySelector('.js_ask_popup_new_question');

    askPopupNewQuestion.addEventListener('click', () => {
        setActiveContentForm();
    });
}
