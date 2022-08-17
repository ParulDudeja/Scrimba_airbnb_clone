import React from "react";
// import ReactDom from 'react-dom'
import logo from "../img/airbnlogo.png";
import "../css/style.css";

export default function Navbar() {
  return (
    <nav className="nav--logo">
      <img src={logo} alt="logo airbnb" />
    </nav>
  );
}
