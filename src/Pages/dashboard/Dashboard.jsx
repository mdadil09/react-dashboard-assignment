import React from "react";
import "./dash-style.css";
import setting from "../../assests/setting.png";
import user from "../../assests/user.png";
import dashboard from "../../assests/dashboard.png";
import event from "../../assests/event.png";
import transaction from "../../assests/transaction.png";
import search from "../../assests/search.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="board">Board.</div>
        <div className="dash">Dashboard</div>
        <div className="dashboard-icon">
          <img src={dashboard} alt="dashboard" />
        </div>
        <div className="transactions">Transactions</div>
        <div className="transaction-icon">
          <img src={transaction} alt="transaction" />
        </div>
        <div className="schedules">Schedules</div>
        <div className="schedules-icon">
          <img src={event} alt="event" />
        </div>
        <div className="users">Users</div>
        <div className="user-icon">
          <img src={user} alt="user" />
        </div>
        <div className="settings">Settings</div>
        <div className="setting-icon">
          <img src={setting} alt="setting" />
        </div>
        <div className="help">Help</div>
        <div className="contact-us">Contact Us</div>
      </div>
      <div className="main-page">
        <div className="header">
          <div className="dashboard-title">Dashboard</div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
