import {
  ArrowUpRight,
  Bot,
  Brain,
  Github,
  GitBranch,
  GraduationCap,
  BookOpen,
  Sparkles,
  Trophy,
} from "lucide-react";


export const PROFILE = {
  name: "Leo Steel",
  role: "Computing undergraduate",
  tagline: "I’m a Computing student at Bournemouth University with a passion for building smart, efficient systems. From AI and machine learning to automation and full-stack development, I love solving real problems and having fun doing it.",
  location: "Bournemouth, UK",
  email: "leowsteel@gmail.com",
};

export const SKILLS = [
  { label: "Python", detail: "Pandas, NumPy, Matplotlib, Seaborn" },
  { label: "SQL", detail: "Querying, Schema design" },
  { label: "JavaScript", detail: "React, Node patterns" },
  { label: "Data & AI", detail: "Analysis, Regression, Dashboards" },
  { label: "Concepts", detail: "SDLC, Automation, APIs" },
];

export const EXPERIENCE = [
  {
    company: "Volklec",
    title: "Applied Technology & AI",
    year: "2025",
    bullets: [
      "Automated SIOP workflows by integrating AI-driven logic with custom scripts to eliminate manual data entry errors",
      "Simulation models to stress-test inventory levels and operational capacity.",
      "Sales pipeline dashboard that aggregated real-time data to improve forecasting accuracy.",
    ],
    icon: Brain,
  },
  {
    company: "Rebbeck Brothers / My Fire Door LTD",
    title: "IT Support",
    year: "2025",
    bullets: [
      "Migrated physical paper records into a structured relational digital filing system.",
      "AI filtering tools to analyse market data and identify client leads.",
      "Targeted email marketing campaigns using data-driven lead selection.",
    ],
    icon: GitBranch,
  },
  {
    company: "Gold Arrow Camp (California)",
    title: "Waterfront Counsellor",
    year: "2023",
    bullets: [
      "Waterfront activities for groups of children aged 6–16, maintaining safety.",
      "Collaborative teamwork exercises designed to build confidence.",
      "Developed leadership and problem-solving skills by managing group dynamics."
    ],
    icon: Trophy,
  },
];

export const SPRINTS = [
  {
    title: "BAE Systems Referral Prototype",
    company: "CIB Week (Bournemouth University)",
    year: "2024",
    bullets: [
      "A research-led system prototype designed to modernise referral workflows for BAE Systems."
    ],
    longDescription: "Collaborated during CIB Week to design a functional referral system prototype for BAE Systems. The process involved conducting stakeholder research and thorough systems analysis to identify technical requirements. I architected the underlying SQL database structure and presented the final technical solution to a panel of industry professionals.",
    icon: ArrowUpRight,
    tags: ["SQL", "Stakeholder Research"]
  },
  {
    title: "AWS DeepRacer Competition",
    company: "MOD Corsham / Bournemouth University",
    year: "2025",
    bullets: [
      "Autonomous racing models designed and optimised using reinforcement learning.",
    ],
    longDescription: "Representing Bournemouth University at the MOD Corsham competition, I designed and iteratively optimised autonomous racing models using reinforcement learning principles.",
    icon: Trophy,
    tags: ["Reinforcement Learning", "Python"]
  },
  {
    title: "University Hackathon Series",
    company: "Bournemouth University",
    year: "2024 - 2025",
    bullets: [
      "Rapidly developed prototypes focusing on sustainability and conversational AI challenges.",
    ],
    longDescription: "Participating in multiple hackathons at Bournemouth University, I led technical development for prototypes addressing sustainability and AI challenges. These projects required fast-paced iteration, moving from initial concept to a demo-ready user interface within 24–48 hours. The work focused on solving real-world problems through innovative software design and functional UI polish.",
    icon: GitBranch,
    tags: ["Rapid Prototyping", "Teamwork"]
  }
];

export const PROJECTS = [
  {
    title: "Conversational AI Chatbot",
    year: "2025",
    tags: ["Express.js", "REST API", "Semantic Matching"],
    description: "Full-stack chatbot with semantic matching and accessibility-first frontend.",
    longDescription: "Developed a robust full-stack chatbot using Express.js and REST APIs. The system utilizes a three-layer response architecture: small talk, semantic matching, and AI fallback. Accessibility was a primary focus, validated using WAVE automation tools.",
    icon: Bot,
    links: [
      { label: "Live Demo", url: "/chatbot", type: "primary", icon: Bot },
      { label: "Source Code", url: "https://github.com/realsteel1770/historical-Chatbot", type: "secondary", icon: Github }
    ]
  },
  {
    title: "Air Quality Forecasting System",
    year: "2025",
    tags: ["Python", "Regression", "Visualization"],
    description: "Forecasts AQI using big-data pipeline and regression models.",
    longDescription: "Engineered a big data pipeline to analyze environmental datasets. Applying machine learning through regression analysis, the system successfully forecasts trends in the Air Quality Index. Findings were summarized in a technical report for Bournemouth University faculty.",
    icon: Brain,
    links: [
      { label: "Read Technical Report", url: "/Big_Data_Engineering_and_Analytics.pdf", type: "primary", icon: BookOpen },
      { label: "View Heatmaps", url: "air_quality_correlation_heatmap.png", type: "secondary", icon: Sparkles },
      { label: "Source Code", url: "https://github.com/realsteel1770/AirQualityforecasting", type: "secondary", icon: Github }
    ]
  }
];

export const EDUCATION = [
  {
    institution: "Bournemouth University",
    degree: "BSc Computing",
    period: "2024 – 2028",
    detail: "Projected high 2:1",
    highlights: ["Applied AI", "Machine Learning", "Full-stack Dev"],
    icon: GraduationCap,
  },
  {
    institution: "Bedes Senior School",
    degree: "A Levels",
    period: "2019 – 2023",
    detail: "Ceramics, BTEC Business & IT — A, Distinction, Distinction",
    highlights: ["BTEC Level 3 National Certificate in IT", "BTEC Level 3 National Certificate in Business"],
    icon: BookOpen,
  },
];