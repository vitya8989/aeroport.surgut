@@include('../components/header/header.js');
@@include('../components/footer/footer.js');
@@include('../components/main/main_top/main_top.js');
@@include('../components/main/main_online/main_online.js');
@@include('../components/main/main_about/main_about.js');
@@include('../components/main/main_partners/main_partners.js');
@@include('../components/text_sample/text_sample.js');
@@include('../components/schedule_in/schedule_in.js');
@@include('../components/scheme/scheme.js');
@@include('../components/ask/ask/ask.js');
@@include('../components/ask/ask_popup/ask_popup.js');
@@include('../components/hotel/hotel_top/hotel_top.js');
@@include('../components/hotel/hotel_contacts/hotel_contacts.js');
@@include('../components/hotel/hotel_detail/hotel_detail.js');

// Только цифры для инпутов

const onlyNumber = document.querySelectorAll('.js_only_number');

if (onlyNumber.length > 0) {
    for (let i = 0; i < onlyNumber.length; i++) {
        onlyNumber[i].addEventListener('input', function () {
            this.value = this.value.replace(/[^\d.,]/g, "");
        });
    }
}


