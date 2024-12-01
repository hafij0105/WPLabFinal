import React from "react";
import BGimg from "../assets/bg.webp";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BGimg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         Delivering the most authentic , homemade traditional Bangladeshi Pitha at your door-step. Made from organic ingredients and with love.
        </p>
      </div>
    </div>
  );
}

export default About;