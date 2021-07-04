import React from 'react';
import PropTypes from 'prop-types';
//import defoltImage from './defaultImg.jpg'

const Statistics=({ label, percentage})=>(
    <section class="statistics">
    <h2 class="title">Upload stats</h2>
  
    <ul class="stat-list">
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      {/* <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li> */}
    </ul>
  </section>
    );

Statistics.defaultProps = {
        title:"",
 }
Statistics.prototype = {
    title: PropTypes.string,
   
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
  
}

export default Statistics;