/**
 * Portfolio data sourced from Kaushal Ganatra's CV.
 * Items marked with `dummy: true` (or listed in DUMMY_DATA_REFERENCE.md)
 * are placeholder content that should be replaced with real data later.
 */

import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code2,
  Building2,
  PenLine,
  Image as ImageIcon,
  Star,
  Mail,
  Home,
  GraduationCap,
} from "lucide-react";

export const profile = {
  name: "Kaushal Ganatra",
  initials: "KG",
  proTagline: "Software Engineer · Builder",
  perTagline: "Curious mind · Lifelong learner",
  email: "kaushal.d.ganatra@gmail.com",
  location: "Rajkot, Gujarat, India",
  website: "kaushalganatra.dev",
  linkedin: "https://linkedin.com/in/kaushal-ganatra",
  github: "https://github.com/KaushalGanatra",
  summary:
    "Software Engineer with hands-on experience designing and developing scalable web applications using .NET Core, React.js, and Golang. Strong foundation in backend systems, RESTful APIs, and database design, with practical exposure to DevOps practices including Docker, CI/CD, and Terraform.",
};

export type NavItem = { id: string; label: string; icon: LucideIcon; to: string; locked?: boolean };

export const PRO_NAV: NavItem[] = [
  { id: "home", label: "Home", icon: Home, to: "/" },
  { id: "experience", label: "Experience", icon: Briefcase, to: "/experience" },
  { id: "technologies", label: "Technologies", icon: Code2, to: "/technologies" },
  // COMMENTED OUT: { id: "businesses", label: "Businesses", icon: Building2, to: "/businesses" },
  // COMMENTED OUT: { id: "blog", label: "Tech Blog", icon: PenLine, to: "/blog" },
  // COMMENTED OUT: { id: "gallery", label: "Gallery", icon: ImageIcon, to: "/gallery" },
  // COMMENTED OUT: { id: "legends", label: "Unsung Legends", icon: Star, to: "/legends" },
  { id: "contact", label: "Contact", icon: Mail, to: "/contact" },
];

export const PER_NAV: NavItem[] = [
  { id: "home", label: "Home", icon: Home, to: "/" },
  { id: "writing", label: "Writing", icon: PenLine, to: "/writing", locked: true },
  { id: "gallery", label: "Gallery", icon: ImageIcon, to: "/gallery", locked: true },
];

export const stats = [
  { n: "2+", l: "years exp" },
  { n: "4", l: "companies" },
  { n: "10+", l: "projects" },
  { n: "4", l: "certifications" },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  detail: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    period: "Nov 2024 – Present",
    role: "Full-Stack Software Developer",
    company: "ez enRoute Pvt. Ltd. (Acquired by Zonar Systems, USA)",
    location: "Rajkot, India · International Exposure",
    current: true,
    detail: [
      "Designed and developed scalable backend services using .NET Core, supporting RESTful APIs and high-performance application workflows.",
      "Built modular, responsive frontend applications using React.js, improving user interaction and data visualization.",
      "Designed and optimized PostgreSQL data models, improving query performance and ensuring data consistency.",
      "Integrated geospatial and analytical data visualization features to support better business decision-making.",
      "Led a POC to modernize a 5-year-old legacy system using AI-assisted tools, significantly reducing development effort.",
    ],
  },
  {
    period: "Jan 2024 – Sep 2024",
    role: "Software Engineer Intern",
    company: "Improwised Technologies Pvt. Ltd.",
    location: "Rajkot, India",
    detail: [
      "Developed backend services in Golang (Go Fiber) following MVC architecture and built RESTful APIs for scalable workflows.",
      "Implemented frontend features using Vue.js and Nuxt.js, ensuring seamless API integration.",
      "Containerized applications using Docker for consistent development and deployment environments.",
      "Gained hands-on experience with CI/CD pipelines and contributed to open-source projects.",
    ],
  },
  {
    period: "Sep 2022 – Nov 2022",
    role: "Freelance Web Designer & Developer",
    company: "Self-Employed · Client: Unfiltered Gup-shuP",
    location: "Remote",
    detail: [
      "Designed and developed a full WordPress website for an open mic events platform using Elementor.",
      "Built a responsive, intuitive UI ensuring a seamless experience across desktop and mobile devices.",
      "Integrated a blog module to support content publishing and drive community engagement.",
    ],
  },
  {
    period: "Apr 2020 – Sep 2021",
    role: "Shopify Developer",
    company: "Vertex Dimension",
    location: "Remote · International Client",
    detail: [
      "Developed and customized Shopify stores using Liquid, implementing business-specific workflows and logic.",
      "Optimized product workflows and backend logic, improving platform performance and usability.",
    ],
  },
];

