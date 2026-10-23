import type { StringLiteral } from "typescript";

type Profile = {
    name: string;
    location: string;
    introduction: string;
    email?: string;
    github?: string;
    linkedin?: string;
    cv?: string;
};

export const profile: Profile = {
    name: "Tristan Kriel",
    location: "Cape Town, South Africa",
    introduction: "Application Development student working with C#/.NET, Azure, and SQL. " +
    "I enjoy designing how systems work and how people experience them.",
    email: "krieltristan68@gmail.com",
    github: "TrstnDev",
    linkedin: "?N/A",

    // Enable after placing CV in the public folder
    // cv: "/tristan-kriel-cv.pdf",
};

export type Project = {
    number: string;
    slug: string;
    title: string;
    category: string;
    summary: string;
    role: string;
    technologies: string[];
    contributions: string[];
    context: string;
    tone: "olive" | "rust";
    image?: {
        src: string;
        alt: string;
    };
    repository?: string;
    demo?: string:
};

export const projects: Project[] = [
    {
        number: "01",
        slug: "spacesync",
        title: "SpaceSync",
        category: "Web application",
        summary: "A venue and event booking application with management workflows, search, availability queries and booking validation.",
        role: "Application development and interface design",
        technologies: [
            "C#",
            "ASP.NET Core MVC",
            "EF Core",
            "SQL Server",
            "Azure Blob Storage",
        ],
        contributions: [
            "Developed venue, event and booking management workflows.",
            "Implemented search, filtering and application-level booking checks.",
            "Integrated Identity authentication, image storage and a custom interface.",
        ],
        context: "Academic project with historical Azure deployment evidence.",
        tone: "olive",
    },
    {
        number: "02",
        slug: "coffeenchill",
        title: "CoffeeNChill",
        category: "Cloud backend",
        summary: "An academic team backend supporting menu management, documents and asynchronous order processing.",
        role: "Order producer, validation, tests and runtime integration",
        technologies: [
            "C#",
            "Azure Functions",
            "Queue Storage",
            "xUnit",
            "Docker",
        ],
        contributions: [
            "Implemented the order-submission endpoint and queue publishing.",
            "Added strict validation, payload limits and boundary/failure tests.",
            "Contributed container configuration, CI checks and release documentation.",
        ],
        context: "Academic group project in progress. Other backend components were developed by teammates.",
        tone: "rust",
    },
    {
       number: "03",
        slug: "airport-crms",
        title: "Airport CRMS",
        category: "Systems analysis and UX",
        summary: "A software concept exploring airport information, navigation and passenger-facing interface design.",
        role: "Requirements, data modelling and interface design",
        technologies: [
            "Figma", 
            "Sketch", 
            "Wireframes", 
            "User flows", 
            "ER modelling"
        ],
        contributions: [
            "Defined scope, stakeholders and functional/non-functional requirements.",
            "Developed wireframes and detailed flight-information mockups.",
            "Documented navigation, typography, colour and icon guidelines.",
        ],
        context: "Academic concept and design assignment.",
        tone: "olive", 
    },
    {
        number: "04",
        slug: "office-network",
        title: "Office Network",
        category: "Network design and simulation",
        summary: "A modelled office network for a 30-employee scenario across three departments.",
        role: "Network modelling, addressing and technical documentation",
        technologies: [
            "Cisco Packet Tracer", 
            "IPv4", 
            "ACLs", 
            "NAT", 
            "Visio"
        ],
        contributions: [
            "Planned topology, departmental subnets and infrastructure addressing.",
            "Recorded simulated connectivity, access-control and service tests.",
            "Produced logical diagrams, physical layouts and cabling recommendations.",
        ],
        context: "Academic simulation in Cisco Packet Tracer.",
        tone: "rust",
    },
];
