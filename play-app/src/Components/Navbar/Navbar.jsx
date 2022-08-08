import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useCart } from "../../Context/CartCont";
import { useAuth } from "../../Context/AuthContext";
import { useToast } from "../../Hooks/useToast";

const Navbar = () => {
  const { cartState } = useCart();
  const { cart, wishList } = cartState;
  const { user, setUser } = useAuth();
  const {showToast} = useToast()

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUser(null);
    showToast("success","Logged out!")
  };

  return (
    <div>
      <nav className="nav-conatainer flex  flex-row p-xs">
        <div className="nav-brand font-xl f-l">
          <Link to="/" className="nav-brand-a">
            PlayX
          </Link>
        </div>
        {/* <form className="p-s">
          <input
            className="nav-input font-xl f-m"
            type="search"
            name="search"
            placeholder="Search.."
          />
        </form> */}
        <ul className="nav-right flex p-s mr-m">
          <li className="pl-m">
            {user ? (
              <button
                className="logout_btn f-m font-l mr-s"
                onClick={logoutHandler}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <FaUser className="large_iconBtn" />
              </Link>
            )}
          </li>
          <li className="nav-love-icon pl-l">
            <Link to="/wishList" className="nav-loveicon-a">
              <FaHeart className="large_icon" />
            </Link>
            <span className="nav-number f-s br-s">{wishList.length}</span>
          </li>
          <li className="pl-l">
            <div className="badge">
              <Link to="/cart" className="nav-bag-icon">
                {" "}
                <FaShoppingCart className="large_icon" />
              </Link>
              <span className="badge-greenNumber br-s">{cart.length}</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
