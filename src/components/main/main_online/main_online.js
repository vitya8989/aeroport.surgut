// Вывод времени городов

const timeNodes = document.querySelectorAll('.js_time');

if (timeNodes.length > 0) {
    let timeZone = new Date().getTimezoneOffset();

    function getCurrentTimeString(dots, correction) {
        let date = new Date();
        date.setMinutes(date.getMinutes() + timeZone + correction);
        return date.toTimeString().replace(/:[0-9]{2,2} .*/, '');
    }

    setInterval(
        function() {
            timeNodes.forEach((timeNode) => {
                if (timeNode.classList.contains('this--surgut')) {
                    timeNode.innerHTML = getCurrentTimeString(Math.round(Date.now() / 1000) % 2, 300);
                } else if (timeNode.classList.contains('this--moscow')) {
                    timeNode.innerHTML = getCurrentTimeString(Math.round(Date.now() / 1000) % 2, 180);
                } else {
                    timeNode.innerHTML = getCurrentTimeString(Math.round(Date.now() / 1000) % 2, 0);
                }
            });
        },
        1000
    );
}

// Табы вылет/прилет онлайн

const tabOnline = document.querySelectorAll('.js_tab_online');
const tabBodyOnline = document.querySelectorAll('.js_tab_body_online');

if (tabOnline.length > 0 && tabBodyOnline.length > 0) {
    tabOnline.forEach((tabLink) => {
        tabLink.addEventListener('click', function (e) {
           e.preventDefault();
            tabOnline.forEach((tabLink) => {
                tabLink.classList.remove('active');
            });
            tabBodyOnline.forEach((tabBody) => {
                if (this.dataset.tab === tabBody.dataset.tab) {
                    this.classList.add('active');
                    tabBody.classList.add('active');
                } else {
                    tabBody.classList.remove('active');
                }
            });
        });
    });
}

// Аккордеоны "Внимание"

const attentionAccordionHeads = document.querySelectorAll('.js_attention_accordion_head');

if (attentionAccordionHeads.length > 0) {
    attentionAccordionHeads.forEach((head) =>{
        if (head.nextElementSibling.classList.contains('opened')) {
            head.nextElementSibling.style.maxHeight = head.nextElementSibling.scrollHeight + 'px';
            let attentionBtnText = head.querySelector('.js_attention_btn_text');
            attentionBtnText.textContent = 'Свернуть';
        } else {
            head.nextElementSibling.style.maxHeight = 0;
        }
        head.addEventListener('click', function () {
            attentionAccordionHeads.forEach((head) =>{
                if (head.nextElementSibling.classList.contains('opened') && head !== this) {
                    head.nextElementSibling.classList.remove('opened');
                    head.nextElementSibling.style.maxHeight = 0;
                    head.classList.remove('active');
                    let attentionBtnText = head.querySelector('.js_attention_btn_text');
                    attentionBtnText.textContent = 'Развернуть';
                }
            });
            if (this.nextElementSibling.classList.contains('opened')) {
                this.nextElementSibling.classList.remove('opened');
                this.nextElementSibling.style.maxHeight = 0;
                this.classList.remove('active');
                let attentionBtnText = head.querySelector('.js_attention_btn_text');
                attentionBtnText.textContent = 'Развернуть';
            } else {
                this.nextElementSibling.classList.add('opened');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
                this.classList.add('active');
                let attentionBtnText = head.querySelector('.js_attention_btn_text');
                attentionBtnText.textContent = 'Свернуть';
            }
        });
    });
}

// fixed для "Внимание"

const attentionsBody = document.querySelector('.js_attentions_body');
const attentions = document.querySelector('.js_attentions');

if (attentionsBody && attentions) {
    let attentionsTop = attentions.getBoundingClientRect().top;
    let startPageYOffset = window.pageYOffset;
    attentionsBody.style.left = `${attentions.getBoundingClientRect().left}px`;
    let attentionsBodyTop = attentionsBody.getBoundingClientRect().top;
    if (window.pageYOffset + attentionsBodyTop > attentionsTop + startPageYOffset) {
        attentionsBody.classList.remove('this--fixed');
    }
    window.addEventListener('scroll', () => {
        if (window.pageYOffset + attentionsBodyTop > attentionsTop + startPageYOffset) {
            attentionsBody.classList.remove('this--fixed');
        } else {
            attentionsBody.classList.add('this--fixed');
        }
    });

    window.addEventListener('resize', () => {
        attentionsBody.style.left = `${attentions.getBoundingClientRect().left}px`;
        if (!attentionsBody.classList.contains('this--fixed')) {
            attentionsBody.classList.add('this--fixed');
        };
        attentionsBodyTop = attentionsBody.getBoundingClientRect().top;
        attentionsTop = attentions.getBoundingClientRect().top;
        startPageYOffset = window.pageYOffset;
        if (window.pageYOffset + attentionsBodyTop > attentionsTop + startPageYOffset) {
            attentionsBody.classList.remove('this--fixed');
        }
    });
}

// Аккордеоны рейсов

const flightAccordionHeads = document.querySelectorAll('.js_flight_accordion_head');

if (flightAccordionHeads.length > 0) {
    flightAccordionHeads.forEach((head) =>{
        if (window.innerWidth < 1100) {
            head.nextElementSibling.style.maxHeight = 0;
        }
        head.addEventListener('click', function () {
            if (window.innerWidth < 1100) {
                flightAccordionHeads.forEach((head) => {
                    if (head.nextElementSibling.classList.contains('opened') && head !== this) {
                        head.nextElementSibling.classList.remove('opened');
                        head.nextElementSibling.style.maxHeight = 0;
                        head.classList.remove('active');
                    }
                });
                if (this.nextElementSibling.classList.contains('opened')) {
                    this.nextElementSibling.classList.remove('opened');
                    this.nextElementSibling.style.maxHeight = 0;
                    this.classList.remove('active');
                } else {
                    this.nextElementSibling.classList.add('opened');
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
                    this.classList.add('active');
                }
            }
        });
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1100) {
            flightAccordionHeads.forEach((head) =>{
                head.nextElementSibling.classList.remove('opened');
                head.nextElementSibling.style.maxHeight = 0;
                head.classList.remove('active');
            });
        } else {
            flightAccordionHeads.forEach((head) =>{
                head.nextElementSibling.style.maxHeight = 'none';
            });
        }
    });
}