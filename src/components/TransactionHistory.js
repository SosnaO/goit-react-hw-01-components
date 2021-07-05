import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory=({ items})=>{
    return (
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    {items.map(item=>(

  <tbody>
    <tr  key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    {/* <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr> */}
  </tbody>


    ))}

</table>
    );
};




TransactionHistory.propTypes = {
  
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  };



export default TransactionHistory;