import React, { useState } from "react";
import plusadd from "../../assests/plusadd.png";
import Modal from "react-modal";
import "../../Pages/dashboard/dash-style.css";
import close from "../../assests/close.svg";

const customStyles = {
  content: {
    width: "544px",
    height: "553px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    background: "var(--light-gohan, #FFF)",
    boxShadow:
      "0px 0px 1px 0px rgba(0, 0, 0, 0.20), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 32px 32px -8px rgba(0, 0, 0, 0.08)",
  },
};

const AddUserCard = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  let subtitle;
  // const afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // };

  return (
    <>
      <div className="add-user-card">
        <button onClick={openModal}>
          <img src={plusadd} alt="plusadd" />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        portalClassName="modal"
      >
        <div className="modal-header">
          <div className="modal-header-text">Add New Profile</div>
          <button onClick={closeModal}>
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="modal-content"></div>
      </Modal>
    </>
  );
};

export default AddUserCard;
