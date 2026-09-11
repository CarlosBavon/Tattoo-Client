import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "../styles/Social.css";

function Social() {
    return (
        <>
            <div className="social">

                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} className="social-icon" />
                    <p>Utawala, Shooters</p>
                </div>

                <div className="time">
                    <FontAwesomeIcon icon={faClock} className="social-icon" />
                    <p>Mon - Sat: 10 AM - 8 PM</p>
                </div>

                <div className="socials">
                    <a href="https://wa.me/254105805041" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>

                    <a href="https://www.instagram.com/saxon_tattoo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a href="https://www.tiktok.com/@saxon_tattoo?refer=creator_embed" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                </div>
            </div>
            <hr className="social-divider"></hr>
        </>
    );
}

export default Social;