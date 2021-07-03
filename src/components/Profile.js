//import user from "./user.json";
import React from 'react';
const Profile=(user)=>{
    return
<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
}


export default Profile;