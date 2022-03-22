import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useState } from 'react';


function Suggestion(props) {
  const [value, setValue] = useState();


  return (
    <div>
      <AddressSuggestions token="5a116a524cdcf8f1a40185e0cdda9f9d93e929ae" value={value} onChange={setValue} />;
    </div>
  );
}

export default Suggestion;
