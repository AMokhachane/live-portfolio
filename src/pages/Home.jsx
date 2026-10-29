import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, MessageSquare, CheckCircle2, Globe, Code, Laptop } from 'lucide-react';

const Home = () => {
  return (
    <div className="hero-container">
      {/* Glow Backdrops */}
      <div className="glow-orange"></div>
      <div className="glow-cyan"></div>

      <div className="hero-content-wrapper">
        {/* Left Column: Headline & Info */}
        <div className="hero-left">
          <div className="category-badge">
            <span className="badge-dot"></span>
            <span>WEBSITES • APPLICATIONS • WORKPLACE IT</span>
          </div>

          <h1 className="hero-headline">
            We build websites,<br />
            <span className="text-orange">apps </span>
            <span className="text-white">&amp; </span>
            <span className="text-cyan">IT systems</span><br />
            that fuel growth.
          </h1>

          <p className="hero-description">
            From bespoke web applications and high-conversion websites to Microsoft 365, workstation setups, domains, and polished corporate assets.
          </p>

          <div className="hero-button-group">
            <NavLink to="/services" className="btn-explore">
              Explore Services <ArrowRight size={18} />
            </NavLink>
            <NavLink to="/contact" className="btn-consult">
              <MessageSquare size={16} /> Schedule Consultation
            </NavLink>
          </div>

          <div className="hero-checklist">
            <div className="checklist-item">
              <CheckCircle2 size={16} className="icon-orange" />
              <span>Zero Downtime IT</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={16} className="icon-cyan" />
              <span>Full-Stack Modern Apps</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={16} className="icon-purple" />
              <span>Complete Office 365</span>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Visual */}
        <div className="hero-right">
          <div className="floating-badge">
            <span>✨ Modern Stack</span>
          </div>

          <div className="terminal-card">
            <div className="terminal-header">
              <div className="mac-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="status-code">
                system_status: <span className="active-text">ACTIVE</span>
              </div>
            </div>

            <div className="terminal-body">
              {/* Row 1 */}
              <div className="service-row">
                <div className="icon-box orange-box">
                  <Globe size={18} />
                </div>
                <div className="row-details">
                  <h4>Custom Web &amp; Portal</h4>
                  <p>Speed 99/100 • SEO Ready</p>
                </div>
                <span className="pill pill-live">Live</span>
              </div>

              {/* Row 2 */}
              <div className="service-row">
                <div className="icon-box cyan-box">
                  <Code size={18} />
                </div>
                <div className="row-details">
                  <h4>Full-Stack Web App</h4>
                  <p>React + API Integration</p>
                </div>
                <span className="pill pill-configured">Configured</span>
              </div>

              {/* Row 3 */}
              <div className="service-row">
                <div className="icon-box green-box">
                  <Laptop size={18} />
                </div>
                <div className="row-details">
                  <h4>Office 365 &amp; Setup</h4>
                  <p>Laptops, Domains &amp; Mail</p>
                </div>
                <span className="pill pill-ready">Ready</span>
              </div>
            </div>

            <div className="terminal-footer">
              <span>Turnkey Tech Package</span>
              <NavLink to="/contact" className="quote-link">
                Request Quote →
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;