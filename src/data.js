// Netrava Academic Publications - Central Data Store
export const SITE_CONFIG = {
  name: "Netrava Academic Publications",
  tagline: "Knowledge • Research • Innovation",
  phone: "+91 8240981218",
  phoneRaw: "918240981218",
  email: "netravapublications@gmail.com",
  address: "Sri Rama Temple Road,pin-560047 Koramangala, Bengaluru, Karnataka, India",
  workingHours: "Mon - Sat: 9:30 AM - 6:30 PM",
  whatsappBase: "https://wa.me/918240981218",
  bookOrderForm: "https://forms.gle/tFu77RJ6N88t9ijY8",
  chapterSubmissionForm: "https://forms.gle/DpxQ3sdH5hRYnSzJA"
};

// Configuration for Chapter Submission & Google Sheet / Form Integration
export const SUBMISSION_CONFIG = {
  chapterSubmissionUrl: "https://forms.gle/DpxQ3sdH5hRYnSzJA",
  bookOrderUrl: "https://forms.gle/tFu77RJ6N88t9ijY8",
  googleSheetEndpoint: "", // Leave blank for now, will auto-fallback to local submission & WhatsApp alert
  googleFormEmbedUrl: "https://forms.gle/DpxQ3sdH5hRYnSzJA",

  disciplines: [
    "Law & Jurisprudence (Constitutional, Criminal, Corporate, Cyber)",
    "Psychology & Behavioral Sciences (Clinical, Cognitive, Positive)",
    "Higher Education & Pedagogy (Curriculum, NEP 2020, Leadership)",
    "Research Methodologies & Statistical Paradigms",
    "Public Policy, Governance & Social Sciences",
    "Commerce, Management & Corporate Governance",
    "Interdisciplinary Scholarly Research"
  ],

  manuscriptTypes: [
    "Original Research Paper",
    "Review Article / Comprehensive Survey",
    "Case Study / Judicial Analysis",
    "Book Proposal / Full Treatise Manuscript",
    "Doctoral Dissertation Adaptation"
  ]
};

// Dedicated Publications / Products Store (Managed in src/products.js)
export { PUBLICATIONS } from './products';

export const EDITORIAL_MEMBERS = [
  {
    name: "Dr. Sunethra Chatterjee",
    role: "Founder & Publisher",
    // specialization: "Higher Education & Jurisprudence",
    image: "/assets/team_images/sunethra.png",
    // bio: "Over 28 years of academic leadership, former university dean, author of 14 acclaimed treatises on institutional quality."
  },

  {
    name: "S.Naga Tushar",
    role: "Technical Team",
    specialization: "Software Engineer",
    image: "/assets/team_images/S.NagaTushar.png",
    // bio: "Renowned Software Engineer, doctoral mentor, and UGC advisory panelist with over 40 research publications."
  },
  {
    name: "Bhuvan Aras",
    role: "Technical Team",
    specialization: "Software Engineer",
    image: "/assets/team_images/bhuvan.jpeg",
    // bio: "Senior Software Engineer, doctoral mentor, and UGC advisory panelist with over 40 research publications."
  },
  {
    name: "Dinesh Samal",
    role: "Technical Team/Marketing",
    specialization: "Software Engineer",
    image: "/assets/team_images/Dinesh.png",
    // bio: "Pioneering researcher in NEP 2020 curricular implementation and instructional design methodologies."
  }
];
