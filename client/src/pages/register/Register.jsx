import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();

  const password = useRef();
  const confirmPassword = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(
      firstName.current.value,
      lastName.current.value,
      email.current.value,

      password.current.value,
      confirmPassword.current.value
    );
    if (confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords do not match");
    } else {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:3001/api/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form">
          <input placeholder="first name" ref={firstName} />
          <input placeholder="last name" ref={lastName} />
          <input placeholder="username" ref={username} />
          <input placeholder="email" ref={email} />
          <input placeholder="password" ref={password} />
          <input placeholder="confirm password" ref={confirmPassword} />

          <button className="registerButton" onClick={handleClick}>
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
