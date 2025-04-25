import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto head">
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
            <a href="#home" className="nav-link">Contact</a>
          </li>
        </ul>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="technical">
          <Technical_experties />
        </section>
      </div>
    </nav>
  );
};

export default Header;
