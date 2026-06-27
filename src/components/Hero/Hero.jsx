import "../../styles/Hero.css"
import { Element } from 'react-scroll';


function Hero() {
  return (
    <Element name="HeroSection">
          <section className="hero" id="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">Welcome to i Shop</span>

          <h1 className="hero-title">
            Shop something <span>amazing</span> with i Shop
          </h1>

          <p className="hero-description">
            Discover trendy products, amazing deals, and a seamless shopping
            experience with i Shop  your modern destination for smart online shopping.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>

        </div>

      </div>
    </section>
    </Element>

  )
}

export default Hero