import React from "react";
import "../../Pages/dashboard/dash-style.css";
import like from "../../assests/like.png";

const LikesCards = () => {
  return (
    <div className="card">
      <div className="rev-logo">
        <img src={like} alt="like" />
      </div>
      <div className="rev-title">Total Likes</div>
      <div className="rev-total">
        <div className="rev-amount">9,721</div>
        <div className="rev-per">+1.4%</div>
      </div>
    </div>
  );
};

export default LikesCards;
