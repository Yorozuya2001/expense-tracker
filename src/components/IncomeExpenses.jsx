import { useGlobalState } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2) *
    -1;

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <h4>{income}</h4>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <h4>{expense}</h4>
      </div>
    </>
  );
};

export default IncomeExpenses;
