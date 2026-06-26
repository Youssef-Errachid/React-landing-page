import { useState } from "react"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import "../../styles/Contact.css"

function Contact() {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })


  const [errors, setErrors] = useState({})


  const [submitted, setSubmitted] = useState(false)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }


  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

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
    setErrors({})
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-wrapper">

          <div className="contact-info">
            <span className="section-badge">📬 Contact</span>
            <h2>Let's <span>get in touch</span></h2>
            <p>
              Have a question or want to work together?
              Fill out the form and we'll get back to you as soon as possible.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon"><FiMail /></div>
                <span>contact@myapp.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><FiPhone /></div>
                <span>+212 600 000 000</span>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><FiMapPin /></div>
                <span>Beni Mellal, Morocco</span>
              </div>
            </div>
          </div>

          <div className="contact-form">

            {submitted ? (
              <div className="success-msg">
                Message sent successfully! We'll get back to you soon.
              </div>
            ) : (
              <>
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
                  <label>Email Address</label>
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
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                  />
                  {errors.message && <span className="error-msg">{errors.message}</span>}
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  Send Message 🚀
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact