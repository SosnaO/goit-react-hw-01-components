import React from 'react';
import PropTypes from 'prop-types';
import  styles from './Statistics.module.css'
//import defoltImage from './defaultImg.jpg'

const Statistics=({ title, stats})=>{
  return (

  <section className={styles.statistics}>
 

  {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.stat_list}>
    {stats.map(stat=>(
    <li key={stat.id} className={styles.item}>
      <span className={styles.label}>{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
    ))}
      
  </ul>
</section>
);
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};
export default Statistics;