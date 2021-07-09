import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory=({ items})=>{
    return (
<table className={styles.transaction_history}>
  <thead className={styles.header}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

   

  <tbody className={styles.tbody}>
     {items.map(item=>(
    <tr className={styles.tr} key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
))}
  </tbody>


    

</table>
    );
};




TransactionHistory.propTypes = {
  
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  };



export default TransactionHistory;