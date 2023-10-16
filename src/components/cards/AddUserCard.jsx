import React from "react";
import plusadd from "../../assests/plusadd.png";

const AddUserCard = () => {
  return (
    <div className="add-user-card">
      <button>
        <img src={plusadd} alt="plusadd" />
      </button>
    </div>
  );
};

export default AddUserCard;
