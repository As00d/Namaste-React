import { useState, useEffect, useContext } from "react";
import { FaCircle } from "react-icons/fa";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router";
import useInternet from "../utils/hook/useInternet";
import userContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/store/appStore";
const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const dataFromContext = useContext(userContext);
  const cartItems = useSelector((appStore) => appStore.cart.items);
  const status = useInternet();
  return (
    <div className="flex justify-between items-center mb-2 bg-pink-100 px-16">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="w-20" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 items-center">
          <li className="m-2">
            <FaCircle
              style={
                status
                  ? { color: "green", height: "10px" }
                  : { color: "red", height: "10px" }
              }
            />
          </li>
          <li className="m-2 text-xl">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="m-2 text-xl">
            <NavLink to="/about">About us</NavLink>
          </li>
          <li className="m-2 text-xl">
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li className="m-2 text-xl">
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li className="m-2 text-xl font-bold">
            <NavLink to="/cart"> {`Cart (${cartItems.length} items)`}</NavLink>
          </li>
          <li className="m-2 text-xl">
            <button onClick={() => setIsLoggedIn(!isloggedIn)}>
              {isloggedIn ? `LogIn` : `Logout`}
            </button>
          </li>
          <li className="m-2 text-xl font-bold">
            {dataFromContext.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
