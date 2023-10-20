import React from "react";
import "./style.css";
import github from "../../assests/github.png";
import twitter from "../../assests/twitter.png";
import linkdin from "../../assests/linkedin.png";
import discord from "../../assests/discord.png";
import google from "../../assests/google.png";
import apple from "../../assests/apple.png";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const clientId =
  "529124112473-bqps4a76urr2jn859kp5a0ut2806gip6.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
    navigate("/dashboard");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleLogin
                render={(renderProps) => (
                  <button
                    type="button"
                    className="googleLogin"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img src={google} alt="google" /> Sign in with Google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </GoogleOAuthProvider>
            {/* <button>
              <img src={google} alt="google" /> Sign in with Google
            </button> */}
            <button>
              {" "}
              <img src={apple} alt="apple" /> Sign in with Apple
            </button>
          </div>
          <div className="login-form">
            <form>
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/forgot">Forgot Password</Link>
              <button onClick={onLogin}>Sign In</button>
            </form>
          </div>
          <p className="reg">
            Don't have an account? <Link to="/signup">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
