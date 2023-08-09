import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";
const TransactionList = () => {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full">History</h3>
      <ul>
        {transactions.map((transaction) => {
          return (
            <TransactionItem transaction={transaction} key={transaction.id} />
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
