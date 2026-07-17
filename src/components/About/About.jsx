import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeLeft, fadeRight } from "../../animations/motion";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about section" id="about">

      <motion.div className="section-title"
      variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span>Get To Know</span>
        <h2>About Me</h2>
      </motion.div>

      <div className="about-container">

        {/* Left Side */}
        <motion.div className="about-text"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >

          <h3>Who am I?</h3>

          <p>
            I'm a passionate Software Developer who enjoys building modern,
            responsive, and user-friendly web applications. I love solving
            real-world problems through technology and continuously learning
            new skills.
          </p>

          <p>
            My goal is to create beautiful digital experiences with clean code,
            modern UI, and excellent performance.
          </p>

          <a href="#" className="about-btn">
            Download Resume
          </a>

        </motion.div>

        {/* Right Side */}

        <div className="about-cards">

          <motion.div className="about-card"
           variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          >
            <FaUserGraduate className="icon" />
            <h4>Education</h4>
            <p>B.Tech Graduate</p>
          </motion.div>

          <motion.div className="about-card"
           variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          >
            <FaLaptopCode className="icon" />
            <h4>Projects</h4>
            <p>10+ Completed</p>
          </motion.div>

          <motion.div className="about-card"
           variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          >
            <FaAward className="icon" />
            <h4>Certificates</h4>
            <p>15+ Achievements</p>
          </motion.div>

          <motion.div className="about-card"
           variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          >
            <FaLightbulb className="icon" />
            <h4>Learning</h4>
            <p>React • Java • Spring Boot</p>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;