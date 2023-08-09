import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useGlobalState();

  const onSubmit = (event) => {
    event.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount,
    });
    console.log(description, amount);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(event) => setAmount(event.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
