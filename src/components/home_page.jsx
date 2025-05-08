import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";

const HomePage = () => {
  return (
    <div className="min-vh-100 d-flex flex-wrap justify-content-center align-items-end">
      <div className="motion_div d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center text-center text-lg-start">
        <motion.div
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: "15%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="home_text_div px-3"
        >
          <div className="text-white bg-transparent fs-5">
            <h1 className="display-4 fw-bold">Hi, I'm Manoj Kumhar</h1>
            <p className="lead text-secondary">Mobile App Developer | Web Developer</p>
            <p className="mt-3 text-light">
              Passionate about crafting intuitive and dynamic applications <br />using Flutter Dart and React, Node.js, Express.js, JavaScript and MongoDB.
            </p>
            <a href="https://www.linkedin.com/in/manoj-kumhar-472321261/" className="btn-outline-light me-4"><SiLinkedin size={30} color="white" /></a>
            <a href="https://github.com/Manoj7413" className="btn-outline-light"><SiGithub size={33} color="white" /></a>
            <div className="mt-3 mb-4 d-flex gap-4 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-outline-light font-bold"><strong>View Work</strong></a>
              <a href="#contact" className="btn btn-outline-light"><strong>Contact Me</strong></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: "15%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="mx-auto mb-lg-5">
            <img src="/manoj.png" alt="" style={{ height: "300px" }} />
          </div>
        </motion.div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default HomePage;  