import {
  FiZap,
  FiLayout,
  FiSmartphone,
  FiCode,
  FiShield,
  FiStar
} from "react-icons/fi"

import FeatureCard from "./FeatureCard"
import "../../styles/Features.css"

const featuresData = [
  {
    id: 1,
    icon: <FiZap />,
    title: "Fast Delivery",
    description:
      "Get your favorite products delivered quickly and safely to your doorstep."
  },
  {
    id: 2,
    icon: <FiLayout />,
    title: "Modern Shopping Experience",
    description:
      "Enjoy a clean, attractive, and user-friendly shopping interface."
  },
  {
    id: 3,
    icon: <FiSmartphone />,
    title: "Mobile Friendly",
    description:
      "Shop anytime, anywhere from your phone, tablet, or desktop."
  },
  {
    id: 4,
    icon: <FiCode />,
    title: "Easy Navigation",
    description:
      "Find products easily with smooth browsing and organized categories."
  },
  {
    id: 5,
    icon: <FiShield />,
    title: "Secure Payments",
    description:
      "Your transactions are protected with safe and reliable payment methods."
  },
  {
    id: 6,
    icon: <FiStar />,
    title: "Best Quality",
    description:
      "We provide high-quality products selected to satisfy our customers."
  }
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">

        <div className="section-header">
          <span className="section-badge">Features</span>

          <h2 className="section-title">
            Why choose <span>i Shop</span>?
          </h2>

          <p className="section-description">
            Discover the benefits of shopping with i Shop — quality products,
            secure payments, fast delivery, and a smooth shopping experience.
          </p>
        </div>

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