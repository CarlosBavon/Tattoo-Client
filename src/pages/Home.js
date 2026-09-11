import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="hero">
            <div className="hero-content">
                <p className="hero-caption">ART IS IN OUR BLOOD</p>
                <h1 className="hero-title">TATTOOS</h1>
                <h3 className="hero-subtitle">THAT TELL YOUR STORY</h3>
                <p className="hero-description">Custom tattoos. Clean lines. Bold designs. <br /> Made by artists who care.</p>
                <div className="hero-buttons">
                    <Link to="/book" className="hero-button-book">BOOK YOUR SPOT</Link>
                    <Link to="/gallery" className="hero-button-gallery">VIEW GALLERY</Link>
                </div>
            </div>
            <div className="shop-description">
                <div className="premium-inks">
                    <div className="shop-desc-icon">
                        <i class="fa-regular fa-gem"></i>
                    </div>
                    <div className="shop-desc-text">
                        <h3>Premium Inks</h3>
                        <p>High-quality, safe inks for vibrant tattoos.</p>
                    </div>
                </div>
                <div className="expert-artists">
                    <div className="shop-desc-icon">
                        <i class="fa-solid fa-pen-clip"></i>
                    </div>
                    <div className="shop-desc-text">
                        <h3>Expert Artists</h3>
                        <p>Skilled artists with years of experience.</p>
                    </div>
                </div>
                <div className="clean-safe">
                    <div className="shop-desc-icon">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div className="shop-desc-text">
                        <h3>Clean & Safe</h3>
                        <p>Strict hygiene protocols for your safety.</p>
                    </div>
                </div>
                <div className="aftercare-support">
                    <div className="shop-desc-icon">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div className="shop-desc-text">
                        <h3>Aftercare Support</h3>
                        <p>Guidance to help your tattoo heal properly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;