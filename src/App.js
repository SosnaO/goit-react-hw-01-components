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
    avatar={user[0].avatar}
    name={user[0].name}
    tag={user[0].tag}
    location={user[0].location}
    followers={user[0].stats.followers}
    views={user[0].stats.views}
    likes={user[0].stats.likes}
    />
    
   <Statistics title="Upload stats" stats={statisticalData} />
   <Statistics stats={statisticalData} />

   <FriendList friends={friends} />

   <TransactionHistory items={transactions} />;

   </div>
      );
};
export default App;
