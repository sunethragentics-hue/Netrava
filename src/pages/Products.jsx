import React, { useState } from 'react';
import { SITE_CONFIG, PUBLICATIONS } from '../data';

export default function Products({ onOpenBookModal }) {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Safe fallback ensures the page never breaks even if PUBLICATIONS is empty or modified
  const allBooks = Array.isArray(PUBLICATIONS) ? PUBLICATIONS : [];

  const categories = [
    { id: 'all', label: `All Treatises (${allBooks.length})` },
    { id: 'law', label: 'Law & Jurisprudence' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'education', label: 'Education & Reference' },
    { id: 'research', label: 'Research & Governance' }
  ];

  let filteredBooks = allBooks;
  if (currentCategory !== 'all') {
    filteredBooks = filteredBooks.filter(b => b && b.category === currentCategory);
  }
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filteredBooks = filteredBooks.filter(b => 
      b && (
        (b.title || '').toLowerCase().includes(q) ||
        (b.author || '').toLowerCase().includes(q) ||
        (b.isbn || '').toLowerCase().includes(q) ||
        (b.categoryName || '').toLowerCase().includes(q)
      )
    );
  }

  const handleReset = () => {
    setCurrentCategory('all');
    setSearchQuery('');
  };

  return (
    <div>
      {/* Page Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-navy-dark) 0%, var(--primary-navy) 100%)', color: '#fff', padding: '70px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', background: 'rgba(197, 160, 89, 0.2)' }}>
            Complete Catalogue
          </span>
          <h1 style={{ color: '#fff', fontSize: '2.8rem', marginBottom: '12px' }}>
            Our Academic Publications
          </h1>
          <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
            Explore our curated collection of peer-reviewed treatises, legal precedents, and educational textbooks. Order directly or request institutional library supply.
          </p>
        </div>
      </section>

      {/* Catalogue Main Section */}
      <section className="catalogue-section">
        <div className="container">
          {/* Filter & Search Bar */}
          <div className="filter-bar-wrap">
            <div className="filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-btn ${currentCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setCurrentCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gold-dark)', whiteSpace: 'nowrap' }}>
                {filteredBooks.length} Publications Found
              </span>
              <div className="search-input-wrap">
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input" 
                  placeholder="Search by title, author, or ISBN..." 
                />
              </div>
            </div>
          </div>

          {/* Books Grid */}
          {filteredBooks.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '12px', border: '1px dashed var(--border-light)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>📚</div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '8px' }}>
                No publications found
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 20px' }}>
                Try adjusting your search terms or selecting another academic category.
              </p>
              <button type="button" className="btn btn-outline btn-sm" onClick={handleReset}>
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="books-grid">
              {filteredBooks.map((book, idx) => (
                <div key={book.id || idx} className="book-card">
                  <div className="book-cover-wrap">
                    <img 
                      src={book.cover || '/assets/images/books/book_1.jpg'} 
                      alt={book.title || 'Book Cover'} 
                      className="book-cover-img" 
                      loading="lazy" 
                    />
                    {book.badge && <span className="book-badge">{book.badge}</span>}
                  </div>
                  <div className="book-body">
                    <span className="book-category-tag">{book.categoryName || 'Academic Publication'}</span>
                    <h3 className="book-title" title={book.title || 'Untitled'}>{book.title || 'Untitled Publication'}</h3>
                    <p className="book-author">{book.author || 'Netrava Editorial Bench'}</p>

                    <div className="book-meta-row">
                      <div className="book-price-wrap">
                        <span className="book-current-price">{book.price || 'Price on Inquire'}</span>
                        {book.originalPrice && <span className="book-old-price">{book.originalPrice}</span>}
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {book.pages ? `${book.pages} Pages` : 'Treatise'}
                      </span>
                    </div>

                    <div className="book-actions-row">
                      <button 
                        type="button" 
                        className="btn-book-quick" 
                        onClick={() => onOpenBookModal(book)}
                      >
                        Quick View
                      </button>
                      <a 
                        href={SITE_CONFIG.bookOrderForm || 'https://forms.gle/tFu77RJ6N88t9ijY8'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-book-order" 
                        title="Fill Google Form to Order Book (Opens in New Tab)"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(SITE_CONFIG.bookOrderForm || 'https://forms.gle/tFu77RJ6N88t9ijY8', '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Institutional Supply Notice */}
      <section style={{ background: 'var(--bg-dark)', color: '#fff', padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '6px' }}>
              Looking for Bulk University or Bar Association Procurement?
            </h3>
            <p style={{ color: '#cbd5e1' }}>
              We provide tailored discounts, library accession cards, and direct proforma billing for colleges and institutions.
            </p>
          </div>
          <div>
            <a 
              href={`${SITE_CONFIG.whatsappBase}?text=Hello%20Netrava%20Publications,%20we%20require%20bulk%20institutional%20pricing.`} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary btn-lg"
            >
              Request Institutional Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
