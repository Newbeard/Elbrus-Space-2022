import { YMaps, Map} from 'react-yandex-maps';
import React from 'react';


const Maps = (props) => (
 
    <YMaps>
    <div className='ya-map' >
      <div>
      <Map id="map" width={'max-width'} height={400} defaultState={{ center: [55.75, 37.57], zoom: 6 }} />
      </div>
    </div>
  </YMaps>
  );


export default Maps;
