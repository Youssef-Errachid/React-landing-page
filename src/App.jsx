import { useState } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Contact from "./components/Contact/Contact"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import "./styles/global.css"

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <Contact/ >
      <Footer/>
    </div>
  )
}

export default App