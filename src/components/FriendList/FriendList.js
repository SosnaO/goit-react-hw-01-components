import React from 'react';
import PropTypes from 'prop-types';
import defoltImage from '../defaultImg.jpg';
//import  styles from './FriendList.module.css';

const FriendList=({ friends})=>{
  return (
<ul className="friend-list">
{friends.map(friend=>
<li  key={friend.id} class="item">
  <span className="status">{friend.isOnline}</span>
  <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
  <p className="name">{friend.name}</p>
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