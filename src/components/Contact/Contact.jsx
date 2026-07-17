import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <span>Get In Touch</span>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* Contact Info */}

        <div className="contact-info">

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>yourmail@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Your Message"
            ></textarea>

            <button className="btn primary">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;