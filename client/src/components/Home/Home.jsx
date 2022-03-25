import Maps from "../Map/Map";
import './Home.css'


export default function Home(props) {
  return (
    <div className="upper-container">
      <div className="container-map">
        <h1 className='header-map'>География студентов</h1>
        <Maps />
        <div className='description-map'>На карте отмечены родные города студентов, поступивших на учёбу в Эльбрус.</div>
        <div className='description-map-bottom'>Также можно увидеть количество студентов из одного города.</div>
      </div>
    </div>
  );
}



