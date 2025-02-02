// eslint-disable-next-line no-unused-vars
import React from "react";
import transactions from "../assets/transactions.svg"
function NoTransactions() {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-10 ">
      <img src={transactions} alt="No transactions" className="w-[600px] my-16" />
      <p className="text-center text-lg font-medium">
        You Have No Transactions Currently
      </p>
    </div>
  );
}

export default NoTransactions;
