// ============================================================
// portfolioData.js — Centralized configuration for Ehsan Elahi's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Ehsan Elahi",
  firstName: "Ehsan",
  brandName: "Ehsan Elahi",
  title: "Backend Developer & AI Engineer",
  location: "Islamabad, Pakistan",
  phone: "+92 301 420 5141",
  emails: {
    primary: "ehsannelahi@gmail.com",
  },
  summary:
    "Results-driven Backend Developer and AI Engineer with 2+ years of hands-on experience spanning Laravel/PHP backend systems, cross-platform mobile apps, and production-grade AI engineering. Currently building live SaaS platforms and agentic AI systems for a UAE-based agency.",
  resumeUrl: "/Ehsan_Elahi_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/ehsann-elahi",
  linkedin: "https://www.linkedin.com/in/ehsan-elahi-5a2848326",
};

export const heroContent = {
  greeting: "Hi, I'm Ehsan Elahi",
  titleHighlight: "AI Engineer, Backend & Frontend Developer",
  subtitle:
    "I build production Laravel SaaS platforms and agentic AI systems using LangChain, RAG, Python, and Computer Vision.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:ehsannelahi@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Ehsan,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Ehsan_Elahi_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Ehsan Elahi</span>, a Backend Developer and AI Engineer based in Islamabad, Pakistan, dedicated to building production-grade Laravel SaaS platforms and agentic AI systems for real clients.`,
  techStack: ["Laravel", "AI & RAG", "Flutter / Kotlin"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack and AI-powered applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive dashboards, and pixel-perfect interfaces that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable Laravel backends, mobile apps, and agentic AI pipelines using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless cloud deployment, followed by ongoing production maintenance.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Backend",
      skills: [
        { name: "Laravel (MVC, REST API)", level: 92 },
        { name: "PHP", level: 90 },
        { name: "Python", level: 85 },
        { name: "FastAPI", level: 82 },
        { name: "Node.js", level: 60 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 75 },
        { name: "Vector Databases", level: 78 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "LangChain / LangGraph", level: 88 },
        { name: "RAG Architecture", level: 88 },
        { name: "Multi-Agent Systems", level: 82 },
        { name: "Computer Vision", level: 78 },
        { name: "Generative AI (Image)", level: 75 },
        { name: "Prompt Engineering", level: 90 }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Kotlin", level: 78 },
        { name: "Flutter / Dart", level: 75 },
        { name: "Android SDK", level: 76 }
      ]
    },
    {
      title: "CMS & E-Commerce",
      skills: [
        { name: "WordPress", level: 88 },
        { name: "Shopify", level: 82 },
        { name: "WooCommerce", level: 80 },
        { name: "Custom Plugin Development", level: 75 }
      ]
    },
    {
      title: "Frontend & Tools",
      skills: [
        { name: "HTML5 / CSS3 / JavaScript", level: 85 },
        { name: "Bootstrap", level: 82 },
        { name: "Git & GitHub", level: 88 },
        { name: "CI/CD", level: 75 },
        { name: "Postman", level: 85 }
      ]
    }
  ]
};

