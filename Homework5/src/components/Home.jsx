
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">THE FUTURE IS DIGITAL</p>

          <h1>
            Technology That
            <span> Moves You Forward.</span>
          </h1>

          <p className="hero-description">
            Discover smarter technology, stronger cybersecurity,
            and innovative digital solutions designed to help
            people and businesses thrive in a connected world.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="primary-button">
              Explore NexaTech →
            </Link>
            <a href="#services" className="secondary-button">
              Discover Solutions
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot"></span>
            Innovation. Security. Possibility.
          </div>
        </div>

        <div className="hero-visual">
          <div className="network-orb">
            <div className="orb-ring ring-one"></div>
            <div className="orb-ring ring-two"></div>
            <div className="orb-center">N</div>
            <span className="orb-node node-one"></span>
            <span className="orb-node node-two"></span>
            <span className="orb-node node-three"></span>
            <span className="orb-node node-four"></span>
          </div>
          <div className="visual-label">
            <span>01 / DIGITAL TRANSFORMATION</span>
            <span>CONNECTED BY INNOVATION</span>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="feature-strip">
        <div className="feature-item">
          <span className="feature-icon">✦</span>
          <div>
            <h3>Artificial Intelligence</h3>
            <p>Smarter digital possibilities</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">☁</span>
          <div>
            <h3>Cloud Technology</h3>
            <p>Flexible digital infrastructure</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">▥</span>
          <div>
            <h3>Data Analytics</h3>
            <p>Insights that drive decisions</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">◇</span>
          <div>
            <h3>Cybersecurity</h3>
            <p>Protection for a digital world</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Technology With Purpose.</h2>
          <p>
            We explore the technologies shaping tomorrow
            and the solutions that make a difference today.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <div className="service-icon">🛡️</div>
            <p className="card-number">01 / SECURITY</p>
            <h3>Cybersecurity</h3>
            <p>
              Explore strategies that help protect information,
              digital identities, systems, and connected networks.
            </p>
            <Link to="/about">Discover more →</Link>
          </article>

          <article className="service-card">
            <div className="service-icon">☁️</div>
            <p className="card-number">02 / INFRASTRUCTURE</p>
            <h3>IT Solutions</h3>
            <p>
              Discover reliable technology infrastructure,
              cloud platforms, and smarter ways to work.
            </p>
            <Link to="/about">Discover more →</Link>
          </article>

          <article className="service-card">
            <div className="service-icon">⌘</div>
            <p className="card-number">03 / DEVELOPMENT</p>
            <h3>Web Development</h3>
            <p>
              Explore modern websites, digital experiences,
              and user-focused software solutions.
            </p>
            <Link to="/about">Discover more →</Link>
          </article>

          <article className="service-card">
            <div className="service-icon">✧</div>
            <p className="card-number">04 / INTELLIGENCE</p>
            <h3>Artificial Intelligence</h3>
            <p>
              Learn how intelligent systems and automation
              are transforming everyday digital experiences.
            </p>
            <Link to="/about">Discover more →</Link>
          </article>
        </div>
      </section>

      {/* REAL-WORLD TECHNOLOGY STATISTICS */}
      <section className="statistics-section">
        <div className="statistics-heading">
          <p className="eyebrow">THE DIGITAL LANDSCAPE</p>
          <h2>Numbers Shaping Our Connected World.</h2>
          <p>
            Technology is changing how the world connects,
            communicates, and protects information.
          </p>
        </div>

        <div className="statistics-grid">
          <article className="stat-card">
            <span className="stat-icon">◎</span>
            <h3 className="stat-number">6.3 Billion</h3>
            <p>People using the Internet worldwide</p>
            <span className="stat-detail">76% of the global population · 2026</span>
            <a
              href="https://www.itu.int/en/mediacentre/Pages/PR-2026-11-03-Facts-and-Figures.aspx"
              target="_blank"
              rel="noreferrer"
            >
              Source: ITU 2026 →
            </a>
          </article>

          <article className="stat-card">
            <span className="stat-icon">◇</span>
            <h3 className="stat-number">$4.44 Million</h3>
            <p>Global average cost of a data breach</p>
            <span className="stat-detail">IBM Cost of a Data Breach · 2025</span>
            <a
              href="https://www.ibm.com/think/x-force/2025-cost-of-a-data-breach-navigating-ai"
              target="_blank"
              rel="noreferrer"
            >
              Source: IBM 2025 →
            </a>
          </article>
        </div>
      </section>

      {/* ANIMATED DATA VISUALIZATION */}
      <section className="data-section">
        <div className="data-heading">
          <p className="eyebrow">CYBERSECURITY INSIGHTS</p>
          <h2>Understanding the Cost of Data Breaches.</h2>
          <p>
            A look at the global average cost of a data breach
            over time, based on IBM's published research.
          </p>
        </div>

        <div className="chart-card">
          <div className="chart-top">
            <div>
              <span className="chart-label">GLOBAL AVERAGE</span>
              <h3>Data Breach Cost</h3>
            </div>
            <span className="chart-unit">USD MILLIONS</span>
          </div>

          <div className="chart-visual">
            <div className="chart-y-labels">
              <span>$5M</span>
              <span>$4M</span>
              <span>$3M</span>
            </div>

            <svg
              className="trend-chart"
              viewBox="0 0 700 240"
              role="img"
              aria-label="Global average data breach cost trend from 2018 to 2025"
            >
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#36a9e1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#36a9e1" stopOpacity="0" />
                </linearGradient>
              </defs>

              <line x1="0" y1="35" x2="700" y2="35" className="chart-gridline" />
              <line x1="0" y1="115" x2="700" y2="115" className="chart-gridline" />
              <line x1="0" y1="195" x2="700" y2="195" className="chart-gridline" />

              <path
                d="M 20 160 L 110 154 L 200 160 L 290 125 L 380 110 L 470 94 L 560 60 L 680 95 L 680 210 L 20 210 Z"
                className="chart-area"
              />

              <path
                d="M 20 160 L 110 154 L 200 160 L 290 125 L 380 110 L 470 94 L 560 60 L 680 95"
                className="chart-line"
              />

              <circle cx="680" cy="95" r="6" className="chart-point" />
            </svg>
          </div>

          <div className="chart-years">
            <span>2018</span>
            <span>2019</span>
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
            <span>2025</span>
          </div>

          <p className="chart-caption">
            Source: IBM Cost of a Data Breach Report 2025.
            Historical figures are global averages in USD millions.
          </p>

          <a
            className="source-link"
            href="https://www.ibm.com/think/x-force/2025-cost-of-a-data-breach-navigating-ai"
            target="_blank"
            rel="noreferrer"
          >
            Read the research →
          </a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="home-cta">
        <p className="eyebrow">THE NEXT CHAPTER STARTS HERE</p>
        <h2>Innovation Starts With Possibility.</h2>
        <p>
          Discover our vision for a smarter, safer,
          and more connected digital future.
        </p>
        <Link to="/about" className="primary-button">
          Get to Know NexaTech →
        </Link>
      </section>

    </div>
  );
}

export default Home;
