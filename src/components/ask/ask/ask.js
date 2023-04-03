// Показать ответ в "Задать вопрос"

const showAnswerBtns = document.querySelectorAll('.js_show_answer');

if (showAnswerBtns.length > 0) {
    showAnswerBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            showAnswerBtns.forEach((btn) => {
                if (btn.classList.contains('hide') && btn !== this) {
                    btn.classList.remove('hide');
                    btn.nextElementSibling.style.maxHeight = 0;
                }
            });
            this.classList.add('hide');
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
        });
    });
}

// Открытие поиска

const askSearchOpen = document.querySelector('.js_ask_search_open');
const askSearch = document.querySelector('.js_ask_search');

if (askSearchOpen) {
    askSearchOpen.addEventListener('click', (e) => {
        e.preventDefault();
        askSearch.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeAskSearch();
}

// Ф-ия закрытия поиска

function closeAskSearch () {
    const closeSearchBtn = askSearch.querySelector('.js_close_ask_search_btn');

    closeSearchBtn.addEventListener('click', () => {
        askSearch.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}


// Открытие поиска с переносом занчения

const askSearchOpenWithValue = document.querySelector('.js_ask_search_open_with_value');

if (askSearchOpenWithValue) {
    askSearchOpenWithValue.addEventListener('click', (e) => {
        e.preventDefault();
        askSearch.querySelector('.search__input').value = askSearchOpenWithValue.value;
        askSearch.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    closeAskSearch();

    // Сброс значения в ask-инпуте

    const askInputReset = document.querySelector('.js_ask_input_reset');

    askInputReset.addEventListener('click', () => {
        askSearchOpenWithValue.value = '';
    });
}

