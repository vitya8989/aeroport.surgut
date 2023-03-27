// Прокрутка ко второму блоку по клику

const scrollBtn = document.querySelector('.js_scroll_btn');
const onlineTableSection = document.querySelector('.js_online_table_section');

if (scrollBtn && onlineTableSection) {
    scrollBtn.addEventListener('click', () => {
        let header = document.querySelector('.header');
        if (header) {
            let headerHeight = header.offsetHeight;
            let onlineTableSectionTop =  onlineTableSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: onlineTableSectionTop,
                behavior: "smooth"
            });
        }
    })
}