import type { ComponentType } from "react";

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
    category: "Applied AI",
    blurb:
      "Customer-facing agents, retrieval, evaluation, and AI product features.",
    items: [
      {
        name: "Multi-agent workflows",
        mono: "AI",
        description: "Coordination across concierge and product-domain agents.",
      },
      {
        name: "RAG",
        mono: "RAG",
        description:
          "Retrieval-grounded applications and knowledge assistants.",
      },
      {
        name: "Guardrails & evaluation",
        mono: "Ev",
        description: "Guardrails, testing, and evaluation for agent workflows.",
      },
      {
        name: "Gemini",
        mono: "Gem",
        description: "Media analysis, form autofill, and liveness features.",
      },
      {
        name: "pgvector",
        mono: "pgv",
        description: "Embeddings and vector-based feed ranking.",
      },
      {
        name: "MCP tools",
        mono: "MCP",
        description: "MCP tools and coding agents used during development.",
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
        name: "ConnectRPC / gRPC",
        icon: GrpcOriginal,
        description: "Typed APIs and Protobuf service contracts.",
      },
      {
        name: "REST / GraphQL",
        icon: GraphqlPlain,
        description: "Application APIs and data access.",
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
        name: "NATS JetStream",
        icon: NatsOriginal,
        description: "Event-driven services with transactional outboxes.",
      },
      {
        name: "Kafka",
        icon: ApachekafkaOriginal,
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
    category: "Cloud, delivery & access",
    blurb: "Infrastructure from design through deployment and employee access.",
    items: [
      {
        name: "AWS",
        icon: AmazonwebservicesOriginalWordmark,
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
        name: "FluxCD / CI/CD",
        mono: "CD",
        description: "GitOps, Jenkins, and automated application delivery.",
      },
      {
        name: "Observability",
        icon: GrafanaOriginal,
        description:
          "Metrics, logs, and dashboards with Grafana, Loki, and Prometheus.",
      },
      {
        name: "Employee SSO",
        mono: "SSO",
        description: "Employee authentication and single sign-on at Neosenth.",
      },
      {
        name: "VPN",
        mono: "VPN",
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
export const technologies: Tech[] = skillGroups.flatMap((g) => g.items);