// Experience (work history) data
export const experienceList = [
  {
    organization: "Meta Digital Marketing",
    role: "Backend Developer & AI Engineer",
    duration: "July 2024 - Present",
    type: "Full-Time",
    location: "Islamabad, Pakistan (UAE-based Agency)",
    skills: [
      "Architected fully dynamic Laravel SaaS platforms with admin dashboards, REST APIs, and real-time order management",
      "Built and deployed bot.laundryservice.ae — an agentic RAG chatbot integrated directly with the production database",
      "Developed AYAT Stem, a Flutter education app published on Google Play",
      "Shipped Multi-Agent Newsletter Automation, AI Real Estate Chatbot, AI Doctor (Voice + Vision), and a DeepSeek-R1 reasoning chatbot",
      "Built 7+ SEO-ranked business websites for UAE markets and managed full server configuration and cloud deployments"
    ],
    tech: ["Laravel", "LangChain", "FastAPI", "MySQL", "Flutter"]
  },
  {
    organization: "Marsit Agency",
    role: "AI Engineer",
    duration: "January 2024 - June 2024",
    type: "6 Months",
    location: "Pakistan",
    skills: [
      "Engineered ContentScan.ai, a production multi-LLM content detection platform with a FastAPI backend and WordPress plugin",
      "Developed backend websites and custom WordPress plugins for agency clients",
      "Contributed to AI model integration and prompt engineering for client-facing content-analysis tooling"
    ],
    tech: ["Python", "FastAPI", "WordPress", "LLM APIs"]
  },
  {
    organization: "Edify Group of Companies",
    role: "Mobile App Developer",
    duration: "2023",
    type: "Internship",
    location: "Pakistan",
    skills: [
      "Developed cross-platform mobile application features and contributed to client-facing mobile products",
      "Gained hands-on experience in mobile app architecture, UI/UX design principles, and production deployment workflows",
      "Collaborated with a professional development team on agile delivery cycles"
    ],
    tech: ["Kotlin", "Flutter", "Mobile UI"]
  },
  {
    organization: "OPP TECH",
    role: "Web Developer",
    duration: "2022 · 6 Months",
    type: "Internship",
    location: "Pakistan",
    skills: [
      "Developed PHP-based web applications including an Emergency Ambulance Hiring Portal, Library Management System, Bidding System, and School/College Management System",
      "Built responsive frontend interfaces using HTML5, CSS3, Bootstrap, JavaScript, and jQuery"
    ],
    tech: ["PHP", "HTML5", "Bootstrap", "jQuery"]
  },
  {
    organization: "Self-Employed",
    role: "Freelance Web & App Developer",
    duration: "2022 - Present",
    type: "Freelance",
    location: "Remote",
    skills: [
      "Designed and developed 10+ live WordPress and Shopify stores across multiple client niches",
      "Built VaultLock: Secure Apps, a native Kotlin Android application published on Google Play",
      "Independently designed and built a full AI-powered e-commerce platform (personal portfolio project)",
      "Services delivered: Shopify theme customisation, WooCommerce setup, plugin development, and performance optimisation"
    ],
    tech: ["WordPress", "Shopify", "Kotlin", "WooCommerce"]
  }
];

