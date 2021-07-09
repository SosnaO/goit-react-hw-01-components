import React from 'react';
import PropTypes from 'prop-types';
import defoltImage from '../defaultImg.jpg';
import  styles from './FriendList.module.css';



const FriendList=({ friends})=>{


  return (
<ul className={styles.friend_list}>
{friends.map(friend=>
<li  key={friend.id} class={styles.item}>

 <span className={`${styles.ofline} ${friend.isOnline && styles.online}`}></span>

  {/* <span className="status">{friend.isOnline}</span> */}
  <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
  <p className={styles.name}>{friend.name}</p>


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