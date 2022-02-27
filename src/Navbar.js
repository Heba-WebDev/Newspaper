import React from "react";
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"



export default function Navbar() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule',
    'August', 'September', 'Octobr', 'November', 'December'];
    let date = new Date();
    let TodaysDate = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`
    return (
    <nav className="navbar">
  
  <div className="date">
      <p>{TodaysDate}</p>
  </div>

 <div className="social-icons">
 <FaFacebookSquare />
 <FaTwitter />
 <FaLinkedin />
 <FaInstagram />
 <FaYoutube />
 </div>

 <div className="mobil-menu">
     <GiHamburgerMenu />
 </div>
    </nav>
    )
}