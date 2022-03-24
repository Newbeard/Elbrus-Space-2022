import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import 'hammerjs';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initStudentsFromServer } from '../../redux/actions/students.action';

const campusesName = ['Москва', 'Санкт-Петербург', 'Онлайн'];

const ChartContainer = () => {
  const { chart } = useRef(null)

  const dispatch = useDispatch();
  const { students } = useSelector(state => state);
  const result = [];
  for (let i = 0; i < campusesName.length; i++) {
    result.push(students.filter((st) => st.campus === campusesName[i]).length)
  }

  useEffect(() => {
    dispatch(initStudentsFromServer());
  }, [])


  return (
    <div>
      <Chart ref={chart}>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={['Москва', 'Санкт-Петербург', 'Онлайн']} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem data={result} />
        </ChartSeries>
      </Chart>
      
    </div>
  );
};

export default ChartContainer
