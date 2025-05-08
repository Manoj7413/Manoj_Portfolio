import { useEffect, useState, useCallback } from 'react';
import ParticlesComponent from '../components/home_animation';
import HomePage from '../components/home_page';
import AboutMe from '../components/about_page';
import Projects from '../components/projects';
import Technical_experties from '../components/tech_feilds';
import Contact from './contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Collapse from 'bootstrap/js/dist/collapse';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavLinkClick = useCallback(() => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);
      bsCollapse.hide();
      setIsNavOpen(false);
    }
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => link.addEventListener("click", handleNavLinkClick));

    return () => {
      links.forEach(link => link.removeEventListener("click", handleNavLinkClick));
    };
  }, [handleNavLinkClick]);

  const handleToggle = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);

    if (isNavOpen) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div style={{ background: "#000" }}>
      {/* <ParticlesComponent /> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top px-4">
        <a className="navbar-brand text-white" href="#home">Manoj</a>

        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          {isNavOpen ? (
            <IoMdClose size={30} color="white" />
          ) : (
            <HiOutlineMenuAlt3 size={30} color="white" />
          )}
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
