import React from "react";
import "../../Pages/dashboard/dash-style.css";
import trans from "../../assests/trans.png";

const TransactionCards = () => {
  return (
    <div className="card">
      <div className="rev-logo">
        <img src={trans} alt="trans" />
      </div>
      <div className="rev-title">Total Transactions</div>
      <div className="rev-total">
        <div className="rev-amount">1,520</div>
        <div className="rev-per">+1.7%</div>
      </div>
    </div>
  );
};

export default TransactionCards;
