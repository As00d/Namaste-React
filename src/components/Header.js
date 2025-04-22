import { useState, useContext } from "react";
import { FaCircle } from "react-icons/fa";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useInternet from "../utils/hook/useInternet";
import userContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

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
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 text-xl">
            <Link to="/about">About us</Link>
          </li>
          <li className="m-2 text-xl">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="m-2 text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-2 text-xl font-bold">
            <Link to="/cart"> {`Cart (${cartItems.length} items)`}</Link>
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
