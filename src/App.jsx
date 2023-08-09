import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1>Hello World</h1>
    </GlobalProvider>
  );
};

export default App;
