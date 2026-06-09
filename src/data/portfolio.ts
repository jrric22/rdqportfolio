import { LiaLinkedin } from "react-icons/lia";

export interface NavItem {
    label: string;
    href: string;
}


export interface Skill {
    name: string;
    level: number;
    category: string;
}


export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    tech: string[]
    current: boolean;
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    type: string;
    highlights: string[];
    featured: boolean;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
}


export const navItems: NavItem[] = [
    {label: 'Home', href: '#home'},
    {label: 'About', href: '#about'},
    {label: 'Skills', href: '#skills'},
    {label: 'Experience', href: '#experience'},
    {label: 'Projects', href: '#projects'},
    {label: 'Contact', href: '#contact'},
]


export const personal = {
    name: "Ricardo De Quiroz Jr",
    nickname: 'Ric',
    title: 'Junior Software Engineer',
    tagline: 'Building full-stack experience that are fast, reliable and clean',
    location: 'Philippines',
    email: 'ricardodequiroz22@gmail.com',
    github: 'https://github.com/jrric22',
    linkedin: 'https://www.linkedin.com/in/ricardo-de-quiroz-jr-524711294/',
    age: 25,
    degree: "Bachelor of Science in Information Technology",
    university: 'STI College Bacoor',
    bio: [
        "I'm a 25-year-old BSIT graduate and Junior Software Engineer based in the Philippines with hands-on experience building and enhancing real-world systems used in production.",
        "At Microsource Inc., I worked on a construction management platform — implementing React + TypeScript frontends, full-stack features with Remix, and database operations with PostgreSQL and Prisma. I care deeply about clean architecture, type safety, and building things that just work.",
        "I'm driven by the satisfaction of shipping solid, maintainable code and constantly sharpening my craft — whether that's diving deeper into backend systems, exploring new frontend patterns, or contributing to team-driven development.",
      ],
}

export const skills: Skill[] = [
    {name: 'React.js', level: 85, category: 'Frontend'},
    {name: 'Typescript', level: 75, category: 'Frontend'},
    {name: 'Tailwind CSS', level: 80, category: 'Frontend'},
    {name: 'JavaScript', level: 70, category: 'Frontend'},

    {name: 'Remix (RR v7)', level: 75, category: 'Fullstack'},
    {name: 'Node.Js', level: 75, category: 'Fullstack'},
    {name: 'REST APIs', level: 70, category: 'Fullstack'},

    {name: 'PostgreSQL', level: 70, category: 'Database'},
    {name: 'Prisma ORM', level: 65, category: 'Database'},

    {name: 'Zod', level: 78, category: 'Tools'},
    {name: 'Git & Github', level: 80, category: 'Tools'},
    {name: "VS code", level: 90, category: 'Tools'},
    {name: "Vite", level: 75, category: 'Tools'} ,   
]

export const experiences: Experience[] = [
    {company: "Microsource Inc.", 
        role: "Junior Software Engineer", 
        period: "Jan 2025 - Present", 
        location: "Quezon City, Philippines (Hybrid)", 
        current: false,
        description: "Worked on a construction management platform — implementing React + TypeScript frontends, full-stack features with Remix, and database operations with PostgreSQL and Prisma.", 
        achievements:  ["Collaborated with a local development team to build and enhance a cobstruction management system with modules such as dashboard, expenses, timekeeping, suppliers, and reporting.","Implemented responsive UI components using React.Js, TypeScript, and Tailwind CSS ensuring cross-device compatibility and clean user experience."],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Remix", "PostgreSQL", "Prisma ORM", "Zod", "Git"],
    }
]

export const projects: Project[] = [
    {
    title: "Eirish Builders Supply Inc. Construction Management System",  
    description: "A comprehensive full-stack platform for managing construction projects, handling modules for dashboard analytics, expense tracking, employee timekeeping, supplier management, and financial reporting.", 
    featured: true, 
    highlights: ["Multi-module architecture with role-based views",
      "Real-time dashboard with expense and project tracking",
      "Zod-validated forms for data integrity",
      "PostgreSQL + Prisma ORM for type-safe database operations",], 
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    type: "Full-Stack"
    }
]

export const socialLinks: SocialLink[] = [
    { label: "GitHub",   href: 'https://github.com/jrric22',        icon: "github" },
    { label: "LinkedIn", href: 'https://www.linkedin.com/in/ricardo-de-quiroz-jr-524711294/',   icon: "linkedin" },
    { label: "Email",    href: "mailto:ricardodequirozjr@gmail.com",           icon: "email" },
  ];