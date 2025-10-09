import { Link } from "react-router-dom";
// import "./Footer.css"; // optional if you want a separate CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section brand">
          <h2> RecipeFinder</h2>
          <p>
            Discover and cook delicious recipes from around the world. 
            Eat smart, live better, and enjoy every meal.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">▶️</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RecipeFinder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
