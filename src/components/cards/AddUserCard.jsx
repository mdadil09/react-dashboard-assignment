import React, { useContext, useState } from "react";
import plusadd from "../../assests/plusadd.png";
import Modal from "react-modal";
import "../../Pages/dashboard/dash-style.css";
import close from "../../assests/close.svg";
import { AppContext } from "../../AppContext/AppContext";
import instag from "../../assests/insta.svg";
import whatsapp from "../../assests/whatsapp.svg";
import mail from "../../assests/Mail.svg";
import logoyou from "../../assests/logo-twitter.svg";

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

  const {
    name,
    email,
    mobile,
    insta,
    youtube,
    userData,
    handleNameChange,
    handleEmailChange,
    handleMobileChange,
    handleInstaChange,
    handleYoutubeChange,
    addUserClick,
  } = useContext(AppContext);

  console.log(userData);

  const openModal2 = () => {
    setIsOpen(false);
    setSecondaryModal(true);
    // addUserClick();
  };
  const openModal = () => {
    setSecondaryModal(false);
    setIsOpen(true);
  };
  const closeModal = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const closeModal2 = (event) => {
    event.preventDefault();
    setSecondaryModal(false);
    addUserClick();
  };

  return (
    <>
      <div className="add-user-card">
        {userData.length <= 0 ? (
          <button onClick={openModal}>
            <img src={plusadd} alt="plusadd" />
          </button>
        ) : null}
        {userData.map(({ id, name, email, mobileNo, insta, youtube }) => (
          <div key={id}>
            <div className="add-user-card-name">{name}</div>
            <div className="add-user-card-mobile">
              <div className="whatsapp">
                <img src={whatsapp} alt="whatsapp" />
                <div className="mobile"> {mobileNo}</div>
              </div>
              <div className="instag">
                <img src={instag} alt="" />
                <div className="insta">{insta}</div>
              </div>
            </div>
            <div className="add-user-card-mail">
              <div className="email">
                <img src={mail} alt="mail" />
                <div className="mail">{email}</div>
              </div>
              <div className="youtube">
                <img src={logoyou} alt="youtube" />
                <div className="you-text">{youtube}</div>
              </div>
            </div>
          </div>
        ))}
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
          <input
            type="text"
            placeholder="Eg. Jon Doe"
            onChange={handleNameChange}
            value={name}
          />
          <div className="modal-input-title">Enter Email*</div>
          <input
            type="text"
            placeholder="Eg. jondoe@gmail.com"
            onChange={handleEmailChange}
            value={email}
          />
          <div className="modal-input-title">Enter Phone*</div>
          <input
            type="text"
            placeholder="9801916395"
            onChange={handleMobileChange}
            value={mobile}
          />
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
        <div className="modal-2-content">
          <div className="model-2-content-header">
            <div className="model-2-content-header-1">Basic</div>
            <div className="model-2-content-header-2">Social</div>
            <div className="header-2-1-rect"></div>
            <div className="header-2-2-rect"></div>
          </div>
          <div className="modal-2-input-title">
            Instagram Link <span>(optional)</span>
          </div>
          <input
            type="text"
            placeholder="Eg. ..instagram.com/username"
            onChange={handleInstaChange}
            value={insta}
          />
          <div className="modal-2-input-title">
            Youtube Link <span>(optional)</span>
          </div>
          <input
            type="text"
            placeholder="Eg. ..youtebe/username"
            onChange={handleYoutubeChange}
            value={youtube}
          />
        </div>
        <div className="modal-2-button-container">
          <button className="button-white" onClick={openModal}>
            Back
          </button>
          <button className="button-visible" onClick={closeModal2}>
            Done
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddUserCard;
