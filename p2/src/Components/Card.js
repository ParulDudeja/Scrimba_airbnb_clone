import React from "react";
import "../css/style.css";

import starImage from "../imga/star1.png";
// import dataCard from "../dataCard";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  //console.log(props.openSpots);
  return (
    <div className="card">
      {/* condional statement in jxs using props  if first is true only it work otherwise it will not*/}
      {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../img/${props.item.coverImg}`}
        className="card--image"
        alt="card"
      />
      <div className="card--stats">
        <img src={starImage} className="card--star" alt="star" />
        <span>{props.item.stats.rating}</span>
        <span className="lightGrey">({props.item.stats.reviewCount}) • </span>
        <span className="lightGrey">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="boldBlack">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
