import { YMaps, Map, Placemark, Clusterer, } from 'react-yandex-maps';
import React, { useEffect, useState } from 'react';
import './style.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { yandexDecoder } from '../../redux/actions/city.action';
import { getCity } from '../../redux/actions/city.action';
import DinamicList from '../../DinamicList/DinamicList';



// Geocoder.init('fa906837-e249-4c18-99ac-fb6aff0bc767');
// Geocoder.addressToGeo();

const Maps = (props) => {
  const dispatch = useDispatch();
  const { city } = useSelector(state => state)
  useEffect(() => {
    dispatch(getCity())
  }, [])

  const citiesArr = city.map((city) => city.coordinates.split(','))
  return (
    <>
      <YMaps onApiAvaliable={ymaps => console.log(ymaps)}>
        <div className='ya-map' >
          <div>
            <Map id="map" width={'max-width'} height={400} defaultState={{ center: [55.75, 37.57], zoom: 6 }}>
              <Clusterer
                options={{
                  preset: 'islands#invertedVioletClusterIcons',
                  groupByCoordinates: false,
                }}
              >
                {citiesArr?.map(el => {
                  return <Placemark defaultGeometry={el} option={{ preset: 'islands#islands#circleDotIcon' }} />
                })}
              </Clusterer>
            </Map>
          </div>
        </div>
      </YMaps>

    </>
  )

}


export default Maps;
