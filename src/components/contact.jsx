import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_y2bt12e", "template_wsfcm5l", form.current, {
        publicKey: "Rmi2D8qVH7uh74Qo8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setIsSubmitted(true);
          setIsLoading(false);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className=" d-flex align-items-center" id="contact">
      <div className="container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold text-white mb-3">Let's Connect</h1>
          <p className="lead text-light mb-4">
            I'm always open to discussing new projects and opportunities
          </p>
          <div
            className="divider mx-auto bg-primary mb-4"
            style={{ width: "80px", height: "4px" }}
          ></div>
        </motion.div>

        <div className="row justify-content-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-lg-4 col-md-6 mb-5 mb-lg-0"
          >
            <div className="d-flex align-items-center justify-content-center contact-info-card bg-dark bg-opacity-50 p-4 rounded-4 h-100">
              <div>
                <h4 className="text-primary mb-4">Get in Touch</h4>

                <div className="contact-item d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-25 rounded-circle p-3 me-3">
                    <FaEnvelope className="text-primary" size={20} />
                  </div>
                  <div>
                    <h6 className="text-light mb-1">Email</h6>
                    <a
                      href="mailto:manojkumhar7413@gmail.com"
                      className="text-info text-decoration-none"
                    >
                      kumharmanoj303@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-25 rounded-circle p-3 me-3">
                    <FaPhone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h6 className="text-light mb-1">Phone</h6>
                    <p className="text-info mb-0">+91 7413976304</p>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-25 rounded-circle p-3 me-3">
                    <FaMapMarkerAlt className="text-primary" size={20} />
                  </div>
                  <div>
                    <h6 className="text-light mb-1">Location</h6>
                    <p className="text-info mb-0">IIT Patna, Bihar, India</p>
                  </div>
                </div>

                <div className="social-links mt-4">
                  <h6 className="text-light mb-3">Follow Me</h6>
                  <div className="d-flex gap-3">
                    {/* LinkedIn with Tooltip */}
                    <div className="position-relative">
                      <motion.a
                        href="https://www.linkedin.com/in/manoj-kumhar-472321261/"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: "45px",
                          height: "45px",
                          background:
                            "linear-gradient(45deg, #0A66C2, #0A66C2)",
                          transition: "all 0.3s ease",
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <FaLinkedin size={18} className="text-white" />
                      </motion.a>
                      <div className="tooltip-custom">LinkedIn</div>
                    </div>

                    {/* GitHub with Tooltip */}
                    <div className="position-relative">
                      <motion.a
                        href="https://github.com/Manoj7413"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: "45px",
                          height: "45px",
                          background: "linear-gradient(45deg, #333, #555)",
                          transition: "all 0.3s ease",
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
                        <FaGithub size={18} className="text-white" />
                      </motion.a>
                      <div className="tooltip-custom">GitHub</div>
                    </div>

                    {/* WhatsApp with Tooltip */}
                    <div className="position-relative">
                      <motion.a
                        href="https://wa.me/+917413976304"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: "45px",
                          height: "45px",
                          background:
                            "linear-gradient(45deg, #25D366, #128C7E)",
                          transition: "all 0.3s ease",
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp"
                      >
                        <FaWhatsapp size={18} className="text-white" />
                      </motion.a>
                      <div className="tooltip-custom">WhatsApp</div>
                    </div>

                    {/* Instagram with Tooltip */}
                    <div className="position-relative">
                      <motion.a
                        href="https://instagram.com/mnuu1800"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: "45px",
                          height: "45px",
                          background:
                            "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                          transition: "all 0.3s ease",
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                      >
                        <FaInstagram size={18} className="text-white" />
                      </motion.a>
                      <div className="tooltip-custom">Instagram</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-lg-6 col-md-6"
          >
            <div className="contact-form-card bg-dark bg-opacity-50 p-4 p-md-5 rounded-4">
              <h4 className="text-primary mb-4">Send me a message</h4>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="alert alert-success mb-4"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label text-light">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control bg-dark bg-opacity-25 border-0 text-light placeholder-gray-400"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label text-light">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control bg-dark bg-opacity-25 border-0 text-light"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-light">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control bg-dark bg-opacity-25 border-0 text-light"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn btn-primary w-100 py-3 fw-medium d-flex align-items-center justify-content-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="me-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
