// Открытие/закрытие поиска

const search = document.querySelector('.js_search');
const openSearchBtn = document.querySelector('.js_open_search_btn');

if (search) {
    openSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        search.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    const closeSearchBtn = search.querySelector('.js_close_search_btn');

    closeSearchBtn.addEventListener('click', () => {
        search.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}


// Открытие/закрытие моб. меню

const mobMenu = document.querySelector('.js_mob_menu');
const burger = document.querySelector('.js_open_menu');

if (mobMenu) {
    burger.addEventListener('click', () => {
        mobMenu.classList.add('open-menu');
        document.body.style.overflow = 'hidden';
    });

    const closeMenu = mobMenu.querySelector('.js_close_menu');

    closeMenu.addEventListener('click', () => {
        mobMenu.classList.remove('open-menu');
        document.body.style.overflow = 'auto';
    });
}


// Аккордеоны моб. меню

if (mobMenu) {
    const menuAccordionHeads = mobMenu.querySelectorAll('.js_menu_accordion_head');

    if (menuAccordionHeads.length > 0) {
        menuAccordionHeads.forEach((head) =>{
            head.addEventListener('click', function (e) {
                if (window.innerWidth < 1100) {
                    e.preventDefault();
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
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1100) {
            menuAccordionHeads.forEach((head) =>{
                head.nextElementSibling.classList.remove('opened');
                head.nextElementSibling.style.maxHeight = 0;
                head.classList.remove('active');
            });
        } else {
            menuAccordionHeads.forEach((head) =>{
                head.nextElementSibling.style.maxHeight = 'none';
                mobMenu.classList.remove('open-menu');
                document.body.style.overflow = 'auto';
            });
        }
    });
}

// Добавление/удаление класса для прозрачности хедера на главной

const header = document.querySelector('.header');

if (header && header.classList.contains('this--main')) {
    window.addEventListener('scroll', () => {
       if (window.pageYOffset > 0) {
           header.classList.remove('this--main');
       } else {
           header.classList.add('this--main');
       }
    });
}