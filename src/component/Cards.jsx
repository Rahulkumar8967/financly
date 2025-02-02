// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

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
    <div className="flex flex-wrap gap-8 justify-center mt-8 px-4 sm:px-8">
      {/* Current Balance Card */}
      <div className={`min-w-[350px] max-w-[400px] p-6 ${cardStyle} shadow-2xl rounded-2xl`}>
        <h2 className="text-3xl font-semibold text-gray-700">Current Balance</h2>
        <p className="text-4xl font-bold text-gray-900 mt-4">₹{currentBalance}</p>
        <button
          className="mt-6 w-full bg-blue-600 text-white py-4 px-10 rounded-lg text-xl hover:bg-blue-700 transition duration-300 cursor-pointer"
          onClick={reset}
        >
          Reset Balance
        </button>
      </div>

      {/* Total Income Card */}
      <div className={`min-w-[350px] max-w-[400px] p-6 ${cardStyle} shadow-2xl rounded-2xl`}>
        <h2 className="text-3xl font-semibold text-gray-700">Total Income</h2>
        <p className="text-4xl font-bold text-gray-900 mt-4">₹{income}</p>
        <button
          className="mt-6 w-full bg-green-600 text-white py-4 px-10 rounded-lg text-xl hover:bg-green-700 transition duration-300 cursor-pointer"
          onClick={showIncomeModal}
        >
          Add Income
        </button>
      </div>

      {/* Total Expenses Card */}
      <div className={`min-w-[350px] max-w-[400px] p-6 ${cardStyle} shadow-2xl rounded-2xl`}>
        <h2 className="text-3xl font-semibold text-gray-700">Total Expenses</h2>
        <p className="text-4xl font-bold text-gray-900 mt-4">₹{expenses}</p>
        <button
          className="mt-6 w-full bg-red-600 text-white py-4 px-10 rounded-lg text-xl hover:bg-red-700 transition duration-300 cursor-pointer"
          onClick={showExpenseModal}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

Cards.propTypes = {
  currentBalance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  showExpenseModal: PropTypes.func.isRequired,
  showIncomeModal: PropTypes.func.isRequired,
  cardStyle: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Cards;
