import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  // console.log("AMOUNT::",amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
// const total = amounts.reduce((acc, item) => (acc += item), 0); ye method sikhna hai youtube sy javascript ka es6 ka