export const projects = [
  {
    id: "ai-ecommerce",
    number: "01",
    badge: "🚀 Flagship Personal Project",
    title: "AI-Powered E-Commerce Platform",
    description:
      "A fully custom Shopify-style e-commerce platform built in Laravel with an SEO-optimised admin dashboard and full store management tools. Integrates four independent AI modules into the storefront: an outfit color-match chatbot, a real-time computer-vision style detector, a body-measurement module for custom-stitched orders, and a generative-AI virtual try-on trained and served on RunPod GPU infrastructure.",
    techTags: ["Laravel", "Python", "Computer Vision", "Generative AI", "RunPod GPU", "Vector Database"],
    image: null,
    links: {
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "laundryservice",
    number: "02",
    badge: "Live in Production",
    title: "LaundryService.ae",
    description:
      "Full SaaS laundry booking platform for the UAE market with an admin dashboard, real-time order management, and an integrated agentic RAG chatbot (bot.laundryservice.ae) that handles end-to-end customer bookings using LangChain, connected directly to the production database.",
    techTags: ["Laravel", "LangChain", "RAG", "MySQL", "FastAPI"],
    image: "laundryservice.ae.jpg",
    links: {
      demo: "https://laundryservice.ae",
    },
    isFlagship: false,
  },
  {
    id: "contentscan",
    number: "03",
    badge: null,
    title: "ContentScan.ai",
    description:
      "A production-grade multi-LLM AI content detection platform serving live client traffic, capable of classifying text generated by ChatGPT, Claude, Gemini, or DeepSeek. Built with a FastAPI backend and a WordPress plugin for frontend integration, including full CI/CD deployment.",
    techTags: ["Python", "FastAPI", "Multi-LLM", "WordPress Plugin"],
    image: "contentscan.ai.jpg",
    links: {
      demo: "https://contentscan.ai",
    },
    isFlagship: false,
  },
  {
    id: "carpetwashing",
    number: "04",
    badge: null,
    title: "CarpetWashing.ae",
    description:
      "SEO-optimised service booking platform for a Dubai carpet cleaning business, featuring a dynamic CMS and mobile-first responsive design, live in production for UAE customers.",
    techTags: ["Laravel", "CMS", "SEO", "Responsive UI"],
    image: "carpetwashing.ae.jpg",
    links: {
      demo: "https://carpetwashing.ae",
    },
    isFlagship: false,
  },
  {
    id: "metadigitalmarketing",
    number: "05",
    badge: null,
    title: "MetaDigitalMarketing.ae",
    description:
      "Corporate website for the UAE-based agency I work with, built with a dynamic CMS, lead-generation architecture, and a fully managed content system.",
    techTags: ["Laravel", "CMS", "Lead Generation"],
    image: "metadigitalmarketing.ae.jpg",
    links: {
      demo: "https://metadigitalmarketing.ae",
    },
    isFlagship: false,
  },
  {
    id: "seaherowatersports",
    number: "06",
    badge: null,
    title: "Sea Hero Watersports",
    description:
      "Service booking platform for a UAE watersports company with admin management, SEO optimisation, and a fully responsive UI architecture.",
    techTags: ["Laravel", "Admin Dashboard", "SEO"],
    image: "seaherowatersports.com.jpg",
    links: {
      demo: "https://seaherowatersports.com",
    },
    isFlagship: false,
  },
  {
    id: "chocolateshop",
    number: "07",
    badge: null,
    title: "Chocolateshop.ae",
    description:
      "A custom WordPress theme designed and built for an Abu Dhabi premium desserts brand, tailored to the client's business and branding requirements.",
    techTags: ["WordPress", "Custom Theme", "E-Commerce"],
    image: "chocolateshop.ae.jpg",
    links: {
      demo: "https://chocolateshop.ae",
    },
    isFlagship: false,
  },
  {
    id: "alfajewellers",
    number: "08",
    badge: null,
    title: "AlfaJewellers.live",
    description:
      "A Shopify jewellery storefront built as part of a freelance engagement, with full product catalogue and payment integration.",
    techTags: ["Shopify", "WooCommerce", "Payments"],
    image: "alfajewellers.live.jpg",
    links: {
      demo: "https://alfajewellers.live",
    },
    isFlagship: false,
  },
  {
    id: "technicalplus",
    number: "09",
    badge: null,
    title: "TechnicalPlus.ae",
    description:
      "SEO-ranked business website for a Dubai technical and maintenance services company, covering AC repair, electrical work, IT support, and industrial maintenance.",
    techTags: ["Laravel", "SEO", "Responsive UI"],
    image: "technicalplus.ae.jpg",
    links: {
      demo: "https://technicalplus.ae",
    },
    isFlagship: false,
  },
];

// Certificates — awaiting real certificate data/PDF from Ehsan.
// Add entries here in the same shape once available: { name, issuer, icon }
export const certificates = {
  featured: [],
  viewAllUrl: null,
};

export const education = {
  degree: "Bachelor of Science — Computer Science",
  institution: "University of Central Punjab",
  location: "Pakistan",
  duration: "2022 – 2026 (Expected)",
};

export const footerContent = {
  taglines: [
    "Backend Development & AI Engineering",
    "Laravel · Python · LangChain",
    "Production SaaS Platforms",
  ],
  credential: "BS Computer Science · Expected 2026",
  copyright: `© ${new Date().getFullYear()} Ehsan Elahi | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
