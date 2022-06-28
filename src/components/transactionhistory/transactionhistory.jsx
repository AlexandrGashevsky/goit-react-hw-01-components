import PropTypes from "prop-types";

import transactionsStyles from './transactionhistory.module.css';
import TransactionHistoryRow from '../throw/throw'


  const TransactionHistory = ({transactions}) => {   
    return (
      <table className={transactionsStyles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map((transaction) => (
          <TransactionHistoryRow key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency}/>
          ))}
      </tbody>
      </table>
    );
  };



  TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  })),
  }

  export default TransactionHistory;

  