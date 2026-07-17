import "./Contact.css";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations/motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact section" id="contact">

      <motion.div
        className="section-title"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span>Let's Connect</span>
        <h2>Contact Me</h2>
      </motion.div>

      <div className="contact-container">

        {/* Left Side */}

        <motion.div
          className="contact-info"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            className="info-card"
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>yourmail@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Andhra Pradesh, India</p>
            </div>
          </motion.div>

          <div className="social-links">

            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.4 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.4 }}
            >
              <FaLinkedin />
            </motion.a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.form
          className="contact-form"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >

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
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(139,92,246,.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;