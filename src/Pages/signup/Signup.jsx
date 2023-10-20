import React, { useState } from "react";
import "./style.css";
import github from "../../assests/github.png";
import twitter from "../../assests/twitter.png";
import linkdin from "../../assests/linkedin.png";
import discord from "../../assests/discord.png";
import google from "../../assests/google.png";
import apple from "../../assests/apple.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className="signup-container">
      <div className="color-container">
        <h3>LOGO</h3>
        <div className="title">
          <h1>Board.</h1>
        </div>
        <div className="social">
          <img src={github} alt="github" />
          <img src={twitter} alt="twitter" />
          <img src={linkdin} alt="linkdin" />
          <img src={discord} alt="discord" />
        </div>
      </div>
      <div className="form-container">
        <div className="form-center">
          <div className="form-header">
            <h3>Sign Up</h3>
            <p>Sign up for new account</p>
          </div>
          <div className="buttons">
            <button>
              <img src={google} alt="google" /> Sign up with Google
            </button>
            <button>
              {" "}
              <img src={apple} alt="apple" /> Sign up with Apple
            </button>
          </div>
          <div className="signup-form">
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/forgot">Forgot Password</Link>
              <button onClick={onSubmit}>Sign Up</button>
            </form>
          </div>
          <p className="reg">
            Have an account? <Link to="/">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
