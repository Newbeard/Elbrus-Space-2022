import React, { useEffect } from 'react'
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps';
// import { useStyles } from './style';

const YandexMapComponent = ({ checkedObjects }) => {
  // const classes = useStyles();
  let myMap;

function myGeoCode(ymaps, myMap, address) {
    ymaps.geocode(address, {
        results: 1
    }).then(function (res) {
        // Выбираем первый результат геокодирования.
        let firstGeoObject = res.geoObjects.get(0)
        // Координаты геообъекта.
        let coords = firstGeoObject.geometry.getCoordinates()
        // Область видимости геообъекта.
        let bounds = firstGeoObject.properties.get('boundedBy');

        firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
        // Получаем строку с адресом и выводим в иконке геообъекта.
        //firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

        // Добавляем первый найденный геообъект на карту.
        myMap.geoObjects.add(firstGeoObject);
        // Масштабируем карту на область видимости геообъекта.
        myMap.setBounds(bounds, {
            // Проверяем наличие тайлов на данном масштабе.
            checkZoomRange: true
        });

        let myPlacemark = new ymaps.Placemark(coords, {
            iconContent: 'моя метка',
        }, {
            preset: 'islands#violetStretchyIcon'
        });

        myPlacemark.events.add('click', function() {
            alert(address)
        });

        myMap.geoObjects.add(myPlacemark);
    });
}

    function init(ymaps, myMap) {
        checkedObjects.forEach(address => myGeoCode(ymaps, myMap, `${address.district.city.name}, ${address.address}`))
    }

  return (
    <YMaps
      query={{
       
        apikey: 'fa906837-e249-4c18-99ac-fb6aff0bc767',
       
      }}
    >
      <Map
        key={checkedObjects}
        state={{
          center: [],
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl']
        }}
        modules={["geolocation", "geocode"]}
        onLoad={ymaps => {
            ymaps.ready(() => {
                init(ymaps, myMap)
            });
        }}
        instanceRef={yaMap => {
            if (yaMap) {
                myMap = yaMap;
            }
        }}
        // className={classes.mapContainterStyle}
      />
    </YMaps>
  )
};

export default YandexMapComponent;
