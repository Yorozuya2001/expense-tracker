import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
  const data = useGlobalState();

  return <div>Balance</div>;
};

export default Balance;