export const techGroups = [
  {
    title: "Languages",
    levels: [
      { label: "expert", chips: ["C#", "Golang"] },
      { label: "proficient", chips: ["Python", "TypeScript", "JavaScript"] },
    ],
  },
  {
    title: "Frameworks",
    levels: [
      { label: "expert", chips: [".NET Core", "React.js"] },
      { label: "proficient", chips: ["Vue.js", "Nuxt.js", "Go Fiber"] },
    ],
  },
  {
    title: "Backend & APIs",
    levels: [
      {
        label: "expert",
        chips: ["REST APIs", "Microservices", "System Design"],
      },
      { label: "proficient", chips: ["Scalable Architecture", "MVC"] },
    ],
  },
  {
    title: "Cloud & DevOps",
    levels: [
      { label: "expert", chips: ["Docker", "Linux"] },
      { label: "proficient", chips: ["CI/CD", "Terraform"] },
    ],
  },
  {
    title: "Databases",
    levels: [
      { label: "expert", chips: ["PostgreSQL"] },
      { label: "proficient", chips: ["MySQL", "SQLite"] },
    ],
  },
  {
    title: "Other",
    levels: [
      {
        label: "expert",
        chips: ["AI-assisted dev", "Open-Source"],
      },
    ],
  },
];

export const education = [
  {
    period: "2022 – 2024",
    degree: "Master of Computer Applications (MCA)",
    institution: "Marwadi University, Rajkot",
    score: "CPI: 7.86 / 10",
  },
  {
    period: "2019 – 2022",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Christ College, Rajkot",
    score: "CGPA: 8.53 / 10 · 🥇 Gold Medalist — Top Academic Performer",
  },
];

export const certifications = [
  "Career Essentials in Generative AI — Microsoft & LinkedIn",
  "Google Cloud Big Data and Machine Learning Fundamentals — Coursera",
  "AWS Cloud Technical Essentials — Coursera",
  "Project Management Fundamentals — IBM",
];

export const achievements = [
  "Gold Medalist in BCA — top academic performer across the entire batch.",
  "Hackathon participant — built a real-time solution leveraging CCTV feeds and image detection systems.",
];

/** DUMMY — replace with real client testimonials/businesses */
export const businesses = [
  {
    initials: "ZR",
    name: "Zonar Systems",
    desc: "Backend services & React dashboards for fleet/logistics platform serving North American clients.",
    tag: "logistics",
    dummy: false,
  },
  {
    initials: "UG",
    name: "Unfiltered Gup-shuP",
    desc: "End-to-end WordPress build for an open mic events community in India — design to deployment.",
    tag: "events",
    dummy: false,
  },
  {
    initials: "VD",
    name: "Vertex Dimension",
    desc: "Custom Shopify storefronts using Liquid — optimized workflows for international clients.",
    tag: "ecommerce",
    dummy: false,
  },
  {
    initials: "IT",
    name: "Improwised Tech",
    desc: "Golang microservices and Nuxt.js frontends for SaaS workflows.",
    tag: "saas",
    dummy: false,
  },
  {
    initials: "AI",
    name: "Internal AI POC",
    desc: "Led a POC to modernize a 5-year-old legacy system using AI-assisted code generation.",
    tag: "internal",
    dummy: false,
  },
  {
    initials: "OS",
    name: "Open-Source",
    desc: "Contributions to libraries used in production Go and JS ecosystems.",
    tag: "community",
    dummy: false,
  },
];

