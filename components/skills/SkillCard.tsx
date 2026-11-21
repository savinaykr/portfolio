export default function SkillCard() {
  return (
    <div className="space-y-5 text-base leading-7 text-gray-300 [&_strong]:font-medium [&_strong]:text-gray-100">
      <p>
        <strong>Applied AI</strong> is my focus: LLM applications and multi-agent
        systems, integrating <strong>GPT and Claude APIs</strong> and building
        Gemini-powered features with retrieval, evaluation, and guardrails.
      </p>
      <p>
        <strong>Backend and infrastructure</strong> bring that work into
        production: model gateways and serving, Python/Go/TypeScript services,
        and AWS/GCP deployments. I’ve also led infrastructure delivery,
        employee SSO, and VPN access.
      </p>
    </div>
  );
}
