import React from 'react';
import { SITE_CONFIG } from '../data';

export default function Home({ setActivePage }) {
  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section - Simple, Minimalist & Statement-Based */}
      <section className="hero-section">
        <div className="hero-bg-overlay" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />

        <div className="container">
          <div className="hero-simple-wrap">
            {/* Top Motto Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>Knowledge • Research • Innovation</span>
            </div>

            {/* Main Title Line */}
            <h1 className="hero-title">
              NETRAVA ACADEMIC <span className="gold-gradient-text">PUBLICATIONS</span>
            </h1>

            {/* Subtitle Line */}
            <p className="hero-subtitle">
              Excellence in Legal, Academic & Research Publishing
            </p>

            {/* Elegant Gold Divider Line */}
            <div className="hero-gold-divider">
              <span className="divider-line" />
              <span className="divider-diamond">◆</span>
              <span className="divider-line" />
            </div>

            {/* Core Mission Statement Lines */}
            <p className="hero-desc">
              Dedicated to advancing scholarship through peer-reviewed academic treatises, authoritative judicial compendiums, and higher education textbooks. Netrava connects researchers, legal scholars, and institutions with the knowledge that drives global academic innovation.
            </p>

            {/* Simple Action Buttons */}
            <div className="hero-buttons">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => handleNavigate('products')}
              >
                <span>Explore Full Catalogue</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <a
                href={SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy btn-lg"
                title="Open Chapter Submission Form in New Tab"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA', '_blank', 'noopener,noreferrer');
                }}
              >
                <span>📄 Chapter Submission ↗</span>
              </a>

              <a
                href={`${SITE_CONFIG.whatsappBase}?text=Hello%20Netrava%20Publications,%20I%20would%20like%20to%20inquire%20about%20publishing%20or%20ordering.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <span>💬 WhatsApp Desk</span>
              </a>

              <a href={`tel:${SITE_CONFIG.phone}`} className="btn btn-outline-light btn-lg">
                <span>📞 {SITE_CONFIG.phone}</span>
              </a>
            </div>

            {/* Live Metrics Row (Commented Out)
            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <strong>17+</strong>
                <span>Published Treatises</span>
              </div>
              <div className="hero-stat-item">
                <strong>120+</strong>
                <span>University Libraries</span>
              </div>
              <div className="hero-stat-item">
                <strong>50k+</strong>
                <span>Scholarly Readers</span>
              </div>
              <div className="hero-stat-item">
                <strong>100%</strong>
                <span>Peer-Reviewed</span>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Creed & Statement Banner with Gold Border Lines */}
      <section className="creed-banner-section">
        <div className="creed-container">
          <span className="creed-tagline">— Knowledge • Research • Innovation —</span>
          <h2 className="creed-statement">
            "Fostering rigorous scholarship, ethical academic publishing, and peer-reviewed excellence across India."
          </h2>
          <p className="creed-subtext">
            Netrava Academic Publications stands at the intersection of scholarly inquiry and contemporary academic progress, empowering authors and researchers with an uncompromising commitment to editorial integrity and pan-India reach.
          </p>
        </div>
      </section>

      {/* 3 Academic Publishing Focus Lines / Areas */}
      <section className="focus-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Scope</span>
            <h2 className="section-title">Publishing Across Key Disciplines</h2>
            <p className="section-desc">
              We publish peer-reviewed treatises, reference texts, and research across fundamental academic fields.
            </p>
          </div>

          <div className="focus-grid">
            {/* Focus 1: Law */}
            <div className="focus-card">
              <div className="focus-num">01 / LAW & JURISPRUDENCE</div>
              <h3>Legal & Judicial Treatises</h3>
              <p>
                Authoritative commentaries, landmark case law digests, procedural manuals, and bar examination references authored by senior jurists, advocates, and esteemed law faculty.
              </p>
              <button
                type="button"
                className="focus-link-btn"
                onClick={() => handleNavigate('products')}
              >
                <span>Explore Legal Catalogue</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Focus 2: Research */}
            <div className="focus-card">
              <div className="focus-num">02 / SCHOLARLY RESEARCH</div>
              <h3>Monographs & Dissertations</h3>
              <p>
                Double-blind peer-reviewed academic monographs, doctoral thesis adaptations, and interdisciplinary research publications adhering to international citation standards.
              </p>
              <a
                href={SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA'}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-link-btn"
                title="Open Chapter Submission Form in New Tab"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA', '_blank', 'noopener,noreferrer');
                }}
              >
                <span>Submit Chapter Proposal ↗</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Focus 3: Higher Education */}
            <div className="focus-card">
              <div className="focus-num">03 / HIGHER EDUCATION</div>
              <h3>Textbooks & Reference Manuals</h3>
              <p>
                Curriculum-aligned reference manuals and comprehensive textbooks designed for university departments, professional colleges, and institutional libraries nationwide.
              </p>
              <button
                type="button"
                className="focus-link-btn"
                onClick={() => handleNavigate('products')}
              >
                <span>View Higher Education Texts</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Our Academic Standards</span>
            <h2 className="section-title">Built on Rigorous Institutional Foundations</h2>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-wrap">⚖️</div>
              <h3>Rigorous Peer Review</h3>
              <p>Every treatise is evaluated through double-blind peer reviews by eminent jurists and university scholars.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-wrap">🌐</div>
              <h3>Pan-India Distribution</h3>
              <p>Reaching bar associations, law universities, colleges, and academic libraries with expedited delivery.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-wrap">✍️</div>
              <h3>Author-Centric Royalties</h3>
              <p>Transparent publishing contracts, professional typesetting, ISBN registration, and fair author royalties.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-wrap">📖</div>
              <h3>Archival Print Quality</h3>
              <p>Acid-free archival papers, precision offset printing, and deluxe hardbound gold foil embossing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial & Publishing Workflow (4 Steps) */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Publish With Us</span>
            <h2 className="section-title">Seamless Publishing in 4 Steps</h2>
            <p className="section-desc">
              How Netrava Academic Publications transforms your academic manuscript into a nationally recognized, distributed scholarly work.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Manuscript Submission</h3>
              <p>Submit your proposal, chapter synopsis, and academic curriculum vitae for initial editorial evaluation.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Double-Blind Review</h3>
              <p>Domain experts evaluate the manuscript for original contribution, empirical accuracy, and citation standards.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Typesetting & ISBN</h3>
              <p>Professional LaTeX/InDesign formatting, indexing, proofreading, ISBN assignment, and cover design.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>National Distribution</h3>
              <p>Archival printing and pan-India distribution to university libraries, institutional faculties, and book depots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Manuscript Submission CTA Box */}
      <section className="author-cta-section">
        <div className="container">
          <div className="author-cta-box">
            <div className="author-cta-text">
              <h2>Have an Academic Manuscript Ready to Publish?</h2>
              <p>
                Whether it is a legal treatise, doctoral thesis adaptation, psychological research, or university textbook, partner with Netrava Academic Publications for prestigious dissemination.
              </p>
            </div>
            <div className="author-cta-actions">
              <a
                href={SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                title="Open Chapter Submission Form in New Tab"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA', '_blank', 'noopener,noreferrer');
                }}
              >
                Chapter Submission ↗
              </a>
              <button
                type="button"
                className="btn btn-outline-light btn-lg"
                onClick={() => handleNavigate('products')}
              >
                Browse Catalogue
              </button>
              <a
                href={`${SITE_CONFIG.whatsappBase}?text=Hello%20Netrava%20Editorial%20Team,%20I%20have%20a%20manuscript%20proposal%20to%20discuss.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <span>WhatsApp Editorial Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact & Library Inquiries Strip */}
      <section style={{ background: '#ffffff', padding: '60px 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '6px' }}>Need Assistance or Bulk Library Orders?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Connect directly with our Delhi headquarters for proforma invoices and academic discounts.</p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn btn-navy">📞 Call: {SITE_CONFIG.phone}</a>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleNavigate('contact')}
            >
              Contact Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
