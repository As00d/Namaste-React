import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router";
const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Hello");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li>Cart</li>
          <li>
            <button onClick={() => setIsLoggedIn(!isloggedIn)}>
              {isloggedIn ? `LogIn` : `Logout`}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
