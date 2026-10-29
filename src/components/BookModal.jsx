import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../data';

export default function BookModal({ book, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (book) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [book, onClose]);

  if (!book) return null;

  const isUpcoming = book.status === 'upcoming';
  const orderFormUrl = SITE_CONFIG.bookOrderForm || 'https://forms.gle/tFu77RJ6N88t9ijY8';
  const preorderWhatsappUrl = `${SITE_CONFIG.whatsappBase}?text=${encodeURIComponent(
    `Hello Netrava Publications, I would like to pre-order / reserve a copy of the upcoming book: "${book.title}" (Author: ${book.author || 'Editorial Bench'}).`
  )}`;

  return (
    <div 
      className="modal-backdrop active" 
      role="dialog" 
      aria-modal="true" 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-box">
        <div className="modal-header">
          <h3>{isUpcoming ? 'Upcoming Publication Preview' : 'Publication Details'}</h3>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div>
            <img src={book.cover || '/assets/images/books/book_1.jpg'} alt={book.title || 'Book Cover'} className="modal-book-img" />
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
                <strong>{isUpcoming ? 'Status' : 'ISBN Number'}</strong>
                <span>{isUpcoming ? (book.expectedRelease || 'In Production') : (book.isbn || 'Registered ISBN')}</span>
              </div>
              <div className="meta-item">
                <strong>Edition</strong>
                <span>{book.edition || (isUpcoming ? '1st Edition (Forthcoming)' : 'Current Edition')}</span>
              </div>
              <div className="meta-item">
                <strong>Extent</strong>
                <span>{book.pages ? `${book.pages} Pages` : (isUpcoming ? 'Comprehensive Treatise' : 'Treatise Volume')}</span>
              </div>
            </div>

            <p className="modal-synopsis">{book.synopsis || 'Comprehensive peer-reviewed academic publication.'}</p>

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
          </div>
        </div>

        <div className="modal-footer">
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
          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
              Close
            </button>
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
    </div>
  );
}
