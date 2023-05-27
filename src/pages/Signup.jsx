import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSignupDetails } from "../redux/Login/Actions";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    let obj = {
      username: username,
      email: email,
      password: password,
    };

    dispatch(getSignupDetails(obj));
    navigate("/login");
  };

  return (
    <div className="form-login">
      <h2>Signup Form</h2>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
