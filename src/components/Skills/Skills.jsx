import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Java", icon: <FaJava />, color: "#F89820" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea />, color: "#ffffff" },
  ];

  return (
   <section className="skills" id="skills">

    <div className="section-title">
        <span>My Expertise</span>
        <h2>Technical Skills</h2>
    </div>

    <div className="skills-grid">

        {skills.map((skill,index)=>(
            <div className="skill-card" key={index}>

                <div
                    className="skill-icon"
                    style={{color:skill.color}}
                >
                    {skill.icon}
                </div>

                <h3>{skill.name}</h3>

            </div>
        ))}

    </div>

</section>
  );
};

export default Skills;