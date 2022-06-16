import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="navItems">
          <div className="navLeft">
            <h1 className="navLogo">.Utsar | Bookings</h1>
          </div>
          <div className="navCenter">
            <Link className="link" to="/bookings">
              <div className="loginButton">Bookings</div>
            </Link>
          </div>
          <div className="navRight">
            <Link className="link" to="/login">
              <button className="loginButton">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
