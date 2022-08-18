import React from "react";
import "../css/style.css";
// import Image1 from "../img/img1.png";
import starImage from "../img/star1.png";
import dataCard from "../dataCard";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.img}
        alt="Life lessons with Katie Zaferes "
        className="card--image"
      />
      <div className="card--stats">
        <img src={starImage} alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
