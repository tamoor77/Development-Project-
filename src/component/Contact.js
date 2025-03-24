import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_5q027xt", 
        "template_1hvlquf", 
        formData, 
        "VmJbZN1E7WKFUPwT6"
      );
      setSuccessMessage("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Email send error:", error);
      setSuccessMessage("Failed to send message ❌");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>Have a project in mind? Let’s talk!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label>Your Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Your Email</label>
          </div>
          <div className="input-group">
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;

/* ✅ Best UI - Light Themed CSS */
const styles = `
  .contact-section {
    background: #f5f5f5;
    color: #333;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
  }

  .contact-container {
    max-width: 550px;
    width: 100%;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .contact-container h2 {
    font-size: 2.5rem;
    color: #0073e6;
    margin-bottom: 10px;
  }

  .contact-container p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #555;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input-group {
    position: relative;
    width: 100%;
  }

  .input-group input, .input-group textarea {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    background: white;
    color: #333;
    transition: 0.3s;
  }

  .input-group label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #999;
    font-size: 1rem;
    pointer-events: none;
    transition: 0.3s;
  }

  .input-group input:focus, 
  .input-group textarea:focus,
  .input-group input:valid, 
  .input-group textarea:valid {
    border-color: #0073e6;
  }

  .input-group input:focus + label, 
  .input-group textarea:focus + label,
  .input-group input:valid + label, 
  .input-group textarea:valid + label {
    top: 10px;
    font-size: 0.8rem;
    color: #0073e6;
  }

  .input-group textarea {
    height: 120px;
    resize: none;
  }

  .contact-form button {
    background: #0073e6;
    color: white;
    padding: 12px;
    border: none;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  .contact-form button:hover {
    background: #005bb5;
  }

  .success-message {
    margin-top: 15px;
    font-size: 1rem;
    color: #0073e6;
  }

  @media (max-width: 768px) {
    .contact-container {
      width: 90%;
      padding: 20px;
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
