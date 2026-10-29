# Netrava Academic Publications

**Knowledge • Research • Innovation**

A premier academic publishing web application built with **React** and **Vite**, featuring luxury Navy & Royal Gold aesthetics, an interactive 17-treatise catalogue with real-time live search and category filtering, double-blind peer review and author submission workflows, interactive book quick-view modals, photo gallery lightbox, and WhatsApp & telephone order integration.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 📊 How to Connect Your Google Sheet (Later Phase)

When you are ready to link your Google Sheet, open [`src/data.js`](file:///c:/Users/Tushar/Desktop/publication/src/data.js):

```javascript
export const SUBMISSION_CONFIG = {
  // Option A: Paste your Google Apps Script Web App URL (for direct spreadsheet logging)
  googleSheetEndpoint: "https://script.google.com/macros/s/AKfycb.../exec",

  // Option B: Or paste a Google Form embed URL if you prefer an embedded Google Form
  googleFormEmbedUrl: ""
};
```
Whenever an author submits a paper, the details (Tracking Reference ID, Author Name, Email, Phone, Institution, Paper Title, Abstract, Keywords, and File/Drive Link) will automatically post to your Google Sheet! In the meantime, it generates a unique reference ID (e.g. `NETRAVA-2026-XXXX`), shows instant confirmation, and offers one-click WhatsApp notification.

---

## 📁 Project Structure

```
publication/
├── public/
│   └── assets/
│       └── images/
│           ├── logo.png          # Transparent brand logo
│           ├── logo.jpg          # Original brand logo
│           ├── banner.jpg        # Hero banner background
│           ├── books/            # Real covers for all 17 publications (book_1 to book_17)
│           └── team/             # Editorial advisory council photos
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Top announcement bar + sticky navigation + mobile drawer
│   │   ├── Footer.jsx            # Academic disciplines, headquarters info, copyright
│   │   ├── FloatingActions.jsx   # WhatsApp chat button & direct phone call button
│   │   ├── BookModal.jsx         # Interactive Quick View modal (ISBN, pages, synopsis, highlights, WhatsApp buy)
│   │   ├── LightboxModal.jsx     # Full-screen photo gallery lightbox
│   │   └── Toast.jsx             # User inquiry feedback notifications
│   ├── pages/
│   │   ├── Home.jsx              # Simple, book-free landing page with motto lines, academic creed, scope cards, and workflow
│   │   ├── About.jsx             # Institutional heritage, 3 core pillars, editorial board, publishing ethics
│   │   ├── Products.jsx          # Filterable 17-book catalogue with live search & instant modal
│   │   ├── Gallery.jsx           # Categorized events, book releases, symposiums, and printing facility
│   │   └── Contact.jsx           # Contact hotline, inquiry & manuscript form, Google Maps, FAQ accordion
│   ├── App.jsx                   # Main React entry & router management
│   ├── data.js                   # Comprehensive structured database of all publications, team, FAQs
│   ├── index.css                 # Vanilla CSS design system (Imperial Navy & Royal Gold)
│   └── main.jsx                  # React DOM root entry
├── index.html                    # Root HTML template with Google Fonts (Cinzel, Outfit, Inter)
├── package.json
└── vite.config.js
```

---

## 📞 Direct Contact
- **Headquarters:** B-32 West Nathu Colony, Shahdara, Delhi 110093, India
- **Phone:** +91 8527034810
- **WhatsApp:** +91 8527034810
- **Email:** netravapublications@gmail.com
