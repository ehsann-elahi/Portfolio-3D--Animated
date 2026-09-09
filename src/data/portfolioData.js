// ============================================================
// portfolioData.js — Centralized configuration for Ehsan Elahi's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Ehsan Elahi",
  firstName: "Ehsan",
  brandName: "Ehsan Elahi",
  title: "AI Engineer & Digital Growth Partner",
  location: "Islamabad, Pakistan",
  phone: "+92 301 420 5141",
  emails: {
    primary: "ehsannelahi@gmail.com",
  },
  summary:
    "I help startups and businesses build their digital presence, grow their customer base, and automate their operations with AI. With 2+ years building production Laravel platforms, SEO-ranked websites, and agentic AI systems for a UAE-based agency, I work across the full journey — from a business's first website to the AI automation that helps it run smarter.",
  resumeUrl: "/Ehsan_Elahi_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/ehsann-elahi",
  linkedin: "https://www.linkedin.com/in/ehsan-elahi-5a2848326",
};

export const heroContent = {
  greeting: "Hi, I'm Ehsan Elahi",
  titleHighlight: "AI Engineer",
  titleSub: "that Builds, Grows & Automates Businesses With AI",
  subtitle:
    "I help startups and businesses build their digital presence, grow their customer base, and automate their operations with AI — from websites and software to SEO, chatbots and intelligent automation.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Let's Build Together",
    href: "mailto:ehsannelahi@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Ehsan,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Ehsan_Elahi_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Ehsan Elahi</span>. I don't see technology as the finished product — I see it as the way to solve a business problem. Based in Islamabad, Pakistan, I help startups and businesses build their websites and software, bring people to them through SEO and digital presence, turn visitors into customers, and automate the repetitive parts of running a business with AI — adding automation only where it creates real value.`,
  techStack: ["Build: Laravel & Full-Stack", "Grow: SEO & Digital Presence", "Automate: AI & RAG"],
};

export const skillsContent = {
  badge: "How I Help Your Business",
  heading: "Build. Grow. Automate.",
  description:
    "I work across the full digital journey instead of just one layer — from your first website to the AI automation that helps you run smarter. Here's how that breaks down.",
  cards: [
    {
      number: "01",
      title: "Build Your Digital Business",
      text: "From business websites and e-commerce to SaaS platforms, admin dashboards and custom software — I build the technology your business runs on.",
    },
    {
      number: "02",
      title: "Grow Your Online Presence",
      text: "SEO, digital presence, and conversion-focused design that turns your website into a growth engine, so the right people can actually find you.",
    },
    {
      number: "03",
      title: "Automate With AI",
      text: "AI chatbots, RAG systems and intelligent workflows that cut repetitive work and help your business operate smarter, not just harder.",
    },
  ],
  endText: "Let's build it.",
};

// Technical Skills Data — grouped by business outcome (Build / Grow / Automate)
export const technicalSkills = {
  categories: [
    {
      title: "Software Development",
      skills: [
        { name: "Laravel (MVC, REST API)", level: 92 },
        { name: "PHP", level: 90 },
        { name: "FastAPI", level: 82 },
        { name: "Node.js", level: 60 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 75 },
        { name: "HTML5 / CSS3 / JavaScript", level: 85 },
        { name: "Bootstrap", level: 82 },
        { name: "WordPress", level: 88 },
        { name: "Shopify", level: 82 },
        { name: "WooCommerce", level: 80 },
        { name: "Custom Plugin Development", level: 75 },
        { name: "Kotlin", level: 78 },
        { name: "Flutter / Dart", level: 75 },
        { name: "Android SDK", level: 76 },
        { name: "Git & GitHub", level: 88 },
        { name: "CI/CD", level: 75 },
        { name: "Postman", level: 85 },
      ]
    },
    {
      title: "Growth",
      skills: [
        { name: "SEO", level: 82 },
        { name: "Technical SEO", level: 78 },
        { name: "Lead-Generation Architecture", level: 80 },
        { name: "Conversion-Focused Design", level: 78 },
        { name: "CMS & Content Strategy", level: 80 },
      ]
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "LangChain / LangGraph", level: 88 },
        { name: "RAG Architecture", level: 88 },
        { name: "Multi-Agent Systems", level: 82 },
        { name: "AI Chatbots & Assistants", level: 88 },
        { name: "Computer Vision", level: 78 },
        { name: "Generative AI (Image)", level: 75 },
        { name: "Prompt Engineering", level: 90 },
        { name: "Python", level: 85 },
        { name: "Vector Databases", level: 78 },
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
      "Most online stores stop at 'browse and buy' — they don't help a shopper decide what actually suits them, which is one of the biggest reasons people hesitate to purchase online. I built a fully custom Shopify-style store in Laravel, with an SEO-optimised admin dashboard for full store management, then layered in four AI tools that guide the buying decision itself: an outfit color-match chatbot, a real-time computer-vision style detector, a body-measurement module for custom-stitched orders, and a generative-AI virtual try-on served on GPU infrastructure. The result is a store that doesn't just sell products — it helps customers choose the right one before they buy.",
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
      "A UAE laundry business needed to move off manual phone bookings and into a real digital operation. I built a full SaaS platform — a live customer website, an admin dashboard, and real-time order management — then added bot.laundryservice.ae, an agentic AI chatbot built with LangChain and connected directly to the production database, so it can handle end-to-end customer bookings on its own. The business now runs booking and order management through one system instead of a phone line.",
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
      "As AI-written content became harder to tell apart from human writing, the agency needed a tool clients could trust to check content authenticity. I built ContentScan.ai — a FastAPI backend that classifies text generated by ChatGPT, Claude, Gemini, or DeepSeek — paired with a WordPress plugin so clients can run checks without leaving their own site, deployed with full CI/CD and now serving live client traffic in production.",
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
      "A Dubai carpet cleaning business had no real way for customers to find or book them online. I built an SEO-optimised, mobile-first booking website with a dynamic CMS so the owner can manage services and content without touching code — now live in production and bringing in bookings from UAE customers.",
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
      "The UAE-based agency I work with needed a corporate site built to convert visitors into leads, not just describe services. I built it with a dynamic CMS and lead-generation architecture baked into the page structure, giving the team a fully managed content system they can update themselves without a developer.",
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
      "A UAE watersports company needed customers to be able to browse and book activities online instead of calling in. I built a responsive, SEO-optimised booking platform with an admin dashboard for managing bookings and availability, turning phone-only inquiries into an online booking flow.",
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
      "A premium Abu Dhabi desserts brand needed an online presence that matched their in-store brand experience. I designed and built a custom WordPress theme tailored to their branding and product catalogue, giving the business a storefront as polished as the product.",
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
      "A jewellery retailer needed to sell online alongside their physical shop. I built a Shopify storefront with a full product catalogue and payment integration as part of a freelance engagement, ready to take orders online from day one.",
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
      "A Dubai maintenance company covering AC repair, electrical work, IT support, and industrial maintenance needed to be findable online across all four service lines. I built an SEO-ranked business website that gives them visibility in search and puts every service in one place for customers to find.",
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
    "Build · Grow · Automate",
    "Websites, SEO & AI Automation",
    "Technology Partner for Startups & Businesses",
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
