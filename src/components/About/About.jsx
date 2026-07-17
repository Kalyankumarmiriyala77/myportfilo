import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  return (
   <section className="about" id="about">

  <div className="section-title">
    <span>Get To Know</span>
    <h2>About Me</h2>
  </div>

  <div className="about-container">

    <div className="about-text">

      <h3>Who am I?</h3>

      <p>
        I'm a passionate Software Developer who enjoys building
        responsive and user-friendly web applications.
      </p>

      <p>
        I love learning new technologies and creating modern
        digital experiences with clean UI and efficient code.
      </p>

      <a href="/resume.pdf" className="btn primary about-btn">
        Download Resume
      </a>

    </div>

    <div className="about-cards">

      <div className="about-card">
        <FaUserGraduate className="icon"/>
        <h4>Education</h4>
        <p>MCA Graduate</p>
      </div>

      <div className="about-card">
        <FaLaptopCode className="icon"/>
        <h4>Projects</h4>
        <p>10+ Completed</p>
      </div>

      <div className="about-card">
        <FaAward className="icon"/>
        <h4>Certificates</h4>
        <p>15+ Achievements</p>
      </div>

      <div className="about-card">
        <FaLightbulb className="icon"/>
        <h4>Learning</h4>
        <p>React • Java • Spring Boot</p>
      </div>

    </div>

  </div>

</section>
  );
};

export default About;