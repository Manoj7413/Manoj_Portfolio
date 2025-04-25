import "../styles/contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { p } from "framer-motion/client";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y2bt12e', 'template_wsfcm5l', form.current, {publicKey: 'Rmi2D8qVH7uh74Qo8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

    return (
        <div className="contact-background vh-100">
            <div className="contact-header text-center">
                <h1 className="contact-header-title">Get in Touch</h1>
                <p className="fs-10 mb-1 text-light">I'd love to hear from you!</p>
                <p className="contact-description">
                    Whether you have a project in mind, need a consultation, have a job offer, or just want to connect, feel free to reach out. Let's build something amazing together!
                </p>
            </div>
            <div className="contact-container">
                <form className="contact-form" ref={form} onSubmit={sendEmail}> 
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;