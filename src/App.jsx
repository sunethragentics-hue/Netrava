import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookModal from './components/BookModal';
import Toast from './components/Toast';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import PaperSubmit from './pages/PaperSubmit';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Synchronize hash with activePage
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (['home', 'about', 'products', 'contact', 'paper-submit'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3800);
  };

  return (
    <div className="app-root">
      {/* Header */}
      <Header activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Page Content */}
      <main>
        {activePage === 'home' && (
          <Home
            setActivePage={handlePageChange}
            onOpenBookModal={setSelectedBook}
          />
        )}
        {activePage === 'about' && (
          <About setActivePage={handlePageChange} />
        )}
        {activePage === 'products' && (
          <Products onOpenBookModal={setSelectedBook} />
        )}
        {activePage === 'contact' && (
          <Contact />
        )}
        {activePage === 'paper-submit' && (
          <PaperSubmit onShowToast={showToast} />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Floating Action Buttons (WhatsApp & Call) */}
      <FloatingActions />

      {/* Interactive Quick View Book Modal */}
      <BookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
