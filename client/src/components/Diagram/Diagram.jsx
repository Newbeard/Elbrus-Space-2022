import React from 'react';
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import Chart from "./Chart";
import './Diagram.css'

function Diagram(props) {
  return (
    <div className="container-diagram">
      <h1>Статистика</h1>
      <Chart />
      <div>Cоотношение студентов, проходящих обучение в Москве, Санкт-Петербурге и Онлайн</div>
    </div>
  );
}

export default Diagram;
