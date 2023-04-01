// Подключение карты 2gis

const scheme = document.getElementById('scheme');

if (scheme) {
    DG.then(function() {
        DG.map('scheme', {
            center: [61.340228, 73.407892],
            zoom: 17
        });
    });
}
