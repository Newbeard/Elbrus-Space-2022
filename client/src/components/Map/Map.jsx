import { YMaps, Map, Placemark, Clusterer, ZoomControl } from 'react-yandex-maps';
import React, { useEffect, } from 'react';
import './style.module.css'
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid'
// import { getCity } from '../../redux/actions/city.action';
import { initStudentsFromServer } from '../../redux/actions/students.action';


const Maps = (props) => {
  const { students } = useSelector(state => state)

  const citiesArr = students?.map((city) => city.coordinates?.split(','))
  return (
    <>
      <YMaps >
        <div className='ya-map' >
          <div>
            <Map id="map" width={'max-width'} height={400} defaultState={{ center: [55.75, 37.57], zoom: 4 }}>

              <Clusterer
                options={{
                  preset: 'islands#invertedVioletClusterIcons',
                  groupByCoordinates: false,
                }}
              >
                {citiesArr?.map(el => {
                  return <Placemark key={uuid()} defaultGeometry={el} option={{ preset: '#islands#circleDotIcon' }} />
                })}
              </Clusterer>
              <ZoomControl options={{ float: 'right' }} />
            </Map>
          </div>
        </div>
      </YMaps>
    </>
  )

}


export default Maps;

