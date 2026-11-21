export interface ExperienceRole {
  company: string;
  role: string;
  dates: string;
  current?: boolean;
  points: string[];
  tech: string[];
}

export const roles: ExperienceRole[] = [
  {
    company: "Commonwealth Bank of Australia (CBA)",
    role: "Senior AI Engineer",
    dates: "Aug 2026 – Present",
    current: true,
    points: [
      "Built and led delivery of Business Overdraft applications for Companion, the bank’s AI agent, covering disclosures, credit checks, deterministic data, and off-topic questions. Helped roll out the workflow in the selected-customer Companion v2 pilot.",
      "Develop multi-agent credit limit increase journeys with concierge and product agents, working with Product, Governance, and Business Intelligence. Led two epics as pod lead and co-delivered three earlier epics.",
      "Contributed to Guardrail as a Service improvements that reduced request-to-response time from 20 seconds to 3 seconds. Develop, test, and evaluate agent workflows in Python and Go.",
    ],
    tech: ["Agentic AI", "Python", "Go", "Guardrails", "Evaluation"],
  },
  {
    company: "Neosenth (Neosenth India Pvt. Ltd.)",
    role: "Technical Lead & Co-Founder",
    dates: "May 2026 – Aug 2026",
    points: [
      "Co-founded Neosenth and led ViHi from architecture to launch on iOS and Android in 10 Indian locales. Built Gemini features and pgvector feed ranking alongside 15+ Go microservices and Python AI services.",
      "Initiated and delivered employee authentication, single sign-on, and VPN access to internal resources, with full responsibility from design through implementation.",
      "Led the complete infrastructure build across AWS and Google Cloud, including AI/ML workloads on GCP, Docker and Kubernetes deployments, Terraform, FluxCD, and observability. Built the video pipeline with AWS Lambda and MediaConvert.",
    ],
    tech: ["Gemini", "Go", "NATS JetStream", "AWS", "GCP", "SSO / VPN"],
  },
  {
    company: "Lumen (formerly CenturyLink)",
    role: "Senior Software Engineer (SDC-II)",
    dates: "Nov 2024 – May 2026",
    points: [
      "Led Colorless and Intent-Based Networking delivery for the Network as a Service platform, translating requirements into production automation with TypeScript, Temporal, and Itential.",
      "Built an internal RAG assistant to analyze production logs and suggest fixes grounded in documentation. Improved Jenkins delivery workflows and secure credential handling.",
    ],
    tech: ["RAG", "TypeScript", "Temporal", "Itential"],
  },
  {
    company: "Zeliot (Zeliot Connected Services Pvt. Ltd.)",
    role: "Senior Software Engineer (Team Lead)",
    dates: "Mar 2023 – Dec 2024",
    points: [
      "Led architecture, design reviews, and delivery for 6+ engineers. Restored reliable fuel-theft alerts during a rollout targeting 50,000 vehicles by parallelizing Kafka processing and replacing full-day database scans with bounded per-vehicle queues.",
      "Initiated and fully delivered a company-wide VPN using WireGuard and OpenVPN for access to internal development and production resources.",
      "Improved APIs and dashboards with Redis caching and pagination, introduced automated deployments, and built computer-vision and GenAI/RAG product features.",
    ],
    tech: ["Kafka", "Node.js", "Redis", "WireGuard", "OpenVPN"],
  },
  {
    company: "Simulation Software and Technology (S2T)",
    role: "Software Engineer",
    dates: "Sep 2021 – Feb 2023",
    points: [
      "Built frontend and backend features for cyber-intelligence products and an internal profile-data application with rate limiting and geographic boundary controls.",
      "Led the Docker Swarm-to-Kubernetes migration and on-premises deployments. Improved legacy data access, fault tolerance, and background ingestion pipelines.",
    ],
    tech: ["Full-stack", "WEBINT / OSINT", "Kubernetes"],
  },
  {
    company: "Career Capsule (BetaBrains Pvt. Ltd.)",
    role: "Technical Lead / Co-Founder",
    dates: "Feb 2019 – Apr 2021",
    points: [
      "Co-founded an education technology venture during undergraduate studies and led engineering from concept to launch.",
      "Built a WebRTC live-class platform supporting 100+ concurrent students in a session, with releases and Kubernetes deployments through Jenkins and Travis CI.",
    ],
    tech: ["WebRTC", "Kubernetes", "Jenkins", "Travis CI"],
  },
];

export const projects = [
  {
    title: "Companion lending journeys",
    category: "Commonwealth Bank of Australia · Employer work",
    description:
      "Conversational lending with the bank’s AI agent: multi-step Business Overdraft applications, disclosures, credit checks, and off-topic handling. Led delivery and helped bring BOD into the selected-customer Companion v2 pilot; developing credit limit increase journeys across concierge and product agents.",
    technologies: [
      "Multi-agent workflows",
      "Python",
      "Go",
      "Guardrails",
      "LLM evaluation",
    ],
    highlighted: true,
  },
  {
    title: "ViHi",
    category: "Neosenth · Co-founder & technical lead",
    description:
      "Launched a Flutter marketplace on iOS and Android in 10 Indian locales. Built Gemini media analysis, autofill, liveness checks, and pgvector ranking on 15+ Go services. Took end-to-end responsibility for employee authentication, SSO, VPN access, and AWS/GCP infrastructure, including GCP AI/ML workloads and Docker/Kubernetes deployments.",
    technologies: [
      "Gemini",
      "Python",
      "Go",
      "pgvector",
      "NATS JetStream",
      "AWS",
      "GCP",
      "Kubernetes",
      "SSO / VPN",
    ],
    url: "https://vihi.now",
    highlighted: false,
  },
  {
    title: "Enterprise knowledge & automation",
    category: "Lumen · Employer work",
    description:
      "Built a RAG assistant that analyzes production logs and suggests fixes using internal documentation. Delivered Colorless and Intent-Based Networking automation with Temporal and Itential, working across network, platform, and product teams.",
    technologies: ["RAG", "TypeScript", "Temporal", "Itential"],
    highlighted: false,
  },
  {
    title: "SML Saarthi fuel monitoring",
    category: "Zeliot · Employer work",
    description:
      "Restored reliable fuel-theft alerting during a rollout targeting 50,000 vehicles reporting every 10 seconds. Improved the Kafka, processing, and data-access layers with parallel consumers, bounded per-vehicle queues, and transactional writes.",
    technologies: ["Kafka", "Node.js", "Redis", "GraphQL"],
    url: "https://pro.smlsaarthi.com",
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
