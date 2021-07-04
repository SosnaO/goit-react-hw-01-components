import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'
import user from './user.json'
import Statistics from './components/Statistics'
import statisticalData from './statistical-data.json'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


const App=()=>{
  return(
   <div>

{user.map((us)=>(
    <Profile
   avatar={us.avatar}
   name={us.name}
   tag={us.tag}
   location={us.location}
   followers={us.stats.followers}
   views={us.stats.views}
   likes={us.stats.likes}
   />
))}


   {statisticalData.map((statisticData)=>( 

   <Statistics 
     //  stats={statisticalData}
   //id={statisticData.id}
   //stats={statisticalData}
   label={statisticData.label}
   percentage={statisticData.percentage}
   //title="Upload stats" stats={statisticalData}
      
   />
   
   ))}
{/* 
<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />; */}
   </div>
   
   );


   
  //  {statisticalData.map((statistic)=>(
    // <li key= statisticalData.id}>
    //  <Statistic
    // label={statisticalData.label}
    // percentage={statisticalData.percentage}
    //    />
    //</li>
      //  ))}

//       <Statistics title="Upload stats" stats={statisticalData} />;
// <Statistics stats={statisticalData} />;
    
   // );
    

};

export default App;
