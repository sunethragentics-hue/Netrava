import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data';

export default function Header({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Our Products' },
    { 
      id: 'chapter-submission', 
      label: 'Chapter Submission', 
      isExternal: true, 
      href: SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA' 
    },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Main Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar" aria-label="Main Navigation">
            {/* Logo */}
            <a 
              href="#home" 
              className="brand-logo-wrap" 
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            >
              <img src="/assets/images/logo.png" alt="Netrava Academic Publications Logo" className="brand-logo-img" />
            </a>

            {/* Desktop Menu */}
            <ul className="nav-menu">
              {navItems.map(item => (
                <li key={item.id}>
                  {item.isExternal ? (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="nav-link"
                      title="Open Chapter Submission Form in New Tab"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(item.href, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a 
                      href={`#${item.id}`} 
                      className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleNav(item.id); }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="nav-actions">
              <button 
                type="button" 
                className="btn btn-outline btn-sm"
                onClick={() => handleNav('products')}
              >
                Explore Books
              </button>
              <a 
                href={`${SITE_CONFIG.whatsappBase}?text=Hello%20Netrava%20Academic%20Publications,%20I%20would%20like%20to%20inquire%20about%20your%20publications.`}
                target="_blank" 
                rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              type="button"
              className="mobile-toggle" 
              onClick={() => setDrawerOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`drawer-overlay ${drawerOpen ? 'active' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside className={`mobile-drawer ${drawerOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <img src="/assets/images/logo.png" alt="Netrava Logo" style={{ height: '48px' }} />
          <button 
            type="button"
            className="drawer-close" 
            onClick={() => setDrawerOpen(false)}
          >
            &times;
          </button>
        </div>
        <ul className="drawer-menu">
          {navItems.map(item => (
            <li key={item.id}>
              {item.isExternal ? (
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="drawer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setDrawerOpen(false);
                    window.open(item.href, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {item.label} ↗
                </a>
              ) : (
                <a 
                  href={`#${item.id}`} 
                  className={`drawer-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNav(item.id); }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a 
            href={SITE_CONFIG.whatsappBase} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-whatsapp" 
            style={{ width: '100%' }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
