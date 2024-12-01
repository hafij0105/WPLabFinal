import React,{useState} from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import './NavBar.css'

export const NavBar = () => {
  const[openLinks, setOpenLinks]= useState(false);
  const toggleNevBar = () => {
       setOpenLinks(!openLinks);
  }
  return (
    <div className='NavBar'>
        <div className='logo' id={openLinks ? "open" : "close"}>
        <img src={Logo}/>
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        </div>
        <div className='Nav-menu'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          
          <button onClick={toggleNevBar}>
            <ReorderIcon/> 
          </button>
        </div>

    </div>
  )
}
