import React from "react";
import "../App.css";
import Logo_URL from "../media/Images/TypingTrackerLogo.png";
import { useNavigate } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  let username = useSelector((state) => state.authReducer.username);
  let isAuth = useSelector((state) => state.authReducer.isAuth);

  const handleClick = () => {
    if (isAuth) {
      navigate("/settings");
    } else {
      alert("Please Login!");
    }
  };

  return (
    <div className="nav">
      <div onClick={() => navigate("/")}>
        <img src={Logo_URL} alt="logo" />
        <h2>Typing Tracker</h2>
      </div>

      <div>
        <a href="/">Home</a>
        <a href="/settings" onClick={handleClick}>
          Settings
        </a>
        {isAuth ? <p className="button-background">Hi, {username}</p> : ""}
      </div>

      {isAuth ? (
        <h4>
          <a href="/">logout</a>
        </h4>
      ) : (
        <div>
          <h4>
            <a href="/login">login</a>
          </h4>
          <p>or</p>
          <h4 className="button-background">
            <a href="/signup">Signup</a>
          </h4>
        </div>
      )}

      <FaHamburger className="nav-icon" onClick={() => navigate("/results")} />
    </div>
  );
};

export default Navbar;
