import React from "react";
import BGimg from "../assets/bg.webp";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${BGimg})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <div className="aboutTile">
          <p>
            At Pitha House, we bring the rich tradition of homemade Bangladeshi Pitha straight to your doorstep, with an unwavering commitment to authenticity and quality. Each Pitha is crafted with love, using only the finest organic ingredients to deliver a taste of heritage that’s as wholesome as it is delicious.
          </p>
          <p>
            Our mission is to provide you with an unforgettable culinary experience that celebrates the heart of Bangladeshi culture. From Bhapa to Chitoi, Nokshi to Patishapta, our diverse range of Pithas is made fresh with traditional recipes passed down through generations. We ensure every bite captures the essence of homemade goodness, made with care and attention to detail.
          </p>
          <p>
            What makes us even more convenient and customer-friendly? We offer cash on delivery for all orders. No need for advance payments or online transactions—simply order from the comfort of your home, and pay when your delicious treats arrive at your door. We believe in making your experience seamless and stress-free, providing you with the utmost trust and convenience.
          </p>
          <p>
            Whether you're craving a comforting dessert or planning to share the taste of Bangladesh with family and friends, Pitha House guarantees a delightful experience every time.
          </p>
          <div className="socialLinks">
            <button className="socialButton">Facebook</button>
            <button className="socialButton">Twitter</button>
            <button className="socialButton">YouTube</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
