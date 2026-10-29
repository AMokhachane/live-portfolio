import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MessageSquare, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  // Filter category state
  const [activeFilter, setActiveFilter] = useState('ALL');

  // State to control how many projects are visible (starts at 6)
  const [visibleCount, setVisibleCount] = useState(6);

  // State to toggle the testimonials section open/closed
  const [showTestimonials, setShowTestimonials] = useState(false);

  // Pure visual image dataset (ready for your Cloudinary image links)
  const allProjects = [
    {
      id: 1,
      category: 'APPLICATIONS',
      image: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1730705059/yyp46fk7opgmav2oppdn.jpg'
    },
    {
      id: 2,
      category: 'WEBSITES',
      image: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1730705059/yyp46fk7opgmav2oppdn.jpg'
    },
    {
      id: 3,
      category: 'WEBSITES',
      image: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1730705059/yyp46fk7opgmav2oppdn.jpg'
    },
    {
      id: 4,
      category: 'BRANDING',
      image: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1730705059/yyp46fk7opgmav2oppdn.jpg'
    },
    {
      id: 5,
      category: 'IT SETUP',
      image: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1730705059/yyp46fk7opgmav2oppdn.jpg'
    },
    {
      id: 6,
      category: 'IT SETUP',
      image: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1730705059/yyp46fk7opgmav2oppdn.jpg'
    },
    {
      id: 7,
      category: 'APPLICATIONS',
      image: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1730705059/yyp46fk7opgmav2oppdn.jpg'
    },
    {
      id: 8,
      category: 'WEBSITES',
      image: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1730705059/yyp46fk7opgmav2oppdn.jpg'
    }
  ];

  // Testimonials dataset (Ready for you to edit or hook up Cloudinary avatars)
  const testimonials = [
    {
      id: 1,
      avatar: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1792495841/logo_fhvyr0.png',
      review: 'We’ve worked together before — so when it came time to build my brand, there was no question who I’d trust with it. Exceptional attention to detail...',
      clientName: 'FOCAL IMAGE'
    },
    {
      id: 2,
      avatar: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1793174006/Green_and_Yellow_Geometric_Community___Non-Profit_Logo-removebg-preview_bw0m6d.png',
      review: 'Unmatched attention to detail — and what I thought was a complex, difficult project, he handled with grace and turned into pure magic.',
      clientName: 'POINTON'
    },
    {
      id: 3,
      avatar: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1792495841/logo_fhvyr0.png',
      review: 'The system setup and web architecture elevated our entire brand experience across B2C and B2B. The results speak for themselves.',
      clientName: 'CHILLA BEVERAGE CO.'
    }
  ];

  // Filter items based on selection
  const filteredProjects = activeFilter === 'ALL' 
    ? allProjects 
    : allProjects.filter(item => item.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (visibleCount >= filteredProjects.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount(filteredProjects.length);
    }
  };

  const handleFilterClick = (cat) => {
    setActiveFilter(cat);
    setVisibleCount(6);
  };

  return (
    <div className="projects-container">
      {/* Background Glow Accents */}
      <div className="glow-orange"></div>
      <div className="glow-cyan"></div>

      <div className="projects-content-wrapper">
        
        {/* Top Header Section */}
        <div className="projects-header">
          <div className="category-badge">
            <span className="badge-dot"></span>
            <span>OUR WORK &amp; CLIENTS</span>
          </div>

          <h1 className="projects-headline">
            Companies &amp; professionals<br />
            <span className="text-orange">we've worked </span>
            <span className="text-white">&amp; </span>
            <span className="text-cyan">with.</span>
          </h1>

          <p className="projects-description">
            A visual showcase of our custom web applications, websites, branding, and IT projects.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="filter-tabs-container">
          {['ALL', 'WEBSITES', 'APPLICATIONS', 'BRANDING', 'IT SETUP'].map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeFilter === cat ? 'active-filter' : ''}`}
              onClick={() => handleFilterClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pure Visual Gallery Grid */}
        <div className="visual-gallery-grid">
          {displayedProjects.map((project) => (
            <div key={project.id} className="gallery-item-card">
              <span className="gallery-category-tag">{project.category}</span>
              {project.image ? (
                <img src={project.image} alt="Project Preview" className="gallery-real-img" />
              ) : (
                <div className="gallery-placeholder-box">
                  <span>Image Placeholder</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className="load-more-container">
            <button className="btn-load-more" onClick={handleLoadMore}>
              {visibleCount >= filteredProjects.length ? 'SHOW LESS' : 'LOAD MORE'}
            </button>
          </div>
        )}

        {/* Client Experience Section with Toggleable Testimonials */}
        <div className="client-experience-section">
          <div className="client-exp-header">
            <h3>CLIENT EXPERIENCE</h3>
            <p>Collaborating with a wide array of clients spanning different industries, including budding startups and growing businesses.</p>
          </div>

          <div className="client-logos-grid">
            <div className="client-logo-card">
              <img src="https://res.cloudinary.com/drgxphf5l/image/upload/v1793174006/Green_and_Yellow_Geometric_Community___Non-Profit_Logo-removebg-preview_bw0m6d.png" alt="Client 1" className="exp-logo-img" />
            </div>
            <div className="client-logo-card">
              <img src="https://res.cloudinary.com/drgxphf5l/image/upload/v1792495841/logo_fhvyr0.png" alt="Client 2" className="exp-logo-img" />
            </div>
            <div className="client-logo-card">
              <img src="https://res.cloudinary.com/drgxphf5l/image/upload/v1793174006/Green_and_Yellow_Geometric_Community___Non-Profit_Logo-removebg-preview_bw0m6d.png" alt="Client 3" className="exp-logo-img" />
            </div>
            <div className="client-logo-card">
              <img src="https://res.cloudinary.com/drgxphf5l/image/upload/v1793174006/Green_and_Yellow_Geometric_Community___Non-Profit_Logo-removebg-preview_bw0m6d.png" alt="Client 4" className="exp-logo-img" />
            </div>
            <div className="client-logo-card">
              <img src="https://res.cloudinary.com/drgxphf5l/image/upload/v1793174006/Green_and_Yellow_Geometric_Community___Non-Profit_Logo-removebg-preview_bw0m6d.png" alt="Client 5" className="exp-logo-img" />
            </div>
          </div>

          {/* Clickable Testimonials Trigger Button */}
          <div className="testimonials-toggle-container">
            <button 
              className="btn-testimonials-trigger" 
              onClick={() => setShowTestimonials(!showTestimonials)}
            >
              CLIENT TESTIMONIALS {showTestimonials ? <ChevronUp size={16} /> : <span className="arrow-right-symbol">&gt;</span>}
            </button>
          </div>

          {/* Expandable Testimonials Section */}
          {showTestimonials && (
            <div className="testimonials-dropdown-wrapper animate-fade-in">
              <div className="testimonials-header-block">
                <h2 className="testimonials-main-title">
                  <span className="text-orange">Clients</span> Reviews.
                </h2>
                <p className="testimonials-sub-text">Don’t just take my word for it—here’s what some of my clients have to say:</p>
              </div>

              <div className="testimonials-grid">
                {testimonials.map((t) => (
                  <div key={t.id} className="testimonial-card">
                    <div className="testimonial-avatar-box">
                      <img src={t.avatar} alt={t.clientName} className="testimonial-avatar-img" />
                    </div>
                    
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="star-icon" fill="#ff5722" color="#ff5722" />
                      ))}
                    </div>

                    <p className="testimonial-review-text">"{t.review}"</p>
                    
                    <span className="testimonial-read-more">Read More</span>

                    <div className="testimonial-client-name">{t.clientName}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Call To Action Footer Banner */}
        <div className="services-cta-banner">
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>Tell us what you're trying to build and we'll help you execute it seamlessly.</p>
          </div>
          <NavLink to="/contact" className="btn-explore">
            <MessageSquare size={18} /> Schedule Consultation <ArrowRight size={18} />
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Projects;