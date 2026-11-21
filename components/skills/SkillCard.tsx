export default function SkillCard() {
  return (
    <div className="space-y-5 text-base leading-7 text-gray-300 [&_strong]:font-medium [&_strong]:text-gray-100">
      <p>
        <strong>Applied AI</strong> is the core of my current work: multi-agent
        workflows, RAG, guardrails, evaluation, and Gemini-powered product
        features. I also use coding agents and MCP tools during development.
      </p>
      <p>
        <strong>Backend and distributed systems</strong> are how I connect those
        features to real products: Python and Go services, APIs, durable
        workflows, event-driven messaging, and data stores.
      </p>
      <p>
        <strong>Infrastructure and access</strong> are part of that delivery.
        I’ve led cloud infrastructure builds and deployments, implemented
        employee authentication and SSO, and delivered company-wide VPN access
        to internal resources.
      </p>
    </div>
  );
}
