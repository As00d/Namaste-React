import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
