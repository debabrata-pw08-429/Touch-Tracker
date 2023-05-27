import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../redux/Login/Actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let signinUsername = useSelector((state) => state.authReducer.username);
  let signinPassword = useSelector((state) => state.authReducer.password);

  const handleLogin = (event) => {
    event.preventDefault();

    let obj = {
      username: username,
      isAuth: true,
    };

    if (username !== signinUsername) {
      alert("Wrong Username! Try Again.");
    } else if (password !== signinPassword) {
      alert("Wrong Password! Try Again.");
    } else {
      dispatch(setAuth(obj));
      navigate("/settings");
    }
  };

  return (
    <div className="form-login">
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
