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

  const orderFormUrl = SITE_CONFIG.bookOrderForm || 'https://forms.gle/tFu77RJ6N88t9ijY8';

  return (
    <div 
      className="modal-backdrop active" 
      role="dialog" 
      aria-modal="true" 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-box">
        <div className="modal-header">
          <h3>Publication Details</h3>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div>
            <img src={book.cover || '/assets/images/books/book_1.jpg'} alt={book.title || 'Book Cover'} className="modal-book-img" />
          </div>
          <div className="modal-details">
            <h4>{book.title || 'Publication Details'}</h4>
            {book.subtitle && <p className="modal-subtitle">{book.subtitle}</p>}

            <div className="modal-meta-grid">
              <div className="meta-item">
                <strong>Author / Editor</strong>
                <span>{book.author || 'Netrava Editorial Bench'}</span>
              </div>
              <div className="meta-item">
                <strong>ISBN Number</strong>
                <span>{book.isbn || 'Registered ISBN'}</span>
              </div>
              <div className="meta-item">
                <strong>Edition</strong>
                <span>{book.edition || 'Current Edition'}</span>
              </div>
              <div className="meta-item">
                <strong>Extent</strong>
                <span>{book.pages ? `${book.pages} Pages` : 'Treatise Volume'}</span>
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
              Price per copy:
            </span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
              {book.price}
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
          </div>
        </div>
      </div>
    </div>
  );
}
