import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/artists" element={<div>Artists</div>} />
        <Route path="/gallery" element={<div>Gallery</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/aftercare" element={<div>Aftercare</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  );
}

export default App;
