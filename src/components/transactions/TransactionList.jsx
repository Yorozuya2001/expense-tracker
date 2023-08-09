import { useGlobalState } from "../../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useGlobalState();

  return (
    <div>
      {transactions.map((transaction) => {
        return (
          <div key={transaction.id}>
            <p>{transaction.description}</p>
            <span>{transaction.amount}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
