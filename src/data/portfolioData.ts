export const portfolioData = {
  hero: {
    badge: "Software Engineer",
    headingLine1: "Building ",
    headingHighlight: "Robust Backend APIs",
    headingLine2: ", Scalable Web Apps.",
    description: "Software Engineer specializing in .NET Core, React.js, and scalable REST APIs. Experienced in building robust backend systems, digital accounting platforms, and data-driven solutions.",
    buttons: {
      primary: { label: "Hire Me", href: "#contact" },
      secondary: { label: "View Projects", href: "#work" },
      resume: { label: "Resume", href: "/resume.pdf" }
    },
    stats: [
      { value: "2.5+", label: "Years Exp." },
      { value: "5+", label: "Core Projects" }
    ],
    profileImage: "/profile.jpeg"
  },
  about: {
    badge: "About Me",
    headingLine1: "Product-First",
    headingLine2: "Engineering Philosophy",
    description: "I architect robust backend systems and scalable REST APIs using .NET Core & Dapper ORM, while building cross-platform mobile apps with Flutter. My engineering approach prioritizes clean architecture, security-first design, and data-driven decision making — from fintech platforms processing thousands of daily transactions to AI-enabled citizen service portals.",
    pillars: [
      {
        icon: "architecture",
        title: "System Architecture",
        description: "Clean Architecture patterns, microservices, and scalable API design for enterprise-grade platforms.",
        colorTheme: "primary"
      },
      {
        icon: "phone_android",
        title: "Mobile & Cross-Platform",
        description: "Flutter-powered mobile apps with seamless backend integration and native performance.",
        colorTheme: "secondary"
      },
      {
        icon: "shield",
        title: "Security & Performance",
        description: "Security-audited endpoints, optimized SQL queries, and sub-second response times at scale.",
        colorTheme: "tertiary"
      }
    ],
    metrics: [
      { value: "30%", label: "SQL Query Optimization", icon: "speed" },
      { value: "50+", label: "Stakeholder Dashboards", icon: "dashboard" },
      { value: "25%", label: "Manual Effort Reduced", icon: "automation" },
      { value: "4+", label: "Production API Systems", icon: "api" }
    ],
    terminal: {
      focus: "Backend + Mobile + Web",
      philosophy: "Secure. Efficient. Impactful.",
      location: "Ahmedabad / Mumbai, India",
      status: "available_for_hire",
      stack: {
        backend: [".NET Core", "ASP.NET", "Dapper ORM", "C#", "Python"],
        mobile: ["Flutter", "Dart", "Android / iOS"],
        frontend: ["React.js", "Next.js", "Tailwind CSS"],
        ai: ["RAG Systems", "AI Agents", "MCP"],
        infra: ["REST APIs", "Firebase", "Payment Gateways"]
      }
    }
  },
  experience: {
    title: "Professional Journey",
    list: [
      {
        role: "Software Engineer",
        company: "Adit Microsys Pvt.Ltd.",
        duration: "April 2026 - Present",
        description: "• Engineered .NET 8 applications for government platforms, migrating legacy Web Forms to Clean Architecture.\n• Optimized SQL performance by 30% and built SLA analytics dashboards for 50+ stakeholders.\n• Resolved critical security audit findings to harden application security and integrated payment gateways.\n• Key Project (HappServe): AI-enabled citizen platform featuring Voice/WhatsApp bots, OCR, and GIS-based logging.",
        colorTheme: "primary"
      },
      {
        role: "Software Engineer",
        company: "UNLOCK TECHNOLOGIES PRIVATE LIMITED",
        duration: "January 2024 - April 2026",
        description: "• Developed robust REST APIs and scalable microservices using .NET Core and Dapper ORM for fintech applications like DigiKhata and Merchant Vyapar.\n• Implemented secure backend infrastructure for Video KYC processes and soundbox activations.\n• Built full-stack web features and generated data-driven reporting dashboards.",
        colorTheme: "secondary"
      }
    ]
  },
  skills: {
    title: "Core Expertise",
    subtitle: "Specialized skills developed over 2+ years of professional development.",
    categories: [
      {
        icon: "terminal",
        title: "Backend Engineering",
        description: "Architecture of complex .NET Core microservices, APIs, and data processing.",
        skills: ["C# & .NET Core", "ASP.NET / Web API", "Dapper ORM", "Python"],
        colorTheme: "primary"
      },
      {
        icon: "phone_android",
        title: "Mobile App Development",
        description: "Cross-platform mobile applications using Flutter with seamless API integrations.",
        skills: ["Flutter Development", "Dart", "Android & iOS Apps", "REST API & Firebase Sync"],
        colorTheme: "secondary"
      },
      {
        icon: "smart_toy",
        title: "AI & Modern Systems",
        description: "Intelligent agent workflows, context protocols, and retrieval systems.",
        skills: ["AI Agents & Workflows", "RAG Systems", "MCP (Model Context Protocol)", "LLM Integrations"],
        colorTheme: "tertiary"
      },
      {
        icon: "storage",
        title: "Database & Fintech",
        description: "Transaction processing, digital accounting, and optimized data layers.",
        skills: ["SQL Server", "Digital Accounting", "High-Performance Queries", "Reporting"],
        colorTheme: "primary"
      },
      {
        icon: "layers",
        title: "Frontend Development",
        description: "Modern responsive web applications and interactive client dashboards.",
        skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
        colorTheme: "secondary"
      },
      {
        icon: "integration_instructions",
        title: "Integrations & Realtime",
        description: "Soundbox activations, external partner APIs, and notification systems.",
        skills: ["Soundbox APIs", "Firebase Notifications", "Payment Gateways", "External APIs"],
        colorTheme: "on-surface-variant"
      }
    ]
  },
  services: [
    {
      title: "Backend API Engineering",
      description: "High-performance RESTful APIs, microservices, and secure endpoint development using ASP.NET Core and C#."
    },
    {
      title: "Mobile App Development (Flutter)",
      description: "Cross-platform mobile applications in Flutter with fluid UI, state management, and backend API integration."
    },
    {
      title: "Database Optimization",
      description: "Complex SQL Server stored procedures, indexing, performance tuning, and fast data access via Dapper ORM."
    },
    {
      title: "Fintech & Integrations",
      description: "Third-party payment gateways, merchant soundbox activations, webhooks, and real-time Firebase push alerts."
    }
  ],
  testimonials: [
    {
      quote: "Prafful's architectural discipline in .NET Core and Dapper significantly sped up our transaction processing workflows.",
      author: "Engineering Lead",
      position: "Adit Microsys"
    },
    {
      quote: "Exceptional backend developer who seamlessly built our Soundbox activation and merchant notification pipelines.",
      author: "Product Manager",
      position: "Fintech Platform"
    }
  ],
  projects: {
    title: "Featured Projects",
    subtitle: "High-impact backend systems and API architectures built for scale.",
    githubLink: "https://github.com/Praffulpatil01",
    list: [
      {
        id: "merchant-vyapar",
        title: "Merchant Vyapar Mobile App",
        category: "Mobile Backend & Integrations",
        badge: "Production APIs",
        icon: "storefront",
        description: "Developed comprehensive backend REST APIs powering soundbox device activations, external partner API integrations, and Firebase notifications for the mobile platform.",
        highlights: [
          "Built soundbox hardware activation APIs and webhook listening pipelines",
          "Engineered external API integrations for merchant onboarding & payment services",
          "Implemented Firebase Cloud Messaging (FCM) for real-time notification delivery"
        ],
        tags: ["ASP.NET Core", "Dapper", "SQL Server", "Firebase", "External APIs"],
        demoLink: "#",
        repoLink: "#",
        tagColor: "secondary"
      },
      {
        id: "digikhata",
        title: "DigiKhata Mobile App",
        category: "Fintech & Digital Accounting",
        badge: "Accounting Engine",
        icon: "account_balance_wallet",
        description: "Built the core backend APIs and data layer to support digital accounting, ledger calculations, transaction processing, and reporting functionalities for the mobile application.",
        highlights: [
          "Architected backend APIs for digital accounting and transaction processing",
          "Developed high-speed ledger calculations and balance reconciliation logic",
          "Optimized SQL queries and stored procedures with Dapper for instant reporting"
        ],
        tags: ["ASP.NET", "Dapper", "SQL Server", "Digital Accounting", "Reporting"],
        demoLink: "#",
        repoLink: "#",
        tagColor: "primary"
      }
    ]
  },
  contact: {
    badge: "Get In Touch",
    title: "Ready to build something extraordinary?",
    subtitle: "I'm currently available for high-impact engineering roles, technical consulting, and select freelance platforms. Let's discuss how we can bring your vision to life.",
    email: "praffulpatil085@gmail.com",
    whatsapp: "+91 95278 19970",
    whatsappLink: "https://wa.me/919527819970",
    location: "Ahmedabad / Mumbai, India",
    availability: "Available for Hire",
    inquiryOptions: [
      { value: "fulltime", label: "💼 Full-Time Engineering Role" },
      { value: "contract", label: "⚡ Contract / Microservices" },
      { value: "mobile-api", label: "📱 Mobile App / API Development" },
      { value: "consultation", label: "🛠️ System Architecture / SQL Optimization" },
      { value: "other", label: "💬 General Inquiry" }
    ],
    formspreeId: "mkoaqnok"
  },
  footer: {
    name: "Prafful Patil",
    copyright: "© 2026 Prafful Patil. Engineered with Precision.",
    socials: [
      { label: "GitHub", url: "https://github.com/Praffulpatil01" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/prafful-patil-5519572a4/" },
      { label: "WhatsApp", url: "https://wa.me/919527819970" },
      { label: "Email", url: "mailto:praffulpatil085@gmail.com" }
    ]
  }
};
