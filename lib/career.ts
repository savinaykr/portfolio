export interface ExperienceRole {
  company: string;
  shortName?: string;
  role: string;
  dates: string;
  current?: boolean;
  summary: string;
}

export const roles: ExperienceRole[] = [
  {
    company: "Commonwealth Bank of Australia (CBA)",
    shortName: "Commonwealth Bank of Australia",
    role: "Senior AI Engineer · Contract",
    dates: "Aug 2026 – Present",
    current: true,
    summary: "I build AI agents and the systems they rely on. In Business Intelligence, I work with data scientists to connect agents to tools and data through APIs and the Model Context Protocol (MCP). Earlier, I built Companion’s business overdraft workflow and led the work on credit limit increases across concierge and product agents.",
  },
  {
    company: "Neosenth (Neosenth India Pvt. Ltd.)",
    shortName: "Neosenth",
    role: "Technical Lead & Co-Founder",
    dates: "May 2026 – Aug 2026",
    summary: "I co-founded the team behind ViHi and led product engineering, cloud deployments, and employee access across the company.",
  },
  {
    company: "Lumen (formerly CenturyLink)",
    shortName: "Lumen",
    role: "Senior Software Engineer (SDC-II)",
    dates: "Nov 2024 – May 2026",
    summary: "I worked on network automation and built a retrieval-based assistant that helped engineers investigate production logs.",
  },
  {
    company: "Zeliot (Zeliot Connected Services Pvt. Ltd.)",
    role: "Senior Software Engineer (Team Lead)",
    dates: "Mar 2023 – Dec 2024",
    summary: "I led an engineering team building fleet software and introduced company-wide VPN access to development and production resources.",
  },
  {
    company: "Simulation Software and Technology (S2T)",
    role: "Software Engineer",
    dates: "Sep 2021 – Feb 2023",
    summary: "I built investigation tools and internal profile management software and led a migration from Docker Swarm to Kubernetes.",
  },
  {
    company: "Career Capsule (BetaBrains Pvt. Ltd.)",
    role: "Technical Lead / Co-Founder",
    dates: "Feb 2019 – Apr 2021",
    summary: "I co-founded an education startup and led development of its live classroom and release infrastructure.",
  },
];

export const featuredWork = [
  {
    id: "companion", label: "Companion · Commonwealth Bank of Australia", title: "Building an overdraft application for Companion",
    summary: "Companion is the bank’s AI agent and is now available to customers. I built its business overdraft application workflow.",
    tools: ["Python", "Multi-agent workflows", "Guardrails"],
    story: [
      "A customer might ask an unrelated question midway through an overdraft application. I implemented the multi-step flow for Companion, including off-topic handling, disclosures, credit checks, and deterministic application data.",
      "I built the overdraft flow for the earlier Companion v2 pilot. The bank has since released Companion to customers. For credit limit increases, I led the integration between concierge and product agents from a relevant offer or direct request through the application.",
    ],
  },
  {
    id: "sml-saarthi", label: "SML Saarthi · Zeliot", title: "Why fuel-theft alerts were falling behind",
    summary: "I traced delayed alerts to repeated database reads and rebuilt how the fuel-monitoring service processed vehicle data.",
    tools: ["Kafka", "Stream processing", "Database transactions"],
    story: [
      "Vehicles reported every ten seconds. As the customer prepared to onboard 50,000 vehicles, each theft check was rereading a full day of history.",
      "I replaced those scans with bounded queues of recent packets per vehicle, parallelized Kafka processing, and grouped writes into transactions. The pipeline kept up with incoming packets and alerts became reliable again.",
    ],
  },
  {
    id: "vihi", label: "ViHi · Neosenth", title: "How we ran ViHi and gave the team access",
    summary: "I built the deployment platform for our mobile marketplace and set up how employees signed in and accessed internal services.",
    tools: ["AWS", "Google Cloud", "Kubernetes", "SSO", "VPN"],
    story: [
      "A seller could use a photo to start a listing. I built AI-assisted autofill into ViHi and led engineering through launch on iOS and Android in ten Indian locales.",
      "I also built the AWS and Google Cloud deployment infrastructure, including Kubernetes, and implemented employee single sign-on and VPN access to internal services.",
    ],
  },
];

export const projects = [
  {
    title: "Enterprise knowledge & automation",
    category: "Lumen · Employer work",
    description:
      "Built a RAG assistant that analyzes production logs and suggests fixes using internal documentation. Delivered Colorless and Intent-Based Networking automation with Temporal and Itential, working across network, platform, and product teams.",
    technologies: ["RAG", "TypeScript", "Temporal", "Itential"],
    highlighted: false,
  },
  {
    title: "Avarta Life",
    category: "Personal project · Google Gemini AI Challenge",
    description:
      "A smart-recycling assistant exploring how Gemini and location-aware guidance can help people recycle and reuse materials.",
    technologies: ["Gemini", "Next.js", "Flutter", "FastAPI"],
    github: "https://github.com/orgs/Avarta-Life/repositories",
    highlighted: false,
  },
];
