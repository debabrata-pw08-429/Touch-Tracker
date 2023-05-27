import React from "react";
import "../App.css";
import Logo_URL from "../media/Images/TypingTrackerLogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div onClick={() => navigate("/")}>
        <img src={Logo_URL} alt="logo" />
        <h2>Typing Tracker</h2>
      </div>
      <div>
        <a href="/">Home</a>
        <a href="/settings">Settings</a>
      </div>
      <div>
        <h4>
          <a href="/login">login</a>
        </h4>
        <p>or</p>
        <h4 className="button-background">
          <a href="/signup">Signup</a>
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
