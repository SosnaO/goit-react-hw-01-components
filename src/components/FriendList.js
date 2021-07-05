import React from 'react';
import PropTypes from 'prop-types';
import defoltImage from './defaultImg.jpg'

const FriendList=({ friends})=>{
  return (
<ul class="friend-list">
{friends.map(friend=>
<li  key={friend.id} class="item">
  <span class="status">{friend.isOnline}</span>
  <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
  <p class="name">{friend.name}</p>
</li>
)}
</ul>
 )};
 FriendList.defaultProps = {
    avatar: defoltImage,
  };
  
  FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  };
export default FriendList;