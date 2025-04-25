import React from "react";
import { FaCode } from "react-icons/fa";
import {FaLaptopCode} from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";

const AboutMe = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center text-white">
      <div className="about p-4 mt-5 rounded-5 shadow-lg">
        <h1 className="display-4 fw-bold">About Me</h1>
        <div className="about_me" style={{ gap: "5px", display: "flex", flexDirection: "column" }}>
          <FaCode size={40} color="#ffffff" />
          <p>
            <strong className="text-warning">Full Stack Developer & Mobile App Developer</strong> passionate about building intuitive and engaging digital experiences.
          </p>
        </div>

        <div className="about_me " style={{ gap: "5px", display: "flex", flexDirection: "column" }}>
          <FaLaptopCode size={40} color="#ffffff" />
          <p>
            With expertise in <strong className="text-warning">Flutter & Dart</strong>, I’ve developed apps like a
            <span className="text-accent"> Movie Streaming App</span> and a
            <span className="text-accent"> Recipe App</span>, ensuring seamless UI/UX.
            I also specialize in <strong className="text-warning">Full-Stack Web Development</strong> using
            <span className="text-accent"> React</span>, <span className="text-accent"> JavaScript</span>,
            <span className="text-accent"> Node.js</span>, <span className="text-accent"> Express.js</span>,
            and <span className="text-accent"> MongoDB</span>.
          </p>
        </div>

        <div className="about_me">
          <GiGamepad size={45} color="#ffffff" />
          <p>
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
