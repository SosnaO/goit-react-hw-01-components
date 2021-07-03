import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'
import user from './user.json'

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
   
    <Profile
    //  name="Jacques Gluke"
    //  tag= "jgluke"
    //  location= "Ocho Rios, Jamaica"
    //  avatar= "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"
    //  //stats= {
    //    followers= "5603"
    //    views= "4827"
    //    likes= "1308"
   avatar={user[0].avatar}
   name={user[0].name}
   tag={user[0].tag}
   location={user[0].location}
   followers={user[0].stats.followers}
   views={user[0].stats.views}
   likes={user[0].stats.likes}




   />
  
   );
   };


export default App;
