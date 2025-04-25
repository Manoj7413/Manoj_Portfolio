import ParticlesComponent from '../components/home_animation';
import HomePage from '../components/home_page';
import AboutMe from '../components/about_page';
import Projects from '../components/projects';
import Technical_experties from '../components/tech_feilds';
import Contact from './contact';
import GuessTheNumber from './game';

export default function Home() {
  return (
    <div style={{ background: "#000" }}>
      {/* <div className="anime">
        <ParticlesComponent />
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent justify-content-end px-4 fixed-top">
        <div id="navbarNav">
          <ul className="navbar-nav ms-auto justify-content-end head">
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
      <section id="home">
        <HomePage />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Technical_experties />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* game section */}
      {/* <section>
        <GuessTheNumber/>
      </section> */}

    </div>
  );
}
