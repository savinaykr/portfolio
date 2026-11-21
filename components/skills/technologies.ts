import type { ComponentType } from "react";
import {
  Bot,
  BookOpen,
  Search,
  FlaskConical,
  ShieldCheck,
  GitBranch,
  KeyRound,
  Network,
  Cable,
  Router,
} from "lucide-react";

// Real brand icons (devicons): only used where an accurate logo exists.
import GoOriginal from "devicons-react/lib/icons/GoOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";
import NodejsOriginal from "devicons-react/lib/icons/NodejsOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import NextjsOriginal from "devicons-react/lib/icons/NextjsOriginal";
import PostgresqlOriginal from "devicons-react/lib/icons/PostgresqlOriginal";
import RedisOriginal from "devicons-react/lib/icons/RedisOriginal";
import GraphqlPlain from "devicons-react/lib/icons/GraphqlPlain";
import GrpcOriginal from "devicons-react/lib/icons/GrpcOriginal";
import ApachekafkaOriginal from "devicons-react/lib/icons/ApachekafkaOriginal";
import NatsOriginal from "devicons-react/lib/icons/NatsOriginal";
import DockerOriginal from "devicons-react/lib/icons/DockerOriginal";
import KubernetesOriginal from "devicons-react/lib/icons/KubernetesOriginal";
import TerraformOriginal from "devicons-react/lib/icons/TerraformOriginal";
import AmazonwebservicesOriginalWordmark from "devicons-react/lib/icons/AmazonwebservicesOriginalWordmark";
import GooglecloudOriginal from "devicons-react/lib/icons/GooglecloudOriginal";
import GrafanaOriginal from "devicons-react/lib/icons/GrafanaOriginal";
import FlutterOriginal from "devicons-react/lib/icons/FlutterOriginal";
import DartOriginal from "devicons-react/lib/icons/DartOriginal";

export type DeviconType = ComponentType<{ size?: number; className?: string }>;

export interface Tech {
  name: string;
  description: string;
  /** Accurate brand icon. Omit when no real logo exists; a monogram is shown instead. */
  icon?: DeviconType;
  /** Local, licensed SVG brand artwork. No runtime icon CDN. */
  image?: string;
  /** White treatment for monochrome marks on this site's dark background. */
  imageClassName?: string;
  iconClassName?: string;
  /** Monogram label used when there's no brand icon (keeps the grid consistent, never a wrong logo). */
  mono?: string;
  /** Tint (HSL hue, sat%, light%) for the monogram chip. */
  tint?: string;
}

