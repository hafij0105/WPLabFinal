import React from 'react'
import BImage from "../assets/Momo.jpg";
import './Contact.css';
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={ {backgroundImage: `url(${BImage})` }}></div>
        <div className='rightSide'>
            <h1> Contact Us </h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'> Full Name</label>
                <input name='name'  type='text'/>
                <label htmlFor='email'> Email</label>
                <input email='email' type='text'/>
                <label htmlFor='message'> Message</label>
                <textarea rows={6} name='message' required></textarea>
                <button type='submit'> Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact