import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import "../styles/HomePage.css";

const HomePage = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Mobile App Developer",
    "Web Developer",
    "Flutter Developer",
    "React Developer",
    "Full-Stack Developer",
  ];
  const typingSpeed = 20;
  const deletingSpeed = 20;
  const pauseTime = 2000;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing logic
        if (currentIndex < currentRole.length) {
          setTimeout(() => {
            setDisplayText(currentRole.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          }, typingSpeed);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting logic
        if (currentIndex > 0) {
          setTimeout(() => {
            setDisplayText(currentRole.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          }, deletingSpeed);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="d-flex align-items-center justify-content-center pt-5">
      <div className="container pt-md-5">
        <div className="row align-items-center justify-content-between">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-lg-7 col-md-7 order-2 order-md-1 text-center text-md-start"
          >
            <div className="pe-md-4">
              <h6 className="text-primary mb-3">WELCOME TO MY PORTFOLIO</h6>

              <h1
                className="display-4 fw-bold text-white mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Hi, I'm <span className="text-primary">Manoj Kumhar</span>
              </h1>

              <div className="typewriter-container mb-4">
                <h2 className="text-info fs-4">
                  <span className="typed-text">{displayText}</span>
                  <span className="cursor">|</span>
                </h2>
              </div>

              <p
                className="lead text-light mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Passionate about crafting intuitive and dynamic applications
                using modern technologies like Flutter, React, Node.js, and
                MongoDB. I transform ideas into seamless digital experiences.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  href="#projects"
                  className="btn btn-dark btn-lg px-4 py-2 rounded-0 shadow-sm"
                >
                  View My Work
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  href="#contact"
                  className="btn btn-dark btn-lg px-4 py-2 rounded-0 shadow-sm"
                >
                  Contact Me
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  href="https://drive.google.com/file/d/1hjzbQAI10dRiUCiqBUplxDHgmGjkI16G/view?usp=drive_link"
                  className="btn btn-dark btn-lg px-4 py-2 rounded-0 shadow-sm d-flex align-items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <HiDownload className="me-2" />
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="col-lg-5 col-md-5 order-1 order-md-2 text-center mb-5 mb-md-0"
          >
            <div className="profile-image-container">
              <img
                src="/manoj.png"
                alt="Manoj Kumhar"
                className="profile-img img-fluid rounded-circle"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
