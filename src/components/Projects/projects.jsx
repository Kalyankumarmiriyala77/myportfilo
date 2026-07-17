import "./Projects.css";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations/motion";

import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    title: "Car Rental System",
    image: project1,
    description:
      "A modern car rental platform built using React, Spring Boot and MySQL.",
    technologies: ["React", "Spring Boot", "MySQL"],
    github: "#",
    live: "#",
  },

  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Responsive portfolio website with glassmorphism and smooth animations.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },

  {
    title: "Employee Management",
    image: project3,
    description:
      "Employee management system with CRUD operations and authentication.",
    technologies: ["React", "Spring Boot", "MySQL"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">

      <motion.div
        className="section-title"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span>My Work</span>
        <h2>Featured Projects</h2>
      </motion.div>

      <div className="projects-container">

        {projectData.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
          >

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

              
              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Projects;