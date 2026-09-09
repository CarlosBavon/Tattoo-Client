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

            </div>
        </div>
    );
}

export default Home;