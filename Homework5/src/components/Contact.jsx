
import React from "react";

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <p className="eyebrow">LET'S CONNECT</p>
        <h1>Contact NexaTech</h1>
        <p>
          Have a question or want to learn more about technology?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-info">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's Start a Conversation.</h2>
          <p>
            Reach out to NexaTech using the contact information below.
            We're here to help you explore new digital possibilities.
          </p>

          
         <div className="contact-detail">
  <span>✉️</span>
  <div>
    <h3>Email</h3>
    <button
      type="button"
      className="contact-email-link"
      onClick={() =>
        window.dispatchEvent(new Event("open-nexatech-email"))
      }
    >
      nexatech@gmail.com
    </button>
  </div>
        </div>
          <div className="contact-detail">
            <span>☎️</span>
            <div>
              <h3>Phone</h3>
              <a href="tel:+14532420988">
                +1 453-242-0988
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span>🌐</span>
            <div>
              <h3>Website</h3>
              <p>www.nexatech.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p>
            Fill out the form below to get in touch.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you for contacting NexaTech!");
              event.target.reset();
            }}
          >
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="What is your message about?"
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button type="submit" className="primary-button">
              Send Message →
            </button>
          </form>

          <p className="form-note">
            Demonstration form: messages are not actually sent or stored.
          </p>
        </div>

      </section>
    </div>
  );
}

export default Contact;
