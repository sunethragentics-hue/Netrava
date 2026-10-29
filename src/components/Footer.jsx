import React from 'react';
import { SITE_CONFIG } from '../data';

export default function Footer({ setActivePage }) {
  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-brand">
            <img src="/assets/images/logo.png" alt="Netrava Academic Publications Logo" className="footer-logo-img" />
            <h3>{SITE_CONFIG.name}</h3>
            <p>
              An esteemed academic publishing enterprise committed to the highest standards of peer review, intellectual integrity, and scholarly dissemination across India and internationally.
            </p>
            <div style={{ fontSize: '0.88rem', color: 'var(--gold-light)' }}>
              {SITE_CONFIG.tagline}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>About Us</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); handleNav('products'); }}>Our Products</a></li>
              <li>
                <a 
                  href={SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Open Chapter Submission Google Form in New Tab"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA', '_blank', 'noopener,noreferrer');
                  }}
                >
                  Chapter Submission ↗
                </a>
              </li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-col">
            <h4>Headquarters</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{SITE_CONFIG.address}</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <a href={`tel:${SITE_CONFIG.phone}`} style={{ color: '#cbd5e1' }}>{SITE_CONFIG.phone}</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: '#cbd5e1' }}>{SITE_CONFIG.email}</a>
            </div>
            <div style={{ marginTop: '16px' }}>
              <a 
                href={SITE_CONFIG.whatsappBase} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-whatsapp btn-sm" 
                style={{ width: '100%' }}
              >
                💬 Instant WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © 2026 <strong>{SITE_CONFIG.name}</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>Privacy Policy</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>Terms of Publication</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Author Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
