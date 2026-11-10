
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend(e) {
    e.preventDefault();

    if (!subject.trim() || !message.trim()) {
      alert("Please enter a subject and message.");
      return;
    }

    setSent(true);
    setSubject("");
    setMessage("");
  }

  function openEmail() {
    setEmailOpen(true);
    setMinimized(false);
    setSent(false);
  }

  function closeEmail() {
    setEmailOpen(false);
    setMinimized(false);
    setSent(false);
  }

  useEffect(() => {
  function handleOpenEmail() {
    setEmailOpen(true);
    setMinimized(false);
    setSent(false);
  }

  window.addEventListener("open-nexatech-email", handleOpenEmail);

  return () => {
    window.removeEventListener("open-nexatech-email", handleOpenEmail);
  };
}, []);

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">N</span>
          <span>NEXATECH</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-contact">
          <button type="button" onClick={openEmail}>
            Email Us
          </button>
        </div>
      </nav>

      <div className="contact-strip">
        <span>Building a smarter digital future</span>
        <div>
          <a href="mailto:nexatech@gmail.com">
            nexatech@gmail.com
          </a>
          <a href="tel:+14532420988">
            +1 453-242-0988
          </a>
        </div>
      </div>

      {emailOpen && (
        <div className={`email-compose ${minimized ? "minimized" : ""}`}>
          <div className="email-compose-header">
            <strong>New Message</strong>

            <div className="email-window-actions">
              <button
                type="button"
                aria-label="Minimize email"
                onClick={() => setMinimized(!minimized)}
              >
                {minimized ? "□" : "−"}
              </button>

              <button
                type="button"
                aria-label="Close email"
                onClick={closeEmail}
              >
                ×
              </button>
            </div>
          </div>

          {!minimized && (
            <form className="email-compose-form" onSubmit={handleSend}>
              {sent ? (
                <div className="email-success">
                  <div className="success-icon">✓</div>
                  <h3>Message prepared!</h3>
                  <p>
                    Thank you for contacting NexaTech.
                    This is a demonstration, so your message
                    has not been delivered to an inbox.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                  >
                    Write Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="email-recipient">
                    <span>To:</span>
                    <strong>NexaTech Team</strong>
                  </div>

                  <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    aria-label="Email subject"
                    required
                  />

                  <textarea
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-label="Your message"
                    required
                  />

                  <div className="email-compose-footer">
                    <button type="submit" className="email-send-button">
                      Send
                    </button>
                    <button
                      type="button"
                      className="email-delete-button"
                      aria-label="Clear message"
                      onClick={() => {
                        setSubject("");
                        setMessage("");
                      }}
                    >
                      🗑
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
