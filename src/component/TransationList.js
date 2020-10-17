import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
export const TransationList = () => {
  const { transactions } = useContext(GlobalContext);
  
  console.log("My Trans::", transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((trans) => (
        <Transaction key={trans.id}trans={trans}/> 
        ))}
          
      </ul>
    </>
  );
};
