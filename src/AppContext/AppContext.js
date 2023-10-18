import React, { createContext, useState } from "react";
import { addUser, arr } from "../BLL/bll";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userData, setUserData] = useState([]);
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleInstaChange = (e) => {
    setInsta(e.target.value);
  };

  const handleYoutubeChange = (e) => {
    setYoutube(e.target.value);
  };

  const addUserClick = (e) => {
    addUser(name, email, mobile, insta, youtube);
    setUserData([...arr]);
  };

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
