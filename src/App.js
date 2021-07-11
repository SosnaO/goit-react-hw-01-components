/*eslint no-global-assign: "error"*/

// eslint-disable-next-line no-unused-vars
import React, { Profiler } from 'react';
import './App.css';
import user from './user.json'
import Profile from './components/Profile/Profile.module'
import statisticalData from './statistical-data.json'
import Statistics from './components/Statistics/Statistics'
import friends from './friends.json'
import FriendList from './components/FriendList/FriendList'
import transactions from './transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import "./components/styles.css"
const App=()=>{
  return(
   <div>
   
   <Profile
    avatar={user.avatar}
    name={user.name}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
   <Statistics stats={statisticalData} />
   <FriendList friends={friends} />
   <TransactionHistory items={transactions} />;
   </div>
      );
};
export default App;
