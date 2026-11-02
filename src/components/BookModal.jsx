import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data';

export default function BookModal({ book, onClose }) {
  const [activeSide, setActiveSide] = useState('front'); // 'front' | 'back' | 'both'
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveSide('front');
    setIsLightboxOpen(false);
  }, [book]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    if (book) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [book, isLightboxOpen, onClose]);

  if (!book) return null;

  const isUpcoming = book.status === 'upcoming';
  const hasBackCover = Boolean(book.backCover);
  const currentImgUrl = activeSide === 'back' && hasBackCover ? book.backCover : (book.cover || '/assets/images/books/book_1.jpg');
  const orderFormUrl = SITE_CONFIG.bookOrderForm || 'https://forms.gle/tFu77RJ6N88t9ijY8';
  const chapterSubmissionUrl = book.chapterSubmissionUrl || SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA';
  const preorderWhatsappUrl = `${SITE_CONFIG.whatsappBase}?text=${encodeURIComponent(
    `Hello Netrava Publications, I would like to pre-order / reserve a copy of "${book.title}" (ISBN: ${book.isbn || 'N/A'}${book.ebookPrice ? `, Pricing: E-Book ${book.ebookPrice} / Physical (2 Copies) ${book.physicalPrice}` : ''}).`
  )}`;

  return (
    <div 
      className="modal-backdrop active" 
      role="dialog" 
      aria-modal="true" 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={`modal-box ${hasBackCover && activeSide === 'both' ? 'modal-box-wide' : ''}`}>
        <div className="modal-header">
          <h3>{isUpcoming ? 'Upcoming Publication Preview' : 'Publication Details'}</h3>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className={`modal-body ${hasBackCover && activeSide === 'both' ? 'modal-body-both' : ''}`}>
          {/* Cover Display Column */}
          <div className="modal-cover-column">
            {hasBackCover && (
              <div className="modal-cover-nav">
                <button
                  type="button"
                  className={`modal-cover-tab ${activeSide === 'front' ? 'active' : ''}`}
                  onClick={() => setActiveSide('front')}
                >
                  📖 Front
                </button>
                <button
                  type="button"
                  className={`modal-cover-tab ${activeSide === 'back' ? 'active' : ''}`}
                  onClick={() => setActiveSide('back')}
                >
                  🔄 Back
                </button>
                <button
                  type="button"
                  className={`modal-cover-tab ${activeSide === 'both' ? 'active' : ''}`}
                  onClick={() => setActiveSide('both')}
                >
                  ✨ Both Sides
                </button>
              </div>
            )}

            {hasBackCover && activeSide === 'both' ? (
              <div className="modal-both-covers-grid">
                <div 
                  className="modal-cover-subcard"
                  onClick={() => { setActiveSide('front'); setIsLightboxOpen(true); }}
                  title="Click to enlarge Front Cover"
                  style={{ cursor: 'zoom-in' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="modal-cover-label">Front Cover</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--gold-dark)', fontWeight: 600 }}>🔍 Enlarge</span>
                  </div>
                  <img
                    src={book.cover || '/assets/images/books/book_1.jpg'}
                    alt={`${book.title} - Front Cover`}
                    className="modal-book-img"
                  />
                </div>
                <div 
                  className="modal-cover-subcard"
                  onClick={() => { setActiveSide('back'); setIsLightboxOpen(true); }}
                  title="Click to enlarge Back Cover"
                  style={{ cursor: 'zoom-in' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="modal-cover-label">Back Cover</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--gold-dark)', fontWeight: 600 }}>🔍 Enlarge</span>
                  </div>
                  <img
                    src={book.backCover}
                    alt={`${book.title} - Back Cover`}
                    className="modal-book-img"
                  />
                </div>
              </div>
            ) : (
              <div className="modal-single-cover-wrap">
                <div 
                  className="modal-active-img-wrap"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Click to view big image"
                  style={{ cursor: 'zoom-in' }}
                >
                  <img
                    src={currentImgUrl}
                    alt={`${book.title} - ${activeSide === 'back' ? 'Back Cover' : 'Front Cover'}`}
                    className="modal-book-img"
                  />
                  <div className="modal-zoom-hint">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <span>Click to view big</span>
                  </div>
                  {hasBackCover && (
                    <span className="modal-flip-badge">
                      {activeSide === 'back' ? 'Back Cover' : 'Front Cover'}
                    </span>
                  )}
                </div>

                {hasBackCover && (
                  <div className="modal-thumbs-row">
                    <button
                      type="button"
                      className={`modal-thumb-btn ${activeSide === 'front' ? 'active' : ''}`}
                      onClick={() => setActiveSide('front')}
                      title="Switch to Front Cover"
                    >
                      <img src={book.cover || '/assets/images/books/book_1.jpg'} alt="Front" />
                      <span>Front</span>
                    </button>
                    <button
                      type="button"
                      className={`modal-thumb-btn ${activeSide === 'back' ? 'active' : ''}`}
                      onClick={() => setActiveSide('back')}
                      title="Switch to Back Cover"
                    >
                      <img src={book.backCover} alt="Back" />
                      <span>Back</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="modal-details">
            {isUpcoming && (
              <div style={{ background: '#fffbeb', border: '1px solid #fde68a', color: '#92400e', padding: '12px 14px', borderRadius: '8px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.25rem' }}>🚀</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem' }}>Forthcoming Publication (In Press)</strong>
                  <span style={{ fontSize: '0.82rem', color: '#b45309' }}>
                    {book.expectedRelease ? `Expected Release: ${book.expectedRelease}` : 'Currently in editorial typesetting & peer-review. Advance reservations open.'}
                  </span>
                </div>
              </div>
            )}

            <h4>{book.title || 'Publication Details'}</h4>
            {book.subtitle && <p className="modal-subtitle">{book.subtitle}</p>}

            <div className="modal-meta-grid">
              <div className="meta-item">
                <strong>Author / Editor</strong>
                <span>{book.author || 'Netrava Editorial Bench'}</span>
              </div>
              <div className="meta-item">
                <strong>ISBN Number</strong>
                <span style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>
                  {book.isbn || (isUpcoming ? 'In Registration' : 'Registered ISBN')}
                </span>
              </div>
              <div className="meta-item">
                <strong>Edition</strong>
                <span>{book.edition || (isUpcoming ? '1st Edition (Forthcoming)' : 'Current Edition')}</span>
              </div>
              <div className="meta-item">
                <strong>{isUpcoming ? 'Release Schedule' : 'Extent'}</strong>
                <span>{isUpcoming ? (book.expectedRelease || 'Forthcoming') : (book.pages ? `${book.pages} Pages` : 'Treatise Volume')}</span>
              </div>
            </div>

            <p className="modal-synopsis">{book.synopsis || 'Comprehensive peer-reviewed academic publication.'}</p>

            {book.pricing && book.pricing.length > 0 && (
              <div className="modal-pricing-box">
                <h5>Format & Ordering Options</h5>
                <div className="modal-pricing-grid">
                  {book.pricing.map((p, idx) => (
                    <div key={idx} className={`modal-pricing-item ${idx === 1 ? 'featured-tier' : ''}`}>
                      <div className="tier-info">
                        <span className="tier-format">{p.format}</span>
                        {p.note && <span className="tier-note">{p.note}</span>}
                      </div>
                      <div className="tier-price-tag">{p.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {book.highlights && book.highlights.length > 0 && (
              <div className="modal-highlights">
                <h5>Key Treaties & Inclusions</h5>
                <ul>
                  {book.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Chapter Submission Option */}
            <div className="modal-chapter-callout">
              <div className="chapter-callout-info">
                <span className="chapter-badge">Call for Chapters</span>
                <strong>Submit Your Book Chapter</strong>
                <p>Contributing authors and researchers can submit manuscripts for inclusion in this volume.</p>
              </div>
              <a 
                href={chapterSubmissionUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-navy btn-sm"
                title="Open Chapter Submission Form"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(chapterSubmissionUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                📝 Submit Chapter ↗
              </a>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {book.ebookPrice && book.physicalPrice ? (
            <div className="modal-footer-pricing">
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px', fontWeight: 600 }}>
                {isUpcoming ? 'Pre-Order Formats & Pricing:' : 'Available Pricing Editions:'}
              </span>
              <div className="modal-pricing-pills-row">
                <div className="modal-pill-tag">
                  <span className="pill-lbl">📱 E-Book:</span>
                  <span className="pill-val">{book.ebookPrice}</span>
                </div>
                <div className="modal-pill-tag highlight">
                  <span className="pill-lbl">📦 Physical (2 Copies):</span>
                  <span className="pill-val">{book.physicalPrice}</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>
                {isUpcoming ? 'Estimated / Pre-Order Price:' : 'Price per copy:'}
              </span>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
                {book.price || (isUpcoming ? 'To Be Announced' : 'Inquire')}
              </span>
              {book.originalPrice && (
                <span style={{ fontSize: '0.95rem', color: '#94a3b8', textDecoration: 'line-through', marginLeft: '8px' }}>
                  {book.originalPrice}
                </span>
              )}
            </div>
          )}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
              Close
            </button>
            <a 
              href={chapterSubmissionUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline btn-sm"
              style={{ borderColor: 'var(--primary-navy)', color: 'var(--primary-navy)', fontWeight: 600 }}
              title="Submit Chapter Google Form (Opens in New Tab)"
              onClick={(e) => {
                e.preventDefault();
                window.open(chapterSubmissionUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              📝 Submit Chapter ↗
            </a>
            {isUpcoming ? (
              <a 
                href={preorderWhatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm"
                style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)', color: '#FFFFFF', border: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                title="Reserve advance copy on WhatsApp"
              >
                🚀 Pre-Order / Inquire on WhatsApp ↗
              </a>
            ) : (
              <a 
                href={orderFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
                title="Open Book Order Google Form in New Tab"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(orderFormUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                📋 Buy Book (Order Form) ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Enlarged Big View Lightbox */}
      {isLightboxOpen && (
        <div 
          className="lightbox-backdrop" 
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lightbox-title-wrap">
                <h4>{book.title}</h4>
                <span className="lightbox-side-badge">
                  {activeSide === 'back' ? 'Back Cover' : 'Front Cover'}
                </span>
              </div>
              <div className="lightbox-actions">
                {hasBackCover && (
                  <div className="lightbox-switch-btn-wrap">
                    <button
                      type="button"
                      className={`lightbox-nav-btn ${activeSide === 'front' ? 'active' : ''}`}
                      onClick={() => setActiveSide('front')}
                    >
                      📖 Front Cover
                    </button>
                    <button
                      type="button"
                      className={`lightbox-nav-btn ${activeSide === 'back' ? 'active' : ''}`}
                      onClick={() => setActiveSide('back')}
                    >
                      🔄 Back Cover
                    </button>
                  </div>
                )}
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close enlarged view"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="lightbox-body">
              <img
                src={currentImgUrl}
                alt={`${book.title} - Zoomed Big View`}
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-footer">
              <span>Click outside image or press ESC to exit enlarged view</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
