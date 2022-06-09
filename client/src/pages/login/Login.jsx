import "./login.css";
import { login } from "../../redux/apiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Login</h1>
        <form className="form">
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="loginButton"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
