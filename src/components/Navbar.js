import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar () {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/artists">Artists</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/aftercare">Aftercare</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Link to="/booking" className="book-now-button">Book Appointment</Link>
        </nav>
    );
}

export default Navbar;