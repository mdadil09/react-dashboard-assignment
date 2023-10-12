import React from "react";
import "./style.css";
import github from "../../assests/github.png";
import twitter from "../../assests/twitter.png";
import linkdin from "../../assests/linkedin.png";
import discord from "../../assests/discord.png";
import google from "../../assests/google.png";
import apple from "../../assests/apple.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
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
            <h3>Sign In</h3>
            <p>Sign in to your account</p>
          </div>
          <div className="buttons">
            <button>
              <img src={google} alt="google" /> Sign in with Google
            </button>
            <button>
              {" "}
              <img src={apple} alt="apple" /> Sign in with Apple
            </button>
          </div>
          <div className="login-form">
            <form>
              <label>Email address</label>
              <input type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <Link to="/forgot">Forgot Password</Link>
              <button>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
