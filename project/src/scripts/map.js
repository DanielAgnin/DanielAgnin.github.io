let myMap;

const init = () => {
    myMap = new ymaps.Map("adress", {
        center: [55.752, 37.597],
        zoom: 14,
        controls: []
    });

    const coordinates = [
        [55.756112, 37.621221],
        [55.748997, 37.602354],
        [55.743937, 37.581706],
        [55.759507, 37.582844]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: 'images/marker.svg',
        iconImageSize: [58, 73],
        iconImageOffset: [-5, -73]
    });

    coordinates.forEach(coordinate => {
        myCollection.add(new ymaps.Placemark(coordinate));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable("scrollZoom");
}

ymaps.ready(init);