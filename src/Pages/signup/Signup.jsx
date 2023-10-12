import React from "react";
import "./style.css";
import github from "../../assests/github.png";
import twitter from "../../assests/twitter.png";
import linkdin from "../../assests/linkedin.png";
import discord from "../../assests/discord.png";
import google from "../../assests/google.png";
import apple from "../../assests/apple.png";
import { Link } from "react-router-dom";

const Signup = () => {
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
              <input type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <Link to="/forgot">Forgot Password</Link>
              <button>Sign Up</button>
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
