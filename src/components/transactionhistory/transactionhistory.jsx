import PropTypes from "prop-types";
import transactionsData from './transactions.json';
import transactionsStyles from './transactionhistory.module.css';

const Tr = ({type, amount, currency}) => {   
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
      </tr>
    );
  };

  Tr.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.number.isRequired,
  };

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
          <Tr key={index} type={transaction.type} amount={transaction.amount} currency={transaction.currency}/>
          ))}
      </tbody>
      </table>
    );
  };

  TransactionHistory.propTypes = {
    transactionsData: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
  };

  export default TransactionHistory;

  