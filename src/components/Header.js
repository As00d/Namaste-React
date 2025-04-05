import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router";
import useInternet from "../utils/hook/useInternet";
const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const status = useInternet();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <FaCircle
              style={
                status
                  ? { color: "green", height: "10px" }
                  : { color: "red", height: "10px" }
              }
            />
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/grocery">Grocery</NavLink>
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
