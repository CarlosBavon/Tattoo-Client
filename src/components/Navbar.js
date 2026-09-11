import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Social from "./Social";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="navbar-container">
            <Social />
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/artists" onClick={closeMenu}>Artists</Link></li>
                    <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                    <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                    <li><Link to="/aftercare" onClick={closeMenu}>Aftercare</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>

                <Link to="/booking" className="book-now-button" onClick={closeMenu}>
                    Book Appointment
                </Link>

                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </button>
            </nav>

            <div
                className={`nav-overlay ${menuOpen ? "open" : ""}`}
                onClick={closeMenu}
            ></div>
        </div>
    );
}

export default Navbar;