import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React, { useEffect, useState} from 'react';
import './style.module.css'
import { useSelector } from 'react-redux';
import { yandexDecoder } from '../../redux/actions/city.action';



const Maps = (props) => {
  const cityesss=[
    [55.737693, 37.723390],
    [55.744665, 37.491304],
    [55.636063, 37.566835],
    [55.865323, 37.599794],
    [55.741567, 37.960969]
  ]

  const {city} = useSelector(state => state)


  return (
    <>
    
      (<YMaps>
        <div className='ya-map' >
          <div>
            <Map id="map" width={'max-width'} height={400} defaultState={{ center: [55.75, 37.57], zoom: 6 }}>
           
          
          {cityesss?.map(el=>{
            return <Placemark defaultGeometry={el} />
          })}
            </Map>
          </div>
        
        </div>
      </YMaps>)
      {/* } */}
    </>

  );
}


export default Maps;
