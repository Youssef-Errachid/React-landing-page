import { useState } from "react"
import "../../styles/Contact.css"

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleSubmit = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <span className="section-badge"> Contact</span>
        <h2>Get in <span>touch</span></h2>
        <p>Have a question? Fill out the form and we'll get back to you.</p>

        {submitted ? (
          <div className="success-msg">
             Message sent! We'll get back to you soon.
          </div>
        ) : (
          <div className="contact-form">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              Send Message 
            </button>

          </div>
        )}

      </div>
    </section>
  )
}

export default Contact