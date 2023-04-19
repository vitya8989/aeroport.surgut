if (document.getElementById("hotel_map")) {
    ymaps.ready(function () {
         const hotelMap = new ymaps.Map(document.getElementById("hotel_map"), {
            center: [61.337046, 73.408996],
            zoom: 14,
            controls: ['zoomControl'],
        });
        hotelMap.geoObjects.add(new ymaps.Placemark([61.337046, 73.408996], {
                iconCaption: 'Гостиница «Полёт» в Сургуте'
            }, {
                preset: 'islands#blueHomeIcon',
            }));
    });
}