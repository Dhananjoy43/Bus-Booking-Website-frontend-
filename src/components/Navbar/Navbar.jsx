import React from "react";
import "./Navbar.css";
import "../../App.css";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="/hotels">Hotels</a>
          </li>
          <li>
            <a href="/bookings">Manage Bookings</a>
          </li>
          <li>
            <a href="/offers">Offers</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
        <button className="btn-primary align-center">
          <span>Login</span>
          <FiLogIn className="icon" />
        </button>
      </div>
    </nav>
  );
}
