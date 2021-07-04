import React from 'react';
import Statistics from './Statistics';
//simport statisticalData from './statistical-data.json';


const StatisticsList=({ statisticalData })=>(
<ul>
{statisticalData.map((statisticData)=>( 
    <div key={statisticData.id}>

  <Statistics 
    //  stats={statisticalData}
  //id={statisticData.id}
  //stats={statisticalData}
  label={statisticData.label}
  percentage={statisticData.percentage}
 
     
  />
  </div>
  ))}
</ul>
);
export default StatisticsList;