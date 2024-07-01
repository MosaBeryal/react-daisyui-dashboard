import React from "react";

const ExpenseCard = ({ bgColor, category, amount, percentage, textColor }) => {
  return (
    <div
      className={`p-5 rounded-lg bg-${bgColor} shadow-md flex justify-between items-center`}
    >
      <div className={`flex items-center text-${textColor} gap-3`}>
        <div
          className="radial-progress text-sm p-2"
          style={{
            "--value": percentage,
            "--size": "2rem",
            "--thickness": "3px",
            color: textColor
          }}
          role="progressbar"
        >
          {percentage}%
        </div>
        <div>
          <p className="text-lg text-black">{category}</p>
          <p className="font-bold text-gray-400">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
