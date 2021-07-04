import React from 'react'
import Profile from './Profile'

const ProfileList=({ user })=>(
<ul>
{/* {users.map((user)=>( 
    <div key={user}></div> */}

    <Profile
    avatar={user[0].avatar}
    name={user[0].name}
    tag={user[0].tag}
    location={user[0].location}
    followers={user[0].stats.followers}
    views={user[0].stats.views}
    likes={user[0].stats.likes}
    />


</ul>
);


export default ProfileList;