// Подключение карты 2gis

const scheme = document.getElementById('scheme');

if (scheme) {
    DG.FloorsWidget.init({
        container: 'scheme',
        initData: {
            complexId: '5489397701029826',
            options: {
                initialRotation: 0
            }
        }
    });
}
