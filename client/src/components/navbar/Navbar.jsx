import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navItems">
        <div className="logo">Utsar</div>
        <h1 className="herotext">Inspiration is wonderful</h1>
        <div className="login">
          <button className="loginButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
