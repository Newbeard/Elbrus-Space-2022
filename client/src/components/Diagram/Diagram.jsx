import React from 'react';
import {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  helpers, DropShadow, Gradient
} from 'rumble-charts';

function Diagram(props) {
  const series = [{
  data: [1, 2, 3]
}, {
  data: [5, 7, 11]
}, {
  data: [13, 17, 19]
}];
  return (
    <div>
      Hello from diagram
      <Chart
  height={300}
  minY={0}
  series={[
    {
      data: [
        1,
        2,
        3
      ],
      name: 'Moskow'
    },
    {
      data: [
        5,
        7,
        11
      ],
      name: 'Saint-Peterburg'
    },
    {
      data: [
        13,
        17,
        19
      ],
      name: 'Kazan'
    }
  ]}
  style={{
    fontFamily: 'sans-serif',
    fontSize: '0.75em'
  }}
  width={600}
>
  <Layer
    height="90%"
    position="top center"
    width="80%"
  >
    <Ticks
      axis="y"
      labelAttributes={{
        x: -5
      }}
      labelStyle={{
        dominantBaseline: 'middle',
        fill: 'lightgray',
        textAnchor: 'end'
      }}
      lineLength="100%"
      lineStyle={{
        stroke: 'lightgray'
      }}
      lineVisible
    />
    <Ticks
      axis="x"
      label={function noRefCheck(){}}
      labelAttributes={{
        y: 3
      }}
      labelStyle={{
        dominantBaseline: 'text-before-edge',
        fill: 'lightgray',
        textAnchor: 'middle'
      }}
    />
    <Bars
      groupPadding="3%"
      innerPadding="0.5%"
    />
  </Layer>
</Chart>
    </div>
  );
}

export default Diagram;
