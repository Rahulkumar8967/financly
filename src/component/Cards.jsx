// eslint-disable-next-line no-unused-vars
import React from "react";

function Cards({
  currentBalance,
  income,
  expenses,
  showExpenseModal,
  showIncomeModal,
  cardStyle,
  reset,
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-between">
      <div
        className={`border p-4 rounded-lg ${cardStyle}`}
      >
        <h2 className="text-xl font-semibold">Current Balance</h2>
        <p className="text-2xl font-bold">₹{currentBalance}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={reset}
        >
          Reset Balance
        </button>
      </div>

      <div
        className={`border p-4 rounded-lg ${cardStyle}`}
      >
        <h2 className="text-xl font-semibold">Total Income</h2>
        <p className="text-2xl font-bold">₹{income}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={showIncomeModal}
        >
          Add Income
        </button>
      </div>

      <div
        className={`border p-4 rounded-lg ${cardStyle}`}
      >
        <h2 className="text-xl font-semibold">Total Expenses</h2>
        <p className="text-2xl font-bold">₹{expenses}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={showExpenseModal}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default Cards;
