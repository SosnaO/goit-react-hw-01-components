

import React from 'react';
import PropTypes from 'prop-types';





const FriendList=({ friends})=>{
  return (


<ul class="friend-list">


{friends.map(friend=>
<li  key={friend.id} class="item">
  <span class="status">{friend.isOnline}</span>
  <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
  <p class="name">{friend.name}</p>
</li>

)};

 

</ul>
 )}
FriendList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number,
      }),
    ).isRequired,
  };
export default FriendList;