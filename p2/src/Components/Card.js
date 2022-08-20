import React from "react";
import "../css/style.css";

import starImage from "../imga/star1.png";
// import dataCard from "../dataCard";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  //console.log(props.openSpots);
  return (
    <div className="card">
      {/* condional statement in jxs using props  if first is true only it work otherwise it will not*/}
      {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
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
