import { useState } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
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
      <Hero/ >
    </div>

  )
}

export default App