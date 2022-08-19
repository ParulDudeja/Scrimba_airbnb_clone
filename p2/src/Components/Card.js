import React from "react";
import "../css/style.css";

import starImage from "../img/star1.png";
// import dataCard from "../dataCard";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../img/${props.img}`} className="card--image" alt="card" />
      <div className="card--stats">
        <img src={starImage} className="card--star" alt="star" />
        <span>{props.rating}</span>
        <span className="lightGrey">({props.reviewCount}) • </span>
        <span className="lightGrey">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="boldBlack">From ${props.price}</span> / person
      </p>
    </div>
  );
}
