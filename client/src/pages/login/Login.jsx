import "./login.css";
import { login } from "../../redux/apiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="loginContainer">
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
            className="log-inButton"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          <Link to="/register">
            <button className="log-inButton">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
