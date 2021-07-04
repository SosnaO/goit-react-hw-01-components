import React, { Profiler } from 'react';

import './App.css';

import user from './user.json'
import ProfileList from './components/ProfileList';

import statisticalData from './statistical-data.json'
import StatisticsList from './components/StatisticsList'

const App=()=>{
  return(
   <div>
   <ProfileList user={user} />
  <StatisticsList statisticalData ={statisticalData} /> 
   </div>
      );
};
export default App;
