// Прокрутка к номерам по клику

const scrollHotelBtn = document.querySelector('.js_scroll_hotel_btn');
const hotelRoomsSection = document.querySelector('.js_hotel_rooms');

if (scrollHotelBtn && hotelRoomsSection) {
    scrollHotelBtn.addEventListener('click', () => {
        let header = document.querySelector('.header');
        if (header) {
            let headerHeight = header.offsetHeight;
            let onlineTableSectionTop =  hotelRoomsSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: onlineTableSectionTop,
                behavior: "smooth"
            });
        }
    })
}