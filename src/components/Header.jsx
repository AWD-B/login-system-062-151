import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// import "./Header.css"; // optional if you create a separate header css file

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <header className="header">
      <div className="logo">
         <Link to="/">RecipeFinder</Link>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
        <NavLink to="/register" onClick={() => setMenuOpen(false)}>Register</NavLink>
      </nav>

      <div className="header-controls">
        <button
          className="toggle-theme"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle Dark Mode"
        >
          {darkMode ? "LIGHT MOOD" : "DARK MOOD"}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          title="Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
