import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="#about" className="logo">Portfolio Website</a>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className={`menu-button ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <a href="/" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

/* ✅ Updated CSS */
const styles = `
  /* General Navbar Styles */
  .navbar {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    color: black;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    max-width: 1200px;
    margin: auto;
  }

  /* Logo */
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #4db5ff;
    text-decoration: none;
  }

  /* Desktop Navigation Links */
  .nav-links {
    display: flex;
    gap: 25px;
    list-style: none;
  }

  .nav-links li {
    list-style: none;
  }

  .nav-links a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  .nav-links a:hover {
    background: #4db5ff;
    color: white;
  }

  /* Menu Button */
  .menu-button {
    background: none;
    border: none;
    color: black;
    cursor: pointer;
    display: none;
    transition: transform 0.3s ease-in-out;
  }

  .menu-button.open {
    transform: rotate(90deg);
  }

  /* Mobile Navigation */
  .mobile-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;
  }

  .mobile-menu.active {
    display: flex;
    transform: translateY(0);
  }

  .mobile-menu a {
    padding: 12px;
    color: black;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }

  .mobile-menu a:hover {
    background: #4db5ff;
    color: white;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .menu-button {
      display: block;
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
