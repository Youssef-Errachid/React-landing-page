import "../../styles/Hero.css"

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">Welcome to MyApp</span>

          <h1 className="hero-title">
            Build something <span>amazing</span> with React
          </h1>

          <p className="hero-description">
            A modern, responsive, and attractive landing page
            built with React JS — fast, clean, and easy to customize.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero