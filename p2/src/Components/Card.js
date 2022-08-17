import React from "react";
import "../css/style.css";
import Image1 from "../img/img1.png";
import starImage from "../img/star1.png";

export default function Card() {
  return (
    <div className="card">
      <img
        src={Image1}
        alt="Life lessons with Katie Zaferes "
        className="card--image"
      />
      <div className="card--stats">
        <img src={starImage} alt="star" className="card--star" />
        <span>5.0</span>
        <span className="lightGrey">(6) • </span>
        <span className="lightGrey"> USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="boldBlack">From $136 </span>/ person
      </p>
    </div>
  );
}
