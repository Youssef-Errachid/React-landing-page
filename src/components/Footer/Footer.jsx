import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import "../../styles/Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">MyApp</div>

        <p className="footer-copyright">
          © {currentYear} <span>MyApp</span>. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/ENAA-School-Student"
            target="_blank" rel="noreferrer"
            className="social-icon">
            <FiGithub />
          </a>
          <a href="#" className="social-icon"><FiLinkedin /></a>
          <a href="#" className="social-icon"><FiInstagram /></a>
        </div>

      </div>
    </footer>
  )
}

export default Footer