import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import 'hammerjs';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initStudentsFromServer } from '../../redux/actions/students.action';

const ChartContainer = () => {
  const { chart } = useRef(null)

  const dispatch = useDispatch();
  const { students } = useSelector(state => state);

  const campusNumbers = students.map((st) => st.campus).reduce((acc, camp) => {
    if (typeof camp === 'number') acc[+camp - 1] += 1;
    return acc;
  }, [0, 0, 0]);
  
  console.log(campusNumbers);
  console.log(students);
  useEffect(() => {
     dispatch(initStudentsFromServer());
  }, [])


  return <div>
    <div>По данным статистики можно определить процентное соотношение студентов, проходящих обучение в режиме онлайн и очно - в Москве и Санкт-Петербурге.</div>
    <Chart ref={chart}>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={['Москва', 'Онлайн', 'Санкт-Петербург']} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem data={campusNumbers} />
      </ChartSeries>
    </Chart>
  </div>;
};

export default ChartContainer
