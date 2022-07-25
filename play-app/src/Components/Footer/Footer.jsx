import React from "react";
import "./Footer.css";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-div">
        <div className="footer-categ mt-s flex ">
          <div className=" p-s">
            <ul className="fotter-content">
              <li className="f-m font-xl ">Browse</li>
              <li>Games</li>
              <li>Console</li>
              <li>Accessories</li>
              <li>Vr</li>
            </ul>
          </div>
          <div className=" p-s">
            <ul className="fotter-content">
              <li className="f-m font-xl ">Resources</li>
              <li>Support</li>
              <li>Feedback</li>
              <li>Contact</li>
              <li>Standard</li>
            </ul>
          </div>
          <div className=" p-s">
            <ul className="fotter-content">
              <li className="f-m font-xl ">Playx-store</li>
              <Link to="/products" style={{ color: "var(--offwhite)" }}>
                <li>Products</li>
              </Link>
              <Link to="/cart" style={{ color: "var(--offwhite)" }}>
                <li>Cart</li>
              </Link>
              <Link to="/wishlist" style={{ color: "var(--offwhite)" }}>
                {" "}
                <li>WishLisht</li>
              </Link>
              <Link to="/login" style={{ color: "var(--offwhite)" }}>
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex flex-row p-s flex-center">
            <li className="mr-l">
              <a
                href="https://twitter.com/ANIKETS42266714"
                target="blank"
                className="f-l"
                style={{ color: "var(--offwhite)" }}
              >
                <FaTwitter />
              </a>
            </li>
            <li className="">
              <a
                href="https://github.com/aniketsingh13"
                target="_blank"
                className="f-l"
                style={{ color: "var(--offwhite)" }}
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Footer };
