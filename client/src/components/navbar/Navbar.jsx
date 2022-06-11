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
            <div className="adminOptions">Brwose upcoming bookings</div>
          </div>
          <div className="navRight">
            <button className="loginButton">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
