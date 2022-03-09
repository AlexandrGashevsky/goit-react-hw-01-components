import PropTypes from "prop-types";
import transactionsData from '../../data/transactions.json';
import transactionsStyles from './TransactionHistory.module.css';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow'


  const TransactionHistory = () => {   
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
      {transactionsData.map((transaction, index) => (
          <TransactionHistoryRow key={index} type={transaction.type} amount={transaction.amount} currency={transaction.currency}/>
          ))}
      </tbody>
      </table>
    );
  };

  TransactionHistoryRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };

  export default TransactionHistory;

  