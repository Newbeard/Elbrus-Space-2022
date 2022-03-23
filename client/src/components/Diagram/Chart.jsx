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
  // const campusNumbers = students.map((st)=>st.campusId).reduce((acc,campusId)=> {
  //   acc[`camp${campusId}`] += 1; 
  //   console.log(acc);
  //   return acc;
  // }, {camp1: 0, camp2: 0, camp3: 0})
  
   const campusNumbers = students.map((st)=>st.campusId).reduce((acc, camp)=>{
     if(typeof camp === 'number') acc[+camp - 1] += 1;
     return acc;
   },[0, 0, 0]);
  console.log(campusNumbers);
  console.log(students)
  useEffect(() => {
    dispatch(initStudentsFromServer());
  }, [])


  return <div>
        <div>По данным статистики можно определить количественное соотношение студентов Эльбруса (из онлайн-обучения и очного — в Москве и Санкт-Петербурге)</div>
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
