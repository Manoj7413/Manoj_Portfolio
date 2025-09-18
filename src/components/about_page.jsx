import React from "react";
import { FaCode, FaLaptopCode, FaMobile } from "react-icons/fa";
import { GiGamepad, GiBrain } from "react-icons/gi";
import { motion } from "framer-motion";
import "../styles/About.css";

const AboutMe = () => {
  return (
    <div className="container-fluid text-white d-flex justify-content-center align-items-center">
      <div
        className="about bg-dark p-4 p-md-5 rounded-4 shadow-lg w-100"
        style={{ maxWidth: "1000px" }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold mb-3 gradient-text">About Me</h1>
          <p className="lead text-light">
            Crafting digital experiences with passion and precision
          </p>
          <div
            className="divider mx-auto bg-primary"
            style={{ width: "80px", height: "4px" }}
          ></div>
        </motion.div>

        <div className="row">
          {/* Main Content */}
          <div>
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="d-flex flex-column flex-md-row align-items-start mb-4 gap-3"
            >
              <div className="icon-container bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                <FaCode size={24} />
              </div>
              <div>
                <h4 className="text-primary mb-2">
                  Full Stack & Mobile Developer
                </h4>
                <p className="mb-0 text-light">
                  I'm a passionate developer dedicated to creating intuitive and
                  engaging digital experiences. With a strong foundation in both
                  frontend and backend technologies, I bring ideas to life
                  through clean code and thoughtful design.
                </p>
              </div>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="d-flex flex-column flex-md-row align-items-start mb-4 gap-3"
            >
              <div className="icon-container bg-info rounded-circle p-3 d-flex align-items-center justify-content-center">
                <FaMobile size={24} />
              </div>
              <div>
                <h4 className="text-info mb-2">Mobile App Development</h4>
                <p className="mb-0 text-light">
                  With expertise in{" "}
                  <strong className="text-warning">Flutter & Dart</strong>, I've
                  developed apps like a
                  <span className="text-accent"> Home Salon Services App</span>,
                  <span className="text-accent"> E-commerce Website UI</span>,
                  <span className="text-accent"> Movie Streaming App</span> and
                  a<span className="text-accent"> Recipe App</span>, ensuring
                  seamless UI/UX across platforms.
                </p>
              </div>
            </motion.div>

            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="d-flex flex-column flex-md-row align-items-start mb-4 gap-3"
            >
              <div className="icon-container bg-success rounded-circle p-3 d-flex align-items-center justify-content-center">
                <FaLaptopCode size={24} />
              </div>
              <div>
                <h4 className="text-success mb-2">
                  Full-Stack Web Development
                </h4>
                <p className="mb-0 text-light">
                  I specialize in{" "}
                  <strong className="text-warning">
                    Full-Stack Web Development
                  </strong>{" "}
                  using
                  <span className="text-accent"> React</span>,{" "}
                  <span className="text-accent"> JavaScript</span>,
                  <span className="text-accent"> Node.js</span>,{" "}
                  <span className="text-accent"> Express.js</span>,
                  <span className="text-accent"> Next.js</span> and databases
                  like
                  <span className="text-accent"> MongoDB</span>,
                  <span className="text-accent"> Convex</span>,
                  <span className="text-accent"> Supabase</span> .
                </p>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="d-flex flex-column flex-md-row align-items-start mb-4 gap-3"
            >
              <div className="icon-container bg-warning rounded-circle p-3 d-flex align-items-center justify-content-center">
                <GiGamepad size={24} />
              </div>
              <div>
                <h4 className="text-warning mb-2">Creative Projects</h4>
                <p className="mb-0 text-light">
                  My projects include a{" "}
                  <span className="text-accent">
                    Chat Application With Convex Database And Clerk
                    Authentication
                  </span>
                  ,{" "}
                  <span className="text-accent">
                    Music Website with Spotify API
                  </span>{" "}
                  and interactive games like{" "}
                  <span className="text-accent">Snake Master</span> (HTML, CSS,
                  JS) and
                  <span className="text-accent"> Ping Pong</span> (Python). I
                  also work with
                  <strong className="text-accent"> GraphQL</strong> to optimize
                  API responses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <p className="text-light mb-3">Interested in working together?</p>
          <a href="#contact" className="btn btn-primary btn-lg px-4">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
