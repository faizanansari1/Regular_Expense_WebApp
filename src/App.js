import React from "react";
import "./App.css";
import { AddTransation } from "./component/AddTransation";
import { Balance } from "./component/Balance";
import { Header } from "./component/Header";
import { IncomExpense } from "./component/IncomExpense";
import { TransationList } from "./component/TransationList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomExpense />
        <TransationList />
        <AddTransation />
      </div>
    </GlobalProvider>
  );
}

export default App;
