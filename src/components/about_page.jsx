import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";

const AboutMe = () => {
  return (
    <div className="container-fluid min-vh-100 text-white py-5 mt-5 d-flex justify-content-center align-items-center">
      <div className="about bg-dark p-4 p-md-5 rounded-4 shadow-lg w-100" style={{ maxWidth: "900px" }}>
        <h1 className="display-5 fw-bold text-center mb-4">About Me</h1>

        {/* Section 1 */}
        <div className="d-flex flex-column flex-md-row align-items-start mb-4 gap-3">
          <FaCode size={40} className="flex-shrink-0" />
          <p className="mb-0">
            <strong className="text-warning">Full Stack Developer & Mobile App Developer</strong> passionate about building intuitive and engaging digital experiences.
          </p>
        </div>

        {/* Section 2 */}
        <div className="d-flex flex-column flex-md-row align-items-start mb-4 gap-3">
          <FaLaptopCode size={40} className="flex-shrink-0" />
          <p className="mb-0">
            With expertise in <strong className="text-warning">Flutter & Dart</strong>, I’ve developed apps like a
            <span className="text-accent"> Movie Streaming App</span> and a
            <span className="text-accent"> Recipe App</span>, ensuring seamless UI/UX.
            I also specialize in <strong className="text-warning">Full-Stack Web Development</strong> using
            <span className="text-accent"> React</span>, <span className="text-accent"> JavaScript</span>,
            <span className="text-accent"> Node.js</span>, <span className="text-accent"> Express.js</span>,
            and <span className="text-accent"> MongoDB</span>.
          </p>
        </div>

        {/* Section 3 */}
        <div className="d-flex flex-column flex-md-row align-items-start mb-4 gap-3">
          <GiGamepad size={45} className="flex-shrink-0" />
          <p className="mb-0">
            My projects include a <span className="text-accent">Music Website with Spotify API</span> and interactive games like
            <span className="text-accent"> Snake Master</span> (HTML, CSS, JS) and
            <span className="text-accent"> Ping Pong</span> (Python).
            Additionally, I work with <strong className="text-accent">GraphQL</strong> to optimize API responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
