import "./Hero.css";
import profile from "../../assets/profile.png";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations/motion";

const Hero = () => {
  return (
    <section className="hero" id="home">

     <motion.div
  className="hero-content"
  variants={fadeLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>

        <span className="hero-subtitle">
          👋 Hello, I'm
        </span>

        <h1>
          Sri Nagavalli <span>Sundara</span>
        </h1>

        <h2>
          Software Developer
        </h2>
        <p>
          Passionate about creating beautiful, responsive and
          user-friendly web applications using modern technologies.
        </p>

        <div className="hero-buttons">

          <a href="#" className="btn primary">  <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download
  className="btn-primary"
>
  Download Resume
</a>
          
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>

        </div>

      </motion.div>

      <motion.div
  className="hero-image"
  variants={fadeRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>

        <div className="image-card">

          <img
            src={profile}
            alt="Profile"
          />

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;