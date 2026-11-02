// =======================================================================
// 📚 NETRAVA ACADEMIC PUBLICATIONS - DEDICATED PRODUCTS CATALOGUE
// 
// HOW TO ADD NEW PRODUCTS:
// 1. Copy either the [PUBLISHED BOOK] or [UPCOMING BOOK] template below.
// 2. Set 'status':
//    - status: "published"  -> For released titles available to Buy immediately.
//    - status: "upcoming"   -> For forthcoming titles with Pre-Order button & release date.
// 3. Available categories:
//    - 'law'        -> Law & Jurisprudence
//    - 'psychology' -> Psychology & Behavioral Sciences
//    - 'education'  -> Education & Reference
//    - 'research'   -> Research & Governance
// =======================================================================

export const PUBLICATIONS = [
  // --- [SAMPLE 1: PUBLISHED BOOK] ---
  // {
  //   id: 1,
  //   status: "published", // "published" or "upcoming"
  //   title: "The Legal Point",
  //   subtitle: "Compendium of Landmark Judicial Precedents & Legal Principles",
  //   category: "law",
  //   categoryName: "Law & Jurisprudence",
  //   author: "Adv. R. K. Sharma & Senior Editorial Bench",
  //   isbn: "978-93-89421-12-8",
  //   edition: "3rd Revised & Enlarged Edition (2025)",
  //   pages: 480,
  //   price: "₹895",
  //   originalPrice: "₹1,150",
  //   cover: "/assets/images/books/book_1.jpg",
  //   featured: true,
  //   badge: "Bestseller",
  //   synopsis: "An exhaustive reference guide analyzing foundational landmark judgments across the Supreme Court and High Courts. Features thematic commentaries on constitutional doctrines, procedural jurisprudence, and seminal legal precedents.",
  //   highlights: [
  //     "Thematic classification of Constitutional & Civil rulings",
  //     "Headnotes with ratio decidendi and obiter dicta distinctions",
  //     "Cross-referenced with leading statutory enactments",
  //     "Essential for advocates, judicial aspirants, and law faculties"
  //   ]
  // },

  // --- [SAMPLE 2: UPCOMING BOOK] ---
  // {
  //   id: 2,
  //   status: "upcoming", // Sets the card to Upcoming mode with Pre-Order button
  //   expectedRelease: "Expected Q3 2026",
  //   title: "Artificial Intelligence & Modern Jurisprudence",
  //   subtitle: "Legal, Ethical, and Algorithmic Frontiers in Indian & Global Courts",
  //   category: "law",
  //   categoryName: "Law & Jurisprudence",
  //   author: "Dr. Arvind Rao & Netrava Law Forum",
  //   isbn: "In Registration",
  //   edition: "1st Edition (Forthcoming)",
  //   pages: 360,
  //   price: "₹750", // Pre-order special price or leave blank for 'TBA'
  //   originalPrice: "₹950",
  //   cover: "/assets/images/books/book_1.jpg",
  //   featured: true,
  //   badge: "Upcoming",
  //   synopsis: "A pioneering academic treatise examining the intersection of generative AI, algorithmic bias, copyright liability, deepfakes, and emerging statutory frameworks under the Digital Personal Data Protection regime.",
  //   highlights: [
  //     "Comparative analysis of EU AI Act and Indian digital regulatory policies",
  //     "Evidentiary admissibility of machine-generated forensics in criminal trials",
  //     "Ethical frameworks for judicial AI assistance and autonomous contracts",
  //     "Advance reservations available for universities and research institutions"
  //   ]
  // },




  // --- [SAMPLE 1: UPCOMING BOOK]-- -
  {
    id: 1,
    status: "upcoming", // Sets the card to Upcoming mode with Pre-Order button
    expectedRelease: "Expected 12 December 2026",
    title: "CONTEMPORARY HORIZONS",
    subtitle: "Multidisciplinary Perspectives on Research, Innovation and Emerging Trends",
    category: "multidisciplinary",
    categoryName: "Multidisciplinary",
    // author: "Dr. Arvind Rao & Netrava Law Forum",
    isbn: "978-81-181743-0-1",
    edition: "1st Edition ",
    pages: 360,
    price: "From ₹500",
    ebookPrice: "₹500",
    physicalPrice: "₹1,500",
    physicalCopies: "2 Copies",
    pricing: [
      { format: "E-Book", price: "₹500", note: "Instant Digital Access" },
      { format: "Physical Copy (2 Copies)", price: "₹1,500", note: "2 Printed Copies" }
    ],
    chapterSubmissionUrl: "https://forms.gle/DpxQ3sdH5hRYnSzJA",
    cover: "/assets/images/books/contemporary_horizons/front.png",
    backCover: "/assets/images/books/contemporary_horizons/back.png",
    featured: true,
    badge: "Upcoming",
    synopsis: "A pioneering academic treatise examining the intersection of generative AI, algorithmic bias, copyright liability, deepfakes, and emerging statutory frameworks under the Digital Personal Data Protection regime.",
    highlights: [
      "Comparative analysis of EU AI Act and Indian digital regulatory policies",
      "Evidentiary admissibility of machine-generated forensics in criminal trials",
      "Ethical frameworks for judicial AI assistance and autonomous contracts",
      "Advance reservations available for universities and research institutions"
    ]
  }


];

export default PUBLICATIONS;
