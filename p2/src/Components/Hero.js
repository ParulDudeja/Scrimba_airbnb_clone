import React from "react";
import gridImage from "../img/Grid_image_set.png";
import styleSheet from "../css/style.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src={gridImage} alt="hero group" className="hero--image" />

      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}