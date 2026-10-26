import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa6";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_yuoq82m",
        "template_4nogllr",
        formData,
        "R5usoxBDGBm_ExYMl"
      )
      .then(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Email successfully sent!");
      })
      .catch((error) => {
        console.error("There was an error sending the email", error);
        toast.error("Failed to send email. Please try again later.");
      });
  };

  return (
    <section id="Contact" className="section-band contact-section">
      <header className="section-heading" data-aos="fade-up">
        <div className="eyebrow">LET’S TALK</div>
        <h2>
          Have something{" "}
          <span className="gradient-text">worth building?</span>
        </h2>
        <p>
          Share a product idea, an engineering opportunity, or a question about
          my work. I’d be glad to hear from you.
        </p>
      </header>

      <div className="contact-layout">
        <aside className="contact-note" data-aos="fade-right">
          <div>
            <span className="eyebrow">OPEN TO GOOD CONVERSATIONS</span>
            <h3>Thoughtful products start with a clear conversation.</h3>
            <p>
              I’m interested in useful software, dependable backend systems,
              and carefully built AI experiences. Let’s talk about what you’re
              working on.
            </p>
          </div>
          <div className="contact-details">
            <a href="mailto:praveen.pk200109@gmail.com" className="contact-detail">
              <FaEnvelope aria-hidden="true" />
              <span>praveen.pk200109@gmail.com</span>
            </a>
            <a
              href="https://github.com/Hawkpraveen"
              target="_blank"
              rel="noreferrer"
              className="contact-detail"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub profile</span>
              <FaArrowUpRightFromSquare className="contact-external-icon" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-496255190/"
              target="_blank"
              rel="noreferrer"
              className="contact-detail"
            >
              <FaLinkedinIn aria-hidden="true" />
              <span>LinkedIn profile</span>
              <FaArrowUpRightFromSquare className="contact-external-icon" aria-hidden="true" />
            </a>
          </div>
        </aside>

        <div className="contact-form-card" data-aos="fade-up">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Morgan"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="A little context helps me get back to you."
                rows="5"
                required
              />
            </div>
            <button className="btn-primary" type="submit">
              Send message <FaPaperPlane aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}

export default Contact;
