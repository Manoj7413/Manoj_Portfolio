import { useEffect } from 'react';
import ParticlesComponent from '../components/home_animation';
import HomePage from '../components/home_page';
import AboutMe from '../components/about_page';
import Projects from '../components/projects';
import Technical_experties from '../components/tech_feilds';
import Contact from './contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Collapse from 'bootstrap/js/dist/collapse';


export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      link.addEventListener("click", () => {
        setTimeout(() => {
          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarCollapse.classList.contains("show")) {
            const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }, 300);
      });
    });
  }, []);
  

  return (
    <div style={{ background: "#000" }}>
      {/* <ParticlesComponent /> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top px-4">
        <a className="navbar-brand text-white" href="#home">Manoj</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse custom-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ms-auto head align-items-center">
            <li className="nav-item header-clean-btn">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item header-clean-btn">
              <a href="#about" className="nav-link">About Me</a>
            </li>
            <li className="nav-item header-clean-btn">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item header-clean-btn">
              <a href="#skills" className="nav-link">Technical Expertise</a>
            </li>
            <li className="nav-item header-clean-btn">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="container-fluid px-3 px-md-5">
        <HomePage />
      </section>

      <section id="about" className="container-fluid px-3 px-md-5">
        <AboutMe />
      </section>

      <section id="projects" className="container-fluid px-3 px-md-5">
        <Projects />
      </section>

      <section id="skills" className="container-fluid px-3 px-md-5">
        <Technical_experties />
      </section>

      <section id="contact" className="container-fluid px-3 px-md-5">
        <Contact />
      </section>
    </div>
  );
}