export interface SkillGroup {
  category: string;
  blurb: string;
  items: Tech[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Models & LLM Stack",
    blurb: "Model APIs, gateways, managed access, and inference serving.",
    items: [
      {
        name: "OpenAI / GPT",
        image: "/logos/openai.svg",
        imageClassName: "brightness-0 invert",
        description:
          "GPT/OpenAI API integration in applications and enterprise agent workflows.",
      },
      {
        name: "Claude",
        image: "/logos/claude.svg",
        description:
          "Claude API integration in applications and enterprise agent workflows.",
      },
      {
        name: "Gemini",
        image: "/logos/gemini.svg",
        description:
          "Multimodal product features including media analysis, autofill, and liveness checks.",
      },
      {
        name: "Amazon Bedrock",
        image: "/logos/bedrock.svg",
        description:
          "Managed model access and application integration in current AI engineering work.",
      },
      {
        name: "Portkey",
        icon: Router,
        description:
          "AI gateway used in application and enterprise model integrations.",
      },
      {
        name: "LiteLLM",
        icon: Cable,
        description: "Unified model API access and integration tooling.",
      },
      {
        name: "vLLM",
        image: "/logos/vllm.svg",
        description:
          "LLM inference serving used in current AI engineering work.",
      },
      {
        name: "Ollama",
        image: "/logos/ollama.svg",
        imageClassName: "brightness-0 invert",
        description:
          "Model runtime and application integration used in current AI engineering work.",
      },
    ],
  },
  {
    category: "Applied AI",
    blurb:
      "Agentic systems, retrieval, evaluation, and reliable AI applications.",
    items: [
      {
        name: "AI Agents",
        icon: Bot,
        description:
          "Multi-agent orchestration across concierge and product-domain agents.",
      },
      {
        name: "RAG",
        icon: BookOpen,
        description:
          "Retrieval-grounded applications and knowledge assistants.",
      },
      {
        name: "Vector Search",
        icon: Search,
        description: "Embeddings, pgvector-based feed ranking, and retrieval.",
      },
      {
        name: "LLM Evaluation",
        icon: FlaskConical,
        description: "Testing and evaluation of enterprise agent workflows.",
      },
      {
        name: "Guardrails",
        icon: ShieldCheck,
        description:
          "Lending guardrails, deterministic data, and off-topic handling.",
      },
      {
        name: "MCP",
        image: "/logos/mcp.svg",
        imageClassName: "brightness-0 invert",
        description:
          "MCP tools and AI coding assistants used during development.",
      },
    ],
  },
  {
    category: "Languages & APIs",
    blurb: "Services, integration contracts, and application development.",
    items: [
      {
        name: "Python",
        icon: PythonOriginal,
        description: "AI services, agent development, testing, and evaluation.",
      },
      {
        name: "Go",
        icon: GoOriginal,
        description:
          "Microservices, backend systems, and AI services integration.",
      },
      {
        name: "TypeScript",
        icon: TypescriptOriginal,
        description: "Enterprise automation, services, and frontends.",
      },
      {
        name: "JavaScript",
        icon: JavascriptOriginal,
        description: "Web applications and Node.js services.",
      },
      {
        name: "Node.js",
        icon: NodejsOriginal,
        description: "Backend APIs and real-time applications.",
      },
      {
        name: "gRPC",
        icon: GrpcOriginal,
        description: "ConnectRPC/gRPC APIs and Protobuf service contracts.",
      },
      {
        name: "REST APIs",
        icon: Network,
        description: "Application APIs, service integration, and data access.",
      },
      {
        name: "GraphQL",
        icon: GraphqlPlain,
        description: "GraphQL application APIs and query optimization.",
      },
    ],
  },
  {
    category: "Distributed systems & data",
    blurb: "Messaging, durable workflows, storage, and caching.",
    items: [
      {
        name: "Temporal",
        mono: "Tp",
        description: "Durable enterprise network-automation workflows.",
      },
      {
        name: "NATS",
        icon: NatsOriginal,
        description: "NATS JetStream messaging and transactional outboxes.",
      },
      {
        name: "Kafka",
        icon: ApachekafkaOriginal,
        iconClassName: "brightness-0 invert",
        description: "Parallel telemetry processing and service messaging.",
      },
      {
        name: "PostgreSQL",
        icon: PostgresqlOriginal,
        description: "Relational data, pgvector, and PostGIS.",
      },
      {
        name: "Redis",
        icon: RedisOriginal,
        description: "Caching, TTLs, and application performance.",
      },
    ],
  },
  {
    category: "Cloud & Deployment",
    blurb: "Infrastructure from design through deployment and employee access.",
    items: [
      {
        name: "AWS",
        icon: AmazonwebservicesOriginalWordmark,
        iconClassName: "brightness-0 invert",
        description:
          "Cloud infrastructure and video processing with Lambda and MediaConvert.",
      },
      {
        name: "GCP",
        icon: GooglecloudOriginal,
        description: "Cloud infrastructure, GKE, and AI/ML workloads.",
      },
      {
        name: "Kubernetes",
        icon: KubernetesOriginal,
        description: "Cloud and on-premises application deployments.",
      },
      {
        name: "Docker",
        icon: DockerOriginal,
        description: "Containerized application builds and deployments.",
      },
      {
        name: "Terraform",
        icon: TerraformOriginal,
        description: "Infrastructure provisioning across cloud providers.",
      },
      {
        name: "CI/CD",
        icon: GitBranch,
        description: "GitOps, Jenkins, and automated application delivery.",
      },
      {
        name: "Grafana",
        icon: GrafanaOriginal,
        description:
          "Metrics, logs, and dashboards with Grafana, Loki, and Prometheus.",
      },
      {
        name: "SSO",
        icon: KeyRound,
        description: "Employee authentication and single sign-on at Neosenth.",
      },
      {
        name: "VPN",
        icon: ShieldCheck,
        description:
          "Internal resource access at Neosenth; WireGuard and OpenVPN at Zeliot.",
      },
    ],
  },
  {
    category: "Frontend & mobile",
    blurb: "Interfaces for shipped web and mobile products.",
    items: [
      {
        name: "React",
        icon: ReactOriginal,
        description: "Frontend application development.",
      },
      {
        name: "Next.js",
        icon: NextjsOriginal,
        description: "React web applications.",
      },
      {
        name: "Flutter",
        icon: FlutterOriginal,
        description: "ViHi clients for iOS and Android.",
      },
      {
        name: "Dart",
        icon: DartOriginal,
        description: "Flutter application development.",
      },
    ],
  },
];

// Flat lookup kept for components that reference a technology by name (e.g. ProjectCard).
export const technologies: Tech[] = [
  ...skillGroups.flatMap((group) => group.items),
  // Precise project technology labels retain their broader skill's artwork.
  {
    name: "pgvector",
    icon: Search,
    description: "Vector search and embeddings inside PostgreSQL.",
  },
  {
    name: "NATS JetStream",
    icon: NatsOriginal,
    description: "Durable event-driven messaging with transactional outboxes.",
  },
  {
    name: "Multi-agent workflows",
    icon: Bot,
    description: "Multi-agent coordination and orchestration.",
  },
  {
    name: "LLM evaluation",
    icon: FlaskConical,
    description: "Agent workflow testing and evaluation.",
  },
];
