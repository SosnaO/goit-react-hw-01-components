import React from "react";
import PropTypes from "prop-types";
import styles from '../FriendList/FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline}) => (
  <>
    <span className={`${styles.ofline} ${isOnline && styles.online}`}></span> 
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;