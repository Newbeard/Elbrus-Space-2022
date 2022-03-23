import Diagram from "../Diagram/Diagram";
import Maps from "../Map/Map";
import Suggestion from "../Map/Suggestion";


export default function Home(props) {

  return (
    <div>
      <Maps />
      <Diagram />
     <Suggestion/>
    </div>
  );
}



