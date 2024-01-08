import React, { useState } from "react";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>NavBar</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            {<Link to="/Shop">Shop</Link>}
            {menu === "shop" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            {<Link to="/mens">Mens</Link>}
            {menu === "mens" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            {<Link to="/womens">Women</Link>}

            {menu === "womens" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            {<Link to="/kids">Kid</Link>}
            {menu === "kids" && <hr />}
          </li>
        </ul>
        <div className="nav-login-cart">
          {
            <Link to="/LoginPage">
              <button>Login</button>
            </Link>
          }
          {
            <Link to="Cart">
              <img src={cart_icon} alt="" />
            </Link>
          }
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
