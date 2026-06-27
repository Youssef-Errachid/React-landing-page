import { useState } from "react"
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"
import "../../styles/Header.css"
import "../../styles/global.css"
import { Link} from 'react-scroll';

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">i Shop</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="HeroSection" smooth={true} duration={500} href="#" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="FeaturesSection" smooth={true} duration={500} href="#" onClick={() => setMenuOpen(false)}>Features</Link></li>
          <li><Link to="AboutSection" smooth={true} duration={500} href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="TestimonialsSection" smooth={true} duration={500} href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
          <li><Link to="ContactSection" smooth={true} duration={500} href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button className="cta-btn">Get Started</button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header