const bottomMenu = document.querySelector('.js_bottom_menu');

if (bottomMenu) {
    const bottomMenuAccordionHeads = bottomMenu.querySelectorAll('.js_footer_accordion_head');

    if (bottomMenuAccordionHeads.length > 0) {
        bottomMenuAccordionHeads.forEach((head) =>{
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
    let startWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1100) {
            if (window.innerWidth !== startWidth) {
                bottomMenuAccordionHeads.forEach((head) => {
                    head.nextElementSibling.classList.remove('opened');
                    head.nextElementSibling.style.maxHeight = 0;
                    head.classList.remove('active');
                });
            }
        } else {
            bottomMenuAccordionHeads.forEach((head) =>{
                head.nextElementSibling.style.maxHeight = 'none';
            });
        }
    });
}