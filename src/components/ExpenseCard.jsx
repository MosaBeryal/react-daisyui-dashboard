import React from "react";

const ExpenseCard = ({ color, category, amount, percentage }) => {
  return (
    <div
      className={`bg-${color} p-5 rounded-lg shadow-md flex justify-between items-center`}
    >
      <div className="flex items-center gap-3">
        <div
          className="radial-progress text-sm p-2"
          style={{
            "--value": percentage,
            "--size": "2rem",
            "--thickness": "3px",
          }}
          role="progressbar"
        >
          {percentage}%
        </div>
        <div>
          <p className="text-lg text-black">{category}</p>
          <p className="font-bold text-gray-400">${amount}</p>
        </div>
      </div>
      <div className="text-black">{percentage}%</div>
    </div>
  );
};

export default ExpenseCard;
