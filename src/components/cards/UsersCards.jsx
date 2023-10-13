import React from "react";
import "../../Pages/dashboard/dash-style.css";
import users from "../../assests/users.png";

const UsersCards = () => {
  return (
    <div className="card">
      <div className="rev-logo">
        <img src={users} alt="users" />
      </div>
      <div className="rev-title">Total Users</div>
      <div className="rev-total">
        <div className="rev-amount">9,721</div>
        <div className="rev-per">+4.5%</div>
      </div>
    </div>
  );
};

export default UsersCards;
