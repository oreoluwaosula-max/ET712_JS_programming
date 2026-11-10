
import React from "react";

function About() {
  return (
    <div className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero">

        <p className="eyebrow">GET TO KNOW US</p>

        <h1>About NexaTech</h1>

        <p>
          Building a smarter and more connected digital future.
        </p>

      </section>

      {/* COMPANY INFORMATION */}
      <section className="about-content">

        <div className="about-card">

          <div className="about-icon">🚀</div>

          <h2>Who We Are</h2>

          <p>
            NexaTech is a technology company focused on
            innovation, digital solutions, and helping people
            understand and use technology.
          </p>

        </div>

        <div className="about-card">

          <div className="about-icon">🎯</div>

          <h2>Our Mission</h2>

          <p>
            Our mission is to make technology accessible,
            reliable, and useful while encouraging creativity
            and digital growth.
          </p>

        </div>

        <div className="about-card">

          <div className="about-icon">🔭</div>

          <h2>Our Vision</h2>

          <p>
            We envision a future where technology connects
            communities, improves businesses, and creates
            new opportunities for everyone.
          </p>

        </div>

      </section>

      {/* BOTTOM BANNER */}
      <section className="about-banner">

        <h2>Innovation Starts Here.</h2>

        <p>
          Technology is always changing. We believe in learning,
          growing, and moving forward with it.
        </p>

      </section>

    </div>
  );
}

export default About;
