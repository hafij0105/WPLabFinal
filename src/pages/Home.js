import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/bg.webp";
import "./Home.css";

const Home = () => {
  return (
    <div className='home' style={ {backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Pitha House</h1>
        <p>Key To Your Heart</p>
        <Link to="/menu">
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home