import React from "react";
// import ReactDom from 'react-dom'
import logo from "../img/airbnlogo.png";
import style from "../css/style.css";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo airbnb" />
    </nav>
  );
}
