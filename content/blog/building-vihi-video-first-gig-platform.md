---
title: "Building ViHi: A Video-First Gig Platform"
updated: "2026-11-21"
excerpt: "A retrospective on building ViHi at Neosenth: Flutter clients, Go services, Gemini features, and the infrastructure and employee access systems behind the product."
slug: "building-vihi-video-first-gig-platform"
---

From May to August 2026, I co-founded **Neosenth** and led engineering for **ViHi**, a video-first marketplace for local services and gigs. We launched on iOS and Android with support for **10 Indian locales**. This retrospective covers the product, AI features, backend, and infrastructure I helped bring together.

## Why video-first?

Text and photos do not always communicate the full context of a job. A short video can help someone explain what needs attention and give a service professional a clearer picture before responding.

The product brought that interaction into a mobile marketplace: share a request, discover relevant services and gigs, and connect with professionals. Building it required coordinating mobile clients, media processing, backend services, and AI-assisted features.

## Architecture and tech stack

I led architecture and development across **15+ Go microservices** and **Python AI services**. **Protobuf** and **ConnectRPC** defined the service contracts; **NATS JetStream**, paired with **transactional outboxes**, supported reliable messaging between services.

### Backend and data

- **APIs and services (Go, Protobuf, ConnectRPC/gRPC)**. Typed APIs and service-to-service contracts
- **Data (PostgreSQL)**. Application data and relational queries
- **Ranking (pgvector)**. Embedding-based feed ranking with a deterministic fallback
- **Events (NATS JetStream and transactional outboxes)**. Reliable service messaging
- **AI services (Python and Gemini)**. Media analysis, form autofill, and liveness checks

A transactional outbox keeps a service's data change and the record of its intended event in the same database transaction. Publishing can then be retried independently. Consumers still need to handle duplicate delivery; the outbox does not remove that responsibility.

### Mobile and AI features

**Flutter** and **Dart** provided the shared foundation for the iOS and Android apps. The AI features focused on specific product tasks: Gemini-powered media analysis, form autofill, and liveness checks, alongside feed ranking using pgvector embeddings.

The ranking service included a **deterministic fallback**. That gave the product a defined behavior when embedding-based ranking was unavailable or unsuitable, rather than making the whole experience depend on one AI path.

## Infrastructure and employee access

I initiated and took end-to-end responsibility for the infrastructure used to deploy the product. That included **AWS** and **Google Cloud**, with **GCP supporting AI and ML workloads**, and containerized deployment using **Docker** and **Kubernetes**.

**Terraform** supported infrastructure provisioning, **FluxCD** supported Kubernetes delivery, and observability helped monitor the deployed services. The wider platform also used **Cloudflare**. Video processing used **AWS Lambda** and **AWS Elemental MediaConvert**.

Employee access was part of the same responsibility. I implemented **employee authentication and single sign-on (SSO)**, together with **VPN access to internal resources**. These systems supported the people developing and operating the product as well as the workloads themselves.

## Keeping the service contracts explicit

The following simplified pseudocode illustrates a typed request at a ranking boundary. It is an architectural example, not a listing of ViHi's internal implementation:

```go
type FeedRequest struct {
    UserID string `json:"user_id"`
    Limit  int    `json:"limit"`
}

func RankFeed(ctx context.Context, req FeedRequest) ([]FeedItem, error) {
    // Retrieve candidates, rank using embeddings, and apply a
    // deterministic fallback when the embedding path is unavailable.
}
```

Clear contracts make it easier to evolve the mobile client, backend, and AI services independently. Infrastructure provisioning, release workflows, monitoring, and employee access need the same attention as the visible product features.

ViHi gave me responsibility across those layers: from the mobile experience and AI capabilities to the services, deployment infrastructure, and access systems behind them.

You can connect with me through [savinaykumar.com](https://savinaykumar.com) or learn more about [Neosenth](https://neosenth.com).

![Savinay Kumar at Neosenth](/savinay-wall.jpg)
