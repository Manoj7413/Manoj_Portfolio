import {React, useEffect} from "react";
import "../styles/Projects.css";

export default function Projects() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section1, .section2, .section3, .section4");
      sections.forEach((section, index) => {
        const topOffset = 80 + 20 * index;
        section.style.top = `${topOffset}px`;
        section.style.zIndex = `${index}`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <div className="project_main">
      {/* first project */}
      <div className="Container section1">
        <div className="project-wrapper">
          <img
            src='/Barbera_User_App_Banner.png'
            alt="Career Craft Screenshot"
            className="project-image img1"
          />

          <div className="project-details">
            <h2 className="project-title">Internship at Barbera Home Salon Service App</h2>
            <p className="project-description">
              During my internship at Barbera Salon Service App, I worked as a Mobile App Developer where I was responsible for building and optimizing user interfaces using Flutter. I contributed to key features like service booking, user authentication, and profile management. I also collaborated with the backend team to integrate APIs and ensure a seamless user experience. This hands-on experience greatly enhanced my skills in mobile development, real-time data handling, and working in a collaborative development environment.
            </p>

            <div className="tech-stack">
              <span className="tech-badge">Dart</span>
              <span className="tech-badge">Flutter</span>
              <span className="tech-badge">GraphQl</span>
            </div>

            <div className="d-flex justify-content-between align-items-end">
              <div className="buttons">
                <a href="#projects">
                  <button className="code-btn">
                    Code <i className="ms-1 bi bi-code-slash"></i>
                  </button>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.barbera.barberaconsumerapp&hl=en_IN">
                  <button className="demo-btn">
                    Demo <i className="ms-1 bi bi-box-arrow-up-right"></i>
                  </button>
                </a>
              </div>
              <div className="ms-3 bottom-4 right-4 bg-white p-3 rounded-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///9fyfhax/gxufYHW50EWZwDWJxPxfjz+/4IXJ5hhrSi3ftVxvjd5e4AVJrX8P3n9v5HvveG0/nN7P0AT5jf8/140PkATJcARpTS7v245fvE6Py2xtro9v4tqucMs/UARJNOrOAIO4uW2fotu/au3/oGOYnC4PNSfK7v8/fVukePAAADUklEQVR4nO3c21LbMBSFYSuxJVJSUVqDTaEmoS1t3/8F6wNxEluytzvTyd6b9Q+XXPibJaIhHJIEIYQQQgghhBBCCCGEEEIIIYQQQggp6eZ6Qd+vLv24y3twW2rOuZtLP+7yHpwJtQqmCBgWagIGhaqAIaFE4E0UGBAqA46F2oAjoTrgUKgPaOQD46+iAaFGoFEPNOqBRj3QqAca9UCjHmgAZBsRaNQDjXqgUQ806oEGQI4BCCDzvgAIIO8ABJB5AALIPADfE9C4u0s/7vKWAdUvqB6II8ovLAgg8wAEkHkAAsg8AAFkHoAAMg9AAJkHIIDMAxDAuqtFCQTeO3q395yBnyLA7egv8aK5zwAC+L+AK4nAO+3AJPlK/7V0mUA6USyQShQMpBFFAylE4cB5onjgHFEBcJqoAjhFVAKME9UAY8SV+xb+dHnAMDG64K2L/BMoxsAQMQ5cr7dUIh/gmBg9ojWQTOQEHBKnFiQTeQHPiXNAEpEb8JQ4fUSJRH7AI3F+wZYoD3gg0oAzRJ7Ajkg5ol1OHrAhUhecJPIFNkQ6MErkDEySyA9OgsAIkTcwUgQYJOoCBojagCOiPuCAKBK4mgaeEUUC72cmPCXKBG7nhQeiUKAhCDuiUOBqRRE2RLFAmnDtRAJN+w0STbiWCEweHV1Y+Y+Xftx/qSWShFWW5WKJFGGVpRu5RIKwsulmI5c4L+yAcok/qECxxJ/PM0CfHYRSideTxMrb7EBMU6uP2ADfiGmTOmKVe9sSsw6YpsoOag30B2KqkVgV3rdEq5RYlXneEX1r7ImFEmIDjBBlrji8F6uyyHui9z2vfUWVueI5sdoVnbA1nvnqr0mhxMfj+4Zm/1IUb0Rv03QArIkyD2pPrIFl0Zb7/iY88Ylf0exfy7KoP4a8I1A2sVmw5uXZZug7AUo+qO2CuR3zznySV9y/BnkjoFjir5c0xBv75BKfdjSg4HvxqSQNKHrFctYn/V48J0YHVEKc2E8FMbSaknvxqczmzqcCImXABmh1EUNAscQdYcAOKJY4v6LtU0q0VjyxP6gTB9R2b6hKJZY25hsABRMjvhEwy7xQ4s6Ty3cyiR8W9PvPpR8XIYQQQgghhBBCCCGEEEIIIYQQQui99xd9MndVczNj5wAAAABJRU5ErkJggg=="
                  alt="Flutter Logo"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second project */}
      <div className="Container section2">
        <div className="project-wrapper">
          <img
            src='/chitra3.png'
            alt="Career Craft Screenshot"
            className="project-image img2"
          />

          <div className="project-details">
            <h2 className="project-title">Chitra Vichar - E-commerce Website</h2>
            <p className="project-description">
              I worked as a Frontend Developer for Chitra Vichar, an official e-commerce website focused on selling merchandise. I was responsible for developing a fully responsive and dynamic user interface using Flutter. My work included building product listing pages, implementing category filters, managing navigation between different sections. I collaborated with the backend team to integrate APIs for product data, cart management, and order processing. The technologies I used included Flutter, Dart, Firebase, and REST APIs.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Dart</span>
              <span className="tech-badge">Flutter</span>
              <span className="tech-badge">Andriod Studio</span>
            </div>

            <div className="d-flex justify-content-between align-items-end">
              <div className="buttons">
                <a href="#projects">
                  <button className="code-btn">
                    Code <i className="ms-1 bi bi-code-slash"></i>
                  </button>
                </a>
                <a href="https://chitravichar.vercel.app/">
                  <button className="demo-btn">
                    Demo <i className="ms-1 bi bi-box-arrow-up-right"></i>
                  </button>
                </a>
              </div>
              <div className="ms-3 bottom-4 right-4 bg-white p-3 rounded-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
                  alt="Tux Penguin"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third project */}
      <div className="Container section3">
        <div className="project-wrapper">
          <img
            src='/pinterest_clone.png'
            alt="Pinterest Clone Screenshot"
            className="project-image img3"
          />

          <div className="project-details">
            <h2 className="project-title">PinIt - Pinterest Clone</h2>
            <p className="project-description">
              PinIt is a Pinterest-inspired web application built using Node.js, Express.js, HTML, CSS, and JavaScript. It allows users to sign up, log in, and manage their own profiles securely with user authentication. Users can upload image posts using Multer, which are saved and displayed on their accounts. MongoDB is used for efficient data storage and retrieval. The UI is designed to closely replicate the Pinterest-style grid layout. The app focuses on user-generated content with smooth posting and browsing experiences.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Multer</span>
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JavaScript</span>
            </div>

            <div className="d-flex justify-content-between align-items-end">
              <div className="buttons">
                <a href="https://github.com/Manoj7413/Pinterest-Clone">
                  <button className="code-btn">
                    Code <i className="ms-1 bi bi-code-slash"></i>
                  </button>
                </a>
                <a href="#projects">
                  <button className="demo-btn">
                    Demo <i className="ms-1 bi bi-box-arrow-up-right"></i>
                  </button>
                </a>
              </div>
              <div className="ms-3 bottom-4 right-4 bg-white p-3 rounded-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  alt="Node.js Logo"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth project */}
      <div className="Container section4">
        <div className="project-wrapper">
          <img
            src='/movie_clone_web.png'
            alt="Career Craft Screenshot"
            className="project-image img4"
          />

          <div className="project-details">
            <h2 className="project-title">StreamFlix - Movie App (Inspired by Netflix)</h2>
            <p className="project-description">
              StreamFlix is an Android application built using Android Studio, offering a sleek and intuitive user interface inspired by popular streaming platforms. The app allows users to explore a wide range of movies and TV shows, organized by categories like trending, popular, and upcoming releases. It features detailed information about each title, including synopses, cast, and release dates. While the app does not yet include video playback, it showcases a fully responsive layout and smooth navigation.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Andriod Studio</span>
            </div>

            <div className="d-flex justify-content-between align-items-end">
              <div className="buttons">
                <a href="https://github.com/Manoj7413/Movie_App">
                  <button className="code-btn">
                    Code <i className="ms-1 bi bi-code-slash"></i>
                  </button>
                </a>
                <a href="#projects">
                  <button className="demo-btn">
                    Demo <i className="ms-1 bi bi-box-arrow-up-right"></i>
                  </button>
                </a>
              </div>
              <div className="ms-3 bottom-4 right-4 bg-white p-3 rounded-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
                  alt="Tux Penguin"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
