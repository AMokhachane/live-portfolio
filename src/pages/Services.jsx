import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Code, Globe, Laptop, Cpu } from 'lucide-react';

const Services = () => {
  // Main featured services matching your core offerings
  const primaryServices = [
    {
      id: '01',
      title: 'Digital Workspace Setup',
      description: 'Domain registration, custom business emails, interactive email signatures, Google Search & Maps profiles and social media business page setup.',
      tag: 'Domains • Business Mail • Search Listings',
      colorClass: 'orange-theme',
      linkText: 'Explore Workspace Setup',
      icon: <Globe size={24} />
    },
    {
      id: '02',
      title: 'Websites & Brand Identity',
      description: 'Custom websites, web applications, logo design, business cards, invoice templates, letterheads, and brand assets.',
      tag: 'Web Dev • Logos • Print & Digital Assets',
      colorClass: 'cyan-theme',
      linkText: 'Explore Software & Design',
      icon: <Code size={24} />
    },
    {
      id: '03',
      title: 'Workplace IT & Cloud',
      description: 'Microsoft 365 licensing & migrations, Windows activation, cloud storage setup (OneDrive/SharePoint), and account security.',
      tag: 'Microsoft 365 • Cloud • Security',
      colorClass: 'green-theme',
      linkText: 'Explore IT Solutions',
      icon: <Laptop size={24} />
    },
    {
      id: '04',
      title: 'Hardware & Maintenance',
      description: 'PC repairs, system diagnostics, workstation setup, virus removal, hardware upgrades, and data recovery.',
      tag: 'Repairs • Diagnostics • Upgrades',
      colorClass: 'orange-theme',
      linkText: 'Explore Hardware Support',
      icon: <Cpu size={24} />
    }
  ];

  return (
    <div className="services-container">
      {/* Background Glow Accents */}
      <div className="glow-orange"></div>
      <div className="glow-cyan"></div>

      <div className="services-content-wrapper">
        
        {/* Header Section */}
        <div className="services-header">
          <div className="category-badge">
            <span className="badge-dot"></span>
            <span>WHAT WE DO</span>
          </div>

          <h1 className="services-headline">
            Technology built around the<br />
            <span className="text-orange">way </span>
            <span className="text-white">your business </span>
            <span className="text-cyan">works.</span>
          </h1>

          <p className="services-description">
            We combine strategic technical guidance, software engineering, and workspace IT implementation so technology solves real operational challenges instead of creating complexity.
          </p>
        </div>

        {/* Primary Services Grid */}
        <div className="primary-services-grid">
          {primaryServices.map((service) => (
            <div key={service.id} className={`service-card ${service.colorClass}`}>
              <div className="card-top">
                <span className="service-number">{service.id}</span>
                <div className="service-card-icon">{service.icon}</div>
              </div>

              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              
              <div className="card-tag">
                <span className="mini-dot"></span>
                <span>{service.tag}</span>
              </div>

              <NavLink to="/contact" className="card-link">
                {service.linkText} <ArrowRight size={16} />
              </NavLink>
            </div>
          ))}
        </div>

        {/* Call To Action Footer Banner */}
        <div className="services-cta-banner">
          <div className="cta-content">
            <h3>Not sure where to start or what you need?</h3>
            <p>Schedule a quick technical consultation to map out your digital requirements.</p>
          </div>
          <NavLink to="/contact" className="btn-explore">
            Schedule Consultation <ArrowRight size={18} />
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Services;