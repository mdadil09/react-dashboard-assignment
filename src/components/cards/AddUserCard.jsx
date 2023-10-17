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

const customStyles2 = {
  content: {
    width: "544px",
    height: "463px",
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
  const [secondaryModal, setSecondaryModal] = useState(false);

  const openModal2 = () => {
    setSecondaryModal(true);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const closeModal2 = (event) => {
    event.preventDefault();
    setSecondaryModal(false);
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
        <div className="modal-content">
          <div className="model-content-header">
            <div className="model-content-header-1">Basic</div>
            <div className="model-content-header-2">Contact</div>
            <div className="header-1-rect"></div>
            <div className="header-2-rect"></div>
          </div>
          <div className="modal-input-title">Enter Name*</div>
          <input type="text" placeholder="Eg. Jon Doe" />
          <div className="modal-input-title">Enter Email*</div>
          <input type="text" placeholder="Eg. jondoe@gmail.com" />
          <div className="modal-input-title">Enter Phone*</div>
          <input type="text" placeholder="9801916395" />
        </div>
        <div className="modal-button-container">
          <button className="button-hidden"></button>
          <button className="button-visible" onClick={openModal2}>
            Next
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={secondaryModal}
        onRequestClose={closeModal2}
        style={customStyles2}
        contentLabel="Example Modal"
        portalClassName="modal"
      >
        <div className="modal-header">
          <div className="modal-header-text">Add New Profile</div>
          <button onClick={closeModal2}>
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="modal-content">
          <div className="model-content-header">
            <div className="model-content-header-1">Basic</div>
            <div className="model-content-header-2">Contact</div>
            <div className="header-1-rect"></div>
            <div className="header-2-rect"></div>
          </div>
          <div className="modal-input-title">
            Instagram Link <span>(optional)</span>
          </div>
          <input type="text" placeholder="Eg. ..instagram.com/username" />
          <div className="modal-input-title">
            Youtube Link <span>(optional)</span>
          </div>
          <input type="text" placeholder="Eg. ..youtebe/username" />
        </div>
        <div className="modal-2-button-container">
          <button className="button-hidden"></button>
          <button className="button-visible">Next</button>
        </div>
      </Modal>
    </>
  );
};

export default AddUserCard;
