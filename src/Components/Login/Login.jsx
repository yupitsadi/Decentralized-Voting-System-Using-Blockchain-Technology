import "./Login.css";
import React from "react";

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-left-container"></div>
      <div className="login-right-container">
        <p className="login-tagline">
          Decentralized voting:
          <br />
          <span className="login-tagline-span">
            where transparency meets trust!!!
          </span>
        </p>
        <div style={{ marginTop: "5rem" }}>
          <p className="welcome-message">Welcome to E-Vote</p>
          <button className="login-button" onClick={props.connectWallet}>
            Login Metamask
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
