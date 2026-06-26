import { FiZap, FiLayout, FiSmartphone, FiCode, FiShield, FiStar } from "react-icons/fi"
import FeatureCard from "./FeatureCard"
import "../../styles/Features.css"

const featuresData = [
  {
    id: 1,
    icon: <FiZap />,
    title: "Fast Performance",
    description: "Optimized for speed with React and Vite — lightning fast load times."
  },
  {
    id: 2,
    icon: <FiLayout />,
    title: "Clean Design",
    description: "Modern and minimal UI that keeps visitors focused on what matters."
  },
  {
    id: 3,
    icon: <FiSmartphone />,
    title: "Fully Responsive",
    description: "Looks perfect on any device — mobile, tablet, or desktop."
  },
  {
    id: 4,
    icon: <FiCode />,
    title: "Clean Code",
    description: "Well-structured components, easy to read, maintain, and extend."
  },
  {
    id: 5,
    icon: <FiShield />,
    title: "Reliable",
    description: "Built with best practices to ensure stability and consistency."
  },
  {
    id: 6,
    icon: <FiStar />,
    title: "Customizable",
    description: "Easily change colors, content, and layout to match your brand."
  }
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">

        {/* section header */}
        <div className="section-header">
          <span className="section-badge">✨ Features</span>
          <h2 className="section-title">Why choose <span>MyApp</span>?</h2>
          <p className="section-description">
            Everything you need to build a modern, attractive,
            and high-performing landing page with React.
          </p>
        </div>

        {/* cards grid */}
        <div className="features-grid">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features