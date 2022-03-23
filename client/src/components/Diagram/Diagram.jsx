import React from 'react';
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import Chart from "./Chart";

function Diagram(props) {
  return (
    <div className="App">
      <div className="container">
        <h1>Статистика</h1>
        <div className="section">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Diagram;
