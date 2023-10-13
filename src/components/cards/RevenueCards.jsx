import React from "react";
import "../../Pages/dashboard/dash-style.css";
import revenue from "../../assests/revenue.png";

const RevenueCards = () => {
  return (
    <div className="card">
      <div className="rev-logo">
        <img src={revenue} alt="revenue" />
      </div>
      <div className="rev-title">Total Revenue</div>
      <div className="rev-total">
        <div className="rev-amount">$21,129,430</div>
        <div className="rev-per">+2.5%</div>
      </div>
    </div>
  );
};

export default RevenueCards;
