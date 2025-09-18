import { useEffect, useState, useCallback } from "react";
import ParticlesComponent from "../components/home_animation";
import HomePage from "../components/home_page";
import AboutMe from "../components/about_page";
import Projects from "../components/projects";
import Technical_experties from "../components/tech_feilds";
import Contact from "./contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Collapse from "bootstrap/js/dist/collapse";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import "../styles/Home.css";
import GeometricBackground from "../components/home_animation";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavLinkClick = useCallback(() => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse =
        Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);
      bsCollapse.hide();
      setIsNavOpen(false);
    }
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => link.addEventListener("click", handleNavLinkClick));

    // Handle scroll event
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick)
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleNavLinkClick]);

  const handleToggle = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const bsCollapse =
      Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);

    if (isNavOpen) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="portfolio-container">
      {/* <ParticlesComponent /> */}
      <div style={{ background: "#000" }}>
        <GeometricBackground />

        {/* Enhanced Navigation */}
        <nav
          className={`navbar navbar-expand-lg navbar-dark fixed-top px-4 ${
            scrolled ? "navbar-scrolled" : ""
          }`}
        >
          <div className="container">
            <a className="navbar-brand text-white fw-bold" href="#home">
              <span className="brand-gradient">Manoj Kumhar</span>
            </a>

            <button
              className="navbar-toggler custom-toggler"
              type="button"
              onClick={handleToggle}
              aria-label="Toggle navigation"
            >
              {isNavOpen ? (
                <IoMdClose size={30} color="white" />
              ) : (
                <HiOutlineMenuAlt3 size={30} color="white" />
              )}
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link" data-text="Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link" data-text="About">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#projects" className="nav-link" data-text="Projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#skills" className="nav-link" data-text="Skills">
                    Technical Expertise
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link" data-text="Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="home" className="section-home">
          <HomePage />
        </section>

        <section id="about" className="section-about">
          <AboutMe />
        </section>

        <section id="projects" className="section-projects">
          <Projects />
        </section>

        <section id="skills" className="section-skills">
          <Technical_experties />
        </section>

        <section id="contact" className="section-contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