/** DUMMY — placeholder blog posts */
export const techBlog = [
  {
    cat: "AI",
    title: "Modernizing a 5-year-old legacy system with AI-assisted tools",
    meta: "Lessons from leading a real production POC",
    dummy: true,
  },
  {
    cat: "Backend",
    title: "Designing PostgreSQL schemas for geospatial data",
    meta: "Indexes, partitioning, and query optimization",
    dummy: true,
  },
  {
    cat: "Go",
    title: "Building REST APIs in Go Fiber — a practical MVC pattern",
    meta: "Patterns I keep coming back to",
    dummy: true,
  },
  {
    cat: "React",
    title: "Componentizing dashboards without losing your mind",
    meta: "How I structure large React apps",
    dummy: true,
  },
  {
    cat: "DevOps",
    title: "Docker + CI/CD for solo developers",
    meta: "A pragmatic setup that scales",
    dummy: true,
  },
];

/** DUMMY — placeholder personal essays */
export const personalWriting = [
  {
    cat: "psychology",
    title: "Why curiosity beats motivation, every time",
    meta: "On staying interested for the long run",
    dummy: true,
  },
  {
    cat: "philosophy",
    title: "What being a Gold Medalist taught me about luck",
    meta: "Effort, timing, and the stories we tell ourselves",
    dummy: true,
  },
  {
    cat: "life",
    title: "Notes from Rajkot — building a global career from a small city",
    meta: "On distance, ambition, and home",
    dummy: true,
  },
  {
    cat: "books",
    title: "5 non-fiction books that rewired how I work",
    meta: "Recommendations I actually use",
    dummy: true,
  },
];

/** DUMMY — placeholder gallery */
export const galleryItems = [
  { label: "Marwadi University", color: "var(--color-primary)", tall: true },
  { label: "Hackathon · CCTV demo", color: "oklch(0.55 0.15 30)" },
  { label: "Christ College — Gold Medal", color: "oklch(0.55 0.15 60)" },
  { label: "ez enRoute office", color: "oklch(0.45 0.1 240)" },
  { label: "Code retreat", color: "oklch(0.4 0.12 270)" },
  { label: "Rajkot evening", color: "oklch(0.5 0.13 20)", tall: true },
  { label: "Open mic night", color: "oklch(0.45 0.12 320)" },
  { label: "Side project shipped", color: "oklch(0.45 0.13 160)" },
];

/** DUMMY — unsung legends in tech */
export const legends = [
  {
    initials: "EF",
    name: "Elizabeth Feinler",
    what: "Ran the original internet host directory at SRI International — basically the first DNS before DNS even existed.",
    era: "1970s – 1989 · SRI International",
  },
  {
    initials: "BF",
    name: "Bob Frankston",
    what: "Co-created VisiCalc, the first spreadsheet — the single application that made personal computers commercially viable.",
    era: "1979 · Software Arts",
  },
  {
    initials: "JS",
    name: "Jean Sammet",
    what: "IBM language designer instrumental in developing COBOL, and one of the first women elected an ACM Fellow.",
    era: "1960s – 1980s · IBM",
  },
  {
    initials: "RP",
    name: "Radia Perlman",
    what: "Invented the Spanning Tree Protocol that makes Ethernet networks self-healing. Called the 'mother of the internet'.",
    era: "1985 · DEC",
  },
];

/** DUMMY — currently */
export const currently = {
  reading: "Designing Data-Intensive Applications",
  watching: "Silicon Valley (rewatch)",
  listening: "Lo-fi · Indian classical fusion",
  building: "This portfolio site",
};

export const interests = [
  "psychology",
  "writing",
  "travel",
  "blogs",
  "vlogs",
  "AI",
  "Dance",
];
