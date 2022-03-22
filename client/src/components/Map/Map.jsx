import { YMaps, Map, Placemark, Geocoder } from 'react-yandex-maps';
import React, { useEffect, useState} from 'react';
import './style.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { yandexDecoder } from '../../redux/actions/city.action';
import { getCity } from '../../redux/actions/city.action';



// Geocoder.init('fa906837-e249-4c18-99ac-fb6aff0bc767');
// Geocoder.addressToGeo();

const Maps = (props) => {
  const cityesss=[
    [55.737693, 37.723390],
    [55.744665, 37.491304],
    [55.636063, 37.566835],
    [55.865323, 37.599794],
    [55.741567, 37.960969]
  ]
 const mapState= [55.865323, 37.599794]
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCity())
    },[])

  const {city} = useSelector(state => state)
  console.log(city.data)

  

  return (
    <>
    
      (<YMaps onApiAvaliable={(ymaps) => console.log(ymaps)}>
        <div className='ya-map' >
          <div>
            <Map id="map" width={'max-width'} height={400}  defaultState={{center: [55.75, 37.57], zoom: 6 }}>
           
          
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

// const Maps = (props) => {
//   const [center, setCenter] = useState([55.741567, 37.960969]);
//   let ymapsObject;

//   const getCoords = (ymaps) => {
//     console.log(ymaps);
//     ymapsObject = ymaps;
//   };

//   useEffect(() => {
//     console.log(ymapsObject);
//     if (ymapsObject) {
//       ymapsObject.geocode(`Санкт-Петербург, ${props.address}`).then((result) => {
//         const newCoords = result.geoObjects.get(0).geometry.getCoordinates();
//         setCenter(newCoords);
//       });
//     }
//   }, [props]);

//   const [zoom, setZoom] = React.useState(17);
//   const mapState = React.useMemo(() => ({ center, zoom }), [center, zoom]);

//   return (
//     <>
//       <YMaps query={ 'fa906837-e249-4c18-99ac-fb6aff0bc767' }>
//         <Map
//           onLoad={(ymaps) => getCoords(ymaps)}
//           modules={["geocode"]}
//           width="100%"
//           height="500px"
//           state={mapState}
//         >
//           <Placemark geometry={center} />
//         </Map>
//       </YMaps>
//     </>
//   );
// };

// export default Maps;

// const Maps = (props) => {
  //   const [center, setCenter] = useState([55.741567, 37.960969]);
  //   let ymapsObject;
  
  //   const getCoords = (ymaps) => {
  //     console.log(ymaps);
  //     ymapsObject = ymaps;
  //   };
  
  //   useEffect(() => {
  //     console.log(ymapsObject);
  //     if (ymapsObject) {
  //       ymapsObject.geocode(`Санкт-Петербург, ${props.address}`).then((result) => {
  //         const newCoords = result.geoObjects.get(0).geometry.getCoordinates();
  //         setCenter(newCoords);
  //       });
  //     }
  //   }, [props]);
  
  //   const [zoom, setZoom] = React.useState(17);
  //   const mapState = React.useMemo(() => ({ center, zoom }), [center, zoom]);
  
  //   return (
  //     <>
  //       <YMaps query={ 'fa906837-e249-4c18-99ac-fb6aff0bc767' }>
  //         <Map
  //           onLoad={(ymaps) => getCoords(ymaps)}
  //           modules={["geocode"]}
  //           width="100%"
  //           height="500px"
  //           state={mapState}
  //         >
  //           <Placemark geometry={center} />
  //         </Map>
  //       </YMaps>
  //     </>
  //   );
  // };
  
  // export default Maps;
  
