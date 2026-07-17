import "./Hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <section className="hero" id="home">

     <div
  className="hero-content"
  
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

      </div>

      <div
  className="hero-image"
  
>

        <div className="image-card">

          <img
            src={profile}
            alt="Profile"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;