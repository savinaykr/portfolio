export default function AboutCard() {
  return (
    <div className="space-y-5 text-base leading-7 text-gray-300 [&_strong]:font-medium [&_strong]:text-gray-100">
      <p>
        I’m a{" "}
        <strong>Senior AI Engineer at Commonwealth Bank of Australia</strong>,
        building conversational workflows for Companion, the bank’s AI agent. My
        work combines multi-agent coordination, guardrails, evaluation, and the
        engineering needed to move a customer from a conversation through an
        application.
      </p>
      <p>
        Previously, I co-founded <strong>Neosenth</strong> and helped bring ViHi
        to iOS and Android. I led its engineering across AI features,
        event-driven Go services, employee SSO and VPN access, and the complete
        AWS/GCP deployment infrastructure. At Lumen, I worked on enterprise
        network automation and a RAG assistant for operational troubleshooting.
      </p>
      <p>
        I’ve led architecture and delivery for{" "}
        <strong>6+ engineers at Zeliot</strong> and initiated infrastructure
        projects used across the company. I enjoy taking a problem from
        requirements and design through implementation, rollout, and the
        improvements that follow real use.
      </p>
    </div>
  );
}
