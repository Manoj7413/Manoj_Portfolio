import "../styles/contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y2bt12e', 'template_wsfcm5l', form.current, {
        publicKey: 'Rmi2D8qVH7uh74Qo8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-background min-vh-100 mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center text-white">
      {/* Header */}
      <div className="contact-header text-center text-md-center mt-5 mb-4 mb-md-0 me-md-5">
        <h1 className="contact-header-title mb-2">Get in Touch</h1>
        <p className="fs-6 mb-2">I'd love to hear from you!</p>
        <p className="contact-description">
          Whether you have a project in mind, need a consultation, have a job offer, or just want to connect, feel free to reach out. Let's build something amazing together!
        </p>
      </div>

      {/* Form */}
      <div className="contact-container w-100 mt-md-5" style={{ maxWidth: "500px" }}>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" className="form-control" placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn btn-warning w-100 text-white">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
