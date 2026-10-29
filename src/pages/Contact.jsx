import React from 'react';
import { SITE_CONFIG } from '../data';

export default function Contact() {
  return (
    <div>
      {/* Page Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-navy-dark) 0%, var(--primary-navy) 100%)', color: '#fff', padding: '75px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', background: 'rgba(197, 160, 89, 0.2)' }}>
            Get In Touch
          </span>
          <h1 style={{ color: '#fff', fontSize: '2.8rem', marginBottom: '12px' }}>
            Contact Our Editorial Desk
          </h1>
          <p style={{ color: '#cbd5e1', maxWidth: '680px', margin: '0 auto', fontSize: '1.15rem' }}>
            Whether you are an author seeking manuscript evaluation, an institution requesting library supply, or a reader placing an order, we are here to assist.
          </p>
        </div>
      </section>

      {/* Central Contact Information */}
      <section className="contact-section">
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="contact-info-card" style={{ maxWidth: '100%', padding: '50px 45px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--gold-light)', background: 'rgba(197, 160, 89, 0.2)' }}>
              Central Secretariat
            </span>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '12px' }}>
              Headquarters & Distribution Hub
            </h2>
            <p style={{ color: '#cbd5e1', marginBottom: '35px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Connect with our publishing and editorial team directly. For rapid responses on author proposals or retail book dispatch, reach us on WhatsApp or telephone.
            </p>

            {/* Address */}
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <h4>Registered Address</h4>
                <p>{SITE_CONFIG.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-text">
                <h4>Editorial & Order Hotline</h4>
                <p><a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a></p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-text">
                <h4>Manuscript Submissions & Inquiries</h4>
                <p><a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
                <p><a href={`mailto:${SITE_CONFIG.altEmail}`} style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{SITE_CONFIG.altEmail}</a></p>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-item">
              <div className="contact-item-icon">🕒</div>
              <div className="contact-item-text">
                <h4>Operating Hours</h4>
                <p>{SITE_CONFIG.workingHours}</p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a 
                href={SITE_CONFIG.whatsappBase} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-whatsapp btn-lg"
                style={{ flex: '1 1 240px' }}
              >
                <span>💬 Instant Chat on WhatsApp</span>
              </a>
              <a 
                href={`tel:${SITE_CONFIG.phone}`} 
                className="btn btn-outline-light btn-lg"
                style={{ flex: '1 1 240px' }}
              >
                <span>📞 Call: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
